function show_textarea(par_1){
   $(document).on("click",par_1,function(){
       $(this).parents(".edit-box").find(".text-box").toggleClass("text-box-show");
       $(this).parents(".edit-box").find(".contents").toggleClass("contents-hidden");
   }) 
}

$(function(){
    // 文本框的显示隐藏
    $('#uploadify1').css("opacity","0");
    show_textarea(".edit-bar");
    show_textarea(".art-save");
    show_textarea(".cancle-save");

    $(document).on("click",".re-edit",function(){        
        var intitle = $(this).parent().find(".title-input").val();        
        $(this).parent().find(".title-input").val("").focus().val(intitle).select();
    })

    // 进度框的显示隐藏
    $(document).on("click",".layer-close",function(){
        $(".layer-content").fadeOut();
    })
    $(document).on("click",".completeDetail",function(){
        $(".layer-content").fadeIn();
    })
    // 跳到对应的段落
    $(document).on("click",".progre-go",function(e){
      var p_id = $(this).parent().index();
      $(".layer-content").fadeOut();
    });

    //产品添加全选按钮
    $(document).on("click",".select-all",function(){
      var check = $('.color-checkbox input[name="checkbox"]').attr("checked",this.checked);
    });

    //活动详情地图出现隐藏
    $(document).on("click",".view-map",function(){
      $(this).parents(".active-banner").find(".banner-box").fadeOut(1);
      $(this).parents(".active-banner").find(".mapwrap").addClass("mapwrap-show");
      $(this).parents(".active-banner").find(".closemap-btn").css("display","block");
    })  
    $(document).on("click",".closemap-btn",function(){
      $(this).parents(".active-banner").find(".mapwrap").removeClass("mapwrap-show");
      $(this).parents(".active-banner").find(".banner-box").fadeIn(1000);
      $(this).parents(".active-banner").find(".closemap-btn").css("display","none");
    })

    // 图片删除
    $(document).on("mouseover","#staticPics span",function(){
      $(this).find(".remove-pic").addClass("remove-picshow");
    })
    $(document).on("mouseout","#staticPics span",function(){
      $(this).find(".remove-pic").removeClass("remove-picshow");
    })

    $(document).on("click","#staticPics .remove-pic",function(){
      $(this).parent().remove();
    })

    //活动目录点击效果 
    $(document).on("click",".contents-item div",function(){
      $(this).find("span").addClass("active");
      $(this).siblings().find("span").removeClass("active");
    })
    //监测滚动            
     //绑定滚动条事件  
       //绑定滚动条事件  
     $(window).bind("scroll", function () {  
         var sTop = $(window).scrollTop();  
         var sTop = parseInt(sTop); 
         var active_len = $("#active-len").height();
         if (sTop >= active_len) {  
             if (!$("#scrollSearchDiv").is(":visible")) {  
                 try {  
                     $("#scrollSearchDiv").slideDown();  
                 } catch (e) {  
                     $("#scrollSearchDiv").show();  
                 }                        
             }  
         }  
         else {  
             if ($("#scrollSearchDiv").is(":visible")) {  
                 try {  
                     $("#scrollSearchDiv").slideUp();  
                 } catch (e) {  
                     $("#scrollSearchDiv").hide();  
                 }                         
             }  
         }; 
      }); 
    // 监测顶部工具栏、固定到顶部
    $(window).bind("scroll",function(){
      var progressbar_top = $("#progressbar").offset().top;
      var sTop = $(window).scrollTop();  
      var sTop = parseInt(sTop); 
      if(progressbar_top < sTop){
        $("#progressbar").addClass("progressbar-fixed");
        $("#maincnt").addClass("maincnt-fixed");
      }
      if(sTop==0){
        $("#progressbar").removeClass("progressbar-fixed");
        $("#maincnt").removeClass("maincnt-fixed");
      }
    })
})
