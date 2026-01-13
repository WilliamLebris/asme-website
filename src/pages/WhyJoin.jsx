import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const WhyJoin = () => {
  const [showQuestion, setShowQuestion] = useState(false)
  const navigate = useNavigate()

  const benefits = [
    {
      emoji: '🔧',
      title: 'Hands-On Experience',
      description: 'Work on real engineering projects, from design to implementation. Build robots, create prototypes, and bring ideas to life.',
      image: '🤖'
    },
    {
      emoji: '🌟',
      title: 'Professional Network',
      description: 'Connect with industry professionals, alumni, and fellow engineers. Attend networking events, company tours, and career fairs.',
      image: '🤝'
    },
    {
      emoji: '📚',
      title: 'Skill Development',
      description: 'Learn CAD, 3D printing, programming, electronics, and more through workshops and hands-on projects.',
      image: '💻'
    },
    {
      emoji: '🏆',
      title: 'Competitions & Awards',
      description: 'Participate in national engineering competitions and showcase your skills. Win awards and build your resume.',
      image: '🥇'
    },
    {
      emoji: '👥',
      title: 'Supportive Community',
      description: 'Join a welcoming community of passionate students. Make lifelong friends and find mentors who support your journey.',
      image: '❤️'
    },
    {
      emoji: '🚀',
      title: 'Leadership Opportunities',
      description: 'Take on leadership roles, manage projects, and develop essential soft skills for your career.',
      image: '📈'
    }
  ]

  const projects = [
    {
      title: 'Autonomous Delivery Robot',
      description: 'Built a fully autonomous robot that navigates campus and delivers packages using computer vision and AI.',
      image: '🤖',
      tech: 'Computer Vision • ROS • Python'
    },
    {
      title: 'Solar-Powered Water Purifier',
      description: 'Designed an off-grid water purification system providing clean water to remote communities.',
      image: '💧',
      tech: 'Solar Energy • Water Treatment • IoT'
    },
    {
      title: '3D Printed Prosthetic Hand',
      description: 'Created an affordable prosthetic hand using 3D printing and servo motors for gesture control.',
      image: '🦾',
      tech: '3D Printing • Arduino • Biomedical'
    },
    {
      title: 'Smart Energy Monitor',
      description: 'Developed an IoT system tracking campus energy consumption and identifying efficiency improvements.',
      image: '⚡',
      tech: 'IoT Sensors • Data Analytics • Dashboard'
    }
  ]

  const handleDoubting = (isDoubting) => {
    if (isDoubting) {
      setShowQuestion(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/join-us')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-asme-blue to-bcc-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute w-64 h-64 bg-white rounded-full blur-3xl"
              style={{
                left: `${i * 20}%`,
                top: `${i * 15}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Why Join ASME @ BCC?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8"
          >
            Everyone is Welcome! 🎉
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-blue-200 max-w-3xl mx-auto"
          >
            Whether you're a seasoned engineer or just curious about the field, ASME has something for you
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What You'll <span className="text-gradient">Gain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join ASME and unlock incredible opportunities
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="text-5xl mb-4">{benefit.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-4 text-4xl opacity-20">{benefit.image}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Amazing <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our members have built
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 0.15}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-asme-blue to-bcc-gold p-8 text-center">
                    <div className="text-8xl">{project.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(' • ').map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Question Section */}
      <section
        className="py-20 bg-white"
        onMouseEnter={() => setShowQuestion(true)}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            {showQuestion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                  Still Doubting? 🤔
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    onClick={() => handleDoubting(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Yes, tell me more
                  </motion.button>
                  <motion.button
                    onClick={() => handleDoubting(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-asme-blue to-bcc-gold text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>No, I'm ready to join!</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-asme-dark via-bcc-blue to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
  {/* ASME Logo Circle */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="absolute w-96 h-96 border-4 border-white rounded-full top-10 left-10 flex items-center justify-center bg-white/10 backdrop-blur-sm"
  >
    <img
      src="/logos/asme-circle-logo.jpg"
      alt="ASME Logo"
      className="w-40 h-40 object-contain"
    />
  </motion.div>

  {/* BCC Logo Circle */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    className="absolute w-96 h-96 border-4 border-bcc-gold rounded-full bottom-10 right-10 flex items-center justify-center bg-white/10 backdrop-blur-sm"
  >
    <img
      src="/logos/bcc-circle-logo.jpg"
      alt="BCC Logo"
      className="w-40 h-40 object-contain"
    />
  </motion.div>
</div>

        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I'm Sure You Want to Join Us Now! 😊
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't miss out on this incredible opportunity
            </p>
            <motion.a
              href="/join-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-white text-asme-blue px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span>Join ASME @ BCC Today</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </AnimatedSection>
        </div>

      </section>
            {/* Logos Footer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            
            {/* ASME Logo */}
            <motion.img
              src="/logos/asme-logo.png"
              alt="ASME Logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-16 object-contain"
            />

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>

            {/* BCC Logo */}
            <motion.img
              src="/logos/bcc-logo.png"
              alt="BCC Logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-16 object-contain"
            />
          </div>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Proudly representing ASME at BCC
          </p>
        </div>
      </section>

    </div>
  )
}

export default WhyJoin