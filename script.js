const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('passwordMessage');

// 실시간 비밀번호 확인
confirmPassword.addEventListener('input', function() {
  if (newPassword.value === confirmPassword.value) {
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
  const password = newPassword.value;
  const confirmPasswordValue = confirmPassword.value;

  if (password !== confirmPasswordValue) {
    document.getElementById('signupMessage').textContent = '비밀번호가 일치하지 않습니다.';
    document.getElementById('signupMessage').style.color = 'red';
  } else {
    document.getElementById('signupMessage').textContent = '회원가입 성공!';
    document.getElementById('signupMessage').style.color = 'green';
    // 회원가입 처리 로직 추가 가능
  }
});
