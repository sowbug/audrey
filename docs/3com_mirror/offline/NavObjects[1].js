<!-- hide script content from old browsers

// Set global Variables
// --------------------
// gintEnvironment - 	Integer denoting run-time environment, use:
// 						-1 for relative
// 						0 for development/integration
//						1 for staging
// 						2 for production
// 						3 for production dry-run
// This variable should be set by a server-side variable, such as:
// gintEnvironment = <%= srvEnv %>;
//gintEnvironment = -1;
// --------------------
// gblnPreview - 		Boolean denoting access to preview or final url links, use:
// 						true for preview links
//						false for final links
// This variable should be set by a server-side variable, such as:
// gintEnvironment = <%= srvPreview %>;
//gblnPreview = false;
// --------------------
// gblnLocation - 		Boolean denoting physical location of server environment
// 						Default value is set to true for 3Com J2EE environment
//						Change to false for other server environments (e.g. INSO, Get Access, CSO apps, ...)
gblnLocation = true;
// --------------------
// gstrImagePath - 		String denoting relative path to common images used in header & footer
// 						Default value is set for J2EE environment
//						Change, when appropriate, for other environments (e.g. INSO, Get Access, CSO apps, ...)
gstrImagePath = "/images/common/en_US/";

/**
 * objProject
 * ===============
 *
 * Constructor function for project objects
 *
 * Parameters
 * ----------
 * in      strDev - Development hostname
 * in      strStg - Staging hostname
 * in      strProd - Production hostname
 * in      strDryRun - Production - dry run hostname (default: production hostname)
 *
 * For example, for Solutions, these properties could be defined as follows:
 *
 * strDev = "snweb-migdev2.ops.3com.com"
 * strStg = "snweb-migstg2.ops.3com.com"
 * strProd = "www.3com.com"
 * strDryRun = "www-dr.3com.com"
 *
 * Return value
 * ------------
 * 
 */
function objProject (strDev, strStg, strProd, strDryRun)
{
	this.development = strDev;
	this.staging = strStg;
	this.production = strProd;
	this.dryrun = strProd;
	if (strDryRun != null)
	{
		this.dryrun = strDryRun;
	}
}

// Declare web redesign v5 projects
gobjJ2EEProject = new objProject("http://ebstg8.ops.3com.com", "http://wwwstg.ops.3com.com", "http://www.3com.com", "http://www-dr.3com.com");
gobjProductsProject = new objProject("http://snweb-dcmsdev.ops.3com.com", "http://wwwstg.ops.3com.com", "http://www.3com.com", "http://www-dr.3com.com");
gobjProductRegistrationProject = new objProject("", "http://csosi.ops.3com.com:8008", "http://support.3com.com");
gobjB2CProject = new objProject("http://b2cdev.ops.3com.com", "http://txstg.ops.3com.com", "http://order.3com.com");
gobjCommWorksProject = new objProject("http://www.commworks.com", "http://www.commworks.com", "http://www.commworks.com");
gobjDIProject = new objProject("", "", "http://cache.3com.com/www.3com.com", "http://cache.3com.com/www-dr.3com.com");
gobjDummyProject = new objProject("", "", "", "");

/**
 * objRollover
 * ===============
 *
 * Constructor function for rollover objects
 *
 * Parameters
 * ----------
 * in      strOnImage - Relative path & filename for <on> image
 * in      strOffImage - Relative path & filename for <off> image
 * in      objProject - Associated project
 *
 * Return value
 * ------------
 * 
 */
function objRollover (strOnImage, strOffImage, objProject)
{
	this.on = new Image();
	this.off = new Image();
	// check if project has been specified or not
	if (objProject == null)
	{
		if (gblnLocation)
		{
			// if in 3Com J2EE environment, then use DI caching
			objProject = gobjDIProject;
		}
		else
		{
			// if not, then use dummy project properties to avoid prepending with DI hostname
			objProject = gobjDummyProject;
		}
	}
	// set host property according to environment
	this.host = "";
	if (gintEnvironment == 0)
	{
		this.host = objProject.development;
	}
	if (gintEnvironment == 1)
	{
		this.host = objProject.staging;
	}
	if (gintEnvironment == 2)
	{
		this.host = objProject.production;
	}
	if (gintEnvironment == 3)
	{
		this.host = objProject.dryrun;
	}
	// check if relative path to image is specified or not
	// no path implies that this is a global rollover object defined in the navobjects file
	if ((strOnImage.indexOf("/") == -1) || (strOffImage.indexOf("/") == -1))
	{
		if (gintEnvironment > 1)
		{
			// for production and production dry run, use path to common images in www.3com.com
			strOnImage = "/images/common/en_US/" + strOnImage;
			strOffImage = "/images/common/en_US/" + strOffImage;	
		}
		else
		{
			// for integration and staging, use local path specified by gstrImagePath
			strOnImage = gstrImagePath + strOnImage;
			strOffImage = gstrImagePath + strOffImage;	
		}
	}
	this.on.src = this.host + strOnImage;
	this.off.src = this.host + strOffImage;	
}

