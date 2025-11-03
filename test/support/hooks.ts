import { AfterStep } from "@cucumber/cucumber";
import allure from "@wdio/allure-reporter";

/**
 * Automatically take a screenshot after every step
 * and attach it to the Allure report.
 */
AfterStep(async function (step) {
    try {
        // small pause to let the UI settle
        await browser.pause(300);

        const screenshot = await browser.takeScreenshot();
        allure.addAttachment(
            `📸 Step: ${step.pickleStep.text}`,
            Buffer.from(screenshot, "base64"),
            "image/png"
        );
    } catch (err) {
        console.error("Error capturing screenshot after step:", err);
    }
});











// import { AfterStep } from "@cucumber/cucumber";
// import fs from "fs";

// AfterStep(async function (step) {
//     const scenarioName = this.pickle.name.replace(/\s+/g, "_");
//     const stepName = step.pickleStep.text.replace(/[^\w]/g, "_");
//     const timestamp = Date.now();

//     const screenshotPath = `./screenshots/${scenarioName}_${stepName}_${timestamp}.png`;

//     const screenshot = await browser.takeScreenshot();
//     fs.writeFileSync(screenshotPath, screenshot, "base64");

//     // optionally attach to Allure
//     const allure = await import("@wdio/allure-reporter");
//     allure.default.addAttachment(
//         `📸 ${scenarioName} → ${step.pickleStep.text}`,
//         Buffer.from(screenshot, "base64"),
//         "image/png"
//     );
// });











import { AfterStep } from "@cucumber/cucumber";
import allure from "@wdio/allure-reporter";

// AfterStep(async function (step) {
//     try {
//         const exampleData = this.pickle.name; // Contains full scenario title (includes example data)
//         const stepText = step.pickleStep.text;

//         const screenshot = await browser.takeScreenshot();

//         allure.addAttachment(
//             `📸 ${exampleData} → ${stepText}`,
//             Buffer.from(screenshot, "base64"),
//             "image/png"
//         );
//     } catch (err) {
//         console.error("Error taking screenshot after step:", err);
//     }
// });
