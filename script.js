function submition(){

    var day=document.getElementById("day").value;
    var dd=parseInt(day)
    
    var month=document.getElementById("month").value;
    var mm=parseInt(month)
    
    var year=document.getElementById("year").value;
    var yy=parseInt(year)
    
    var cc=(yy-1) / 100 + 1;
    
    
    var result=parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;
    
    
    var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    
    if (document.getElementById("gender").checked){
    
        var gender="male";
    }
    else{
    
        var gender= "female";
    
    }
    if (dd < 1 || dd > 31)
    {
        alert("invalid date");
    
    }
    
    if(mm < 1 || mm >12 || (mm == 2 && dd > 29))
    {
    
        alert("invalid month")
    
    } 
    // male names selector
    
    {
        if(Math.round(result)==1 && gender=='male');
    
    }
    {
        document.getElementById("display").innerHTML=("you were born on Monday ,your akan name is "+ maleName[1]);
    }
    if (Math.round(result)==2 && gender==='male')
    {
      document.getElementById("display").innerHTML =("you were born on Tuesday ,your akan name is " + maleName[2]);
    }
    else if (Math.round(result)==3 && gender==='male' )
    {
      document.getElementById("display").innerHTML =("you were born on Wednesday ,your akan name is "+ maleName[3]);
    }
    else if (Math.round(result)==4 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on Thursday,your akan name is "+ maleName[4]);
    }
    else if (Math.round(result)==5 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on Friday,your akan name is "+ maleName[5]);
    }
    else if (Math.round(result)==6 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on Saturday,your akan name is "+ maleName[6]);
    }
    else if (Math.round(result)==0 && gender==='male')
    {
      document.getElementById("display").innerHTML = ("you were born on Sunday,your akan name is "+ maleName[0]);
    }
    // female names selector
    else if (Math.round(result)==1 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on monday ,your akan name is "+ femaleName[1]);
    }
    else if (Math.round(result)==2 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on Tuesday,your akan name is "+ femaleName[2]);
    }
    else if (Math.round(result)==3 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on Friday,your akan name is "+ femaleName[5]);
    }
    else if (Math.round(result)==6 && gender==='female')
    {
      document.getElementById("display").innerHTML = ("you were born on Saturday,your akan name is "+ femaleName[6]);
    }
    else if (Math.round(result)==0 && gender==='female')
    {
      document.getElementById("display").innerHTML =  ("you were born on Sunday,your akan name is "+ femaleName[1]);
    }
    else{
     alert("Input valid  data please");
    }
    
    }