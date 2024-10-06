const newPasswordField = document.getElementById('newPassword');
const confirmPasswordField = document.getElementById('confirmPassword');
const toggleNewPasswordButton = document.getElementById('toggleNewPassword');
const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
const passwordMessage = document.getElementById('passwordMessage');

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

// 회원가입 폼 제출 시
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('newUsername').value;
  const email = document.getElementById('email').value;
  const password = newPasswordField.value;
  const confirmPasswordValue = confirmPasswordField.value;

  if (password !== confirmPasswordValue) {
    document.getElementById('signupMessage').textContent = '비밀번호가 일치하지 않습니다.';
    document.getElementById('signupMessage').style.color = 'red';
  } else {
    document.getElementById('signupMessage').textContent = '회원가입 성공!';
    document.getElementById('signupMessage').style.color = 'green';
    // 회원가입 처리 로직 추가 가능
  }
});
