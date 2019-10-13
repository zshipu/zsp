/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/color/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/color/workbox-v4.3.1"});

importScripts(
  "/color/precache-manifest.4cc3426a9333559ee1beb1866bb4f516.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});

workbox.routing.registerRoute(/\.html$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"my-html-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 60, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"my-images-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 3600, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/\.js$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"my-js-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 3600, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
