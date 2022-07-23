import './styles.sass'
import $ from "jquery";

$(document).ready(function(){
  $("#content").load("home.html");
})


  const menuButton = document.querySelector('#menu-button');
  const wrapper = document.querySelector('#wrapper');


const openMenu = () => {
  navigationState = true;
  wrapper.classList.add(triggerClass);
}

const closeMenu = () => {
  navigationState = false;
  wrapper.classList.remove(triggerClass);
}

const triggerClass = 'active';
let navigationState = false;

menuButton.addEventListener('click', () => {
  if (navigationState) {
    closeMenu()
  } else {
    openMenu()
  }
});



$(".navigation-item a, #home").on("click", function(e) {
  e.preventDefault();
  let file = this.id + ".html";

  //navigation-item color change for current page
  $(".navigation-item").removeClass("active");
  if(this.id != "home"){
  $("#" + this.id).parent().addClass("active");
}

$("#content").load(file);
window.history.pushState(file, null, "/");
})

// Ensure page back functionality
window.addEventListener("popstate", function (event) {
  var prevState = event.state;
  $("#content").load(prevState);

  var page_id = "#" + prevState.split(".")[0];
  $(".active").removeClass("active");

  if(page_id != "#home"){
    $(page_id).parent().addClass("active");
  }
});