import { Card } from '@/components/ui/card';
import { Code2, Award, Users } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, label: 'Projects', value: '5+' },
    { icon: Award, label: 'CGPA', value: '8.26' },
    { icon: Users, label: 'Internships', value: '2' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-about-title">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
              "I'm Nixon, an enthusiastic Information Technology student with a passion for learning and building meaningful tech solutions. I'm eager to apply my skills, grow with a forward-thinking team, and contribute to impactful projects in a dynamic work environment."
            </blockquote>

            <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Currently pursuing B.Tech in Information Technology at{' '}
                <span className="text-foreground font-medium">Loyola-ICAM College of Engineering and Technology</span>, Chennai, I'm driven by a desire to solve real-world problems through technology.
              </p>
              <p>
                My journey has taken me through exciting internships in cybersecurity and cloud computing, where I've worked with cutting-edge technologies like AES encryption, AWS DynamoDB, and API Gateway to build secure and scalable solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase()}`}>
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
