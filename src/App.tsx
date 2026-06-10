import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  CloudCog,
  Code2,
  Component,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
  TestTube2,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

const proof = [
  { value: '98%', label: 'client satisfaction' },
  { value: '25+', label: 'international clients' },
  { value: '60+', label: 'web and product builds' },
]

const services = [
  {
    icon: Sparkles,
    title: 'MVP validation',
    detail:
      'Shape the smallest credible product, test the workflow, and prepare the first release without wasting a quarter.',
    stack: ['Discovery', 'UX flows', 'Prototype'],
  },
  {
    icon: Component,
    title: 'Product development',
    detail:
      'Design and engineer web, mobile, and internal platforms with a team that understands the full SDLC.',
    stack: ['React', 'Node', '.NET', 'Python'],
  },
  {
    icon: UsersRound,
    title: 'Dedicated teams',
    detail:
      'Add a focused pod selected around the product goal, communication cadence, and engineering standard you need.',
    stack: ['Frontend', 'Backend', 'QA', 'PM'],
  },
  {
    icon: Network,
    title: 'Staff augmentation',
    detail:
      'Scale an existing team with senior talent that can plug into your rituals, tooling, and delivery rhythm.',
    stack: ['Nearshore', 'Remote', 'Timezone fit'],
  },
  {
    icon: TestTube2,
    title: 'QA automation',
    detail:
      'Bring test planning, automation, reporting, and release confidence into products that cannot afford surprises.',
    stack: ['Selenium', 'NUnit', 'Regression'],
  },
  {
    icon: CloudCog,
    title: 'Cloud and DevOps',
    detail:
      'Build reliable environments, deployment pipelines, and system integrations across modern cloud stacks.',
    stack: ['Azure', 'AWS', 'GCP', 'CI/CD'],
  },
]

const caseStudies = [
  {
    title: 'CDLAN',
    label: 'Cybersecurity infrastructure',
    result: 'Secure infrastructure and managed IT services presented through a cleaner product workflow.',
    image: '/work/cdlan.jpg',
    tags: ['Web application', 'Security', 'Managed IT'],
    accent: 'red',
  },
  {
    title: 'Dextrio',
    label: 'Product platform',
    result: 'A complex business workflow shaped into a production-ready web application.',
    image: '/work/dextrio.jpg',
    tags: ['SaaS', 'Product engineering', 'Delivery'],
    accent: 'blue',
  },
  {
    title: 'AI platform',
    label: 'Conversation system',
    result: 'An AI-powered conversation platform with operational flows, review states, and product dashboards.',
    image: '/work/ai-platform.png',
    tags: ['AI', 'Internal tools', 'UX'],
    accent: 'green',
  },
  {
    title: 'Government Graduation',
    label: 'eGovernment product',
    result: 'A graduation system built for high-stakes public-sector workflows and clear administration.',
    image: '/work/graduation.png',
    tags: ['eGovernment', 'Web app', 'QA'],
    accent: 'yellow',
  },
  {
    title: 'Remy',
    label: 'Food commerce infrastructure',
    result: 'Agentic commerce infrastructure presented as a reliable operating system for food workflows.',
    image: '/work/remy.jpg',
    tags: ['Commerce', 'Automation', 'Platform'],
    accent: 'red',
  },
  {
    title: 'Toyota',
    label: 'After-sales and lead management',
    result: 'A lead and after-sales management flow for structured service operations.',
    image: '/work/toyota.png',
    tags: ['Automotive', 'CRM', 'Operations'],
    accent: 'blue',
  },
]

const industries = [
  'Fintech',
  'Logistics',
  'Healthcare',
  'Education',
  'Retail',
  'Real estate',
  'eGovernment',
  'Cybersecurity',
]

const processSteps = [
  {
    title: 'Diagnose',
    text: 'Audit goals, workflows, technical constraints, and the release path before writing production code.',
  },
  {
    title: 'Prototype',
    text: 'Make the critical screens tangible, validate decisions, and remove ambiguity early.',
  },
  {
    title: 'Build',
    text: 'Run design, engineering, and delivery in a tight loop with visible increments.',
  },
  {
    title: 'Harden',
    text: 'Add QA, automation, infrastructure checks, and release discipline before launch pressure arrives.',
  },
  {
    title: 'Launch',
    text: 'Ship, observe, improve, and keep the product maintainable after the first public release.',
  },
]

