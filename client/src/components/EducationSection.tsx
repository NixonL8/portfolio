import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Loyola-ICAM College of Engineering and Technology',
      period: '2022 - 2026',
      grade: 'CGPA: 8.26',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Alagappa Matric HR. Sec. School',
      period: '2021 - 2022',
      grade: '82.6%',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Leaders Matric HR. Sec. School',
      period: '2019 - 2020',
      grade: '97.4%',
    },
  ];

  return (
    <motion.section
      id="education"
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-education-title">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="relative space-y-8">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border ml-6" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-0 md:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center bg-primary/10 border-2 border-primary rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>

              <Card className="p-6 md:p-8 hover-elevate" data-testid={`card-education-${index}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm font-mono w-fit">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2">
                  <span>{edu.grade}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
