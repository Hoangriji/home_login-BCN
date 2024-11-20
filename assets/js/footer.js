document.querySelector('footer').innerHTML = `
    <div class="footer_contact">
                <h2 class="footer_contact_title">Ban Công Nghệ</h2>
                <p class="footer_contact_mail">NguyenVanHung000@gmail.com</p>
                <p class="footer_contact_mail">NguyenVanHung000@gmail.com</p>
                <p class="footer_contact_mail">NguyenVanHung000@gmail.com</p>
            </div>
            <div class="footer_notification">
                <div class="footer_notificationabove">
                    <img src="assets/img/icon_notification.svg" alt="" class="footer_notificationabove_icon">
                    <p class="footer_notificationabove_content">Contact</p>
                </div>

                <div class="footer_notificationbelow">
                    <img src="assets/img/Icon_notification.svg" alt="" class="footer_notificationabove_icon">
                    <img src="assets/img/Icons_notification.svg" alt="" class="footer_notificationabove_icon">
                    <img src="assets/img/Icons_notification.svg" alt="" class="footer_notificationabove_icon">
                    <img src="assets/img/Icons_notification.svg" alt="" class="footer_notificationabove_icon">
                </div>
            </div>
`;
document.querySelector('head').innerHTML += `
    <link rel="stylesheet" href="assets/css/footer.css">
`;