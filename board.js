function searchPosts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('boardBody').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const title = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();
        if (title.includes(input)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
