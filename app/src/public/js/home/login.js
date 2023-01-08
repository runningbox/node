"use strict";

const id = document.querySelector('#id'),
password = document.querySelector('#password'),
loginBtn = document.querySelector('button');

//로그인 버튼 클릭 시 실행
loginBtn.addEventListener('click', login);

//로그인 기입 정보를 json으로 post 전송
function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
        fetch('login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())  //서버에서 res된 값을 받는다.
    .then((res) => {            //서버에서 res된 값에 대해 검증하고 이에 따른 실행문
        if (res.success){
            alert (res.msg);
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {  //에러 처리
        console.error(new Error("로그인 중 에러 발생"));
    });
}