/**2015 2015年1月20日 上午9:08:44
 * This is about <code>ClassName</code>.
 * {@link com.yourCompany.aPackage.Interface}
 * @author Andy
 * @deprecated use <code>OtherClass</code>
 */
package foodSecurity;

public class Indicator {
	String timespanString=null;
	 String indicatorName=null;
	 String countryName=null;
	
	public String getTimespanString(){
		return timespanString;
	}
	public void setTimespanString( String ftime) {
		timespanString=ftime;
	}
	public void setIndicatorName(String indicatorname){
		indicatorName=indicatorname;
	}
	public String getIndicatorName() {
		return indicatorName;
	}
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
}
