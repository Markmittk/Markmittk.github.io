const PASSWORD = "deinGeheimesPasswort";

function checkLogin() {
  const pw = document.getElementById("password").value;
  if (pw === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
    loadProjects();
  } else {
    alert("Falsches Passwort!");
  }
}

function loadProjects() {
  fetch("../data/projects.json")
    .then((res) => res.json())
    .then((projects) => {
      const list = document.getElementById("project-list");
      list.innerHTML = "";
      projects.forEach((p, i) => {
        const el = document.createElement("div");
        el.innerHTML = `${p.title} – <a href="${p.link}" target="_blank">Ansehen</a>`;
        list.appendChild(el);
      });
    });
}

function addProject() {
  alert("Ohne Server leider nur lesend möglich.\n\nNutze Netlify CMS oder Strapi für echte Schreibrechte.");
}
