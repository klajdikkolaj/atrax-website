import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChevronRight,
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
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
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
    role: 'Enterprise product stakeholder',
    metric: 'UX + backend',
  },
  {
    quote:
      'Their ability to produce quality code, communicate, and actually understand the project scope is incredible.',
    name: 'Kyle Wyatt',
    role: 'Product founder',
    metric: 'Quality code',
  },
  {
    quote:
      'They completed work early and made several improvements on our initial proposal.',
    name: 'Mike Spaulding',
    role: 'Consulting delivery lead',
    metric: 'Early delivery',
  },
  {
    quote:
      'True professionals. Clear objectives, clear time frames, and nimble solutions when the project needed them.',
    name: 'Justin Doff',
    role: 'Growth systems founder',
    metric: 'Clear scope',
  },
  {
    quote:
      'They went above and beyond to develop new solutions and make sure our systems were working correctly.',
    name: 'Reis Hill',
    role: 'Operations platform owner',
    metric: 'Systems checked',
  },
]

const systemTiles = [
  {
    title: 'Scope turns visible',
    label: 'Discovery',
    lines: ['Audit', 'Map', 'Prioritize'],
  },
  {
    title: 'Design becomes testable',
    label: 'Prototype',
    lines: ['Flow', 'Screen', 'Review'],
  },
  {
    title: 'Launch risk drops',
    label: 'QA + Release',
    lines: ['Tests', 'Preview', 'Deploy'],
  },
]

const clientSignals = [
  'AI workflows',
  'Cloud platforms',
  'Mobile products',
  'QA automation',
  'Security systems',
  'Dedicated pods',
]

const generatedVisuals = {
  globalHero: '/generated/atrax-global-hero.png',
  productEngineering: '/generated/atrax-product-engineering.png',
  borderNetwork: '/generated/atrax-border-network.png',
  securitySystem: '/generated/atrax-security-system.png',
  aiOperations: '/generated/atrax-ai-operations.png',
}

const globalHubs = [
  { city: 'Tirana', region: 'Delivery core', x: 52, y: 48 },
  { city: 'New York', region: 'US partners', x: 22, y: 43 },
  { city: 'London', region: 'Product teams', x: 46, y: 34 },
  { city: 'Milan', region: 'EU systems', x: 50, y: 42 },
  { city: 'Dubai', region: 'Growth markets', x: 62, y: 54 },
  { city: 'Singapore', region: 'Cloud operations', x: 78, y: 67 },
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
  const location = useLocation()

  return (
    <div className="app-shell">
      <Header />
      <main key={location.pathname} className="route-frame">
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
          <h1>Borderless software systems in motion.</h1>
          <p>AtraX builds web, mobile, AI, and cloud products from Tirana to global launch.</p>
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
        <HeroNetwork />
      </section>

      <ProofStrip />
      <ClientMarquee />

      <GlobalReach />
      <MotionSystem />

      <section className="section">
        <SectionHeading
          index="02 / WORK"
          title="Generated worlds around real delivery systems."
          text="Large motion-ready visuals for global, engineering, security, and AI work."
        />
        <ProjectCinema />
      </section>

      <BuildFilm />

      <section className="section page-grid split-section">
        <div>
          <p className="mono section-index">04 / SERVICES</p>
          <h2>Senior pods for the product work between idea and production.</h2>
        </div>
        <div className="service-list">
          {services.slice(0, 4).map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  )
}

function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Portfolio work that reads like operating systems, not thumbnails."
        text="Cybersecurity, eGovernment, commerce, SaaS, AI, and operations - presented with motion, context, and proof."
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
        text="Strategy, product design, engineering, QA, cloud, and dedicated teams in one delivery loop."
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
          text="A fast scan of the domains where Atrax already has useful product context."
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
        text="Decisions, visible checkpoints, and hardening before launch pressure arrives."
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
            A concise intake surface for MVPs, platforms, AI workflows, mobile
            apps, and dedicated engineering pods.
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
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function pointFromLatLon(three: typeof import('three'), lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  return new three.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

function GlobalNetworkCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let disposed = false
    let cleanup: (() => void) | undefined
    let animationFrame = 0

    void import('three').then((three) => {
      if (disposed) return

      const mount = mountRef.current
      if (!mount) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const scene = new three.Scene()
      const camera = new three.PerspectiveCamera(38, 1, 0.1, 100)
      const renderer = new three.WebGLRenderer({ alpha: true, antialias: true })
      const group = new three.Group()
      const pointer = { x: 0, y: 0 }

      camera.position.set(0, 0, 5.6)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0xffffff, 0)
      mount.appendChild(renderer.domElement)
      scene.add(group)

      const dotCount = 560
      const positions = new Float32Array(dotCount * 3)
      const goldenAngle = Math.PI * (3 - Math.sqrt(5))

      for (let index = 0; index < dotCount; index += 1) {
        const y = 1 - (index / (dotCount - 1)) * 2
        const radiusAtY = Math.sqrt(1 - y * y)
        const theta = goldenAngle * index

        positions[index * 3] = Math.cos(theta) * radiusAtY * 1.76
        positions[index * 3 + 1] = y * 1.76
        positions[index * 3 + 2] = Math.sin(theta) * radiusAtY * 1.76
      }

      const pointGeometry = new three.BufferGeometry()
      pointGeometry.setAttribute('position', new three.BufferAttribute(positions, 3))
      const pointMaterial = new three.PointsMaterial({
        color: 0x111315,
        size: 0.022,
        transparent: true,
        opacity: 0.58,
      })
      group.add(new three.Points(pointGeometry, pointMaterial))

      const globeGeometry = new three.SphereGeometry(1.78, 42, 22)
      const globeMaterial = new three.MeshBasicMaterial({
        color: 0x2f6bff,
        transparent: true,
        opacity: 0.075,
        wireframe: true,
      })
      group.add(new three.Mesh(globeGeometry, globeMaterial))

      const routeMaterials = [
        new three.LineBasicMaterial({ color: 0xff4d2e, transparent: true, opacity: 0.72 }),
        new three.LineBasicMaterial({ color: 0x2f6bff, transparent: true, opacity: 0.58 }),
        new three.LineBasicMaterial({ color: 0x16a36b, transparent: true, opacity: 0.58 }),
        new three.LineBasicMaterial({ color: 0xffd45a, transparent: true, opacity: 0.68 }),
      ]
      const lineGeometries: Array<{ dispose: () => void }> = []
      const routes = [
        [41.3275, 19.8187, 40.7128, -74.006],
        [41.3275, 19.8187, 51.5072, -0.1276],
        [41.3275, 19.8187, 45.4642, 9.19],
        [41.3275, 19.8187, 25.2048, 55.2708],
        [41.3275, 19.8187, 1.3521, 103.8198],
      ]

      routes.forEach(([startLat, startLon, endLat, endLon], index) => {
        const start = pointFromLatLon(three, startLat, startLon, 1.82)
        const end = pointFromLatLon(three, endLat, endLon, 1.82)
        const middle = start.clone().add(end).normalize().multiplyScalar(2.45 + index * 0.04)
        const curve = new three.QuadraticBezierCurve3(start, middle, end)
        const lineGeometry = new three.BufferGeometry().setFromPoints(curve.getPoints(72))
        lineGeometries.push(lineGeometry)
        group.add(new three.Line(lineGeometry, routeMaterials[index % routeMaterials.length]))
      })

      const nodeGeometry = new three.SphereGeometry(0.048, 16, 16)
      const nodeMaterial = new three.MeshBasicMaterial({ color: 0xff4d2e })
      ;[
        [41.3275, 19.8187],
        [40.7128, -74.006],
        [51.5072, -0.1276],
        [45.4642, 9.19],
        [25.2048, 55.2708],
        [1.3521, 103.8198],
      ].forEach(([lat, lon]) => {
        const node = new three.Mesh(nodeGeometry, nodeMaterial)
        node.position.copy(pointFromLatLon(three, lat, lon, 1.88))
        group.add(node)
      })

      const resize = () => {
        const nextWidth = Math.max(mount.clientWidth, 320)
        const nextHeight = Math.max(mount.clientHeight, 320)
        camera.aspect = nextWidth / nextHeight
        camera.updateProjectionMatrix()
        renderer.setSize(nextWidth, nextHeight)
      }

      const onPointerMove = (event: PointerEvent) => {
        const rect = mount.getBoundingClientRect()
        pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.34
        pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.22
      }

      const animate = () => {
        group.rotation.y += 0.0038
        group.rotation.x += (pointer.y - group.rotation.x) * 0.035
        group.rotation.z += (pointer.x - group.rotation.z) * 0.035
        renderer.render(scene, camera)
        if (!reducedMotion) {
          animationFrame = window.requestAnimationFrame(animate)
        }
      }

      const observer = new ResizeObserver(resize)
      observer.observe(mount)
      mount.addEventListener('pointermove', onPointerMove)
      resize()
      animate()

      cleanup = () => {
        window.cancelAnimationFrame(animationFrame)
        observer.disconnect()
        mount.removeEventListener('pointermove', onPointerMove)
        renderer.dispose()
        pointGeometry.dispose()
        pointMaterial.dispose()
        globeGeometry.dispose()
        globeMaterial.dispose()
        nodeGeometry.dispose()
        nodeMaterial.dispose()
        lineGeometries.forEach((geometry) => geometry.dispose())
        routeMaterials.forEach((material) => material.dispose())
        mount.replaceChildren()
      }
    })

    return () => {
      disposed = true
      cleanup?.()
    }
  }, [])

  return <div ref={mountRef} className="global-canvas" aria-hidden="true" />
}

function HeroNetwork() {
  const heroImages = [
    { title: 'Global delivery visual', image: generatedVisuals.globalHero },
    { title: caseStudies[1].title, image: caseStudies[1].image },
    { title: 'Product engineering visual', image: generatedVisuals.productEngineering },
    { title: caseStudies[2].title, image: caseStudies[2].image },
  ]

  return (
    <div className="hero-network" aria-label="Animated global project network">
      <GlobalNetworkCanvas />
      <div className="hero-image-stack" aria-hidden="true">
        {heroImages.map((item, index) => (
          <img
            key={item.title}
            src={item.image}
            alt=""
            style={{ '--delay': `${index * 3.6}s` } as CSSProperties}
          />
        ))}
      </div>
      <div className="signature-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="network-route route-a">
        <span>Tirana</span>
        <strong>New York</strong>
      </div>
      <div className="network-route route-b">
        <span>Design</span>
        <strong>Cloud</strong>
      </div>
      <div className="network-stat">
        <strong>5</strong>
        <span>delivery zones</span>
      </div>
    </div>
  )
}

function ClientMarquee() {
  return (
    <section className="client-marquee" aria-label="Client and project signals">
      <div className="marquee-track">
        {[...clientSignals, ...clientSignals].map((client, index) => (
          <span key={`${client}-${index}`}>{client}</span>
        ))}
      </div>
    </section>
  )
}