// Declare global rollover objects
gobjSearchRollover = new objRollover("btn_3gy_on.gif", "btn_3gy.gif", gobjDIProject);
gobjGlobalNav1Rollover = new objRollover("nav1on.gif", "nav1off.gif", gobjDIProject);
gobjGlobalNav2Rollover = new objRollover("nav2on.gif", "nav2off.gif", gobjDIProject);
gobjGlobalNav3Rollover = new objRollover("nav3on.gif", "nav3off.gif", gobjDIProject);
gobjGlobalSubNavRollover = new objRollover("gnav_bar_on.gif", "gnav_bar_off.gif", gobjDIProject);
gobjLocalSubNavRollover = new objRollover("lnv_sub_on.gif", "clear.gif", gobjDIProject);

gobj3ComLogo = new objRollover("3com_logo.jpg", "3com_logo.jpg", gobjDIProject);
gobjClear = new objRollover("clear.gif", "clear.gif", gobjDIProject);
gobjSearch = new objRollover("hdr_btn_search.gif", "hdr_btn_search.gif", gobjDIProject);
gobjEntireSite = new objRollover("hdr_btn_entste.gif", "hdr_btn_entste.gif", gobjDIProject);
gobjHeaderLinks1 = new objRollover("login_header.gif", "login_header.gif", gobjDIProject);
gobjHeaderLinks2 = new objRollover("login_header_2.gif", "login_header_2.gif", gobjDIProject);
gobjFooterLinks1 = new objRollover("ftr.gif", "ftr.gif", gobjDIProject);
gobjFooterLinks2 = new objRollover("home_ftr.gif", "home_ftr.gif", gobjDIProject);
gobjReviewCart1 = new objRollover("reviewcart_header.gif", "reviewcart_header.gif", gobjDIProject);
gobjReviewCart2 = new objRollover("reviewcart_header_2.gif", "reviewcart_header_2.gif", gobjDIProject);

/**
 * objNav
 * ===============
 *
 * Constructor function for navigation objects
 *
 * Parameters
 * ----------
 * in      intType - Integer denoting navigation element type:
 *					 0 for generic nav
 *					 1 for global nav
 *					 2 for global sub nav
 *					 3 for local nav
 *					 4 for local sub nav
 * in      strLabel - Link text, i.e. text label to be displayed in anchor, menu, alt tag, etc.
 * in      strPath - Relative path for navigation link
 * in      strPreviewPath - Relative path for preview navigation link
 * in      objProject - Associated project
 * in      strRollover - Associated rollover image tag name
 * in      objRollover - Associated rollover object
 * in      blnMode - Boolean denoting mode for adding hostname:
 *					 true for adding environment-dependent hostname (default)
 *					 false for not adding environment-dependent hostname
 *
 * For example, for Solutions, these properties could be defined as follows:
 *
 * intType = 1
 * strLabel = "Home & Home Office"
 * strPath = "/solutions/en_US/index.jsp"
 * strPreviewPath = "/solutions/preview/en_US/index.jsp"
 * objProject = gobjJ2EEProject
 * strRollover = "imgGlobalSubNav1"
 * objRollover = gobjGlobalSubNavRollover
 * blnMode = true
 *
 * Return value
 * ------------
 * 
 */
function objNav (intType, strLabel, strPath, strPreviewPath, objProject, strRollover, objRollover, blnMode)
{
	this.type = intType;
	this.label = strLabel;
	this.path = strPath;
	this.preview = strPreviewPath;
	this.project = objProject;
	// set object mode to add hostname to the specified path
	// if not specified, defaults to true
	if (blnMode != null)
	{
		this.mode = blnMode;
	}
	else
	{
		this.mode = true;
	}
	// set host property according to environment
	this.host = "";
	if (this.mode)
	{
		if (gintEnvironment == 0)
		{
			this.host = objProject.development;
		}
		if (gintEnvironment == 1)
		{
			this.host = objProject.staging;
		}
		if (gintEnvironment == 2)
		{
			this.host = objProject.production;
		}
		if (gintEnvironment == 3)
		{
			this.host = objProject.dryrun;
		}
	}
	// set href according to selected preview option
	if (gblnPreview)
	{
		if (this.preview.indexOf("javascript:fncOpenWindow(") < 0)
		{
			this.href = this.host + this.preview;
		}
		else
		{
			this.href = "javascript:fncOpenWindow('" + this.host + this.preview.substring(27);
		}
	}
	else
	{
		if (this.path.indexOf("javascript:fncOpenWindow(") < 0)
		{
			this.href = this.host + this.path;
		}
		else
		{
			this.href = "javascript:fncOpenWindow('" + this.host + this.path.substring(26);
		}
	}
	// create pointer to rollover object, if any
	this.rollovername = strRollover;
	this.rollover = objRollover;
	// create array for pointers to child nav objects
	this.child = new Array();
}

