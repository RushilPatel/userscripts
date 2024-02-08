// ==UserScript==
// @name         Remove RMP blur
// @namespace    http://realmoney.thestreet.com/
// @version      2024-02-07
// @description  try to take over the world!
// @author       You
// @match        https://realmoney.thestreet.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("ran");
    window.setTimeout(removeBlur, 1000);

    function removeBlur(){
        var divs = document.querySelectorAll(".bcBlur");
        for(var i=0; i < divs.length; i++){
            divs[i].classList.remove("bcBlur");
        }
    }
})();
