var output = document.getElementById("pics");
var num1 = [
    {name:"Invisibility", description:"enter text", price:"$$$", thumb:"img/Invisibility.png"},
];

var second = document.getElementById("pics2")
var num2 = [
  {name:"Invulnerability", description:"enter text", price:"$$$", thumb:"img/Invulnerability.jpg"},
];

var third = document.getElementById("pics3")
var num3 = [
  {name:"Shape Shifting", description:"enter text", price:"$$$", thumb:"img/ShapeShifting.jpg"},
];

var forth = document.getElementById("pics4")
var num4 = [
   {name:"Super Speed", description:"enter text", price:"$$$", thumb:"img/Super_Speed.png"},
];

var fifth = document.getElementById("pics5")
var num5 = [
   {name:"Super Strength", description:"enter text", price:"$$$", thumb:"img/SuperStrength.jpg"},
];

for (i=0; i<num1.length; i++) {
	output.innerHTML += "<h5>" + (num1[i].name) + "</h5>";
    output.innerHTML += "<img src='" + num1[i].thumb + "'>";
	output.innerHTML += "<p>" + (num1[i].name) + "</p>";
	output.innerHTML += "<p>" + (num1[i].description) + "</p>";
	output.innerHTML += "<p>" + (num1[i].price) + "</p>";
};

for (i=0; i<num2.length; i++) {
	second.innerHTML += "<h5>" + (num2[i].name) + "</h5>";
	second.innerHTML += "<img src='" + num2[i].thumb + "'>";
	second.innerHTML += "<p>" + (num2[i].name) + "</p>";
	second.innerHTML += "<p>" + (num2[i].description) + "</p>";
	second.innerHTML += "<p>" + (num2[i].price) + "</p>";
};

for (i=0; i<num3.length; i++) {
	third.innerHTML += "<h5>" + (num3[i].name) + "</h5>";
	third.innerHTML += "<img src='" + num3[i].thumb + "'>";
	third.innerHTML += "<p>" + (num3[i].name) + "</p>";
	third.innerHTML += "<p>" + (num3[i].description) + "</p>";
	third.innerHTML += "<p>" + (num3[i].price) + "</p>";
};

for (i=0; i<num4.length; i++) {
	forth.innerHTML += "<h5>" + (num4[i].name) + "</h5>";
	forth.innerHTML += "<img src='" + num4[i].thumb + "'>";
	forth.innerHTML += "<p>" + (num4[i].name) + "</p>";
	forth.innerHTML += "<p>" + (num4[i].description) + "</p>";
	forth.innerHTML += "<p>" + (num4[i].price) + "</p>";
};

for (i=0; i<num5.length; i++) {
	fifth.innerHTML += "<h5>" + (num5[i].name) + "</h5>";
	fifth.innerHTML += "<img src='" + num5[i].thumb + "'>";
	fifth.innerHTML += "<p>" + (num5[i].name) + "</p>";
	fifth.innerHTML += "<p>" + (num5[i].description) + "</p>";
	fifth.innerHTML += "<p>" + (num5[i].price) + "</p>";
};