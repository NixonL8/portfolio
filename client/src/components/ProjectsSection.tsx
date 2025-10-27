import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'HRMS Solution',
      description: 'AWS Cloud-based HR platform to simplify HR processes using DynamoDB, API Gateway, and Lambda functions for scalable employee management.',
      technologies: ['AWS', 'DynamoDB', 'API Gateway', 'Lambda'],
      githubUrl: 'https://github.com/NixonL8',
      featured: true,
    },
    {
      title: 'Railway Reservation System',
      description: 'Role-based system with authentication and booking features. Users can search trains, book tickets, and manage reservations efficiently.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      githubUrl: 'https://github.com/NixonL8',
    },
    {
      title: 'Image Steganography with AES Encryption',
      description: 'Security tool for hiding encrypted data within images using AES encryption, ensuring data confidentiality and steganographic techniques.',
      technologies: ['Python', 'Cryptography', 'AES', 'PIL'],
      githubUrl: 'https://github.com/NixonL8',
    },
    {
      title: 'Shipment Delay Prediction',
      description: 'Machine learning project predicting logistics delays using historical data, TensorFlow models, and data analysis with Pandas.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com/NixonL8',
    },
    {
      title: 'E-Voting Web App',
      description: 'Secure voting system ensuring confidentiality and auditability of votes with cryptographic verification and tamper-proof logging.',
      technologies: ['JavaScript', 'Node.js', 'Cryptography', 'MongoDB'],
      githubUrl: 'https://github.com/NixonL8',
    },
  ];

  return (
    <motion.section
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-projects-title">
            Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in web development, cloud computing, cybersecurity, and machine learning.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card
                className={`flex flex-col hover-elevate transition-all duration-300 hover:-translate-y-1 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                data-testid={`card-project-${index}`}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-elevate active-elevate-2 p-2 rounded-md"
                        data-testid={`link-project-github-${index}`}
                      >
                        <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
