import { useState, type JSX } from "react";
import "./App.css";
import { CustomCursor } from "./CustomCursor";

type WorkItem = (typeof workItems)[number];
type WorkItemTitle = WorkItem["title"];

type Section = "main" | "about" | WorkItemTitle;

const workItems = [
  { title: "Flinta", role: "Art Direction", year: "2025" },
  { title: "Spinx9", role: "Graphic Design", year: "2025" },
  { title: "BigBig Studio", role: "Art Direction", year: "2023" },
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
      "To create the brand identity for FLINTA Frequency, I explored the intersection of nature and synthesis. The project required a visual language that felt both raw and polished, aiming for an “earthly ethereal” aesthetic. The result is a welcoming, immersive interface where every element was crafted to foster an inclusive, community-driven atmosphere for listeners and artists alike.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749096/1_hgwcju.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749179/2v_fht9ia.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749098/3_ao3swd.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768764617/flinta_2SHORT_1080x900_xsowsd.mp4" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749223/5v_j51slq.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749100/6_heqyv8.png" },
    ],
  },
  Spinx9: {
    title: "Spinx9",
    year: "2025",
    description:
      "Born from the raw energy of Armenia's underground music and entertainment scene, I developed this Red Diva to serve as the face of the SpinX9 electronic music event series. This character transitioned from a creative concept into a viral promotional asset, acting as the lead animation for the brand’s digital campaign and setting the high tone for the entire event brand.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749896/1_f2aq6t.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749978/2v_h9wy83.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749903/3_nbwfgx.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749897/4_ec8gsm.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768750016/5v_nuffip.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749900/6_ryw5pb.png" },
    ],
  },
  "BigBig Studio": {
    title: "BigBig Studio",
    year: "2023",
    description:
      "bigbig is an independent visual studio, a platform for high-concept experimentation and boundary-pushing design. Beyond its formal branding, the studio’s Instagram acts as a living portfolio, showcasing everything from raw creative exercises to realized commercial products. It is a space dedicated to ideas that demand total creative freedom.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750530/Group_75_n57u4r.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768764138/BIG_1_chtq8x_3_r4vprv.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750537/Mask_group_jm187b.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750538/Mask_group-2_g1jmen.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750544/Mask_group-3_s9kva9.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750536/Mask_group-1_y1pggt.png" },
    ],
  },
  Mushroom: {
    title: "Mushroom",
    year: "2024",
    description:
      "This fungi-dancer hybrid was created for the promotion of SpinX9’s second event. “DANCE!” is the only message that the visual carries, which is truly important, yet sometimes overlooked in our everyday life.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749598/1_qcra5p.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749880/2v_labpi5.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749603/3_qaaktu.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749602/4_ywdrgb.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749643/5v_dobozr.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749604/6_gv0jfp.png" },
    ],
  },
  "Lusavor Jewellery": {
    title: "Lusavor Jewellery",
    year: "2023",
    description:
      "Branding a product that names itself 'luminous' requires a delicate touch. For Lusavor Jewelry, the challenge was to create a bold identity that felt as high-end as the handcrafted silver pieces it represents. By focusing on minimalist typography and a “less is more” layout, the branding acts as a premium frame for the brand’s iconic Armenian-inspired silhouettes. It is a visual identity that doesn't compete for attention, but rather provides a solid, modern stage for a product that carries its own light.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750038/Group_50_trvpow.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749584/2_eoyvwk.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749578/3_cxbyob.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749583/4_nt8htc.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749586/5_y3fnma.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749580/6_ccgnn1.png" },
    ],
  },
  "Yoyo Kids": {
    title: "Yoyo Kids",
    year: "2025",
    description:
      "For YoYo, a smart wallet designed for juniors, my role expanded beyond traditional design into comprehensive art direction. While I developed the core branding, visual identity, and 3D assets, I also led the creative execution of the promotional campaign. This included overseeing the photoshoot from the ground up: managing casting, wardrobe selection, and set design to ensure the final imagery perfectly captured the brand’s youthful yet secure spirit.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750183/Group_52_rfxdjm.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749416/2_hvfyax.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768764744/yoyo_1_1080x900_d8fxcn.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749415/4_ddnkwa.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749420/5_fiqjub.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749409/6_sib4hj.png" },
    ],
  },
  Katun: {
    title: "Katun",
    year: "2023",
    description:
      "Meet Katun: a conceptual NFT mascot where punk-rock attitude meets high-fashion glamour. The character was designed to push the boundaries of digital toy aesthetics. From its origins as a digital collectible to its upcoming debut as a custom designer keychain, Katun represents the evolution of character design into the real world.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749358/1_sxzhg4.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749354/2_htwsih.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749396/3v_ammgpi.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749361/4_yjqkrc.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749363/5_xilglm.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749359/6_vytiac.png" },
    ],
  },
  Lareman: {
    title: "Lareman",
    year: "2025",
    description:
      "For Lareman Online Gift Shop the goal was to build a brand identity that felt both nostalgic and energetic. I used a vibrant, classic palette of primary colors that mirror the excitement and emotional connection of a perfectly chosen gift. The project involved creating a versatile visual language applied to everything from shipping boxes and business cards to promotional apparel, ensuring a memorable brand presence at every customer interaction.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750093/Group_51_hk96iq.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749553/2_o5jp3f.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749555/3_lhrf0e.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749554/4_rscca0.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749555/5_obc47k.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750139/Mask_group_16_bzbk7x.png" },
    ],
  },
  "Hornet Flow": {
    title: "Hornet Flow",
    year: "2024",
    description:
      "It began as an exploration into bio-animation and the study of organic movement, evolved into this bioluminescent, fuzzy hornet sequence and then found its home as a music event visualizer. With this animation I wanted to sync the visual to the natural rhythm of a hornet’s wing-buzz and to step away from human-made sounds and listen to the primal music mother nature has to offer.",
    media: [
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768764665/bee1_1080x1139_mzsezs.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749489/2_mmgrgc.png" },
      { kind: "video", src: "https://res.cloudinary.com/ddqyj0lhv/video/upload/q_auto,f_auto/v1768749915/bee2_iyqz59.mp4" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749491/4_mcvkqs.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749491/5_fcw1qv.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749492/6_iz9n4x.png" },
    ],
  },
  "Privateum Global": {
    title: "Privateum Global",
    year: "2023",
    description:
      "ON is a hub for the ultimate music enthusiasts. This project covers the full branding spectrum, blending digital interfaces with physical assets to connect melomaniacs across all musical boundaries.",
    media: [
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749888/1_vgrff2.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768750286/Mask_group_17_ooheg7.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749894/3_nqbwng.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749914/4_ijsjyb.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749893/5_h2ddo0.png" },
      { kind: "image", src: "https://res.cloudinary.com/ddqyj0lhv/image/upload/v1768749894/6_e6nqsk.png" },
    ],
  },
};

function FullscreenLoader(): JSX.Element {
  return (
    <div className="fullscreen-loader">
      <img
        src="loader.gif"
        alt="Loading..."
        className="loader-image"
        draggable={false}
      />
    </div>
  );
}

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<Section>("main");

  const isProjectSection = activeSection !== "main" && activeSection !== "about";
  const activeProject = isProjectSection ? projectContentByTitle[activeSection] : null;

  const [mediaLoadingTotalCount, setMediaLoadingTotalCount] = useState(0);
  const [mediaLoadedCount, setMediaLoadedCount] = useState(0);

  const isMediaLoading =
    isProjectSection &&
    mediaLoadingTotalCount > 0 &&
    mediaLoadedCount < mediaLoadingTotalCount;

  function resetMediaLoading(newTotalCount: number): void {
    setMediaLoadingTotalCount(newTotalCount);
    setMediaLoadedCount(0);
  }

  function markOneMediaAsReady(): void {
    setMediaLoadedCount((previousCount) => previousCount + 1);
  }

  return (
    <>
      <CustomCursor size={48} />

      {isMediaLoading && <FullscreenLoader />}

      <div className="app-row">
        <aside className="sidebar">
          <div className="main-nav">
            <a className="name" onClick={() => setActiveSection("main")}>
              Alen Aslanyan
            </a>
            <a className="about" onClick={() => setActiveSection("about")}>
              About
            </a>
            <a
              className="instagram"
              target="_blank"
              href="https://www.instagram.com/iamalenaslanyan/"
            >
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
                <div className="project-year-mid">{activeProject.year}</div>

                <div className="project-desc-bottom">
                  <p className="project-sidebar-label">Description</p>
                  <p className="project-sidebar-description">{activeProject.description}</p>
                </div>
              </>
            )}
          </div>
        </aside>

        <main className={`content ${isProjectSection ? "content-project" : ""}`}>
          {activeSection === "about" && (
            <div className="content-about">
              <img src="photo2.png" alt="Example" className="photo2" />
              <div className="bio-container-bottom-mobile">
                <p className="bio">
                  Armenian multidisciplinary designer and art director with 8+ years of experience working on visual
                  campaigns, visual identities, typography, editorial, motion design and especially helping underground
                  music artist to promote their music through my work. My inspiration comes from my own work of curation
                  based on art, design, culture and music.
                </p>
              </div>

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
                      onClick={() => {
                        const nextProject = projectContentByTitle[item.title];
                        resetMediaLoading(nextProject.media.length);
                        setActiveSection(item.title);
                      }}
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
            onLoad={markOneMediaAsReady}
          />
        );
      }

      return (
        <video
          key={`${mediaItem.src}-${index}`}
          className="project-video"
          src={mediaItem.src}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          onCanPlay={markOneMediaAsReady}
        />
      );
    })}
  </div>
)}


          {!isProjectSection && (
            <footer className="footer">
              <div className="footer-links">
                <a href="mailto:helloalenaslanyan@gmail.com">Email</a>
                <a href="https://am.linkedin.com/in/alen-aslanyan-7a8285244" target="_blank">
                  LinkedIn
                </a>
              </div>

              {activeSection === "main" && <div className="footer-note">Hire me, I’m cool</div>}

              {activeSection === "about" && (
                <>
                  <div className="download">
                    <p className="cv-text">More information on my CV below:</p>
                    <a href="Alen_Aslanyan_CV.pdf" download="Alen Aslanyan CV.pdf">
                      Download
                    </a>
                  </div>
                  <div className="download-mobile">
                    <a href="Alen_Aslanyan_CV.pdf" download="Alen Aslanyan CV.pdf">
                      Download CV 🡣
                    </a>
                  </div>
                </>
              )}
            </footer>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
