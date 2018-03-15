/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);
/*component-page*/window.PAGE={handePage:100},document.addEventListener("deviceready",function(){document.addEventListener("backbutton",function(e){if(window.disabledBackButton)return e.preventDefault();var t=document.getElementsByClassName("box-block");t.length?(e.preventDefault(),window.backPage(t[t.length-1].id)):navigator.app.exitApp()},!1)},!1),window.dispatch=function(e,t){return(e="function"==typeof e?e:window[e]).apply(this,t||[])},window.openPage=function(e,t,n){if(2===arguments.length&&(n=t),e.indexOf(".html")<0&&(e+=".html"),document.getElementById(e)){var a=document.getElementsByClassName("box-block");if(a[a.length-1].id===document.getElementById(e).id)return!1;document.getElementById(e).parentNode.removeChild(document.getElementById(e))}var s=new XMLHttpRequest;s.onload=function(){if(4==this.readyState){var a=this.responseText;a=a.replace("backPage()","backPage('"+e+"')");var s=document.getElementsByTagName("body")[0];document.getElementsByClassName("body").length&&(s=document.getElementsByClassName("body")[0]);var d=document.createElement("div");d.setAttribute("class","box-block"),d.setAttribute("id",e),d.innerHTML=a,s.appendChild(d),function(){window.PAGE.handePage++;var a="z-index:"+window.PAGE.handePage,s=";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;transition-timing-function: cubic-bezier(0.36,0.66,0.04,1);";2===SO.code&&(s=";transform: translateX(0px);transition-duration: 280ms;"),window.disabledOpenPageEffect&&(s=";opacity: 1;top: 0;");var d=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");d?d+=" "+a+s:d=a+s,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",d),n&&window.dispatch(n,[t]);var o=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");o+=" show";var l=function(){setTimeout(function(){document.getElementById(e)&&document.getElementById(e).querySelectorAll(".page").length?i():l()},10)};l();var m=new CustomEvent("openPage",{detail:{page:e}});document.dispatchEvent(m);var i=function(){setTimeout(function(){document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",o),setTimeout(function(){var t=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");t=t.replace(s,""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",t)},280)},100)}}()}},s.open("GET",e+"?cache="+(new Date).getTime(),!0),document.dispatchEvent(new Event("firedCloseMenu")),s.send()},window.backPage=function(e){if(!e){for(var t=document.querySelectorAll(".page.show"),n={zIndex:-1},a=0;a<t.length;a++){var s=Number(t[a].style.zIndex);n.zIndex<s&&(n.zIndex=s,n.element=t[a])}n.zIndex&&(e=n.element.parentElement.id)}document.getElementById(e).getElementsByClassName("page")[0];var d=";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;";window.disabledOpenPageEffect&&(d="");var o=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");o?o+=" "+d:o=d,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",o);var l=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");l+=l.replace("show",""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",l);var m=new CustomEvent("backPage",{detail:{page:e}});document.dispatchEvent(m),setTimeout(function(){var t=document.getElementById(e);t.parentElement.removeChild(t)},window.disabledOpenPageEffect?0:280)};
/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||((s=document.createElement("span")).className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);
