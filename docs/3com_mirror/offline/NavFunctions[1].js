<!-- hide script content from old browsers

/**
 * fncShowSubMenu
 * ===============
 *
 * builds & turns visibility on for sub menu layer
 *
 * Parameters
 * ----------
 * in      intOption - Integer corresponding to option selected from main menu
 *
 * Return value
 * ------------
 * 
 */
function fncShowSubMenu(intOption)
{
	if (objClient.dhtml)
	{
		fncRefreshSubMenu(intOption);
		fncShowLayer(gobjLayout.layer.name);
		fncPopulateSubMenu(intOption);
		fncScrollSubMenu(true);
		gobjLayout.layer.show = true;
	}
}

/**
 * fncHideSubMenu
 * ===============
 *
 * turns visibility off for sub menu layer
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncHideSubMenu()
{
	fncRefreshSubMenu(-1);
	fncScrollSubMenu(false);
	gobjLayout.layer.show = false;
}

/**
 * fncRefreshSubMenu
 * ===============
 *
 * builds & turns visibility on for sub menu layer
 *
 * Parameters
 * ----------
 * in      intOption - Integer corresponding to option selected from main menu
 *
 * Return value
 * ------------
 * 
 */
function fncRefreshSubMenu(intOption)
{
	if (intOption == -1)
	{
		fncSwitch(-1,0,0);
		fncSwitch(-1,1,0);
		fncSwitch(-1,2,0);
	}	
	if (intOption == 0)
	{
		fncSwitch(-1,0,1);
		fncSwitch(-1,1,0);
		fncSwitch(-1,2,0);
	}	
	if (intOption == 1)
	{
		fncSwitch(-1,0,0);
		fncSwitch(-1,1,1);
		fncSwitch(-1,2,0);
	}	
	if (intOption == 2)
	{
		fncSwitch(-1,0,0);
		fncSwitch(-1,1,0);
		fncSwitch(-1,2,1);
	}	
}

/**
 * fncHandleMouseMove
 * ===============
 *
 * resets main menu to reflect current menu selection
 *
 * Parameters
 * ----------
 * in      objEvent - Captured browser event
 *
 * Return value
 * ------------
 * 
 */
function fncHandleMouseMove(evtMouseMove) {
	var objTemp = gobjLayout.layer;
	// Get mouse coordinates
	if (objClient.nav4up) {
		intMouseX = evtMouseMove.pageX;
		intMouseY = evtMouseMove.pageY;
	}
	if (objClient.ie4up) {
		intMouseX = document.body.scrollLeft + eval(event.clientX);
		intMouseY = document.body.scrollTop + eval(event.clientY);
	}
	// Hide only if sub menu layer is already visible
	if (objTemp.show)
	{
		// Check for horizontal bounds
		if ((intMouseX > 0) && (intMouseX < objTemp.x2) && (intMouseY > objTemp.y1) && (intMouseY < objTemp.y2))
		{
			// Do nothing!
		}
		else
		{
			// Hide sub menu
			fncHideSubMenu();
		}
	}
	objTemp = null;
}
	
/**
 * fncShowLayer
 * ===============
 *
 * sets layer visibility on
 *
 * Parameters
 * ----------
 * in      strLayerName - Layer name
 *
 * Return value
 * ------------
 * 
 */
function fncShowLayer(strLayerName) {
	if (objClient.nav4up) {
		document.layers[strLayerName].visibility='show';
	}
 	if (objClient.ie4up) {
		document.all[strLayerName].style.visibility='visible';
	}
}

/**
 * fncHideLayer
 * ===============
 *
 * sets layer visibility off
 *
 * Parameters
 * ----------
 * in      strLayerName - Layer name
 *
 * Return value
 * ------------
 * 
 */
function fncHideLayer(strLayerName) {
	if (objClient.nav4up) {
		document.layers[strLayerName].visibility='hide';
	}
 	if (objClient.ie4up) {
		document.all[strLayerName].style.visibility='hidden';
	}
}

/**
 * fncClipLayer
 * ===============
 *
 * clips layer into specified rectangular bounds
 *
 * Parameters
 * ----------
 * in      strLayerName - Layer name
 * in      intX1 - X-coordinate for left end of clipping rectangle, in pixels
 * in      intX2 - X-coordinate for right end of clipping rectangle, in pixels
 * in      intY1 - Y-coordinate for upper end of clipping rectangle, in pixels
 * in      intY2 - Y-coordinate for lower end of clipping rectangle, in pixels
 *
 * Return value
 * ------------
 * 
 */
