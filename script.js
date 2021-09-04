

var day=document.getElementById("day").value;
var dd=parseInt(day)

var month=document.getElementById("month").value;
var mm=parseInt(month)

var year=document.getElementById("year").value;
var yy=parseInt(year)

var cc=(yy-1)/100+1;

var result=parseInt( ( (CC/4) -2*CC-1) + ((5*yy/4) ) + ((26*(MM+1)/10)) + DD ) 

var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

if (document.getElementById("gender").checked){

    var gender='male';
}
else{

    var gender='female';

}
if (dd<1 || dd>31){
    alert("invalid date");

}

if(mm<1 || mm12 || mm==2 && dd>29) {

    alert("invalid month")

}



