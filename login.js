const idText = document.getElementById('id');
const pwText = document.getElementById('password');
const loginButton = document.getElementById('login');

function existenceLogin() {
    if(idText.value === "" || pwText.value === ""){
        alert("id, pw를 입력해주세요");
    }
}

loginButton.addEventListener('click', existenceLogin);