import { Locator, test, expect } from "@playwright/test";

test("static web table", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //1. count numberc of rowa in a table


    //const rows: Locator = page.locator("table[name='BookTable'] tbody tr");
    const rows: Locator = table.locator("tr"); //chaining of locator

    await expect(rows).toHaveCount(7); ///approach 1 


    const rowCount: number = await rows.count();
    console.log("Number of rows in a table", rowCount); ///approach 2 
    expect(rowCount).toBe(7);


    //2.count number of columns
    const colums: Locator = table.locator("tr th");
    //const columns:Locator=rows.locator("th");
    await expect(colums).toHaveCount(4);


    //3.Read all data form  the 2nd row

    const secondRowCells: Locator = rows.nth(2).locator("td");

    const secondRowText: string[] = await secondRowCells.allInnerTexts();

    console.log("2nd Row data:", secondRowText);


    expect(secondRowText).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);


    console.log("printing 2nd row data.........");
    for (let text of secondRowText) {
        console.log(text);
    }


    //4.reading all the data
    console.log('printing all the table Data.......');

    // tthe row is in locator form to covert that into an arrauy usw all()

    const allRowData = await rows.all();

    for (let row of allRowData.slice(1))// .slice(1) will skip the hesder row
    {
        const cols = await row.locator('td').allInnerTexts();
        console.log(cols);

        //if we dont wnat to print in a array formate
        //console.log(cols.join('\t));
    }


    //5. print book names where author is mukesh


    console.log("Books written by mukesh:")
    const mukeshBooks: string[] = [];
    for (let row of allRowData.slice(1))// .slice(1) will skip the hesder row
    {

        const bookMukesh: string[] = await row.locator('td').allInnerTexts();
        const author = bookMukesh[1];
        const bookname = bookMukesh[0];

        if (author === 'Mukesh') {
            console.log('${author}\t ${book}');
            mukeshBooks.push(bookname);
        }


    }
    expect(mukeshBooks).toHaveLength(2);


    //6.Calc total proce of all the books


    let totalPrice = 0;

    for (let row of allRowData.slice(1))// .slice(1) will skip the hesder row
    {

        const cells: string[] = await row.locator('td').allInnerTexts();
        const price = cells[3];

        totalPrice = totalPrice + parseInt(price);

    }

    console.log("Total price", totalPrice);
    expect(totalPrice).toBe(7100)























    await page.waitForTimeout(5000);
});
