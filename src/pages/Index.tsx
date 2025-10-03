import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { ComplaintForm } from "@/components/ComplaintForm";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
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
  Languages,
  Briefcase,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero-village.jpg";

const Index = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  const services = [
    {
      icon: FileText,
      title: t.service1,
      description: t.service1Desc,
      color: "primary" as const,
    },
    {
      icon: UserCircle,
      title: t.service2,
      description: t.service2Desc,
      color: "accent" as const,
    },
    {
      icon: CreditCard,
      title: t.service3,
      description: t.service3Desc,
      color: "success" as const,
    },
    {
      icon: MessageSquare,
      title: t.service4,
      description: t.service4Desc,
      color: "primary" as const,
    },
    {
      icon: Briefcase,
      title: t.service5,
      description: t.service5Desc,
      color: "accent" as const,
    },
    {
      icon: Heart,
      title: t.service6,
      description: t.service6Desc,
      color: "success" as const,
    },
  ];

  const announcements = [
    {
      title: t.announcement1Title,
      description: t.announcement1Desc,
      date: t.announcement1Date,
      category: language === 'en' ? 'Meeting' : 'बैठक',
    },
    {
      title: t.announcement2Title,
      description: t.announcement2Desc,
      date: t.announcement2Date,
      category: language === 'en' ? 'Health' : 'आरोग्य',
    },
    {
      title: t.announcement3Title,
      description: t.announcement3Desc,
      date: t.announcement3Date,
      category: language === 'en' ? 'Training' : 'प्रशिक्षण',
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
              <h1 className="text-xl font-bold text-primary">{t.title}</h1>
              <p className="text-xs text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Services' : 'सेवा'}
            </a>
            <a href="#complaints" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Complaints' : 'तक्रारी'}
            </a>
            <a href="#announcements" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Updates' : 'अपडेट्स'}
            </a>
            <a href="#emergency" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Emergency' : 'आपत्कालीन'}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:inline-flex"
              onClick={toggleLanguage}
            >
              <Languages className="w-4 h-4 mr-2" />
              {language === 'en' ? 'मराठी' : 'English'}
            </Button>
            <Button variant="outline" size="sm">
              <LogIn className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Login' : 'लॉगिन'}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleLanguage}>
              <Languages className="w-5 h-5" />
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
              {t.heroHeading}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero">
                {t.getStarted}
              </Button>
              <Button size="lg" variant="outline" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
                {t.learnMore}
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
              {t.servicesHeading}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.servicesSubtitle}
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
                {t.aboutHeading}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {t.aboutText}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">{language === 'en' ? 'Easy to Use' : 'वापरण्यास सोपे'}</h4>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Simple interface designed for everyone' : 'सर्वांसाठी डिझाइन केलेला सोपा इंटरफेस'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">{language === 'en' ? 'Multi-Language Support' : 'बहु-भाषा समर्थन'}</h4>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Available in Marathi and English' : 'मराठी आणि इंग्रजीमध्ये उपलब्ध'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">{language === 'en' ? '24/7 Access' : '२४/७ प्रवेश'}</h4>
                    <p className="text-sm text-muted-foreground">{language === 'en' ? 'Services available anytime, anywhere' : 'सेवा कधीही, कुठेही उपलब्ध'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">10,000+</div>
                  <div className="text-sm text-muted-foreground">{language === 'en' ? 'Registered Users' : 'नोंदणीकृत वापरकर्ते'}</div>
                </div>
                <div className="text-center">
                  <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">5,000+</div>
                  <div className="text-sm text-muted-foreground">{language === 'en' ? 'Applications Processed' : 'अर्ज प्रक्रिया'}</div>
                </div>
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-success mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">2,500+</div>
                  <div className="text-sm text-muted-foreground">{language === 'en' ? 'Complaints Resolved' : 'तक्रारींचे निराकरण'}</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">{language === 'en' ? 'Secure & Private' : 'सुरक्षित आणि खाजगी'}</div>
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
              {t.announcementsHeading}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'en' ? 'Stay informed about village events, schemes, and opportunities' : 'गाव कार्यक्रम, योजना आणि संधींबद्दल माहिती रहा'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {announcements.map((announcement, index) => (
              <AnnouncementCard key={index} {...announcement} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">{language === 'en' ? 'View All Announcements' : 'सर्व घोषणा पहा'}</Button>
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section id="emergency" className="py-16 md:py-24 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.emergencyHeading}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.emergencySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">{t.police}</h3>
              <p className="text-3xl font-bold text-destructive mb-2">100</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? 'Emergency Police' : 'आपत्कालीन पोलीस'}</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">{t.ambulance}</h3>
              <p className="text-3xl font-bold text-destructive mb-2">108</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? 'Medical Emergency' : 'वैद्यकीय आपत्काळ'}</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50">
              <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">{t.fireService}</h3>
              <p className="text-3xl font-bold text-destructive mb-2">101</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? 'Fire Department' : 'अग्निशमन विभाग'}</p>
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
                <span className="font-bold text-lg">{t.title}</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                {t.footerText}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Quick Links' : 'द्रुत दुवे'}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Services' : 'सेवा'}</a></li>
                <li><a href="#complaints" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Complaints' : 'तक्रारी'}</a></li>
                <li><a href="#announcements" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Updates' : 'अपडेट्स'}</a></li>
                <li><a href="#emergency" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Emergency' : 'आपत्कालीन'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Support' : 'समर्थन'}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Help Center' : 'मदत केंद्र'}</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Contact Us' : 'आमच्याशी संपर्क साधा'}</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Privacy Policy' : 'गोपनीयता धोरण'}</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">{language === 'en' ? 'Terms of Service' : 'सेवा अटी'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Contact' : 'संपर्क'}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>{t.gramPanchayat}</li>
                <li>{language === 'en' ? 'Phone' : 'फोन'}: +91 123 456 7890</li>
                <li>{language === 'en' ? 'Email' : 'ईमेल'}: info@gramsahayak.in</li>
                <li>{language === 'en' ? 'Hours: Mon-Sat, 9 AM - 5 PM' : 'वेळ: सोम-शनि, सकाळी ९ ते संध्याकाळी ५'}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>© 2025 {t.title}. {t.allRights}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
