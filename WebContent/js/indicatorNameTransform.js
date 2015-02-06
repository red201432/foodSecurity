function indicatorNameTransform(jsonobj) {
	var indicator_json = [
			{
				"name" : "Average Dietary Energy Supply Adequacy",
				"chName" : "平均膳食能量供应充足度"
			},
			{
				"name" : "Average Value of Food Production",
				"chName" : "食品生产的平均值"
			},
			{
				"name" : "Share of Dietary Energy Supply Derived from Cereals, Roots and Tubers",
				"chName" : "来自谷物、根和块茎膳食能量供应"
			},
			{
				"name" : "Average Protein Supply",
				"chName" : "平均蛋白质供应"
			},
			{
				"name" : "Average supply of protein of animal origin",
				"chName" : "动物蛋白质平均供应"
			},
			{
				"name" : "Percent of Paved Roads over Total Roads",
				"chName" : "铺面道路在道路总量中所占比例"
			},
			{
				"name" : "Road Density",
				"chName" : "公路密度"
			},
			{
				"name" : "Rail lines Density",
				"chName" : "铁路密度"
			},
			{
				"name" : "Domestic Food Price Level Index",
				"chName" : "国内的食品价格指数"
			},
			{
				"name" : "Percent of Arable Land Equipped for Irrigation",
				"chName" : "带有灌溉设施的耕地所占比例"
			},
			{
				"name" : "Value of Food Imports in Total Merchandise Exports",
				"chName" : "粮食进口值与商品总出口值之间的比值"
			},
			{
				"name" : "Cereal Import Dependency Ratio",
				"chName" : "谷物进口依赖率"
			},
			{
				"name" : "Index of Political Stability and Absence of Violence",
				"chName" : "政治稳定和无暴力冲突指数"
			},
			{
				"name" : "Per Capita Food Production Variability",
				"chName" : "人均粮食产量波动性"
			},
			{
				"name" : "Per Capita Food Supply Variability",
				"chName" : "人均粮食供应量波动性"
			},
			{
				"name" : "Domestic Food Price Volatility Index",
				"chName" : "国内粮食价格波动性"
			},
			{
				"name" : "Access to improved water sources",
				"chName" : "获得良好的饮用水源的人口比例"
			},
			{
				"name" : "Percentage of Population with Access to Sanitation Facilities",
				"chName" : "享有卫生设施的人口比例"
			},
			{
				"name" : "Prevalence of undernourishment",
				"chName" : "营养不良发生率"
			},
			{
				"name" : "Share of food expenditure of the poor",
				"chName" : "贫困人口粮食支出所占比例"
			},
			{
				"name" : "Depth of the food deficit",
				"chName" : "粮食短缺程度"
			},
			{
				"name" : "Prevalence of food inadequacy",
				"chName" : "粮食不足发生率"
			},
			{
				"name" : "Percentage of children under 5 years of age affected by wasting",
				"chName" : "5岁以下儿童消瘦比例"
			},
			{
				"name" : "Percentage of children under 5 years of age who are stunted",
				"chName" : "5岁以下儿童发育迟缓比例"
			},
			{
				"name" : "Percentage of children under 5 years of age who are underweight",
				"chName" : "5岁以下儿童低体重比例"
			},
			{
				"name" : "Percentage of adults who are underweight",
				"chName" : "成人低体重比例"
			},
			{
				"name" : "Prevalence of anaemia among pregnant women",
				"chName" : "孕妇贫血比例"
			},
			{
				"name" : "Prevalence of anaemia among children under 5 years of age",
				"chName" : "5岁以下儿童贫血比例"
			} ];
	var country_json = [ {
		"name" : "developed regions",
		"chName" : "发达地区"
	}, {
		"name" : "developing regions",
		"chName" : "发展中区域"
	}, {
		"name" : "Algeria",
		"chName" : "阿尔及利亚"
	}, {
		"name" : "Egypt",
		"chName" : "埃及"
	}, {
		"name" : "Libya",
		"chName" : "利比亚"
	}, {
		"name" : "Morocco",
		"chName" : "摩洛哥"
	}, {
		"name" : "Tunisia",
		"chName" : "突尼斯"
	}, {
		"name" : "Angola",
		"chName" : "安哥拉"
	}, {
		"name" : "Benin",
		"chName" : "贝宁"
	}, {
		"name" : "Botswana",
		"chName" : "博茨瓦纳"
	}, {
		"name" : "Burkina Faso",
		"chName" : "布基纳法索"
	}, {
		"name" : "Burundi",
		"chName" : "布隆迪"
	}, {
		"name" : "Cameroon",
		"chName" : "喀麦隆"
	}, {
		"name" : "Cape Verde",
		"chName" : "佛得角"
	}, {
		"name" : "Central African Republic",
		"chName" : "中非共和国"
	}, {
		"name" : "Chad",
		"chName" : "乍得"
	}, {
		"name" : "Comoros",
		"chName" : "科摩罗"
	}, {
		"name" : "Congo",
		"chName" : "刚果"
	}, {
		"name" : "Coate d'Ivoire",
		"chName" : "科特迪瓦"
	}, {
		"name" : "Djibouti",
		"chName" : "吉布提"
	}, {
		"name" : "Gabon",
		"chName" : "加蓬"
	}, {
		"name" : "Gambia",
		"chName" : "冈比亚"
	}, {
		"name" : "Ghana",
		"chName" : "加纳"
	}, {
		"name" : "Guinea",
		"chName" : "几内亚"
	}, {
		"name" : "Kenya",
		"chName" : "肯尼亚"
	}, {
		"name" : "Lesotho",
		"chName" : "莱索托"
	}, {
		"name" : "Liberia",
		"chName" : "利比里亚"
	}, {
		"name" : "Madagascar",
		"chName" : "马达加斯加"
	}, {
		"name" : "Malawi",
		"chName" : "马拉维"
	}, {
		"name" : "Mali",
		"chName" : "马里"
	}, {
		"name" : "Mauritania",
		"chName" : "毛里塔尼亚"
	}, {
		"name" : "Mauritius",
		"chName" : "毛里求斯"
	}, {
		"name" : "Mozambique",
		"chName" : "莫桑比克"
	}, {
		"name" : "Namibia",
		"chName" : "纳米比亚"
	}, {
		"name" : "Niger",
		"chName" : "尼日尔"
	}, {
		"name" : "Nigeria",
		"chName" : "尼日利亚"
	}, {
		"name" : "Rwanda",
		"chName" : "卢旺达"
	}, {
		"name" : "Sao Tome and Principe",
		"chName" : "圣多美和普林西比"
	}, {
		"name" : "Senegal",
		"chName" : "塞内加尔"
	}, {
		"name" : "Seychelles",
		"chName" : "塞舌尔"
	}, {
		"name" : "Sierra Leone",
		"chName" : "塞拉利昂"
	}, {
		"name" : "South Africa",
		"chName" : "南非"
	}, {
		"name" : "Sudan (former)",
		"chName" : "前苏丹"
	}, {
		"name" : "Swaziland",
		"chName" : "斯威士兰"
	}, {
		"name" : "Togo",
		"chName" : "多哥"
	}, {
		"name" : "Uganda",
		"chName" : "乌干达"
	}, {
		"name" : "United Republic of Tanzania",
		"chName" : "坦桑尼亚联合共和国"
	}, {
		"name" : "Zambia",
		"chName" : "赞比亚"
	}, {
		"name" : "Zimbabwe",
		"chName" : "津巴布韦"
	}, {
		"name" : "Armenia",
		"chName" : "亚美尼亚"
	}, {
		"name" : "Azerbaijan",
		"chName" : "阿塞拜疆"
	}, {
		"name" : "Kazakhstan",
		"chName" : "哈萨克斯坦"
	}, {
		"name" : "Kyrgyzstan",
		"chName" : "吉尔吉斯斯坦"
	}, {
		"name" : "Tajikistan",
		"chName" : "塔吉克斯坦"
	}, {
		"name" : "Turkmenistan",
		"chName" : "土库曼斯坦"
	}, {
		"name" : "Uzbekistan",
		"chName" : "乌兹别克斯坦"
	}, {
		"name" : "China",
		"chName" : "中国"
	}, {
		"name" : "Democratic People's ",
		"chName" : "朝鲜民主主义人民共和国"
	}, {
		"name" : "Republic of Korea",
		"chName" : "韩国"
	}, {
		"name" : "Mongolia",
		"chName" : "蒙古"
	}, {
		"name" : "Bangladesh",
		"chName" : "孟加拉国"
	}, {
		"name" : "India",
		"chName" : "印度"
	}, {
		"name" : "Iran (Islamic Republic of)",
		"chName" : "伊朗（伊斯兰共和国）"
	}, {
		"name" : "Maldives",
		"chName" : "马尔代夫"
	}, {
		"name" : "Nepal",
		"chName" : "尼泊尔"
	}, {
		"name" : "Pakistan",
		"chName" : "巴基斯坦"
	}, {
		"name" : "Sri Lanka",
		"chName" : "斯里兰卡"
	}, {
		"name" : "Brunei Darussalam",
		"chName" : "文莱达鲁萨兰国"
	}, {
		"name" : "Cambodia",
		"chName" : "柬埔寨"
	}, {
		"name" : "Indonesia",
		"chName" : "印度尼西亚"
	}, {
		"name" : "Lao People's Democratic Republic",
		"chName" : "老挝人民民主共和国"
	}, {
		"name" : "Malaysia",
		"chName" : "马来西亚"
	}, {
		"name" : "Philippines",
		"chName" : "菲律宾"
	}, {
		"name" : "Thailand",
		"chName" : "泰国"
	}, {
		"name" : "Timor Leste",
		"chName" : "东帝汶"
	}, {
		"name" : "Viet Nam",
		"chName" : "越南"
	}, {
		"name" : "Iraq",
		"chName" : "伊拉克"
	}, {
		"name" : "Jordan",
		"chName" : "约旦"
	}, {
		"name" : "Kuwait",
		"chName" : "科威特"
	}, {
		"name" : "Lebanon",
		"chName" : "黎巴嫩"
	}, {
		"name" : "Occupied Palestinian Territories",
		"chName" : "巴勒斯坦被占领土"
	}, {
		"name" : "Saudi Arabia",
		"chName" : "巴勒斯坦被占领土沙特阿拉伯"
	}, {
		"name" : "Syrian Arab Republic",
		"chName" : "阿拉伯叙利亚共和国"
	}, {
		"name" : "Turkey",
		"chName" : "土耳其"
	}, {
		"name" : "United Arab Emirates",
		"chName" : "阿拉伯联合酋长国"
	}, {
		"name" : "Yemen",
		"chName" : "也门"
	}, {
		"name" : "Antigua and Barbuda",
		"chName" : "安提瓜和巴布达"
	}, {
		"name" : "Bahamas",
		"chName" : "巴哈马"
	}, {
		"name" : "Barbados",
		"chName" : "巴巴多斯"
	}, {
		"name" : "Cuba",
		"chName" : "古巴"
	}, {
		"name" : "Dominica",
		"chName" : "多米尼加"
	}, {
		"name" : "Dominican Republic",
		"chName" : "多明尼加共和国"
	}, {
		"name" : "Grenada",
		"chName" : "格林纳达"
	}, {
		"name" : "Haiti",
		"chName" : "海地"
	}, {
		"name" : "Jamaica",
		"chName" : "牙买加"
	}, {
		"name" : "Netherlands Antilles",
		"chName" : "荷属安的列斯"
	}, {
		"name" : "Saint Kitts and Nevis",
		"chName" : "圣基茨和尼维斯"
	}, {
		"name" : "Saint Lucia",
		"chName" : "圣卢西亚"
	}, {
		"name" : "Saint Vincent and the Grenadines",
		"chName" : "圣文森特和格林纳丁斯"
	}, {
		"name" : "Trinidad and Tobago",
		"chName" : "特立尼达和多巴哥"
	}, {
		"name" : "Argentina",
		"chName" : "阿根廷"
	}, {
		"name" : "Belize",
		"chName" : "伯利兹"
	}, {
		"name" : "Brazil",
		"chName" : "巴西"
	}, {
		"name" : "Chile",
		"chName" : "智利"
	}, {
		"name" : "Colombia",
		"chName" : "哥伦比亚"
	}, {
		"name" : "Costa Rica",
		"chName" : "哥斯达黎加"
	}, {
		"name" : "Ecuador",
		"chName" : "厄瓜多尔"
	}, {
		"name" : "El Salvador",
		"chName" : "萨尔瓦多"
	}, {
		"name" : "Guatemala",
		"chName" : "危地马拉"
	}, {
		"name" : "Guyana",
		"chName" : "圭亚那"
	}, {
		"name" : "Honduras",
		"chName" : "洪都拉斯"
	}, {
		"name" : "Mexico",
		"chName" : "墨西哥"
	}, {
		"name" : "Nicaragua",
		"chName" : "尼加拉瓜"
	}, {
		"name" : "Panama",
		"chName" : "巴拿马"
	}, {
		"name" : "Paraguay",
		"chName" : "巴拉圭"
	}, {
		"name" : "Peru",
		"chName" : "秘鲁"
	}, {
		"name" : "Suriname",
		"chName" : "苏里南"
	}, {
		"name" : "Uruguay",
		"chName" : "乌拉圭"
	}, {
		"name" : "Venezuela (Bolivarian Republic of)",
		"chName" : "委内瑞拉"
	}, {
		"name" : "Fiji",
		"chName" : "斐济"
	}, {
		"name" : "French Polynesia",
		"chName" : "法属波利尼西亚"
	}, {
		"name" : "Kiribati",
		"chName" : "基里巴斯"
	}, {
		"name" : "New Caledonia",
		"chName" : "新喀里多尼亚"
	}, {
		"name" : "Samoa",
		"chName" : "萨摩亚"
	}, {
		"name" : "Solomon Islands",
		"chName" : "所罗门群岛"
	}, {
		"name" : "Vanuatu",
		"chName" : "瓦努阿图"
	}, {
		"name" : "Albania",
		"chName" : "阿尔巴尼亚"
	}, {
		"name" : "Australia",
		"chName" : "澳大利亚"
	}, {
		"name" : "Austria",
		"chName" : "奥地利"
	}, {
		"name" : "Belarus",
		"chName" : "白俄罗斯"
	}, {
		"name" : "Belgium",
		"chName" : "比利时"
	}, {
		"name" : "Bosnia and Herzegovina",
		"chName" : "波斯尼亚和黑塞哥维那"
	}, {
		"name" : "Bulgaria",
		"chName" : "保加利亚"
	}, {
		"name" : "Canada",
		"chName" : "加拿大"
	}, {
		"name" : "Croatia",
		"chName" : "克罗地亚"
	}, {
		"name" : "Cyprus",
		"chName" : "塞浦路斯"
	}, {
		"name" : "Czech Republic",
		"chName" : "捷克共和国"
	}, {
		"name" : "Denmark",
		"chName" : "丹麦"
	}, {
		"name" : "Estonia",
		"chName" : "爱沙尼亚"
	}, {
		"name" : "Finland",
		"chName" : "芬兰"
	}, {
		"name" : "France",
		"chName" : "法国"
	}, {
		"name" : "Germany",
		"chName" : "德国"
	}, {
		"name" : "Greece",
		"chName" : "希腊"
	}, {
		"name" : "Hungary",
		"chName" : "匈牙利"
	}, {
		"name" : "Iceland",
		"chName" : "冰岛"
	}, {
		"name" : "Ireland",
		"chName" : "爱尔兰"
	}, {
		"name" : "Israel",
		"chName" : "以色列"
	}, {
		"name" : "Italy",
		"chName" : "意大利"
	}, {
		"name" : "Japan",
		"chName" : "日本"
	}, {
		"name" : "Latvia",
		"chName" : "拉脱维亚"
	}, {
		"name" : "Lithuania",
		"chName" : "立陶宛"
	}, {
		"name" : "Luxembourg",
		"chName" : "卢森堡"
	}, {
		"name" : "Malta",
		"chName" : "马耳他"
	}, {
		"name" : "Netherlands",
		"chName" : "荷兰"
	}, {
		"name" : "New Zealand",
		"chName" : "新西兰"
	}, {
		"name" : "Norway",
		"chName" : "挪威"
	}, {
		"name" : "Poland",
		"chName" : "波兰"
	}, {
		"name" : "Portugal",
		"chName" : "葡萄牙"
	}, {
		"name" : "Republic of Moldova",
		"chName" : "摩尔多瓦共和国"
	}, {
		"name" : "Romania",
		"chName" : "罗马尼亚"
	}, {
		"name" : "Russian Federation",
		"chName" : "俄罗斯联邦"
	}, {
		"name" : "Slovakia",
		"chName" : "俄罗斯联邦"
	}, {
		"name" : "Slovakia",
		"chName" : "斯洛伐克"
	}, {
		"name" : "Slovenia",
		"chName" : "斯洛文尼亚"
	}, {
		"name" : "Spain",
		"chName" : "西班牙"
	}, {
		"name" : "Sweden",
		"chName" : "瑞典"
	}, {
		"name" : "Switzerland",
		"chName" : "瑞士"
	}, {
		"name" : "The former Yugoslav Republic of Macedonia",
		"chName" : "马其顿前南斯拉夫马其顿共和国"
	}, {
		"name" : "Ukraine",
		"chName" : "乌克兰"
	}, {
		"name" : "United Kingdom",
		"chName" : "英国"
	}, {
		"name" : "United States of America",
		"chName" : "美国"
	}, ];
	for (var i = 0; i < jsonobj.length; i++) {
		for (var j = 0; j < indicator_json.length; j++) {
			if (jsonobj[i].name == indicator_json[j].name.toLocaleLowerCase()) {
				jsonobj[i].name = indicator_json[j].chName;
				// alert(jsonobj[i].name);
			}
		}
	}
	for (var i = 0; i < jsonobj.length; i++) {
		for (var j = 0; j < country_json.length; j++) {
			if (jsonobj[i].name == country_json[j].name.toLocaleLowerCase()) {
				jsonobj[i].name = country_json[j].chName;
				// alert(jsonobj[i].name);
			}
		}
	}

}