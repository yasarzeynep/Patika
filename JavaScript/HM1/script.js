// Saati güncelleme işlevi
function updateClock() {
    const clock = document.querySelector('.clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let timeText = `${hours}:${minutes}:${seconds}`;

    if (hours < 10) {
        timeText = `0${timeText}`;
    }

    if (minutes < 10) {
        timeText = `${hours}:0${minutes}:${seconds}`;
    }

    if (seconds < 10) {
        timeText = `${hours}:${minutes}:0${seconds}`;
    }

    clock.textContent = timeText;
}

// "Göster" butonuna tıklamayı dinler ve saat bilgisini gösterir
document.getElementById('show-time-button').addEventListener('click', function () {
    const nameInput = document.getElementById('name-input');
    const greetingText = document.getElementById('greeting-text');
    const name = nameInput.value.trim();

    if (name === '') {
        greetingText.textContent = 'Lütfen bir isim girin.';
    } else {
        greetingText.textContent = `Hoş geldiniz, ${name}! Ödev 1 Javascript Saat ve Karşılama.
        Şu an saat:`;
        updateClock();
        setInterval(updateClock, 1000);
    }
});
