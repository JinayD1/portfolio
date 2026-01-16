'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Project data structure
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'billbuddy.ai',
    headline: 'won 1st place out of 50+ hackers @ UWaterloo Hackathon',
    detailedDescription: 'AI-powered bill analysis application using OpenAI LLMs/SLMs and Azure. Won 1st place out of 50+ hackers at the UWaterloo PM Club Hackathon. Helps users understand and manage their bills through intelligent categorization and insights. Built with modern web technologies for seamless user experience.',
    tags: ['hackathon', 'AI'],
    skills: ['React', 'FastAPI', 'OpenAI', 'Azure', 'Python'],
    githubUrl: 'https://github.com/JinayD1/billbuddy',
    images: [
      { src: '/projects/billbuddy-1.png', alt: 'BillBuddy Dashboard' },
      { src: '/projects/billbuddy-2.png', alt: 'BillBuddy Analysis' },
    ],
  },
  {
    id: 2,
    title: 'uinvestor',
    headline: 'built a full-stack trading platform with 100+ unique users',
    detailedDescription: 'A comprehensive investment simulation platform that allows users to practice stock trading with virtual money. Features real-time market data, portfolio tracking, SQL-based leaderboards, and educational resources to help users learn about investing.',
    tags: ['fintech', 'full-stack'],
    skills: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'ExpressJS'],
    githubUrl: 'https://github.com/JinayD1/uinvestor',
    images: [
      { src: '/projects/uinvestor-1.png', alt: 'UInvestor Dashboard' },
      { src: '/projects/uinvestor-2.png', alt: 'UInvestor Portfolio' },
    ],
  },
  {
    id: 3,
    title: 'freshvision',
    headline: 'engineered a CV-powered food waste reduction system',
    detailedDescription: 'Computer vision food-waste reduction system that uses AI to identify and reduce food waste in commercial kitchens. Combines real-time image processing with data analytics to provide actionable insights for sustainability.',
    tags: ['computer vision', 'AI'],
    skills: ['Python', 'OpenCV', 'TensorFlow', 'React', 'FastAPI'],
    githubUrl: 'https://github.com/JinayD1/FreshVision',
    images: [
      { src: '/projects/freshvision-1.jpg', alt: 'Fresh Vision Interface' },
    ],
  },
]

// Notable Achievements data structure
const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    text: 'HOSA National Champion & International Finalist — 2nd place in Canada; International qualifier in Dallas, TX.',
    certificateLink: '/hosa-certificate.pdf',
  },
  {
    id: 2,
    text: 'National 6th Place: UWaterloo Financial Literacy Competition — Top 0.3% of 1,700+ participants.',
    link: 'https://uwaterloo.ca/school-of-accounting-and-finance/teachers-and-guidance-counsellors/financial-literacy-competition-flc/past-flc-results',
  },
  {
    id: 3,
    text: 'Harvard CS50 Completion — Completed during COVID-19 lockdown.',
    certificateLink: 'https://certificates.cs50.io/9a7a680b-7b8f-44f1-84b4-8d3e7f8202cd.pdf?size=letter',
  },
]

// Experience data structure
const EXPERIENCES_DATA = [
  {
    id: 1,
    company: 'Hands',
    role: 'Software Engineering Intern',
    date: 'Oct 2025 – Present',
    location: '',
    skills: ['RAG', 'PostgreSQL', 'Vector DB', 'Node.js'],
    description: 'Implemented RAG embedding search for 10,000+ items, improving search relevancy by 66%. Built PostgreSQL vector database implementation and scalable backend services for AI-powered features.',
    logo: '/companies/hands.jpeg',
    link: 'https://app.handsforu.com/',
  },
  {
    id: 2,
    company: 'WATonomous',
    role: 'Software Engineer',
    date: 'Sept 2025 – Jan 2026',
    location: '',
    skills: ['Python', 'C++', 'Perception', 'Localization'],
    description: 'Built perception and localization pipelines for autonomous vehicles in Python and C++. Implemented sensor fusion and point cloud processing algorithms for real-time navigation systems.',
    logo: '/companies/wato.jpeg',
    link: 'https://www.watonomous.ca/projects/eve',
  },
]

const EDUCATION_DATA = [
  'Pursuing Bachelor of Computer Science @ University of Waterloo',
]

const SOCIALS_DATA = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/jinayd1' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/jinaydesai' },
  { name: 'Email', icon: Mail, url: 'mailto:j23desai@uwaterloo.ca' },
]

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#ffffff] mb-2">
              Jinay Desai
            </h1>
            <p className="text-[#888888] text-sm sm:text-base mb-4">
              First-Year computer science student at UWaterloo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Location Badge */}
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#888888]/30 text-[#888888] text-xs sm:text-sm">
                Waterloo, Canada
              </span>
              {/* Status Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 text-[#888888] text-xs sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>
                  Seeking <span className="font-normal text-[#888888]/70">summer 2026</span> co-ops
                </span>
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6 mt-4">
              {SOCIALS_DATA.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name === 'Email' ? undefined : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} className="sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 self-start sm:self-auto">
            <div className="rounded-full overflow-hidden w-full h-full border-2 border-[#888888]/20 bg-[#888888]/10">
              <Image
                src="/profile.png"
                alt="Jinay Desai"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
            what i've been working on:
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Title Row */}
                <motion.div
                  className="flex items-start gap-2 sm:gap-3"
                  animate={{
                    scale: hoveredProject === project.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span className="text-[#ffffff] text-lg sm:text-xl mt-0.5 flex-shrink-0">↳</span>
                  <div className="flex items-start gap-2 flex-wrap flex-1">
                    <a
                      href="#"
                      className="font-bold text-base sm:text-lg text-[#ffffff]"
                    >
                      {project.title}
                    </a>
                    <span className="text-[#888888] text-base sm:text-lg">— {project.headline}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200 text-base sm:text-lg"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="ml-6 sm:ml-8 mt-3 space-y-4">
                        {/* Detailed Description */}
                        <p className="text-[#888888] text-sm sm:text-base">
                          {project.detailedDescription}
                        </p>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#888888]/30 text-[#888888] text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Project Images */}
                        {project.images.length > 0 && (
                          <div className="flex gap-3 overflow-x-auto pb-2">
                            {project.images.map((img, index) => (
                              <div
                                key={index}
                                className="relative flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48 rounded-lg overflow-hidden border border-[#888888]/20 bg-[#888888]/5"
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 640px) 256px, 320px"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
            where i've been:
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCES_DATA.map((experience) => (
              <div key={experience.id} className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden border border-[#888888]/20 bg-[#888888]/10">
                  {experience.logo && experience.logo !== '#' ? (
                    <Image
                      src={experience.logo.startsWith('/') ? experience.logo : `/${experience.logo}`}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#888888]/30 text-xs font-bold">
                      {experience.company.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Experience Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#ffffff] text-sm sm:text-base mb-1">
                        {experience.role} @ {experience.company}
                      </h3>
                      <p className="text-[#888888] text-xs sm:text-sm">
                        {experience.date}{experience.location && `, ${experience.location}`}
                      </p>
                    </div>
                    {experience.link !== '#' && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200 flex-shrink-0"
                        aria-label={`View ${experience.company}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#888888]/30 text-[#888888] text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-[#888888] text-sm sm:text-base">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Achievements Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
            some cool things i've done:
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {ACHIEVEMENTS_DATA.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3">
                <span className="text-[#ffffff] text-lg sm:text-xl mt-0.5 flex-shrink-0">↳</span>
                <div className="flex-1">
                  <p className="text-[#ffffff] text-sm sm:text-base inline">
                    {achievement.text}
                  </p>
                  {achievement.certificateLink && (
                    <a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200 text-xs ml-2"
                    >
                      Certificate ↗
                    </a>
                  )}
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200 text-xs ml-2"
                    >
                      Link ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
            education:
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {EDUCATION_DATA.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#888888] text-sm sm:text-base mt-0.5">◆</span>
                <p className="text-[#ffffff] text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
