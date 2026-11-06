import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin,
  Mail, MapPin, Menu, Phone, X, Code2, Database, Server, Layers3,
  BriefcaseBusiness, GraduationCap, ExternalLink, Download, Sparkles
} from "lucide-react";
import "./style.css";

const skills = [
  { title: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"], icon: Code2 },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"], icon: Server },
  { title: "Database", items: ["MySQL"], icon: Database },
  { title: "Tools & workflow", items: ["Git", "GitHub", "VS Code", "Agile"], icon: Layers3 },
];

const projects = [
  {
    number: "01",
    name: "E-Book Learning Platform",
    type: "FULL-STACK WEB APPLICATION",
    description: "A learning platform built around user authentication, course access and online payments. Includes a MySQL data layer for managing users, courses and transactions.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Razorpay"],
    note: "PAYMENT GATEWAY INTEGRATION",
  },
  {
    number: "02",
    name: "AI-Powered Complaint Resolution Chatbot",
    type: "CHATBOT / CUSTOMER SUPPORT",
    description: "A complaint-support experience designed to categorize incoming issues, provide real-time responses, track complaint status and escalate unresolved cases.",
    stack: ["Python", "Flask / Django", "React.js", "JavaScript", "CSS"],
    note: "COMPLAINT TRACKING & ESCALATION",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const nav = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span>YV</span><i>.</i></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map((item) => {
            const id = item.toLowerCase();
            return <a key={item} href={`#${id}`} onClick={closeMenu} className={active === id ? "active" : ""}>{item}</a>;
          })}
          <a className="nav-cta" href="mailto:vankaryash363@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
            <p className="hero-kicker">HELLO, I'M YASH VANKAR</p>
            <h1>Building digital<br/><span>experiences</span> that<br/>work beautifully.</h1>
            <p className="hero-desc">I'm a <strong>Full Stack Web Developer</strong> focused on creating responsive interfaces, reliable backends and useful web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="/Yash_Vankar_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View résumé</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/YashE-book" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/in/yash-vankar-691062310/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span><MapPin size={16}/> Vadodara, India</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-top"><span>DEVELOPER / PORTFOLIO</span><span>2026 — PRESENT</span></div>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="visual-core">
              <div className="core-cross">✳</div>
              <div className="core-initials">YV<span>.</span></div>
              <div className="core-caption">DESIGN · DEVELOP · DEPLOY</div>
            </div>
            <div className="float-card card-code"><span className="mini-dot"/> <span>const</span> ideas = "build";</div>
            <div className="float-card card-stack"><b>MY STACK</b><span>REACT / NODE / MYSQL</span></div>
            <div className="visual-bottom"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></div>
          </div>
          <div className="hero-index">01 <span>/</span> 06</div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>CURIOUS BY NATURE</span><i>✳</i><span>BUILT WITH PURPOSE</span><i>✳</i><span>ALWAYS LEARNING</span><i>✳</i><span>DETAIL-ORIENTED</span>
          </div>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading number="01" label="A LITTLE ABOUT ME" title={<>Turning ideas into<br/><em>useful products.</em></>}/>
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">I enjoy working across the stack — from shaping a clean user interface to building the APIs and database logic behind it.</p><p className="muted-copy">I completed my B.Tech in Information Technology from Parul University and gained hands-on full-stack experience during my internship at Enlighten Infosystems. I like solving practical problems, learning new tools and making the web feel simpler to use.</p></div>
            <div className="about-facts">
              <div><span>01 / EDUCATION</span><b>B.Tech — Information Technology</b><small>Parul University · 2021–2025</small></div>
              <div><span>02 / EXPERIENCE</span><b>Full Stack Web Development Intern</b><small>Enlighten Infosystems · Dec 2024–Apr 2025</small></div>
              <div><span>03 / BASED IN</span><b>Vadodara, Gujarat</b><small>India · Open to opportunities</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <SectionHeading number="02" label="WHAT I WORK WITH" title={<>Tools for the<br/><em>whole stack.</em></>}/>
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span>0{i+1}</span><Icon size={21}/></div>
              <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading number="03" label="THE JOURNEY SO FAR" title={<>Learning by<br/><em>building.</em></>}/>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">DEC 2024 — APR 2025</div>
              <div className="timeline-marker"/>
              <div className="timeline-content">
                <div className="timeline-meta">INTERNSHIP <span>VADODARA, GUJARAT</span></div>
                <h3>Web Development Intern <span>· Full Stack</span></h3>
                <h4>Enlighten Infosystems</h4>
                <ul>
                  <li>Developed full-stack web applications using React.js and Node.js, with a focus on application responsiveness.</li>
                  <li>Built RESTful APIs and integrated the Razorpay payment gateway for online payment processing.</li>
                  <li>Optimized MySQL queries and collaborated with the team using Git and an Agile workflow.</li>
                </ul>
                <div className="metric-row"><div><b>~25%</b><small>RESPONSIVENESS IMPROVEMENT</small></div><div><b>20%</b><small>FASTER DATA RETRIEVAL</small></div></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 — 2025</div>
              <div className="timeline-marker"/>
              <div className="timeline-content education-content">
                <div className="timeline-meta">EDUCATION</div>
                <h3>Bachelor of Technology</h3><h4>Parul University · Information Technology</h4>
                <p className="muted-copy">Built a foundation in software development, programming and information technology.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <SectionHeading number="04" label="SELECTED PROJECTS" title={<>A few things I've<br/><em>worked on.</em></>}/>
          <div className="projects-list">
            {projects.map((project) => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
              <div className="project-aside"><div className="project-art"><div className="art-window"><div className="art-dots"><i/><i/><i/></div><div className="art-lines"><b/><b/><b/><b/></div><div className="art-block"/></div><span className="art-orbit"/></div><span className="project-note">{project.note}</span></div>
            </article>)}
          </div>
          <div className="github-callout"><span>MORE CODE, EXPERIMENTS & LEARNING</span><a href="https://github.com/YashE-book" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={17}/></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <SectionHeading number="05" label="HAVE A PROJECT IN MIND?" title={<>Let's make<br/><em>something matter.</em></>}/>
            <div className="contact-bottom">
              <p>I'm open to full-stack and web development opportunities. If you'd like to connect, discuss a project or share an opportunity, my inbox is open.</p>
              <a className="contact-email" href="mailto:vankaryash363@gmail.com">vankaryash363@gmail.com <ArrowUpRight size={22}/></a>
            </div>
            <div className="contact-links">
              <a href="mailto:vankaryash363@gmail.com"><Mail size={17}/> Email</a>
              <a href="tel:+919328176164"><Phone size={17}/> +91 93281 76164</a>
              <a href="https://www.linkedin.com/in/yash-vankar-691062310/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
              <a href="https://github.com/YashE-book" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span>YV</span><i>.</i></a><span>DESIGNED & BUILT BY YASH VANKAR</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} · ALL RIGHTS RESERVED</small></footer>
    </div>
  );
}

function SectionHeading({number, label, title}) {
  return <div className="section-heading"><div className="section-label"><span>{number}</span>{label}</div><h2>{title}</h2></div>;
}

createRoot(document.getElementById("root")).render(<App />);