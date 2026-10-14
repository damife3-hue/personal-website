function getNewRandomQuote() {
    fetch("https://api.api-ninjas.com/v2/randomquotes", {
    headers: { "X-Api-Key": "wz7czTZbmhtV262NfDY5Xum00Hn4pspI4ibceNxE" },
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
      return response.json();
    })
    .then((data) => {
        // Do something with the received data
        const quoteText = data[0].quote
        const quoteAuthor = data[0].author
        document.getElementById("random-quote-text").innerHTML = quoteText;
        document.getElementById("random-quote-author").innerHTML = quoteAuthor;
    })
    .catch((error) => {
        // Handle errors here
        alert("There was a problem getting a new quote!");
    });
}