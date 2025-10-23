document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mencipta elemen 'heart'
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Tetapkan posisi permulaan, saiz, tempoh, dan kelewatan secara rawak
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 10 + 5 + 's';
        const size = Math.random() * 15 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        // Tambahkan ke dalam kontena
        document.querySelector('.heart-container').appendChild(heart);
        
        // Buang elemen selepas animasi selesai
        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    // Cipta kontena hati jika belum ada
    let heartContainer = document.querySelector('.heart-container');
    if (!heartContainer) {
        heartContainer = document.createElement('div');
        heartContainer.classList.add('heart-container');
        document.body.appendChild(heartContainer);
    }

    // Hasilkan hati secara berterusan (setiap 300ms)
    setInterval(createHeart, 300); 

    // Cipta beberapa hati segera untuk permulaan
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});
