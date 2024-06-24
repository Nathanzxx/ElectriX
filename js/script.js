document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenus = document.querySelectorAll('.menu-dropdown');

    dropdownMenus.forEach(menu => {
        menu.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });

        menu.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});