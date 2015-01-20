/**
 * 
 */
$(function() {
	$("#sela").multiselect({
		noneSelectedText : "==请选择==",
		checkAllText : "全选",
		uncheckAllText : '全不选',
		selectedList : 4
	});
});
var countryArray = new String();
$(document)//获取相关指标
		.ready(
				function() {
					$.ajax({
						url : './xml/indicator-relations.xml',
						type : 'GET',
						dataType : 'xml',
						timeout : 1000, // 设定超时
						cache : false, // 禁用缓存
						error : function(xml1) {
							alert("加载XML文档出错!");
						},
						success : GetStudentComplete
					// 设置成功后回调函数
					});

					// 获取XML成功后回调函数
					function GetStudentComplete(xml1) {
						$(xml1).find("indicator").each(
								function(i) { // 查找所有place节点并遍历
									// var id = $(this).children("id"); //获得子节点
									var id_vaule = $(this).attr("name"); // 获取节点文本
									var email_vaule = $(this).attr("id"); // 获取节点的属性
									$("#indicatorName").append(
											"<option value='" + email_vaule
													+ "'>" + id_vaule
													+ "</option>");
								});

						$("#indicatorName")
								.on(
										"change",
										function() {
											/*
											 * alert($( "#indicatorName
											 * option:selected")
											 * .text().toLocaleLowerCase());
											 * countryArray += ($(
											 * "#indicatorName option:selected")
											 * .val().toLocaleLowerCase() +
											 * "@");
											 */
											$(xml1)
													.find(
															"indicator[name='"
																	+ $(
																			"#indicatorName option:selected")
																			.text()
																	+ "']>related-indicators")
													.each(
															function(i) {// 选择点击的节点下面的子节点
																var country_name = $(
																		this)
																		.attr(
																				"name");
																var country_id = $(
																		this)
																		.attr(
																				"id")
																		.toLocaleLowerCase();
																countryArray += (country_id + "@");// 由于指标名称里面有
																// ","
																// 只好用
																// "@"做分隔符
																// $("#country-multi-list").append("<input
																// type='checkbox'
																// name='" +
																// country_name
																// + "' value='"
																// +
																// country_name
																// + "' /> " +
																// country_text
																// + "<br />");
															});
											// countryArray=countryArray.substring(0,
											// countryArray.length-2);
											// alert(countryArray);
										});
					}
				});

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
	var url = "relatedQuery.action?indicatorName="
			+ showValues()
			+ "&timespanstart="
			+ getTimeStart()
			+ "&timespanend=" + getTimeEnd();
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
		// document.getElementById('timespan1').innerHTML =
		// xmlHttpObj.responseText;
		var jsonobj = eval("(" + jscode + ")");
		indicatorNameTransform(jsonobj);
		var timeArray = new Array();
		for (var i = parseInt(getTimeStart()); i <= getTimeEnd() - 2; i++) {
			var num = i + 2;
			timeArray.push(i + "-" + num);
		}
		$(function() {
			$('#show_data').highcharts({ // 图表展示容器，与div的id保持一致
				chart : {
					type : 'line' // 指定图表的类型，默认是折线图（line）
				},
				title : {
					text : getCountryName()
				// 指定图表标题
				},
				xAxis : {

					categories : timeArray, // 显示x轴的标注
					labels : { // 标注的格式
						rotation : timeArray.length < 6 ? 0 : 60,
						style : {
							fontSize : '13px',
							fontFamily : 'Verdana, sans-serif'
						}
					}
				},

				yAxis : {
					plotLines : [ { // 一条延伸到整个绘图区的线，标志着轴中一个特定值,比如参考值
						color : '#000',
						dashStyle : 'Dash', // Dash,Dot,Solid,默认Solid
						width : 1.5,
						value : [ 35, 23, 124, 34, 23 ], // x轴显示位置，一个标记为1
						visible : true,
						label : {
							text : "developed Area"
						}
					} ],
					title : {
						text : 'Percentage' // 指定y轴的标题
					},
					lineWidth : 1
				},
				legend : {
					layout : 'vertical',
					align : 'right',
					verticalAlign : 'middle',
					borderWidth : 1
				},
				series : jsonobj
			});
		});

	} else if (xmlHttpObj.readyState == 4 && xmlHttpObj.status != 200) {
		document.getElementById('timespan1').innerHTML = xmlHttpObj.responseText;
	}
}

function getIndicator() {
	var inp = document.getElementById("form1").indicatorName.options;
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].selected)
			return inp[i].value;
	}
}
function getCountryName() {
	var inp = document.getElementById("form1").countryName.options;
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].selected)
			return inp[i].text;
	}
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