document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#mega_menu > ul > li");
  
  // mouse gostericisini menyunun uzerine getirende bas verecek hadise
    menuItems.forEach(function(item) {
      item.addEventListener("mouseenter", function() {
        const submenu = this.querySelector(".mega_menu_content");
        if (submenu) {
          submenu.style.display = "block";
        }
      });
  // mouse gostericisini menyunun uzerinden cekende bas verecek hadise
      item.addEventListener("mouseleave", function() {
        const submenu = this.querySelector(".mega_menu_content");
        if (submenu) {
          submenu.style.display = "none";
        }
      });
    });
  });
  