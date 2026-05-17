const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

async function getQuotes() {
  
   try {
 const response = await fetch("https://dummyjson.com/quotes/random");
    
   const data = await response.json();
   
   quote.textContent = `${data.quote}`;
   author.textContent =`"${data.author}"`;
   
  } catch (error) {
  console.log(error)
 quote.textContent = "Oops can't find quote";
 author.textContent = "Can't find it in my catalogue";
  }
   
}

getQuotes();

btn.addEventListener("click", getQuotes)

// https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random


//"https://zenquotes.io/api/random