import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ML Clustering Automation',
    desc: 'Semantic clustering using SentenceTransformers + KMeans to automate CR sorting. Improved accuracy by 60% and reduced review time by 500%.',
    tags: ['Python', 'ML', 'KMeans', 'Azure'],
    github: '#',
    live: '#'
  },
  {
    title: 'Ecogauge (HackUTD)',
    desc: 'Cross-platform Flutter app analyzing 100k+ government vehicle fuel-efficiency data points with interactive visualizations.',
    tags: ['Flutter', 'Figma', 'Data'],
    github: 'https://github.com/mohtashim-syed/Ecogauge',
    live: '#'
  },
  {
    title: 'Finfinity',
    desc: 'Personal finance app built with Node.js and frontend JS; reduced manual expense tracking time by 50%.',
    tags: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Shayansn/FinFinity',
    live: '#'
  },
  {
    title: 'DriveGuardian (HackAI)',
    desc: 'Computer vision app detecting risky driving behaviors using YOLOv5 and OpenCV; 2nd place at HackAI.',
    tags: ['Python', 'CV', 'YOLOv5'],
    github: 'https://github.com/Seichro/hackai-2023',
    live: '#'
  }
]

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Mohtashim Syed</h1>
          <p className="text-sm">Computer Science • UT Dallas '25 • AI / ML • Full-stack</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid gap-10">
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <motion.h2 className="text-4xl font-extrabold leading-tight" initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>Hi — I’m Mohtashim. I build AI-powered products and full-stack apps.</motion.h2>
            <p className="mt-4 text-gray-700">Computer Science student (UT Dallas) with hands-on experience in data science, AI/ML, and full-stack development. I enjoy automating manual processes and building scalable systems that deliver measurable business results.</p>

            <div className="mt-6 flex gap-3">
              <a href="mailto:mohtashimsyed2003@gmail.com" className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow">Email</a>
              <a href="http://linkedin.com/in/mohtashim-syed" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">LinkedIn</a>
              <a href="https://github.com/mohtashim-syed" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">GitHub</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Location:</strong> Richardson, TX • <strong>Graduation:</strong> Dec 2025
            </div>
          </div>
        </section>

        <section id="projects">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.article key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md" whileHover={{y:-4}}>
                <h4 className="font-bold">{p.title}</h4>
                <p className="text-sm mt-2 text-gray-700">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                  ))}
                </div>
                <div className="mt-3 flex gap-2 text-sm">
                  <a href={p.github} target="_blank" rel="noreferrer" className="underline">Source</a>
                  {p.live && <a href={p.live} className="underline">Live</a>}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}