import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nixon L. Built with passion and dedication.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/NixonL8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-github"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/nixon-l-b89280267"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:nixon.26it@licet.ac.in"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
