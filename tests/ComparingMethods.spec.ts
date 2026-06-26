import { Locator, test } from "@playwright/test";
//1.innerText VS textContent
test("Comparing methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products: Locator = page.locator(".product-title"); //class name
  const count = await products.count();
  for (let i = 0; i < count; i++) {
    //const productName :string=await products.nth(i).innerText(); // Extracts plain text. Eliminates Whitespace and lineb
    //console.log(productName);

    const productName: string | null = await products.nth(i).textContent(); //also include hidden elements and white spaes so we have to trm it by ising map(text=>text.trim())
    console.log(productName);
  }

  //2. allInnerText() VS allTextContent()

  console.log(
    "******* Comparing allInnnerText() Vs allTextContent()**********",
  );
  const productNames: string[] = await products.allInnerTexts();
  console.log("Product Names captured by allInnerText():", productNames);
});
