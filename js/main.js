//首页校区选择
$(function(){
    $("#HJ").click(function(){
        $("#myTabDrop1").html("火炬校区<b class='caret'></b>");
    });
});
$(function(){
    $("#NL").click(function(){
        $("#myTabDrop1").html("南朗校区<b class='caret'></b>");
    });
});



//首页中间区域高度随内容块增加自适应，并且底部留白150px
$(function(){
    var h1=$(".middle").find(".col-xs-4").height();
    var l=$(".middle").find(".col-xs-4").length;
    var rows=parseInt(l/3);
    if((l%3)!=0){
        rows=rows+1;
    }
    var h2=h1*rows+100;
    var h=h2+"px";
    $(".middle").css("height",h);
});


//首页模块图标点击变色
$(function(){
   $(".middle").find(".col-xs-4").click(function(){
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon4_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon5_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon6_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon7_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon8_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon9_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon10_1");
       $(".middle").find(".col-xs-4").find("span").removeClass("icon-icon11_1");
       var id=this.id;
       $(".middle").find(".col-xs-4").css("background-color","#ffffff");
       $(".middle").find(".col-xs-4").find("p").css("color","#1bb9e0");
       $("#"+id).css("background-color","#1bb9e0");
       $("#"+id).find("p").css("color","#ffffff");
       var classQuery="classQuery";
       var cordQuery="cordQuery";
       var certificate="certificate";
       var album="album";
       var schoolLife="schoolLife";
       var inform="inform";
       var about="about";
       var classTable="classTable";
       switch (id){
           case classQuery:
               $("#"+id).find("span").addClass("icon-icon5_1");
               break;
           case cordQuery:
               $("#"+id).find("span").addClass("icon-icon6_1");
               break;
           case certificate:
               $("#"+id).find("span").addClass("icon-icon8_1");
               break;
           case album:
               $("#"+id).find("span").addClass("icon-icon7_1");
               break;
           case schoolLife:
               $("#"+id).find("span").addClass("icon-icon4_1");
               break;
           case inform:
               $("#"+id).find("span").addClass("icon-icon9_1");
               break;
           case about:
               $("#"+id).find("span").addClass("icon-icon10_1");
               break;
           case classTable:
               $("#"+id).find("span").addClass("icon-icon11_1");
               break;
       }
   });
});

//首页底部图标变底色
$(function(){
   $(".bottom").find(".col-xs-4").click(function(){
       $(".bottom").find(".col-xs-4").css("background-color","#1bb9e0");
       var id=this.id;
       $("#"+id).css("background-color","#18a4c7");
   });
});

//禁用IOS300ms点击延时
$(function(){
	window.addEventListener('load', function() {
		  FastClick.attach(document.body);
		}, true);
});

//查询课程页面 课时少于3节课时变橙色警告
$(function(){
    var m=parseInt($("h2").text());
    if(m<=3){
        $("#lastClassBG").attr("src","images/lastClassBG2.png");
    }
});

//考勤颜色控制
$(function(){
    $(".list-group-item").each(function(){
        var s=$(this).find(".state").text();
        if(s=="旷"){
            $(this).find(".state").css("background-color","#f26d3e");
            $(this).css("border-bottom","#f26d3e solid 1px");
        }else if(s=="请"){
            $(this).find(".state").css("background-color","#64d8ae");
            $(this).css("border-bottom","#64d8ae solid 1px");
        }else if(s=="准"){
            $(this).find(".state").css("background-color","#1bb9e0");
            $(this).css("border-bottom","#1bb9e0 solid 1px");
        }
    });
});

//考试成绩通过与否颜色控制
$(function(){
    $(".list-group-item").each(function(){
        var s=$(this).find(".cord").text();
        if(s=="通过"){
            $(this).find(".cord").css("background-color","#1bb9e0");
            $(this).css("border-bottom","#1bb9e0 solid 1px");
        }else if(s=="未通过"){
            $(this).find(".cord").css("background-color","#f26d3e");
            $(this).css("border-bottom","#f26d3e solid 1px");
        }
    });
});

