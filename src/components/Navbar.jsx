import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: "What's ASME?", path: '/about' },
        { name: 'Our Officers', path: '/officers' }
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Why Join?', path: '/why-join' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logos */}
         {/* Logos */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="flex items-center space-x-2">
            {/* ASME Logo */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img
                src="/logos/asme-logo.png" // from public/logos
                alt="ASME Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* BCC Logo */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img
                src="/logos/bcc-logo.png" // from public/logos
                alt="BCC Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-asme-blue">ASME @ BCC</p>
            <p className="text-xs text-gray-600">Berkeley City College</p>
          </div>
        </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setAboutDropdown(true)}
                      onMouseLeave={() => setAboutDropdown(false)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-asme-blue font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {aboutDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          onMouseEnter={() => setAboutDropdown(true)}
                          onMouseLeave={() => setAboutDropdown(false)}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                        >
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-asme-blue hover:text-white transition-colors duration-200"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-asme-blue font-medium transition-colors duration-200 relative ${
                      location.pathname === item.path ? 'text-asme-blue' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-asme-blue"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/join-us"
              className="bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-asme-blue transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-lg shadow-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setAboutDropdown(!aboutDropdown)}
                          className="w-full text-left text-gray-700 hover:text-asme-blue font-medium flex items-center justify-between"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {aboutDropdown && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.dropdownItems.map((dropItem) => (
                                <Link
                                  key={dropItem.name}
                                  to={dropItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-gray-600 hover:text-asme-blue"
                                >
                                  {dropItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-700 hover:text-asme-blue font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/join-us"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-6 py-3 rounded-full font-semibold"
                >
                  Join Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar