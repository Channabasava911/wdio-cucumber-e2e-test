
import {Given,When,Then} from "@cucumber/cucumber";
import allure from "@wdio/allure-reporter";
// import allureReporter from "@wdio/allure-reporter";
// import { addAttachment } from "@wdio/allure-reporter";



Given(/^the user is on the login page$/,async()=>{
    browser.url("https://practicetestautomation.com/practice-test-login/");
    browser.maximizeWindow();

});
    When(/^the user enters(.*)and(.*)$/,async(username:string,password:string)=>{
        let uservalue=username.trim();
        let passvalue=password.trim();
        await $("#username").setValue(uservalue);
        await $("#password").setValue(passvalue);
    });
    Then(/^clicks the submit button$/,async()=>{
         await $("#submit").click();
            
         //browser.pause(5000);
        //  let screenshot=await browser.takeScreenshot();
        //     allure.addAttachment("Invalid login screenshot", Buffer.from(screenshot, "base64"), "image/png");
       
    });

    Then(/^the user should see the (.*)$/,async(message:string)=>{

        let messageval=message.trim();

        //wait until either success or error element appears- helpful to take screenshots
        // await browser.waitUntil(async()=>{
        //     let successel=await $("//strong").isExisting();
        //     let errorel=await $("//div[@id='error']").isExisting();
        //     return successel || errorel;
        // },{
        //     timeout:10000,
        //     timeoutMsg:"Expected success or error message to appear within the time limit"
        // });
        

                let expectUrl=await browser.getUrl();
             if(expectUrl==="https://practicetestautomation.com/logged-in-successfully/")
             {
                console.log("User is in correct url");
                let crrctmsg=await $("//strong");
                await crrctmsg.waitForDisplayed({timeout:5000});
                let newcrctmsg=(await crrctmsg.getText()).trim();
            //expect(crrctmsg).toBe(messageval);
               if(newcrctmsg===messageval)
                {
                console.log("Login successful and message is correct");
              
                }
              let logouttext=await $("//a[@href='https://practicetestautomation.com/practice-test-login/']").isDisplayed();
            console.log('Logout button displayed:', logouttext);

            //   let screenshot=await browser.takeScreenshot();
            // allure.addAttachment("Successful login screenshot", Buffer.from(screenshot, "base64"), "image/png");

             }
             else
             {
             let errmsg=await $("//div[@id='error']");
             await errmsg.waitForDisplayed({timeout:8000});
             let newerr= await errmsg.getText();
            console.log(newerr);

            //await browser.pause(5000);

            

             }

    
            

           
    });
   