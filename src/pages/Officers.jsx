import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import OfficerCard from '../components/OfficerCard'
import AnimatedSection from '../components/AnimatedSection'

const Officers = () => {
const president = {
  name: 'Sawyer Kridech',
  role: 'President & Founder',
  major: 'Mechanical Engineering',
  bio: 'Passionate about robotics and sustainable engineering solutions',
  vision: 'I created this club to bring together students who share a passion for engineering and innovation. My goal was to create a space where we could collaborate, learn, and build amazing projects together.',
  motivation: 'Every time I see a club member succeed, whether it\'s completing their first project or landing an internship, I\'m reminded why I started this journey. The community we\'ve built is something truly special.',
  image: '/images/officers/president-pic.jpg',
}

 const vicePresidents = [
  {
    name: 'William LeBris',
    role: 'Co-President',
    major: 'Mechanical Engineering',
    bio: 'Passionate about robotics and sustainable engineering solutions',
    vision: 'I created this club to bring together students who share a passion for engineering and innovation.',
    motivation: 'Every time I see a club member succeed, I\'m reminded why I started this journey.',
    image: '/images/officers/william.jpg',
  },
  {
    name: 'Harsheet Patel',
    role: 'Co-President',
    major: 'Mechanical Engineering',
    bio: 'Dedicated to building an inclusive engineering community',
    vision: 'Leading ASME means creating opportunities for every student to excel in engineering.',
    motivation: 'Seeing our members grow and achieve their goals drives me every day.',
    image: '/images/officers/harsheet.jpg',
  }
]

  const officers = [
    {
      name: 'Emily Rodriguez',
      role: 'Treasurer',
      major: 'Mechanical Engineering',
      bio: 'Managing finances and sponsorships with excellence'
    },
    {
      name: 'David Kim',
      role: 'Secretary',
      major: 'Computer Engineering',
      bio: 'Keeping our club organized and documented'
    },
    {
      name: 'Jessica Patel',
      role: 'Outreach Coordinator',
      major: 'Civil Engineering',
      bio: 'Building connections with industry and community'
    },
    {
      name: 'Alex Thompson',
      role: 'Workshop Lead',
      major: 'Electrical Engineering',
      bio: 'Teaching technical skills and managing our makerspace'
    }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-asme-blue via-bcc-blue to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-10 -left-20 animate-float"></div>
          <div className="absolute w-96 h-96 bg-bcc-gold rounded-full blur-3xl bottom-10 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Meet Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Passionate students dedicated to building an amazing engineering community
          </motion.p>
        </div>
      </section>

      {/* President Section */}
      <section id="president" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-gradient">Visionary Leader</span>
            </h2>
            <p className="text-gray-600">Click to learn about the journey</p>
          </AnimatedSection>

          <div className="max-w-md mx-auto">
            <OfficerCard officer={president} isPresident={true} />
          </div>

          {/* Scroll Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 mt-12"
          >
            <motion.button
              onClick={() => scrollToSection('vice-presidents')}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-asme-blue"
            >
              <ChevronDown className="w-8 h-8 animate-bounce" />
              <ChevronDown className="w-8 h-8 animate-bounce -mt-4" style={{ animationDelay: '0.1s' }} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vice Presidents */}
      <section id="vice-presidents" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Vice <span className="text-gradient">Presidents</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vicePresidents.map((vp, index) => (
              <div key={vp.name}>
                <OfficerCard officer={vp} />
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-12"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.button
                key={i}
                onClick={() => scrollToSection('officers')}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-bcc-gold"
              >
                <ChevronDown className="w-6 h-6 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Officers */}
      <section id="officers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-gradient">Executive Team</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officers.map((officer, index) => (
              <OfficerCard key={officer.name} officer={officer} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-asme-blue to-bcc-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Be Part of Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              We're always looking for passionate students to join our leadership
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

export default Officers