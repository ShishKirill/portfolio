const API_URL="https://inspo-quotes-api.herokuapp.com/quotes/random"; 

const QuoteBox = document.querySelector('.quote');
document.addEventListener('DOMContentLoaded', getQuote)

async function getQuote() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json()
        QuoteBox.innerHTML = `<blockquote>${data.quote.text}</blockquote>
        <cite>${data.quote.author}</cite>`
    } catch (error){}
}

getQuote();