import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Boxes, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Boxes,
      skills: ['TensorFlow', 'Pandas', 'Scikit-learn', 'Matplotlib', 'NLTK'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Figma', 'AWS', 'GitHub', 'DynamoDB', 'API Gateway'],
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      skills: ['Leadership', 'Decision-Making', 'Resilience', 'Self-Motivation'],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="relative py-20 md:py-32 bg-card/30 overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-skills-title">
            Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover-elevate min-h-[200px]" data-testid={`card-skill-category-${index}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
