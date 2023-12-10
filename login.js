const container = document.getElementById('container');
const registerMode = document.getElementById('register');
const loginMode = document.getElementById('login');

registerMode.addEventListener('click', () => {
    container.classList.add("active");
});

loginMode.addEventListener('click', () => {
    container.classList.remove("active");
});

$('#signIn').on('click', function() {
    event.preventDefault();
    window.location.href = "https://fa1f.github.io/YuruCamp/konten.html";

});


$('#signUp').on('click', function() {
    event.preventDefault();
    windows.location.href = "https://fa1f.github.io/YuruCamp/konten.html";

});

