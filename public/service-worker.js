if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LUjnumo6u5lY-DTZSbCzF/_buildManifest.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/LUjnumo6u5lY-DTZSbCzF/_ssgManifest.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.592450b17dde62cd3b4b.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.0aef9695673ee5c17c2c.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/main-0a15ec1dc037c6bb73d2.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/pages/_app-175d0c784e29496fae8f.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/pages/_error-b2e8d81a7624e665d650.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/pages/index-20b235ead62fe7491c0e.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/polyfills-3c2dd1c8f2498092d56a.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"LUjnumo6u5lY-DTZSbCzF"},{url:"/favicon.png",revision:"21ce8434e7837eadaf24ced2b03dd889"},{url:"/icons/body.svg",revision:"18605fdc494015a525f4371b41482be3"},{url:"/icons/close.svg",revision:"2404197d1ca6dc10c5479c015bae2f3e"},{url:"/icons/eye.svg",revision:"b85f2bb9620fcdab7ade4224f13379a8"},{url:"/icons/level-up.svg",revision:"7a547044b58e1d764b84be4ef7451179"},{url:"/icons/level.svg",revision:"298947622834f4453f39597afd8bc4a3"},{url:"/icons/levelup.svg",revision:"ec7f18718523d269b9da1ceb775c0a74"},{url:"/icons/twitter.svg",revision:"2e01537ffb20284536243a6e1c6a7f75"},{url:"/iconspwa/apple-icon-180.png",revision:"a9b3fa9bc7d80c69d1bbad596a2edece"},{url:"/iconspwa/apple-splash-1125-2436.jpg",revision:"654b1affa034f2c84b9aa443d56a2437"},{url:"/iconspwa/apple-splash-1136-640.jpg",revision:"59d0670442c75e7d53fb49a1329fa732"},{url:"/iconspwa/apple-splash-1170-2532.jpg",revision:"373841bd82f5a61fa2130ceaefcec5c0"},{url:"/iconspwa/apple-splash-1242-2208.jpg",revision:"362f22f5211db22ee2874a95659a0087"},{url:"/iconspwa/apple-splash-1242-2688.jpg",revision:"d686bea4acfb68fc464c297505be583f"},{url:"/iconspwa/apple-splash-1284-2778.jpg",revision:"b67849fd62af0de1394a807152b1d653"},{url:"/iconspwa/apple-splash-1334-750.jpg",revision:"146b3acb1c6911b7f0883e25ba8dd9da"},{url:"/iconspwa/apple-splash-1536-2048.jpg",revision:"516c7ce699314d9fcba37c84ffa79e39"},{url:"/iconspwa/apple-splash-1620-2160.jpg",revision:"34866c4ff5f9979427e7dc1485af9f1c"},{url:"/iconspwa/apple-splash-1668-2224.jpg",revision:"0e0a4a8f9e90a546b204fc86f2b5d4e5"},{url:"/iconspwa/apple-splash-1668-2388.jpg",revision:"ce1febc016a3e72aab65350f66d3b0c0"},{url:"/iconspwa/apple-splash-1792-828.jpg",revision:"c1673351ea82fa81a014f37e9bfb481f"},{url:"/iconspwa/apple-splash-2048-1536.jpg",revision:"9bd5982da21bbba6b6e1db9d80f269bf"},{url:"/iconspwa/apple-splash-2048-2732.jpg",revision:"ff44eb7ea347442a7fe6c970c14d49cc"},{url:"/iconspwa/apple-splash-2160-1620.jpg",revision:"e05b8a889a57f10d7df5c5f08254f48d"},{url:"/iconspwa/apple-splash-2208-1242.jpg",revision:"1ea6e1f93e155423162c493671e4ab41"},{url:"/iconspwa/apple-splash-2224-1668.jpg",revision:"06ad3cb6cf41336e6b55326af08e4601"},{url:"/iconspwa/apple-splash-2388-1668.jpg",revision:"8ed591e02624ee1932a84060c81ec34c"},{url:"/iconspwa/apple-splash-2436-1125.jpg",revision:"55f59b3827abfd8423a17246dfc1dc09"},{url:"/iconspwa/apple-splash-2532-1170.jpg",revision:"986e93ebaf3d4edab89e48bf879cecb5"},{url:"/iconspwa/apple-splash-2688-1242.jpg",revision:"71a63689f401b839f57722c44be574da"},{url:"/iconspwa/apple-splash-2732-2048.jpg",revision:"3d75d9a5b0fb5a15abe3b8da55ea869a"},{url:"/iconspwa/apple-splash-2778-1284.jpg",revision:"e938269302ea05cd21a8344393a2329d"},{url:"/iconspwa/apple-splash-640-1136.jpg",revision:"12a22650415c510390f147edc75bbcb6"},{url:"/iconspwa/apple-splash-750-1334.jpg",revision:"ee8be3bc4403af2c44541c46401cecd5"},{url:"/iconspwa/apple-splash-828-1792.jpg",revision:"2d1632f37becb2df07a8c2b31280bfcd"},{url:"/iconspwa/manifest-icon-192.png",revision:"43100ec576ae29443be2cac306f59131"},{url:"/iconspwa/manifest-icon-512.png",revision:"ece25db7cf6d9d48829624376e8f9013"},{url:"/logo-full.svg",revision:"0c1b6eb5cf2a1709ecafbf43c69353b6"},{url:"/manifest.json",revision:"703aeef41ecad1e680e7204ed48a2d18"},{url:"/notification.mp3",revision:"28dadfdff0c916fb9a80d665a37fe93f"},{url:"/sw.js",revision:"120b6caf609598e4655d16d2e4010822"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
