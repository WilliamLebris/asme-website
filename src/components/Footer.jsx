import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com',
      color: 'hover:text-pink-600'
    },
    { 
      name: 'Discord', 
      icon: MessageCircle, 
      url: 'https://discord.com',
      color: 'hover:text-indigo-600'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:bccasmeclub@gmail.com',
      color: 'hover:text-red-600'
    },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About ASME', path: '/about' },
    { name: 'Our Officers', path: '/officers' },
    { name: 'Projects', path: '/projects' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Join Us', path: '/join-us' },
  ]

  return (
    <footer className="bg-gradient-to-br from-asme-dark via-bcc-blue to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
          {/* ASME Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src="/logos/asme-logo.png"
              alt="ASME Logo"
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* BCC Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src="/logos/bcc-logo.png"
              alt="BCC Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

            <h3 className="text-xl font-bold mb-3">ASME @ BCC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              American Society of Mechanical Engineers chapter at Berkeley City College. 
              Join us to explore engineering, build projects, and connect with future engineers!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-bcc-gold transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-bcc-gold rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bcc-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Berkeley City College<br />
                    2050 Center Street<br />
                    Berkeley, CA 94704
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bcc-gold flex-shrink-0" />
                <a 
                  href="mailto:asme@berkeleycitycollege.edu"
                  className="text-gray-300 hover:text-bcc-gold transition-colors text-sm"
                >
                  bccasmeclub@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-300 ${social.color} transition-colors duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ASME Berkeley City College Chapter. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with passion by the ASME Web Development Team
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer