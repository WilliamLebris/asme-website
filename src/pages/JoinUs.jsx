import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Clock, CheckCircle, Send, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import emailjs from '@emailjs/browser';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    major: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS Configuration
    // You need to:
    // 1. Sign up at emailjs.com
    // 2. Create an email service
    // 3. Create an email template
    // 4. Replace these values with your actual IDs
    //done ive already dealt with it
    const SERVICE_ID = 'service_9idmza4'
    const TEMPLATE_ID = 'template_18ou6ub'
    const USER_ID = 'DErKIkKC644UQuoDk'

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          student_id: formData.studentId,
          major: formData.major,
          message: formData.message
        },
        USER_ID
      )

      setStatus({
        type: 'success',
        message: 'Thank you for your interest! We\'ll be in touch soon.'
      })
      setFormData({ name: '', email: '', studentId: '', major: '', message: '' })
    } catch (error) {
      console.error(error); // now you "read" it
      setStatus({ type: 'error', message: 'Oops! Something went wrong.' })
    }
    finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-asme-blue via-bcc-blue to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute w-96 h-96 bg-bcc-gold rounded-full blur-3xl right-0 bottom-0 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join Our Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Become part of Berkeley City College's premier engineering organization
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asme-blue focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asme-blue focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Student ID
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asme-blue focus:border-transparent outline-none transition-all"
                      placeholder="12345678"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Major
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asme-blue focus:border-transparent outline-none transition-all"
                      placeholder="Mechanical Engineering"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Why are you interested in joining ASME? *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asme-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about yourself and your interest in engineering..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Status Messages */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-6 p-4 rounded-lg flex items-center space-x-3 ${
                        status.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {status.type === 'success' && (
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      )}
                      <p>{status.message}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection direction="right">
                <div className="bg-gradient-to-br from-asme-blue to-bcc-blue text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">
                    Or Email Us Directly
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Email Address</p>
                        <a
                          href="mailto:bccasmeclub@gmail.com"
                          className="text-blue-100 hover:text-white transition-colors"
                        >
                          bccasmeclub@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Include your student ID and tell us why you're interested in joining ASME!
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Just Want to Walk In?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Check our calendar for upcoming meetings and events!
                  </p>
                  <Link
                    to="/calendar"
                    className="inline-flex items-center space-x-2 text-asme-blue hover:text-bcc-gold font-semibold transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>View Calendar</span>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-bcc-gold to-amber-600 text-white rounded-2xl p-6 shadow-xl cursor-pointer"
                >
                  <p className="text-2xl font-bold mb-4">💙 We'd love to see ya!</p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Find <span className="text-gradient">Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.2961876832743!2d-122.27159668468197!3d37.86986797974094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e9e6e8e8e8d%3A0x8e8e8e8e8e8e8e8e!2sBerkeley%20City%20College!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="BCC Location"
                ></iframe>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-asme-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600">
                      Berkeley City College<br />
                      2050 Center Street<br />
                      Berkeley, CA 94704
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-bcc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Meeting Location</h3>
                    <p className="text-gray-600">
                      Room 245, Engineering Building
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Meeting Time</h3>
                    <p className="text-gray-600">
                      Every Wednesday (College Hours)<br />
                      12:30 PM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinUs