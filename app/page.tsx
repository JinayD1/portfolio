'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
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
    link: 'https://www.linkedin.com/company/handsforu/',
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

// Animation variants for scroll-linked animations
const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Lightbox Component
interface LightboxProps {
  image: { src: string; alt: string } | null
  onClose: () => void
}

function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#ffffff] transition-colors duration-200"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

// Explosion Entry Animation Component
function ExplosionOverlay({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        scale: 15
      }}
      transition={{
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className="fixed inset-0 z-[100] bg-[#ffffff] pointer-events-none"
      style={{ transformOrigin: 'center center' }}
    />
  )
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [showExplosion, setShowExplosion] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Skip explosion animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setShowExplosion(false)
      setShowContent(true)
    }
  }, [prefersReducedMotion])

  const handleExplosionComplete = () => {
    setShowExplosion(false)
    setShowContent(true)
  }

  // Header stagger animation variants
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const headerItemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <>
      {/* Explosion Entry Animation */}
      <AnimatePresence>
        {showExplosion && (
          <ExplosionOverlay onComplete={handleExplosionComplete} />
        )}
      </AnimatePresence>

      {/* Lightbox Portal */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </AnimatePresence>

      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#0a0a0a]">
        <div className="max-w-content mx-auto">
          {/* Header with staggered animations */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-12 sm:mb-16 gap-6 sm:gap-8"
                variants={headerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex-1">
                  {/* Name */}
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#ffffff] mb-2"
                    variants={headerItemVariants}
                  >
                    Jinay Desai
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p
                    className="text-[#888888] text-sm sm:text-base mb-4"
                    variants={headerItemVariants}
                  >
                    First-Year computer science student at UWaterloo.
                  </motion.p>

                  {/* Badges */}
                  <motion.div
                    className="flex flex-wrap items-center gap-3"
                    variants={headerItemVariants}
                  >
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
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="flex items-center gap-4 sm:gap-6 mt-4"
                    variants={headerItemVariants}
                  >
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
                  </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 self-start sm:self-auto"
                  variants={headerItemVariants}
                >
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Section with scroll-linked animation */}
          <AnimatePresence>
            {showContent && (
              <motion.section
                className="mb-12 sm:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
              >
                <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
                  what i've been working on:
                </h2>
                <motion.div
                  className="space-y-4 sm:space-y-6"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {PROJECTS_DATA.map((project) => (
                    <motion.div
                      key={project.id}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      variants={staggerItemVariants}
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
                            transition={{ duration: 0.3, ease: 'easeOut' }}
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

                              {/* Project Images - Clickable for Lightbox */}
                              {project.images.length > 0 && (
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                  {project.images.map((img, index) => (
                                    <motion.div
                                      key={index}
                                      className="relative flex-shrink-0 w-64 h-40 sm:w-80 sm:h-48 rounded-lg overflow-hidden border border-[#888888]/20 bg-[#888888]/5 cursor-pointer"
                                      onClick={() => setLightboxImage(img)}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      transition={{ duration: 0.2, ease: 'easeOut' }}
                                    >
                                      <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        sizes="(max-width: 640px) 256px, 320px"
                                      />
                                      {/* Hover overlay hint */}
                                      <div className="absolute inset-0 bg-[#0a0a0a]/0 hover:bg-[#0a0a0a]/20 transition-colors duration-200 flex items-center justify-center">
                                        <span className="text-[#ffffff] opacity-0 hover:opacity-100 transition-opacity duration-200 text-sm font-medium">
                                          Click to expand
                                        </span>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Experience Section with scroll-linked animation */}
          <AnimatePresence>
            {showContent && (
              <motion.section
                className="mb-12 sm:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
              >
                <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
                  where i've been:
                </h2>
                <motion.div
                  className="space-y-6 sm:space-y-8"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {EXPERIENCES_DATA.map((experience) => (
                    <motion.div
                      key={experience.id}
                      className="flex items-start gap-4"
                      variants={staggerItemVariants}
                    >
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
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Notable Achievements Section with scroll-linked animation */}
          <AnimatePresence>
            {showContent && (
              <motion.section
                className="mb-12 sm:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
              >
                <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
                  some cool things i've done:
                </h2>
                <motion.div
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {ACHIEVEMENTS_DATA.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      className="flex items-start gap-3"
                      variants={staggerItemVariants}
                    >
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
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Education Section with scroll-linked animation */}
          <AnimatePresence>
            {showContent && (
              <motion.section
                className="mb-12 sm:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
              >
                <h2 className="text-lg sm:text-xl text-[#888888] italic mb-6 sm:mb-8 lowercase">
                  education:
                </h2>
                <motion.div
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {EDUCATION_DATA.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      variants={staggerItemVariants}
                    >
                      <span className="text-[#888888] text-sm sm:text-base mt-0.5">◆</span>
                      <p className="text-[#ffffff] text-sm sm:text-base">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  )
}
