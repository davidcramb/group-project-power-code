var output = document.getElementById("pics");
var num1 = [
    {name:"Invisibility", price:"$$$", thumb:"img/Invisibility.png"},
];

var second = document.getElementById("pics2")
var num2 = [
  {name:"Invulnerability", price:"$$$", thumb:"img/Invulnerability.jpg"},
];

var third = document.getElementById("pics3")
var num3 = [
  {name:"Shape Shifting", price:"$$$", thumb:"img/ShapeShifting.jpg"},
];

var forth = document.getElementById("pics4")
var num4 = [
   {name:"Super Speed", price:"$$$", thumb:"img/Super_Speed.png"},
];

var fifth = document.getElementById("pics5")
var num5 = [
   {name:"Super Strength", price:"$$$", thumb:"img/SuperStrength.jpg"},
];

var sixth = document.getElementById("pics6")
var num6 = [
   {name:"Chest Hair Mass", description:"enter text", price:"$$$", thumb:"img/Zangief.gif"},
];

var seventh = document.getElementById("pics7")
var num7 = [
   {name:"Thunder Thighs", description:"enter text", price:"$$$", thumb:"img/Chunli.png"},
];

var eighth = document.getElementById("pics8")
var num8 = [
   {name:"Ravishing Looks", description:"enter text", price:"$$$", thumb:"img/KenMasters.png"},
];

var ninth = document.getElementById("pics9")
var num9 = [
   {name:"Pirouette Stance", description:"enter text", price:"$$$", thumb:"img/Ryu.png"},
];

var tenth = document.getElementById("pics10")
var num10 = [
   {name:"Super Brows", description:"enter text", price:"$$$", thumb:"img/Akuma.png"},
];

for (i=0; i<num1.length; i++) {
	output.innerHTML += "<h5>" + (num1[i].name) + "</h5>";
    output.innerHTML += "<img src='" + num1[i].thumb + "'>";
	output.innerHTML += "<p>" + (num1[i].name) + "</p>";
	output.innerHTML += "<p>" + (num1[i].price) + "</p>";
};

for (i=0; i<num2.length; i++) {
	second.innerHTML += "<h5>" + (num2[i].name) + "</h5>";
	second.innerHTML += "<img src='" + num2[i].thumb + "'>";
	second.innerHTML += "<p>" + (num2[i].name) + "</p>";
	second.innerHTML += "<p>" + (num2[i].price) + "</p>";
};

for (i=0; i<num3.length; i++) {
	third.innerHTML += "<h5>" + (num3[i].name) + "</h5>";
	third.innerHTML += "<img src='" + num3[i].thumb + "'>";
	third.innerHTML += "<p>" + (num3[i].name) + "</p>";
	third.innerHTML += "<p>" + (num3[i].price) + "</p>";
};

for (i=0; i<num4.length; i++) {
	forth.innerHTML += "<h5>" + (num4[i].name) + "</h5>";
	forth.innerHTML += "<img src='" + num4[i].thumb + "'>";
	forth.innerHTML += "<p>" + (num4[i].name) + "</p>";
	forth.innerHTML += "<p>" + (num4[i].price) + "</p>";
};

for (i=0; i<num5.length; i++) {
	fifth.innerHTML += "<h5>" + (num5[i].name) + "</h5>";
	fifth.innerHTML += "<img src='" + num5[i].thumb + "'>";
	fifth.innerHTML += "<p>" + (num5[i].name) + "</p>";
	fifth.innerHTML += "<p>" + (num5[i].price) + "</p>";
};

for (i=0; i<num6.length; i++) {
	sixth.innerHTML += "<h5>" + (num6[i].name) + "</h5>";
	sixth.innerHTML += "<img src='" + num6[i].thumb + "'>";
	sixth.innerHTML += "<p>" + (num6[i].name) + "</p>";
	sixth.innerHTML += "<p>" + (num6[i].description) + "</p>";
	sixth.innerHTML += "<p>" + (num6[i].price) + "</p>";
};

for (i=0; i<num7.length; i++) {
	seventh.innerHTML += "<h5>" + (num7[i].name) + "</h5>";
	seventh.innerHTML += "<img src='" + num7[i].thumb + "'>";
	seventh.innerHTML += "<p>" + (num7[i].name) + "</p>";
	seventh.innerHTML += "<p>" + (num7[i].description) + "</p>";
	seventh.innerHTML += "<p>" + (num7[i].price) + "</p>";
};

for (i=0; i<num8.length; i++) {
	eighth.innerHTML += "<h5>" + (num8[i].name) + "</h5>";
	eighth.innerHTML += "<img src='" + num8[i].thumb + "'>";
	eighth.innerHTML += "<p>" + (num8[i].name) + "</p>";
	eighth.innerHTML += "<p>" + (num8[i].description) + "</p>";
	eighth.innerHTML += "<p>" + (num8[i].price) + "</p>";
};

for (i=0; i<num9.length; i++) {
	ninth.innerHTML += "<h5>" + (num9[i].name) + "</h5>";
	ninth.innerHTML += "<img src='" + num9[i].thumb + "'>";
	ninth.innerHTML += "<p>" + (num9[i].name) + "</p>";
	ninth.innerHTML += "<p>" + (num9[i].description) + "</p>";
	ninth.innerHTML += "<p>" + (num9[i].price) + "</p>";
};

for (i=0; i<num10.length; i++) {
	tenth.innerHTML += "<h5>" + (num10[i].name) + "</h5>";
	tenth.innerHTML += "<img src='" + num10[i].thumb + "'>";
	tenth.innerHTML += "<p>" + (num10[i].name) + "</p>";
	tenth.innerHTML += "<p>" + (num10[i].description) + "</p>";
	tenth.innerHTML += "<p>" + (num10[i].price) + "</p>";
};








