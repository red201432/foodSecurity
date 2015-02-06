//加载indicators.xml文档
$(document).ready(
    function () {
        $.ajax({
            url: 'xml/indicatorsTree.xml',
            type: 'GET',
            dataType: 'xml',
            timeout: 1000,  //超时时间
            cache: false,   //启用缓存
            error: function (xml1) {
                alert("加载XML失败!");
            },
            success: GetIndicators   //回调函数
        });
        function GetIndicators(xml1) {
        	 var showbool=false;
            $(xml1).find("dimension").each(function (i) {
                //var indicator_name = $(this).text();
            	var dimension_id=$(this).attr("id");
                var dimension_about = $(this).attr("about");
                var dimension_name=$(this).attr("name");
                //  alert(indicator_name);
                $("<div class='dimensionName' id='"+dimension_name+"'><div id='triangle' class='triangle-dimensions'></div><a href='#'>"
                		+ dimension_id + "</a></div>").appendTo("#guideTree_left").on("click", function () {
                			if(showbool==false){
                				showbool=true;
                			$("#"+dimension_name +">#triangle").attr('class','triangle-down');
                			$(xml1).find("dimension[name='"+dimension_name+"']>indicator").each(function(i){
                				var indicator_name=$(this).attr("name");
                				var indicator_text=$(this).text();
                				var indicator_about=$(this).attr("about");
                				$("<div class='indicatorName' id='"+indicator_name+"'><div style='width:10px' class='triangle-indicators'></div><a href='#'>"
                        		+ indicator_text + "</a></div>").appendTo("#"+dimension_name).click(function(){
                        			$("#guideTree_right").empty();
                                    $("<p class='indicatorAbout_header'>" + indicator_text + "</p><hr /><p class='indicatorAbout'>"
                                    		+ indicator_about + "</p>").appendTo("#guideTree_right"); 
                                    event.stopPropagation();
                        		});
                			})
                			} else if(showbool==true) {
                				showbool=false;
                				$("#"+dimension_name +">#triangle").attr('class','triangle-dimensions');
                				$("#"+dimension_name+">.indicatorName").remove();//选择dimension_name
                			}
                   // $("#guideTree_right").empty();
                   // $("<p class='indicatorAbout_header'>" + dimension_id + "</p><hr /><p class='indicatorAbout'>"
                   // 		+ dimension_about + "</p>").appendTo("#guideTree_right");
                });
            });
        }
        /*
        function GetIndicators(xml1) {
            $(xml1).find("dimension").each(function (i) {
                //var indicator_name = $(this).text();
            	var dimension_id=$(this).attr("id");
                var dimension_about = $(this).attr("about");
                var dimension_name=$(this).attr("name");
                //  alert(indicator_name);
                $("<p class='indicatorName' id='"+dimension_name+"'><div class='triangle-indicators'></div><a href='#'>"
                		+ dimension_id + "</a></p>").appendTo("#guideTree_left").on("click", function () {
                    $("#guideTree_right").empty();
                    $("<p class='indicatorAbout_header'>" + dimension_id + "</p><hr /><p class='indicatorAbout'>"
                    		+ dimension_about + "</p>").appendTo("#guideTree_right");
                });
            });
        }
        */
    }
);

