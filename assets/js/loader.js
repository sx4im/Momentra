// Loader functionality (robust)
document.addEventListener('DOMContentLoaded', function () {
  const loaderOverlay = document.getElementById('loader-overlay');
  const body = document.body;
  const MIN_VISIBLE_MS = 5000; // minimum time to avoid flash
  const MAX_WAIT_MS = 30000; // absolute max wait
  const startTs = Date.now();

  if (!loaderOverlay) return;

  // Lock scroll while loader visible
  body.classList.add('no-scroll');

  function hideLoader() {
    if (!loaderOverlay) return;
    loaderOverlay.classList.add('hidden');
    body.classList.remove('no-scroll');
    // Remove the loader from DOM after transition completes
    setTimeout(() => {
      loaderOverlay.style.display = 'none';
    }, 500); // Match CSS transition duration
  }

  // Promise that resolves when window 'load' fires
  const windowLoaded = new Promise((resolve) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', () => resolve(), { once: true });
  });

  // Promise that resolves when all <img> elements have finished loading
  function waitForImages() {
    const imgs = Array.from(document.images || []);
    if (imgs.length === 0) return Promise.resolve();
    const imgPromises = imgs.map((img) => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalWidth > 0) return resolve();
        const done = () => resolve();
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      });
    });
    return Promise.allSettled(imgPromises);
  }

  // Extract URLs from background-image property value
  function extractUrls(bg) {
    if (!bg || bg === 'none') return [];
    // background-image can contain multiple layers: url("a"), linear-gradient(...), url('b')
    // We only capture url(...) occurrences
    const urls = [];
    const regex = /url\(([^)]+)\)/g;
    let match;
    while ((match = regex.exec(bg)) !== null) {
      let u = match[1].trim().replace(/^['\"]/ , '').replace(/['\"]$/ , '');
      if (u && !u.startsWith('data:')) urls.push(u);
    }
    return urls;
  }

  // Promise that resolves when all CSS background images are preloaded (including ::before/::after)
  function waitForBackgroundImages() {
    const elements = Array.from(document.querySelectorAll('*'));
    const urls = new Set();
    for (const el of elements) {
      const cs = getComputedStyle(el);
      extractUrls(cs.backgroundImage).forEach((u) => urls.add(u));
      // pseudo elements
      const before = getComputedStyle(el, '::before');
      const after = getComputedStyle(el, '::after');
      extractUrls(before && before.backgroundImage).forEach((u) => urls.add(u));
      extractUrls(after && after.backgroundImage).forEach((u) => urls.add(u));
    }

    if (urls.size === 0) return Promise.resolve();

    const preloadPromises = Array.from(urls).map((u) => new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = u;
    }));

    return Promise.allSettled(preloadPromises);
  }

  // Race with a maximum timeout to prevent being stuck forever
  function withTimeout(p, ms) {
    return Promise.race([
      p,
      new Promise((resolve) => setTimeout(resolve, ms)),
    ]);
  }

  // Wait for both window load and images to settle
  (async function run() {
    try {
      await withTimeout(Promise.all([
        windowLoaded,
        waitForImages(),
        waitForBackgroundImages(),
      ]), MAX_WAIT_MS);
    } catch (e) {
      // ignore
    } finally {
      const elapsed = Date.now() - startTs;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      setTimeout(hideLoader, remaining);
    }
  })();
});
