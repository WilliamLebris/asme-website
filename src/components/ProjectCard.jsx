import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-asme-blue to-bcc-gold rounded-2xl transform group-hover:rotate-3 transition-transform duration-300"></div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-white p-4 rounded-2xl shadow-xl"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-6xl overflow-hidden">
            {project.image || '📐'}
          </div>
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-4 bg-asme-blue/90 rounded-xl flex items-center justify-center cursor-pointer"
          >
            <ExternalLink className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-gradient-to-r from-asme-blue to-bcc-gold text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
          
          {project.tech && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard