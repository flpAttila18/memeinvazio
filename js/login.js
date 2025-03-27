const btnlogin = document.getElementsByClassName("login")[0];

btnlogin.addEventListener('click' , login)

async function login(){
    const email  =document.getElementById("email").value;
    const psw = document.getElementById("psw").value;

    const response = await fetch('http://127.0.0.1:3000/api/auth/login', 
        {method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({email , psw}),
        credentials : 'include'   
});
}