import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, Plus } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'First Meeting',
      date: 'January 27, 2026',
      time: '12:30 PM - 1:30 PM',
      location: 'Physics Room 510',
      description: 'Kickoff meeting for Spring 2026 semester. Meet the team, learn about upcoming projects, and get involved!',
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Movie Night: The Wind Rises',
      date: 'January 29, 2026',
      time: 'TBA',
      location: 'Theater (TBA)',
      description: 'Join us for a screening of The Wind Rises. Food will be provided thanks to our secured grant!',
      type: 'social',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Hestus Event',
      date: 'February 6-7, 2026',
      time: 'TBA',
      location: 'TBA',
      description: 'Special collaboration event. More details coming soon!',
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'CAD Workshop',
      date: 'February 6-7, 2026',
      time: 'TBA',
      location: 'Engineering Lab',
      description: 'Learn Computer-Aided Design from our experienced members. Perfect for beginners!',
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Second Meeting',
      date: 'February 9-10, 2026',
      time: '12:30 PM - 1:30 PM',
      location: 'Physics Room 510',
      description: 'Regular club meeting to discuss ongoing projects and plan upcoming events.',
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Club Rush',
      date: 'February 16, 2026',
      time: 'TBA',
      location: 'Campus Center',
      description: 'Come meet us at Club Rush! Learn about ASME and sign up to join.',
      type: 'social',
      status: 'upcoming'
    },
    {
      id: 7,
      title: 'LinkedIn Workshop',
      date: 'February 16-19, 2026',
      time: 'TBA',
      location: 'TBA',
      description: 'Build your professional presence! Learn how to optimize your LinkedIn profile. Co-led by Nathan.',
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 8,
      title: 'Lab Research Workshop',
      date: 'February 16-19, 2026',
      time: 'TBA',
      location: 'TBA',
      description: 'Discover research opportunities and learn how to get involved in lab work. Co-led by Nathan.',
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 9,
      title: 'Third Meeting',
      date: 'February 23-24, 2026',
      time: '12:30 PM - 1:30 PM',
      location: 'Physics Room 510',
      description: 'Regular club meeting with project updates and team collaboration.',
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 10,
      title: 'Stanford Collaboration Event',
      date: 'March 11-17, 2026',
      time: 'TBA',
      location: 'Stanford University',
      description: 'Exciting collaboration with Stanford! Everyone welcome. Coordinate with Aleida for details.',
      type: 'tour',
      status: 'upcoming'
    },
    {
      id: 11,
      title: 'CADathon',
      date: 'March-April 2026',
      time: 'TBA',
      location: 'Engineering Lab',
      description: 'Design competition! Work with your team to create innovative CAD models. 3D printer will be available!',
      type: 'competition',
      status: 'upcoming'
    },
    {
      id: 12,
      title: 'Cross-Enrollment Event',
      date: 'April 27, 2026',
      time: 'TBA',
      location: 'TBA',
      description: 'Learn about cross-enrollment opportunities. Deadline to apply is April 27!',
      type: 'workshop',
      status: 'upcoming'
    }
  ]

  const eventColors = {
    meeting: 'from-blue-500 to-blue-600',
    workshop: 'from-purple-500 to-purple-600',
    social: 'from-green-500 to-green-600',
    tour: 'from-amber-500 to-amber-600',
    competition: 'from-red-500 to-red-600'
  }

  const eventIcons = {
    meeting: Users,
    workshop: Calendar,
    social: Users,
    tour: MapPin,
    competition: Calendar
  }

  const addToGoogleCalendar = (event) => {
    // Parse the date string
    const eventDate = new Date(event.date)
    const startDate = eventDate.toISOString().replace(/-|:|\.\d\d\d/g, '')
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '')
    
    const details = encodeURIComponent(event.description)
    const location = encodeURIComponent(event.location)
    const title = encodeURIComponent(event.title)

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`
    window.open(url, '_blank')
  }

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
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Spring 2026 - Join us for exciting workshops, meetings, and collaborations!
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => {
              const Icon = eventIcons[event.type]
              return (
                <AnimatedSection key={event.id} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col"
                  >
                    {/* Event Header */}
                    <div className={`bg-gradient-to-r ${eventColors[event.type]} p-4 text-white`}>
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 flex-grow">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start space-x-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-asme-blue" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-bcc-gold" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Add to Calendar Button */}
                    <div className="p-4 bg-gray-50 border-t border-gray-100">
                      <motion.button
                        onClick={() => addToGoogleCalendar(event)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${eventColors[event.type]} text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 shadow hover:shadow-lg transition-all`}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add to Calendar</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-asme-blue to-bcc-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Join ASME @ BCC and be part of these amazing events
            </p>
            <a
              href="/join-us"
              className="inline-block bg-white text-asme-blue px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Us Today
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Events