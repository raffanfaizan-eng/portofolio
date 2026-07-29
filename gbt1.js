const portfolioData = {
  name: "Raffan Ilham ",
  tagline: "Saya pemula membuat website modern, cepat, dan nyaman untuk dilihat.",
  about:
    "Saya adalah pengembang web yang senang membangun tampilan sederhana namun berkesan. Saya fokus pada pengalaman pengguna, desain responsif, dan kode yang mudah dipelihara.",
  info: [
    { label: "Lokasi", value: "Indonesia" },
    { label: "Spesialis", value: "WebDeveloper" },
    { label: "Email", value: "raffanfaizan@email.com" },
  ],
  projects: [
    {
      title: "Pembelajaran coding dalam bentuk website",
      description: "websitemodern dengan desain yang ringan dan elegan.",
      link: "#",
      image: "assets/PHOTO-2026-07-30-02-20-29.jpg",
    },
    {
      title: "Dashboard Admin",
      description: "Interface dashboard untuk melihat data dengan tampilan bersih.",
      link: "#",
      image: "assets/PHOTO-2026-07-30-02-20-29.jpg",
    },
    {
      title: "Portofolio Pribadi",
      description: "Website pribadi yang cocok untuk menampilkan karya dan biodata.",
      link: "#",
      image: "assets/PHOTO-2026-07-30-02-20-29.jpg",
    },
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma", "Python"],
  email: "raffanfaizan@email.com",
};

async function loadProfileImage() {
  const profileImage = document.getElementById("profile-image");
  const candidates = [
    "assets/PHOTO-2026-07-30-02-20-29.jpg",
    "assets/profile.webp",
    "assets/profile.png",
    "assets/profile.svg",
  ];

  for (const src of candidates) {
    try {
      const response = await fetch(src, { method: "HEAD" });
      if (response.ok) {
        profileImage.src = src;
        return;
      }
    } catch (error) {
      // lanjut ke kandidat berikutnya
    }
  }
}

function renderPortfolio() {
  document.getElementById("name").textContent = portfolioData.name;
  document.getElementById("name-footer").textContent = portfolioData.name;
  document.getElementById("about-text").textContent = portfolioData.about;
  document.getElementById("email-link").href = `mailto:${portfolioData.email}`;
  document.getElementById("email-link").textContent = `Kirim Email ke ${portfolioData.email}`;
  document.getElementById("year").textContent = new Date().getFullYear();

  const infoList = document.getElementById("info-list");
  infoList.innerHTML = portfolioData.info
    .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
    .join("");

  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = portfolioData.projects
    .map((project) => {
      const imageSrc = project.image || "assets/PHOTO-2026-07-30-02-20-29.jpg";
      return `
        <article class="project-card">
          <img class="project-image" src="${imageSrc}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.querySelector('.project-image-fallback').style.display='flex';" />
          <div class="project-image-fallback">Preview Proyek</div>
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Lihat proyek</a>
          </div>
        </article>
      `;
    })
    .join("");

  const skillsGrid = document.getElementById("skills-grid");
  skillsGrid.innerHTML = portfolioData.skills
    .map((skill) => `<span class="skill-tag">${skill}</span>`)
    .join("");
}

function typeTagline() {
  const taglineEl = document.getElementById("tagline");
  const text = portfolioData.tagline;
  let index = 0;

  const interval = setInterval(() => {
    taglineEl.textContent = text.slice(0, index);
    index += 1;

    if (index > text.length) {
      clearInterval(interval);
    }
  }, 35);
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    const isOpen = document.body.classList.contains("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderPortfolio();
typeTagline();
setupNavigation();
loadProfileImage();
