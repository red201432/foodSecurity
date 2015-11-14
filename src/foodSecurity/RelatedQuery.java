/**2015 2015年1月18日 下午8:33:34
 * This is about <code>ClassName</code>.
 * {@link com.yourCompany.aPackage.Interface}
 * @author Andy
 * @deprecated use <code>OtherClass</code>
 */
package foodSecurity;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import foodSecurity.RelatedQuery1;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import com.opensymphony.xwork2.ActionSupport;

public class RelatedQuery extends ActionSupport {
	private static final long serialVersionUID = 1L;
	HttpServletRequest request = null;
	private String indicatorName;
	private String timespanStart;
	private String timespanEnd;
	private Query query;
	private InputStream result;
	
	private ArrayList<String> reArrayList=new ArrayList<String>();
	RelatedQuery1 rq=new RelatedQuery1();
	public InputStream queryList() throws Exception {
		request = ServletActionContext.getRequest();
		indicatorName=request.getParameter("indicatorName");
		timespanEnd=request.getParameter("timespanend");
		timespanStart=request.getParameter("timespanstart");
		if (indicatorName != null&& indicatorName!="" && timespanEnd != null && timespanEnd != ""
				&& timespanStart != null && timespanStart != "") {
			String[] indicatorStrings = indicatorName.split("@"); //将字符串转化为字符串数组
			for (int j = 0; j < indicatorStrings.length; j++) {//采用循环将符合条件的结果查询出来
				ArrayList<String> myArrayList = new ArrayList<String>();
				for (int i = Integer.parseInt(timespanStart); i <= Integer
						.parseInt(timespanEnd) - 2; i++) {
					String timespanstr = null;
					int num = i + 2;
					timespanstr = i + "-" + num;
					rq.setIndicatorName(indicatorStrings[j].trim());//需要将此处的字符串前后的空格去掉
					rq.setTimespanString(timespanstr);
					//qr1.setCountryName(countryName);
					String filepath1="D:/ijava/SSHtest/WebContent/data/china20150106.ttl";
					Model model=ModelFactory.createDefaultModel();
				     model.read(filepath1);
					String queryString="select ?indicatorName ?value where { "
							//+ "optional {timespan <http://lod.isi.edu/ontologies/indicator.owl/has_time> '"+timespanStart+"' .}"
							//+ "optional {?timespan <http://lod.isi.edu/ontologies/indicator.owl/has_time> '"+rq.timespanString+"' .}"
							+ "?timespan <http://lod.isi.edu/ontologies/indicator.owl/has_time> '"+rq.timespanString+"' ."
							+ "?indicatorData <http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span> ?timespan ."
							+ "?indicatorData <http://lod.isi.edu/ontologies/indicator.owl/has_value> ?value ."
							+ "?indicator <http://www.cidoc-crm.org/cidoc-crm/P102_has_title> ?indicatorName ."
							+ "?indicator <http://lod.isi.edu/ontologies/indicator.owl/has_indicator_data> ?indicatorData ."
							+"filter(?indicatorName='"+rq.indicatorName+"')"
							+ "}";
					query=QueryFactory.create(queryString);
					try {
						QueryExecution qe = QueryExecutionFactory.create(
								query,model);
						try {
							ResultSet rs = qe.execSelect(); //define the resultset of the query
							if (rs.hasNext()) // Is empty?
							{
								QuerySolution qs1 = rs.next(); //get the next resultset
								myArrayList.add(qs1.get("value").toString());								
							} else {
								//myArrayList.add("0");
							}
						} catch (Exception ex) {
							//out.println(ex.toString());
							System.out.println(ex.toString());
						} finally {
							qe.close();
						}
					} catch (Exception ex) {
						System.out.println(ex.toString());
					}
				}
				reArrayList.add("{\"name\""+":\""+indicatorStrings[j]+"\""+","+"\"data\""+":"+myArrayList+"}");
			}
			//out.println(reArrayList);
		}
		result=	new ByteArrayInputStream(reArrayList.toString().getBytes("utf-8"));
		return result;
	}
	
	public String execute() throws Exception {
		queryList(); 
		return SUCCESS;
	}
	
	public ArrayList<String> getReArrayList() {
		return reArrayList;
	}

	public InputStream getResult() {
		return result;
	}
}
