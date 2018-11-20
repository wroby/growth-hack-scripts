/* *******************************************************************************************
*  // MEDIUM AUTO FOLLOW //
*
* -> Go to the followers page of a Medium user addressing an audience similar to yours
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below:
*
*
* Be careful, this script will follow EVERY users displayed on the page in a few seconds. 
* Don't use this hack to much or you risk to be blocked by Medium.
*
* ******************************************************************************************* */

var inputs = document.getElementsByClassName('button--follow');for(var i=0;i<inputs.length;i++){ inputs[i].click(); }
