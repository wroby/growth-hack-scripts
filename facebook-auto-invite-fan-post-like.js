/* *******************************************************************************************
* Facebook - Script to auto invite people who liked a page post do like the page
* -> Open the facebook window with people you want to invite
* -> Copy the code and place on your browser url input OR open console and place
*  WARNING : THIS IS AN OLD SCRIPT, YOU NEED TO PUT TIMEOUT BETWEEN CLICK OR YOU'LL GET BLOCKED
* ******************************************************************************************* */

var buttons;
buttons = document.getElementsByClassName('_42ft');
for (var i = 0; i < buttons.length; i++) {
	if(buttons[i].getAttribute('ajaxify') != null){
		if(buttons[i].getAttribute('ajaxify').indexOf('invite') != -1){
			buttons[i].click();
		}
	}
