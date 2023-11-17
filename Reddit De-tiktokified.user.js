// ==UserScript==
// @name         Reddit De-tiktokified
// @version      0.0.2
// @description  Redirects you to new.reddit.com, avoiding the new beta UI.
// @license      MIT
// @namespace    https://github.com/tadghh
// @author       https://github.com/tadghh
// @source	     https://github.com/tadghh/reddit-redirect
// @match        *://www.reddit.com/*
// @exclude      *://www.reddit.com/media*
// @run-at       document-body
// ==/UserScript==
(() => {
    'use strict';

    if (location.pathname.indexOf('new.') === -1) {
        var newURL = location.protocol;

        newURL += "//new.reddit.com";
        newURL += location.pathname;
        newURL += location.search;
        newURL += location.hash;
        document.open();
        document.close();

        document.body.style.transition = 'background-color 470ms ease-in-out';
        setTimeout(() => {
            document.body.style.backgroundColor = 'black';

            document.body.addEventListener('transitionend', () => {
                document.body.style.backgroundColor = 'white';

                setTimeout(location = newURL, 221);
            }, {
                once: true
            });
        }, 250);
    }
})();
