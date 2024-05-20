var email=document.getElementById('email');

var mot_passe=document.getElementById('password');
var j=0;

var users=[];
var position;

function emailValidation(){
    let E=email.value;
    if(E.includes('@',1)&&E.includes('.com',5)){
        return true;
    }else{
        document.getElementById('email-error').style.display="inline";
        return false;
    }
}


function passwordValidation(){
    let P=mot_passe.value;
    if(P.length>=8){
        return true;
    }else{
        document.getElementById('password-error').style.display="inline";
        return false;
    }
}



function Validtion(){
    var errors=document.getElementsByClassName('error');
    for(let i=0;i<errors.length;i++){
        errors[i].style.display='none';
    }
    
    if(emailValidation()&&passwordValidation()){
        
        var user= {
           
            Email:'',
            password:'',
                   };
        
        user.Email=email.value;
        user.password=mot_passe.value;
        
        users.push(user);
        alert("Confirmed! You are in!");
        console.log(users);
    
        if(confirm("sign Up again?")==true){
            return false;
        }else{
            document.getElementById('signup').style.display="none";
            return true;
        } 
    }else{
        return false;
    }
}


