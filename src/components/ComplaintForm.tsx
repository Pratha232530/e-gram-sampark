import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import { Send } from "lucide-react";

export const ComplaintForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    complaint: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? 'Complaint Submitted' : 'तक्रार सबमिट केली',
      description: language === 'en' 
        ? 'Your complaint has been registered. We will contact you soon.'
        : 'तुमची तक्रार नोंदवली गेली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.',
    });
    setFormData({ name: "", phone: "", complaint: "" });
  };

  return (
    <Card className="shadow-lg border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{t.complaintsHeading}</CardTitle>
        <CardDescription>{t.complaintsSubtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t.nameLabel}</Label>
            <Input
              id="name"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">{t.phoneLabel}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={t.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="complaint">{t.descriptionLabel}</Label>
            <Textarea
              id="complaint"
              placeholder={t.descriptionPlaceholder}
              className="min-h-32 resize-none"
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg" variant="success">
            <Send className="w-4 h-4 mr-2" />
            {t.submitComplaint}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
