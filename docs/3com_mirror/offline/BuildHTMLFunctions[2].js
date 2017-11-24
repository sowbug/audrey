<!-- hide script content from old browsers

/**
 * fncBuildLogo
 * ===============
 *
 * Builds 3Com logo in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildLogo()
{
	var strTemp = '<td align="right" valign="top" rowspan="4" height="114">';
	strTemp += '<a href="' + gobjNavArray[4].href + '"><img src="' + gobj3ComLogo.on.src +'" width="141" height="99" border="0" alt="' + gobjNavArray[4].label + '"></a>';
	strTemp += '<img src="' + gobjClear.on.src +'" width="5" height="1">';
	strTemp += '</td>';
	document.write(strTemp);
}

/**
 * fncBuildBannerLeft
 * ===============
 *
 * Builds left-end main nav menu in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildBannerLeft()
{

var strTemp = ""
	// Display the Main Navigation Menus
	if (gobjLayout.bannertype == 1)
	{
strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
strTemp += '<tr>';
strTemp += '<td width="103"><img src="' + gobjClear.on.src +'" width="103" height="1" border="0"></td>';
strTemp += '<td width="100%" bgcolor="#5A5A5A"><img name="holdspace" id="holdspace" src="' + gobjClear.on.src +'" width="1" height="1" border="0"></td>';
strTemp += '</tr>';
strTemp += '</table>';
strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
strTemp += '<tr>';

		strTemp += '<td valign="top" align="right" width="103"><img src="' + gobjClear.on.src +'" width="1" height="4"><br>';
		strTemp += '<a href="' + gobjNavArray[0].href + '" onmouseover="fncShowSubMenu(0)"><img src="' + gobjNavArray[0].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[0].rollovername + '"></a><br>';
		strTemp += '<a href="' + gobjNavArray[1].href + '" onmouseover="fncShowSubMenu(1)"><img src="' + gobjNavArray[1].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[1].rollovername + '"></a><br>';
		strTemp += '<a href="' + gobjNavArray[2].href + '" onmouseover="fncShowSubMenu(2)"><img src="' + gobjNavArray[2].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[2].rollovername + '"></a></td>';

strTemp += '	<td width="5" align="left">';
strTemp += '		<table border="0" cellspacing="0" cellpadding="0">';
strTemp += '			<tr>';
strTemp += '				<td width="1" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0" alt=""></td>';
strTemp += '				<td width="3"><img src="' + gobjClear.on.src +'" width="3" border="0"></td>';
strTemp += '				<td width="1" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0" alt=""></td>';

	document.write(strTemp);
	}
	// DO NOT Display the Main Navigation Menus
	if (gobjLayout.bannertype == 2)
	{
strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
strTemp += '<tr>';

		strTemp += '<td valign="top" align="right" width="103"><img src="' + gobjClear.on.src +'" width="1" height="4"><br>';
		strTemp += '<a href="' + gobjNavArray[0].href + '" onmouseover="fncShowSubMenu(0)"><img src="' + gobjNavArray[0].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[0].rollovername + '"></a><br>';
		strTemp += '<a href="' + gobjNavArray[1].href + '" onmouseover="fncShowSubMenu(1)"><img src="' + gobjNavArray[1].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[1].rollovername + '"></a><br>';
		strTemp += '<a href="' + gobjNavArray[2].href + '" onmouseover="fncShowSubMenu(2)"><img src="' + gobjNavArray[2].rollover.off.src + '" width="103" height="36" border="0" name="' + gobjNavArray[2].rollovername + '"></a></td>';

strTemp += '	<td width="5" align="left">';
strTemp += '		<table border="0" cellspacing="0" cellpadding="0">';
strTemp += '			<tr>';
strTemp += '				<td width="1" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0" alt=""></td>';
strTemp += '				<td valign="top" width="3"><img src="' + gobjClear.on.src +'" width="3" border="0"></td>';
strTemp += '				<td width="1" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0" alt=""></td>';

	document.write(strTemp);
	}
}

/**
 * fncBuildBannerMiddle
 * ===============
 *
 * Builds banner in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildBannerMiddle()
{

var strTemp = ""
	// banner type 1
	if (gobjLayout.bannertype == 1	|| gobjLayout.bannertype == 2)
	{
	gobjBannerImage = new objRollover(gobjLayout.bannerimage, gobjLayout.bannerimage, gobjDIProject);
		strTemp += '		<td><img src="' + gobjBannerImage.on.src + '" width="660" height="116" border="0" alt=""></td>';

	document.write(strTemp);
	}
}	

/**
 * fncBuildBannerRight
 * ===============
 *
 * Builds right-end banner line extensions in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildBannerRight()
{

var strTemp = ""
	if (gobjLayout.bannertype == 1 || gobjLayout.bannertype == 2)
	{

strTemp += '			</tr>';
strTemp += '		</table>';
strTemp += '	</td>';
strTemp += '	<td width="100%" bgcolor="' + gobjLayout.bgcolorextension + '" align="left" valign="top">';
strTemp += '	<table cellpadding="0" cellspacing="0" border="0" width="100%" height="116">';
strTemp += '		<tr>';
strTemp += '			<td height="90" bgcolor="' + gobjLayout.bgcolorextension + '"><img height="90" src="' + gobjClear.on.src +'" width="1"></td>';
strTemp += '		</tr>';
strTemp += '		<tr>';
strTemp += '			<td height="1" bgcolor="#ffffff"><img height="1" src="' + gobjClear.on.src +'" width="1"></td>';
strTemp += '		</tr>';
strTemp += '		<tr>';
strTemp += '			<td height="24" bgcolor="' + gobjLayout.bgcolorextension + '"><img height="24" src="' + gobjClear.on.src +'" width="1"></td>';
strTemp += '		</tr>';
strTemp += '		<tr>';
strTemp += '			<td height="1"><img height="1" src="' + gobjClear.on.src +'" width="1"></td>';
strTemp += '		</tr>';
strTemp += '	</table>';
strTemp += '	</td>';
strTemp += '</tr>';
strTemp += '</table>';
strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
strTemp += '<tr>';
strTemp += '<td width="103"><img src="' + gobjClear.on.src +'" width="103" height="1" border="0"></td>';
strTemp += '<td width="100%" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0"></td>';
strTemp += '</tr>';
strTemp += '</table>';
	document.write(strTemp);
	}
	if ((gobjLayout.bannertype == 1) || (gobjLayout.bannertype == 2))
	{
	gobjLayout.layer = new objLayer("subNav", gobjLayout.layerbgcolor, "", gobjLayout.layerwidth, gobjLayout.layerheight);	
	}
}



/**
 * objSearch
 * ===============
 *
 * Constructor function for Search objects
 *
 * Parameters
 * ----------
 * in      	strImageName - Image Name of Section Only of Search
 * in		strRadioValue - Value for the Section Radio btn in Search bar
 *
 * Return value
 * ------------
 * 
 */
