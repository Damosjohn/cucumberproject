package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Loginpage {
	WebDriver driver;
	public Loginpage(WebDriver driver) {
		this.driver= driver;
	}
	
	@FindBy(how=How.XPATH,using="//*[@id=\"username\"]")WebElement USERNAME_ELEMENT;
	@FindBy(how=How.XPATH,using="//*[@id=\"password\"]")WebElement PASSWORD_ELEMENT;
	@FindBy(how=How.XPATH,using="/html/body/div/div/div/form/div[3]/button")WebElement SIGNIN_ELEMENT;
	
	public void enterusername(String username ) {
		USERNAME_ELEMENT.sendKeys(username);
		try {
			Thread.sleep(300);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	}
	public void enterpassword(String password ) {
		PASSWORD_ELEMENT.sendKeys(password);
	
	}
	public void clicksigninbutton ( ) {
		SIGNIN_ELEMENT.click();
		
	}
public String getpageTitle() {
	return driver.getTitle();
	
}

}
