// ==UserScript==
// @name            Remove RMP blur
// @description     Remove RMP blur

// @author	    John Doe
// @namespace       https://pro.thestreet.com/
// @downloadURL	    https://raw.githubusercontent.com/RushilPatel/userscripts/main/removeRMPBlur.user.js
// @match           https://pro.thestreet.com/*
// @require         http://code.jquery.com/jquery-1.8.0.min.js
// @icon            https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net

// @version         1.0
// @updateURL	    https://raw.githubusercontent.com/RushilPatel/userscripts/main/removeRMPBlur.user.js
//
// @run-at	    document-start|document-end
// @unwrap
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */
(function() {	
    window.setTimeout(removeBlur, 1000);
	function removeBlur(){
        var divs = document.querySelectorAll(".bcBlur");
        for(var i=0; i < divs.length; i++){
            divs[i].classList.remove("bcBlur");
        }
    }
})();
