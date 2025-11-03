import {Given,When,Then} from "@wdio/cucumber-framework";
Given(/^User is on Instagram login page$/,async()=>{
    await browser.url("https://www.instagram.com/?flo=true");
});


When(/^User enters(.*)and(.*)$/,async(user:string,pass:string)=>{
    //"Phone number, username or email address"
    let newuser=user.trim();
    let newpass=pass.trim()
    await $("//*[@id='loginForm']/div[1]/div[1]/div/label/input").setValue(newuser);
    await $("//*[@id='loginForm']/div[1]/div[2]/div/label/input").setValue(newpass);    
});


Then(/^click on Login button$/,async()=>{
  await $("//*[@id='loginForm']/div[1]/div[3]").click();
});
//*[@id="loginForm"]/div[1]/div[3]

    Then(/^user should see the homepage with message(.*)$/,async(expected)=>{
//$("//*[@id='mount_0_0_4P']/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/nav/div/header/div/h1/div/div/div/div[1]/div/svg").isDisplayed();
  let inst=await $("//svg[contains(text(),Instagram)]"); 
  let actual=await inst.getText();
  expect(actual).toContain(expected);
});
