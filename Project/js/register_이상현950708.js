// 내용 삭제 버튼 클릭 이벤트
document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('file').value = ''; // 파일 첨부 초기화
});