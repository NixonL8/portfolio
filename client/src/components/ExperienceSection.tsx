import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'AWS Cloud Intern',
      company: 'F13 Technologies',
      period: 'Dec 2024 - May 2025',
      description: 'Developing cloud-based solutions and learning AWS services',
      achievements: [
        'Developed an AWS-based HR management console using DynamoDB and API Gateway',
        'Streamlined employee operations through serverless architecture',
        'Implemented RESTful APIs for data management',
      ],
    },
    {
      title: 'Cyber Security Intern',
      company: 'Edunet Foundation',
      period: 'Jan 2025 - Feb 2025',
      description: 'Focused on data security and encryption techniques',
      achievements: [
        'Implemented AES encryption/decryption in Python using the Cryptography library',
        'Developed secure data handling practices',
        'Created tools to protect sensitive information',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-experience-title">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="relative space-y-8">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border ml-6" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-0 md:pl-16">
              <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center bg-primary/10 border-2 border-primary rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              <Card className="p-6 md:p-8 hover-elevate" data-testid={`card-experience-${index}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm font-mono w-fit">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
