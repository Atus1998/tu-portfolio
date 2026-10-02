import { profile, services, projects, experience, skills, education } from "@/data/profile";

function Links() {
  const items = [
    { label: "Hire me on Upwork", href: profile.upwork, primary: true },
    { label: "Email me", href: profile.email ? `mailto:${profile.email}` : "", primary: !profile.upwork },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Download CV", href: profile.cv },
  ].filter((l) => l.href);
  return (
    <div className="links">
      {items.map((l) => (
        <a key={l.label} href={l.href} className={l.primary ? "btn btn-primary" : "btn"}
           {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a href="#top" className="logo">{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-top">
            {profile.photo
              ? <img src={profile.photo} alt={profile.name} className="avatar" width={84} height={84} />
              : <div className="avatar" aria-hidden="true">TN</div>}
            <div>
              <strong>{profile.name}</strong>
              <p className="eyebrow">{profile.role} · {profile.location}</p>
            </div>
          </div>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <Links />
        </section>

        <section id="services" className="wrap section">
          <h2>What I can do for you</h2>
          <div className="grid3">
            {services.map((s) => (
              <article key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="wrap section">
          <h2>Selected work</h2>
          <p className="muted small">Client work is under NDA, so I describe it without names or code.</p>
          <div className="grid2">
            {projects.map((p) => (
              <article key={p.title} className="card project">
                <p className="eyebrow">{p.company}</p>
                <h3>{p.title}</h3>
                <dl>
                  <dt>Problem</dt><dd>{p.problem}</dd>
                  <dt>What I did</dt><dd>{p.solution}</dd>
                  <dt>Result</dt><dd>{p.result}</dd>
                </dl>
                <ul className="tags" aria-label="Tech stack">
                  {p.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {p.link ? <a href={p.link} className="more" target="_blank" rel="noopener noreferrer">View project →</a> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap section two-col">
          <div>
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.company}>
                  <span className="muted small">{e.period}</span>
                  <strong>{e.role}</strong>
                  <span>{e.company}</span>
                </li>
              ))}
            </ol>
            <p className="muted small">{education}</p>
          </div>
          <div>
            <h2>Skills</h2>
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <ul className="tags">{list.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Let’s work together</h2>
          <p className="lead">Tell me about your project. I usually reply within 24 hours (GMT+7).</p>
          <Links />
        </section>
      </main>

      <footer className="wrap footer muted small">
        <span className="saigon">{profile.tagline}</span> · © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