function objSearch(strImageName, strRadioValue)
{
	this.imagesrc = strImageName;
	this.value = strRadioValue;
} 

/**
 * fncBuildSearchBar
 * ===============
 *
 * Builds search bar in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildSearchBar()
{
	// create array for radio values for section only searches with image names and values
	var arrSearchValue = new Array(13);
	
	arrSearchValue[0] = new objSearch("hdr_wiremobonly_gy.gif","mob");
	arrSearchValue[1] = new objSearch("hdr_homeofficeonly_gy.gif","home");
	arrSearchValue[2] = new objSearch("hdr_smallbusonly_gy.gif","smbiz");
	arrSearchValue[3] = new objSearch("hdr_enterpriseonly_gy.gif","entrp");
	arrSearchValue[4] = new objSearch("hdr_educationonly_gy.gif","edu");
	arrSearchValue[5] = new objSearch("hdr_governonly_gy.gif","govt");
	arrSearchValue[6] = new objSearch("hdr_productsonly_gy.gif","prod");
	arrSearchValue[7] = new objSearch("hdr_profservonly_gy.gif","serv");
	arrSearchValue[8] = new objSearch("hdr_techonly_gy.gif","news");
	arrSearchValue[9] = new objSearch("hdr_newsonly_gy.gif","tech");
	arrSearchValue[10] = new objSearch("hdr_support_gy.gif","supp");
	arrSearchValue[11] = new objSearch("hdr_quickcourse_gy.gif","quick");
	arrSearchValue[12] = new objSearch("hdr_downloads_gy.gif","dwnld");

	
	// radio buttons for search zone selection are displayed
	if (gobjLayout.searchbar == 1)
	{
		var strRadioValue = "";
		var strTemp = ""
		// find appropriate Search type and assign radio button value for section-specific based on searchalt tag
		for (i = 0; i < arrSearchValue.length; i++)
		{
			// test for image name and assign proper value to Radio btn for Search Section
			if (gobjLayout.searchimage.indexOf(arrSearchValue[i].imagesrc) != -1)
			{
				strRadioValue = arrSearchValue[i].value;
			}
		}
		gobjSearchSectionImage = new objRollover(gobjLayout.searchimage, gobjLayout.searchimage, gobjDIProject);
		strTemp += '<form name="frmSearch" action="' + gobjNavArray[3].href + '">';
		strTemp += '<td valign="middle"><nobr>&nbsp;<input type="text" name="qt" size="16">&nbsp;&nbsp;<a name="searchlink" href="javascript:document.frmSearch.submit();" onmouseover="fncSwitch(-1,3,1);" onmouseout="fncSwitch(-1,3,0);"><img src="' + gobjNavArray[3].rollover.off.src + '" width="5" height="16" border="0" name="' + gobjNavArray[3].rollovername + '" id="' + gobjNavArray[3].rollovername + '"><img src="' + gobjSearch.on.src +'" width="57" height="16" border="0" alt="' + gobjNavArray[3].label + '"></a>&nbsp;&nbsp;<input type="radio" name="col" value="' + strRadioValue + '" checked>&nbsp;<img src="' + gobjSearchSectionImage.on.src + '" height="16" border="0" alt="' + gobjLayout.searchalt + '">&nbsp;&nbsp;<input type="radio" name="col" value="all">&nbsp;<img src="' + gobjEntireSite.on.src +'" width="114" height="16" border="0" alt="Entire Site"></nobr></td>';
		strTemp += '</form>';
		document.write(strTemp);
	}
	// only search text field and button are displayed
	
	if (gobjLayout.searchbar == 2)
	{
		var strTemp = ""
		strTemp += '<form name="frmSearch" action="' + gobjNavArray[3].href + '">';
		strTemp += '<td valign="middle"><nobr>&nbsp;<input type="text" name="qt" size="16">&nbsp;&nbsp;<a name="searchlink" href="javascript:document.frmSearch.submit();" onmouseover="fncSwitch(-1,3,1);" onmouseout="fncSwitch(-1,3,0);"><img src="' + gobjNavArray[3].rollover.off.src + '" width="5" height="16" border="0" name="' + gobjNavArray[3].rollovername + '" id="' + gobjNavArray[3].rollovername + '"><img src="' + gobjSearch.on.src +'" width="57" height="16" border="0" alt="' + gobjNavArray[3].label + '"><input type="hidden" name="col" value="all"></a></td>';
		strTemp += '</form>';
		document.write(strTemp);
	}
	// search bar is not displayed
	if (gobjLayout.searchbar == 3)
	{
		var strTemp = ""
		strTemp += '<td valign="middle" height="16"></td>';
		document.write(strTemp);
	}
}

/**
 * fncBuildHeaderLinks
 * ===============
 *
 * Build header links
 *
 * Parameters
 * ----------
 *        					
 * Return value
 * ------------
 * 
 */ 
