import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'

const Projects = () => {
  const projects = [
    {
      title: 'Autonomous Delivery Robot',
      category: 'Robotics',
      description: 'Designed and built a fully autonomous delivery robot capable of navigating campus pathways, avoiding obstacles, and delivering packages to designated locations. Features include computer vision, path planning algorithms, and a custom mobile app interface.',
      tech: ['Arduino', 'ROS', 'Python', 'Computer Vision'],
      image: '🤖'
    },
    {
      title: '3D Printed Prosthetic Hand',
      category: 'Biomedical',
      description: 'Created an affordable prosthetic hand using 3D printing technology and servo motors. This project aims to provide low-cost solutions for amputees, featuring customizable designs and gesture-controlled movements.',
      tech: ['3D Printing', 'CAD', 'Arduino', 'Servo Control'],
      image: '🦾'
    },
    {
      title: 'Solar-Powered Water Purification System',
      category: 'Sustainability',
      description: 'Developed an off-grid water purification system powered entirely by solar energy. The system uses UV sterilization and multi-stage filtration to provide clean drinking water in remote areas.',
      tech: ['Solar Energy', 'Water Treatment', 'IoT Monitoring'],
      image: '💧'
    },
    {
      title: 'Smart Campus Energy Monitor',
      category: 'IoT & Energy',
      description: 'Built a real-time energy monitoring system for campus buildings that tracks electricity consumption, identifies inefficiencies, and provides actionable insights for reducing energy waste.',
      tech: ['IoT Sensors', 'Data Analytics', 'Web Dashboard'],
      image: '⚡'
    },
    {
      title: 'Formula SAE Racing Car',
      category: 'Automotive',
      description: 'Designed and manufactured a single-seat race car for the Formula SAE competition. The project involved aerodynamics optimization, chassis design, and extensive testing to achieve peak performance.',
      tech: ['CAD', 'CFD Analysis', 'Manufacturing', 'Testing'],
      image: '🏎️'
    },
    {
      title: 'Drone-Based Wildfire Detection',
      category: 'Aerospace',
      description: 'Developed an autonomous drone system equipped with thermal imaging cameras and AI algorithms to detect early signs of wildfires. The system can patrol large areas and alert authorities in real-time.',
      tech: ['Drone Technology', 'Thermal Imaging', 'Machine Learning'],
      image: '🚁'
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Project <span className="text-gradient">Impact</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Completed Projects' },
              { number: '50+', label: 'Students Involved' },
              { number: '10+', label: 'Awards Won' },
              { number: '$25K+', label: 'Funding Secured' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-asme-blue to-bcc-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Join our project teams and bring your ideas to life
            </p>
            <a
              href="/join-us"
              className="inline-block bg-white text-asme-blue px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Our Projects
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Projects