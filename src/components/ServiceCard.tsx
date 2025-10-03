import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "primary" | "accent" | "success";
}

export const ServiceCard = ({ icon: Icon, title, description, color = "primary" }: ServiceCardProps) => {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10",
    success: "text-success bg-success/10",
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
