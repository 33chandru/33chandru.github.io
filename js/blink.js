const text = "CHANDRU";
const target = document.getElementById("typed-name");
let index = 0;
let typing = true;

function typeEffect() {
if (typing) {
    if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // Typing speed
    } else {
    typing = false;
    setTimeout(typeEffect, 1000); // Pause before deleting
    }
} else {
    if (index > 0) {
    target.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeEffect, 100); // Deleting speed
    } else {
    typing = true;
    setTimeout(typeEffect, 500); // Pause before retyping
    }
}
}

window.onload = typeEffect;