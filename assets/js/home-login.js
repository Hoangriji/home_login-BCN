document.getElementById ("section1_wrapper_left_btn").addEventListener("click", function () {
    const card = this;
    card.classList.add("active");
    setTimeout(function () {
      card.classList.remove("active");
    }, 250);
});
document.querySelector('head').innerHTML += `
    <link rel="stylesheet" href="assets/css/style.css">
`;
