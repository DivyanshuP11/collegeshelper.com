       // Tab navigation
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    // console.log("1.", scrollLeftValue);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    // console.log("2.", scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    // IconVisibility();
    setTimeout(() => IconVisibility(), 50)
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    // IconVisibility();
    setTimeout(() => IconVisibility(), 50)
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
     btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft)

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

// JS to make the nav tab draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if (!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

// =======================Scroll on tap & hold===================

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.add("dragging");
})

 // =======================Scroll on tap & hold===================


tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});


// JS for view tab content on click

const tabs = document.querySelectorAll(".tab");
const tabbtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick) {
    // tabBtns.forEach((tabBtn) => {
    //     tabBtn.classList.remove("active");
    // });
    //
    // tabs.forEach((tab) => {
    //     tab.classList.remove("active");
    // });
    tabbtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabbtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});