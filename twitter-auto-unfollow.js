/* *******************************************************************************************
* -> Open your following list or create a new list and add all the accounts you want to unfollow
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below:
*
* It should be pretty quick (50 unfollowed accounts/seconds) - I suggest to add a timeout between clicks.
* ******************************************************************************************* */

setInterval (function () {
 t = $ ( "following.") find ( "follow-button..");
 if (! t [0]) {
  window.scrollTo (0, $ (document) .height ());
 }
 else {
  console.log (t.attr ( "class")); t.trigger ( "click");
}}, 100)
