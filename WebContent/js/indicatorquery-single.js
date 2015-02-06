/**
 * 
 */
$(function () {
    $("#sela").multiselect({
        noneSelectedText: "==请选择==",
        checkAllText: "全选",
        uncheckAllText: '全不选',
        selectedList: 4
    });
});

function getIndicatorText() {
    return indicatorName1;

}
function showValues() {
    // var valuestr = $("#sela").multiselect("MyValues");
    // / alert(valuestr);
    return countryArray;
}

var xmlHttpObj;
function getXmlHttp() {// select xmlHttpRequest vision
    var xmlHttp = null;
    function catchEvent(eventObj, event, eventHandler) {
        if (eventObj.addEventListener) {
            eventObj.addEventListener(event, eventHandler, false);
        } else if (eventObj.attachEvent) {
            event = "on" + event;
            eventObj.attachEvent(event, eventHandler);
        }
    }
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("MicroXObject.XMLHTTP");
            } catch (e) {
                return xmlHttpl;
            }
        }
    }
    return xmlHttp;
}

// send data
var jscode;
function senddata() {
    var url = "singlequery.action?indicatorName="
			+ getIndicator()
			+ "&timespanstart="
			+ getTimeStart()
			+ "&timespanend=" + getTimeEnd() + "&countryName=" + getCountryName();
    // var url1="relatedQuery.action";
    if (!xmlHttpObj)
        xmlHttpObj = getXmlHttp();
    if (!xmlHttpObj)
        return;
    xmlHttpObj.open("POST", url, true);
    $('#show_data').html('<img src="./images/loading50.gif" />');
    xmlHttpObj.onreadystatechange = gettimespan;
    xmlHttpObj.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
    xmlHttpObj.send();
}
function gettimespan() {
    // var loadingDiv = document.getElementById("loading");
    // loadingDiv.style.display = "";
    if (xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200) {
        // loadingDiv.style.display="none";
        jscode = xmlHttpObj.responseText.trim();
         document.getElementById('timespan1').innerHTML =
         xmlHttpObj.responseText;
        var jsonobj = eval("(" + jscode + ")");
        indicatorNameTransform(jsonobj);
        var timeArray = new Array();
        for (var i = parseInt(getTimeStart()) ; i <= getTimeEnd() - 2; i++) {
            var num = i + 2;
            timeArray.push(i + "-" + num);
        }
        $(function () {
            $('#show_data').highcharts({ // 图表展示容器，与div的id保持一致
                chart: {
                    type: 'line' // 指定图表的类型，默认是折线图（line）
                },
                title: {
                    text: getCountryName1().length > 1 ? getCountryName1() : getIndicatorText()
                    // 指定图表标题
                },
                xAxis: {
                    categories: timeArray, // 显示x轴的标注
                    labels: { // 标注的格式
                        rotation: timeArray.length < 6 ? 0 : 60,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },

                yAxis: {
                    plotLines: [{ // 一条延伸到整个绘图区的线，标志着轴中一个特定值,比如参考值
                        color: '#000',
                        dashStyle: 'Dash', // Dash,Dot,Solid,默认Solid
                        width: 1.5,
                        value: [35, 23, 124, 34, 23], // x轴显示位置，一个标记为1
                        visible: true,
                        label: {
                            text: "developed Area"
                        }
                    }],
                    title: {
                        text: 'Percentage' // 指定y轴的标题
                    },
                    lineWidth: 1
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 1
                },
                series: jsonobj
            });
        });

    } else if (xmlHttpObj.readyState == 4 && xmlHttpObj.status != 200) {
        document.getElementById('timespan1').innerHTML = xmlHttpObj.responseText;
    }
}

function getIndicator() {
    //alert(indicatorName);
    return indicatorName;
}

function getCountryName() {
    //alert(countryArray);
    return countryArray;
}

function getTimeStart() {
    var inp = document.getElementById("form1").timespanstart.options;
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].selected)
            return inp[i].value;
    }
}

function getTimeEnd() {
    var inp = document.getElementById("form1").timespanend.options;
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].selected) {
            // alert(inp[i].value);
            return inp[i].value;
        }
    }
}

function changeStateOfTimeend() {
    var getTimeStart1 = document.getElementById("form1").timespanstart.options;
    var getTimeEnd1 = document.getElementById("form1").timespanend.options;
    for (var i = 0; i < getTimeStart1.length; i++) {
        if (getTimeStart1[i].selected) {
            // alert(getTimeStart1[i].value);
            for (j = 0; j < i; j++) {
                getTimeEnd1[j].setAttribute("disabled", "disabled");
                // getTimeEnd[j].Attr("disabled","disabled");
            }
        }
    }
}