import { Badge } from '@/components/ui/badge';
import { Palette, Music, BookOpen } from 'lucide-react';

export default function InterestsSection() {
  const interests = [
    { name: 'Drawing', icon: Palette },
    { name: 'Singing', icon: Music },
    { name: 'Reading Self-growth Books', icon: BookOpen },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-interests-title">
            Interests
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Beyond coding, I enjoy creative pursuits and personal development.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {interests.map((interest, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-base flex items-center gap-2 hover-elevate"
              data-testid={`badge-interest-${index}`}
            >
              <interest.icon className="h-4 w-4" />
              {interest.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
