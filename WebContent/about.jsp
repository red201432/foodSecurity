<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>关于我们</title>
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="bootstrap-3.3.5/js/bootstrap.js"></script>
<link href="bootstrap-3.3.5/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="bootstrap-3.3.5/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
<link href="css/food.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/highcharts.js"></script>
<script type="text/javascript" src="js/multiquery.js"></script>
<script type="text/javascript" src="js/ui/jquery.ui.core.js"></script>
<script type="text/javascript" src="js/ui/jquery.ui.widget.js"></script>
<script type="text/javascript" src="js/assets/prettify.js"></script>
<script type="text/javascript" src="js/multiselectSrc/jquery.multiselect.js"></script>
<script type="text/javascript" src="js/indicatorNameTransform.js"></script>
<script type="text/javascript" src="js/indicatorquery-single.js"></script>
<script type="text/javascript">
!function(e){e.fn.lbyl=function(n){{
	var t=e.extend({
			content:"",
			speed:10,
			type:"fade",
			fadeSpeed:500,
			finished:function(){}
					},
			n),

		d=e(this),
		s=[],
		i=t.content;
		e(this).length}d.empty(),
		d.attr("data-time",i.length*t.speed);
		for(var p=0;p<i.length;p++)
			s.push(i[p]);
		e.each(s,function(e,n){
			d.append('<span style="display: none;">'+n+"</span>"),
			setTimeout(function(){
				"show"==t.type?d.find("span:eq("+e+")").show():
					"fade"==t.type&&d.find("span:eq("+e+")").fadeIn(t.fadeSpeed)},
				e*t.speed)}
		),
				setTimeout(function(){t.finished()},i.length*t.speed)}
		}(jQuery);
		
	function show(){$(document).ready(function($){
		$("#scrollText").lbyl({
			content:$("#scrollText").text(),
			speed:100,
			type:'fade'			
		});
	})
	}
	setInterval(show,5000);
</script>
</head>
<body class="container-fluid" style="background-color:#ECECEC;">
<div class="col-lg-10 col-md-10 col-xs-12 col-md-offset-1 col-lg-offset-1" style="padding:10px 25px;background-color:white">
<header class="row">
	<div class="col-lg-12 col-md-12 col-xs-12 header" style="background-color:blue;">
		<h1>基于本体的粮食安全信息查询系统</h1>
		<div id="scrollText" class="col-md-offset-9">Base on Semantic Web</div>
	</div>
	 <div class="navbar-header">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
        <span class="sr-only">菜单</span>
       <span>菜单</span>
      </button>
    </div>
	<nav id="bs-navbar" class="collapse navbar-collapse">
		<ul class="col-lg-12 col-md-12 col-xs-12 navbar-nav">
			<li><a href="index.html">首页</a></li>
			<li><a href="indicatorsingleQuery.jsp">数据查询</a></li>
			<li><a href="indicatorQuery.jsp">数据对比</a></li>
			<li><a href="relatedQuery.jsp">相关数据查询</a></li>
			<li><a href="AboutIndicator.html">指标介绍</a></li>
			<li><a href="about.jsp">联系我们</a></li>
		</ul>
	</nav>
</header>
<article class="row">
	<aside class="col-lg-3 col-md-3 col-xs-12">
		<form id="form1" action="" class="form-horizontal">
		<div class="form-group">
			选择指标：<select id="select_indicators" name="indicatorName" class="form-control">
				</select>
		</div>
		<div class="form-group">
				地区：<select id="world" class="form-control"></select> 
		</div>
		<div class="form-group">
				国家：<select id="country-list" name="countryName" class="form-control">
				</select>
		</div>
		<div class="form-group">
				 开始时间:<select name="timespanstart" onchange="changeStateOfTimeend()" class="form-control">
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
				</select>
				</div>
				<div class="form-group">
				结束时间:<select name="timespanend" class="form-control">
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
				</select>
				</div>
				<div class="form-group">
				<button class="btn btn-primary btn-block active" type="button" onclick="senddata()">查询</button>
				</div>
			</form>
	</aside>
	<article class="col-lg-9 col-md-9 col-xs-12">
		<div id="timespan1"></div>
			<div id="show_data" style="height: 400px;">
				<div id="loading"></div>
			</div>	
	</article>
</article>
<footer class="row">
		<div class="col-md-3 col-lg-3 col-sm-6">
				<ul>
					<li><a href="http://www.fao.org/" target="_blank"
						class="internal-link">粮农组织</a></li>
					<li><a href="http://www.who.int/" class="internal-link">世界卫生组织</a></li>
					<li><a href="http://faostat3.fao.org/" class="internal-link">粮食组织统计数据</a></li>
					<li><a href="http://faostat3.fao.org/download/D/FS/E"
						class="internal-link">数据来源</a></li>
				</ul>
			</div>
			<div class="col-md-3 col-lg-3 col-sm-6">
				<ul>
					<li><a href="http://www.fao.org/fishery/zh" target="_top"
						class="external-link-new-window">渔业及水产养殖</a></li>
					<li><a href="http://www.fao.org/forestry/zh/" target="_top"
						class="external-link-new-window">林业</a></li>
					<li><a href="http://www.fao.org/tc/index_zh.asp" target="_top"
						class="external-link-new-window">技术合作</a></li>
				</ul>
				</div>
				<div class="col-md-3 col-lg-3 col-sm-6">
				<ul>
					<li><a href="http://www.fao.org/africa/en/" target="_top"
						class="external-link-new-window">非洲区域办事处</a></li>
					<li><a href="http://www.fao.org/asiapacific/rap/home/en/"
						target="_top" class="external-link-new-window">亚洲及太平洋区域办事处</a></li>
					<li><a href="http://www.fao.org/europe/regional-home/en/"
						target="_top" class="external-link-new-window">欧洲及中亚区域办事处</a></li>
					<li><a href="/americas/zh/" target="_top">拉丁美洲及加勒比区域办事处</a></li>
					<li><a href="http://www.fao.org/neareast/en/" target="_top"
						class="external-link-new-window">近东及北非区域办事处</a></li>
					<li><a href="/about/who-we-are/worldwide-offices/zh/#c207628"
						target="_top">分区域办事处</a></li>
				</ul>
				</div>
				<div class="col-md-3 col-lg-3 col-sm-6">
				<ul>
				<li>xu601716733@126.com
				</li>
				<li><a href="/contact-us/terms/zh/">2014© Data_2014</a>
				</li>
				</ul>
				</div>
</footer>
</div>
</body>
</html>