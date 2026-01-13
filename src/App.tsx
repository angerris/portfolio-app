import { useState, type JSX } from "react";
import "./App.css";
import { CustomCursor } from "./CustomCursor";

type WorkItem = (typeof workItems)[number];
type WorkItemTitle = WorkItem["title"];

type Section = "main" | "about" | WorkItemTitle;

const workItems = [
  { title: "Flinta", role: "Art Direction", year: "2025" },
  { title: "Spinx9", role: "Graphic Design", year: "2025" },
  { title: "BigBig Studio", role: "Art Direction", year: "2024" },
  { title: "Mushroom", role: "Art Direction", year: "2024" },
  { title: "Lusavor Jewellery", role: "Graphic Design", year: "2023" },
  { title: "Yoyo Kids", role: "Graphic Design", year: "2025" },
  { title: "Katun", role: "Graphic Design", year: "2023" },
  { title: "Lareman", role: "Art Direction", year: "2025" },
  { title: "Hornet Flow", role: "Art Direction", year: "2024" },
  { title: "Privateum Global", role: "Art Direction", year: "2023" },
];

const workItems2 = [
  { title: "Fast Shift", role: "Art Director", year: "2024–present" },
  {
    title: "European School in Armenia",
    role: "Graphic Design Specialist, Lecturer",
    year: "Project Based",
  },
  { title: "Ucom Company", role: "Senior Graphic Designer", year: "2022–2024" },
  { title: "BSMI Innovations", role: "Trainer, Graphic Designer", year: "2021–2022" },
  { title: "Base Studio", role: "Graphic/Web Designer, Illustrator", year: "2018–2021" },
];

type ProjectMedia =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "video"; src: string; poster?: string };

type ProjectContent = {
  title: string;
  year: string;
  description: string;
  media: ProjectMedia[];
};

const projectContentByTitle: Record<WorkItemTitle, ProjectContent> = {
  Flinta: {
    title: "Flinta",
    year: "2025",
    description:
      "Write your Flinta description here. 2–5 lines. Mention what you did and what the goal was.",
    media: [
      { kind: "image", src: "/projects/flinta/1.png" },
      { kind: "video", src: "/projects/flinta/2v.mp4" },
      { kind: "image", src: "/projects/flinta/3.png" },
      { kind: "video", src: "/projects/flinta/4v.mp4" },
      { kind: "video", src: "/projects/flinta/5v.mp4" },
      { kind: "image", src: "/projects/flinta/6.png" },
    ],
  },
  Spinx9: {
    title: "Spinx9",
    year: "2025",
    description:
      "SpinX9 — 3D Character & Animation DesignFor SpinX9, a Yerevan-based electronic music event series, I created a custom 3D character and animation assets to support their visual identity. The work aimed to capture the underground, experimental energy of their events while keeping a bold and recognizable aesthetic. The designs were integrated into their social media presence and event promotion, helping the brand stand out with a modern and immersive visual style.",
    media: [
      { kind: "image", src: "/projects/spinx9/1.png"},
      { kind: "video", src: "/projects/spinx9/2v.mp4"},
      { kind: "image", src: "/projects/spinx9/3.png"},
      { kind: "image", src: "/projects/spinx9/4.png"},
      { kind: "video", src: "/projects/spinx9/5v.mp4"},
      { kind: "image", src: "/projects/spinx9/6.png"},
    ],
  },
  "BigBig Studio": {
    title: "BigBig Studio",
    year: "2024",
    description:
      "bigbig studio — Visual Identity & Creative Direction As Art Director, I developed the visual identity for bigbig studio, a creative hub focused on graphic design, branding, and interface construction. The design direction emphasized minimalism and adaptability, creating a bold yet flexible system that reflects the studio’s imaginative philosophy — “it’s never about the size but the imagination.” The identity was crafted to work seamlessly across digital and print, reinforcing the studio’s contemporary and experimental character.",
    media: [
      { kind: "image", src: "/projects/bigbig/1.png", alt: "BigBig 1" },
      { kind: "image", src: "/projects/bigbig/2.png", alt: "BigBig 2" },
    ],
  },
  Mushroom: {
    title: "Mushroom",
    year: "2024",
    description:
      "Write your Mushroom description here.",
    media: [
      { kind: "image", src: "/projects/mushroom/1.png"},
      { kind: "video", src: "/projects/mushroom/2v.mp4"},
      { kind: "image", src: "/projects/mushroom/3.png"},
      { kind: "image", src: "/projects/mushroom/4.png"},
      { kind: "video", src: "/projects/mushroom/5v.mp4" },
      { kind: "image", src: "/projects/mushroom/6.png"},
    ],
  },
  "Lusavor Jewellery": {
    title: "Lusavor Jewellery",
    year: "2023",
    description:
      "Lusavor — Logo & Visual Identity DesignI developed the logo and brand identity for Lusavor, an Armenian silver jewelry brand. The goal was to create a minimal yet elegant identity that reflects the brand’s concept of light and timeless design. The visual system highlights clarity and sophistication, allowing the jewelry itself to remain the centerpiece while reinforcing a strong, memorable brand presence across digital and print platforms.",
    media: [
      { kind: "image", src: "/projects/lusavor/1.png", alt: "Lusavor 1" },
      { kind: "image", src: "/projects/lusavor/2.png", alt: "Lusavor 2" },
      { kind: "image", src: "/projects/lusavor/3.png", alt: "Lusavor 3" },
      { kind: "image", src: "/projects/lusavor/4.png", alt: "Lusavor 4" },
      { kind: "image", src: "/projects/lusavor/5.png", alt: "Lusavor 5" },
      { kind: "image", src: "/projects/lusavor/6.png", alt: "Lusavor 6" },
    ],
  },
  "Yoyo Kids": {
    title: "Yoyo Kids",
    year: "2025",
    description:
      "As Art Director, I created the full identity system for YOYO Production, an e-wallet designed for kids. My work included brand naming, logo design, and the development of a playful yet trustworthy visual and UI identity. The goal was to balance a child-friendly aesthetic with clarity and usability, ensuring both kids and parents feel engaged and confident while using the product. The result is a cohesive brand language that works seamlessly across digital platforms and product communication.",
    media: [
      { kind: "image", src: "/projects/yoyo/1.png" },
      { kind: "image", src: "/projects/yoyo/2.png" },
      { kind: "video", src: "/projects/yoyo/3v.mp4" },
      { kind: "image", src: "/projects/yoyo/4.png" },
      { kind: "image", src: "/projects/yoyo/5.png" },
      { kind: "image", src: "/projects/yoyo/6.png" },
    ],
  },
  Katun: {
    title: "Katun",
    year: "2023",
    description:
      "Write your Katun description here.",
    media: [
      { kind: "image", src: "/projects/katun/1.png", alt: "Katun 1" },
      { kind: "image", src: "/projects/katun/2.png", alt: "Katun 2" },
      { kind: "video", src: "/projects/katun/3v.mp4" },
      { kind: "image", src: "/projects/katun/4.png", alt: "Katun 4" },
      { kind: "image", src: "/projects/katun/5.png", alt: "Katun 5" },
      { kind: "image", src: "/projects/katun/6.png", alt: "Katun 6" },
    ],
  },

  
  Lareman: {
    title: "Lareman",
    year: "2025",
    description:
      "Write your Lareman description here. Short, clean, portfolio style.",
    media: [
      { kind: "image", src: "/projects/lareman/1.png" },
      { kind: "image", src: "/projects/lareman/2.png" },
      { kind: "image", src: "/projects/lareman/3.png" },
      { kind: "image", src: "/projects/lareman/4.png" },
      { kind: "image", src: "/projects/lareman/5.png" },
      { kind: "image", src: "/projects/lareman/6.png" },
    ],
  },
  "Hornet Flow": {
    title: "Hornet Flow",
    year: "2024",
    description:
      "For this event promotion, I designed and textured custom 3D characters and created dynamic animations that bring them to life in motion. My work focused on integrating visual flair with fluid movement to match the event’s energy, delivering an engaging experience across digital reels and event media.",
    media: [
      { kind: "image", src: "/projects/hornet/2.png"},
      { kind: "video", src: "/projects/hornet/3v.mp4"},
      { kind: "image", src: "/projects/hornet/4.png"},
      { kind: "image", src: "/projects/hornet/5.png"},
      { kind: "image", src: "/projects/hornet/6.png"},
    ],
  },
  "Privateum Global": {
    title: "Privateum Global",
    year: "2023",
    description:
      "Write your Privateum Global description here.",
    media: [
      { kind: "image", src: "/projects/privateum/1.png", alt: "Privateum 1" },
      { kind: "image", src: "/projects/privateum/2.png", alt: "Privateum 2" },
      { kind: "image", src: "/projects/privateum/3.png", alt: "Privateum 3" },
      { kind: "image", src: "/projects/privateum/4.png", alt: "Privateum 4" },
      { kind: "image", src: "/projects/privateum/5.png", alt: "Privateum 5" },
      { kind: "image", src: "/projects/privateum/6.png", alt: "Privateum 6" },
    ],
  },
};

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<Section>("main");

  const isProjectSection = activeSection !== "main" && activeSection !== "about";
  const activeProject = isProjectSection ? projectContentByTitle[activeSection] : null;

  return (
    <>
      <CustomCursor size={48} />

      <div className="app-row">
        <aside className="sidebar">
          <div className="main-nav">
            <a className="name" onClick={() => setActiveSection("main")}>
              Alen Aslanyan
            </a>
            <a className="about" onClick={() => setActiveSection("about")}>
              About
            </a>
            <a className="instagram" target="_blank" href="https://www.instagram.com/iamalenaslanyan/">
              Instagram
            </a>
          </div>

          <div className="bio-main">
            <div className="bio-container">
              <p className="bio">
                27 years old, designer, art director and 3D enthusiast. A little underground music nerd. Based in Armenia,
                Yerevan and currently working at Soft Construct.
              </p>
            </div>

            {activeSection === "main" && <img src="photo.png" alt="Example" className="photo" />}

            {activeSection === "about" && (
              <div className="bio-container-bottom">
                <p className="bio">
                  Armenian multidisciplinary designer and art director with 8+ years of experience working on visual
                  campaigns, visual identities, typography, editorial, motion design and especially helping underground
                  music artist to promote their music through my work. My inspiration comes from my own work of curation
                  based on art, design, culture and music.
                </p>
              </div>
            )}
            {activeProject && (
  <>
    {/* YEAR in the middle */}
    <div className="project-year-mid">{activeProject.year}</div>

    {/* Description at the same position as bio-container-bottom */}
    <div className="bio-container-bottom project-desc-bottom">
      <p className="project-sidebar-label">Description</p>
      <p className="project-sidebar-description">{activeProject.description}</p>
    </div>
  </>
)}


          </div>

        </aside>

        {/* ONLY CHANGE: add content-project class when project */}
        <main className={`content ${isProjectSection ? "content-project" : ""}`}>
          {activeSection === "about" && (
           <div className="content-about">
  <img src="photo2.png" alt="Example" className="photo2" />

  <h3 className="section-title">Work Experience</h3>

  <div className="work-scroll w-scroll-about">

    <ul className="work-table w-table-about original-grid">
      {workItems2.map((item) => (
        <li key={item.title} className="work-row">
          <span className="w-title-about">{item.title}</span>
          <div className="w-role-container-about">
            <span className="w-role-about">{item.role}</span>
          </div>
          <span className="w-year-about">{item.year}</span>
        </li>
      ))}
    </ul>

    <ul className="work-table w-table-about work-grid-compact">
      {workItems2.map((item) => (
        <li key={`${item.title}-compact`} className="work-row work-row-compact">
          <span className="w-title-about w-title-compact">
            {item.title} <span className="item-role-compact">({item.role})</span>
          </span>
          <span className="w-year-about">{item.year}</span>
        </li>
      ))}
    </ul>

  </div>

            </div>
          )}

          {activeSection === "main" && (
            <>
              <div className="content-top">
                <p className="hero-title">PORTFOLIO</p>
                <div className="year-stack">
                  <span>2023</span>
                  <span>/2025</span>
                </div>
              </div>

              <h3 className="section-title">Work Selection</h3>
              <div className="work-scroll">
                <ul className="work-table">
                  {workItems.map((item) => (
                    <li
                      key={item.title}
                      data-cursor="hover"
                      className={`work-row ${activeSection === item.title ? "active" : ""}`}
                      onClick={() => setActiveSection(item.title)}
                    >
                      <span className="w-title">{item.title}</span>
                      <div className="w-role-container">
                        <span className="w-role">{item.role}</span>
                      </div>
                      <span className="w-year">{item.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

         {activeProject && (
  <div className="project-media">
    {activeProject.media.map((mediaItem, index) => {
      if (mediaItem.kind === "image") {
        return (
          <img
            key={`${mediaItem.src}-${index}`}
            src={mediaItem.src}
            alt={mediaItem.alt ?? activeProject.title}
            className="project-image"
            loading="lazy"
          />
        );
      }

      return (
        <video
          key={`${mediaItem.src}-${index}`}
          className="project-video"
          src={mediaItem.src}
          poster={mediaItem.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      );
    })}
  </div>
)}


        {!isProjectSection && (
  <footer className="footer">
    <div className="footer-links">
      <a href="mailto:helloalenaslanyan@gmail.com">Email</a>
      <a
        href="https://am.linkedin.com/in/alen-aslanyan-7a8285244"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>

    {activeSection === "main" && (
      <div className="footer-note">Hire me, I’m cool</div>
    )}
     {activeSection === "about" && (
            <div className="download">
                <p className="cv-text">More information on my CV below:</p>
                <a href="Alen_Aslanyan_CV.pdf" download="Alen Aslanyan CV.pdf">
                  Download
                </a>
              </div>
    )}

  </footer>
)}

        </main>
      </div>
    </>
  );
}

export default App;
