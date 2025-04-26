function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const icon = menuBtn.querySelector("i");
  
    sidebar.classList.toggle("active");
  
    if (sidebar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
  }