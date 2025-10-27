import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code2, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '@assets/Nixon_1760120478074.jpg';
import BubbleBackground from './BubbleBackground';

export default function AboutSection() {
  const stats = [
    { icon: Code2, label: 'Projects', value: '5+' },
    { icon: Award, label: 'CGPA', value: '8.26' },
    { icon: Users, label: 'Internships', value: '2' },
  ];

  return (
    <motion.section
      id="about"
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-about-title">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Avatar className="w-32 h-32 border-4 border-primary/20 flex-shrink-0">
                <AvatarImage src={profilePhoto} alt="Nixon L" />
                <AvatarFallback className="text-3xl font-heading bg-primary/10 text-primary">NL</AvatarFallback>
              </Avatar>

              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed border-l-4 border-primary pl-6 italic flex-1">
                "I'm Nixon, an enthusiastic Information Technology student with a passion for learning and building meaningful tech solutions. I'm eager to apply my skills, grow with a forward-thinking team, and contribute to impactful projects in a dynamic work environment."
              </blockquote>
            </motion.div>

            <motion.div
              className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                Currently pursuing B.Tech in Information Technology at{' '}
                <span className="text-foreground font-medium">Loyola-ICAM College of Engineering and Technology</span>, Chennai, I'm driven by a desire to solve real-world problems through technology.
              </p>
              <p>
                My journey has taken me through exciting internships in cybersecurity and cloud computing, where I've worked with cutting-edge technologies like AES encryption, AWS DynamoDB, and API Gateway to build secure and scalable solutions.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-3 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase()}`}>
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
