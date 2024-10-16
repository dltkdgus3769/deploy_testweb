document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 여기서 간단한 유효성 검사
    if (username === 'admin' && password === '1234') {
        //document.getElementById('message').textContent = '로그인 성공!';
        alert("로그인성공!!");
        window.location.href='main_이상현950708.html';
        document.getElementById('message').style.color = 'green';
        // 여기에 로그인 후 이동할 페이지로 리디렉션 코드 추가 가능
    } else {
        document.getElementById('message').textContent = '사용자 이름 또는 비밀번호가 잘못되었습니다.';
    }
});
