/* *******************************************************************************************
* Find a # related to your business and search for tweets using it by using the search bar.
*
* This script will allow you to like all the tweets displayed on the screen. You can then search for another hashtag and start again.
*
* -> Scroll down the page to display as many tweets as you can
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below:
*
* ******************************************************************************************* */

var inputs = document.getElementsByClassName ('HeartAnimation');

for (i = 0; i <inputs.length; ++ i)

{

  inputs [i] .click ();

}
