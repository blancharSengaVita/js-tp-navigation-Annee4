const hover = {
  jsEnabled() {
    document.documentElement.classList.add('js-enabled');

  },

  constInit() {
    this.menus = Array.from(document.getElementsByClassName('menu'));
    this.submenus = Array.from(document.querySelectorAll('.menu > .sub-menu > li'))
    },

  ShowSubMenu(){
    console.log(this.menus)
    this.menus.forEach(menu =>{
      menu.addEventListener('mouseover', (e)=>{
        e.currentTarget.classList.add('show');

        this.submenus.forEach(submenu => {
          submenu.addEventListener('mouseover', ()=>{
            submenu.classList.add('show');
          })
        });

      });

      menu.addEventListener('mouseout',(e)=>{
        e.currentTarget.classList.remove('show')
      })

    });
  },

  appInit(){
    this.jsEnabled()
    this.constInit();
    this.ShowSubMenu();
  }
}

hover.appInit();