// ==UserScript==
// @name         Remove RMP blur
// @namespace    http://tampermonkey.net/
// @version      2024-02-06
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(init, 1000);

    function init(){
        console.log("Ran")
        var divs = document.querySelectorAll(".bcBlur")
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.remove('bcBlur');
        }
    }
})();
