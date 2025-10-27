import { Badge } from '@/components/ui/badge';
import { Palette, Music, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

export default function InterestsSection() {
  const interests = [
    { name: 'Drawing', icon: Palette },
    { name: 'Singing', icon: Music },
    { name: 'Reading Self-growth Books', icon: BookOpen },
  ];

  return (
    <motion.section
      className="relative py-20 md:py-32 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <BubbleBackground />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-interests-title">
            Interests
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Beyond coding, I enjoy creative pursuits and personal development.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-base flex items-center gap-2 hover-elevate"
                data-testid={`badge-interest-${index}`}
              >
                <interest.icon className="h-4 w-4" />
                {interest.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
