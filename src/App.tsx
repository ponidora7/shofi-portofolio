import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mic2, 
  Video,
  ChevronRight,
  Download,
  Camera,
  Layers
} from "lucide-react";
import { portfolioData } from "./constants";

const SectionTitle = ({ children, icon: Icon }: { children: ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-slate-900 text-white rounded-lg">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-display font-bold tracking-tight text-slate-900 uppercase">
      {children}
    </h2>
    <div className="flex-1 h-[1px] bg-slate-200 ml-4"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tighter">SNA.</span>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#activities" className="hover:text-slate-900 transition-colors">Activities</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-slate-900 transition-colors">Achievements</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase mb-6">
              Available for Opportunities
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
              {portfolioData.name.split(' ').map((name, i) => (
                <span key={i} className={i === 1 ? "text-slate-400 block" : "block"}>{name}</span>
              ))}
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {portfolioData.titles.map((title, i) => (
                <span key={i} className="text-lg font-serif italic text-slate-600">
                  {title}{i < portfolioData.titles.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {portfolioData.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                {portfolioData.email}
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                {portfolioData.linkedin}
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/628990644065"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                Contact Me
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square lg:aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden group"
          >
            <img 
              src="/images/fotoshofi.jpeg" 
              alt="Shofi Nurul Aini"
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-4">Profile</h3>
              <p className="text-4xl font-serif italic leading-tight text-slate-900">
                "Integrating technical precision with managerial excellence."
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xl leading-relaxed text-slate-600 mb-8">
                {portfolioData.about}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <GraduationCap className="text-slate-900 mb-4" />
                  <h4 className="font-bold mb-1">{portfolioData.education.degree}</h4>
                  <p className="text-sm text-slate-500">{portfolioData.education.university}</p>
                  <p className="text-xs text-slate-400 mt-2">{portfolioData.education.period} | {portfolioData.education.status}</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <Award className="text-slate-900 mb-4" />
                  <h4 className="font-bold mb-1">Certified IT Project Manager</h4>
                  <p className="text-sm text-slate-500">BNSP Certification</p>
                  <p className="text-xs text-slate-400 mt-2">Validating professional standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Briefcase}>Experience</SectionTitle>
          <div className="space-y-12">
            {portfolioData.experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-4 gap-8 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-sm font-mono text-slate-400">{exp.period}</span>
                </div>
                <div className="lg:col-span-3 border-l border-slate-100 pl-8 pb-12 group-last:pb-0">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-slate-600 transition-colors">{exp.title}</h3>
                  <p className="text-slate-500 font-medium mb-4">{exp.organization}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-slate-600 flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Layers}>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            {portfolioData.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${project.title === "Financial Planning UI/UX Design" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-slate-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm group/link"
                  >
                    View Project
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Camera}>Activities & Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <span className="text-xs font-bold tracking-widest text-white/60 uppercase mb-2">
                    {activity.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {activity.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white text-slate-900 rounded-lg">
              <Code size={20} />
            </div>
            <h2 className="text-2xl font-display font-bold tracking-tight uppercase">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {portfolioData.skills.map((cat, i) => (
              <div key={i}>
                <h3 className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">Languages</h3>
              <div className="space-y-4">
                {portfolioData.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="font-medium">{lang.language}</span>
                    <span className="text-sm text-slate-400 italic">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-8">
              <div className="text-center">
                <Mic2 className="mx-auto mb-2 text-slate-400" />
                <span className="text-[10px] uppercase tracking-widest">Public Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Award}>Achievements</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((ach, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-slate-400">{ach.date}</span>
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-full">
                    <Award size={20} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">{ach.title}</h3>
                <p className="text-slate-500 font-medium mb-6 flex items-center gap-2">
                  <ExternalLink size={14} />
                  {ach.event}
                </p>
                <ul className="space-y-2">
                  {ach.details.map((detail, j) => (
                    <li key={j} className="text-sm text-slate-600 flex gap-2">
                      <span className="text-slate-300">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold tracking-tighter mb-8">Let's build something together.</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Mail size={18} />
              {portfolioData.email}
            </a>
            <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Phone size={18} />
              {portfolioData.phone}
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            © 2026 {portfolioData.name}. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
