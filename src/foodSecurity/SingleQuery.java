/**2015 2015年1月20日 上午9:54:51
 * This is about <code>ClassName</code>.
 * {@link com.yourCompany.aPackage.Interface}
 * @author Andy
 * @deprecated use <code>OtherClass</code>
 */
package foodSecurity;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import arq.qexpr;

import com.hp.hpl.jena.query.Query;
import com.hp.hpl.jena.rdf.model.Model;
import com.opensymphony.xwork2.ActionSupport;

public class SingleQuery extends ActionSupport {
	private String indicatorName;
	private String countryName;
	private String timespanStart;
	private String timespanEnd;
	private String timeString;
	private InputStream inputstream;
	private InputStream singleResult;
	private String filePath;
	private String queryString;
	private Model model;
	private ArrayList<String> myArrayList = new ArrayList<String>();
	private ArrayList<String> reArrayList = new ArrayList<String>();
	HttpServletRequest request = null;
	Indicator indicator=new Indicator();
	QueryRdf queryRdf=new QueryRdf();
	public InputStream queryInputStream() {//查询单个指标的值
		request = ServletActionContext.getRequest();
		indicatorName=request.getParameter("indicatorName").toLowerCase();
		timespanEnd=request.getParameter("timespanend");
		timespanStart=request.getParameter("timespanstart");
		countryName=request.getParameter("countryName").toLowerCase();
		
		for (int i = Integer.parseInt(timespanStart); i <= Integer
				.parseInt(timespanEnd) - 2; i++) {
			int num = i + 2;
			timeString = i + "-" + num;
		filePath="http://localhost:8088/foodSecurity/data/timespan/"+indicatorName.replace(" ", "%20")+".ttl";
		queryString=queryRdf.myQueryString(indicatorName, countryName, timeString);
		model=queryRdf.myModel(filePath);
		myArrayList=queryRdf.querysingle(queryString,model);
		}
		reArrayList.add("{\"name\"" + ":\"" + indicatorName + "\"" + ","
				+ "\"data\"" + ":" + myArrayList + "}");
		try {
			singleResult=new ByteArrayInputStream(reArrayList.toString().getBytes("utf-8"));
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  
		reArrayList.clear();
		return singleResult;
	}
	
	public InputStream querymultiInputStream() {//单个指标和发达国家的对比
		request = ServletActionContext.getRequest();
		indicatorName=request.getParameter("indicatorName").toLowerCase();
		timespanEnd=request.getParameter("timespanend");
		timespanStart=request.getParameter("timespanstart");
		countryName=request.getParameter("countryName").toLowerCase();
		String[] countriesName=countryName.split("@");
		for(int j=0;j<countriesName.length;j++){
		for (int i = Integer.parseInt(timespanStart); i <= Integer
				.parseInt(timespanEnd) - 2; i++) {
			int num = i + 2;
			timeString = i + "-" + num;
		filePath="http://localhost:8088/foodSecurity/data/timespan/"+indicatorName.replace(" ", "%20")+".ttl";
		queryString=queryRdf.myQueryString(indicatorName, countriesName[j], timeString);
		model=queryRdf.myModel(filePath);
		myArrayList=queryRdf.querysingle(queryString,model);
		}
		reArrayList.add("{\"name\"" + ":\"" + countriesName[j] + "\"" + ","
				+ "\"data\"" + ":" + myArrayList + "}");
		myArrayList.clear();//将myArrayList清空 
		}
		try {
			inputstream=new ByteArrayInputStream(reArrayList.toString().getBytes("utf-8"));
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		reArrayList.clear();
		return inputstream;
	}
	
	public String execute() throws Exception {
		queryInputStream();
		querymultiInputStream();
		return SUCCESS;
	}
	public InputStream getInputstream() {
		return inputstream;
	}

	public InputStream getSingleResult() {
		return singleResult;
	}

}
