import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { ComplaintForm } from "@/components/ComplaintForm";
import {
  FileText,
  UserCircle,
  MessageSquare,
  CreditCard,
  Megaphone,
  Phone,
  Menu,
  LogIn,
  Shield,
  Users,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-village.jpg";

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "Government Schemes",
      description: "Access information about all government yojanas, benefits, and eligibility criteria",
      color: "primary" as const,
    },
    {
      icon: UserCircle,
      title: "Certificates & Documents",
      description: "Apply for birth, death, income, and caste certificates online",
      color: "accent" as const,
    },
    {
      icon: MessageSquare,
      title: "Raise Complaints",
      description: "Submit complaints and track their resolution status in real-time",
      color: "success" as const,
    },
    {
      icon: CreditCard,
      title: "Bill Payments",
      description: "Pay water, electricity, and property tax bills conveniently",
      color: "primary" as const,
    },
    {
      icon: Megaphone,
      title: "Village Updates",
      description: "Stay informed about local events, meetings, and job opportunities",
      color: "accent" as const,
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Quick access to police, hospital, and ambulance contact numbers",
      color: "success" as const,
    },
  ];

  const announcements = [
    {
      title: "Gram Sabha Meeting - January 15",
      description: "All villagers are requested to attend the gram sabha meeting to discuss development projects.",
      date: "Jan 10, 2025",
      category: "Meeting",
    },
    {
      title: "Free Health Checkup Camp",
      description: "Government hospital organizing a free health checkup camp for all age groups.",
      date: "Jan 8, 2025",
      category: "Health",
    },
    {
      title: "Solar Panel Subsidy Scheme",
      description: "New government scheme offers 40% subsidy on solar panel installation for households.",
      date: "Jan 5, 2025",
      category: "Scheme",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Gram Sahayak</h1>
              <p className="text-xs text-muted-foreground">Your Village Assistant</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#complaints" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Complaints
            </a>
            <a href="#announcements" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Updates
            </a>
            <a href="#emergency" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Emergency
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              <span className="mr-1">🇮🇳</span> Marathi
            </Button>
            <Button variant="outline" size="sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Indian village with digital transformation" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Villages Through Digital Access
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Gram Sahayak connects rural communities with essential government services, schemes, and support. 
              Access everything from one place - simple, fast, and in your language.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services We Provide
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to access government services and stay connected with your village
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Gram Sahayak?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Gram Sahayak is a digital platform designed to bridge the gap between rural communities and 
                government services. We make it easy for villagers to access schemes, apply for certificates, 
                pay bills, and stay informed about local developments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Easy to Use</h4>
                    <p className="text-sm text-muted-foreground">Simple interface designed for everyone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Multi-Language Support</h4>
                    <p className="text-sm text-muted-foreground">Available in Marathi and English</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">24/7 Access</h4>
                    <p className="text-sm text-muted-foreground">Services available anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">10,000+</div>
                  <div className="text-sm text-muted-foreground">Registered Users</div>
                </div>
                <div className="text-center">
                  <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">5,000+</div>
                  <div className="text-sm text-muted-foreground">Applications Processed</div>
                </div>
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-success mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">2,500+</div>
                  <div className="text-sm text-muted-foreground">Complaints Resolved</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Secure & Private</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complaint Form Section */}
      <section id="complaints" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <ComplaintForm />
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Updates & Announcements
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay informed about village events, schemes, and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={index} {...announcement} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">View All Announcements</Button>
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section id="emergency" className="py-16 md:py-24 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Emergency Contacts
            </h2>
            <p className="text-muted-foreground text-lg">
              Quick access to important emergency numbers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Police</h3>
              <p className="text-3xl font-bold text-destructive mb-2">100</p>
              <p className="text-sm text-muted-foreground">Emergency Police</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Ambulance</h3>
              <p className="text-3xl font-bold text-destructive mb-2">108</p>
              <p className="text-sm text-muted-foreground">Medical Emergency</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Fire</h3>
              <p className="text-3xl font-bold text-destructive mb-2">101</p>
              <p className="text-sm text-muted-foreground">Fire Department</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="font-bold text-lg">Gram Sahayak</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Empowering rural communities through digital access to government services and information.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
                <li><a href="#complaints" className="hover:text-primary-foreground transition-colors">Complaints</a></li>
                <li><a href="#announcements" className="hover:text-primary-foreground transition-colors">Updates</a></li>
                <li><a href="#emergency" className="hover:text-primary-foreground transition-colors">Emergency</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Gram Panchayat Office</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Email: info@gramsahayak.in</li>
                <li>Hours: Mon-Sat, 9 AM - 5 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>© 2025 Gram Sahayak. All rights reserved. Built for the people, by the people.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
