import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Boxes, Wrench, Heart } from 'lucide-react';

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
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-skills-title">
            Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-category-${index}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
