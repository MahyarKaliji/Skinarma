function searchBox() {
  const searchIcon = document.getElementById("search-box");
  if (searchIcon.style.display == "block") {
    searchIcon.style.display = "none";
  } else {
    searchIcon.style.display = "block";
  }
}
const login = document.getElementById("login");
const reset = document.getElementById("reset");

function resetPassword() {
  login.style.display = "none";
  reset.style.display = "block";
  console.log("login", login.style.display);
}

function userLogin() {
  reset.style.display = "none";
  login.style.display = "block";
}

// HAMBURGER MENU
const menuItems=document.getElementById('menu')
function hamburgerMenu(){
  if(menuItems.style.display=='block'){
    console.log('1',menuItems.style.display);
    menuItems.style.display='none';
    console.log('2',menuItems.style.display);
  }else {
    menuItems.style.display='block';
  }
}

// if(screen.width>=768){
//   menuItems.style.display='block';
// }else {
//   menuItems.style.display='none';
// }

// Category product script
// window.onload = function () {
//   const anchorTags = document.querySelectorAll("a");
//   anchorTags.forEach(function (a) {
//     a.addEventListener("click", function (ev) {
//       ev.preventDefault();
//     });
//   });
//   const dropdownEl = document.querySelector("[data-dropdown-toggle]");
//   if (dropdownEl) {
//     dropdownEl.click();
//   }
//   const modalEl = document.querySelector("[data-modal-toggle]");
//   if (modalEl) {
//     modalEl.click();
//   }
//   const dateRangePickerEl = document.querySelector("[data-rangepicker] input");
//   if (dateRangePickerEl) {
//     dateRangePickerEl.focus();
//   }
//   const drawerEl = document.querySelector("[data-drawer-show]");
//   if (drawerEl) {
//     drawerEl.click();
//   }
// };




