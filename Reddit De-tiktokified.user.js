// ==UserScript==
// @name         Reddit De-tiktokified
// @version      0.0.1
// @description  Redirects you to new.reddit.com, avoiding the new beta UI.
// @author       https://github.com/tadghh
// @source	     https://github.com/tadghh/reddit-redirect
// @match        *://www.reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    if (!/new\.reddit\.com/.test(location.pathname)) {
        var newURL = location.protocol + "//new.reddit.com" +
            location.pathname +
            location.search +
            location.hash;

        location.replace(newURL);
    }
})();
