import Product from "@/components/shared/Product";

async function fetchProduct(productUrl: string) {
  try {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL("https://www.walmart.com" + productUrl);
    const body = {
      source: "universal_ecommerce",
      url: newUrl.toString(),
      geo_location: "United States",
      parse: true,
    };

    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    const data = await response.json().then((data) => data.results[0]);

    if (!data) {
      return;
    }

    return data
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default fetchProduct;
