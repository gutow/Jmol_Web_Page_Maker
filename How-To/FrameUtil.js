/*Utility functions to allow using links in a document to change the content of a frame in the same document
  J. Gutow
  Sept. 21, 2008
*/


/*
function FramedURL
    URLName = URL of document you want loaded into the specific frame
    TargetID = id of the div into which the frame is loaded 
    ClassID = the class that will be assigned to the frame, useful is CSS is used in document
*/
function FramedURL(URLName,TargetID, ClassID){	var insert= '<iframe class='+ClassID+ ' src ='+ URLName +' type = "text/html"> </iframe>'	document.getElementById(TargetID).innerHTML = insert;}

function DropMenu(MenuID) {
	document.getElementById(MenuID).className=document.getElementById(MenuID).className.replace("_hid","_vis");
}

function RaiseMenu(MenuID) {
	document.getElementById(MenuID).className=document.getElementById(MenuID).className.replace("_vis","_hid");
}