//成长纪念册日期颜色控制，当日的内容为橙色
$(function(){
    $(".list").each(function(){
        var myDate = new Date();
        var d=myDate.toLocaleDateString();
        d=d.split("/");
        d[1]=d[1].toString();
        d[2]=d[2].toString();
        d=(d[1]+d[2]);//获取本地时间并格式化为纯数字的字符串格式
        var t=$(this).find(".dateBox").find(".date").text();
        var t1=t.replace("月","");
        var t2=t1.replace("日","");//获取每条记录显示的日期并格式化为纯数字的字符串格式
        if(t2==d){
            $(this).find(".dateBox").find(".date").html(t+"&nbsp&nbsp&nbsp&nbsp"+"今天");
            $(this).find(".dateBox").css("width","120px");
            $(this).find(".dateBox").css("background-color","#f26d3e");
        }
    });
});

//成长纪念册图片数量一张和多张时大小控制
$(function(){
    $(".listContent").each(function(){
        var l=$(this).find("img").length;
        if(l==1){
            $(this).find("img").css("width","160px");
            $(this).find("img").css("height","115px");

        }
    });
});

//部分页面底部留白
$(function(){
   $(".marginBottom").css("margin-top","100px");
});


//在此处修改电话自动拨号号码
$(function(){
   $("#tel").attr("href","tel:13527119843");
});

//教师端点名按钮颜色和是否可点击控制
$(function(){
   $(".list-group-item").each(function(){
       var s=$(this).find(".statue").text();
       if(s=="课程结束"||s=="还未开始"){
           $(this).find(".statue").css("background-color","#a4a4a4");
           $(this).css("border-bottom","#a4a4a4 solid 1px");
           $(this).find(".callNameBtn").attr("disabled",true);
           $(this).find(".callNameBtn").css("background-color","#a4a4a4");
       }else if(s=="正在上课"){
           $(this).find(".statue").css("background-color","#1bb9e0");
           $(this).css("border-bottom","#1bb9e0 solid 1px");
           $(this).find(".callNameBtn").attr("disabled",false);
           $(this).find(".callNameBtn").css("background-color","#1bb9e0");
       }else if(s=="课程取消"){
           $(this).find(".statue").css("background-color","#f26d3e");
           $(this).find(".callNameBtn").attr("disabled",true);
           $(this).find(".callNameBtn").css("background-color","#a4a4a4");
           $(this).find(".callNameBtn").text("------")
       }
   });
});

//教师点名页面考勤按钮点击颜色控制
$(function(){
    $(".callNameBox").each(function(){
        var t=$(this);
        t.find(".onTimeBtn").click(function(){
            t.find("button").css("background-color","#f2f2f2");
            t.find("button").css("color","#000000");
            t.find(".onTimeBtn").css("background-color","#1bb9e0");
            t.find(".onTimeBtn").css("color","#ffffff");
        });
        t.find(".askForLeave").click(function(){
            t.find("button").css("background-color","#f2f2f2");
            t.find("button").css("color","#000000");
            t.find(".askForLeave").css("background-color","#64d8ae");
            t.find(".askForLeave").css("color","#ffffff");
        });
        t.find(".skipClass").click(function(){
            t.find("button").css("background-color","#f2f2f2");
            t.find("button").css("color","#000000");
            t.find(".skipClass").css("background-color","#f26d3e");
            t.find(".skipClass").css("color","#ffffff");
        });
    });
});

//课程表表格高度
$(function(){
   var h=$(window).height()-115;
    $(".tableClass").css("height",h+"px");
});

//底部弹出框
$(function(){
    $(document).on("open", ".weui-popup-modal", function() {
        console.log("open popup");
    }).on("close", ".weui-popup-modal", function() {
        console.log("close popup");
    });
});

//控制课程表随机颜色块
$(function(){
    var color=new Array("#1bb9e0","#ff7e50","#50ffb7","#ff5050");
    $(".classTime").each(function(){
        var c=Math.floor(Math.random()*3);
        $(this).css("background-color",color[c]);
    });
});

$(function(){
    $(".classTime").each(function(){
        var s=$(this).find(".start").text();
        var o=$(this).find(".over").text();
        var ss=parseInt(s.split(":"));
        var oo=parseInt(o.split(":"));
        var h=$(this).height();
        if(oo-ss>=3){
            $(this).css("height",3/2*h+"px");
        }
        if(ss>12){
            $(this).css("top","60%");
        }

    });
});