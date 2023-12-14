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

document.getElementById("login").addEventListener("click", function () {
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  // 로그인 시도를 가정하고 아래 if 문을 사용하여 로그인 성공/실패를 시뮬레이션합니다.
  if (id === "test" && password === "1234") {
    // 로그인 성공
    localStorage.setItem("userId", id);
    sessionStorage.setItem("userId", id);
    document.cookie = `userId=${id}; max-age=${72 * 60 * 60};`; // 72시간 후 만료
    alert("로그인에 성공하였습니다."); // 로그인 성공 모달창
  } else {
    // 로그인 실패
    const failedCount = parseInt(getCookie("failedCount") || "0") + 1;
    document.cookie = `failedCount=${failedCount}; max-age=${60 * 60};`; // 1시간 후 만료

    // 5회 이상 실패 시 로그인금지 flag 생성
    if (failedCount >= 5) {
      document.cookie = "loginBan=true; max-age=3600;"; // 1시간 후 만료
      alert("5회 이상 로그인에 실패하였습니다. 잠시 후 다시 시도해주세요."); // 로그인 금지 모달창
      document.getElementById("login").disabled = true; // 로그인 버튼 비활성화
    } else {
      alert("로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요."); // 로그인 실패 모달창
    }
  }
});

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.getElementById("logout").addEventListener("click", function () {
  // 모든 스토리지 초기화
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "failedCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "loginBan=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // 로그인 버튼 활성화
  document.getElementById("login").disabled = false;
});
