const CACHE_NAME = 'converter-v8';
const REPO_NAME = '/williegoodjob.github.io'; // 改成你的 repo 名稱
const PROJECT_TYPE = 'personal'; // 改成你的專案類型
const PROJECT_NAME = 'price_change'; // 改成你的專案名稱
const WEB_ROOT = `${REPO_NAME}/${PROJECT_TYPE}/${PROJECT_NAME}/`; // 網頁根目錄

const FILES_TO_CACHE = [
  `${WEB_ROOT}`,
  `${WEB_ROOT}index.html`,
  `${WEB_ROOT}calc.js`,
  `${WEB_ROOT}themeSW.js`,
  `${WEB_ROOT}manifest.json`,
  `${WEB_ROOT}sw.js`,
  `${WEB_ROOT}icons/icon-192.png`,
  `${WEB_ROOT}icons/icon-512.png`
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
        .catch(() => caches.match(`${WEB_ROOT}index.html`))
    );
  }
});