const testimonials = [
  {
    quote:
      'They delivered above and beyond in UX concepts, UI designs, frontend implementation, and backend data structure.',
    name: 'John Sherwin',
    role: 'Microsoft Corporation',
  },
  {
    quote:
      'Their ability to produce quality code, communicate, and actually understand the project scope is incredible.',
    name: 'Kyle Wyatt',
    role: 'PODKI Inc.',
  },
  {
    quote:
      'They completed work early and made several improvements on our initial proposal.',
    name: 'Mike Spaulding',
    role: 'Microsoft / Affirma Consulting',
  },
]

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="AtraX home">
        <span className="brand-mark">AX</span>
        <span>AtraX</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <NavLink to="/contact" className="header-cta">
        Start a project
        <ArrowRight size={16} strokeWidth={2.4} />
      </NavLink>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="mono">ATRAX / SOFTWARE COMPANY</p>
        <h2>Plan the next product with a team that ships.</h2>
      </div>
      <NavLink to="/contact" className="button button-dark">
        Start a project
        <ArrowRight size={18} />
      </NavLink>
    </footer>
  )
}

function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero page-grid">
        <div className="hero-copy">
          <h1>Software teams for products that need to ship cleanly.</h1>
          <p>
            AtraX partners with startups and product teams to design, build, test,
            and launch web and mobile software without the template-agency noise.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="button button-dark">
              Start a project
              <ArrowRight size={18} />
            </NavLink>
            <NavLink to="/work" className="text-link">
              See work
              <ChevronRight size={18} />
            </NavLink>
          </div>
        </div>
        <ProjectConsole />
      </section>

      <ProofStrip />

      <section className="section page-grid split-section">
        <div>
          <p className="mono section-index">01 / POSITION</p>
          <h2>Technology plus business ideas, rebuilt for serious buyers.</h2>
        </div>
        <div className="copy-stack">
          <p>
            The existing Atrax story is strong: an innovative software company
            supporting the full SDLC from planning to implementation, testing,
            and delivery. This site makes that promise easier to trust.
          </p>
          <p>
            It focuses on evidence: selected systems, engineering services,
            delivery rhythm, and the kind of senior pod clients can work with
            directly.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          index="02 / WORK"
          title="Selected work, shown as systems in motion."
          text="A few real Atrax portfolio anchors, reframed as product systems with visible delivery context."
        />
        <div className="case-rail">
          {caseStudies.slice(0, 3).map((item) => (
            <CaseRow key={item.title} item={item} />
          ))}
        </div>
      </section>

      <BuildFilm />

      <section className="section page-grid split-section">
        <div>
          <p className="mono section-index">04 / SERVICES</p>
          <h2>Senior pods for the product work between idea and production.</h2>
        </div>
        <div className="service-list compact">
          {services.slice(0, 4).map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}

function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Portfolio work that reads like operating systems, not thumbnails."
        text="Atrax has shipped across cybersecurity, eGovernment, commerce, SaaS, AI, and operations. This page presents that breadth with motion, context, and sharper proof."
        visual={<WorkGridVisual />}
      />
      <ProjectReels />
      <section className="section">
        <div className="work-list">
          {caseStudies.map((item, index) => (
            <CaseRow key={item.title} item={item} order={index + 1} />
          ))}
        </div>
      </section>
      <section className="section page-grid split-section">
        <div>
          <p className="mono section-index">PROJECT THEATRE</p>
          <h2>Every preview has a signal: data, flow, status, or launch path.</h2>
        </div>
        <DemoLab />
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="From MVP shape to production reliability."
        text="AtraX supports the full software development life cycle with frontend, backend, mobile, cloud, QA, project management, dedicated teams, and staff augmentation."
        visual={<ServiceOrbit />}
      />
      <section className="section service-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>
      <section className="section industries">
        <SectionHeading
          index="INDUSTRIES"
          title="Teams that can adapt across regulated, operational, and growth products."
          text="The old site lists broad industry experience; this version makes the range scannable without turning it into filler."
        />
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div key={industry} className="industry-item">
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <strong>{industry}</strong>
              <span />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function ProcessPage() {
  return (
    <>
      <PageHero
        label="Process"
        title="A delivery rhythm designed to reduce ambiguity."
        text="Good software work is not just talent. It is a sequence of decisions, visible checkpoints, and hardening before launch."
        visual={<ProcessBoard />}
      />
      <section className="section">
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section page-grid split-section">
        <div>
          <p className="mono section-index">TEAM SIGNAL</p>
          <h2>Small senior pods, direct communication, and fewer handoffs.</h2>
        </div>
        <div className="signal-grid">
          <Signal icon={UsersRound} title="40+ professionals" text="A handpicked team with software, QA, management, and infrastructure depth." />
          <Signal icon={MapPin} title="Tirana + US presence" text="Central Europe location with international collaboration experience." />
          <Signal icon={BadgeCheck} title="Full SDLC ownership" text="Planning, implementation, testing, launch, and maintenance in one delivery loop." />
          <Signal icon={MessageSquare} title="Clear collaboration" text="Visible milestones, direct access, and product conversations without theatre." />
        </div>
      </section>
      <Testimonials />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <section className="contact-hero page-grid">
        <div className="contact-copy">
          <p className="mono section-index">CONTACT</p>
          <h1>Start with the product problem. AtraX can shape the build.</h1>
          <p>
            Use this presentation page as a high-confidence project intake
            surface. The form is intentionally non-functional for now, but the
            content and experience are ready for a real backend when needed.
          </p>
          <div className="contact-lines">
            <span>
              <Mail size={18} />
              info@atrax.al
            </span>
            <span>
              <MapPin size={18} />
              Tirana, Albania / US collaboration
            </span>
          </div>
        </div>
        <div className="intake-panel">
          <div className="intake-header">
            <span className="mono">PROJECT INTAKE</span>
            <span className="status-dot">Ready</span>
          </div>
          <div className="input-line">
            <span>01</span>
            <strong>What are you building?</strong>
            <p>MVP, SaaS platform, mobile app, AI workflow, or internal tool.</p>
          </div>
          <div className="input-line">
            <span>02</span>
            <strong>Where do you need leverage?</strong>
            <p>Strategy, product design, engineering, QA, DevOps, or a dedicated pod.</p>
          </div>
          <div className="input-line">
            <span>03</span>
            <strong>What should be true after launch?</strong>
            <p>Revenue, adoption, operational speed, reliability, or scale.</p>
          </div>
          <button type="button" className="button button-dark intake-button">
            Plan the project
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  )
}

