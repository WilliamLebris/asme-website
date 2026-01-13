import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const OfficerCard = ({ officer, isPresident = false }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => isPresident && setShowModal(true)}
      >
        <div className={`relative ${isPresident ? 'cursor-pointer' : ''}`}>
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-asme-blue via-bcc-gold to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          
          {/* Card */}
          <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            {/* Image Container with Floating Animation */}
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  className="w-full aspect-square bg-gradient-to-br from-asme-blue to-bcc-gold flex items-center justify-center overflow-hidden"
>
  {officer.image ? (
    <img
      src={officer.image}
      alt={officer.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-white text-6xl font-bold">
      {officer.name.charAt(0)}
    </span>
  )}
</motion.div>

              
              {/* Rotating Ring Effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-white/50 border-r-white/50 rounded-xl"
              ></motion.div>
            </div>

            {/* Info Box */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-gradient-to-br from-asme-blue/90 to-bcc-blue/90 backdrop-blur-sm text-white p-4 rounded-lg mb-4"
                >
                  <h3 className="font-bold text-xl mb-1">{officer.name}</h3>
                  <p className="text-sm text-blue-100 mb-2">{officer.major}</p>
                  <p className="text-sm font-semibold text-bcc-gold">{officer.role}</p>
                  {officer.bio && (
                    <p className="text-sm mt-2 text-blue-50">{officer.bio}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name Badge (Always Visible) */}
            <div className="text-center">
              <h3 className="font-bold text-lg text-gray-800">{officer.name}</h3>
              <p className="text-sm text-gray-600">{officer.role}</p>
            </div>

            {isPresident && (
              <div className="mt-4 text-center">
                <span className="inline-block bg-gradient-to-r from-asme-blue to-bcc-gold text-white text-xs px-3 py-1 rounded-full">
                  Click to learn more
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* President Modal */}
      <AnimatePresence>
        {showModal && isPresident && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-asme-blue to-bcc-gold rounded-xl flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
                  {officer.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{officer.name}</h2>
                  <p className="text-asme-blue font-semibold mb-4">{officer.role}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">The Vision</h3>
                      <p className="text-gray-600">
                        {officer.vision || "Starting this club was about creating a space where engineering students could turn their ideas into reality. I wanted to build a community where passion meets opportunity."}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">What Keeps Me Going</h3>
                      <p className="text-gray-600">
                        {officer.motivation || "Seeing club members grow from curious beginners to confident engineers is incredibly rewarding. Every project we complete, every skill we master together, reminds me why this journey is worth it."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default OfficerCard