function GlobalReach() {
  return (
    <section className="section global-reach">
      <div className="global-copy">
        <p className="mono section-index">01 / BORDERLESS</p>
        <h2>Software delivery mapped across borders.</h2>
      </div>
      <div className="global-map" aria-label="AtraX delivery network map">
        <svg viewBox="0 0 100 100" role="img" aria-label="Connected country network">
          <path className="land-line" d="M12 34 C21 18 36 19 43 33 C51 49 69 29 83 43 C94 56 82 73 64 67 C49 62 38 78 24 65 C9 52 4 44 12 34Z" />
          <path className="land-line land-line-soft" d="M39 24 C51 16 67 18 74 31 C82 46 73 56 60 53 C49 51 44 43 39 24Z" />
          <path className="route-line route-line-red" d="M52 48 C43 28 30 28 22 43" />
          <path className="route-line route-line-blue" d="M52 48 C49 34 47 31 46 34" />
          <path className="route-line route-line-green" d="M52 48 C55 39 58 42 62 54" />
          <path className="route-line route-line-yellow" d="M52 48 C68 48 73 58 78 67" />
        </svg>
        <img className="generated-map-asset" src={generatedVisuals.borderNetwork} alt="" aria-hidden="true" />
        {globalHubs.map((hub) => (
          <span
            key={hub.city}
            className="hub-point"
            style={{ '--x': `${hub.x}%`, '--y': `${hub.y}%` } as CSSProperties}
          >
            <strong>{hub.city}</strong>
            <em>{hub.region}</em>
          </span>
        ))}
      </div>
    </section>
  )
}

function ProjectCinema() {
  const cinemaItems = [
    {
      title: 'Global delivery layer',
      label: 'Network operations',
      image: generatedVisuals.globalHero,
      alternate: generatedVisuals.borderNetwork,
      proof: caseStudies[0].image,
      accent: 'blue',
    },
    {
      title: 'Engineering system',
      label: 'Product engineering',
      image: generatedVisuals.productEngineering,
      alternate: caseStudies[1].image,
      proof: caseStudies[1].image,
      accent: 'green',
    },
    {
      title: 'Security architecture',
      label: 'Security infrastructure',
      image: generatedVisuals.securitySystem,
      alternate: generatedVisuals.borderNetwork,
      proof: caseStudies[5].image,
      accent: 'red',
    },
    {
      title: 'AI operations layer',
      label: 'AI operations',
      image: generatedVisuals.aiOperations,
      alternate: generatedVisuals.productEngineering,
      proof: caseStudies[2].image,
      accent: 'yellow',
    },
  ]

  return (
    <div className="cinema-grid">
      {cinemaItems.map((item) => (
        <article key={item.title} className={`cinema-card accent-${item.accent}`}>
          <div className="cinema-media">
            <img src={item.image} alt={`${item.title} project preview`} />
            <img src={item.alternate} alt="" aria-hidden="true" />
            <img className="cinema-proof" src={item.proof} alt="" aria-hidden="true" />
          </div>
          <div className="cinema-caption">
            <span className="mono">{item.label}</span>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}

function MotionSystem() {
  return (
    <section className="section motion-system">
      <div className="motion-copy">
        <p className="mono section-index">01 / SYSTEM</p>
        <h2>One moving layer from scope to launch.</h2>
      </div>
      <div className="motion-atlas" aria-label="Animated delivery sequence">
        <img className="atlas-image atlas-primary" src={generatedVisuals.borderNetwork} alt="" aria-hidden="true" />
        <img className="atlas-image atlas-secondary" src={generatedVisuals.productEngineering} alt="" aria-hidden="true" />
        <span className="motion-path path-red" />
        <span className="motion-path path-blue" />
        {systemTiles.map((tile, index) => (
          <span
            key={tile.title}
            className={`atlas-chip chip-${index + 1}`}
            style={{ '--delay': `${index * 0.45}s` } as CSSProperties}
          >
            <strong>{tile.label}</strong>
            <em>{tile.title}</em>
          </span>
        ))}
      </div>
    </section>
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
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const previous = () => setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((value) => (value + 1) % testimonials.length)

  return (
    <section className="section testimonials">
      <SectionHeading
        index="CLIENT SIGNAL"
        title="Proof from delivery, not decoration."
        text="Short client signals from shipped interfaces, systems, and release work."
      />
      <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Client testimonials">
        <div className="testimonial-viewport">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-slide">
                <span className="testimonial-metric">{item.metric}</span>
                <p>"{item.quote}"</p>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={previous} aria-label="Previous testimonial">
            <ChevronRight size={18} />
          </button>
          <div className="carousel-dots" aria-label="Testimonial position">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === current}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function App() {
  return <Layout />
}

export default App
