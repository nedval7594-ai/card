// 명함 뒤집기 기능
const card = document.getElementById('card');

card.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// 터치 지원 (모바일)
card.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.classList.toggle('flipped');
});