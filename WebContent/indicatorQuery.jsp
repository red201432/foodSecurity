<%@page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>查询对比</title>
<link href="css/foodSecurity.css" rel="stylesheet" type="text/css" />
<link href="css/jquery-test1.css" rel="stylesheet" type="text/css" />
<link href="css/tupianlunhuan.css" rel="stylesheet" type="text/css" />
<link href="css/jquery.multiselect.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/prettify.css" />
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/highcharts.js"></script>
<script type="text/javascript" src="js/multiquery.js"></script>
<script type="text/javascript" src="js/ui/jquery.ui.core.js"></script>
<script type="text/javascript" src="js/ui/jquery.ui.widget.js"></script>
<script type="text/javascript" src="js/assets/prettify.js"></script>
<script type="text/javascript" src="js/multiselectSrc/jquery.multiselect.js"></script>
<script type="text/javascript" src="js/indicatorNameTransform.js"></script>
<script type="text/javascript" src="js/indicatorquery-single.js"></script>
</head>
<body>
	<div id="container">
		<!--整体容器-->
		
			<jsp:include page="headerdirect.html"></jsp:include>
		
		<div id="content">
			<form id="form1" action="">
				选择指标：<select id="select_indicators" name="indicatorName">
				</select>
				地区：<select id="world"></select> 
				国家：<select id="country-list" name="countryName">
				</select> 开始时间:<select name="timespanstart" onchange="changeStateOfTimeend()">
					<option value="1990">1990</option>
					<option value="1991">1991</option>
					<option value="1992">1992</option>
					<option value="1993">1993</option>
					<option value="1994">1994</option>
					<option value="1995">1995</option>
					<option value="1996">1996</option>
					<option value="1997">1997</option>
					<option value="1998">1998</option>
					<option value="1999">1999</option>
					<option value="2000">2000</option>
					<option value="2001">2001</option>
					<option value="2002">2002</option>
					<option value="2003">2003</option>
					<option value="2004">2004</option>
					<option value="2005">2005</option>
					<option value="2006">2006</option>
					<option value="2007">2007</option>
					<option value="2008">2008</option>
					<option value="2009">2009</option>
					<option value="2010">2010</option>
					<option value="2011">2011</option>
				</select> 结束时间:<select name="timespanend">
					<option value="1995">1995</option>
					<option value="1996">1996</option>
					<option value="1997">1997</option>
					<option value="1998">1998</option>
					<option value="1999">1999</option>
					<option value="2000">2000</option>
					<option value="2001">2001</option>
					<option value="2002">2002</option>
					<option value="2003">2003</option>
					<option value="2004">2004</option>
					<option value="2005">2005</option>
					<option value="2006">2006</option>
					<option value="2007">2007</option>
					<option value="2008">2008</option>
					<option value="2009">2009</option>
					<option value="2010">2010</option>
					<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
				</select> <br />
				<button type="button" onclick="senddata()">查询</button>
			</form>
			<div id="timespan1"></div>
			<div id="show_data" style="width: 1000px; height: 400px;">
				<div id="loading"></div>
			</div>
		</div>
		<!-- 内容部分 -->
		<div id="footer">
		<jsp:include page="footer.html"></jsp:include>
		</div>
		</div>
		<div id="gotop">回到顶部</div>
</body>
</html>