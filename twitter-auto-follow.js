/* *******************************************************************************************
* -> Find a Twitter account similar to yours and open its followers list
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below: 
 * ******************************************************************************************* */
 
var FOLLOW_PAUSE = 1250;
var FOLLOW_RAND = 250; 
var PAGE_WAIT = 2000;
__cnt__ = 0; 
var f;
f = function() {
        var eles;
        var __lcnt__ = 0;
        eles = jQuery('.Grid-cell .not-following .follow-text').each(function(i, ele) {
                    ele = jQuery(ele);
                    if (ele.css('display') != 'block') {
                        console.trace('Already following: ' + i);
                        return;
                    }
                    setTimeout(function() {
                              console.trace("Following " + i + " of " + eles.length);
                            ele.click();
                            if ((eles.length - 1) == i) {
                                console.trace("Scrolling...");
                                window.scrollTo(0, document.body.scrollHeight);
                                setTimeout(function() {
                                    f();
                                }, PAGE_WAIT);
                            }
                    }, __lcnt__++ * FOLLOW_PAUSE + Math.random()*(FOLLOW_RAND) - FOLLOW_RAND/2);
                    __cnt__++;
        });
}
f();

 
 /* *******************************************************************************************
 * Warning: use this hack gradually otherwise Twitter will block your account.
 * ******************************************************************************************* */
