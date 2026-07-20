document.getElementById('contact-btn1').addEventListener('click', function(e) {
    e.preventDefault(); // Evita cualquier comportamiento por defecto
    
    const u = 'rocaa8035';
    const d = 'gmail.com';
    
    // Abre el gestor de correo de forma dinámica al hacer clic
    window.location.href = 'mailto:' + u + '@' + d;
});

document.getElementById('contact-btn2').addEventListener('click', function(e) {
    e.preventDefault(); // Evita cualquier comportamiento por defecto
    
    const u = 'rocaa8035';
    const d = 'gmail.com';
    
    // Abre el gestor de correo de forma dinámica al hacer clic
    window.location.href = 'mailto:' + u + '@' + d;
});

document.getElementById('contact-btn3').addEventListener('click', function(e) {
    e.preventDefault(); // Evita cualquier comportamiento por defecto
    
    const u = 'rocaa8035';
    const d = 'gmail.com';
    
    // Abre el gestor de correo de forma dinámica al hacer clic
    window.location.href = 'mailto:' + u + '@' + d;
});

// ---------- Data: edit here to change project cards ----------
const PROJECTS = [
  {
    title: "Mi Pomodoro React",
    desc: "Time control app. Saves settings automatically. Ideal for studying.",
    tags: ["JavaScript", "CSS", "HTML", "React"],
    code: "https://github.com/rocaa8035-jpg/mi-pomodoro-react",
    live: "https://mi-pomodoro-react.vercel.app/",
    video: "./videos/pomodoro-tutorial.mp4"
  },
  {
    title: "Zen Kanban",
    desc: "Productivity dashboard based on the Kanban methodology. Editable by the user.",
    tags: ["TypeScript", "CSS", "HTML", "Angular"],
    code: "https://github.com/rocaa8035-jpg/zen-kanban",
    live: "https://zen-kanban-chi.vercel.app/",
    video: "./videos/zen-kanban-tutorial.mp4"
  },
  {
    title: "Reproductor Zen",
    desc: "Modern, minimalist and responsive audio player and web podcasts.",
    tags: ["TypeScript", "CSS", "HTML", "Angular"],
    code: "https://github.com/rocaa8035-jpg/Reproductor-Zen",
    live: "https://reproductor-zen.vercel.app/",
    video: "./videos/reproductor-zen-tutorial.mp4"
  },
  {
    title: "Simulador inversiones Visual",
    desc: "Interactive financial simulator that allows you to visualize the real impact of long-term compound interest.",
    tags: ["JavaScript", "CSS", "HTML", "React"],
    code: "https://github.com/rocaa8035-jpg/simulador-inversiones-visual",
    live: "https://simulador-inversiones-visual.vercel.app/",
    video: "./videos/simulador-inversiones-visual-tutorial.mp4"
  }
];

// 2. Modifica la función para renderizar el reproductor de video
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <!-- Reemplazamos la imagen estática por un reproductor de video -->
      <div class="thumb">
        <video 
        src="${p.video}" 
        autoplay 
        muted 
        loop 
        playsinline
        controls 
        poster="./img/thumbnails/${p.title.toLowerCase().replace(/ /g, '-')}.png" 
        preload="metadata"
        >
        Tu navegador no soporta reproducción de video.
        </video>
      </div>
      
      <div class="project-overlay">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
          <a href="${p.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>
        </div>
      </div>
    </article>
  `).join("");
}

renderProjects();

// ---------- Animated background: drifting circuit-grid ----------
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const NODE_COUNT = 46;
let w, h, nodes = [];

function resize(){
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
}

function initNodes(){
nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    r: Math.random() * 1.6 + 0.6
}));
}

function draw(){
ctx.fillStyle = '#0b0f1a';
ctx.fillRect(0, 0, w, h);

if (!reduceMotion){
    for (const n of nodes){
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;
    }
}

for (let i = 0; i < nodes.length; i++){
    for (let j = i + 1; j < nodes.length; j++){
    const a = nodes[i], b = nodes[j];
    const dist = Math.hypot(a.x - b.x, a.y - b.y);
    if (dist < 150){
        ctx.strokeStyle = `rgba(124,156,255,${0.10 * (1 - dist / 150)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
    }
    }
}

ctx.fillStyle = 'rgba(242,166,90,0.55)';
for (const n of nodes){
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
}

if (!reduceMotion) requestAnimationFrame(draw);
}

window.addEventListener('resize', () => { resize(); initNodes(); });
resize();
initNodes();
draw();