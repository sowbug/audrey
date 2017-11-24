<!-- hide script content from old browsers

/**
 * objBrowser
 * ===============
 *
 * Constructs objBrowser with boolean properties for
 * (1) browser vendor: 
 *     .nav, .ie, .otherbrowser
 * (2) browser vendor and version: 
 *     .nav2, .nav3, ,nav3up, .nav4, .nav4up, .ie3, .ie4, .ie4up 
 * (3) JavaScript version: 
 *     .js, .js10, .js11, .js12, .js13up
 * (4) OS platform: 
 *     .win, .mac, .otherplatform
 * (5) custom categories: 
 *     .dhtml, .css1
 *
 * Also stores initial width & height of browser window in .width, .height properties
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function objBrowser() {

	// store screen size 
	this.width = window.innerWidth;
	this.height = window.innerHeight;

	// convert all characters to lowercase to simplify testing 
    strUserAgent = navigator.userAgent.toLowerCase(); 

    // get major and minor version numbers for browser
    strMajor = parseInt(navigator.appVersion); 
   	strMinor = parseFloat(navigator.appVersion);

	if ((navigator.appVersion.indexOf("Mac")!=-1) && (navigator.userAgent.indexOf("MSIE")!=-1) && (parseInt(navigator.appVersion)==3)) {
		gblnIE3Mac = true;
	}
	else {
		gblnIE3Mac = false;
	}
    // set properties for browser vendor & version
	// --- Netscape Navigator
	// properties for nav3up and nav4up are currently limited not to include nav5up
    this.nav  = ((strUserAgent.indexOf('mozilla')!=-1) && (strUserAgent.indexOf('spoofer')==-1) && (strUserAgent.indexOf('compatible') == -1) && (strUserAgent.indexOf('opera')==-1) && (strUserAgent.indexOf('webtv')==-1)); 
    this.nav2 = (this.nav && (strMajor == 2)); 
	this.nav3 = (this.nav && (strMajor == 3)); 
	this.nav3up = (this.nav && (strMajor >= 3) && (strMajor < 5)); 
    this.nav4 = (this.nav && (strMinor >= 4.05) && (strMinor < 4.5)); 
    this.nav45 = (this.nav && (strMinor >= 4.5) && (strMinor < 4.7)); 
    this.nav47 = (this.nav && (strMinor >= 4.7) && (strMajor < 5)); 
    this.nav4up = (this.nav && (strMinor >= 4.05)); 
	this.nav5up = (this.nav && (strMajor >= 5));
	// --- Internet Explorer
    this.ie   = ((strUserAgent.indexOf("msie") != -1) && (strUserAgent.indexOf("opera") == -1));
   	this.ie3  = (this.ie && (strMajor < 4)); 
    this.ie4  = (this.ie && (strMajor == 4) && (strMinor >= 4.01) && (strUserAgent.indexOf("msie 5.0")==-1) ); 
    this.ie4up  = (this.ie && (strMajor >= 4)); 
    this.ie5    = (this.ie && (strMajor == 4) && (strUserAgent.indexOf("msie 5.01")!=-1) );
    this.ie5up  = (this.ie  && !this.ie3 && !this.ie4);
    this.ie55  = (this.ie && (strMajor == 4) && (strUserAgent.indexOf("msie 5.5") !=-1));
    this.ie55up =(this.ie && !this.ie3 && !this.ie4 && !this.ie5);
	// --- Supported browsers
	this.supportedbrowser = (this.nav4up || this.ie4up);
	// --- Other browsers
	this.otherbrowser = !(this.nav || this.ie);

    // set properties for javascript version
	this.js = !(this.other);
	this.js10 = (this.nav2 || this.ie3);
	this.js11 = (this.nav3 || this.opera);
	this.js12 = ((this.nav4 && (strMinor <= 4.05)) || this.ie4);
	this.js13up = ((this.nav4 && (strMinor > 4.05)) || this.nav4up || this.ie4up);

    // set properties for platform
    this.win = ( (strUserAgent.indexOf("win")!=-1) || (strUserAgent.indexOf("16bit")!=-1) ); 
    this.mac = (strUserAgent.indexOf("mac")!=-1); 
	this.otherplatform = !(this.win || this.mac);

    // set properties for custom categories
	this.dhtml = (this.nav4 || this.nav45 || this.nav47 || this.ie4up);
	this.css1 = (this.nav4up || this.ie4up);
	this.frames = (this.nav || this.ie3 || this.ie4up);

} 

// Create global browser properties object
var objClient = new objBrowser();

/**
 * fncFixNetscapeResize
 * ===============
 *
 * Fix for Netscape resize bug
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncFixNetscapeResize(blnInit)
{
	if (objClient.nav4up)
	{
		if (blnInit)
		{
			window.onresize = fncFixNetscapeResize(false);
		}
		else
		{
			if ((window.innerWidth!=objClient.width) || (window.innerHeight!=objClient.height))
			{
				document.location.reload();
			}
		}
	}
}

// Initialize Netscape resize fix
fncFixNetscapeResize(true);

/**
 * fncOpenWindow
 * ===============
 *
 * Opens new popup window
 *
 * Parameters
 * ----------
 * in      strURL - URL to open in the new window
 * in      strName - Window name
 * in      intWidth - Window width, in pixels
 * in      intHeight - Window height, in pixels
 * in      blnMenubar - Boolean parameter indicating whether to show menu bar or not
 * in      blnToolbar - Boolean parameter indicating whether to show tool bar or not
 * in      blnDirectories - Boolean parameter indicating whether to show directories or not
 * in      blnLocation - Boolean parameter indicating whether to show location bar or not
 * in      blnScrollbars - Boolean parameter indicating whether to show scroll bars or not
 * in      blnStatus - Boolean parameter indicating whether to show status bar or not
 * in      blnResizable - Boolean parameter indicating whether window is resizable or not
 *
 * Return value
 * ------------
 * 
 */
function fncOpenWindow(strURL, strName, intWidth, intHeight, blnResizable, blnMenubar, blnToolbar, blnDirectories, blnLocation, blnScrollbars, blnStatus)
{
	var strWindowFeatures = "";
	if (blnMenubar)
	{
		strWindowFeatures += "menubar=yes";
	}
	else
	{
		strWindowFeatures += "menubar=no";
	}
	if (blnToolbar)
	{
		strWindowFeatures += ",location=yes";
	}
	else
	{
		strWindowFeatures += ",location=no";
	}
	if (blnDirectories)
	{
		strWindowFeatures += ",toolbar=yes";
	}
	else
	{
		strWindowFeatures += ",toolbar=no";
	}
	if (blnLocation)
	{
		strWindowFeatures += ",directories=yes";
	}
	else
	{
		strWindowFeatures += ",directories=no";
	}
	if (blnScrollbars)
	{
		strWindowFeatures += ",scrollbars=yes";
	}
	else
	{
		strWindowFeatures += ",scrollbars=no";
	}
	if (blnStatus)
	{
		strWindowFeatures += ",status=yes";
	}
	else
	{
		strWindowFeatures += ",status=no";
	}
	if (blnResizable)
	{
		strWindowFeatures += ",resizable=yes";
	}
	else
	{
		strWindowFeatures += ",resizable=no";
	}
	if (intWidth != null)
	{
		if (intWidth > 0)
		{
			strWindowFeatures += ",width=" + intWidth;
		}
	}
	if (intHeight != null)
	{
		if (intHeight > 0)
		{
			strWindowFeatures += ",height=" + intHeight;
		}
	}
	winPopupWindow = window.open(strURL, strName, strWindowFeatures);
}
	

/**
 * fncLoadStyleSheets
 * ===============
 *
 * Loads the appropriate stylesheets depending upon browser/platform
 *
 * Parameters
 * ----------
 * 	none							 
 *        					
 * Return value
 * ------------
 * 
 */
function fncLoadStyleSheets()
{
	if (objClient.css1)
	{
		// Load global stylesheet
		document.write("<link href='" + gstrCSSPath + "global.css' rel='STYLESHEET' type='text/css'>");
		// Load browser-platform-specific stylesheets
		if ((objClient.win) && (objClient.nav))
		{
			document.write("<link href='" + gstrCSSPath + "netscape.css' rel='STYLESHEET' type='text/css'>");
		}
	}
	return;
}

// Load stylesheet libraries
fncLoadStyleSheets();

/**
 * objLayer
 * ===============
 *
 * Constructor function for layer objects
 *
 * Parameters
 * ----------
 * in      objEvent - Captured browser event
 *
 * Return value
 * ------------
 * 
 */
function objLayer (strName, strBGColor, strOpacity, intWidth, intHeight)
{
	if (objClient.dhtml)
	{
		this.name = strName;
		this.bgcolor = strBGColor;
		if (objClient.ie4up)
		{
			this.opacity = "filter: alpha(opacity=95);";
			this.show = false;
			intX1 = document.images["holdspace"].offsetLeft;
			intY1 = document.images["holdspace"].offsetTop;
			objTemp = document.images["holdspace"].offsetParent;
		  	while (objTemp != null)
			{
		  		intX1 += objTemp.offsetLeft;
		  		objTemp = objTemp.offsetParent;
	  		}
			objTemp = document.images["holdspace"].offsetParent;
			while (objTemp != null)
			{
		  		intY1 += objTemp.offsetTop;
		  		objTemp = objTemp.offsetParent;
		  	}
		}
		else
		{
			this.opacity = strOpacity;
			this.show = true;
			intX1 = document.images["holdspace"].x;
			intY1 = document.images["holdspace"].y;
		}
		this.width = intWidth;
		this.height = intHeight;
		this.x1 = intX1 + gobjLayout.layerxshift;
		this.y1 = intY1 + gobjLayout.layeryshift;
		this.x2 = this.x1 + this.width; 
		this.y2 = this.y1 + this.height;
		this.style = fncBuildLayerStyle(this);
		document.write(this.style);
		document.write('<div id="' + this.name + '" name="' + this.name + '"><img src="/50templates/images/common/en_US/clear.gif" width="1" height="1"></div>');
	}
}

/**
 * fncBuildLayerStyle
 * ===============
 *
 * Builds style string for layer objects
 *
 * Parameters
 * ----------
 * in      objBuildLayer - layer object
 *
 * Return value
 * ------------
 * 
 */
function fncBuildLayerStyle (objBuildLayer)
{
 	// Build <style> string
	var strTemp = null;
	strTemp = "<style>#" + objBuildLayer.name;
	strTemp += " {position: absolute; left: " + objBuildLayer.x1;
	strTemp += "px; top: " + objBuildLayer.y1;
	// Use browser-specific terminology to indicate visibility
	if (objClient.ie4up)
	{
		if (objBuildLayer.show)
		{
			strTemp += "px; visibility: visible";
		}
		else
		{
			strTemp += "px; visibility: hidden";
		}
	}
	if (objClient.nav4up)
	{
		if (objBuildLayer.show)
		{
			strTemp += "px; visibility: show";
		}
		else
		{
			strTemp += "px; visibility: hide";
		}
	}
	if (objBuildLayer.bgcolor != "")
	{
		strTemp += "; background-color: " + objBuildLayer.bgcolor;
		// For Netscape Navigator, due to absolute positioning bug, layer-background-color attribute must also be set
		if (objClient.nav4up)
		{
			strTemp += "; layer-background-color: " + objBuildLayer.bgcolor;
		}
	}
	strTemp += "; width: " + objBuildLayer.width;
	strTemp += "px; height: " + objBuildLayer.height;
	strTemp += "px; z-index:1000;" +objBuildLayer.opacity+ "}</style>";
	return strTemp;
}

/**
 * objLayout
 * ===============
 *
 * Constructor function for layout objects
 *
 * Parameters
 * ----------
 * in      objEvent - Captured browser event
 *
 * Return value
 * ------------
 * 
 */
	/**
	* Search bar configuration parameters
	* .searchbar -	 	1: radio buttons for search zone selection are displayed
	* 					2: only search text field and button are displayed
	*        			3: search bar is not displayed
	* .searchimage -	Section-specific search zone - Label image filename & path
	* .searchalt -		Section-specific search zone - Alt tag text
	*/
	/**
	* Header image map parameters for header links
	* .headernavimage - 1: "Login | Downloads | Partner & Resellers Site | Order Status" image map
	* 					2: "Program Overview | Contact Us | Update Profile | E-Connect (B2B)" image map
	*/
	/**
	*  Local Nav configuration parameters
	*  .localnav -		0: no local nav
	*					1: Local Nav with subnav
	*					2: Local Nav, small-sized (width 65)
	*					3: Local Nav, large-sized (width 108) default setting
	*/
	/**
	* Footer image map parameters for footer links
	* .footernavimage - 	1: "Glossary, Site Map..." image map
	*						2: "Glossary, P&R site..." image map
	*/
