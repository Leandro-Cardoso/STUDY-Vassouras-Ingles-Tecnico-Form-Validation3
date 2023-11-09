function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
    }
    else if(password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }  
}

function matchpass(){  
    var firstpassword=document.f1.password.value;  
    var secondpassword=document.f1.password2.value;  
      
    if(firstpassword==secondpassword){  
        return true;  
    }  
    else{  
        alert("password must be same!");  
        return false;  
    }  
}

function validate(){  
    var num=document.myform2.num.value;
    
    if (isNaN(num)){  
        document.getElementById("numloc").innerHTML="Enter Numeric value only";  
        return false;  
    }
    else{  
        return true;  
    }  
}

function validate2(){  
    var name=document.f2.name.value;  
    var password=document.f2.password.value;  
    var status=false;  
      
    if(name.length<1){  
        document.getElementById("nameloc").innerHTML=" <img src='unchecked.png'/> Please enter your name";  
        status=false;  
    }
    else{  
        document.getElementById("nameloc").innerHTML=" <img src='checked.png'/>";  
        status=true;  
    }  
    if(password.length<6){  
        document.getElementById("passwordloc").innerHTML=" <img src='unchecked.png'/> Password must be at least 6 char long";  
        status=false;  
    }
    else{  
        document.getElementById("passwordloc").innerHTML=" <img src='checked.png'/>";  
    }  
    return status;  
}

function validateemail()  
{  
    var x=document.myform3.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    }
}
