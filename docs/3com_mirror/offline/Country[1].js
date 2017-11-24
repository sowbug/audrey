<!-- hide script content from old browsers

/**
 * objCountry
 * ===============
 *
 * Constructor function for country object
 *
 * Parameters
 * ----------
 * in     	strName 				- Country name
 * in		strValue  				- Cookie value used for storing country
 * in		strRegion				- Region in which the country is a part of
 * in		strURL					- URL of Homepage specific for country/language
 *
 * Return value
 * ------------
 * 
 */
function objCountry (strName, strValue, intRegion, strURL)
{
	this.name = strName;			// Country name
	this.value = strValue;			// Cookie value used for storing country
	this.region = gobjRegionArray[intRegion];		// Region in which the country is a part of
	this.language = new Array();	// Language array
	this.language[0] = new objLanguage("DEFAULT", "DEFAULT", strURL);
}

/**
 * objLanguage
 * ===============
 *
 * Constructor function for language object
 *
 * Parameters
 * ----------
 * in     	strName 				- Language name
 * in		strValue  				- Cookie value used for storing language
 * in		strURL					- URL of Homepage specific for country/language
 *
 * Return value
 * ------------
 * 
 */
 
function objLanguage (strName, strValue, strURL)
{
	this.name = strName			// Names of language used in country
	this.value = strValue			// Cookie value of language used in country
	this.url = strURL			// URL for language-specific homepage
}

/**
 * objRegion
 * ===============
 *
 * Constructor function for region object
 *
 * Parameters
 * ----------
 * in     	strName 				- Name of region
 * in		strFile  				- Region filename containing office information
 * in		strURL					- URL for region-specific homepage
 *
 * Return value
 * ------------
 * 
 */
 
function objRegion (strName, strFile, strURL)
{
	this.name = strName			// Name of region
	this.file = strFile			// Region filename containing office information
	this.url = strURL			// URL for region-specific homepage
}

// Declare global associative array between region & region filename
var gobjRegionArray = new Array();

// Store regions into object array
gobjRegionArray[0] = new objRegion("Africa & Middle East", "region_africa.js", "http://emea.3com.com");
gobjRegionArray[1] = new objRegion("Asia", "region_asia.js", "http://ap.3com.com");
gobjRegionArray[2] = new objRegion("Australia/New Zealand", "region_australia.js", "http://www.3com.com.au/");
gobjRegionArray[3] = new objRegion("Europe", "region_europe.js", "http://emea.3com.com");
gobjRegionArray[4] = new objRegion("Latin America", "region_south_america.js", "http://lat.3com.com/");
gobjRegionArray[5] = new objRegion("North America", "region_north_america.js", "");

// Declare global object array for countries
var gobjCountryArray = new Array();