function fncBuildHeaderLinks()
{
	var strTemp = '';
	// "Login | Downloads | Partner and Resellers Site | My Account | Order Status" image map
	if (gobjLayout.headernavimage == 1)
	{
		// build image map
		strTemp = '<map name="topNav"><area shape="rect" coords="1,0,51,13" alt="' + gobjNavArray[5].label + '" href="' + gobjNavArray[5].href + '"><area shape="rect" coords="52,0,136,13" alt="' + gobjNavArray[6].label + '" href="' + gobjNavArray[6].href + '"><area shape="rect" coords="137,0,298,13" alt="' + gobjNavArray[7].label + '" href="' + gobjNavArray[7].href + '"><area shape="rect" coords="299,0,387,13" alt="' + gobjNavArray[8].label + '" href="' + gobjNavArray[8].href + '"><area shape="rect" coords="388,0,489,13" alt="' + gobjNavArray[9].label + '" href="' + gobjNavArray[9].href + '"></map>';
		document.write (strTemp);
		// build corresponding table
		strTemp = '<tr>';
		strTemp += '<td valign="top"><img name="navigation" src="' + gobjHeaderLinks1.on.src +'" width="507" height="13" border="0" usemap="#topNav"></td>';
		strTemp += '</tr>';
		strTemp += '<tr>';
		strTemp += '<td bgcolor="#5A5A5A" width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
		strTemp += '</tr>';
		strTemp += '</table>';
		strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
	//  For ALL layouts:  if true, Display the 1 800 number and the Review Cart or Checkout button
		if (gobjLayout.showcart == true)
		{
			strTemp += '<tr>';
			strTemp +=	'<td valign="middle"><img src="' + gobjClear.on.src +'" width="88" height="1"></td>';
			strTemp +=	'<td valign="middle" nowrap width="210"><font class="headertext" face="arial">Order Online or Call 1 877-949-3266 &nbsp;</font></td>';
			strTemp +=	'<td valign="middle"><a href="' + gobjNavArray[10].href + '"><img src="' + gobjReviewCart1.on.src + '" width="192" height="15" border="0" alt="' + gobjNavArray[10].label + '"></a></td>';
			strTemp += '</tr>';
			strTemp += '<tr>';
			strTemp +=  '<td><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
			strTemp +=	'<td><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
			strTemp +=	'<td bgcolor="#5A5A5A" width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1">';
			strTemp +=	'</td>';
			strTemp += '</tr>';
		}
		// otherwise for Layout G:  Display the 1 800 number but do not display the Review Cart or Checkout button
		else
		{
			strTemp += '<tr>';
			strTemp +=	'<td valign="middle"><img src="' + gobjClear.on.src +'" width="88" height="1"></td>';
			strTemp +=	'<td valign="middle" nowrap width="210"><font class="headertext" face="arial">Order Online or Call 1 877-949-3266 &nbsp;</font></td>';
			strTemp +=	'<td valign="middle"><a href="' + gobjNavArray[10].href + '"><img src="' + gobjReviewCart2.on.src + '" width="192" height="15" border="0" alt="Review Cart"></a></td>';
			strTemp += '</tr>';
			strTemp += '<tr>';
			strTemp +=  '<td><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
			strTemp +=	'<td><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
			strTemp +=	'<td bgcolor="#5A5A5A" width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1">';
			strTemp +=	'</td>';
			strTemp += '</tr>';
		}
	}
	
	// For Layout S2: Display the "Login | Downloads | Partner and Resellers Site | " image map only
	if (gobjLayout.headernavimage == 2)
	{
		// build image map
		strTemp = '<map name="topNav"><area shape="rect" coords="1,0,51,13" alt="' + gobjNavArray[5].label + '" href="' + gobjNavArray[5].href + '"><area shape="rect" coords="52,0,136,13" alt="' + gobjNavArray[6].label + '" href="' + gobjNavArray[6].href + '"><area shape="rect" coords="137,0,298,13" alt="' + gobjNavArray[7].label + '" href="' + gobjNavArray[7].href + '"></map>';
		document.write (strTemp);
		// build corresponding table
		strTemp = '<tr>';
		strTemp += '<td valign="top"><img name="navigation" src="' + gobjHeaderLinks2.on.src +'" width="507" height="13" border="0" usemap="#topNav"></td>';
		strTemp += '</tr>';
		strTemp += '<tr>';
		strTemp += '<td bgcolor="#5A5A5A" width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
		strTemp += '</tr>';
		strTemp += 		'<tr>';
		strTemp += 			'<td><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
		strTemp += 			'<td width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1"></td>';
		strTemp += 		'</tr>';
		
	}
	document.write(strTemp);
}