// Declare global object array for navigation objects
var gobjNavArray = new Array();

// Main navigation: Find A Solution
gobjNavArray[0] = new objNav(1, "Find a Solution", "/solutions/en_US/index1.html", "/solutions/en_US/index1.html", gobjJ2EEProject, "imgGlobalNav1", gobjGlobalNav1Rollover);
gobjNavArray[0].child[0] = new objNav(2, "Wireless & Mobility", "/solutions/en_US/index.jsp?solutiontype=1000006", "/solutions/preview/en_US/index.jsp?solutiontype=1000006", gobjJ2EEProject, "imgGlobalSubNav3", gobjGlobalSubNavRollover);
gobjNavArray[0].child[1] = new objNav(2, "Home & Home Office", "/solutions/en_US/index.jsp?solutiontype=1000005", "/solutions/preview/en_US/index.jsp?solutiontype=1000005", gobjJ2EEProject, "imgGlobalSubNav0", gobjGlobalSubNavRollover);
gobjNavArray[0].child[2] = new objNav(2, "Small Business", "/solutions/en_US/index.jsp?solutiontype=1000003", "/solutions/preview/en_US/index.jsp?solutiontype=1000003", gobjJ2EEProject, "imgGlobalSubNav1", gobjGlobalSubNavRollover);
gobjNavArray[0].child[3] = new objNav(2, "Enterprise", "/solutions/en_US/index.jsp?solutiontype=1000002", "/solutions/preview/en_US/index.jsp?solutiontype=1000002", gobjJ2EEProject, "imgGlobalSubNav2", gobjGlobalSubNavRollover);
gobjNavArray[0].child[4] = new objNav(2, "Government", "/solutions/en_US/index.jsp?solutiontype=1000004", "/solutions/preview/en_US/index.jsp?solutiontype=1000004", gobjJ2EEProject, "imgGlobalSubNav4", gobjGlobalSubNavRollover);
gobjNavArray[0].child[5] = new objNav(2, "Education", "/solutions/en_US/index.jsp?solutiontype=1000001", "/solutions/preview/en_US/index.jsp?solutiontype=1000001", gobjJ2EEProject, "imgGlobalSubNav5", gobjGlobalSubNavRollover);

// Main navigation: Product & Professional Services
gobjNavArray[1] = new objNav(1, "Products & Professional Services", "/solutions/en_US/index2.html", "/solutions/en_US/index2.html", gobjJ2EEProject, "imgGlobalNav2", gobjGlobalNav2Rollover);
gobjNavArray[1].child[0] = new objNav(2, "Products", "/products/html/prodlist.html?tab=cat&pathtype=purchase", "/products/html/prodlist.html?tab=cat&pathtype=purchase", gobjProductsProject, "imgGlobalSubNav0", gobjGlobalSubNavRollover);
gobjNavArray[1].child[1] = new objNav(2, "Professional Services", "/solutions/en_US/index.jsp?solutiontype=1000007", "/solutions/preview/en_US/index.jsp?solutiontype=1000007", gobjJ2EEProject, "imgGlobalSubNav1", gobjGlobalSubNavRollover);
gobjNavArray[1].child[2] = new objNav(2, "E-Connect (B2B)", "/partners/e_connect/index.html", "/partners/e_connect/index.html", gobjJ2EEProject, "imgGlobalSubNav2", gobjGlobalSubNavRollover);

// Main navigation: Support for Products
gobjNavArray[2] = new objNav(1, "Support for Products", "/support/en_US/index3.html", "/support/en_US/index3.html", gobjJ2EEProject, "imgGlobalNav3", gobjGlobalNav3Rollover);
gobjNavArray[2].child[0] = new objNav(2, "Product Support", "/products/html/prodlist.html?tab=cat&pathtype=support", "/products/html/prodlist.html?tab=cat&pathtype=support", gobjProductsProject, "imgGlobalSubNav0", gobjGlobalSubNavRollover);
gobjNavArray[2].child[1] = new objNav(2, "3Com Support Tools", "/support/en_US/support_tools/index.html", "/support/en_US/support_tools/index.html", gobjJ2EEProject, "imgGlobalSubNav1", gobjGlobalSubNavRollover);
gobjNavArray[2].child[2] = new objNav(2, "Product Registration", "/registration/frontpg.pl", "/registration/frontpg.pl", gobjProductRegistrationProject, "imgGlobalSubNav2", gobjGlobalSubNavRollover);
gobjNavArray[2].child[3] = new objNav(2, "Training", "/support/en_US/training/index.html", "/support/en_US/training/index.html", gobjJ2EEProject, "imgGlobalSubNav3", gobjGlobalSubNavRollover);

