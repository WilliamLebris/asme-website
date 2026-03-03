import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, Users, Lightbulb, ChevronDown } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SocialLinks from '../components/SocialLinks'

const Home = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Hands-On Projects',
      description: 'Build real engineering projects and gain practical experience',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Network & Grow',
      description: 'Connect with fellow engineers and industry professionals',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Turn your ideas into reality with our resources and support',
      color: 'from-amber-500 to-amber-600'
    },
  ]

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-asme-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bcc-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section */}
            
            {/* Logo Section */}
            {/* <div className="flex justify-center items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
              >
                <img
                  src="/logos/asme-logo.png" // from public/logos
                  alt="ASME Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
              >
                <img
                  src="/logos/bcc-logo.png" // from public/logos
                  alt="BCC Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div> */}
            {/* Logo Section - Static */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/images/bcc-mech.png"
                  alt="ASME Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>


            


            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">ASME</span>
              <br />
              <span className="text-gray-800">Berkeley City College</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Where Innovation Meets Engineering Excellence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/join-us"
                className="group bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Join Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-asme-blue text-asme-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-asme-blue hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            <SocialLinks className="justify-center" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToContent}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-asme-blue" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-gradient">ASME @ BCC?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a community of passionate engineers and innovators
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedSection
                  key={feature.title}
                  delay={index * 0.2}
                  direction="up"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-asme-dark via-bcc-blue to-asme-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-bcc-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join ASME @ BCC today and be part of something extraordinary
            </p>
            <Link
              to="/join-us"
              className="inline-block bg-white text-asme-blue px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Active Members' },
              { number: '20+', label: 'Events Per Year' },
              { number: '100%', label: 'Passion Driven' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
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
    </div>
  )
}

export default Home