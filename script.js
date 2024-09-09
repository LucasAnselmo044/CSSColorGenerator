document.getElementById('generateColorBtn').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.getElementById('colorCode').textContent = randomColor;
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
});
