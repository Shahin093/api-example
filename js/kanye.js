const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}
const displayQuotes = quote => {
    console.log(quote.quote);
    const demo = document.getElementById('quote');
    demo.innerText = quote.quote;
}