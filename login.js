const idText = document.getElementById("id");
const pwText = document.getElementById("password");
const loginButton = document.getElementById("login");

function existenceLogin() {
  if (idText.value === "" || pwText.value === "") {
    alert("id, pw를 입력해주세요");
  }
}

loginButton.addEventListener("click", existenceLogin);

axios
  .get("https://api.thecatapi.com/v1/images/search?size=full")
  .then(function (response) {
    const imageUrl = response.data[0].url; // API 응답으로부터 이미지 url 받아오기
    document.getElementById("catImage").src = imageUrl; // 이미지 태그에 url 할당
  })
  .catch(function (error) {
    console.log(error);
  });
