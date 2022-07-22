var stringtweets;
var tweets=["Hi Everyone!","Goodmorning!","Goodnight!"];
for(var i=0; i<tweets.length;i++)
{
    stringtweets=stringtweets + "<p>"+tweets[i]+"</p>";
}
document.getElementById("tweets").innerHTML=stringtweets;