 const toggleButton = document.getElementById('toggle-btn');
 const sidebar = document.getElementById('sidebar');
 const darkModeToggle = document.getElementById('darkmode');
 const bElement = document.querySelector('b');

darkModeToggle.addEventListener('change', ()=> {
    if (darkModeToggle.checked) {
        bElement.textContent = '🌓';
    } else {
        bElement.textContent = '🌞'; 
    }
});
 
 function toggleSideBar() {
    sidebar.classList.toggle('close')
    if(sidebar.classList.contains('close')) {
        toggleButton.textContent='open'
    } else {
        toggleButton.textContent='close'
    }
 }

 const toggleSubMenu = (button) => {
    button.nextElementSibling.classList.toggle('show')
 }