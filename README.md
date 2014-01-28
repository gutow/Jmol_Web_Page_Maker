Jmol_Web_Page_Maker
===================

 Web based Jmol and Jmol Export to Web Tutorial

This repository duplicates the tutorial on using Jmol and its
export to web functionality that is maintained at:

http://www.uwosh.edu/faculty_staff/gutow/Jmol_Web_Page_Maker/Export_to_web_tutorial.shtml

The repository is used for development and tracking of changes.  People who wish to host
translations of this site are asked to create a translated branch.

Special Notes on Placing on your server
=======================================
1) You will save a lot of space if you do not put the contents of the jsmol directory
that appears with every .html page on your server.  Put the jsmol directory somewhere
in you server web space and then change the paths in the files to point to that.  You
need to change the paths specified in the following lines in the .html files:

    <script type="text/javascript" src="../../../Applets/JSmol/JSmol.min.js"></script>

    jarPath: "../../../Applets/JSmol/java", //path to applet .jar files on server.
    j2sPath: "../../../Applets/JSmol/j2s",//path to javascript version.
    makeLiveImg:"../../../Applets/JSmol/j2s/img/play_make_live.jpg",//path to activate 3-D image.
	   
2) If you are doing a translation you may also need to change the character encoding which is in 
one of the early meta statements of the header.

Jonathan Gutow
gutow@uwosh.edu
