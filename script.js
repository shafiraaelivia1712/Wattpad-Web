// Fungsi untuk membuka dan menutup sidebar secara mulus
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var overlay = document.getElementById("sidebarOverlay");
    if (sidebar && overlay) {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}