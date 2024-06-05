var dashBoardId="cBody";
var dashboardFrame=null;
function openAsFrame(lnk,dashboard)
{
  if(!dashboard)dashboard=dashBoardId;
  
  OpenWaitingEx();

  var frameId=dashboard+"IFrame";
  var dashboardObj=document.getElementById(dashboard);
  if(!dashboardFrame)
  {
		dashboardFrame=document.createElement("iframe");
		dashboardFrame.id=frameId;
		AddEventOnObject(dashboardFrame,"load",function(event){CloseWaitingEx();IFrameResizeByContent(event.target.id);});
		
  }
   
   dashboardFrame.src=lnk;
   dashboardFrame.style.display='block';
   dashboardFrame.style.position='relative';
   dashboardFrame.style.minHeight='500px';
   
   dashboardObj.innerHTML='';
   dashboardObj.appendChild(dashboardFrame);
   

}

//-----------------------------------------
function setLinkSID(lnk)
{
  var patt = new RegExp("[\&\?]"+SIDNAME+"\=");
  if(!patt.test(lnk))lnk+="&"+SIDNAME+"="+SID;
  return lnk;
}
//-----------------------------------------
function openAsDirect(lnk,dashboard)
{
  OpenWaitingEx();
  if(!dashboard)dashboard=dashBoardId;
  var vsr=new jcfSendRecv();
  vsr.PROCTEXT=function(txt){var o=document.getElementById(dashboard);o.innerHTML=txt;scriptRunAfterInnerHTML(o);CloseWaitingEx();};
  lnk=setLinkSID(lnk);
  vsr.SendQuery(lnk,'');
}
//-----------------------------------------
function openAsPost(lnk,Frm,dashboard)
{
  OpenWaitingEx();
  if(!dashboard)dashboard=dashBoardId;
  var vsr=new jcfSendRecv();
  vsr.PROCTEXT=function(txt){var o=document.getElementById(dashboard);o.innerHTML=txt;scriptRunAfterInnerHTML(o);CloseWaitingEx();};
  lnk=setLinkSID(lnk);
  vsr.SendQuery(lnk,serialize(Frm));
}
//-----------------------------------------
function gotoAsDirect(posn,dashboard)
{
  if(!posn)posn=1;
  OpenWaitingEx();
  if(!dashboard)dashboard=dashBoardId;
  
  var idx=jcfHistory.data.length-1-posn;
  if(idx>=0)
  {
	var lnk=jcfHistory.data[idx].url;
	jcfHistory.data.splice(idx,jcfHistory.length-idx+1);
	
    var vsr=new jcfSendRecv();
	vsr.PROCTEXT=function(txt){var o=document.getElementById(dashboard);o.innerHTML=txt;scriptRunAfterInnerHTML(o);CloseWaitingEx();};
	lnk=setLinkSID(lnk);
	vsr.SendQuery(lnk,null);
   }
   else
	{
		CloseWaitingEx();
	}
}

//-----------------------------------------
function goBackAsDirect(dashboard)
{
	gotoAsDirect(1,dashboard);
}
//-----------------------------------------
function refreshAsDirect(dashboard)
{
	gotoAsDirect(0,dashboard);
}
//-----------------------------------------
function openAsDirectSub(urlParent,subLnk,dashboard)
{
  OpenWaitingEx();
  if(!dashboard)dashboard=dashBoardId;
  var vsr=new jcfSendRecv();
  vsr.PROCTEXT=function(txt){var o=document.getElementById(dashboard);o.innerHTML=txt;scriptRunAfterInnerHTML(o);CloseWaitingEx();};
  var lnk=getLinkEx(setLinkSID(urlParent+"&"+subLnk));
  vsr.SendQuery(lnk,'');

}
//-----------------------------------------
function changeAsParam(lnk,dashboard)
{
  OpenWaitingEx();
  if(!dashboard)dashboard=dashBoardId;
  var vsr=new jcfSendRecv();
  vsr.PROCTEXT=function(txt){window.location.reload();CloseWaitingEx();};
  lnk=setLinkSID(lnk);
  vsr.SendQuery(lnk,'');
}
//-----------------------------------------