function fncClipLayer(strLayerName, intX1, intX2, intY1, intY2) {
	
	gintCurrentX2 = intX2;
	if (objClient.nav4up) {
		document.layers[strLayerName].clip.top=intY1;
         document.layers[strLayerName].clip.bottom=intY2;
         document.layers[strLayerName].clip.left=intX1;
         document.layers[strLayerName].clip.right=intX2;
		//document.layers[strLayerName].clip= 'rect('+intY1+','+intX2+','+intY2+','+intX1+')';
	}
 	if (objClient.ie4up) {
		document.all[strLayerName].style.clip= 'rect('+intY1+','+intX2+','+intY2+','+intX1+')';
	}
}

/**
 * fncScrollSubMenu
 * ===============
 *
 * creates horizontal scrolling effect for showing/hiding specified layer
 *
 * Parameters
 * ----------
 * in      blnScrollOut - boolean argument indicating scroll direction (true for out, false for in)
 *
 * Return value
 * ------------
 * 
 */
var gintScrollCurtainInc = 54;        // Curtain increment for horizontal scrolling effect, in pixels
var gintScrollTimeInc = 100;          // Time increment for horizontal scrolling effect, in miliseconds
var gintCurrentX2 = 0;                // Current right-end X-coordinate of sub menu layer while scrolling, in pixels
var gintTimeout = 0;                  // Current timeout for scrolling effect
function fncScrollSubMenu(blnScrollOut){
	if (!gobjLayout.layerscroll)
	{
		gintScrollCurtainInc = gobjLayout.layer.width;
		gintScrollTimeInc = 0;
	}
	objTemp = gobjLayout.layer;
	// initialize timeout
	if (gintTimeout != 0) {
		clearTimeout(gintTimeout);
	}
	if (blnScrollOut) {
		if (gintCurrentX2 < objTemp.width) {
			// scroll out
			fncClipLayer(objTemp.name, 0, (gintCurrentX2 + gintScrollCurtainInc), 0, objTemp.height);
			gintTimeout = setTimeout("fncScrollSubMenu(true)", gintScrollTimeInc);
		}
	}
	else {
		if (gintCurrentX2 > 0) {
			// scroll in
			fncClipLayer(objTemp.name, 0, (gintCurrentX2 - gintScrollCurtainInc), 0, objTemp.height);
			gintTimeout = setTimeout("fncScrollSubMenu(false)", gintScrollTimeInc);
		}
	}
	objTemp = null;
}
	
/**
 * fncPopulateSubMenu
 * ===============
 *
 * populates sub menu layer with navigation options
 *
 * Parameters
 * ----------
 * in      intMenuOption - Selected menu option
 *
 * Return value
 * ------------
 * 
 */
function fncPopulateSubMenu(intParent)
{
	var objTemp = gobjNavArray[intParent];
	//Start with spacer table
	var strTemp = null;
	strTemp = "<table border='0' cellpadding='0' cellspacing='0' width='" + gobjLayout.layer.width + "'><tr valign='middle' align='left'><td width='10'>";
	strTemp += "<img src='" + gobjClear.on.src + "' width='1' height='" + gobjLayout.layersubmenuheight + "' border='0' alt=''>";
	strTemp += "</td><td width='" + gobjLayout.layer.width + "' align='left'></td></tr></table>";
	for (i = 0; i < objTemp.child.length; i++)
	{ // loop through all navigation objects
		// cumulative construction of HTML code for populating layer with all sub menu options
		strTemp += "<table border='0' cellpadding='0' cellspacing='0' width='" + gobjLayout.layer.width + "'><tr valign='middle' align='left'><td width='10'>";
		strTemp += "<img src='" + objTemp.child[i].rollover.off.src + "' name='" + objTemp.child[i].rollovername + "' width='10' height='" + gobjLayout.layersubmenuheight + "' border='0'></td>";	
		strTemp += "<td width='" + (gobjLayout.layer.width - 10) + "' align='left'><a href='" + objTemp.child[i].href + "'";
		strTemp += " onMouseOver='fncSwitch(" + intParent + "," + i + ",1);'";
		strTemp += " onMouseOut='fncSwitch(" + intParent + "," + i + ",0);' class='globalnavoff'>";
		strTemp += objTemp.child[i].label + "</a>";
		strTemp += "</td></tr></table>";
	}
	//Bad HTML for IE5 on Mac fix -sjb	
	strTemp += "</table>";
	// create new layer content by writing to document
	if (objClient.nav4up) {
		document.layers[gobjLayout.layer.name].document.open();
		document.layers[gobjLayout.layer.name].document.write(strTemp);
		document.layers[gobjLayout.layer.name].document.close();
	}
 	if (objClient.ie4up) {
		document.all[gobjLayout.layer.name].innerHTML = strTemp;
	}
	objTemp = null;
	strTemp = null;
	}

// end hiding -->

