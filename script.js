var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var settings={
    "async": true,
    "scrossDomain": true,
    "url":"https://www.coindesk.com/calculator/",
    "method":"Get",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});