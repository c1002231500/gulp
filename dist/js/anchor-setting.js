define(function(s,a,n){var e=s("anchor-tools");n.exports={init:function(){var s=this;$(".live-info").on("click","#setting",function(){$("#pop").show(),$("#pop").css("z-index","999"),$("#shadow").css("display","block"),$("#setting").css("background","#ffab03"),UIF.handler.getNotice({},function(s){s=jQuery.parseJSON(s),null!=s&&void 0!=s.id&&($("#id").val(s.id),$("#roomNotice").val(s.notice))})}),$("#save").click(function(){var s=$("#roomNotice").val(),a=$("#id").val();UIF.handler.sendNotice({id:a,notice:s},function(s){200==jQuery.parseJSON(s).resultStatus&&($("#close").click(),e.dialog("公告保存成功!"))})}),$("#close").click(function(){$("#pop").hide(),$("#shadow").hide(),$("#setting").css("background","#ffab03")}),$("#noti_mana_song a").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("#info >div").hide(),$("#info >div").eq($(this).index()).show()});var a=$("#noti_mana_song a"),n=$("#info >div");a.eq(1).click(function(){a.removeClass("active"),$(this).addClass("active"),n.hide(),n.eq($(this).index()).show(),s.getRoomMan()}),a.eq(2).click(function(){a.removeClass("active"),$(this).addClass("active"),n.hide(),n.eq($(this).index()).show(),s.getSongList()}),$("#add_btn").click(function(){$("#mana_shadow").css("display","block"),$("#search_btn").show()}),$("#add_user").click(function(){$("#mana_shadow").css("display","block"),$("#search_btn").css("display","block")}),$("#mana_close").click(function(){$("#appear").css("display","none"),$("#mana_shadow").css("display","none")}),$("#search_btn").click(function(){var s=$("#userId").val();UIF.handler.getUser({userid:s},function(s){s=jQuery.parseJSON(s),null!=s&&void 0!=s.userid&&($("#idNum").html(s.userid),$("#userName").html(decodeURIComponent(s.nickName)),$("#userImg").attr("src","/apis/avatar.php?uid="+s.userid)),$("#appear").css("display","block"),$("#search_btn").css("display","none")})}),$("#user_add").click(function(){var a=$("#idNum").html();UIF.handler.roomManagers({toIds:a,drives:"adds"},function(a){a=jQuery.parseJSON(a),null!=a&&"success"==a.resultMessage&&($("#mana_shadow").css("display","none"),s.getRoomMan()),$("#userId").val(""),$("#search_btn").css("display","block"),$("#appear").css("display","none")})}),$("#songsSave").click(function(){var a=$("#songsName").val();UIF.handler.saveSongs({singer:"",songname:a},function(a){a=jQuery.parseJSON(a),null!=a&&"success"==a.resultMessage&&s.getSongList(),$("#songsName").val(""),$("#songsName").focus()})}),$(".added_list").on("click",".clearFix .fl",function(s){var a="",n=$(this),e=$(this).attr("class");null!=e&&e.split(" ").length>0&&(a=e.split(" ")[2]),UIF.handler.roomManagers({toIds:a,drives:"dels"},function(s){s=jQuery.parseJSON(s),null!=s&&"success"==s.resultMessage&&n.parent().remove()})}),$(".song_detail").on("click",".clearFix .fl",function(s){var a="",n=$(this),e=$(this).attr("class");null!=e&&e.split(" ").length>0&&(a=e.split(" ")[2]),UIF.handler.delSongs({songid:a},function(s){s=jQuery.parseJSON(s),null!=s&&"success"==s.resultMessage&&n.parent().remove()})}),$("#skin_info").on("click",".sk-useit",function(){var s=$(this).attr("data-sk"),a={roomNumber:UIF.handler.roomNumber,skid:s};e.dialog("确定使用新皮肤并重新开播吗?",function(){$.post("/ajax/roomSettings.php",a,function(s){"success"==s&&window.location.reload()})},function(s){})})},getRoomMan:function(){UIF.handler.getRoomMan({},function(s){s=jQuery.parseJSON(s);var a="";null!=s&&s.length>0&&($("#add_user").css("display","block"),$("#no_added").hide(),$("#added").show(),$.each(s,function(s,n){a+='<li class="clearFix"> <span class="num fl">'+(s+1)+'</span> <span class="level-bg fl"></span> <span class="name fl">'+decodeURIComponent(n.nickName)+'</span> <a href="javascript:;" class="delete fl '+n.userid+'">删除</a> </li>'})),$("#added_list").html(a)})},getSongList:function(){UIF.handler.songsListDetails({},function(s){s=jQuery.parseJSON(s);var a="";null!=s&&s.length>0&&($("#add_user").css("display","block"),$.each(s,function(s,n){a+='<li class="clearFix"> <span class="fl num">'+(s+1)+'</span><span class="fl item">'+n.songname+'</span> <a href="javascript:;" class="delete fl '+n.songid+'">删除</a> </li>'})),$("#song_detail").html(a)})}}});