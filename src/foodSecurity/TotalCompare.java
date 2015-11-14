/**2015 2015年1月24日 下午10:08:11
 * @author Andy
 * @deprecated use <code>OtherClass</code>
 * 计算某个国家的四个维度的指标与发达国家的四个维度的指标的比值 ，此时假设发达国家的数据为发展国家
 * 发展的标准，以此来进行对比，从而发现差距
 * 
 */
package foodSecurity;

import java.io.InputStream;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

//import org.apache.http.HttpRequest;
import org.apache.struts2.ServletActionContext;
import org.apache.jena.query.Query;
import com.opensymphony.xwork2.ActionSupport;

public class TotalCompare extends ActionSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String countryName;
	private String time;
	String[] availability = {
			"Average Dietary Energy Supply Adequacy",
			"Average Value of Food Production",
			"Share of Dietary Energy Supply Derived from Cereals, Roots and Tubers",
			"Average Protein Supply",
			"Average supply of protein of animal origin"
	};
	String[] access={
			"Percent of Paved Roads over Total Roads",
			"Road Density",
			"Rail lines Density",
			"Domestic Food Price Level Index",
			"Prevalence of undernourishment",
			"Share of food expenditure of the poor",
			"Depth of the food deficit",
			"Prevalence of food inadequacy"
			
	};
	String[] stability={
			"Percent of Arable Land Equipped for Irrigation",
			"Value of Food Imports in Total Merchandise Exports",
			"Cereal Import Dependency Ratio",
			"index of political Stability and Absence of Violence",
			"Per Capita Food Production Variability" ,
			"Per Capita Food Supply Variability",
			"Domestic Food Price Volatility Index",			
			
	};
	String[] utilization={
			"Access to improved water sources",
			"Percentage of Population with Access to Sanitation Facilities",
			"Percentage of children under 5 years of age affected by wasting",
			"Percentage of children under 5 years of age who are stunted",
			"percentage of children under 5 years of age who are underweight",
			"Percentage of adults who are underweight",
			
	};
	QueryRdf queryRdf = new QueryRdf();
	private ArrayList<String> indicatorArrayList = new ArrayList<String>();
	private ArrayList<String> dimensionArrayList = new ArrayList<String>();
	HttpServletRequest request = ServletActionContext.getRequest();

	public ArrayList<String> queryindicators() {
		countryName = request.getParameter("countryName");
		time = request.getParameter("timespan");

		return indicatorArrayList;
	}

	public ArrayList<String> getIndicatorArrayList() {
		return indicatorArrayList;
	}

	public ArrayList<String> getDimensionArrayList() {
		return dimensionArrayList;
	}

}
