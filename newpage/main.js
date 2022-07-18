import './styles.sass'

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

