if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const n=s=>a(s,r),f={module:{uri:r},exports:t,require:n};e[r]=Promise.all(i.map((s=>f[s]||n(s)))).then((s=>(c(...s),t)))}}define(["./workbox-50de5c5d"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/235-ac7218d040539a2c.js",revision:"ac7218d040539a2c"},{url:"/_next/static/chunks/347-b60627b356b2147b.js",revision:"b60627b356b2147b"},{url:"/_next/static/chunks/434-f52162ae1413965f.js",revision:"f52162ae1413965f"},{url:"/_next/static/chunks/564-b68a3cc8501d07c5.js",revision:"b68a3cc8501d07c5"},{url:"/_next/static/chunks/583-438fd49094ebb772.js",revision:"438fd49094ebb772"},{url:"/_next/static/chunks/641-2ea0a6b4846ba216.js",revision:"2ea0a6b4846ba216"},{url:"/_next/static/chunks/664-28e62e128d170f32.js",revision:"28e62e128d170f32"},{url:"/_next/static/chunks/767.542b43ee7f29dda1.js",revision:"542b43ee7f29dda1"},{url:"/_next/static/chunks/955-70695c536558b6d5.js",revision:"70695c536558b6d5"},{url:"/_next/static/chunks/995-60147bfb303a124a.js",revision:"60147bfb303a124a"},{url:"/_next/static/chunks/framework-ae4f43955bfa5ddc.js",revision:"ae4f43955bfa5ddc"},{url:"/_next/static/chunks/main-d18c9db3cf3e44d1.js",revision:"d18c9db3cf3e44d1"},{url:"/_next/static/chunks/pages/404-634e4c9e7d173f40.js",revision:"634e4c9e7d173f40"},{url:"/_next/static/chunks/pages/_app-9a53ec721113de48.js",revision:"9a53ec721113de48"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/about-60b4b1437c62a3c5.js",revision:"60b4b1437c62a3c5"},{url:"/_next/static/chunks/pages/become-seller-1c66cd308c86754f.js",revision:"1c66cd308c86754f"},{url:"/_next/static/chunks/pages/blog-search-d828ce98961c50b2.js",revision:"d828ce98961c50b2"},{url:"/_next/static/chunks/pages/blogs-e3c939e1733d82d4.js",revision:"e3c939e1733d82d4"},{url:"/_next/static/chunks/pages/blogs/blog-44b690a4eaf78cd0.js",revision:"44b690a4eaf78cd0"},{url:"/_next/static/chunks/pages/cart-07b1ac84dabd9a73.js",revision:"07b1ac84dabd9a73"},{url:"/_next/static/chunks/pages/category-by-blogs-ca30d7b66255f242.js",revision:"ca30d7b66255f242"},{url:"/_next/static/chunks/pages/checkout-355c23cb4e54a39b.js",revision:"355c23cb4e54a39b"},{url:"/_next/static/chunks/pages/contact-3174a96d57d51122.js",revision:"3174a96d57d51122"},{url:"/_next/static/chunks/pages/faq-22eafb9cbd209dc2.js",revision:"22eafb9cbd209dc2"},{url:"/_next/static/chunks/pages/flash-sale-bd903da47d3df31e.js",revision:"bd903da47d3df31e"},{url:"/_next/static/chunks/pages/forgot-password-25ce77fc40a1d5d7.js",revision:"25ce77fc40a1d5d7"},{url:"/_next/static/chunks/pages/index-9dcef9d35cbbdb25.js",revision:"9dcef9d35cbbdb25"},{url:"/_next/static/chunks/pages/login-7978b219aa0b7064.js",revision:"7978b219aa0b7064"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-5ecb3e08209f7b0c.js",revision:"5ecb3e08209f7b0c"},{url:"/_next/static/chunks/pages/pages-2f65e1fbfa1d4cd0.js",revision:"2f65e1fbfa1d4cd0"},{url:"/_next/static/chunks/pages/privacy-policy-a6455ec1c4d55a60.js",revision:"a6455ec1c4d55a60"},{url:"/_next/static/chunks/pages/products-3eb6f4fcd4eee536.js",revision:"3eb6f4fcd4eee536"},{url:"/_next/static/chunks/pages/products-compaire-1202ffb8f0eafa24.js",revision:"1202ffb8f0eafa24"},{url:"/_next/static/chunks/pages/profile-a977db047dbf8e20.js",revision:"a977db047dbf8e20"},{url:"/_next/static/chunks/pages/search-e2c6873dae44e288.js",revision:"e2c6873dae44e288"},{url:"/_next/static/chunks/pages/seller-products-5e959ca3f5234cad.js",revision:"5e959ca3f5234cad"},{url:"/_next/static/chunks/pages/seller-terms-condition-46047a3a7492eca8.js",revision:"46047a3a7492eca8"},{url:"/_next/static/chunks/pages/sellers-26cd40c98c51a156.js",revision:"26cd40c98c51a156"},{url:"/_next/static/chunks/pages/signup-3c4372169b9ab399.js",revision:"3c4372169b9ab399"},{url:"/_next/static/chunks/pages/single-product-a38fdb5d0b526b36.js",revision:"a38fdb5d0b526b36"},{url:"/_next/static/chunks/pages/terms-condition-06e438c7478d3e6b.js",revision:"06e438c7478d3e6b"},{url:"/_next/static/chunks/pages/tracking-order-92a65b7fcf286f4e.js",revision:"92a65b7fcf286f4e"},{url:"/_next/static/chunks/pages/verify-you-1883b2409cfa4549.js",revision:"1883b2409cfa4549"},{url:"/_next/static/chunks/pages/wishlist-7a87f8a9cbad43ba.js",revision:"7a87f8a9cbad43ba"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-16b214701aaa49aa.js",revision:"16b214701aaa49aa"},{url:"/_next/static/css/6be73394ef30c1d0.css",revision:"6be73394ef30c1d0"},{url:"/_next/static/css/7f47b9549bf34fb2.css",revision:"7f47b9549bf34fb2"},{url:"/_next/static/css/87043e133ac36b7e.css",revision:"87043e133ac36b7e"},{url:"/_next/static/mXGxjGr7JZZkCvuMGdlsB/_buildManifest.js",revision:"51c63b2932c57a86184d3db67ff6078e"},{url:"/_next/static/mXGxjGr7JZZkCvuMGdlsB/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/media/Inter-Black.dda85df2.ttf",revision:"dda85df2"},{url:"/_next/static/media/Inter-Bold.a4d688de.ttf",revision:"a4d688de"},{url:"/_next/static/media/Inter-ExtraBold.ddbcd400.ttf",revision:"ddbcd400"},{url:"/_next/static/media/Inter-ExtraLight.665aa47f.ttf",revision:"665aa47f"},{url:"/_next/static/media/Inter-Light.53fbc023.ttf",revision:"53fbc023"},{url:"/_next/static/media/Inter-Medium.8fdaf020.ttf",revision:"8fdaf020"},{url:"/_next/static/media/Inter-Regular.b85a5d42.ttf",revision:"b85a5d42"},{url:"/_next/static/media/Inter-SemiBold.7b1d4c41.ttf",revision:"7b1d4c41"},{url:"/_next/static/media/Inter-Thin.bfc02db0.ttf",revision:"bfc02db0"},{url:"/_next/static/media/Jost-Black.e56ef6f6.ttf",revision:"e56ef6f6"},{url:"/_next/static/media/Jost-Bold.c1d48d6e.ttf",revision:"c1d48d6e"},{url:"/_next/static/media/Jost-ExtraBold.238555d6.ttf",revision:"238555d6"},{url:"/_next/static/media/Jost-ExtraLight.aa19f1ff.ttf",revision:"aa19f1ff"},{url:"/_next/static/media/Jost-Light.7fa2b8a5.ttf",revision:"7fa2b8a5"},{url:"/_next/static/media/Jost-Medium.c86b7856.ttf",revision:"c86b7856"},{url:"/_next/static/media/Jost-Regular.f420374f.ttf",revision:"f420374f"},{url:"/_next/static/media/Jost-SemiBold.5b6dfd8e.ttf",revision:"5b6dfd8e"},{url:"/_next/static/media/Jost-Thin.80e4c164.ttf",revision:"80e4c164"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/assets/fonts/Inter-Black.ttf",revision:"97b1fa10bde5fca325e643f0e9e1c5c8"},{url:"/assets/fonts/Inter-Bold.ttf",revision:"2a14de21f3809a78ea601cef2b2fb61a"},{url:"/assets/fonts/Inter-ExtraBold.ttf",revision:"bc9a38d9fa4a0ee89d29aff74c2ac246"},{url:"/assets/fonts/Inter-ExtraLight.ttf",revision:"4399d9e58b5a5a13033d59d4831a629c"},{url:"/assets/fonts/Inter-Light.ttf",revision:"bd68bbe6f33671b4e0aff5e4e44511d2"},{url:"/assets/fonts/Inter-Medium.ttf",revision:"e5f18cb987385760e628a9671f975412"},{url:"/assets/fonts/Inter-Regular.ttf",revision:"851660f90f21dba5ec35b1765fdd426a"},{url:"/assets/fonts/Inter-SemiBold.ttf",revision:"a2c4e8821556fa8b48d943a39f9da10c"},{url:"/assets/fonts/Inter-Thin.ttf",revision:"5a53d5e09d390202234ede487e34de14"},{url:"/assets/fonts/Jost-Black.ttf",revision:"450a4ba59e725734dc6946876d5cdba4"},{url:"/assets/fonts/Jost-BlackItalic.ttf",revision:"aac27b5ec432d820bca6451eb0d50041"},{url:"/assets/fonts/Jost-Bold.ttf",revision:"693d37486a0eab3d822b5f6b185f11e0"},{url:"/assets/fonts/Jost-BoldItalic.ttf",revision:"a05fde51d69599a2f5dd903ec77e4983"},{url:"/assets/fonts/Jost-ExtraBold.ttf",revision:"8ce4d9fe3d31d6e0acdaaf57ddc11c67"},{url:"/assets/fonts/Jost-ExtraBoldItalic.ttf",revision:"2bb88443f7c5a97b9dd17bc7f6ef2393"},{url:"/assets/fonts/Jost-ExtraLight.ttf",revision:"8b27840b4ce6760a4b90c4737edbe780"},{url:"/assets/fonts/Jost-ExtraLightItalic.ttf",revision:"93c98faedefb1ab7936df0eb07cabeaa"},{url:"/assets/fonts/Jost-Italic.ttf",revision:"f47e095dec0ac07808c0238cf30e845c"},{url:"/assets/fonts/Jost-Light.ttf",revision:"e2e7112c0417169d33d9cbd6af02cd6d"},{url:"/assets/fonts/Jost-LightItalic.ttf",revision:"40fff4f48c80f143ff6358533da0ec3d"},{url:"/assets/fonts/Jost-Medium.ttf",revision:"2c2945b9da98d9b48d6104893d9558c0"},{url:"/assets/fonts/Jost-MediumItalic.ttf",revision:"0d7deef312dcbcb163409d7fec8c419a"},{url:"/assets/fonts/Jost-Regular.ttf",revision:"3dba44482cb4f0bfa595833a76643d93"},{url:"/assets/fonts/Jost-SemiBold.ttf",revision:"bcac976eb8c9ec9a512ec8a53fac8be9"},{url:"/assets/fonts/Jost-SemiBoldItalic.ttf",revision:"07a8b2b6f59d6da2e7fe932a1ae7407c"},{url:"/assets/fonts/Jost-Thin.ttf",revision:"104f4e7e9ac769b824bf8f7dd95f57d3"},{url:"/assets/fonts/Jost-ThinItalic.ttf",revision:"4c74e21d5081a9e36d8ec5275fef4f6d"},{url:"/assets/fonts/LeagueSpartan-Black.ttf",revision:"b175072581cdfa161bec1bc4fb1b285c"},{url:"/assets/fonts/LeagueSpartan-Bold.ttf",revision:"7b538f99aa480a1f48246bc55bf64103"},{url:"/assets/fonts/LeagueSpartan-ExtraBold.ttf",revision:"10c4a7b368ad3bf240170c1dc51037e9"},{url:"/assets/fonts/LeagueSpartan-ExtraLight.ttf",revision:"1465f8df4f2b31dba299726663269671"},{url:"/assets/fonts/LeagueSpartan-Light.ttf",revision:"54412ad5288df7c7c320d39f5e2c6aa2"},{url:"/assets/fonts/LeagueSpartan-Medium.ttf",revision:"0ad9adbb5f990c78d07bdb6860fcc2ab"},{url:"/assets/fonts/LeagueSpartan-Regular.ttf",revision:"f1c5a6396f0fbbac8bd3c2c53ee27885"},{url:"/assets/fonts/LeagueSpartan-SemiBold.ttf",revision:"4c69e947f33653efc14981db0dae5476"},{url:"/assets/fonts/LeagueSpartan-Thin.ttf",revision:"8cae5e2d4589453538773170203f91fe"},{url:"/assets/images/Group.png",revision:"8c98acc90392718fc362a4c37b533d58"},{url:"/assets/images/comment-user-1.png",revision:"0e87c6cf5a51f6cd08c29f375d602a51"},{url:"/assets/images/comment-user-2.png",revision:"315ff248f94fff8059a664639b0d0f0b"},{url:"/assets/images/countries/AC.svg",revision:"9838a4bae4741d63a167d25687bf4b28"},{url:"/assets/images/countries/AD.svg",revision:"f0070396de33a6256cef8149044fa32a"},{url:"/assets/images/countries/AE.svg",revision:"87a053365314c46179eb8a4002cfa128"},{url:"/assets/images/countries/AF.svg",revision:"a3e950a4d66186671ea92afef1119849"},{url:"/assets/images/countries/AG.svg",revision:"198eb2e859446d6391c4dbb2b77ff464"},{url:"/assets/images/countries/AI.svg",revision:"ab7d4b9a0e1427be918918f120b68456"},{url:"/assets/images/countries/AL.svg",revision:"b0c98c29d115a1537969acc2de8d16bd"},{url:"/assets/images/countries/AM.svg",revision:"12fefd5006a9a39d9358a4c1d9096e02"},{url:"/assets/images/countries/AO.svg",revision:"eb63be021cc371eaaf4a008e673417b5"},{url:"/assets/images/countries/AQ.svg",revision:"4e9186044b25fb424fdbea4183a52d44"},{url:"/assets/images/countries/AR.svg",revision:"ae5fce0a5b320f7d3833de580c111324"},{url:"/assets/images/countries/AS.svg",revision:"0d60511411207a7d854633f386ab4ac1"},{url:"/assets/images/countries/AT.svg",revision:"343acd21355dafaf6d8cfa773ba356d8"},{url:"/assets/images/countries/AU.svg",revision:"c6ec40350e23cdcaf640bfae761f8d95"},{url:"/assets/images/countries/AW.svg",revision:"766714d67dc1927980bf8efe50bfc803"},{url:"/assets/images/countries/AX.svg",revision:"88e9f5b6aa986ce64cd583b05542f3f7"},{url:"/assets/images/countries/AZ.svg",revision:"da4f4d9d21e3c74025ab89e6d2ab7eb6"},{url:"/assets/images/countries/BA.svg",revision:"7c65bc41c255e05de0885bd84d858f2f"},{url:"/assets/images/countries/BB.svg",revision:"95c114750e3a6c0ea49f40722eac2a51"},{url:"/assets/images/countries/BD.svg",revision:"4ff5bf43699eb49a7adfab43059fbe6e"},{url:"/assets/images/countries/BE.svg",revision:"9acc9bc01bbe25e5aae444ba92cf5406"},{url:"/assets/images/countries/BF.svg",revision:"c004fde8a0252d069fa94e5b07cc0e3d"},{url:"/assets/images/countries/BG.svg",revision:"3ba6ff6b62d4e1ca7f810a71b0385f91"},{url:"/assets/images/countries/BH.svg",revision:"82818ede8dad3bf73becfb760c78de7a"},{url:"/assets/images/countries/BI.svg",revision:"7fc05eb8891414c8514c6eaa266f5b78"},{url:"/assets/images/countries/BJ.svg",revision:"d634bcf784eb2acb68a599c41ae65fee"},{url:"/assets/images/countries/BL.svg",revision:"03f3cd25b4df02f4672115244e4a79dc"},{url:"/assets/images/countries/BM.svg",revision:"822c18f6281d2fc3cb1e41b832e9a98f"},{url:"/assets/images/countries/BN.svg",revision:"61960a0f4ec7e7b2231970317c91000a"},{url:"/assets/images/countries/BO.svg",revision:"e4e6219bed50fae4d79876e0fd30f596"},{url:"/assets/images/countries/BQ.svg",revision:"a3906d5a8bbe6493ba738e1993cf65a3"},{url:"/assets/images/countries/BR.svg",revision:"5091e787d57a9fce46084a1667bf18bc"},{url:"/assets/images/countries/BS.svg",revision:"c38137e19719c95ba6e0465720852fa5"},{url:"/assets/images/countries/BT.svg",revision:"efa4e676e5e88b21ac08a24f62445e39"},{url:"/assets/images/countries/BV.svg",revision:"da6fb8dd5627670af7db368515e2902d"},{url:"/assets/images/countries/BW.svg",revision:"8eeadf27b88b48bb3170f1bdd0ee4155"},{url:"/assets/images/countries/BY.svg",revision:"0e713aac033b02f48ae8dbe471f71d9f"},{url:"/assets/images/countries/BZ.svg",revision:"a313e3212f55fc6838ffc7b0a1b8981d"},{url:"/assets/images/countries/CA.svg",revision:"fdcc50bc2631dc35fc987e5ecca87ca7"},{url:"/assets/images/countries/CC.svg",revision:"e497d106c3ba0c5b0b747e656a8eeb7b"},{url:"/assets/images/countries/CD.svg",revision:"e25a3dae664590fea1837e864612b046"},{url:"/assets/images/countries/CF.svg",revision:"6703904bd0db77cdab2422472e048f00"},{url:"/assets/images/countries/CG.svg",revision:"9f022f33a89a06d998ee70174dc97642"},{url:"/assets/images/countries/CH.svg",revision:"8c5bcf2c09580d83fad16b78183fed2d"},{url:"/assets/images/countries/CI.svg",revision:"62147a743071dd607cf94ddb5430a190"},{url:"/assets/images/countries/CK.svg",revision:"43e8919fde121caca8ed60abce9f4cdc"},{url:"/assets/images/countries/CL.svg",revision:"21be852984ff9ffcf7d615b58b43a98b"},{url:"/assets/images/countries/CM.svg",revision:"2e8838ce8a3d42648edb54e4f2651099"},{url:"/assets/images/countries/CN.svg",revision:"3be9bcd4a1d17d430461d1b241787dec"},{url:"/assets/images/countries/CO.svg",revision:"255eb72adc50495a4469ea650517acff"},{url:"/assets/images/countries/CR.svg",revision:"91784dc5aa89dc7f418edf63bcd90d3a"},{url:"/assets/images/countries/CU.svg",revision:"2d3bcbec140034a70e39586da091e4de"},{url:"/assets/images/countries/CV.svg",revision:"78bf276fe201e345be443097f7a349c7"},{url:"/assets/images/countries/CW.svg",revision:"9294a989a1ede7ef34a6c6dd1a327d9c"},{url:"/assets/images/countries/CX.svg",revision:"5411670edbdace1fd38613192bb0faa8"},{url:"/assets/images/countries/CY.svg",revision:"93a319a020c2226fdcc99c13c2931fa9"},{url:"/assets/images/countries/CZ.svg",revision:"b532978171b1389a44e1111446f1bee7"},{url:"/assets/images/countries/DE.svg",revision:"88e525cc4061f87b60c73d0533ed4994"},{url:"/assets/images/countries/DJ.svg",revision:"6da4ceafbcb5238f864092b2d666103e"},{url:"/assets/images/countries/DK.svg",revision:"b9899065e434325e958bd4177cfaf1d0"},{url:"/assets/images/countries/DM.svg",revision:"a374fff43666b26fe928ff3780f4f68e"},{url:"/assets/images/countries/DO.svg",revision:"c924054963c56a0e97da4c1b94fcefea"},{url:"/assets/images/countries/DZ.svg",revision:"c077fa9d2efd35a3f946c0dde1fc6bc9"},{url:"/assets/images/countries/EC.svg",revision:"ec3cb23f2bca57dde220354e1296dc82"},{url:"/assets/images/countries/EE.svg",revision:"2aac86c8abcd03e9a354d0385ea73d73"},{url:"/assets/images/countries/EG.svg",revision:"8ddf02a4f5cc720252a7b5ba434a0504"},{url:"/assets/images/countries/EH.svg",revision:"0d0afee75c3137d7f1220af20437774e"},{url:"/assets/images/countries/ER.svg",revision:"cc0cfad0d7a85c8cda7a3800e363ed98"},{url:"/assets/images/countries/ES.svg",revision:"92f911e517b02164fd3bf8af38d6be52"},{url:"/assets/images/countries/ET.svg",revision:"fae7e2701fdceaaa153a3654d0a2d7b0"},{url:"/assets/images/countries/FI.svg",revision:"4c5194c24efdc3789091b20feb35b366"},{url:"/assets/images/countries/FJ.svg",revision:"f6b68f515b109c655f37598dce826258"},{url:"/assets/images/countries/FK.svg",revision:"5a1d0c798a27b1d1464dcf1f177a2597"},{url:"/assets/images/countries/FM.svg",revision:"0b3bcc7b8e6fe09e9123d24a07f1b7ba"},{url:"/assets/images/countries/FO.svg",revision:"809703524934869c7978fc21cef4358a"},{url:"/assets/images/countries/FR.svg",revision:"43fad0090e4fe243e2adcaaa9fa61202"},{url:"/assets/images/countries/GA.svg",revision:"17a59f61d6703f395b1a5e618a697f6d"},{url:"/assets/images/countries/GB.svg",revision:"ce8be7d0a964429bdafc38d4d7a0ac69"},{url:"/assets/images/countries/GD.svg",revision:"32942a8a8414d202f2393963089d9dda"},{url:"/assets/images/countries/GE.svg",revision:"b61c34341e5674e8e08f0b811a59137c"},{url:"/assets/images/countries/GF.svg",revision:"826a6f327d75b42087ed3fad9ab9c7e9"},{url:"/assets/images/countries/GG.svg",revision:"736009a33344c5e69b35059f635c1e52"},{url:"/assets/images/countries/GH.svg",revision:"9dd835702c205cbdcfc74f5b2eb6334c"},{url:"/assets/images/countries/GI.svg",revision:"90d91366fc1354eb0555ea912f8febab"},{url:"/assets/images/countries/GL.svg",revision:"52d1e66608dbf2ab6213429cbc447c55"},{url:"/assets/images/countries/GM.svg",revision:"9311ab3c685466a83ff4996d604b4b77"},{url:"/assets/images/countries/GN.svg",revision:"cbe5a43d82d096eb4fe939bc78eb36a7"},{url:"/assets/images/countries/GP.svg",revision:"43fad0090e4fe243e2adcaaa9fa61202"},{url:"/assets/images/countries/GQ.svg",revision:"c483ee6201930d9341e7432f7c03f006"},{url:"/assets/images/countries/GR.svg",revision:"da1b951ccc95cdc594918d77d9f75d87"},{url:"/assets/images/countries/GS.svg",revision:"3d7f87ad7f80be8e7564018378b526af"},{url:"/assets/images/countries/GT.svg",revision:"68e866d572d03fb701657f693cd88672"},{url:"/assets/images/countries/GU.svg",revision:"8c36025c2226e10a888667bd281ac225"},{url:"/assets/images/countries/GW.svg",revision:"19e1492c298676c72a7c87a82c6e3629"},{url:"/assets/images/countries/GY.svg",revision:"cb36adaebf98d48cd388c92e5027a6a6"},{url:"/assets/images/countries/HK.svg",revision:"f7e8035aad41fa86165aa1a3d577b311"},{url:"/assets/images/countries/HM.svg",revision:"c581a93874d6ff3317f04715a1211556"},{url:"/assets/images/countries/HN.svg",revision:"89469b7c65e79a8659c9013a5fc64c42"},{url:"/assets/images/countries/HR.svg",revision:"48cbabbd9062c29f38ae760e589bfaec"},{url:"/assets/images/countries/HT.svg",revision:"0840cf59e4dc3a180f118e53276bef45"},{url:"/assets/images/countries/HU.svg",revision:"0586426139f1c5360653fa1815c84cc6"},{url:"/assets/images/countries/ID.svg",revision:"5e74a2253b3cc3607e1d0b86779b2228"},{url:"/assets/images/countries/IE.svg",revision:"cf8d5f44bcc712769e43a3f0d3f83ba2"},{url:"/assets/images/countries/IL.svg",revision:"bc76641cd5e16d30d95a91246cfe8d0e"},{url:"/assets/images/countries/IM.svg",revision:"9e4c9198eb6cc464bdcb5c433cd1e5a0"},{url:"/assets/images/countries/IN.svg",revision:"947f1211df01228ba85bb1d10e1774f1"},{url:"/assets/images/countries/IO.svg",revision:"ad424ba1ae1102dfd2585ef2b3fbe339"},{url:"/assets/images/countries/IQ.svg",revision:"4cc30714c96a45d65ae7000662458ddd"},{url:"/assets/images/countries/IR.svg",revision:"d8204807be282d7ef26911faf80acbb2"},{url:"/assets/images/countries/IS.svg",revision:"4648e68c0f4a2217abf381c4c2625d78"},{url:"/assets/images/countries/IT.svg",revision:"82f3887d320d553bbfb1d458deb4595e"},{url:"/assets/images/countries/JE.svg",revision:"d9a33b19c2762c16b39a6e287b109a15"},{url:"/assets/images/countries/JM.svg",revision:"c7c5e39601206d6aaeab84569cbac70c"},{url:"/assets/images/countries/JO.svg",revision:"8fa47fe7967894be5c2fb6e9a7d42c9a"},{url:"/assets/images/countries/JP.svg",revision:"353bec03e16b53cb2c2d2095cb759d71"},{url:"/assets/images/countries/KE.svg",revision:"59c85423fbd4346b5ea7695218dabd7e"},{url:"/assets/images/countries/KG.svg",revision:"d98784ea3f2a8c7a69908048de293a62"},{url:"/assets/images/countries/KH.svg",revision:"d9776cb138d490e7c8f6dc478da38c2f"},{url:"/assets/images/countries/KI.svg",revision:"3cb19798abede096f6515ee97ee4f566"},{url:"/assets/images/countries/KM.svg",revision:"41cb835a6e935eee2f101a56b905cb4b"},{url:"/assets/images/countries/KN.svg",revision:"3f457af0c6703383f60a8bcd1f7650c1"},{url:"/assets/images/countries/KP.svg",revision:"b34e4e5871ddc2a4fdf3f9afe4f527fe"},{url:"/assets/images/countries/KR.svg",revision:"28b050049df3837fa9bb5f49f27f661f"},{url:"/assets/images/countries/KW.svg",revision:"5a962270ac39a61e5448532138ebd224"},{url:"/assets/images/countries/KY.svg",revision:"865343e732329e1399903bf5ede84e57"},{url:"/assets/images/countries/KZ.svg",revision:"a3e0ea4d1687c3be75bc691fdfc09b3f"},{url:"/assets/images/countries/LA.svg",revision:"ea526077e0e3ddf96dd4d9dcb04ae6c7"},{url:"/assets/images/countries/LB.svg",revision:"b1167bc371f6084bbe863ca9358c5bbc"},{url:"/assets/images/countries/LC.svg",revision:"ae3fd80b2391d10bdd691a0ca065d043"},{url:"/assets/images/countries/LI.svg",revision:"2cbfe4a41e19dd4cce545844fe8b8199"},{url:"/assets/images/countries/LK.svg",revision:"a8d4261057acad5ffb965255f8159bac"},{url:"/assets/images/countries/LR.svg",revision:"d636c8ad2f0dface96a7e475d0e98821"},{url:"/assets/images/countries/LS.svg",revision:"2425a79087fd8aa71fe6670953a1f783"},{url:"/assets/images/countries/LT.svg",revision:"129968ddb0992b74ea028529aa01255e"},{url:"/assets/images/countries/LU.svg",revision:"4a9dc99bc8100faa045f758ef76ee5b3"},{url:"/assets/images/countries/LV.svg",revision:"34fc5c8e2b56661e2bf3f6c19892ef80"},{url:"/assets/images/countries/LY.svg",revision:"16893c89be44ebc8a52e36adcde7b391"},{url:"/assets/images/countries/MA.svg",revision:"9574360cd2809580718406a7dbab1b66"},{url:"/assets/images/countries/MC.svg",revision:"1810e1516ae091bc96c7108824ba6fc0"},{url:"/assets/images/countries/MD.svg",revision:"750e067cff766a6e6dfd3a55ae59c09d"},{url:"/assets/images/countries/ME.svg",revision:"bf5299970de9a3f8fa2a37c1580d8291"},{url:"/assets/images/countries/MF.svg",revision:"de42f245114769cd441219c4bae91b5e"},{url:"/assets/images/countries/MG.svg",revision:"2366029441db0d9506598d8045c3a124"},{url:"/assets/images/countries/MH.svg",revision:"ff9165067b5806be40870a00982d2d10"},{url:"/assets/images/countries/MK.svg",revision:"d705bea249608d5d11d26c17514b2460"},{url:"/assets/images/countries/ML.svg",revision:"1aaca6ca0cdba1c972cd7cd0bd3a0181"},{url:"/assets/images/countries/MM.svg",revision:"71272df14072682730b157309cf2e8b6"},{url:"/assets/images/countries/MN.svg",revision:"96cf007392afabe84455e868f06ddea9"},{url:"/assets/images/countries/MO.svg",revision:"057ae0a18e4ffd5c0d6e388c69d48397"},{url:"/assets/images/countries/MP.svg",revision:"7a0f2947e0b4e30b2acedebc5acafa07"},{url:"/assets/images/countries/MQ.svg",revision:"73bfb484077f8b1ef92784c000b48e18"},{url:"/assets/images/countries/MR.svg",revision:"bd1bb5dd64f2baa7cd4188b588ec2763"},{url:"/assets/images/countries/MS.svg",revision:"3377e5f9d407b366cf1cd81efeb3ef85"},{url:"/assets/images/countries/MT.svg",revision:"423761237497c198d79440290e4388f3"},{url:"/assets/images/countries/MU.svg",revision:"bbd0a2df7ee2919ac77bca4ac90efb60"},{url:"/assets/images/countries/MV.svg",revision:"9c0ceed17bf9f52f58bcbb2106e8bf16"},{url:"/assets/images/countries/MW.svg",revision:"9a092b17bf8cc28d76eadb8f5852e34d"},{url:"/assets/images/countries/MX.svg",revision:"56d013ff285a02c26f52beb090e5f437"},{url:"/assets/images/countries/MY.svg",revision:"f2f675de6bcfcfc3866e9b7220a2739a"},{url:"/assets/images/countries/MZ.svg",revision:"7298e77537090feff1574199f332560d"},{url:"/assets/images/countries/NA.svg",revision:"9303a8691fa8da0ba96faef8d388d894"},{url:"/assets/images/countries/NC.svg",revision:"1cec7385dd4ac738d2295599c5c85172"},{url:"/assets/images/countries/NE.svg",revision:"3ec915c98635102507b6d0e6e95184d6"},{url:"/assets/images/countries/NF.svg",revision:"84e305fe265a0eff740c78e31f73bea9"},{url:"/assets/images/countries/NG.svg",revision:"bc113403dcfda1a6ce94ee8db1a902e8"},{url:"/assets/images/countries/NI.svg",revision:"810795b5fe6da4334e5b40e6c045025d"},{url:"/assets/images/countries/NL.svg",revision:"ba8f537bca186cf6fad23f71a7b35030"},{url:"/assets/images/countries/NO.svg",revision:"30e7ee2f4a80ca4747ab78ae84d966de"},{url:"/assets/images/countries/NP.svg",revision:"a377eec58b5b053f8ef20d482572fba5"},{url:"/assets/images/countries/NR.svg",revision:"86641c7f85e79967464a5a447fdb7af4"},{url:"/assets/images/countries/NU.svg",revision:"e7e9e4be7ad5656bb252646c791322d6"},{url:"/assets/images/countries/NZ.svg",revision:"983ed8a7230e6d93b564625efe53ba56"},{url:"/assets/images/countries/OM.svg",revision:"16c586f79997f7f31415b23774a59787"},{url:"/assets/images/countries/PA.svg",revision:"da5f03a88a06086441ac4b3a9b33e8dc"},{url:"/assets/images/countries/PE.svg",revision:"a9d5f411fb1fce52b98a08172b62ba59"},{url:"/assets/images/countries/PF.svg",revision:"84d7c703da5342f59cc26cd5788e8727"},{url:"/assets/images/countries/PG.svg",revision:"31bec0d69d226811a9b3d82831684a51"},{url:"/assets/images/countries/PH.svg",revision:"d99ad691889fcfa5af3ed3113dbdec6b"},{url:"/assets/images/countries/PK.svg",revision:"ca3b7160efbaf890a5a51452ced2b8b1"},{url:"/assets/images/countries/PL.svg",revision:"6cb48e9f6598ee144283c7394d41d9f5"},{url:"/assets/images/countries/PM.svg",revision:"e7bd22507f9bd92dc169d0ace6fc101e"},{url:"/assets/images/countries/PN.svg",revision:"df59bdb0ddd7a8d3e0c86f99e6673fa3"},{url:"/assets/images/countries/PR.svg",revision:"b3c9d75b13d8cc2d234af4fe1869cf4b"},{url:"/assets/images/countries/PS.svg",revision:"6e1ae273148fad864fd10143b70610cb"},{url:"/assets/images/countries/PT.svg",revision:"9e9f91551ffe4bd66001f559ad87eada"},{url:"/assets/images/countries/PW.svg",revision:"9b5d4dc24e903ce0e625bb43af769510"},{url:"/assets/images/countries/PY.svg",revision:"c259ae0780a7e07dfd60df5d6aa754df"},{url:"/assets/images/countries/QA.svg",revision:"cdcc6159b191d3df086907094410822c"},{url:"/assets/images/countries/RE.svg",revision:"e7bd22507f9bd92dc169d0ace6fc101e"},{url:"/assets/images/countries/RO.svg",revision:"2e3d0e37d3b683cadf238fd230f2d875"},{url:"/assets/images/countries/RS.svg",revision:"dc867a5f048233fd4af3ffe235dfc08e"},{url:"/assets/images/countries/RU.svg",revision:"7d5a328d393311ad397e3217bf8f3fb5"},{url:"/assets/images/countries/RW.svg",revision:"897b680213e010ee1b041a2ed8dd9809"},{url:"/assets/images/countries/SA.svg",revision:"80c9095629e171faa255f4ad4e0d9e7d"},{url:"/assets/images/countries/SB.svg",revision:"b9da4b33eef208735deb96b508c23fc9"},{url:"/assets/images/countries/SC.svg",revision:"2f9628aa631af3177c7afddb7e848e5e"},{url:"/assets/images/countries/SD.svg",revision:"aaf11d15094265bd0b1e2ec72a9a5db2"},{url:"/assets/images/countries/SE.svg",revision:"0ff71789736d7dceb47b54cd069cf710"},{url:"/assets/images/countries/SG.svg",revision:"0c14f7085603cb29c6914636f2e46582"},{url:"/assets/images/countries/SH.svg",revision:"7f802bfc0245c1dfbb1958591f1dda88"},{url:"/assets/images/countries/SI.svg",revision:"15de825c822b9669cb9e2d6b168eeb1f"},{url:"/assets/images/countries/SJ.svg",revision:"30e7ee2f4a80ca4747ab78ae84d966de"},{url:"/assets/images/countries/SK.svg",revision:"af046a1978a80a0817724eb78da2153e"},{url:"/assets/images/countries/SL.svg",revision:"338d9d77030a04206ad5dca930f53fc6"},{url:"/assets/images/countries/SM.svg",revision:"a01a7f7086d9883bf7850e16e79abc8c"},{url:"/assets/images/countries/SN.svg",revision:"41f2c3174b52aeea66dfabfc94847a72"},{url:"/assets/images/countries/SO.svg",revision:"4fb0334d1f2c5780969b8c16c045a6a3"},{url:"/assets/images/countries/SR.svg",revision:"a189e578a6355ce003f911b42fd6e62c"},{url:"/assets/images/countries/SS.svg",revision:"1734522dff33691942b28e700d9bb747"},{url:"/assets/images/countries/ST.svg",revision:"f7e360014fc3c990aeb28873f3e41a9a"},{url:"/assets/images/countries/SV.svg",revision:"5b07076891bdfefba20e0894d2c7d7a9"},{url:"/assets/images/countries/SX.svg",revision:"380560ccf0cd9352dce7d420b47fb9be"},{url:"/assets/images/countries/SY.svg",revision:"70068a094e101539c4a5c6642e15f146"},{url:"/assets/images/countries/SZ.svg",revision:"bb49a0135ffa8dc3d866e9ef7d917488"},{url:"/assets/images/countries/TA.svg",revision:"735b74d641f459f524f76ef63de9b4a9"},{url:"/assets/images/countries/TC.svg",revision:"22d0021e4c04c1c763ab661d5840197a"},{url:"/assets/images/countries/TD.svg",revision:"d25a79f02550d6bebb7485ff415abded"},{url:"/assets/images/countries/TG.svg",revision:"6b5c6ae515bb04ac5e0a4953de70092c"},{url:"/assets/images/countries/TH.svg",revision:"6b24e5ee08df1f29f9a5bd6aa491b9a4"},{url:"/assets/images/countries/TJ.svg",revision:"afbc3b3f63a1fbb2adb11595f865c6b1"},{url:"/assets/images/countries/TK.svg",revision:"6465e4b16199763b576c9e5498896c6c"},{url:"/assets/images/countries/TL.svg",revision:"3459bf094b7a588e703c3034ec8a88ef"},{url:"/assets/images/countries/TM.svg",revision:"d4a5d4666c2e758a8b1817b45ffbb091"},{url:"/assets/images/countries/TN.svg",revision:"c8d9b8a1855474a7b087eeb79a7a1351"},{url:"/assets/images/countries/TO.svg",revision:"bd1b1212c56a9af920ccfdeab6a18fc5"},{url:"/assets/images/countries/TR.svg",revision:"4a724c958d31e7aa688d5476392dcbfb"},{url:"/assets/images/countries/TT.svg",revision:"90d1f42c8354ed030ef465b5f70e8e84"},{url:"/assets/images/countries/TV.svg",revision:"42565ccc964b862a09d1d590b9c81404"},{url:"/assets/images/countries/TW.svg",revision:"b5c9943fb8d23b86220f577a6277448a"},{url:"/assets/images/countries/TZ.svg",revision:"144c3c801188c39faa007e51a0220da3"},{url:"/assets/images/countries/UA.svg",revision:"e683d4d53fff40f3a6e1da9baed5a7be"},{url:"/assets/images/countries/UG.svg",revision:"dae1e194befb807be0d10638932cb3f0"},{url:"/assets/images/countries/US.svg",revision:"7de5860f8863e46db4365a33d50276cb"},{url:"/assets/images/countries/UY.svg",revision:"e529a297ecb22f00ecbe7ad5744b11ea"},{url:"/assets/images/countries/UZ.svg",revision:"67154c2bd787177c753dc5f1290a213b"},{url:"/assets/images/countries/VA.svg",revision:"1aee6f8bc947d52aaa0828a8e066dbce"},{url:"/assets/images/countries/VC.svg",revision:"fb8b285f39fc39d8887a5af1c491cb8c"},{url:"/assets/images/countries/VE.svg",revision:"0fc1c8f4b46921d4d371e7ef80f1995e"},{url:"/assets/images/countries/VG.svg",revision:"709a7d801f1302a6dfc2bc983e7e4f5a"},{url:"/assets/images/countries/VI.svg",revision:"59b50f2bf539bd4547fa27d87e8f544d"},{url:"/assets/images/countries/VN.svg",revision:"2a1df764395a275f5bc2b1251279e801"},{url:"/assets/images/countries/VU.svg",revision:"0a962a79fffeb971f47385fa120921e5"},{url:"/assets/images/countries/WF.svg",revision:"e77961ae932e878a38b4d60f0cc792a8"},{url:"/assets/images/countries/WS.svg",revision:"7c30820fe02613471cd88cfb526978fb"},{url:"/assets/images/countries/XK.svg",revision:"60673b181b3e9ae0a4f82cbe2b0085f2"},{url:"/assets/images/countries/YE.svg",revision:"1a5bdd672183e0e058c0f397a2ef739f"},{url:"/assets/images/countries/YT.svg",revision:"84a542c20737dc1e4425141fe466ff2d"},{url:"/assets/images/countries/ZA.svg",revision:"fb713e2a7273978a82f6442157530410"},{url:"/assets/images/countries/ZM.svg",revision:"276e06dffcd97cc3a51d1505fac5dee8"},{url:"/assets/images/countries/ZW.svg",revision:"d23040159f50eebca060fa320e842946"},{url:"/assets/images/country-logo-16x16.png",revision:"1b22b4f2836083281c5ed7d11ae3ba60"},{url:"/assets/images/download-app-cover.png",revision:"91d3ad1723c86a4daf3a1e5c6cb393db"},{url:"/assets/images/new-arrival-bg.png",revision:"0ffdd03a54ec381bd2f656831f5b4f3b"},{url:"/assets/images/new-letter.jpg",revision:"057961a91f368a096aa8fa07b485bb95"},{url:"/assets/images/page-title-banner.png",revision:"5e9356602747cbb3565d9544fee68240"},{url:"/assets/images/paypal_logo.svg",revision:"ad683b0411ef5bb434a8f4667b5a6e90"},{url:"/assets/images/play-store.png",revision:"409ff06effc460cc7cd778c1d7fb44c9"},{url:"/assets/images/related-product-bg.png",revision:"4142c77cbd868e7d42b5a4bb265b329b"},{url:"/assets/images/saller-1.png",revision:"cb7207f40a2565a8bf894a154771438a"},{url:"/assets/images/saller-2.png",revision:"db35b472a1f749074c24257af80404cb"},{url:"/assets/images/saller-3.png",revision:"05b423e48ba0f504f05c2c4a68bcf582"},{url:"/assets/images/saller-4.png",revision:"2ffa6caee0611ce63e0339077309ed80"},{url:"/assets/images/saller-5.png",revision:"6b46e074e864d5250779fa9f11e8a8f3"},{url:"/assets/images/saller-6.png",revision:"e73f44d4b7de97785b592572b9cb10ef"},{url:"/assets/images/saller-7.png",revision:"f1e0b47c68888099f178abde0b950149"},{url:"/assets/images/saller-8.png",revision:"7b7d93d9613b11079bd0c4e40735c7b0"},{url:"/assets/images/saller-9.png",revision:"6be06bcfb2fbc792a58d09e4f25e3c04"},{url:"/assets/images/saller-cover.png",revision:"661a1a979221c53730055a4f12f9861d"},{url:"/assets/images/sallers-cover-1.png",revision:"6990d9128015f746fe17cf461d52db8e"},{url:"/assets/images/sallers-cover-2.png",revision:"229e53290858762241bf70252331ae06"},{url:"/assets/images/sallers-cover-3.png",revision:"f97fbaadd809f5cb4d38088ec031dc57"},{url:"/assets/images/sallers-cover-4.png",revision:"85273406384318599821254bc5e36e19"},{url:"/assets/images/sallers-cover-5.png",revision:"b9ec2fa354a148df5d4e1319a1745509"},{url:"/assets/images/sallers-cover-6.png",revision:"6f46d1f9c2206124efa105d0ee2aa9ff"},{url:"/assets/images/sallers-cover-7.png",revision:"6990d9128015f746fe17cf461d52db8e"},{url:"/assets/images/search-not-found.png",revision:"6bad49227d1aea798e104b474c746d5f"},{url:"/assets/images/spinner.gif",revision:"a614ffa8af2f3416e8e0e8754c6afb63"},{url:"/favico.svg",revision:"2096ce4d587c90645b4e75de378abf58"},{url:"/images/icons/icon-128x128.png",revision:"142ac655ca2ba92f5d45364ce6eb2560"},{url:"/images/icons/icon-144x144.png",revision:"cbf0ebd134a14ef44527675a5066cd87"},{url:"/images/icons/icon-152x152.png",revision:"74004babf82ab99ef0c0e2306f6ad1d7"},{url:"/images/icons/icon-192x192.png",revision:"c71295b46a1d4c0a5222630e64667e03"},{url:"/images/icons/icon-384x384.png",revision:"41c5095bac9a1d80a01d4dbb00e5dc77"},{url:"/images/icons/icon-512x512.png",revision:"aa5bb04fc685a2909dc6a4a9a2698fb4"},{url:"/images/icons/icon-72x72.png",revision:"14571a1f165d9aebf5eb36330247c45c"},{url:"/images/icons/icon-96x96.png",revision:"c4a73afa38ef222d25b7a137f0fd3169"},{url:"/manifest.json",revision:"8ba76824d7fef79df638407bae4d3948"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
