/* *******************************************************************************************
*  // INSTAGRAM AUTO LIKE //
*
* This hack allows you to automatically like picture on Instagram
* No limitation
* At the speed of 1 picture every 5secs
* Choose a specific hashtag
*
* If the script stops after a while, run it again
*
*
* // Warning: use this hack gradually otherwise Instagram will block your account. //
*
* Which steps to follow?  ⚙️
*
* -> Open Instagram on you computer 
*
* -> Search for a specific hashtag
*
* -> Click on the first picture
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* -> Copy / Paste the script below:
*
* ******************************************************************************************* */

function getHeartElement() {
var knownHeartElementNames = ["coreSpriteHeartOpen", "coreSpriteLikeHeartOpen"];
var i = 0;
// Loop through the known heart elements until one works
for (i = 0; i < knownHeartElementNames.length; i++) {
var heartElement = document.querySelector('.' + knownHeartElementNames[i]);
if (heartElement != undefined) {
break;
}
}
return heartElement;
}

function doLike() {
var likeElement = getHeartElement();
var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
likeCount++;
console.log('Liked ' + likeCount);
var nextTime = Math.random() * (10000 - 4000) + 3000;
likeElement.click();
setTimeout(function() {nextElement.click();}, 1000);
if (likeCount < 500) {
setTimeout(doLike, nextTime);
} else {
console.log('Ben is amazing');
}
}

var likeCount = 0;
doLike();
