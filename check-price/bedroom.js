var cheerio = require("cheerio");
var request = require("request");

request('https://sfbay.craigslist.org/search/apa?bedrooms=1&bathrooms=1&availabilityMode=0', function(err, response, body){
    var $ = cheerio.load(body);
    // let's see the average price of 1 bedroom and bathroom in san francisco (based on 1 page of craigslist...)
    var avg = Array.from($(".result-price")).reduce(function(acc,next){
        return acc + parseInt($(next).text().substr(1));
    }, 0) / $(".result-price").length;
    console.log(`Average 1 bedroom price: \$${avg.toFixed(2)}`)
});
