package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.Basepage;
import page.Loginpage;

public class TechfiosStepDefiniton extends Basepage {
	WebDriver driver;
	Loginpage loginpage;

	@Before
	public void beforerun() {
		driver = initdriver();
		
		loginpage = PageFactory.initElements(driver, Loginpage.class);
	}

	@Given("^User is login on techfiospage$")
	public void user_is_login_on_techfiospage() {
		driver.get("https://techfios.com/billing/?ng=admin/");

	}

	@When("^User enters username value as \"([^\"]*)\"$")
	public void user_enters_username_value_as(String username) {
		loginpage.enterusername(username);
	}

	@When("^User enters password value as \"([^\"]*)\"$")
	public void user_enters_password_value_as(String password) throws Throwable {
		loginpage.enterpassword(password);
	}

	@And("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginpage.clicksigninbutton();
	}

	@Then("^User should landin on dashboard page$")
	public void user_should_landin_on_dashboard_page() throws Throwable {

	}

	@When("^User enters username value as\"([^\"]*)\"$")
	public void user_enters_username_value_as1(String username) throws Throwable {
	    
	}


@Then("^User should notland on dashboardpage$")
public void user_should_notland_on_dashboardpage() throws Throwable {
	
}
@After
public void afterrun() {
	Basepage.teardown();
}



	

}
