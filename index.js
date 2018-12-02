/**
 * Created by lenovo on 2016/10/26.
 */
$(window).on("resize", function () {
    location.reload();
});
$(function () {
    /*返回顶部*/
    $(window).scroll(function () {
        if($(this).scrollTop()>200){
            $(".go_top").fadeIn();
        }else{
            $(".go_top").fadeOut();
        }
    });
    $(".top").click(function () {
        $("html,body").animate({
            "scrollTop":0
        },500)
    });
    /*banner轮播*/
    var timer=null,num=0;
    timer=setInterval(autoPlay,2000);
    var banner_li_width=$(".jd_banner ul li").width();
    function autoPlay() {
        num++;
        if(num==8){
            $(".jd_banner ol li").eq(0).addClass("current").siblings().removeClass("current");
        }
        if(num>8){
            $(".jd_banner ul").css("left","0");
            num=1;
        }
        $(".jd_banner ul").animate({
            left:-banner_li_width*num
        })
        $(".jd_banner ol li").eq(num).addClass("current").siblings().removeClass("current");
    }
    $(".jd_banner").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer=setInterval(autoPlay,2000);
    });
    /*手机版*/
    var startX,endX,offsetX=50,distance;
    $(".jd_banner ul").on("touchstart",function (e) {
        /*console.log(e);*/
        clearInterval(timer);
        startX=e.originalEvent.touches[0].clientX;
    })
    $(".jd_banner ul").on("touchmove",function (e) {
        /*console.log(e);*/
        endX=e.originalEvent.touches[0].clientX;
        distance=Math.abs(startX-endX);
       /* alert(distance);*/
    })
    $(".jd_banner ul").on("touchend",function () {
        if(distance>offsetX&&startX>endX){
            /*$(this).carousel(startX>endX?"next":"prev");*/
            num++;
            if(num>8){
                $(".jd_banner ul").css("left","0");
                num=1;
            }
            $(".jd_banner ul").animate({
                left:-banner_li_width*num
            },500,function () {
                timer=setInterval(autoPlay,2000);
            });
            $(".jd_banner ol li").eq(num).addClass("current").siblings().removeClass("current")

        }else{
            num--;
            if(num<0){
                $(".jd_banner ul").css("left",banner_li_width*8);
                num=7;
            }
            $(".jd_banner ul").animate({
                left:-banner_li_width*num
            },500,function () {
                timer=setInterval(autoPlay,2000);
            });
            $(".jd_banner ol li").eq(num).addClass("current").siblings().removeClass("current")

        }
    })
    /*******掌上秒杀*****/
    var dtWidth=$(".second_slider dt").width();
    /*alert(dtWidth);*/
    var sX,eX,X=20,Y,count=0;
    $(".second_slider").on("touchstart",function (e) {
        /*console.log(e);*/
        sX=e.originalEvent.touches[0].clientX;
    })
    $(".second_slider").on("touchmove",function (e) {
        /*console.log(e);*/
        eX=e.originalEvent.touches[0].clientX;
        Y=Math.abs(sX-eX);
    })
    $(".second_slider").on("touchend",function () {
        if((Y>X)&&(sX>eX)){
            /*$(this).carousel(startX>endX?"next":"prev");*/
            count++;
            if(count>3){
                $(".second_slider").css("left","0");
                count=1;
            }
            $(".second_slider").animate({
                left:-dtWidth*count
            },300);

        }else{
            count--;
            if(count<0){
                $(".second_slider").css("left",dtWidth*3);
                count=3;
            }
            $(".second_slider").animate({
                left:-dtWidth*count
            },300);
        }
    })


})
/*****倒计时***/
$(function () {
    /*****倒计时***/
    setInterval(
        function time_end() {
            var h=0,m=0,s=0;
            var date=new Date();
            /*var data_end=new Date("24:24:24");*/
            /* var date_detail=data_end-date;*/
            s=parseInt(date.getSeconds());
            m=parseInt(date.getMinutes());
            h=parseInt(date.getHours());
            /* alert(data_end.getSeconds())*/
            $(".s1").html(parseInt(h/10));
            $(".s2").html(parseInt(h%10));
            $(".s3").html(parseInt(m/10));
            $(".s4").html(parseInt(m%10));
            $(".s5").html(parseInt(s/10));
            $(".s6").html(parseInt(s%10));
        },200)
})