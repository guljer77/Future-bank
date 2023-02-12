document.getElementById("login-btn").addEventListener('click', function(){
    const emailValue = document.getElementById("login-email").value;
    document.getElementById("login-email").value = '';
    
    const passwordValue = document.getElementById("login-password").value;
    document.getElementById("login-password").value = '';
    if(emailValue === 'hello@gmail.com' && passwordValue=== 'secrat'){
        location.href = "bank.html";
    }else{
        alert("Invalid email");
    }
})