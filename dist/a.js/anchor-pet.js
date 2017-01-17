define(function(require,exports,module){var swf=require("./anchor-swf"),Tools=require("./anchor-tools"),UserData=require("./anchor-user");module.exports={TRAIN_PET:"TRAIN_PET",ATTACK_PET:"ATTACK_PET",LEVEL_GAP:5,petData:null,MaxTrainGapTime:3,currentGapTime:0,timeOut:null,TrainCompleteStr:"今日训练已完成",TrainLeftCountStr:"今日剩余<font color='#0000FF'>{0}</font>次",TrainGapStr:"训练中...剩余<font color='#0000FF'>{0}</font>s",PetNotBornStr:"精灵尚未出生",PetNameIllegal:"精灵名字包含非法字符",PetNameMaxLength:14,PetNameTooLong:"名字过长",MustFollowAnchor:"关注主播才可以训练",PetHelpTip:"训练或者赠送主播礼物都可以增加精灵经验，帮助精灵升级。\n每天可以训练精灵3次，提升爵位等级可以增加每日训练次数",RandomAnimateGap:30,Switch:!1,RandomAnimateSwitch:!0,socketAfter:function(){this.sendPetInit()},init:function(options){if(UIF.roomType){var param=jQuery.parseJSON(options.params);param.hasOwnProperty(UIF.roomType)&&(this.Switch=eval(param[UIF.roomType].pets))}this.initPetView(),this.initPetOptView(),this.initPetInteractions(),this.initHelpTipView()},initHelpTipView:function(){$("#pet-opt-ui-helpTip-textArea").val(this.PetHelpTip)},initPetView:function(){$("#Pet").hide(),$("#petName").hide(),$("#clickRect").hide()},initPetData:function(t){t.hasOwnProperty("level")&&($("#Pet").show(),$("#petName").show(),$("#clickRect").show(),this.petData=t,0==t.level?this.petData.isBorn=!1:this.petData.isBorn=!0,this.updatePetshow())},petBirth:function(){this.sendPetInit()},updatePetData:function(t){null!=this.petData&&(this.petData.attack=t.attack,this.petData.blood=t.blood,this.petData.defense=t.defense,this.petData.level=t.level,this.petData.name=t.name,this.petData.petName=t.petName,this.petData.sname=t.sname,this.petData.now=t.now,this.petData.upExp=t.upExp,t.hasOwnProperty("count")&&(this.petData.count=t.count),t.hasOwnProperty("maxCount")&&(this.petData.maxCount=t.maxCount),this.updatePetshow())},startTrainTimeTick:function(){this.currentGapTime=this.MaxTrainGapTime,_this=this;var t=function(){return _this.currentGapTime--,_this.updateTrainGapShow(),_this.currentGapTime<=0?(_this.currentGapTime=0,void clearTimeout(_this.timeOut)):void(_this.timeOut=setTimeout(t,1e3))};t()},updateTrainGapShow:function(){if(this.checkIfTrainLimit())$("#pet-opt-ui-trainCountleft").html(this.TrainCompleteStr),$("#pet-opt-ui-trainCountleft").show(),$("#pet-opt-ui-trainGap").hide(),$("#pet-opt-ui-trainBtn").attr("class","pet-opt-ui-trainBtn-disable");else if(this.currentGapTime>0)$("#pet-opt-ui-trainCountleft").hide(),$("#pet-opt-ui-trainGap").html(this.TrainGapStr.replace("{0}",this.currentGapTime)),$("#pet-opt-ui-trainGap").show(),$("#pet-opt-ui-trainBtn").attr("class","pet-opt-ui-trainBtn-disable");else{var t=this.petData.maxCount-this.petData.count;t<0&&(t=0),$("#pet-opt-ui-trainCountleft").html(this.TrainLeftCountStr.replace("{0}",t)),$("#pet-opt-ui-trainCountleft").show(),$("#pet-opt-ui-trainGap").hide(),$("#pet-opt-ui-trainBtn").attr("class","pet-opt-ui-trainBtn")}},checkIfTrainLimit:function(){return this.petData.count>=this.petData.maxCount},updatePetMovie:function(){var t=this,e=function(){var e={};t.checkIfPetBorn()?(e.imageId=t.petData.petId,e.level=t.petData.level,e.levelGap=t.LEVEL_GAP,t.RandomAnimateSwitch&&(e.randomMovieGap=t.RandomAnimateGap),swf.petUpdateData(e)):(e.imageId="0",e.level=0,e.levelGap=t.LEVEL_GAP,t.RandomAnimateSwitch&&(e.randomMovieGap=t.RandomAnimateGap),swf.petUpdateData(e))};try{e()}catch(t){setTimeout(e,2e3)}},playTrainMoive:function(){if(this.checkIfPetBorn()){var t=this,e=function(){swf.petPlayAction(t.TRAIN_PET)};try{e()}catch(t){setTimeout(e,2e3)}}},updatePetshow:function(){if(this.updatePetMovie(),this.checkIfPetBorn()){$("#petName").show(),$("#petName").html(this.petData.name),$("#pet-opt-ui-title").html(this.petData.petName),$("#pet-opt-ui-petNameInput").val(this.petData.name),$("#pet-opt-ui-level").html(this.petData.level),$("#pet-opt-ui-hpTxt").html(this.petData.blood),$("#pet-opt-ui-powerTxt").html(this.petData.attack),$("#pet-opt-ui-expText").html(this.petData.now+"/"+this.petData.upExp);var t=$("#pet-opt-ui-petlevelBar").css("max-width").split("px")[0];$("#pet-opt-ui-petlevelBar").width(t*this.petData.now/this.petData.upExp+"px"),this.updateTrainGapShow()}},sendPetInit:function(){this.Switch&&UIF.handler.sendPetInit()},showPetUI:function(t,e){return UIF.handler.login?this.checkIfPetBorn()?($(".pet-opt-ui").css({left:$("#Pet")[0].offsetLeft+.5*$("#Pet")[0].clientWidth+.5*$("#clickRect")[0].clientWidth+"px",top:$("#Pet")[0].offsetTop+.5*$("#Pet")[0].clientHeight+"px"}),this.updatePetshow(),void $(".pet-opt-ui").show()):void Tools.dialog(this.PetNotBornStr):void UIF.handler.loging()},hidePetUI:function(){$(".pet-opt-ui").hide()},showNameChange:function(){this.checkIfAnchor()&&(document.getElementById("pet-opt-ui-petNameInput").readOnly=!1,$("#pet-opt-ui-changenameBtn").hide(),$("#pet-opt-ui-changename-confirmBtn").show(),$("#pet-opt-ui-changename-cancelBtn").show(),$("#pet-opt-ui-petNameInput").focus())},hideNameChange:function(){document.getElementById("pet-opt-ui-petNameInput").readOnly=!0,$("#pet-opt-ui-changenameBtn").show(),$("#pet-opt-ui-changename-confirmBtn").hide(),$("#pet-opt-ui-changename-cancelBtn").hide()},confirmNameChangeFunc:function(){this.changePetName()},cancelNameChangeFunc:function(){this.hideNameChange()},showHelpFunc:function(t,e){$("#pet-opt-ui-helpTip").css({left:20+t+"px",top:e+"px"}),$("#pet-opt-ui-helpTip").show()},hideHelpFunc:function(){$("#pet-opt-ui-helpTip").hide()},trainPetFunc:function(){if(!UIF.handler.login)return void UIF.handler.loging();if(this.checkIfPetBorn()){if(!UserData.data.isFollows&&!this.checkIfAnchor())return void Tools.dialog(this.MustFollowAnchor);if(this.checkIfTrainLimit())return void Tools.dialog(this.TrainCompleteStr);var t=this,e={giftType:"pet"};UIF.handler.deduction(e,function(e){var i=jQuery.parseJSON(e);220==i.resultStatus&&(t.updateTrainInfo(i),t.startTrainTimeTick(),t.playTrainMoive())})}},updateTrainInfo:function(t){t.hasOwnProperty("count")&&(this.petData.count=t.count),t.hasOwnProperty("maxCount")&&(this.petData.maxCount=t.maxCount),this.updatePetshow()},changePetName:function(t){if(this.checkIfAnchor()){var e=$("#pet-opt-ui-petNameInput").val();if(e.replace(/[^\x00-\xff]/g,"**").length>this.PetNameMaxLength)return void Tools.dialog(this.PetNameTooLong);var i=$("#pet-opt-ui-petNameInput").val();if(i==this.petData.name)return void this.hideNameChange();this.hideNameChange();var a={petName:i};UIF.handler.changePetName(a,function(t){var e=jQuery.parseJSON(t);110==e.resultStatus&&Tools.dialog(this.PetNameIllegal)})}},checkIfPetBorn:function(){return!!this.petData&&this.petData.isBorn},initPetOptView:function(){var t=this;$(".pet-opt-ui button").click(function(e){if(t.checkIfPetBorn()){var i=e.target.className;switch(i){case"pet-opt-ui-closeBtn":t.hidePetUI();break;case"pet-opt-ui-changenameBtn":t.showNameChange();break;case"pet-opt-ui-changename-confirmBtn":t.confirmNameChangeFunc();break;case"pet-opt-ui-changename-cancelBtn":t.cancelNameChangeFunc();break;case"pet-opt-ui-helpBtn":break;case"pet-opt-ui-trainBtn":t.trainPetFunc()}}}),$("#pet-opt-ui-helpBtn").mouseover(function(e){t.showHelpFunc(e.pageX,e.pageY)}),$("#pet-opt-ui-helpBtn").mouseout(function(e){t.hideHelpFunc()}),$("#pet-opt-ui-changenameBtn").hide(),$("#pet-opt-ui-changename-confirmBtn").hide(),$("#pet-opt-ui-changename-cancelBtn").hide(),this.checkIfAnchor()&&$("#pet-opt-ui-changenameBtn").show()},initPetInteractions:function(){var t=this;$(".clickRect").click(function(e){t.showPetUI(e.pageX,e.pageY)})},checkIfAnchor:function(){return UIF.handler.anchorId==UIF.handler.userId}}});