// Main navigation: Search
gobjNavArray[3] = new objNav(0, "Search", "/search/en_US/query.html", "/search/en_US/query.html", gobjJ2EEProject, "imgSearchNav", gobjSearchRollover);

// Store global variables defining navigation limits due to page design
var gintMainNavEnd = gobjNavArray.length;	// Number of global navigation elements defined
var gintLocalNavMax = 7;					// Maximum number of local nav elements allowed by page designs without sub menus
var gintLocalNavWithSubsMax = 5;			// Maximum number of local nav elements allowed by page designs with sub menus
var gintLocalSubNavMax = 5;					// Maximum number of local sub nav elements allowed by page design

// Main Navigation:  3Com Logo
gobjNavArray[4] = new objNav(0, "3Com Homepage", "/", "/", gobjJ2EEProject);
// Main Navigation for Header Links:  Login, Downloads, Partner & Reseller Site, My Account, Order Status
gobjNavArray[5] = new objNav(0, "Login", "/corpinfo/en_US/login/index.html", "/corpinfo/en_US/login/index.html", gobjJ2EEProject);
gobjNavArray[6] = new objNav(0, "Downloads", "/products/html/prodlist.html?tab=cat&pathtype=download", "/products/html/prodlist.html?tab=cat&pathtype=download", gobjProductsProject);
gobjNavArray[7] = new objNav(0, "Partner and Reseller Site", "/corpinfo/en_US/partners/index.html", "/corpinfo/en_US/partners/index.html", gobjJ2EEProject);
gobjNavArray[8] = new objNav(0, "My Account", "/tms-ts/bin/userinfo.cgi?op=edit&key_store_seqid=400001&locale=en-US", "/tms-ts/bin/userinfo.cgi?op=edit&key_store_seqid=400001&locale=en-US", gobjB2CProject);
gobjNavArray[9] = new objNav(0, "Order Status", "/tms-ts/bin/smart-statement.cgi?key_store_seqid=400001&locale=en-US", "/tms-ts/bin/smart-statement.cgi?key_store_seqid=400001&locale=en-US", gobjB2CProject);
// Main Navigation:  Review Cart or Check Out
gobjNavArray[10] = new objNav(0, "Review Cart or Checkout", "/tms-ts/bin/order-form.cgi?op=view&goodstype=none&key_store_seqid=400001&locale=en-US", "/tms-ts/bin/order-form.cgi?op=view&goodstype=none&key_store_seqid=400001&locale=en-US", gobjB2CProject);
// Main Navigation for Footer Links:  Glossary, Site Map, Who is 3Com?, Contact Us, Commworks Web Site
gobjNavArray[11] = new objNav(0, "Glossary", "javascript:fncOpenWindow('/corpinfo/en_US/glossary.jsp','winGlossary',400,350,false,null,null,null,null,true,null)", "javascript:fncOpenWindow('/corpinfo/en_US/glossary.jsp','winGlossary',400,350,false,null,null,null,null,true,null)", gobjJ2EEProject);
gobjNavArray[12] = new objNav(0, "Site Map", "/corpinfo/en_US/sitemap/index.html", "/corpinfo/en_US/sitemap/index.html", gobjJ2EEProject);
gobjNavArray[13] = new objNav(0, "Who is 3Com?", "/corpinfo/en_US/index.html", "/corpinfo/en_US/index.html", gobjJ2EEProject);
gobjNavArray[14] = new objNav(0, "Contact Us", "/corpinfo/en_US/contactus/index.html", "/corpinfo/en_US/contactus/index.html", gobjJ2EEProject);
gobjNavArray[15] = new objNav(0, "CommWorks Site", "/svprovider/index.html", "/svprovider/index.html", gobjCommWorksProject);
// Main Navigation for Legal, Privacy, & Copyright
gobjNavArray[16] = new objNav(0, "", "/corpinfo/en_US/legal/index.html", "/corpinfo/en_US/legal/index.html", gobjJ2EEProject);
gobjNavArray[17] = new objNav(0, "", "/corpinfo/en_US/legal/privacy.html", "/corpinfo/en_US/legal/privacy.html", gobjJ2EEProject);
gobjNavArray[18] = new objNav(0, "", "/corpinfo/en_US/legal/index.html", "/corpinfo/en_US/legal/index.html", gobjJ2EEProject);

// end hiding -->

