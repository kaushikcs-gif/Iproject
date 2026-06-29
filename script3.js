// Hide all sections
function hideSections() {
    document.getElementById("home").style.display = "none";
    document.getElementById("skill").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("learning").style.display = "none";
}

// Show selected section
function showSection(sectionName) {
    hideSections();
    document.getElementById(sectionName).style.display = "block";
}

// Show Home page when website loads
window.onload = function () {
    showSection("home");
};