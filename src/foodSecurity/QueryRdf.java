/**2015 2015年1月20日 上午9:19:48
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

import arq.query;

import com.hp.hpl.jena.query.Query;
import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QueryFactory;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.rdf.model.Model;
import com.hp.hpl.jena.rdf.model.ModelFactory;

public class QueryRdf {
	private String indicatorName;
	private String countryName;
	private String timeString;
	private InputStream inputstream;
	private String filePath;
	private String queryString;
	private Model model;
	private ArrayList<String> myArrayList = new ArrayList<String>();
	private ArrayList<String> reArrayList = new ArrayList<String>();

	public String myQueryString(String indicator, String country,
			String timespan) {
		queryString = "select ?indicator ?value where {"
				+ "?time1 <http://lod.isi.edu/ontologies/indicator.owl/has_time> '"+timespan+"' ."
				+ "?indicatorData <http://lod.isi.edu/ontologies/indicator.owl/has_value> ?value ."
				+ "?indicatorData <http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span> ?time1 ."
				+ "?place1 <http://www.cidoc-crm.org/cidoc-crm/P3_has_note> '"+country+"'."
				+ "?place1 <http://lod.isi.edu/ontologies/indicator.owl/has_indicator> ?indicator_uri ."
				+ "?indicator_uri <http://lod.isi.edu/ontologies/indicator.owl/has_indicator_data> ?indicatorData ."
				+ "?indicator_uri <http://www.w3.org/2000/01/rdf-schema#label> '"+indicator+"' ."
				+ "}";
		return queryString;
	}
public Model myModel(String filepathString) {
	model=ModelFactory.createDefaultModel();
	model.read(filepathString);
	return model;
}
	public ArrayList<String> querysingle(String queryString,Model model) {
		Query query = QueryFactory.create(queryString);
		QueryExecution qe = QueryExecutionFactory.create(query, model);
		try {
			ResultSet rs = qe.execSelect(); // define the resultset of the query
			if (rs.hasNext()) // Is empty?
			{
				QuerySolution qs1 = rs.next(); // get the next resultset
				myArrayList.add(qs1.get("value").toString());
			} else {
				// myArrayList.add("0");
			}
		} catch (Exception ex) {
			// out.println(ex.toString());
			System.out.println(ex.toString());
		} finally {
			qe.close();
		}
		return myArrayList;
	}

	public String getIndicatorName() {
		return indicatorName;
	}

	public void setIndicatorName(String indicatorName) {
		this.indicatorName = indicatorName;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getTimeString() {
		return timeString;
	}

	public void setTimeString(String timeString) {
		this.timeString = timeString;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public String getQueryString() {
		return queryString;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	public InputStream getInputstream() {
		return inputstream;
	}

	public ArrayList<String> getMyArrayList() {
		return myArrayList;
	}

	public ArrayList<String> getReArrayList() {
		return reArrayList;
	}
}
