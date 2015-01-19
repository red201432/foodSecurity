//获取indicators.xml数据 ， 生成导航树
$(document).ready(
    function () {
        $.ajax({
            url: 'xml/indicators.xml',
            type: 'GET',
            dataType: 'xml',
            timeout: 1000,  //设定超时
            cache: false,   //禁用缓存
            error: function (xml1) {
                alert("加载XML文档出错!");
            },
            success: GetIndicators   //设置成功后回调函数
        });
        function GetIndicators(xml1) {
            $(xml1).find("indicator").each(function (i) {
                var indicator_name = $(this).text();
                var indicator_about = $(this).attr("about");
                //  alert(indicator_name);
                $("<p class='indicatorName'><div class='triangle-indicators'></div><a href='#'>" + indicator_name + "</a></p>").appendTo("#guideTree_left").on("click", function () {
                    $("#guideTree_right").empty();
                    $("<p class='indicatorAbout_header'>" + indicator_name + "</p><hr /><p class='indicatorAbout'>" + indicator_about + "</p>").appendTo("#guideTree_right");
                });
            });
        }
    }
);

