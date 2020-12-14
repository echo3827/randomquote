var quote= ["Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best -Marilyn Monroe", "Be yourself; everyone else is already taken -Oscar Wilde", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe -Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind -Bernard M. Baruch", "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth -William W. Purkey", "In three words I can sum up everything I've learned about life: it goes on -Robert Frost"];

console.log(quote.length);
$(".quotes").click(function() {
    var randomQuote= Math.floor(Math.random() * quote.length);
    
   $('.target').text(quote[randomQuote] + "");
});

console.log(quote[0]);
console.log(quote[1]);
console.log(quote[2]);
console.log(quote[3]);
console.log(quote[4]);
console.log(quote[5]);
