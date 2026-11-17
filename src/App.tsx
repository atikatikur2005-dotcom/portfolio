import { useEffect, useState } from "react";
import profileImage from "../Atik_formal.jpg";
import inventoryImage from "../InventoryManagmentSystem.jpg";
import routePlannerImage from "../SmartRoutePlanner.jpg";
import snakeGameImage from "../SnakeGame.jpg";
import studentPortalImage from "../StudentPortal.jpg";
import libraryImage from "../LibraryMangment.jpg";
import hospitalImage from "../HospitalManagmentSystem.jpg";
import bankImage from "../BankManagmentSystem.jpg";
import Atropos from "atropos/react";
import "atropos/css";

type IconName =
  | "arrow"
  | "award"
  | "briefcase"
  | "check"
  | "code"
  | "database"
  | "external"
  | "figma"
  | "github"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "menu"
  | "moon"
  | "sun"
  | "terminal"
  | "tools"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
  figma: <><path d="M9 3h3v6H9a3 3 0 0 1 0-6ZM12 3h3a3 3 0 1 1 0 6h-3V3ZM9 9h3v6H9a3 3 0 1 1 0-6ZM12 9h3a3 3 0 1 1-3 3V9ZM9 15h3v3a3 3 0 1 1-3-3Z" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S17.9.1 15 1.9a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c3 2.7 9 2.7 12 0v-4.5M22 9v6" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  moon: <><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5 9 9 0 1 0 20.5 14.2Z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  tools: <><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L20 16.4a2.5 2.5 0 0 1-3.6 3.6L8.7 12.3a4 4 0 0 1-5-5L6 9.6 8.4 7.2" /></>,
  x: <><path d="M6 6l12 12M18 6 6 18" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const navItems = ["Home", "About", "Skills", "Projects", "Education", "Achievements", "Contact"];
const GITHUB_URL = "https://github.com/atikatikur2005-dotcom";

