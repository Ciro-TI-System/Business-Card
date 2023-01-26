function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-mode.png");
    img.setAttribute("alt", "Avatar 'light-mode' do Discord");
  } else {
    img.setAttribute("src", "./assets/avatar-dark-mode.png");
    img.setAttribute("alt", "Avatar 'dark-mode' do Discord");
  }
}
