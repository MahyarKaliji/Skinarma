function searchBox() {
  const searchIcon = document.getElementById("search-box");
  if (searchIcon.style.display == "block") {
    searchIcon.style.display = "none"
  } else {
    searchIcon.style.display = "block";
  }
}

function resetPassword(){
  const login = document.getElementById("login");
  const reset = document.getElementById("reset");
  login.style.display='none';
  reset.style.display='block';
}

function login(){
  const login = document.getElementById("login");
  const reset = document.getElementById("reset");
  reset.style.display='none';
  login.style.display='block';
}


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
