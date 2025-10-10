import { Card } from '@/components/ui/card';
import { Trophy, Code, MessageSquare } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: 'Code Palooza Winner',
      description: 'Secured prize in competitive coding competition',
      icon: Trophy,
    },
    {
      title: 'E-Voting System Contributor',
      description: 'Developed and contributed to a Web-based E-Voting System',
      icon: Code,
    },
    {
      title: 'Zoho Cliqtrix Competition',
      description: 'Participated in Zoho Chatbot Competition',
      icon: MessageSquare,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-achievements-title">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-achievement-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