function objLayout (strName)
{
	this.name = strName.toUpperCase();
	// set search bar mode
	this.searchbar = 1;			
	if ((this.name == "K") || (this.name == "N") || (this.name == "G") || (this.name == "L") || (this.name == "R") || (this.name == "S1") || (this.name == "S2") || (this.name == "HP"))
	{
		this.searchbar = 2;
	}
	if ((this.name == "J"))
	{
		this.searchbar = 3;
	}
	// set header nav image mode
	this.headernavimage = 1;			
	if (this.name == "S2")
	{
		this.headernavimage = 2;
	}
	// set show review cart mode
	this.showcart = true;			
	if ((this.name == "G") || (this.name == "S2"))
	{
		this.showcart = false;
	}
	// set show 800 number mode
	this.show800 = true;			
	if (this.name == "S2")
	{
		this.show800 = false;
	}
	// set banner type mode
	this.bannertype = 1;			
	if ((this.name == "G") || (this.name == "S1") || (this.name == "S2"))
	{
		this.bannertype = 0;
	}
	if (this.name == "F")
	{
		this.bannertype = 2;
	}
	// set local nav and localsubnav mode
	this.localnav = 3;
	if ((this.name == "G") || (this.name == "L") || (this.name == "S1") || (this.name == "S2"))
	{
		this.localnav = 0;
	}
	if ((this.name == "D") || (this.name == "E") || (this.name == "I"))
	{
		this.localnav = 1;
	}
	if (this.localnav == 2)
	{
		this.localnavmax = 7;
		this.localnavwidth = 58;
		this.localnavgutter = 34;
	}
	else
	{
		this.localnavmax = 5;
		this.localnavwidth = 120;
		this.localnavgutter = 10;
	}
	// set local nav background color
	this.localnavbgcolor = "#FFFFFF"; // set to white
	if (this.name == "F")
	{
		this.localnavbgcolor = "#EEEEEE"; // set to light gray
	}
	// set footer nav image mode
	this.footernavimage = 1;			
	if (this.name == "HP")
	{
		this.footernavimage = 2;
	}
	// set layer width & height
	if (this.name == "HP")
	{
		this.layerxshift = 5;
		this.layeryshift = 40;
		this.layerwidth = 130;
		this.layerheight = 183;
		this.layerbgcolor = "";
		this.layersubmenuheight = 20;
	}
	else
	{
		this.layerxshift = 4;
		this.layeryshift = 0;
		this.layerwidth = 162;
		this.layerheight = 116;
		this.layerbgcolor = "#8C8DA1";
		//Changed subheight from 13 to 15 to fix IE4.72 bug
		this.layersubmenuheight = 15;
	}
	// set layer scrolling
	this.layerscroll = true;
	// default for property for setting banner image
	this.bannerimage = "/50templates/images/common/en_US/clear.gif";
	// default for property for setting banner color extension
	this.bgcolorextension = "#9FC1E3";
	// default for property for setting search section label image
	this.searchimage = "/50templates/images/common/en_US/clear.gif";
	// default for property for setting alt tag for search section label image
	this.searchalt = "Search Section Only";
	// default for property for setting selected local navigation elements
	this.selectedparentnav = -1;
	this.selectedchildnav = -1;
}

/**
 * fncSwitch
 * ===============
 *
 * switches between on/off images to create the mouse rollover effect,
 * uses navigation element properties to access on/off image files, and
 * uses gobjNavArray to access navigation elements
 *
 * Parameters
 * ----------
 * in      intIndex1 - Array index of parent
 * in      intIndex2 - Array index of child
 * in      intState  - Indicates state of rollover, -0- for off, -1- for on
 *
 * Return value
 * ------------
 * 
 */
function fncSwitch(intIndex1, intIndex2, intState)
{
	if (intIndex1 < 0)
	{
		// Rollover effect for parent
		var objTemp = gobjNavArray[intIndex2];
		if (intState == 0)
		{
			// Switch rollover state to off
			document.images[objTemp.rollovername].src = objTemp.rollover.off.src;
		}
		else
		{
			// Switch rollover state to on
			document.images[objTemp.rollovername].src = objTemp.rollover.on.src;
		}
	}
	else
	{
		// Rollover effect for child
		objTemp = gobjNavArray[intIndex1].child[intIndex2];
		if (intState == 0)
		{
			// Switch rollover state to off
			if (objClient.nav4up)
			{
				if (gobjNavArray[intIndex1].type == 1)
				{
					document.layers[gobjLayout.layer.name].document.images[objTemp.rollovername].src = objTemp.rollover.off.src;
				}
				else
				{
					document.images[objTemp.rollovername].src = objTemp.rollover.off.src;
				}
			}
			if (objClient.ie4up)
			{
				document.images[objTemp.rollovername].src = objTemp.rollover.off.src;
			}
		}
		else
		{
			// Switch rollover state to on
			if (objClient.nav4up)
			{
				if (gobjNavArray[intIndex1].type == 1)
				{
					document.layers[gobjLayout.layer.name].document.images[objTemp.rollovername].src = objTemp.rollover.on.src;
				}
				else
				{
					document.images[objTemp.rollovername].src = objTemp.rollover.on.src;
				}
			}
			if (objClient.ie4up)
			{
				document.images[objTemp.rollovername].src = objTemp.rollover.on.src;
			}
		}
	}
	objTemp = null;
}

/**
 * fncCaptureEvents
 * ===============
 *
 * Event handler, must be called onload in body tag
 *
 * Parameters
 * ----------
 * in      objEvent - Captured browser event
 *
 * Return value
 * ------------
 * 
 */
function fncCaptureEvents()
{
	if ((gobjLayout.layer) && (objClient.dhtml))
	{
		{
			if (objClient.nav4up) {
		   		window.captureEvents(Event.MOUSEMOVE);
				window.onMouseMove = fncHandleMouseMove;
			}
			if (objClient.ie4up) {
				document.onmousemove = fncHandleMouseMove;
			}
		}
	}
}
	
// end hiding -->


