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
	for (var i = 0; i < jsonobj.length; i++) {
		for (var j = 0; j < indicator_json.length; j++) {
			if (jsonobj[i].name == indicator_json[j].name.toLocaleLowerCase()) {
				jsonobj[i].name = indicator_json[j].chName;
				// alert(jsonobj[i].name);
			}
		}
	}
}