/*  Country and Language array
*	PLEASE NOTE:  If you add or remove countries, you must make sure that the default country for 
*	the drop down set below with gintDefaultCountry is reset to the correct array index
*/
// Store countries into object array
gobjCountryArray[0] = new objCountry("Argentina", "AR", 4, "http://www.3com.com.ar/");
gobjCountryArray[1] = new objCountry("Australia", "AU", 2, "http://www.3com.com.au/");
gobjCountryArray[2] = new objCountry("Austria", "AT", 3, "http://www.3com.at/");
gobjCountryArray[3] = new objCountry("Belgium", "BE", 3, "");
gobjCountryArray[3].language[0] = new objLanguage("Nederlands", "nl-BE", "http://www.3com.be/");
gobjCountryArray[3].language[1] = new objLanguage("Francais", "fr-BE", "http://www.3com.lu/");
gobjCountryArray[4] = new objCountry("Brazil", "BR", 4, "http://lat.3com.com/br/");
gobjCountryArray[5] = new objCountry("Bulgaria", "BG", 3, "");
gobjCountryArray[6] = new objCountry("Canada", "CA", 5, "");
gobjCountryArray[6].language[0] = new objLanguage("English", "en-US", "http://ca.3com.com/");
gobjCountryArray[6].language[1] = new objLanguage("French", "fr-FR", "http://ca.3com.com/fr/");
gobjCountryArray[7] = new objCountry("Caribbean", "", 4, "http://lat.3com.com/caribbean/");
gobjCountryArray[8] = new objCountry("Chile", "CL", 4, "http://www.3com.cl/");
gobjCountryArray[9] = new objCountry("China", "CN", 1, "http://www.3com.com.cn");
gobjCountryArray[10] = new objCountry("Colombia", "CO", 4, "http://lat.3com.com/co/");
gobjCountryArray[11] = new objCountry("Costa Rica", "CR", 4, "http://lat.3com.com/centroamerica/");
gobjCountryArray[12] = new objCountry("Czech Republic", "CZ", 3, "http://www.3com.cz/");
gobjCountryArray[13] = new objCountry("Denmark", "DK", 3, "http://www.3com.dk/");
gobjCountryArray[14] = new objCountry("Finland", "FI", 3, "http://www.3com.fi/");
gobjCountryArray[15] = new objCountry("France", "FR", 3, "http://www.3com.fr/");
gobjCountryArray[16] = new objCountry("Germany", "DE", 3, "http://www.3com.de/");
gobjCountryArray[17] = new objCountry("Greece", "GR", 3, "");
gobjCountryArray[18] = new objCountry("Hungary", "HU", 3, "http://www.3com.hu/");
gobjCountryArray[19] = new objCountry("India", "IN", 1, "http://www.3com.co.in/");
gobjCountryArray[20] = new objCountry("Indonesia", "ID", 1, "");
gobjCountryArray[21] = new objCountry("Ireland", "IE", 3, "http://www.3com.ie/");
gobjCountryArray[22] = new objCountry("Israel", "IL", 0, "http://www.3com.co.il/");
gobjCountryArray[23] = new objCountry("Italy", "IT", 3, "http://www.3com.it/");
gobjCountryArray[24] = new objCountry("Japan", "JP", 1, "http://www.3com.co.jp/");
gobjCountryArray[25] = new objCountry("Korea", "KR", 1, "http://www.3com.co.kr/");
gobjCountryArray[26] = new objCountry("Malaysia", "MY", 1, "");
gobjCountryArray[27] = new objCountry("Mexico", "MX", 4, "http://lat.3com.com/mx/");
gobjCountryArray[28] = new objCountry("Morocco", "MA", 0, "");
gobjCountryArray[29] = new objCountry("Netherlands", "NL", 3, "http://www.3com.nl/");
gobjCountryArray[30] = new objCountry("New Zealand", "NZ", 2, "");
gobjCountryArray[31] = new objCountry("Norway", "NO", 3, "http://www.3com.no/");
gobjCountryArray[32] = new objCountry("Peru", "PE", 4, "http://lat.3com.com/pe/");
gobjCountryArray[33] = new objCountry("Philippines", "PH", 1, "");
gobjCountryArray[34] = new objCountry("Poland", "PL", 3, "http://www.3com.pl/");
gobjCountryArray[35] = new objCountry("Portugal", "PT", 3, "http://www.3com.es/");
gobjCountryArray[36] = new objCountry("Puerto Rico", "PR", 4, "http://lat.3com.com/caribbean/");
gobjCountryArray[37] = new objCountry("Romania", "RO", 3, "http://www.3com.ro/");
gobjCountryArray[38] = new objCountry("Russia", "RU", 3, "http://www.3com.ru/");
gobjCountryArray[39] = new objCountry("Singapore", "SG", 1, "");
gobjCountryArray[40] = new objCountry("Slovakia", "SK", 3, "");
gobjCountryArray[41] = new objCountry("Slovenia", "", 3, "");
gobjCountryArray[42] = new objCountry("South Africa", "", 0, "");
gobjCountryArray[43] = new objCountry("Spain", "ES", 3, "http://www.3com.es/");
gobjCountryArray[44] = new objCountry("Sweden", "SE", 3, "http://www.3com.se/");
gobjCountryArray[45] = new objCountry("Switzerland", "CH", 3, "http://www.3com.ch/");
gobjCountryArray[46] = new objCountry("Taiwan", "TW", 1, "");
gobjCountryArray[47] = new objCountry("Thailand", "TH", 1, "");
gobjCountryArray[48] = new objCountry("Turkey", "TR", 3, "");
gobjCountryArray[49] = new objCountry("United Arab Emirates", "", 0, "");
gobjCountryArray[50] = new objCountry("United Kingdom", "GB", 3, "http://www.3com.co.uk/");
gobjCountryArray[51] = new objCountry("United States", "US", 5, "http://www.3com.com/");
gobjCountryArray[51].language[0] = new objLanguage("English", "en-US", "http://www.3com.com/");
gobjCountryArray[52] = new objCountry("Venezuela", "VE", 4, "http://lat.3com.com/ve/");

// Declare global variables used in country utilities
var gintDefaultCountry = 51;				// default country
var gintDefaultLanguage = 0;			// default language
var gstrCountryCookie = "country";		// name of 3Com country cookie
var gstrLanguageCookie = "lang";		// name of 3Com language cookie
var gstrPath = "\/";		// default path for cookie setting
var gstrDomain = ".3com.com";		// name of 3Com domain
var gintCookieExpiration = 3650;		// expiration interval, in days, for 3Com country & language cookies
var intTemp=0;

/**
 * fncBuildCountryDropdowns
 * ===============
 *
 * Build country & language dropdowns
 *
 * Parameters
 * ----------
 * 		none
 *
 * Return value
 * ------------
 * 
 */
function fncBuildCountryDropdowns()
{
	// Build country dropdown
	document.write("<select name='cboCountries' onchange='fncChangeCountry();'>");
	for(i=0; i<gobjCountryArray.length; i++)
	{
		//Check if Country has URL or if Country has multiple languages
		if ((gobjCountryArray[i].language[0].url) || (gobjCountryArray[i].region.url))
		{
			document.write("<option value=" + i + ">" + gobjCountryArray[i].name + "</option>");
		}
	}
	document.write("</select>&nbsp;&nbsp;");
	// For March 31, 2001 deadline,
	// Set country  & language cookies to default value for US, regardless of existing value
	// This section needs to be removed for globalization as part of Phase 2
	objTemp = gobjCountryArray[gintDefaultCountry];
	fncSetCookie(gstrCountryCookie, objTemp.value, gintCookieExpiration, gstrPath, gstrDomain);
	fncSetCookie(gstrLanguageCookie, objTemp.language[gintDefaultLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
	// Get country from country cookie
	strValue = fncGetCookie(gstrCountryCookie);
	intCountry = gintDefaultCountry;
	for (i=0; i<gobjCountryArray.length; i++)
	{
		if (gobjCountryArray[i].value == strValue)
		{
			intCountry = i;
		}
	}
	// Set selected option to cookie country
	for (i=0; i<document.frmFooter.cboCountries.length; i++)
	{
		if (document.frmFooter.cboCountries.options[i].value == intCountry)
		{
			document.frmFooter.cboCountries.options[i].selected = true;
		}
	}
	// Set temporary object with cookie country
	objTemp = gobjCountryArray[intCountry];
	// Build language dropdown only if country has multiple languages
	if (objTemp.language.length > 1)
	{
		document.write("<select name='cboLanguages' onchange='fncChangeLanguage();'>");
		for (i=0; i<objTemp.language.length; i++)
		{
			document.write("<option value=" + i + ">" + objTemp.language[i].name + "</option>");
		}
		document.write("</select>");
		// Get language from language cookie
		intLanguage = gintDefaultLanguage;
		strValue = fncGetCookie(gstrLanguageCookie);
		for (i=0; i<objTemp.language.length; i++)
		{
			if (objTemp.language[i].value == strValue)
			{
				intLanguage = i;
			}
		}
		// Set selected option to cookie language
		document.frmFooter.cboLanguages.options[intLanguage].selected = true;
	}
	objTemp = null;
}

/**
 * fncChangeCountry
 * ===============
 *
 * Load selected country home page
 * or "Select Language" page for selected country
 *
 * Parameters
 * ----------
 * 
 * Return value
 * ------------
 * 
 */
function fncChangeCountry()
{
	//Get selected country from dropdown
	var intCountry = document.frmFooter.cboCountries.selectedIndex;
	intCountry = parseInt(document.frmFooter.cboCountries[intCountry].value);

	var objTemp = gobjCountryArray[intCountry];
	
	// For March 31, 2001 deadline,
	// Set country  & language cookies for US and Canada only
	// Cookie is set to default value (i.e. US) for all other countries
	// This section needs to be changed for globalization as part of Phase 2
	if (objTemp.value == "US" || objTemp.value == "CA")
	{
		fncSetCookie(gstrCountryCookie, objTemp.value, gintCookieExpiration, gstrPath, gstrDomain);
		fncSetCookie(gstrLanguageCookie, objTemp.language[gintDefaultLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
	}
	// otherwise for all other countries set the cookie to empty string
	else
	{
		objTemp = gobjCountryArray[gintDefaultCountry];
		fncSetCookie(gstrCountryCookie, objTemp.value, gintCookieExpiration, gstrPath, gstrDomain);
		fncSetCookie(gstrLanguageCookie, objTemp.language[gintDefaultLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
	}
	// Redirect to correct site
	objTemp = gobjCountryArray[intCountry];
	if (objTemp.language[gintDefaultLanguage].url)
	{
		document.location = objTemp.language[gintDefaultLanguage].url;
	}
	else
	{
		document.location = objTemp.region.url;
	}
}

/**
 * fncChangeLanguage
 * ===============
 *
 * Reload current country home page with selected language option
 *
 * Parameters
 * ----------
 * 		none
 *	
 * Return value
 * ------------
 * 
 */
function fncChangeLanguage()
{
	//Get selected country & language from dropdowns
	var intCountry = parseInt(document.frmFooter.cboCountries[document.frmFooter.cboCountries.selectedIndex].value);
	var objTemp = gobjCountryArray[intCountry];
	var intLanguage = parseInt(document.frmFooter.cboLanguages[document.frmFooter.cboLanguages.selectedIndex].value);
	//display an alert message box to warn user that they will be leaving the current page if they select OK
	var blnOK = true;
	blnOK = confirm("Selecting OK will take you back to the homepage in the language you selected");
	if (blnOK)
	{
		//set the Language Cookie and redirect
		fncSetCookie(gstrLanguageCookie, objTemp.language[intLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
		document.location = objTemp.language[intLanguage].url;
	}
}

/**
 * fncSetCookie
 * ===============
 *
 * Sets value for specified cookie
 *
 * Parameters
 * ----------
 * in      strName - string variable containing cookie name
 * in      strValue - string variable containing cookie value
 * in      intDaysToExpiration - date/time variable containing date of expiration in days
 *         If omitted or null, expires the cookie at the end of the current session.
 * in      strPath - string variable containing path for which cookie is valid
 *         If omitted or null, uses the path of the calling document.
 * in      strDomain - string variable containing domain for which cookie is valid
 *         If omitted or null, uses the domain of the calling document.
 * in      blnSecure - boolean variable indicating whether cookie transmission requires a secure channel (HTTPS)
 * 
 * The first two parameters are required. The others, if supplied, must be passed in the order listed above.
 * To omit an unused optional field, use null as a place holder. 
 * Trailing omitted parameters do not require a placeholder.
 *
 * Return value
 * ------------
 * 
 */
function fncSetCookie (strName, strValue, intDaysToExpiration, strPath, strDomain, blnSecure)
{
	// Get current time/date
	var timToday = new Date();
	// Set expiration date to now plus specified days to expiration
	var timExpires = new Date();
	timExpires.setTime(timToday.getTime() + 1000*60*60*24*intDaysToExpiration);
	// set cookie
	document.cookie = strName + "=" + escape (strValue) + ((timExpires) ? "; expires=" + timExpires.toGMTString() : "") + ((strPath) ? "; path=" + strPath : "") + ((strDomain) ? "; domain=" + strDomain : "") + ((blnSecure) ? "; secure" : "");
}

/**
 * fncGetCookie
 * ===============
 *
 * Get cookie value
 *
 * Parameters
 * ----------
 * in      strName - string variable containing cookie name
 * 
 * Return value
 * ------------
 * 
 * string variable containing the cookie value, or default value of "NONE" if cookie does not exist
 * 
 */
 function fncGetCookie(strName)
 {
 	var strSearch = strName + "=";
	// Check if there are any cookies
	if (document.cookie.length >  0)
	{
		strStart = document.cookie.indexOf(strSearch);
		// Check if specified cookie exists
		if (strStart != -1)
		{
			strStart += strSearch.length
			strEnd = document.cookie.indexOf(";", strStart);
			if (strEnd == -1)
			{
				strEnd = document.cookie.length;
			}
			return unescape(document.cookie.substring(strStart, strEnd)); 
		}
		else
		{
			objTemp = gobjCountryArray[gintDefaultCountry];
			fncSetCookie(gstrCountryCookie, objTemp.value, gintCookieExpiration, gstrPath, gstrDomain);
			fncSetCookie(gstrLanguageCookie, objTemp.language[gintDefaultLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
		}
	} 
	else
	{
		objTemp = gobjCountryArray[gintDefaultCountry];
		fncSetCookie(gstrCountryCookie, objTemp.value, gintCookieExpiration, gstrPath, gstrDomain);
		fncSetCookie(gstrLanguageCookie, objTemp.language[gintDefaultLanguage].value, gintCookieExpiration, gstrPath, gstrDomain);
	}
}

/**
 * fncDeleteCookie
 * ===============
 *
 * Delete cookie value
 *
 * Parameters
 * ----------
 * in      strName - string variable containing cookie name
 * in      strPath - string variable containing path for which cookie is valid
 *         This must be the same as the path used to create the cookie,
 *         or null/omitted if no path was specified when creating the cookie.
 * in      strDomain - string variable containing domain for which cookie is valid
 *         This must be the same as the domain used to create the cookie,
 *         or null/omitted if no domain was specified when creating the cookie.
 * 
 * Return value
 * ------------
 * 
 */
 function fncDeleteCookie(strName, strPath, strDomain)
 {
 	var strSearch = strName + "=";
	// Check if there are any cookies
	if (document.cookie.length >  0)
	{
		strStart = document.cookie.indexOf(strSearch);
		// Check if specified cookie exists
		if (strStart != -1)
		{
    		document.cookie = strName + "=" + ((strPath) ? "; path=" + strPath : "") + ((strDomain) ? "; domain=" + strDomain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}
 }

// end hiding -->


