import { motion } from 'framer-motion';

const companyStats = [
  { value: '20+ Years', label: 'Soap production experience' },
  { value: '35,000 m²', label: 'Production area' },
  { value: '200+', label: 'Skilled employees' },
  { value: '24 Lines', label: 'Multi-category production lines' },
];

const categories = [
  {
    title: 'Toilet Soap',
    text: 'Daily cleansing bars for wholesale, private label and retail-ready packaging projects.',
    moq: 'OEM MOQ: 10,000 pcs',
  },
  {
    title: 'Handmade Soap',
    text: 'Custom shapes, colors, fragrance concepts and gift-box solutions for lifestyle brands.',
    moq: 'OEM MOQ: 5,000 pcs',
  },
  {
    title: 'Laundry Soap',
    text: 'Dense, crack-resistant laundry bars built for household channels and regional distributors.',
    moq: 'OEM MOQ: 5 tons',
  },
  {
    title: 'Soap Base',
    text: 'Bulk soap-base supply for factories, soap workshops and formulation partners.',
    moq: 'OEM MOQ: 2 tons',
  },
];

const capabilityCards = [
  'Vertical three-roll grinding for finer raw-material processing',
  'High-density extrusion with a 2 m screw system',
  '1:9 compression ratio for dense, stable soap texture',
  'Formula, shape, fragrance and packaging adjustment support',
];

const productionLines = [
  { name: 'Toilet Soap + Laundry Soap', lines: '6 lines' },
  { name: 'Handmade Soap', lines: '10 lines' },
  { name: 'Household Cleaning', lines: '4 lines' },
  { name: 'Cosmetics', lines: '4 lines' },
];

const capacities = [
  { name: 'Handmade / Essential Oil Soap', value: '5,000 tons / year' },
  { name: 'Toilet Soap', value: '10,000 tons / year' },
  { name: 'Laundry Soap', value: '10,000 tons / year' },
];

const serviceSteps = [
  'Requirement Review',
  'Formula & Sample Proofing',
  'Packaging Design',
  'Mass Production',
  'QC & Documentation',
  'Export Delivery',
];

