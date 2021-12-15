function onHover(str) {
    const menu = document.getElementById(`${str}`);
    const childmenu = menu.querySelector('ul');
    menu.addEventListener("mouseenter", () => {
      childmenu.style.display = 'block';
    });
    menu.addEventListener("mouseleave", () => {
      childmenu.style.display = 'none';
  }); 
}