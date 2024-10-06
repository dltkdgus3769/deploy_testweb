const newPasswordField = document.getElementById('newPassword');
const confirmPasswordField = document.getElementById('confirmPassword');
const toggleNewPasswordButton = document.getElementById('toggleNewPassword');
const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
const passwordMessage = document.getElementById('passwordMessage');
const checkUsernameButton = document.getElementById('checkUsername');

// 비밀번호 보기/숨기기 기능
toggleNewPasswordButton.addEventListener('click', function () {
  const type = newPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  newPasswordField.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️ 비밀번호 보기' : '👁️‍🗨️ 비밀번호 숨기기';
});

toggleConfirmPasswordButton.addEventListener('click', function () {
  const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  confirmPasswordField.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️ 비밀번호 보기' : '👁️‍🗨️ 비밀번호 숨기기';
});

// 실시간 비밀번호 확인
confirmPasswordField.addEventListener('input', function() {
  if (newPasswordField.value === confirmPasswordField.value) {
    passwordMessage.textContent = '비밀번호가 일치합니다.';
    passwordMessage.style.display = 'block';
    passwordMessage.classList.add('match');
    passwordMessage.classList.remove('nomatch');
  } else {
    passwordMessage.textContent = '비밀번호가 일치하지 않습니다.';
    passwordMessage.style.display = 'block';
    passwordMessage.classList.remove('match');
    passwordMessage.classList.add('nomatch');
  }
});

// 아이디 중복 검사 버튼 클릭 시 팝업 열기
checkUsernameButton.addEventListener('click', function() {
  const popup = window.open('', '아이디 중복 검사', 'width=500,height=200');
  popup.document.write(`
    <html>
      <head>
        <title>아이디 중복 검사</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 0; margin: 0; }
          .popup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* 화면 전체 높이 */
            background-color: rgba(0, 0, 0, 0.5); /* 배경 투명도 */
          }
          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
          button { 
            padding: 10px; 
            background-color: #28a745; 
            color: white; 
            border: none; 
            border-radius: 4px; 
            cursor: pointer; 
          }
          button:hover { background-color: #218838; }
        </style>
      </head>
      <body>
        <div class="popup-container">
          <div class="popup-content">
            <h2>아이디 중복 검사</h2>
            <p>이 아이디는 사용 가능합니다.</p>
            <button onclick="window.close()">확인</button>
          </div>
        </div>
      </body>
    </html>
  `);
});

// 회원가입 폼 제출 시
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('newUsername').value;
  const email = document.getElementById('email').value;
  const password = newPasswordField.value;
  const confirmPasswordValue = confirmPasswordField.value;

  if (password !== confirmPasswordValue) {
    document.getElementById('signupMessage').textContent = '비밀번호가 일치하지 않습니다.';
  } else {
    document.getElementById('signupMessage').textContent = '회원가입 성공!';
    // 회원가입 처리 로직 추가 가능
  }
});
