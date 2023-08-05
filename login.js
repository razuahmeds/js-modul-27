document.getElementById('btn-submit').addEventListener('click',function(){
    const emsilField = document.getElementById('user-email');
    const email = emsilField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password);

    // link---Bank 
    if(email === 'Razu@gmail.com' && password === 'razu'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
    
})