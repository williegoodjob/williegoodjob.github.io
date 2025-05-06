const CACHE_NAME = 'converter-v7';
const REPO_NAME = '/williegoodjob.github.io'; // 改成你的 repo 名稱

const FILES_TO_CACHE = [
  `${REPO_NAME}/`,
  `${REPO_NAME}/index.html`,
  `${REPO_NAME}/calc.js`,
  `${REPO_NAME}/themeSW.js`,
  `${REPO_NAME}/manifest.json`,
  `${REPO_NAME}/sw.js`,
  `${REPO_NAME}/icons/icon-192.png`,
  `${REPO_NAME}/icons/icon-512.png`
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // 處理 GitHub Pages 的路徑
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
        .catch(() => caches.match(`${REPO_NAME}/index.html`))
    );
  }
});