import { motion } from 'framer-motion'
import { Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react'

const SocialLinks = ({ className = '' }) => {
  const socials = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/berkeley-city-college-american-society-of-mechanical-engineers/',
      bg: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/bcc.mech.eng/',
      bg: 'bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
    },
    { 
      name: 'Discord', 
      icon: MessageCircle, 
      url: 'https://discord.gg/AWVXTEja',
      bg: 'bg-indigo-600 hover:bg-indigo-700'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:bccasmeclub@gmail.com',
      bg: 'bg-red-600 hover:bg-red-700'
    },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socials.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`${social.bg} text-white p-3 rounded-full shadow-lg transition-all duration-200`}
            title={social.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialLinks