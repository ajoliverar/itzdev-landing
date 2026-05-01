export default function ItzDevLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
          <div className="text-2xl font-bold tracking-tight">
            ITZ<span className="text-cyan-400">DEV</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Servicios</a>
            <a href="#about" className="hover:text-white transition">Nosotros</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
          >
            Trabajemos juntos
          </a>
        </header>

        {/* Hero */}
        <section className="px-8 py-24 md:py-36 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-6">
              Desarrollo Web · SAP · UI/UX · Automatización
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Creamos experiencias digitales modernas.
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              En ITZDEV desarrollamos soluciones tecnológicas profesionales para empresas y startups.
              Landing pages, aplicaciones web, integraciones SAP y experiencias digitales enfocadas en rendimiento y diseño.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black hover:scale-105 transition"
              >
                Solicitar cotización
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-4 font-semibold hover:bg-white/10 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div>
                  <span className="text-cyan-400">const</span> project = {'{'}
                </div>
                <div className="ml-4">name: <span className="text-green-400">'ITZDEV'</span>,</div>
                <div className="ml-4">focus: <span className="text-green-400">'Modern Solutions'</span>,</div>
                <div className="ml-4">stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'SAPUI5'</span>, <span className="text-green-400">'Node.js'</span>]</div>
                <div>{'}'}</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900/60 p-5 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400">99%</div>
                  <div className="text-sm text-slate-400 mt-1">Performance Score</div>
                </div>

                <div className="rounded-2xl bg-slate-900/60 p-5 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-slate-400 mt-1">Soporte técnico</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-8 py-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-black">
                Servicios profesionales
              </h2>
              <p className="mt-5 text-slate-400 text-lg">
                Soluciones diseñadas para escalar tu presencia digital y optimizar procesos empresariales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Landing Pages',
                  desc: 'Diseños modernos, rápidos y optimizados para conversión.',
                },
                {
                  title: 'Aplicaciones Web',
                  desc: 'Desarrollo frontend y backend con tecnologías modernas.',
                },
                {
                  title: 'SAP & SAPUI5',
                  desc: 'Interfaces empresariales y soluciones integradas para SAP.',
                },
                {
                  title: 'Automatización',
                  desc: 'Optimización de procesos y flujos de trabajo digitales.',
                },
                {
                  title: 'UI/UX Design',
                  desc: 'Experiencias visuales enfocadas en usabilidad y branding.',
                },
                {
                  title: 'Consultoría Tech',
                  desc: 'Acompañamiento estratégico para proyectos tecnológicos.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
                >
                  <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 mb-6" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-8 py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black">
                Tecnología con visión de negocio.
              </h2>

              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                ITZDEV combina diseño, desarrollo y estrategia para construir productos digitales que generan impacto.
                Nuestro enfoque está orientado a rendimiento, escalabilidad y experiencia de usuario.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-5xl font-black text-cyan-400">Fast</div>
                <div className="mt-4 text-slate-400">Aplicaciones optimizadas y rápidas.</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-5xl font-black text-cyan-400">Modern</div>
                <div className="mt-4 text-slate-400">Diseños actuales y profesionales.</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-5xl font-black text-cyan-400">Secure</div>
                <div className="mt-4 text-slate-400">Infraestructura y buenas prácticas.</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-5xl font-black text-cyan-400">Scalable</div>
                <div className="mt-4 text-slate-400">Preparado para crecer contigo.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-8 pb-24">
          <div className="max-w-5xl mx-auto rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-12 text-center backdrop-blur-xl">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              ¿Listo para construir algo increíble?
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Hablemos sobre tu próximo proyecto y llevemos tu presencia digital al siguiente nivel.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:contacto@itzdev.com"
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:scale-105 transition"
              >
                contacto@itzdev.com
              </a>

              <a
                href="https://github.com/ajoliverar"
                target="_blank"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 px-8 py-8 text-center text-slate-500 text-sm">
          © 2026 ITZDEV · Modern Digital Solutions
        </footer>
      </div>
    </div>
  )
}
