document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "https://fa1f.github.io/YuruCamp/konten.html";
    })

});