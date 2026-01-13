import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, X, Plus } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState('month') // 'day', 'week', 'month'
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Sample events - You can replace this with actual data
  const events = [
    {
      id: 1,
      title: 'Weekly Club Meeting',
      date: new Date(2026, 0, 14),
      time: '3:00 PM - 5:00 PM',
      location: 'Room 245, Engineering Building',
      description: 'Regular weekly meeting to discuss ongoing projects and plan upcoming events.',
      type: 'meeting'
    },
    {
      id: 2,
      title: '3D Printing Workshop',
      date: new Date(2026, 0, 16),
      time: '2:00 PM - 4:00 PM',
      location: 'Makerspace Lab',
      description: 'Learn the fundamentals of 3D printing, from design to final product.',
      type: 'workshop'
    },
    {
      id: 3,
      title: 'Industry Tour - Tesla Factory',
      date: new Date(2026, 0, 20),
      time: '10:00 AM - 2:00 PM',
      location: 'Fremont, CA',
      description: 'Exclusive tour of Tesla manufacturing facility. Transportation provided.',
      type: 'tour'
    },
    {
      id: 4,
      title: 'Weekly Club Meeting',
      date: new Date(2026, 0, 21),
      time: '3:00 PM - 5:00 PM',
      location: 'Room 245, Engineering Building',
      description: 'Regular weekly meeting to discuss ongoing projects and plan upcoming events.',
      type: 'meeting'
    },
    {
      id: 5,
      title: 'Robot Competition Prep',
      date: new Date(2026, 0, 23),
      time: '4:00 PM - 7:00 PM',
      location: 'Robotics Lab',
      description: 'Final preparations for the regional robotics competition.',
      type: 'project'
    }
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const changeDay = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + direction)
    setCurrentDate(newDate)
  }

  const getEventsForDate = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return events.filter(event =>
      event.date.toDateString() === date.toDateString()
    )
  }

  const addToGoogleCalendar = (event) => {
    const startDate = event.date.toISOString().replace(/-|:|\.\d\d\d/g, '')
    const endDate = new Date(event.date.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '')
    const details = encodeURIComponent(event.description)
    const location = encodeURIComponent(event.location)
    const title = encodeURIComponent(event.title)

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`
    window.open(url, '_blank')
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const eventColors = {
    meeting: 'from-blue-500 to-blue-600',
    workshop: 'from-purple-500 to-purple-600',
    tour: 'from-green-500 to-green-600',
    project: 'from-amber-500 to-amber-600'
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-asme-blue via-bcc-blue to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute w-96 h-96 bg-bcc-gold rounded-full blur-3xl right-0 bottom-0 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Events Calendar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100"
          >
            Never miss an ASME event!
          </motion.p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => view === 'day' ? changeDay(-1) : changeMonth(-1)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {view === 'day'
                  ? currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                  : `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                }
              </h2>
              <button
                onClick={() => view === 'day' ? changeDay(1) : changeMonth(1)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex space-x-2">
              {['day', 'month'].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    view === v
                      ? 'bg-gradient-to-r from-asme-blue to-bcc-gold text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
              >
                Today
              </button>
            </div>
          </div>

          {/* Month View */}
          {view === 'month' && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Day Headers */}
              <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                {dayNames.map(day => (
                  <div key={day} className="p-4 text-center font-semibold text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {[...Array(startingDayOfWeek)].map((_, i) => (
                  <div key={`empty-${i}`} className="border border-gray-100 p-2 h-32 bg-gray-50"></div>
                ))}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1
                  const dayEvents = getEventsForDate(day)
                  const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()

                  return (
                    <motion.div
                      key={day}
                      whileHover={{ scale: 1.02 }}
                      className={`border border-gray-100 p-2 h-32 cursor-pointer hover:bg-blue-50 transition-colors ${
                        isToday ? 'bg-blue-50 ring-2 ring-asme-blue' : ''
                      }`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-asme-blue' : 'text-gray-600'}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className={`text-xs bg-gradient-to-r ${eventColors[event.type]} text-white px-2 py-1 rounded truncate hover:scale-105 transition-transform`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Day View */}
          {view === 'day' && (
            <div className="space-y-4">
              {getEventsForDate(currentDate.getDate()).length > 0 ? (
                getEventsForDate(currentDate.getDate()).map(event => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedEvent(event)}
                    className={`bg-gradient-to-r ${eventColors[event.type]} text-white rounded-2xl p-6 shadow-xl cursor-pointer`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 opacity-90">{event.description}</p>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">No events scheduled for this day</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>

              <div className={`inline-block bg-gradient-to-r ${eventColors[selectedEvent.type]} text-white px-4 py-1 rounded-full text-sm font-semibold mb-4`}>
                {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CalendarIcon className="w-5 h-5 text-asme-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Date</p>
                    <p className="text-gray-600">{selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-asme-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Time</p>
                    <p className="text-gray-600">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-asme-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              <motion.button
                onClick={() => addToGoogleCalendar(selectedEvent)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>Add to Google Calendar</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Calendar