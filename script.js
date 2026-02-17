// --- 1. PROJECT DATA ---
const projects = [
    { 
        name: "EXPERIMENTAL TYPOGRAPHY", 
        cat: "TYPOGRAPHY", 
        heroColor: "#7b4d03", 
        description: "Experimental Composition with Letter Form/Word Form",
        thumbnail: "images/images/sodapop.jpg", 
        img1: "images/06ecd0afe6a0c76d51f943b5321fb318.gif", 
        narrativeStep: "01.", 
        narrativeTitle: "IDEATION",   
        narrative: "For the EXPERIMENTAL TYPOGRAPHY project, the core inspiration was the volatile energy of carbonation—specifically, the way bubbles cluster and interact. I wanted to capture the ephemeral 'pop' of fizz and translate it into a tangible visual language.",
        extraSections: [
            { type: 'dark', title: 'Execution', text: 'The design journey involved a deep dive into "metaball" aesthetics, where organic spheres merge to create high-tension curves. I experimented with the anatomy of each letter, exploring how much of the character could be stripped away while still maintaining legibility.', img: 'images/word exploration typography athira manoj_Page_2_Image_0001.jpg', layout: 'landscape' },
            { type: 'light', title: 'Outcome', text: 'The result is Soda Pop, a high-energy display typeface that prioritizes fluidity and form. Every character is built from interconnected spheres, giving the text a kinetic, mid-fizz appearance..', img: 'images/word exploration typography athira manoj_Page_1_Image_0001.jpg', layout: 'landscape' }
        ]
    },
    { 
        name: "VISUAL TRANSFORMATION", 
        cat: "FORM EXPLORATION", 
        heroColor: "#2D4330",
        description: "The survival of a butterfly depends entirely on its specific host plant, a relationship that symbolizes the deep interdependence of all living things. This delicate bond reflects a universal truth: existence is woven together through connection and vulnerability. In this fragile balance, the essence of life is found in our reliance on one another.",
        thumbnail: "images/Gemini_Generated_Image_ax3a1eax3a1eax3a.png",
        img1: "images/images/Her Garden - Milkweed & Monarch-01.jpg", 
        narrativeStep: "01.",
        narrativeTitle: "HER GARDEN",
        narrative: "Mirroring the bond between the Milkweed and the Monarch, this perfume symbolizes the strength and graceful resilience born from nature's delicate interdependence. The design captures the vibrant embrace of wings and flower, embodying an eternal cycle where life, scent, and transformation are inseparable.",
        extraSections: [
            { type: 'dark', title: 'ENTWINED', text: 'Mirroring the tender bond between the Gulf Fritillary and the passion flower, this bottle captures a poetic narrative of trust and mutual survival. The design celebrates the moment vibrant wings meet curling petals, embodying a delicate devotion where beauty and transformation coexist within a single breath.', img: 'images/images/Entwined - Passion flower & Gulf fritillary-01.jpg', layout: 'landscape' },
            { type: 'light', title: 'ELYTRA', text: 'Mirroring the delicate bond between the Large Blue butterfly and its host thyme, this bottle captures a story of trust and survival where beauty relies on a humble herb. Its form celebrates this quiet interdependence, serving as a reminder that all life thrives through connection and mutual reliance.', img: 'images/images/elytra - wild thyme & large blue butterfly-01.jpg', layout: 'landscape' },
            { type: 'dark', title: 'DUOLORA', text: 'This dual perfume captures the harmony of contrast, inspired by the symbiotic bond between the Blue Mormon butterfly and the Citrus aurantium flower. By blending spicy citrus zest with tender floral sweetness, the two bottles create a balanced symphony of scents that complement each other in spirit.', img: 'images/images/Duolora - Citrus Aurantium & Blue Mormon-01.jpg', layout: 'landscape' },
            { type: 'light', title: 'TAIL & BLOOM', text: 'The Tail & Bloom collection explores the relationship between the Paw Paw tree and the Zebra Swallowtail butterfly. This pairing represents a harmonious balance of form and function, where the tree provides sustenance and shelter while the butterfly contributes to pollination and ecosystem health.', img: 'images/images/Tail & Bloom - Paw Paw tree & Zebra Swallowtail-01.jpg', layout: 'landscape' },
             { type: 'dark', title: 'SILENT BLUE', text: 'The Silent Blue collection explores the relationship between the Wild Lupine and the Karner Blue butterfly. This pairing represents a delicate balance of form and function, where the lupine provides sustenance and shelter while the butterfly contributes to pollination and ecosystem health.', img: 'images/images/Silent blue -wild lupine &karner blue-01.jpg', layout: 'portrait' }
        ]
    },
    { 
        name: "ILLUSTRATED BOOK", 
        cat: "ILLUSTRATION", 
        heroColor: "#ac4026",
        description: "An exploration of storytelling through digital illustration and texture.",
        thumbnail: "images/images/ILLUSTRATION assignment 1_Page_01.jpg", 
        img1: "images/images/Gemini_Generated_Image_xsdxkqxsdxkqxsdx.png", 
        narrativeStep: "01.story",
        narrativeTitle: "Visual Journey",
        narrative: "The illustrated book project was a journey into the world of digital storytelling, where I sought to create a visual narrative that was both immersive and emotionally resonant. The process involved layering digital charcoal and grain brushes to evoke a sense of depth and texture, allowing the illustrations to breathe and come alive on the page.",
        extraSections: [
            // Only one section here now for the GIF
            { type: 'dark', title: 'Process', text: 'images/images/ScreenRecording2026-01-23004944-ezgif.com-resize.gif', img: 'images/images/ScreenRecording2026-01-23004944-ezgif.com-resize.gif', layout: 'landscape' }
        ]
    },
    { 
        name: "LANDING PAGE", 
        cat: "ILLUSTRATION", 
        heroColor: "#B85C24",
        description: "The illustrated book project was a journey into the world of digital storytelling, where I sought to create a visual narrative that was both immersive and emotionally resonant. The process involved layering digital charcoal and grain brushes to evoke a sense of depth and texture, allowing the illustrations to breathe and come alive on the page.",
        thumbnail: "images/images/Nightly_Ritual.jpg", 
        img1: "images/images/Forest ESSential-01.png", 
        narrativeStep: "01.",
        narrativeTitle: "Ritual",
        narrative: "Sensory Atmosphere and Daily Regimen This landing page captures the meditative essence of Ayurvedic self-care through a warm, \"vanity-top\" perspective. By blending realistic product renders with hand-drawn elements like incense smoke and traditional combs, the design invites the user into a quiet, personal ritual. It balances product education with a lived-in, atmospheric aesthetic.",
        extraSections: [
            { type: 'dark', title: 'Botanical', text: 'Floral Purity and Organic Origin Centered on the "Luxury of Ayurveda," this layout uses a soft, ethereal floral backdrop to emphasize the botanical roots of the Soundarya collection. The composition uses flowing, hand-illustrated lotuses to frame the products, creating a visual link between the raw ingredient and the refined bottle. It’s a celebration of nature’s potency and feminine elegance.', img: 'images/images/Forest ESSential-02.png', layout: 'landscape' },
            { type: 'light', title: 'Heritage', text: 'Cultural Narrative and Craftsmanship Inspired by traditional Indian miniature paintings and lush forest landscapes, this page positions the brand within a rich cultural heritage. Featuring regal peacocks and intricate floral borders, the visual language elevates the gifting experience into an art form. It connects the "Forest" in the brand name to the "Essential" luxury of its Ayurvedic roots.', img: 'images/images/Forest ESSential-03.png', layout: 'landscape' }
        ]
    }
];

