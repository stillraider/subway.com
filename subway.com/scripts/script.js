let burger = $(".header-mobile__burger");
let burger_first = $(".header-mobile__open-menu:first-child");
let burger_last = $(".header-mobile__open-menu:last-child");
let burger_center = $(".header-mobile__open-menu:nth-child(2)");
let bnt = $(".down-menu__dropdown-button");
let dropdown = $(".down-menu__dropdown-content");
let footer_links = $(".down-menu__footer-links");
let down_items = $(".down-menu__list-items");
let down_menu = $(".down-menu");
let html = $("html");

burger.on("click",
    function () {
        burger_first.toggleClass("bias_first");
        burger_last.toggleClass("bias_last");
        burger_center.toggleClass("bias_center");
        down_menu.toggleClass("menu-show");
        html.toggleClass("scroll");
        show_dropdown ();
    }
);
function show_dropdown () {
    dropdown.css("left", "100vw");
    down_items.show();
    footer_links.show();
}
down_items.on("click", 
    function () {
        down_index = down_items.index(this);
        down_items.hide();
        down_items.eq(down_index).show();
        dropdown.eq(down_index).css("left", "0");
        footer_links.hide();
        dropdown.css("margin-bottom", "40px");
    }
);
bnt.on("click", 
    show_dropdown
);






$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});