/**
 * fncBuildFooterNav
 * ===============
 *
 * Build footer links
 *
 * Parameters
 * ----------
 * Build header links
 *        					
 * Return value
 * ------------
 * 
 */
 
function fncBuildFooterLinks()
{
		
	var strTemp = '';
	// "Glossary, Site Map..." image map
	if (gobjLayout.footernavimage == 1)
	{
		//Construct string for Glossary | Site Map | Who is 3Com? | Contact US image map tags
		strTemp += '<map name="bottomNav">';
		strTemp += '<area shape="rect" coords="0,0,76,13" alt="' + gobjNavArray[11].label + '" href="' + gobjNavArray[11].href + '">';
		strTemp += '<area shape="rect" coords="77,0,145,13" alt="' + gobjNavArray[12].label + '" href="' + gobjNavArray[12].href + '">';
		strTemp += '<area shape="rect" coords="146,0,241,13" alt="' + gobjNavArray[13].label + '" href="' + gobjNavArray[13].href + '">';
		strTemp += '<area shape="rect" coords="242,0,327,13" alt="' + gobjNavArray[14].label + '" href="' + gobjNavArray[14].href + '">';
		strTemp += '</map>';
		//Write out string for image map tags
		document.write(strTemp);		
		//reset temp string
		strTemp = '';
		//Construct string for map image
		strTemp += '<td>';
		strTemp += '<img src="' + gobjFooterLinks1.on.src +'" width="498" height="13" border="0" usemap="#bottomNav">';
		strTemp += '</td>';
		//Write out string for map image
		document.write(strTemp);		
	}
	//reset temp string
	strTemp = '';
	// "Glossary, P&R site..." image map
	if (gobjLayout.footernavimage == 2)
	{
		//Construct string for Glossary | Sitemap | Who is 3Com? | Contact Us | Commworks Web Site image map links
		strTemp += '<map name="bottomNav">';
		strTemp += '<area shape="rect" coords="0,0,76,13" alt="' + gobjNavArray[11].label + '" href="' + gobjNavArray[11].href + '">';
		strTemp += '<area shape="rect" coords="77,0,145,13" alt="' + gobjNavArray[12].label + '" href="' + gobjNavArray[12].href + '">';
		strTemp += '<area shape="rect" coords="146,0,241,13" alt="' + gobjNavArray[13].label + '" href="' + gobjNavArray[13].href + '">';
		strTemp += '<area shape="rect" coords="242,0,327,13" alt="' + gobjNavArray[14].label + '" href="' + gobjNavArray[14].href + '">';
		strTemp += '<area shape="rect" coords="328,0,498,13" alt="' + gobjNavArray[15].label + '" href="' + gobjNavArray[15].href + '">';
		strTemp += '</map>';
		//write out string for image map links
		document.write(strTemp);
		//reset temp string
		strTemp = '';
		//Construct string for map image
		strTemp += '<td>';
		strTemp += '<img src="' + gobjFooterLinks2.on.src +'" width="498" height="13" border="0" usemap="#bottomNav">';
		strTemp += '</td>';
		//Write out string for map image
		document.write(strTemp);
	}	
}

