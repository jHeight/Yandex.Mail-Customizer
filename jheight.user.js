// ==UserScript==
// @name Yandex.Mail Customizer
// @author The jHeight Team
// @copyright jHeight INC 2017-5000
// @descrption Customize your Yandex.Mail inbox
// @include http://*.yandex.com/*
// @include http://*.yandex.ru/*
// @include https://*.yandex.com/*
// @include https://*.yandex.ru/*
// ==/UserScript==

var imageChange, storageUnit;

GM_registerMenuCommand('Customizer', function() {
  // Put Menu Function Here
}, 'r');

var script = document.createElement('');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);

