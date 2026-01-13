import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { Target, Globe, Award, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To advance the science and practice of mechanical engineering through hands-on projects, professional development, and community engagement.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Part of the worldwide ASME organization with over 130,000 members across 150+ countries.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards of engineering education and professional development.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive environment where engineers learn, grow, and inspire each other.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-asme-blue via-bcc-blue to-asme-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-bcc-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What is ASME?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              The American Society of Mechanical Engineers - Empowering the global engineering community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-asme-blue to-bcc-gold rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Founded in 1880, ASME is a not-for-profit membership organization that enables collaboration, knowledge sharing, career enrichment, and skills development across all engineering disciplines.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At Berkeley City College, our ASME chapter brings together students passionate about mechanical engineering, robotics, design, and innovation. We provide a platform to apply classroom knowledge to real-world projects.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're interested in 3D printing, robotics, manufacturing, or aerospace, ASME @ BCC offers opportunities to explore, learn, and grow.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-asme-blue mb-3">Who We Serve</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asme-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Engineering Students</strong> - From all majors and skill levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asme-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Future Innovators</strong> - Those passionate about design and problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asme-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Career Seekers</strong> - Building professional networks and skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asme-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Community Members</strong> - Anyone curious about engineering</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-bcc-gold mb-3">What We Do</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bcc-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Hands-on engineering projects and competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bcc-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Professional development workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bcc-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Industry tours and networking events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bcc-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Community outreach and STEM education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Values Grid */}
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our <span className="text-gradient">Core Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-asme-blue to-bcc-gold rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              See ASME in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how ASME is shaping the future of engineering
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
  <div className="aspect-video bg-gray-900 relative">
    <iframe
      src="https://www.youtube.com/embed/RO_y82B3dtM"
      title="YouTube video player"
      className="absolute top-0 left-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

          </AnimatedSection>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ASME Global Projects
            </h2>
            <p className="text-xl text-gray-600">
              Inspiring innovation worldwide
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Human-Powered Vehicle',
                description: 'Annual design competition challenging students to create efficient human-powered vehicles',
                image: '🚴'
              },
              {
                title: 'Student Design Competition',
                description: 'Tackling real-world engineering challenges with innovative solutions',
                image: '🏆'
              },
              {
                title: 'Robotics & Automation',
                description: 'Advancing robotics technology for industrial and consumer applications',
                image: '🤖'
              }
            ].map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About