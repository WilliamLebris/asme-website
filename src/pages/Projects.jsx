import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const Projects = () => {
  const projects = [
    {
      title: 'ASME Student Design Competition - Automated Vehicle',
      category: 'Automotive Engineering',
      description: 'Our team is competing in the ASME Student Design Competition, designing and building an automated vehicle from the ground up. This ambitious project combines mechanical design, electronics, and programming to create a vehicle capable of autonomous navigation. Team members are gaining hands-on experience in CAD modeling, manufacturing, circuit design, and software development while working towards competition deadlines.',
      tech: ['Autonomous Systems', 'CAD Design', 'Electronics', 'Programming', 'Manufacturing'],
      image: '/images/projects/car-flyer-project.png',
      isLeft: true
    },
    {
      title: 'Community Engagement & Campus Outreach',
      category: 'Student Outreach',
      description: 'ASME @ BCC actively engages with the campus community through tabling events, workshops, and presentations. We set up information booths to connect with students, share our projects, and inspire the next generation of engineers. Our tabling events are a great opportunity to meet the team, learn about ongoing projects, and discover how you can get involved in hands-on engineering activities!',
      tech: ['Community Building', 'Student Engagement', 'STEM Promotion', 'Campus Activities'],
      image: '/images/projects/tabling.png',
      isLeft: false
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-asme-blue via-purple-900 to-bcc-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute w-96 h-96 bg-bcc-gold rounded-full blur-3xl right-0 bottom-0"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Innovation in action - From concept to reality
          </motion.p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 0.2}
                direction={project.isLeft ? 'left' : 'right'}
              >
                <div className={`flex flex-col ${project.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-asme-blue to-bcc-gold rounded-2xl transform group-hover:rotate-3 transition-transform duration-300"></div>
                      <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto rounded-xl object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <div className="w-full md:w-1/2">
                    <span className="inline-block bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Your Project Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Have a <span className="text-gradient">Project Idea?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for innovative project ideas from our members! Share your vision and let's build something amazing together.
              </p>
              <motion.a
                href="https://forms.gle/your-form-link-here"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Pitch Your Project
              </motion.a>
              <p className="mt-4 text-gray-500 text-sm">
                Fill out our project proposal form and our team will review it
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
    <section className="py-16 bg-gradient-to-r from-asme-blue to-bcc-gold text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Get Involved?
      </h2>
      <p className="text-xl text-blue-100 mb-6">
        Join our team and work on exciting engineering projects
      </p>
      
      <a
        href="/join-us"
        className="inline-block bg-white text-asme-blue px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Join ASME @ BCC
      </a>
    </AnimatedSection>
  </div>
</section>
    </div>
  )
}

export default Projects