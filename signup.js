const idText = document.getElementById('id');
const pwText = document.getElementById('password');
const pwCheckText = document.getElementById('passwordCheck');
const majorText = document.getElementById('major');
const studentNumberText = document.getElementById('student-number');
const phoneNumberInput = document.getElementById('phone-number');

function checkPassword() {
    if (pwText.value !== pwCheckText.value) {
       alert('비밀번호가 일치하지 않습니다.');
    }
}

function emailId() {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    if (!emailPattern.test(idText.value)) {
        alert('올바른 이메일 형식이 아닙니다.');
    }
}

function changeMajor(){
    const csePattern = /[0-9][0-9][0-9][0-9]136[0-9][0-9][0-9]/;
    if (csePattern.test(studentNumberText.value)) {
        majorText.value = "컴퓨터공학부";
    }
}

function changePhoneNumber() {
    const phoneNumberText = phoneNumberInput.value;
    const hyphen = /-/;
    if (!hyphen.test(phoneNumberText)) {
        const phoneNum1 = phoneNumberText.substr(0, 3);
        const phoneNum2 = phoneNumberText.substr(3, 4);
        const phoneNum3 = phoneNumberText.substr(7, 4);
        phoneNumberInput.value = phoneNum1 + "-" + phoneNum2 + "-" + phoneNum3;
    }
}


pwCheckText.addEventListener('change', checkPassword);
idText.addEventListener('change', emailId);
studentNumberText.addEventListener('change', changeMajor);
phoneNumberInput.addEventListener('change', changePhoneNumber);