
/* *******************************************************************************************
*Grow your professional network
*This hack allows you to send connection requests on Linkedin automatically.
*
* Which steps to follow?
* -> Go to the "My Network" tab
*
* -> Open the Chrome console (Command + Option + J on Mac or Ctrl + Shift + J on Windows)
*
* Copy / Paste the script below:
* ******************************************************************************************* */


var inviter = {} || inviter;
inviter.userList = [];
inviter.className = 'button-secondary-small';

inviter.refresh = function () {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(document.body.scrollHeight, 0);
    window.scrollTo(0, document.body.scrollHeight);
};

inviter.initiate = function()
{
    inviter.refresh();
    var connectBtns = document.getElementsByClassName(inviter.className);

    if (connectBtns == null) {var connectBtns = inviter.initiate();}
    
    return connectBtns;
};
inviter.invite = function () {
    var connectBtns = inviter.initiate();
    var buttonLength = connectBtns.length;
    for (var i = 0; i < buttonLength; i++) {

        if (connectBtns != null && connectBtns[i] != null) {inviter.handleRepeat(connectBtns[i]);}
            
        if (i == buttonLength - 1) {
            console.log("done: " + i);
            inviter.refresh();
        }
    }

};

inviter.handleRepeat = function(button)
{
    var nameValue = button.children[1].textContent
    var name = nameValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    if(inviter.arrayContains(name))
    {
         console.log("cancel");
         var cancel = button.parentNode.parentNode.children[0];
         cancel.click();
    }
    else
    {
        console.log("add");
        inviter.userList.push(name);
        button.click();
         
    }
};

inviter.arrayContains = function(item)
{
    return (inviter.userList.indexOf(item) > -1);
};

inviter.usersJson = {};

inviter.loadResult = function()
{
 
    var retrievedObject = localStorage.getItem('inviterList');
    var temp = JSON.stringify(retrievedObject);
    inviter.userList = JSON.parse(temp);
};

inviter.saveResult = function()
{
    inviter.usersJson = JSON.stringify(inviter.userList);
    localStorage.setItem('inviterList', inviter.usersJson);
};


setInterval(function () { inviter.invite(); }, 5000);


/* ****************************************************************************
* Warning: use this hack gradually otherwise Linkedin will block your account.*
* ***************************************************************************** */
