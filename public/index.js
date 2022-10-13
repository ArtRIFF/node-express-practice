const sendRequest = async (url) => {
	const response = await fetch(url);
	const result = await response.json();
	return result;
}


const API = 'http://localhost:8000/api/';

const form = document.querySelector('#form-user');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]')
    const password = e.target.querySelector('[name="password"]')

    const userData = {
        email: email.value,
        password: password.value,
    }

    // if (localStorage.getItem('user')) {
    //     const user = JSON.parse(localStorage.getItem('user'))

    //     if (userData.email === user.email && userData.password === user.password) {
    //         alert(`Hello ${user.email}`)
    //     }
    // }
    sendRequest(`${API}users`)
        .then(({data})=>{
            let isLogin = false
            // console.log(userData);
            // console.log(data);
            data.map(({email,password})=>{
                if(email === userData.email && password === userData.password){
                    document.location.href="http://localhost:8000/product"
                }
            })

            if(isLogin) {
                form.insertAdjacentHTML("afterbegin", `<div class="mb-3" style="color:red;">Неверный логин или пароль</div>`)
            }


             // при Post запросе
            //  if(success){
            //     document.location.href="http://localhost:8000/product"
            // }else {
            //     form.insertAdjacentHTML("afterbegin", `<div class="mb-3" style="color:red;">Неверный логин или пароль</div>`)
            // }
        })
        
})