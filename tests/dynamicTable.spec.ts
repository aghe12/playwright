import { test, expect, Locator } from "@playwright/test";

test("Verify Chrome CPU load in dynamic table", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table = page.locator("table.table tbody");
    await expect(table).toBeVisible();

    const row = await table.locator("tr").all();
    await expect(row).toHaveLength(4);

    //step1: For chrome process get value of CPU load
    //Read each row 0 check chrome presenece

    let cpuLoad = '';
    for (const r of row) {
        const processName: string = await r.locator("td").nth(0).innerText();
        if (processName === "Chrome") {
            cpuLoad = await r.locator('td:has-text("%")').innerText();
            //OR cpuLoad=await r.locator("td,{hasText:'%"}).innerText();
            console.log("CPU Load of CHROME:", cpuLoad);
            break;
        }
    }

    //step2:compare the value in the yellow label
    let yellowboxtext = await page.locator('#chrome-cpu').innerText(); //id of the that wgich is inside the p tag
    console.log("value inside the yelloe box", yellowboxtext);

    if (yellowboxtext.includes(cpuLoad)) {
        console.log("CPU LOAD OF CHROME IS EQAUL");

    }
    else {
        console.log("CPU LOAD OF CHROME IS NOT EQAUL");
    }

    expect(yellowboxtext).toContain(cpuLoad);



    await page.waitForTimeout(5000);


});