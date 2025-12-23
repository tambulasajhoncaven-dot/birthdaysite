$(document).ready(function() {
    // Countdown logic (same as before, but integrated)
    const birthday = new Date('2024-12-25T00:00:00');
    function updateCountdown() {
        const now = new Date();
        const diff = birthday - now;
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            $('#timer').text(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        } else {
            $('#timer').text("It's party time! 🎂");
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Confetti on button click
    $('#celebrate').click(function() {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });
    });

    // Gallery Swiper
    const swiper = new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // RSVP Form submission
    $('#rsvpForm').submit(function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#age').val();
        const message = $('#message').val();
        alert(`Thank you, ${name}! Your RSVP has been sent.`);
        // In a real app, send to server via AJAX
        $(this)[0].reset();
    });

    // Optional: Background music (uncomment to add)
    // const audio = new Audio('path/to/birthday-song.mp3');
    // $('#celebrate').click(() => audio.play());
});