// --- 2. INITIALIZATION & LOADER ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.transform = 'translateY(-100%)';
    }, 1800);
    renderGrid();
});

// --- 3. CUSTOM HEART CURSOR ---
const cursor = document.getElementById('cursor-wrapper');
document.addEventListener('mousemove', (e) => {
    if(cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

function setupMagnetism() {
    const magElements = document.querySelectorAll('.mag-btn');
    magElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            if(window.innerWidth < 1024) return;
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
            el.style.transform = `translate(${x}px, ${y}px)`;
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0, 0)`;
            cursor.classList.remove('cursor-hover');
        });
    });
}

// --- 4. NAVIGATION ---
function slideTo(index) {
    const viewport = document.getElementById('viewport');
    if(window.innerWidth >= 1024) {
        viewport.style.transform = `translateX(-${index * 100}vw)`;
    } else {
        document.querySelectorAll('.page')[index].scrollIntoView({ behavior: 'smooth' });
    }
    closeStudy();
}

// --- 5. GRID GENERATION ---
function renderGrid() {
    const grid = document.getElementById('grid');
    if(!grid) return;
    grid.innerHTML = ''; 

    projects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.thumbnail}" alt="${p.name}">
            <div class="card-info">
                <h3>${p.name}</h3>
                <p>${p.cat}</p>
            </div>`;
        
        card.onclick = (e) => { 
            e.stopPropagation(); 
            openStudy(p, index); 
        };

        card.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        card.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        grid.appendChild(card);
    });
    setupMagnetism();
}

// --- 6. CASE STUDY OVERLAY LOGIC ---
function openStudy(p, index) {
    const content = document.getElementById('overlayContent');
    const overlay = document.getElementById('overlay');
    const nextIndex = (index + 1) % projects.length;
    const nextP = projects[nextIndex];

    const mediaOne = p.video1 
        ? `<video src="${p.video1}" class="process-image" autoplay loop muted playsinline style="width:100%; height:auto; display:block; border-radius:12px;"></video>` 
        : `<img src="${p.img1}" class="process-image" alt="Process 1">`;

    let html = `
        <div class="project-inner-wrapper">
            <div class="project-section section-hero" style="background-color: ${p.heroColor};">
                <h1 class="project-title-large">${p.name}</h1>
                <p style="max-width: 700px; margin: 0 auto; opacity: 0.8;">${p.description}</p>
            </div>

            <div class="project-section section-light">
                <div class="process-grid">
                    <div>
                        <p class="project-step-number">${p.narrativeStep || '01.ideate'}</p>
                        <h2 style="font-size: 3rem; margin-bottom: 20px;">${p.narrativeTitle || 'The Narrative'}</h2>
                        <p>${p.narrative}</p>
                    </div>
                    ${mediaOne}
                </div>
            </div>`;

    if (p.extraSections) {
        p.extraSections.forEach((sec, i) => {
            const stepNum = (i + 2).toString().padStart(2, '0');
            
            // SPECIAL CASE: Illustrated Book gets centered layout, no text
            if (p.name === "ILLUSTRATED BOOK") {
                html += `
                <div class="project-section section-${sec.type}" style="display: flex; justify-content: center; align-items: center; padding: 100px 5%;">
                    <div style="width: 100%; max-width: 1000px; text-align: center;">
                         <img src="${sec.img}" class="process-image" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);" alt="${sec.title}">
                    </div>
                </div>`;
            } else {
                // DEFAULT GRID LAYOUT
                const imgClass = sec.layout === 'portrait' ? 'process-image portrait-mode' : 'process-image';
                const imgStyle = sec.layout === 'portrait' ? 'style="max-width: 75%; height: auto; margin: 0 auto; display: block;"' : '';
                
                html += `
                <div class="project-section section-${sec.type}">
                    <div class="process-grid" style="${i % 2 === 0 ? 'direction: rtl;' : 'direction: ltr;'}">
                        <div style="direction: ltr;">
                            <p class="project-step-number">${stepNum}.${sec.title.toLowerCase()}</p>
                            <h2 style="font-size: 3rem; margin-bottom: 20px;">${sec.title}</h2>
                            <p>${sec.text}</p>
                        </div>
                        <div style="direction: ltr;">
                            <img src="${sec.img}" class="${imgClass}" ${imgStyle} alt="${sec.title}">
                        </div>
                    </div>
                </div>`;
            }
        });
    }

    html += `
            <div class="next-project-trigger" onclick="loadNextProject(${nextIndex})">
                <h4>Up Next</h4>
                <div class="next-title">${nextP.name} →</div>
            </div>
        </div>
    `;

    content.innerHTML = html;
    overlay.classList.add('open');
    overlay.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
}

function loadNextProject(index) {
    const content = document.getElementById('overlayContent');
    const overlay = document.getElementById('overlay');
    content.style.opacity = '0';
    content.style.transition = '0.4s ease-in';
    setTimeout(() => {
        openStudy(projects[index], index);
        overlay.scrollTo({ top: 0, behavior: 'smooth' });
        content.style.opacity = '1';
    }, 400);
}

function closeStudy() {
    const overlay = document.getElementById('overlay');
    if(overlay) overlay.classList.remove('open');
    if(window.innerWidth < 1024) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

// --- 7. CLICK PARTICLE POP ---
document.addEventListener('mousedown', createParticles);

function createParticles(e) {
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'heart-shape';
        p.style.position = 'fixed';
        p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
        p.style.width = '8px'; p.style.height = '8px';
        p.style.backgroundColor = 'var(--accent)';
        p.style.pointerEvents = 'none';
        const tx = (Math.random() - 0.5) * 200 + 'px';
        const ty = (Math.random() - 0.5) * 200 + 'px';
        const anim = p.animate([
            { transform: 'translate(-50%, -50%) rotate(-45deg) scale(1)', opacity: 1 },
            { transform: `translate(${tx}, ${ty}) rotate(-45deg) scale(0)`, opacity: 0 }
        ], { duration: 600, easing: 'ease-out' });
        document.body.appendChild(p);
        anim.onfinish = () => p.remove();
    }
}