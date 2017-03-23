$(function(){ 
    // pc 端js    
    var window_width = $(window).width();
    
    if(window_width > 767){
      // 导航栏高度
      var nav = $("#NavMenu");
      var item = nav.find(".item");
      var nav_height = 420;   //导航栏总高度
      var item_len = item.length;     //导航个数
      var hidden_item_len = nav.find(".item.visible-xs").length;     //隐藏导航个数
      var show_item_len = item_len - hidden_item_len;
      var per_item_height = nav_height / show_item_len +"px";
      var per_item_links = (nav_height / show_item_len) / 2 +"px";

      var little_links_num = item.children(".little-links").length;

      if(little_links_num){
        item.css({"height":per_item_height,"line-height":per_item_links});
      }else{
        item.css({"height":per_item_height,"line-height":per_item_height});
      }

      // 二级导航滑出
      $(".nav .item").mouseenter(function(){
         $(".nav .item").removeClass("item-hover");
         $(this).addClass("item-hover");
         var item_num = $(this).index();
         $(".nav-content .dorpdown-layer:eq("+item_num+")").css("display","block").siblings().css("display","none");
      });
      $(".nav-content").mouseleave(function(){
         $(".nav .item").removeClass("item-hover");
         $(".nav-content .dorpdown-layer").css("display","none");
      });  

      //监测滚动 绑定滚动条事件    
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
      })

      //活动目录点击效果 
      $(document).on("click",".contents-item div",function(){
        $(this).find("span").addClass("active");
        $(this).siblings().find("span").removeClass("active");
      })

      // 置换酒品介绍
      $(document).on("click",".info .carousel-control.right",function(){
        var index = $(".info-box.active").index();
        var len = $(".info-slide .info-box").length-1;
        if(index == 0){
          $("#point").css("left",520);
        }else if(index == 1){
          $("#point").css("left",780);
        }else{
          $("#point").css("left",260);
        }
        if(index == len){
          index = -1;
        }
        $("#carousel-bar .carousel-item:eq("+ (index + 1) +")").addClass("active").siblings().removeClass("active");
      })
      $(document).on("click",".info .carousel-control.left",function(){
        var index = $(".info-box.active").index();
        if(index == 0){
          $("#point").css("left",780);
        }else if(index == 1){
          $("#point").css("left",260);
        }else{
          $("#point").css("left",520);
        }
        $("#carousel-bar .carousel-item:eq("+ (index-1) +")").addClass("active").siblings().removeClass("active");
      })
      
      $(document).on("click","#carousel-bar .carousel-item",function(){
        $("#carousel-generic").carousel('pause')  
        var index = $(this).index()+1;
        $("#point").css("left",index * 260);
        $(this).addClass("active").siblings().removeClass("active");
      }) 

      // 全部商品滑出导航            
      $("#drop-btn").mouseover(function(){  
        $("#drop-li .nav").css("display","block");
       })

      $(".top-nav").mouseleave(function(){       
        $("#drop-li .nav").css("display","none");
       })
    }
    // 小屏幕下的js
    else{
      // 搜索框value
      $(".search-box .search-btn").val("");
      // 活动详情地图全屏
      $(document).on("click",".view-map",function(){
        $(this).parents(".active-banner").find(".mapwrap").addClass("mapwrap-show");
        var map_height = $(window).height();
        $(".mapwrap iframe").height(map_height);
      })

      // 酒品介绍
      $(document).on("swipeLeft",".info-slide",function(){
        $("#carousel-generic").carousel("next");
      })
      $(document).on("swipeRight",".info-slide",function(){
        $("#carousel-generic").carousel("prev");
      })
      
      // 产品搜索选项
      // var isClose = true;
      // 综合
      // $(document).on("click",".conplex",function(){
      //   if(isClose){
      //     $(this).parent().siblings(".conplex-select").addClass("open");
      //     $(document.body).css("overflow","hidden");
      //     isClose = false;
      //   }else{
      //     $(this).parent().siblings(".conplex-select").removeClass("open");
      //     $("body").css("overflow","auto");
      //     isClose = true;
      //   }           
      // })
      // 筛选弹框
      // var item_str = ""; 
      // item_str = $("#filter-item").html();
      //   $(document).on("click",".filter",function(){
      //   $(this).parents(".phone-option").siblings(".filter-select").addClass("open");
      //   $(document.body).css("overflow","hidden");
                     
      // })
      // $(document).on("click","#filter-select .sure",function(){          
      //   $(this).parents("#filter-select").removeClass("open");
      //   $("body").css("overflow","auto");
      //   $("#filter-item").html(item_str);
      // })

      // 筛选选项
      // $(document).on("click",".filter-option li",function(){
      //   var list_str = "";
      //   var index = $(this).index();        
      //   list_str = $("#filter-list .list:eq("+index+")").html();
      //   $(this).parents(".filter-box").empty().append(list_str);           
      // })  
    }
      
     
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
    //产品详情类型选择  
    $(document).on("click",".iteminfo .item",function(){
      $(this).addClass("select").siblings().removeClass("select");
    }) 

    // 新闻页面类型选择
    $(document).on("click",".news-content .news-bar",function(){
      var index = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(".news-area").find(".news-box:eq("+index+")").addClass("active").siblings().removeClass("active");
    })
    
    // 懒加载
    $(function() {
      $(".active-cover img").addClass("lazy");
      $(".product-box img").addClass("lazy");
      $(".act-area img").addClass("lazy");
      $("img.lazy").lazyload({effect: "fadeIn"});
    });

    //返回顶部
    $(window).bind("scroll",function(){
      var totop = $(".toTop").offset().top;
      if(totop > 600){
        $(".toTop").fadeIn();
      }
      else{
        $(".toTop").fadeOut();
      }
    })    
    
    $(document).on("click",".toTop",function(){
        $('body,html').animate({scrollTop:0},600);        
        return false;
    })
})



