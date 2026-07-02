import { expect, test } from "@playwright/test";

test("Frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames");

  //total number of frames present on the page
  const frames = page.frames();
  console.log("Number of frames:", frames.length);

  //approch-1 use page.frame()
  const frame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  if (frame) {
    frame.locator("[name='mytext1']").fill("Hello");
    //await frame.fill("[name='mytext1']","Hello");
  } else {
    console.log("Frame is not available");
  }

  //Approch-2 using frame locator
  const inputBox = page
    .frameLocator("[src='frame_1.html']")
    .locator("[name='myText1']");
  await inputBox.fill("John");
  await page.waitForTimeout(5000);
});


//
test("inner/child framesdemo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames");

  const frame3 = page.frame({
    url: "https:ui.vision/demo/webtest/frames/frame_3.html",
  });

  //frame3?.locator("[name='mytext3']").fill("Welcome");     or use if else statement
  if (frame3) {
    frame3.locator("[name='mytext3']").fill("Welcome");
    const childFrames=frame3.childFrames();
    console.log("Chils frames inside the Frame 3",childFrames.length);

    const radio=childFrames[0].getByLabel("I am a Human");
    radio.check();
    await expect(radio).toBeChecked();


  } 
  else {
    console.log("frame 3 not found");
  }

  await page.waitForTimeout(5000);
});
