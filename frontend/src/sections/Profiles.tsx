import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const profiles = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/YourUsername',
    color: 'hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/YourUsername',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Upwork',
    icon: SiUpwork,
    url: 'https://www.upwork.com/YourProfile',
    color: 'hover:text-green-400',
  },
  {
    name: 'Fiverr',
    icon: SiFiverr,
    url: 'https://www.fiverr.com/YourProfile',
    color: 'hover:text-emerald-400',
  },
];

export const ProfilesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="profiles">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
          Connect With Me
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 transition-colors ${profile.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <profile.icon className="size-12" />
              <span className="font-medium">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent opacity-30" />
      </div>
    </section>
  );
};