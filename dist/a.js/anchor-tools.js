define(function(e,t,n){var o=e("tins");n.exports={sortBy:function(e,t,n){return t=t?-1:1,function(o,i){return o=o[e],i=i[e],"undefined"!=typeof n&&(o=n(o),i=n(i)),o<i?t*-1:o>i?1*t:1}},dialog:function(e,t,n){var i='<a href="javascript:;" class="button button-highlight button-rounded oks">确定</a>',r='<a href="javascript:;" class="button button-rounded button-tiny cancels">取消</a>',a=UIF.handler.ie6?'<iframe style="position:absolute;top:0;left:0;z-index:-1;height:100%;width:100%;border:0;background-color:transparent"></iframe>':"",l='<div class="tinyAlert">{0}\t\t\t\t\t\t\t<div class="h">信息</div><div class="c">{1}</div>\t\t\t\t\t\t\t<div class="t">{2}{3}</div>\t\t\t\t\t\t</div>',c=!1,s="",u="";t&&(s=i),n&&(u=r),t||n||(s=i,c=!0),o.box.show(this.stringFormat(l,a,e,s,u),0,0,0,0,3600),c?$(".tinyAlert .oks").click(function(){o.box.hide()}):($(".tinyAlert .oks").click(function(){t(),o.box.hide()}),$(".tinyAlert .cancels").click(function(){n(),o.box.hide()}))},uuid:function(e,t){var n,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=o,r=[];if(t=t||i.length,e)for(n=0;n<e;n++)r[n]=i[0|Math.random()*t];else{var a;for(r[8]=r[13]=r[18]=r[23]="",r[14]="4",n=0;n<36;n++)r[n]||(a=0|16*Math.random(),r[n]=i[19==n?3&a|8:a])}return r.join("").toLowerCase()},stringFormat:function(){if(0==arguments.length)return this;var e=arguments[0];if(null!=e&&""!=e)for(var t=1;t<arguments.length;t++){var n=new RegExp("\\{"+(t-1)+"\\}","gm");null!=arguments[t]&&(e=e.replace(n,arguments[t]))}return e},rand:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},document:window.document,arrayDistinct:function(e){for(var t={},n=0;n<e.length;n++)t[e[n]+1]?(e.splice(n,1),n--):t[e[n]+1]=!0;return t=null,e},arrayIndexOf:function(e,t,n){if(Array.prototype.indexOf)return e.indexOf(t,n||0);for(var o=n||0,i=e.length;o<i;o++)if(e[o]===t)return o;return-1},arrayContains:function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},htmlEncode:function(e){var t=this.document.createElement("div"),n=this.document.createTextNode(e);return t.appendChild(n),t.innerHTML},htmlDecode:function(e){var t=this.document.createElement("div");return t.innerHTML=e,t.innerText||t.textContent},getCookie:function(e){if(!e)return"";if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(t!=-1){t=t+e.length+1;var n=document.cookie.indexOf(";",t);return n==-1&&(n=document.cookie.length),decodeURIComponent(document.cookie.substring(t,n))}}return""},setCookie:function(e,t,n){if(e){var o=new Date;o.setTime(o.getTime()+1e3*n),this.document.cookie=e+"="+encodeURIComponent(t)+";expires="+o.toGMTString()+";"}},deleteCookie:function(e){e&&(this.document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")},getStorage:function(e){if(e)return window.localStorage?decodeURIComponent(localStorage.getItem(e)):this.getCookie(e)},setStorage:function(e,t,n){e&&(window.localStorage?localStorage.setItem(e,encodeURIComponent(t)):this.setCookie(e,t,n))},deleteStorage:function(e){e&&(window.localStorage?localStorage.removeItem(e):this.deleteCookie(e))},daysInFebruary:function(e){var t=0;if(e instanceof Date)t=e.getFullYear();else{if("number"!=typeof e)return 0;t=e}return t%4!==0||t%100===0&&t%400!==0?28:29},daysInYear:function(e){var t=0;if(e instanceof Date)t=e.getFullYear();else{if("number"!=typeof e)return 0;t=e}return t%4!==0||t%100===0&&t%400!==0?365:366},dateFormat:function(e,t,n){var o={};o.Year=e.getFullYear(),o.TYear=(""+o.Year).substr(2),o.Month=e.getMonth()+1,o.TMonth=o.Month<10?"0"+o.Month:o.Month,o.Day=e.getDate(),o.TDay=o.Day<10?"0"+o.Day:o.Day,o.Hour=e.getHours(),o.THour=o.Hour<10?"0"+o.Hour:o.Hour,o.hour=o.Hour<13?o.Hour:o.Hour-12,o.Thour=o.hour<10?"0"+o.hour:o.hour,o.Minute=e.getMinutes(),o.TMinute=o.Minute<10?"0"+o.Minute:o.Minute,o.Second=e.getSeconds(),o.TSecond=o.Second<10?"0"+o.Second:o.Second,o.Millisecond=e.getMilliseconds(),o.Week=e.getDay();var i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],a=["Sun","Mon","Tue","Web","Thu","Fri","Sat"],l=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],c=o.Millisecond/1e3;return void 0!=t&&t.replace(/\s/g,"").length>0?(void 0!=n&&"en"===n&&(r=i.slice(0),l=a.slice(0)),t=t.replace(/yyyy/gi,o.Year).replace(/yyy/gi,o.Year).replace(/yy/gi,o.TYear).replace(/y/gi,o.TYear).replace(/MMM/g,r[o.Month-1]).replace(/MM/g,o.TMonth).replace(/M/g,o.Month).replace(/dd/gi,o.TDay).replace(/d/gi,o.Day).replace(/HH/g,o.THour).replace(/H/g,o.Hour).replace(/hh/g,o.Thour).replace(/h/g,o.hour).replace(/mm/g,o.TMinute).replace(/m/g,o.Minute).replace(/ss/gi,o.TSecond).replace(/s/gi,o.Second).replace(/fff/gi,o.Millisecond).replace(/ff/gi,100*c.toFixed(2)).replace(/f/gi,10*c.toFixed(1)).replace(/EEE/g,l[o.Week])):t=o.Year+"-"+o.Month+"-"+o.Day+" "+o.Hour+":"+o.Minute+":"+o.Second,t},dateDiff:function(e,t){var n=parseInt((e-t)/1e3);return n<60?n+"秒":n<3600?Math.floor(n/60)+"分钟":n<86400?Math.floor(n/3600)+"小时":n<604800?Math.floor(n/86400)+"天":n<2678400?Math.floor(n/604800)+"周":n<31536e3?Math.floor(n/2592e3)+"月":n<31536e6?Math.floor(n/31536e3)+"年":Math.floor(n/86400)+"天"},dateInterval:function(e,t){var n=parseInt((e-t)/1e3),o=Math.floor(n/86400),i=Math.floor((n-24*o*60*60)/3600),r=Math.floor((n-24*o*60*60-3600*i)/60),a=Math.floor(n-24*o*60*60-3600*i-60*r);return o+"天:"+i+"小时:"+r+"分钟:"+a+"秒"},replaceURLWithHTMLLinks:function(e,t){var n=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;return e=t?e.replace(n,"<a target='_blank' href='$1'>$1</a>"):e.replace(n,"<a href='$1'>$1</a>")},getLength:function(e,t){var n=/[\u4e00-\u9fa5]/g;return void 0!=t&&t===!1?e.length:n.test(e)?e.replace(n,"zz").length:e.length},str_replace:function(e,t,n,o){var i=0,r=0,a="",l="",c=0,s=0,u=[].concat(e),h=[].concat(t),d=n,f="[object Array]"===Object.prototype.toString.call(h),p="[object Array]"===Object.prototype.toString.call(d);for(d=[].concat(d),o&&(this.window[o]=0),i=0,c=d.length;i<c;i++)if(""!==d[i])for(r=0,s=u.length;r<s;r++)a=d[i]+"",l=f?void 0!==h[r]?h[r]:"":h[0],d[i]=a.split(u[r]).join(l),o&&d[i]!==a&&(this.window[o]+=(a.length-d[i].length)/u[r].length);return p?d:d[0]},nreplace:function(e){return null!=e&&""!=e?e.replace(".00",""):""}}}),define("tins",[],function(e,t,n){function o(e){return document.getElementById(e)}var i={};i.box=function(){var e,t,n,r,a,l,c,s,u=0;return{show:function(o,h,d,f,p,g){u||(e=document.createElement("div"),e.id="tinybox",t=document.createElement("div"),t.id="tinymask",n=document.createElement("div"),n.id="tinycontent",document.body.appendChild(t),document.body.appendChild(e),e.appendChild(n),t.onclick=i.box.hide,window.onresize=i.box.resize,u=1),p||h?(n.style.display="none",e.style.width=e.style.height="100px"):(e.style.width=d?d+"px":"auto",e.style.height=f?f+"px":"auto",e.style.backgroundImage="none",n.innerHTML=o),this.mask(),r=o,a=h,l=d,c=f,s=p,this.alpha(t,1,80,3),g&&setTimeout(function(){i.box.hide()},1e3*g)},fill:function(t,n,o,r,a){if(n){e.style.backgroundImage="";var l=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");l.onreadystatechange=function(){4==l.readyState&&200==l.status&&i.box.psh(l.responseText,o,r,a)},l.open("GET",t,1),l.send(null)}else this.psh(t,o,r,a)},psh:function(t,o,i,r){if(r){if(o&&i)n.innerHTML=t;else{var a=e.style.width,l=e.style.height;n.innerHTML=t,e.style.width=o?o+"px":"",e.style.height=i?i+"px":"",n.style.display="",o=parseInt(n.offsetWidth),i=parseInt(n.offsetHeight),n.style.display="none",e.style.width=a,e.style.height=l}this.size(e,o,i,4)}else e.style.backgroundImage="none"},hide:function(){i.box.alpha(e,-1,0,5)},resize:function(){i.box.pos(),i.box.mask()},mask:function(){t.style.height=i.page.theight()+"px",t.style.width="",t.style.width=i.page.twidth()+"px"},pos:function(){var t=i.page.height()/2-e.offsetHeight/2;t=t<10?10:t,e.style.top=t+i.page.top()+"px",e.style.left=i.page.width()/2-e.offsetWidth/2+"px"},alpha:function(e,t,n,o){clearInterval(e.ai),1==t&&(e.style.opacity=0,e.style.filter="alpha(opacity=0)",e.style.display="block",this.pos()),e.ai=setInterval(function(){i.box.twalpha(e,n,t,o)},20)},twalpha:function(o,u,h,d){var f=Math.round(100*o.style.opacity);if(f==u)clearInterval(o.ai),h==-1?(o.style.display="none",o==e?i.box.alpha(t,-1,0,3):n.innerHTML=e.style.backgroundImage=""):o==t?this.alpha(e,1,100,5):i.box.fill(r,a,l,c,s);else{var p=f+Math.ceil(Math.abs(u-f)/d)*h;o.style.opacity=p/100,o.style.filter="alpha(opacity="+p+")"}},size:function(e,t,n,r){e="object"==typeof e?e:o(e),clearInterval(e.si);var a=e.offsetWidth,l=e.offsetHeight,c=a-parseInt(e.style.width),s=l-parseInt(e.style.height),u=a-c>t?-1:1,h=l-s>n?-1:1;e.si=setInterval(function(){i.box.twsize(e,t,c,u,n,s,h,r)},20)},twsize:function(t,o,i,r,a,l,c,s){var u=t.offsetWidth-i,h=t.offsetHeight-l;u==o&&h==a?(clearInterval(t.si),e.style.backgroundImage="none",n.style.display="block"):(u!=o&&(t.style.width=u+Math.ceil(Math.abs(o-u)/s)*r+"px"),h!=a&&(t.style.height=h+Math.ceil(Math.abs(a-h)/s)*c+"px"),this.pos())}}}(),i.page=function(){return{top:function(){return document.body.scrollTop||document.documentElement.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight},theight:function(){var e=document,t=e.body,n=e.documentElement;return Math.max(Math.max(t.scrollHeight,n.scrollHeight),Math.max(t.clientHeight,n.clientHeight))},twidth:function(){var e=document,t=e.body,n=e.documentElement;return Math.max(Math.max(t.scrollWidth,n.scrollWidth),Math.max(t.clientWidth,n.clientWidth))}}}(),n.exports=i});