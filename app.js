const URL = "https://api.quotable.io/random";
let quote = document.querySelector(".quoteBox");

async function fetchData() {
  try {
    let quoteGetting = await fetch(URL);
    let converting = await quoteGetting.json();
    
    // Now you can access the converted data
    console.log(converting.content);
    console.log(quote.firstElementChild);
  quote.firstElementChild.innerText = converting.content;
    // Assuming your data structure has a property 'quote'
    // quote.innerText = converting
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