const exportSupport = [
  'FOB quotation support',
  'Customs declaration assistance',
  'Commodity inspection support',
  'MSDS / Certificate of Origin / customs documents',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function PlaceholderImage({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`image-placeholder ${tall ? 'min-h-[520px]' : 'min-h-[360px]'}`}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-full border border-white/40 bg-white/20 backdrop-blur" />
        <p className="text-sm uppercase tracking-[0.32em] text-white/70">Replace with real asset</p>
        <p className="mt-2 text-2xl font-semibold text-white">{label}</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/85 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-bold text-ivory">S</div>
          <div>
            <p className="text-lg font-bold tracking-[0.22em] text-forest">SIMAN</p>
            <p className="text-xs uppercase tracking-[0.22em] text-moss">Biotechnology</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/70 lg:flex">
          <a href="#products">Products</a>
          <a href="#oem">OEM / ODM</a>
          <a href="#factory">Factory</a>
          <a href="#quality">Quality</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn-primary hidden sm:inline-flex" href="#contact">Request a Quote</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="site-container grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionLabel>OEM / ODM SOAP MANUFACTURING PARTNER</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] text-forest md:text-7xl">
            Scalable Soap Manufacturing for Global Brands.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
            Zhejiang Siman Biotechnology Co., Ltd. supports soap brands, wholesalers, distributors and project buyers with formula adjustment, shape development, packaging design and export-ready delivery.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="btn-primary" href="#oem">Start Your OEM Project</a>
            <a className="btn-secondary" href="#factory">View Manufacturing Capability</a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {companyStats.map((item) => (
              <div key={item.value} className="stat-card">
                <p className="text-2xl font-bold text-forest">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink/55">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <PlaceholderImage label="Hero Product / Factory Visual" tall />
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-block bg-white">
      <div className="site-container">
        <div className="section-heading">
          <SectionLabel>PRODUCT SYSTEM</SectionLabel>
          <h2>Main Soap Categories for Wholesale and Private Label</h2>
          <p>Build a clear product entrance for buyers: stock wholesale, OEM private label and ODM development can be presented without overloading the first screen.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <article key={item.title} className="category-card">
              <div className="product-visual" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{item.moq}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OemSolutions() {
  return (
    <section id="oem" className="section-block bg-ivory">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <PlaceholderImage label="Custom Shape / Packaging / Formula" />
        <div>
          <SectionLabel>OEM / ODM SOLUTIONS</SectionLabel>
          <h2 className="section-title">From Formula Adjustment to Export Packaging.</h2>
          <p className="section-copy">
            SIMAN is positioned for serious B2B orders, not scattered retail fulfillment. The homepage should communicate an efficient project path for brand owners, wholesalers and importers.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Private Label Soap', 'ODM Formula + Shape', 'Finished Goods Wholesale', 'Sample Replication'].map((item) => (
              <div className="check-card" key={item}>{item}</div>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-moss">Typical project timing</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div><strong>3-5 days</strong><span>Sampling cycle</span></div>
              <div><strong>15-20 days</strong><span>OEM production</span></div>
              <div><strong>~20 days</strong><span>Export delivery</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Factory() {
  return (
    <section id="factory" className="section-block bg-forest text-ivory">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>MANUFACTURING CAPACITY</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">Factory strength expressed as a reliable supply system.</h2>
            <p className="mt-7 text-lg leading-8 text-ivory/70">
              The homepage should make the factory easier to trust: facility scale, production lines, capacity and equipment advantages are presented with clean B2B data cards.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {productionLines.map((item) => (
              <div className="dark-card" key={item.name}>
                <p>{item.name}</p>
                <strong>{item.lines}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {capacities.map((item) => (
            <div className="capacity-card" key={item.name}>
              <p>{item.name}</p>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section className="section-block bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>EQUIPMENT ADVANTAGE</SectionLabel>
          <h2 className="section-title">Dense Texture. Fine Grinding. Stable Bar Quality.</h2>
          <p className="section-copy">Turn equipment details into buyer-facing quality language. The visual should use real machine photos when available, with concise technical callouts.</p>
          <div className="mt-8 grid gap-4">
            {capabilityCards.map((item) => <div className="line-card" key={item}>{item}</div>)}
          </div>
        </div>
        <PlaceholderImage label="Grinding / Extrusion Equipment" />
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="section-block bg-ivory">
      <div className="site-container">
        <div className="section-heading">
          <SectionLabel>FEATURED PRODUCTS</SectionLabel>
          <h2>Product Display Area with Easy Replacement</h2>
          <p>Use clean product cards first, then replace placeholders with real soap, laundry soap, soap base, shampoo, shower gel and bath salt images.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {['Transparent Soap Bar', 'Laundry Soap Bar', 'Gift Handmade Soap', 'Soap Base Block', 'Shampoo / Shower Gel', 'Bath Salt Collection'].map((item) => (
            <div className="featured-card" key={item}>
              <div className="featured-visual" />
              <h3>{item}</h3>
              <p>Replace with real product photo and concise specification tags.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="section-block bg-white">
      <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>QUALITY & CERTIFICATION SUPPORT</SectionLabel>
          <h2 className="section-title">Documentation-ready supply for overseas buyers.</h2>
          <p className="section-copy">Avoid false certificate claims. Present the real support scope clearly: factory certificate copies, third-party test report copies, MSDS, certificate of origin and export customs documents.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {exportSupport.map((item) => <div className="check-card" key={item}>{item}</div>)}
          </div>
        </div>
        <div className="rounded-[2rem] bg-forest p-8 text-ivory shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-ivory/55">Quality flow</p>
          <ol className="mt-8 space-y-5">
            {['Raw Material Review', 'Formula & Sample Check', 'Process Control', 'Finished Product Inspection', 'Packing Verification', 'Document Preparation'].map((item, index) => (
              <li className="flex gap-4" key={item}>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ivory text-sm font-bold text-forest">{index + 1}</span>
                <span className="pt-1 text-lg">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Packing() {
  return (
    <section className="section-block bg-ivory">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <PlaceholderImage label="Packaging / Carton / Export Delivery" />
        <div>
          <SectionLabel>PACKING & EXPORT SUPPORT</SectionLabel>
          <h2 className="section-title">Packaging design support for brand-ready orders.</h2>
          <p className="section-copy">Use this section to show neutral packaging, custom labels, gift boxes, export cartons and shipment documentation. Keep cooperation details concise and procurement-focused.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Neutral Packing', 'Private Label Design', 'Export Carton', 'FOB Delivery Support'].map((item) => <div className="line-card" key={item}>{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-block bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>ABOUT SIMAN</SectionLabel>
          <h2 className="section-title">A soap manufacturer built for repeatable B2B supply.</h2>
        </div>
        <div className="text-lg leading-8 text-ink/68">
          <p>Zhejiang Siman Biotechnology Co., Ltd. focuses on soap, handmade soap, laundry soap and soap base manufacturing, with extended personal-care and household-cleaning product capability for global procurement projects.</p>
          <p className="mt-5">The website should not over-explain every trade term. It should help buyers quickly understand product range, customization capability, factory scale and export support.</p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-block bg-forest text-ivory">
      <div className="site-container">
        <div className="section-heading text-left text-ivory">
          <SectionLabel>COOPERATION PROCESS</SectionLabel>
          <h2>Clear steps from inquiry to shipment.</h2>
          <p className="text-ivory/68">Use this as a conversion bridge before the final CTA.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {serviceSteps.map((item, index) => (
            <div className="process-card" key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section-block bg-white">
      <div className="site-container">
        <div className="section-heading">
          <SectionLabel>LATEST INSIGHTS</SectionLabel>
          <h2>Content that supports buyer education.</h2>
          <p>These article cards can later connect to SEO topics around soap base, private label soap, laundry soap density and export packaging.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {['How to Plan a Private Label Soap Project', 'What Affects Soap Bar Density and Stability?', 'Export Packing Checklist for Soap Orders'].map((item) => (
            <article className="blog-card" key={item}>
              <p>Buyer Guide</p>
              <h3>{item}</h3>
              <a href="#contact">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink text-ivory">
      <div className="site-container grid gap-10 py-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-ivory/50">Ready for OEM / ODM development</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Send your soap project requirement.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/68">Share your target product, quantity, formula direction, packaging idea and destination market. SIMAN can support sampling, production planning and export documentation.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-2xl font-semibold">Zhejiang Siman Biotechnology Co., Ltd.</p>
          <div className="mt-8 space-y-4 text-ivory/65">
            <p>Email: sales@example.com</p>
            <p>WhatsApp: +86 000 0000 0000</p>
            <p>Address: Zhejiang, China</p>
          </div>
          <a className="btn-light mt-8" href="mailto:sales@example.com">Request a Custom Quote</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <OemSolutions />
      <Factory />
      <Equipment />
      <Featured />
      <Quality />
      <Packing />
      <About />
      <Process />
      <Blog />
      <Footer />
    </main>
  );
}
