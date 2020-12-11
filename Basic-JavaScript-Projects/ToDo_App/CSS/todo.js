

var mylist = { "name":"Jeff", "age":36, "city":"Salt Lake City" };

var myJSON = JSON.stringify(mylist);

document.getElementById('thislist').innerhtml =myJSON;