/**
 * fncBuildLegalPrivacy
 * ===============
 *
 * Build legal & privacy links in the footer
 *
 * Parameters
 * ----------
 * Build header links
 *        					
 * Return value
 * ------------
 * 
 */
 
function fncBuildLegalPrivacy()
{
	var strTemp = '<a href="' + gobjNavArray[16].href + '" class="footerlink">Legal</a>';
	strTemp += '<img src="' + gobjClear.on.src +'" width="23" height="1" border="0">';
	strTemp += '<a href="' + gobjNavArray[17].href + '" class="footerlink">Privacy</a>';
	document.write(strTemp);
}

/**
 * fncBuildCopyright
 * ===============
 *
 * Build copyright link in the footer
 *
 * Parameters
 * ----------
 * Build header links
 *        					
 * Return value
 * ------------
 * 
 */
 
function fncBuildCopyright()
{
	var strTemp = '<a class="copyright" href="' + gobjNavArray[18].href + '">Copyright &copy 2001 3Com Corporation. All rights reserved.</a>';
	document.write(strTemp);
}

/**
 * fncBuildLocalNav
 * ===============
 *
 * Builds local navigation menu in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildLocalNav()
{
	if (gobjLayout.localnav == 1 || gobjLayout.localnav == 2 || gobjLayout.localnav == 3)
	{
	if ((gobjLayout.localnav != 2) || (gobjLayout.localnavwidth + gobjLayout.localnavgutter > 130))
	{
		gobjLayout.localnavwidth = Math.max(116,gobjLayout.localnavwidth);
		gobjLayout.localnavgutter = Math.max(0,130 - gobjLayout.localnavwidth);
	}
	// get count of local nav objects from image names
	var intCount = 0;
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			intCount++;
		}
	}
	intCount = Math.min(intCount,gobjLayout.localnavmax);
	intSpaces = gobjLayout.localnavmax - intCount;
	var strTemp = '';
	// Start building HTML string
	strTemp = '<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="' + gobjLayout.localnavbgcolor +'">';
	strTemp += '<tr>';
	strTemp += '<td width="107" bgcolor="#ffffff"><img src="' + gobjClear.on.src +'" width="107" height="1" border="0"></td>';
	strTemp += '<td width="1" valign="top" align="left" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="24" border="0"></td>';
	strTemp += '<td>';
	strTemp += '<table border="0" cellspacing="0" cellpadding="0" width="555">';
	// Loop from last main nav element to max allowed number of local nav elements to create cells & gutters
	strTemp += '<tr><td rowspan="3" width="10"><img src="' + gobjClear.on.src +'" width="10" height="24" border="0"></td>';
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			strTemp += '<td width="' + gobjLayout.localnavwidth + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavwidth + '" height="1" border="0"></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	// Build space holders if local nav count less than maximum allowed
	if (intSpaces > 0)
	{
		for (i = 1; i <= intSpaces; i++)
		{	
			strTemp += '<td width="' + gobjLayout.localnavwidth + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavwidth + '" height="1" border="0"></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	strTemp += '</tr>';
	// Loop from last main nav element to max allowed number of local nav elements
	strTemp += '<tr align="left" valign="bottom">';
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			//If no sub navs present, make roll-over work for Local Nav
			if (gobjLayout.localnav == 2 || gobjLayout.localnav == 3)
			{
				//If current local nav is the selected on, use selected state
				if (gobjLayout.selectedparentnav == i)
				{
					
					strTemp += '<td><a class="lnavon">' + gobjNavArray[i].label + '</a></td>';
				}
				else
				{
					strTemp += '<td><a href="' + gobjNavArray[i].href + '" class="lnavoff">' + gobjNavArray[i].label + '</a></td>';
				}
			}
			else
			{
				strTemp += '<td><a class="lnavoff">' + gobjNavArray[i].label + '</a></td>';
			}
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td>&nbsp;</td>';
			}
		}
	}
	// Build space holders if local nav count less than maximum allowed
	if (intSpaces > 0)
	{
		for (i = 1; i <= intSpaces; i++)
		{	
			strTemp += '<td>&nbsp;</td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td>&nbsp;</td>';
			}
		}
	}
	strTemp += '</tr>';
	// End row, start next row for local nav rollover images
	strTemp += '<tr>';
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			strTemp += '<td width="' + gobjLayout.localnavwidth + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavwidth + '" height="1" border="0"></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	strTemp += '</tr>';
	strTemp += '</table></td><td width="100%"><img src="' + gobjClear.on.src +'" width="1" height="24" border="0"></td></tr></table>';
	strTemp += '<table cellpadding="0" cellspacing="0" border="0" width="100%">';
	strTemp += '<tr bgcolor="#5A5A5A">';
	strTemp += '<td width="107" bgcolor="#ffffff"><img src="' + gobjClear.on.src +'" width="107" height="1" border="0"></td>';
	strTemp += '<td width="1" rowspan="3"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0"></td>';
	strTemp += '<td width="545"><img src="' + gobjClear.on.src +'" width="545" height="1" border="0"></td>';
	strTemp += '<td width="100%"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0"></td>';
	strTemp += '</tr>';
	strTemp += '</table>';
	// Build local nav elements
	document.write (strTemp);
	}
}

/**
 * fncBuildLocalSubNav
 * ===============
 *
 * Builds local navigation sub menus in the header 
 *
 * Parameters
 * ----------
 *
 * Return value
 * ------------
 * 
 */
