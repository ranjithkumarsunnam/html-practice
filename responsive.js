const form=document.querySelector("form");
 const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value.trim();

//submit Event
form.addEventListener("submit",function(event){
    event.preventDefault();//refresh page

    //input values

    //validation
    if(username==='' || password===''){
        alert("please fill the all fields");
    }
    else{
        alert("Login Successful");
    }

});

