define(function(t,n,e){var l=t("./anchor-tools");e.exports={lihtml:'\t\t\t<li>\t\t\t<div class="rkb-img">\t\t\t\t<img src="/apis/avatar.php?uid={0}" alt="{1}">\t\t\t</div>\t\t\t<div class="rkb-con">\t\t\t\t<p class="rkb-p1" style="font-size: 12px;">{2}</p>\t\t\t\t<p style="font-size: 12px;">{3}</p>\t\t\t</div>\t\t\t</li>',onMessage:function(t){this.appendHtmls(t)},init:function(){var t=this;this.sswapTab(".rk-header","div",".rk-contents",".rk-conn","nosel"),$(".r-week").on("click",function(){var n=UIF.handler.cache.get("Month_Fan_top");null==n?UIF.handler.weekNotice({},function(e){n=jQuery.parseJSON(e),null!=n&&(t.append2Htmls(n,"#formerly_month_fan_top"),n=UIF.handler.cache.put("Month_Fan_top",n))}):(t.append2Htmls(n,"#formerly_month_fan_top"),$(".rk-con2").nanoScroller())}),$(".r-active").on("click",function(){var n=UIF.handler.cache.get("Formerly_Fan_top");null==n?UIF.handler.cohesion({},function(e){n=jQuery.parseJSON(e),null!=n&&(t.append3Htmls(n,"#formerly_all_fan_top"),UIF.handler.cache.put("Formerly_Fan_top",n))}):(t.append3Htmls(n,"#formerly_all_fan_top"),$(".rk-con3").nanoScroller())})},sswapTab:function(t,n,e,l,o){$(t+" "+n).click(function(){$(this).removeClass(o).siblings().addClass(o),$(e+" > "+l).eq($(t+" "+n).index(this)).show().siblings().hide()})},appendHtmls:function(t){var n="";if(null!=t)for(var e=0;e<t.length;e++)n+=l.stringFormat(this.lihtml,t[e].userId,decodeURI(t[e].nickname),decodeURI(t[e].nickname),"贡献度："+t[e].moneys);$("#current_fan_top").html(n)},append2Htmls:function(t,n){if(null!=t){for(var e="",o=0;o<t.length;o++)e+=l.stringFormat(this.lihtml,t[o].userId,decodeURI(t[o].nickname),decodeURI(t[o].nickname),"贡献度："+t[o].moneys);null!=e&&e.length>0&&$(n).html(e)}},append3Htmls:function(t,n){if(null!=t){for(var e="",o=0;o<t.length;o++)e+=l.stringFormat(this.lihtml,t[o].userId,decodeURI(t[o].name),decodeURI(t[o].name),"亲密度："+t[o].cohe);null!=e&&e.length>0&&$(n).html(e)}}}});