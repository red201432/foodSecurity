//显示或者隐藏部分文本
$(function () {
    var $link = $(".artList a");
    var $hide = $(".artList :eq(1)");
    $link.click(function () {
        if ($(this).html() == "显示") {
            $(this).html("隐藏");
            $hide.show();
        }
        else {
            $(this).html("显示");
            $hide.hide();
        }
    })
});
$(function () {//回到顶部
    $("#gotop").click(function () {
        $("body,html").animate(scrollTo(0, 0));
    })
    $("#gotop").mousemove(function () {//change color of gotop
        this.style.backgroundColor = "#184785";
    })
    $("#gotop").mouseout(function () {
        this.style.backgroundColor = "gray";
  })
})
$(function () {
    $(".divTitle").mouseover(function () {
        $(this).addClass("divCourrColor").next(".divContent").css("display", "block");
    });
});
$(function () {
    $(".divContent").mouseout(function () {
        $(this).addClass("divCourrColor").next(".divContent").css("display", "none");
    });
});
//var countryName;
$(function(){//获取地区和国家
$.ajax({
    url: 'xml/world.xml',
    type: 'GET',
    dataType: 'xml',
    timeout: 1000,  //设定超时
    cache: false,   //禁用缓存
    error: function (xml) {
        alert("加载XML文档出错!");
    },
    success: GetStudentComplete   //设置成功后回调函数
});

//获取XML成功后回调函数
function GetStudentComplete(xml) {
    $(xml).find("place").each(function (i) {     //查找所有place节点并遍历
        //var id = $(this).children("id");          //获得子节点
        var id_vaule = $(this).attr("id");              //获取节点文本
        var email_vaule = $(this).attr("name");  //获取节点的属性
        $("#world").append("<option value='" + email_vaule + "'>" + id_vaule + "</option>");
    });
    $("#world").on("change", function () {
        alert($("#world option:selected").text());
        var parentNode = $("#world option:selected");
        $("#country-list").empty();
       
        countryArray1=new Array;
        $(xml).find("place[id='" + $("#world option:selected").text() + "']>country").each(function (i) {//选择点击的节点下面的子节点
            var country_text = $(this).text();
            var country_name = $(this).attr("name");
            $("#country-list").append("<option value='" + country_name + "'>" + country_text + "</option>");
            // $("#country-multi-list").append("<input type='checkbox' name='" + country_name + "' value='" + country_name + "' /> " + country_text + "<br />")
        });
        $("#country-list").on("change", function () {
        	countryArray = "developed regions";
        	countryArray1.length=0;
            countryArray+="@"+$("#country-list option:selected").attr("value");
            countryArray1.push($("#country-list option:selected").text());
            alert(countryArray);
        });
    });
    
}
});
//获取 indicators.xml 数据
indicatorName=new Array();
$(document).ready(function () {
    $.ajax({
        url: 'xml/indicators.xml',
        type: 'GET',
        dataType: 'xml',
        timeout: 1000,  //设定超时
        cache: false,   //禁用缓存
        error: function (xml1) {
            alert("加载XML文档出错!");
        },
        success: GetStudentComplete   //设置成功后回调函数
    });

    //获取XML成功后回调函数
    function GetStudentComplete(xml1) {
        $(xml1).find("indicator").each(function (i) {     //查找所有indicator节点并遍历
            //var id = $(this).children("id");          //获得子节点
            var id_vaule = $(this).text();              //获取节点文本
            var email_vaule = $(this).attr("name");  //获取节点的属性
            $("#select_indicators").append("<option value='" + email_vaule + "'>" + id_vaule + "</option>");
        });
        $("#select_indicators").on("change", function () {
           // indicatorName.push($("#select_indicators option:selected").text());
        	indicatorName=$("#select_indicators option:selected").attr('value');
        	indicatorName1=$("#select_indicators option:selected").text();
            alert(indicatorName);
                    });
    }
});
function getCountryName1(){
	return countryArray1;
	
}