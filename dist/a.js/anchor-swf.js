define(function(e,t,s){e("swfobject");e("cons");s.exports={init:function(){swfobject.embedSWF("/js/sea-modules/swf/MultyGiftNotice.swf?20140218","MultyGiftNoticeSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"}),swfobject.embedSWF("/js/sea-modules/swf/CustomGift.swf?20140218","CustomGiftSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"}),swfobject.embedSWF("/js/sea-modules/swf/LevelUpPlayer.swf?20140218","LevelUpPlayerSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"}),swfobject.embedSWF("/js/sea-modules/swf/EffectPlayer.swf?v=102403","EffectPlayerSwf",940,500,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"}),swfobject.embedSWF("/js/sea-modules/swf/PetNew.swf?v=102403","PetSwf",440,320,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"}),swfobject.embedSWF("/js/sea-modules/swf/treasureBox.swf","treasureBox_swf",100,100,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"})},close:function(e){try{$("#"+e.elements).css("z-index","0"),$("#"+e.elements).css("pointer-events","none"),swfobject.getObjectById("EffectPlayerSwf").style.visibility="hidden"}catch(e){setTimeout(function(){},5e3)}},hideSuc:function(){alert("hide success")},filDescribe:"豪华礼物",fil:function(e){if(UIF.handler.effect)try{$("#EffectPlayerSwf").css("z-index","3000"),swfobject.getObjectById("EffectPlayerSwf").style.visibility="visible";var t="/files/showGift/"+e.giftId+".swf";swfobject.getObjectById("EffectPlayerSwf").jsNewGift(t,e.number,e.car,e.nickname,e.carName,e.needAddFlag)}catch(e){UIF.log(e)}},figDescribe:"数组礼物",fig:function(e){if(UIF.handler.effect)try{$("#EffectPlayerSwf").css("z-index","3000"),swfobject.getObjectById("EffectPlayerSwf").style.visibility="visible",swfobject.getObjectById("EffectPlayerSwf").jsRun("/files/showGift/"+e.image,e.shape)}catch(e){UIF.log(e)}},cusDescribe:"随机礼物",cus:function(e){if(UIF.handler.effect)try{$("#CustomGiftSwf").css("z-index","3000"),swfobject.getObjectById("CustomGiftSwf").style.visibility="visible",swfobject.getObjectById("CustomGiftSwf").jsRun("/files/showGift/"+e.image+".png",e.number)}catch(e){UIF.log(e)}},mulDescribe:"连送礼物",mul:function(e){if(UIF.handler.effect)try{$("#MultyGiftNoticeSwf").css("z-index","3000"),swfobject.getObjectById("MultyGiftNoticeSwf").style.visibility="visible",swfobject.getObjectById("MultyGiftNoticeSwf").showMultyGift(e.uid,e.user,e.number,e.sendNum,e.headImg,"/files/showGift/"+e.giftImg+".png")}catch(e){UIF.log(e)}},actDescribe:"活跃升级",act:function(e){if(UIF.handler.effect)try{$("#LevelUpPlayerSwf").css("z-index","3000"),$("#LevelUpPlayerSwf").css("pointer-events","auto"),swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible",swfobject.getObjectById("LevelUpPlayerSwf").showActivityLevelup(e.headImg,e.actlevel)}catch(e){UIF.log(e)}},cohDescribe:"亲密升级",coh:function(e){if(UIF.handler.effect)try{$("#LevelUpPlayerSwf").css("z-index","3000"),$("#LevelUpPlayerSwf").css("pointer-events","auto"),swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible",swfobject.getObjectById("LevelUpPlayerSwf").showIntimacyLevelup(e.headImg,e.cohlevel,e.anhimg)}catch(e){UIF.log(e)}},speDescribe:"爵位升级",spe:function(e){if(UIF.handler.effect)try{$("#LevelUpPlayerSwf").css("z-index","3000"),$("#LevelUpPlayerSwf").css("pointer-events","auto"),swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible",swfobject.getObjectById("LevelUpPlayerSwf").showUserLevelup(e.nickname,e.speimg)}catch(e){UIF.log(e)}},guardLevelupDescribe:"用户守护升级特效",guardLevelup:function(e){if(UIF.handler.effect)try{$("#LevelUpPlayerSwf").css("z-index","3000"),$("#LevelUpPlayerSwf").css("pointer-events","auto"),swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible",swfobject.getObjectById("LevelUpPlayerSwf").showGuardLevelup(e.guardLevel,e.nickname)}catch(e){UIF.log(e)}},censorDescribe:"关闭直播间",censor:function(e){"stop"==e.resultMessage?UIF.currentUserID==e.userId&&(self.location="/html/100.html"):self.location="/html/102.html"},anchorPK:function(e){UIF.log("主播pk信息："+e.roomIds);var t=UIF.currentRoomNumber,s=e.roomIds[0];t==s&&(s=e.roomIds[1]),swfobject.getObjectById("player").pkStart(s)},petPlayAction:function(e){var t=e;swfobject.getObjectById("PetSwf").playAction(t)},petUpdateData:function(e){var t=e.imageId,s=e.level,c=e.levelGap,f=e.randomMovieGap;swfobject.getObjectById("PetSwf").updateData(t,s,c,f)},changeTreasureBoxState:function(e){swfobject.getObjectById("treasureBox_swf").updateState(e)}}});