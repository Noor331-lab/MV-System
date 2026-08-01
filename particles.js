/* ==========================================
   MV SYSTEM
   particles.js
========================================== */

const PARTICLES = 100;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createParticle() {

    const p = document.createElement("span");

    p.className = "particle";

    const size = random(2, 6);

    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${random(0, 100)}vw`;

    p.style.top = `${random(-100, 100)}vh`;

    p.style.opacity = random(0.15, 0.6);

    p.style.animationDuration =
        `${random(10, 30)}s`;

    p.style.animationDelay =
        `${random(0, 15)}s`;

    document.body.appendChild(p);

}

function loadParticles(){

    for(let i = 0; i < PARTICLES; i++){

        createParticle();

    }

}

window.addEventListener("load", loadParticles);
