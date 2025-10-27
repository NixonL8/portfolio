import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

export default function HeroSection() {
  const roles = [
    'Aspiring SDE',
    'Business Analyst',
    'UI/UX Designer',
    'MERN Engineer',
    'Cloud Enthusiast',
    'Cybersecurity Analyst',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(240, 20%, 10%) 0%, hsl(280, 30%, 15%) 50%, hsl(320, 25%, 12%) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <BubbleBackground />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-primary text-lg md:text-xl font-mono cursor-default"
              data-testid="text-greeting"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white cursor-default"
              data-testid="text-name"
            >
              Nixon L
            </motion.h1>
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl md:text-3xl lg:text-4xl text-primary font-heading font-medium cursor-default"
                  data-testid="text-role"
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed cursor-default"
          >
            Passionate about building meaningful tech solutions and eager to contribute to impactful projects in a dynamic work environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-border"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="backdrop-blur-sm bg-background/10 border-border/50 text-white hover:bg-background/20"
                data-testid="button-projects"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center pt-4"
          >
            <motion.a
              href="https://github.com/NixonL8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-github"
            >
              <Github className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nixon-l-b89280267/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8 text-foreground/50" />
      </button>
    </section>
  );
}