const skillGroups = [
  { title: "Programming", icon: "code" as IconName, items: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript"], text: "Strong foundation in programming and web technologies, logic, and practical software development." },
  { title: "Data Structures", icon: "database" as IconName, items: ["OOP", "BST", "Hash Table", "Stack", "Graph"], text: "Focused on solving problems with efficient data structures and algorithmic thinking." },
  { title: "Problem Solving", icon: "terminal" as IconName, items: ["Algorithms", "Debugging", "Optimization", "Logic"], text: "Comfortable tackling design challenges and improving solution quality through reasoning." },
  { title: "Productivity", icon: "tools" as IconName, items: ["MS Office", "Documentation", "GitHub", "Collaboration"], text: "Able to work effectively with professional tools for communication, organization, and team-based work." },
];

const projects = [
  { n: "01", title: "Inventory Management System", label: "C · DSA Project", image: inventoryImage, icon: "database" as IconName, description: "A console-based inventory system that combines multiple data structures to manage products efficiently and support reversible operations.", tags: ["C", "BST", "Hash Table", "Stack", "File Handling"], features: ["BST-based product organization and searching", "Hash table lookup using product IDs", "Stack-based undo for recent operations", "Add, search, update, delete, and file persistence"], link: GITHUB_URL },
  { n: "02", title: "Smart Route Planner", label: "C++ · Graph Algorithms", image: routePlannerImage, icon: "layers" as IconName, description: "A route-planning application for finding and analyzing paths between connected locations using fundamental graph algorithms.", tags: ["C++", "Graph", "Dijkstra", "BFS", "DFS", "STL"], features: ["Dijkstra’s algorithm for shortest paths", "BFS and DFS traversal for route exploration", "Graph-based location and connection modeling"], link: GITHUB_URL },
  { n: "03", title: "Snake Game", label: "Python · Game Project", image: snakeGameImage, icon: "terminal" as IconName, description: "A Python-based snake game built with interactive controls, game-loop logic, and a clean, user-friendly implementation.", tags: ["Python", "Game", "Logic", "OOP", "Controls"], features: ["Keyboard-based movement controls", "Score tracking and gameplay flow", "Game loop and state management", "Built as a complete Python game project"], link: GITHUB_URL },
  { n: "04", title: "DIU Student Portal Management System", label: "Java · OOP · In progress", image: studentPortalImage, icon: "graduation" as IconName, description: "A student portal management system for Daffodil International University, designed around object-oriented programming in Java.", tags: ["Java", "OOP", "Student Portal"], features: ["Student information management", "Object-oriented Java design", "Currently in progress"] },
  { n: "05", title: "Library Management System", label: "Java · OOP · Completed", image: libraryImage, icon: "layers" as IconName, description: "A completed Java project applying object-oriented programming concepts to library management.", tags: ["Java", "OOP", "Library Management"], features: ["Completed project", "Built with Java and OOP"] },
  { n: "06", title: "Hospital Management System", label: "Java · OOP · Completed", image: hospitalImage, icon: "briefcase" as IconName, description: "A completed Java project applying object-oriented programming concepts to hospital management.", tags: ["Java", "OOP", "Hospital Management"], features: ["Completed project", "Built with Java and OOP"] },
  { n: "07", title: "Bank Management System", label: "Java · OOP · In progress", image: bankImage, icon: "database" as IconName, description: "A bank management system project being developed in Java using object-oriented programming.", tags: ["Java", "OOP", "Bank Management"], features: ["Account management concepts", "Built with Java and OOP", "Currently in progress"] },
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-title reveal"><span className="eyebrow">{eyebrow}</span><div className="heading">{title}</div>{description && <p>{description}</p>}</div>;
}

function SocialLink({ icon, label, href }: { icon: IconName; label: string; href: string }) {
  return <a className="icon-button" href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon name={icon} /></a>;
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id[0].toUpperCase() + entry.target.id.slice(1));
    }), { rootMargin: "-35% 0px -58%" });
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
    return () => { reveal.disconnect(); sectionObserver.disconnect(); };
  }, []);

  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">AR</span><span className="brand-name">Md. Atikur Rahman</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} className={active === item ? "active" : ""} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <div className="desktop-socials"><SocialLink icon="github" label="GitHub profile" href={GITHUB_URL} /></div>
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
            <span className={dark ? "" : "selected"}><Icon name="sun" size={16} /></span><span className={dark ? "selected" : ""}><Icon name="moon" size={16} /></span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name={menuOpen ? "x" : "menu"} /></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-kicker"><span className="status-dot" /> Available for opportunities</div>
          <div className="portrait-wrap reveal visible">
            <Atropos className="portrait-atropos" activeOffset={14} rotateXMax={10} rotateYMax={10} rotateTouch="scroll-y" shadow={false} highlight={false}>
              <div className="portrait">
                <img src={profileImage} alt="Md. Atikur Rahman" data-atropos-offset="8" />
              </div>
            </Atropos>
            <span className="portrait-tag tag-code"><Icon name="code" size={16} /> Build</span>
            <span className="portrait-tag tag-create"><Icon name="figma" size={16} /> Create</span>
          </div>
          <div className="hero-copy">
            <div className="hero-overline">Hello, I’m</div>
            <div className="display-name">Md. Atikur Rahman</div>
            <div className="hero-title">Computer Science Student<br /><span>Software Developer & Problem Solver</span></div>
            <p>I’m a motivated programmer with a strong interest in C, C++, Java, OOP, data structures, algorithms, and building practical solutions. I enjoy solving real-world problems through efficient coding and clean logic.</p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">View my projects <Icon name="arrow" size={18} /></a>
              <a href="#contact" className="button secondary">Contact me</a>
              <SocialLink icon="github" label="Visit GitHub" href={GITHUB_URL} />
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><i /></a>
        </section>

        <section id="about" className="section about-section">
          <div className="section-grid">
            <SectionTitle eyebrow="01 / About" title="Curious by nature. Driven to build." />
            <div className="about-copy reveal">
              <p className="lead">I build software with a focus on logic, performance, and continuous learning. My areas of strength include C, C++, Java, OOP, data structures and algorithms, and problem solving.</p>
              <p>I enjoy creating efficient applications, challenging myself with algorithmic thinking, and learning new tools that improve my development process. My work is shaped by strong fundamentals, practical coding skills, and a passion for solving meaningful problems.</p>
              <div className="about-note"><Icon name="briefcase" /><span>Currently open to <strong>internships, collaborations, and learning opportunities.</strong></span></div>
            </div>
          </div>
          <div className="stats reveal">
            {[["02", "Year", "CSE Student"], ["05", "Semester", "Current level"]].map(([value, title, desc]) => <div className="stat" key={title}><strong>{value}</strong><span>{title}</span><small>{desc}</small></div>)}
          </div>
        </section>

        <section id="skills" className="section muted-section">
          <SectionTitle eyebrow="02 / Expertise" title="Skills and technical strengths." description="I work with systems, logic, and problem-solving focused tools that help me build reliable software and complete meaningful projects." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => <article className="skill-card reveal" style={{ transitionDelay: `${index * 70}ms` }} key={group.title}>
              <div className="card-icon"><Icon name={group.icon} /></div><span className="card-number">0{index + 1}</span>
              <div className="card-heading">{group.title}</div><p>{group.text}</p>
              <div className="chips">{group.items.map((item, i) => <span key={i}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading-row">
            <SectionTitle eyebrow="03 / Selected work" title="Projects built with purpose." description="A selection of projects that reflect my problem-solving mindset, core programming foundation, and growing software skills." />
            <a href={GITHUB_URL} className="text-link" target="_blank" rel="noreferrer">View my GitHub <Icon name="arrow" size={18} /></a>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => <article className={`project-card reveal project-${index + 1}`} key={project.n}>
              <div className="project-visual">
                <img className="project-image" src={project.image} alt={project.title} loading="lazy" />
                <span className="visual-label">{project.label}</span>
              </div>
              <div className="project-body">
                <span className="project-number">{project.n}</span><div className="card-heading">{project.title}</div><p>{project.description}</p>
                <div className="chips">{project.tags.map((tag, i) => <span key={i}>{tag}</span>)}</div>
                <div className="feature-list">{project.features.map((feature, i) => <span key={i}><Icon name="check" size={15} /> {feature}</span>)}</div>
                {"link" in project && <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub</a></div>}
              </div>
            </article>)}
          </div>
        </section>

        <section id="education" className="section muted-section">
          <SectionTitle eyebrow="04 / Journey" title="Education and continuous growth." />
          <div className="timeline">
            <div className="timeline-line" />
            <article className="timeline-item reveal">
              <div className="timeline-dot"><Icon name="graduation" /></div>
              <div className="timeline-meta"><span>Present</span><small>Undergraduate</small></div>
              <div className="timeline-card">
                <span className="eyebrow">Bachelor’s Degree</span><div className="card-heading">Computer Science and Engineering</div><p className="institution">Daffodil International University</p>
                <div className="chips"><span>Programming</span><span>Data Structures</span><span>Algorithms</span></div>
                <p>Building a solid foundation in logic, software engineering, coding practices, and problem solving while exploring projects across C, C++, Java, and Python.</p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-dot secondary"><span>+</span></div>
              <div className="timeline-meta"><span>Skills</span><small>Core strengths</small></div>
              <div className="timeline-card placeholder-card"><div className="card-heading">Problem Solving, OOP, DSA, and MS Office</div><p>Focused on writing efficient code, understanding algorithms deeply, and working with productivity tools for communication and documentation.</p></div>
            </article>
          </div>
        </section>

        <section id="achievements" className="section">
          <SectionTitle eyebrow="05 / Milestones" title="Learning beyond the classroom." description="I continue building my skills through hands-on projects, algorithmic thinking, and a strong focus on practical software development." />
          <div className="achievements-grid">
            {[
              { title: "Core Programming", detail: "C, C++, Java, Python", icon: "award" },
              { title: "Problem Solving", detail: "Data Structures & Algorithms", icon: "code" },
              { title: "Office & Workflow", detail: "MS Office & documentation", icon: "graduation" }
            ].map((item, i) => <article className="achievement-card reveal" key={item.title}>
              <span className="achievement-icon"><Icon name={item.icon as IconName} /></span><span className="card-number">0{i + 1}</span>
              <div className="card-heading">{item.title}</div><p>{item.detail}</p><span className="empty-label">Strength areas</span>
            </article>)}
          </div>
          <div className="github-panel reveal">
            <div><span className="eyebrow">Coding presence</span><div className="github-title"><Icon name="github" size={34} /> Md. Atikur Rahman</div><p>Explore my GitHub profile for projects, learning work, and solution-focused code across C, C++, Java, and Python.</p></div>
            <a className="button primary" href={GITHUB_URL} target="_blank" rel="noreferrer">View GitHub profile <Icon name="external" size={17} /></a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy reveal">
            <span className="eyebrow">06 / Contact</span><div className="heading">Md. Atikur Rahman</div>
            <p>I’m open to opportunities, internships, collaborations, and learning projects. If you want to connect, reach out and let’s talk about building something useful.</p>
            <div className="contact-list">
              <div><span><Icon name="map" /></span><div><small>Location</small><strong>Bangladesh</strong></div></div>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><span><Icon name="github" /></span><div><small>GitHub</small><strong>github.com/atikatikur2005-dotcom</strong></div></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
          <div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">AR</span><span><strong>Md. Atikur Rahman</strong><small>Software Developer & Problem Solver</small></span></a><div className="footer-socials"><SocialLink icon="github" label="GitHub" href={GITHUB_URL} /></div></div>
          <div className="footer-bottom"><span>© 2026 Md. Atikur Rahman. All rights reserved.</span><div><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></div>
      </footer>
    </div>
  );
}
