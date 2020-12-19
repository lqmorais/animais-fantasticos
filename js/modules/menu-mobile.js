import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuLista, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLista = document.querySelector(menuLista);
    this.activeClass = 'active';
    // Define touchstart e click como argumento padrão
    // de events caso usuário não define
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuLista.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuLista, this.events, () => {
      this.menuLista.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
