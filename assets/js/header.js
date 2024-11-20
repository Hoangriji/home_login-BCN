document.querySelector('header').innerHTML = `
    <div class="container">
            <div class="header_wrapper_menu">
                <ul class="header_wrapper_menu_list">
                    <li class="header_wrapper_menu_list_item"><a href="index.html" class="header_wrapper_menu_list_item_link">Trang chủ</a></li>
                    <li class="header_wrapper_menu_list_item"><a href="#" class="header_wrapper_menu_list_item_link">Bài viết</a></li>
                    <li class="header_wrapper_menu_list_item"><a href="#" class="header_wrapper_menu_list_item_link">Năng lực</a></li>
                    <li class="header_wrapper_menu_list_item"><a href="#" class="header_wrapper_menu_list_item_link">Hoạt động</a></li>
                    <li class="header_wrapper_menu_list_item"><a href="#" class="header_wrapper_menu_list_item_link">Chúng tôi</a></li>
                </ul>
            </div>
            <div class="header_searchbar">
                <img src="assets/img/iconsearch.png" alt="" class="header_search_img">
                <input type="text" id="searchbar" class="header_searchbar_input" placeholder="Nhập để tìm kiếm nhanh">
            </div>
        </div>
`;
document.querySelector('head').innerHTML += `
    <link rel="stylesheet" href="assets/css/header.css">
`;

const searchbar = document.getElementById('searchbar');

function search() {
    if (searchbar.value.trim() !== "") {
        const searchvalue = this;
        searchbarvalue.classList.add("focus");
    }
    else {
        searchbarvalue.classList.remove("focus");
    }
}
searchbar.addEventListener('focus', search);
searchbar.addEventListener('blur', search);