function PageHero({
  label,
  title,
  text,
  visual,
}: {
  label: string
  title: string
  text: string
  visual: ReactNode
}) {
  return (
    <section className="page-hero page-grid">
      <div>
        <p className="mono section-index">{label}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {visual}
    </section>
  )
}

function SectionHeading({
  index,
  title,
  text,
}: {
  index: string
  title: string
  text: string
}) {
  return (
    <div className="section-heading">
      <p className="mono section-index">{index}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="AtraX proof points">
      {proof.map((item) => (
        <div key={item.label} className="proof-item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
      <div className="proof-note">
        <ShieldCheck size={18} />
        Full SDLC delivery from planning to launch.
      </div>
    </section>
  )
}

function ProjectConsole() {
  const logLines = [
    'branch/mvp-checkout merged',
    'qa smoke suite passed',
    'preview url approved',
    'production deploy armed',
  ]

  return (
    <div className="console-stage" aria-label="Animated project console">
      <div className="console-panel product-panel">
        <div className="window-top">
          <span />
          <span />
          <span />
          <em>client-portal.tsx</em>
        </div>
        <div className="product-ui">
          <div className="product-sidebar">
            <span />
            <span />
            <span />
          </div>
          <div className="product-main">
            <div className="chart-line">
              <i />
            </div>
            <div className="metric-row">
              <strong>Launch health</strong>
              <b>96</b>
            </div>
            <div className="ui-bars">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="console-panel deploy-panel">
        <div className="panel-title">
          <CircleDot size={14} />
          Production path
        </div>
        {['Commit', 'Preview', 'QA', 'Launch'].map((item) => (
          <div key={item} className="deploy-row">
            <CheckCircle2 size={15} />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="console-panel log-panel">
        <div className="panel-title">Build log</div>
        {logLines.map((line) => (
          <code key={line}>{line}</code>
        ))}
      </div>
      <div className="console-panel note-panel">
        <p>"Clear milestones, direct communication, and production-ready output."</p>
        <span className="mono">CLIENT NOTE</span>
      </div>
    </div>
  )
}

function CaseRow({
  item,
  order,
}: {
  item: (typeof caseStudies)[number]
  order?: number
}) {
  return (
    <article className={`case-row accent-${item.accent}`}>
      <div className="case-meta">
        <span className="mono">{order ? String(order).padStart(2, '0') : item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.result}</p>
        <div className="tag-row">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="case-preview">
        <img src={item.image} alt={`${item.title} project preview`} />
        <div className="preview-overlay">
          <span />
          <strong>{item.label}</strong>
        </div>
      </div>
    </article>
  )
}

function BuildFilm() {
  return (
    <section className="build-film">
      <div className="film-copy">
        <p className="mono section-index">03 / DEMO MOMENT</p>
        <h2>From idea to production, without hiding the delivery work.</h2>
        <p>
          A presentation-only walkthrough that feels like motion: discovery,
          prototype, engineering, QA, and launch all visible in one product rail.
        </p>
      </div>
      <div className="film-stage">
        <div className="film-track">
          {processSteps.map((step) => (
            <span key={step.title}>{step.title}</span>
          ))}
        </div>
        <div className="screen-split">
          <div className="before-screen">
            <strong>Before</strong>
            <span />
            <span />
            <span />
          </div>
          <div className="after-screen">
            <strong>After</strong>
            <div className="mini-dashboard">
              <b />
              <b />
              <b />
            </div>
            <div className="progress-stack">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="slider-handle" />
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon

  return (
    <article className="service-row">
      <Icon size={22} />
      <div>
        <h3>{service.title}</h3>
        <p>{service.detail}</p>
      </div>
      <ArrowRight size={18} />
    </article>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-icon">
        <Icon size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.detail}</p>
      <div className="tag-row">
        {service.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  )
}

function WorkGridVisual() {
  return (
    <div className="work-grid-visual">
      {caseStudies.slice(0, 4).map((item) => (
        <div key={item.title} className={`mini-work accent-${item.accent}`}>
          <img src={item.image} alt="" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectReels() {
  const reels = [
    {
      icon: MonitorSmartphone,
      title: 'Product interface reel',
      text: 'A moving product frame that cycles from messy intake to a clean operating screen.',
      color: 'red',
    },
    {
      icon: BrainCircuit,
      title: 'AI workflow reel',
      text: 'Conversation, review, and approval states presented like a short project film.',
      color: 'blue',
    },
    {
      icon: Layers3,
      title: 'Platform architecture reel',
      text: 'Nodes light up as API, QA, data, and cloud layers become production-ready.',
      color: 'green',
    },
    {
      icon: Gauge,
      title: 'Launch health reel',
      text: 'A release dashboard with motion tied to status, tests, and deployment progress.',
      color: 'yellow',
    },
  ]

  return (
    <section className="section project-reels">
      <SectionHeading
        index="PROJECT VIDEOS"
        title="Video-like project moments without slow stock footage."
        text="These presentation reels are code-native animations: lightweight, branded, and easy to replace with real case-study video later."
      />
      <div className="reel-grid">
        {reels.map((reel, index) => {
          const Icon = reel.icon

          return (
            <article key={reel.title} className={`reel-card reel-${reel.color}`}>
              <div className="reel-screen" aria-hidden="true">
                <div className="reel-top">
                  <span />
                  <span />
                  <span />
                  <em>00:0{index + 3}</em>
                </div>
                <div className="reel-frame">
                  <Icon size={32} />
                  <div className="reel-bars">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="playhead" />
                </div>
              </div>
              <h3>{reel.title}</h3>
              <p>{reel.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function DemoLab() {
  return (
    <div className="demo-lab">
      <div className="architecture-map">
        <span className="node active">Client</span>
        <span className="node">API</span>
        <span className="node active">QA</span>
        <span className="node">Cloud</span>
        <span className="node active">Launch</span>
      </div>
      <div className="lab-log">
        <code>scope: product workflow locked</code>
        <code>preview: stakeholder approved</code>
        <code>tests: 128 passing</code>
        <code>release: production green</code>
      </div>
    </div>
  )
}

function ServiceOrbit() {
  return (
    <div className="service-orbit">
      <div className="orbit-core">
        <Code2 size={30} />
        <span>AtraX pod</span>
      </div>
      <span className="orbit-node n1">MVP</span>
      <span className="orbit-node n2">QA</span>
      <span className="orbit-node n3">Cloud</span>
      <span className="orbit-node n4">Mobile</span>
      <span className="orbit-node n5">Teams</span>
    </div>
  )
}

function ProcessBoard() {
  return (
    <div className="process-board">
      <div className="board-header">
        <span className="mono">SPRINT 04</span>
        <span>Launch readiness</span>
      </div>
      {processSteps.map((step, index) => (
        <div key={step.title} className="board-row">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step.title}</strong>
          <i />
        </div>
      ))}
    </div>
  )
}

function Signal({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <article className="signal">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionHeading
        index="CLIENT SIGNAL"
        title="Proof from buyers who cared about scope, quality, and communication."
        text="Existing Atrax testimonials are edited into a more focused proof surface."
      />
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial">
            <p>"{item.quote}"</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  return <Layout />
}

export default App
