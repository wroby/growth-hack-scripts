/* *******************************************************************************************
*  // INSTAGRAM AUTO FOLLOW //
*
* This hack allows you to automatically follow people on Instagram to increase your audience.
* No limitation
* At the speed of 10 profiles per minute.
* After a week, think about using our Instagram Auto Unfollow hack to clean your following list.
*
* This script will follow a new profile every 5 to 10 seconds. 
* You can change that duration by changing the fourth and fifth line (var max_secondes = 10; var min_secondes = 5;).
* I recommend that you don't go below 5 to 10 seconds.
*
* If the script stops after a while, run it again
*
*
* // Warning: use this hack gradually otherwise Instagram will block your account. //
*
* Which steps to follow?  ⚙️
*
* -> Find a Instagram account similar to yours and open its followers list
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below:
*
* ******************************************************************************************* */

var follow = ["Follow", "S’abonner", "Seguir", "Folgen"];
var unfollow = ["Following", "Abonné(e)", "Siguiendo", "Anfrage gesendet"];
var unfollow_button = ["Unfollow", "Se désabonner", "Dejar de seguir", "Nicht mehr folgen"];
var max_secondes = 10;
var min_secondes = 5;
var titi = document.getElementsByTagName("button");
arr = range(0, titi.length);
arr = shuffle(arr);
function unfollow_confirmation(attribute, attribute_value)
{
var allElements = document.getElementsByTagName('*');
for (var jj = 0, ni = allElements.length; jj < ni; jj++)
{
if (allElements[jj].getAttribute(attribute) == attribute_value)
{
var_buttons = allElements[jj].getElementsByTagName('button');
for (var kk = 0; kk < var_buttons.length; kk++) { 
if ((unfollow_button.indexOf(var_buttons[kk].textContent)) >= 0) {
var_buttons[kk].click();
return;
}
}
}
}
}
function range(start, stop) {
var result = [];
for (var i = start; i < stop; i += 1) {
result.push(i);
}
return result;
};
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;
while (0 !== currentIndex) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}
var followCount = 0;
function start(tata, mode){
try {
if (mode.indexOf(tata[arr[0]].innerHTML) >= 0){
tata[arr[0]].click();
arr.splice(0, 1);
var nextTime = Math.random() * ((max_secondes*1000) - (min_secondes*1000)) + min_secondes*1000;
if (tata.length > arr.length) {
arr2 = range(arr.length, tata.length + 1);
arr = arr.concat(arr2);
arr = shuffle(arr)
}
console.log("click ok" + arr[0]);
if (mode == unfollow) { 
unfollow_confirmation('role', 'presentation');
}
console.log("Next click in " + Math.floor(nextTime / 1000).toString() + " seconds");
setTimeout(start, nextTime, tata, mode );
}
else{
var nextTime =0
arr.splice(0, 1);
setTimeout(start, nextTime, tata, mode);
}
}
catch (err)
{
console.log ("End !");
}
}
start(titi, follow);
