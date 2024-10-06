const passwordField = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// 비밀번호 보기/숨기기 기능
togglePasswordButton.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  // 버튼의 텍스트를 변경 (👁️ 또는 👁️‍🗨️)
  this.textContent = type === 'password' ? '👁️ 비밀번호 보기' : '👁️‍🗨️ 비밀번호 숨기기';
});