function fncBuildLocalSubNav()
{
	var strTemp = '';
	if (gobjLayout.localnav == 1)
	{
	// Start building HTML string
	strTemp = '<table cellpadding="0" cellspacing="0" border="0">';
	strTemp += '<tr>';
	strTemp += '<td width="108" bgcolor="#ffffff"><img src="' + gobjClear.on.src +'" width="108" height="1" border="0"></td>';
	strTemp += '<td>';
	strTemp += '<table border="0" cellspacing="0" cellpadding="0" width="555">';
	// Loop from last main nav element to max allowed number of local nav elements to create cells & gutters
	strTemp += '<tr><td rowspan="3" width="10"><img src="' + gobjClear.on.src +'" width="10" height="1" border="0"></td>';
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			strTemp += '<td width="' + gobjLayout.localnavwidth + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavwidth + '" height="1" border="0"></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	// Build space holders if local nav count less than maximum allowed
	if (intSpaces > 0)
	{
		for (i = 1; i <= intSpaces; i++)
		{	
			strTemp += '<td width="' + gobjLayout.localnavwidth + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavwidth + '" height="1" border="0"></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	strTemp += '</tr>';
	// Loop from last main nav element to max allowed number of local nav elements
	strTemp += '<tr align="left" valign="top">';
	for (i = 0; i < gobjNavArray.length; i++)
	{	
		if (gobjNavArray[i].type == 3)
		{
			intLocalSubNavCount = gobjNavArray[i].child.length;
			strTemp += '<td><table width="108" cellspacing="0" cellpadding="0" border="0">';
			intRows = 2 * intLocalSubNavCount;
			intLocalSubNavWidth = gobjLayout.localnavwidth - 10;
			for (j=0; j<intLocalSubNavCount; j++)
			{
				strTemp += '<tr>';
				if (j > 0)
				{
					strTemp += '<td valign="top"><img src="' + gobjNavArray[i].child[j].rollover.off.src + '" name="' + gobjNavArray[i].child[j].rollovername + '" width="7" height="16" border="0"></td>';
					if ((gobjLayout.selectedparentnav == i) && (gobjLayout.selectedchildnav == j))
					{
						strTemp += '<td><a class="lnavon" onmouseover="fncSwitch(' + i + ',' + j + ',1);" onmouseout="fncSwitch(' + i + ',' + j + ',0);">' + gobjNavArray[i].child[j].label + '</a></td>';
					}
					else
					{
						strTemp += '<td><a href="' + gobjNavArray[i].child[j].href + '" class="lnavoff" onmouseover="fncSwitch(' + i + ',' + j + ',1);" onmouseout="fncSwitch(' + i + ',' + j + ',0);">' + gobjNavArray[i].child[j].label + '</a></td>';
					}
				}
				else
				{
					strTemp += '<td rowspan="' + intRows +'" width="1" bgcolor="#5A5A5A"><img src="' + gobjClear.on.src +'" width="1" height="1" border="0"></td>';
					strTemp += '<td width="7" valign="top"><img src="' + gobjNavArray[i].child[j].rollover.off.src + '" name="' + gobjNavArray[i].child[j].rollovername + '" width="7" height="16" border="0"></td>';
					strTemp += '<td rowspan="' + intRows +'" width="2"><img src="' + gobjClear.on.src +'" width="2" height="1" border="0"></td>';
					if ((gobjLayout.selectedparentnav == i) && (gobjLayout.selectedchildnav == j))
					{
						strTemp += '<td width="' + intLocalSubNavWidth + '"><a class="lnavon" onmouseover="fncSwitch(' + i + ',' + j + ',1);" onmouseout="fncSwitch(' + i + ',' + j + ',0);">' + gobjNavArray[i].child[j].label + '</a></td>';
					}
					else
					{
						strTemp += '<td width="' + intLocalSubNavWidth + '"><a href="' + gobjNavArray[i].child[j].href + '" class="lnavoff" onmouseover="fncSwitch(' + i + ',' + j + ',1);" onmouseout="fncSwitch(' + i + ',' + j + ',0);">' + gobjNavArray[i].child[j].label + '</a></td>';
					}
				}
				strTemp += '</tr>';
				strTemp += '<tr><td><img src="' + gobjClear.on.src +'" height="7" border="0"></td></tr>';
			}
			strTemp += '</table></td>';
			if (gobjLayout.localnavgutter > 0)
			{
				strTemp += '<td width="' + gobjLayout.localnavgutter + '"><img src="' + gobjClear.on.src +'" width="' + gobjLayout.localnavgutter + '" height="1" border="0"></td>';
			}
		}
	}
	strTemp += '</tr>';
	// End row, start next row for local nav rollover images
	strTemp += '</table></td></tr></table>';
	// Build local nav elements
	document.write (strTemp);
	}
}

// end hiding -->

