/*	Allows to open Jmol models on request, in a div
	
	Available from  http://biomodel.uah.es/Jmol/  and  http://wiki.jmol.org/ 
	Author: Angel Herr?ez.  Version 2007.04.23
	
	This template is offered freely for anyone to use or adapt it, 
	according to Creative Commons Attribution-ShareAlike 3.0 License,
	http://creativecommons.org/licenses/by-sa/3.0/

	Modified 2007.07.17  by Jonathan Gutow
	
	Main change is that the JmolSize is specified in the call.
	Image file is forced to fit within the div boundaries by scaling it.
	Image file name is passed explicitely.
	Removed the passing of the molecule name as labels should be set in script.
	
	Modified 2007.08.13 by Bob Hanson
	
	-- integration into Jmol application
	
	Modified 2010.3.9 by Jonathan Gutow
	-- addition of widget activation upon pop-in.
	-- addition of widget switching on view change in ScriptButton pages.
	
	Modified 2010 June by Jonathan Gutow and Angel Herraez
	-- bug fixes for IE support

*/

function addJavaScript(path, file) {
    if (path.charAt(path.length-1)!="/") { path += "/"; }
    document.write("<"+"script src=\"" + path + file + "\" type=\"text/javascript\"><" + "/script>"); 
}


function putJmolDiv(molNr, molFileName,imageFileName,appletWidth,appletHeight) {
	var tx = '<table cellpadding="10"><tr><td style="color: rgb(255, 255, 51);">'
	    + 'To get a 3-D model you can manipulate, click <a href="HREF">here</a>. Download time may be significant the first time the applet is loaded.'
		+ '</td></tr></table>';
	document.writeln(tx.replace(/HREF/,'javascript:void(popInJmol(' + molNr + ', \'' + molFileName + '\','+ appletWidth + ','+ appletHeight + '))'));
}

function popInJmol(n,fileName,width,height) {
	document.getElementById("Jmol"+n).innerHTML = jmolApplet([width,height],"defaultDirectory = \""+dataDir+"\";script "+fileName+"",n);
    var cntlID =  "JmolCntl"+n;
    var cntlDiv = document.getElementById(cntlID)
    if(cntlDiv)
        cntlDiv.style.display = 'block';
}

function scriptbuttonJmol(fileName, numberOfButtons) {
	document.getElementById("Jmol0").innerHTML = jmolApplet("100%","defaultDirectory = \""+dataDir+"\";script "+fileName+"");
}

function fixScriptButtonWidgets(numberOfButtons){
    for (i=0;i<numberOfButtons;i++) {
        var divID = "jmolCntl"+i;
        if(divID) jmolWidgetStrs[i]=new String(document.getElementById(divID).innerHTML);
    }
    document.getElementById("JmolCntl").innerHTML = jmolWidgetStrs[0];
}

function updateScriptButtonWidgets(buttonNumber){
    document.getElementById("JmolCntl").innerHTML = jmolWidgetStrs[buttonNumber];
}

function getHTML(element) {
  var d = document.getElementById(element)
  return (d ? d.innerHTML : "missing div with id: " + element)
}

function addJmolDiv(i,floatdiv,name,width,height,caption,note) {
    if (arguments.length < 6) caption = getHTML(name+"_caption");
    if (arguments.length < 7) note = getHTML(name+"_note");
    var s = "\n\n<tr><td>\n<br><div>\n<div class = \""+floatdiv+"\">";
	s += "\n<table style=\"text-align: left; width: "+width+"px;\" border='1' cellpadding='2'";
	s += "\n cellspacing='2'>";
	s += "\n    <tr>";
	s += "\n      <td style=\"vertical-align: top; width: "+width+"px; height: "+height+"px;\">";
	document.write(s);//.replace(/\</g,"&lt;"));
	putJmolDiv(i, name+".spt",name+".png",width, height);

	s = "\n      </td>";
	s += "\n    </tr>";
	s += "\n    <tr>";
	s += "\n      <td style=\"vertical-align: top;\">"+caption+"<br>";
	s += "\n      </td>";
	s += "\n    </tr>";
	s += "\n</table>";
	s += "\n</div>";
	s += "\n<div>"+note+"</div></div></td></tr>\n";
	document.write(s);//.replace(/\</g,"&lt;"));
}

function addAppletButton(i, name, label, info) {
  var s = '\n<table style="text-align: center; width: 100%" border="1" cellpadding="2" cellspacing="2">'
  s += '<tr><td>'
  document.write(s)
  jmolButton('Script '+name+'.spt', label); 
  var s = '</td></tr></table>\n' + info + "\n</br>";
  document.write(s)
}

function changePathIfLocal(){
 var protocol = window.location.protocol.toLowerCase();
  if (protocol == "file:") { 
    jmoljarpath = jmollocaljarpath;
    jmoljspath = jmollocaljspath;
    jmoljarfile = jmollocaljar;
  }
}
