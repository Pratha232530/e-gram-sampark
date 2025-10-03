import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnnouncementCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
}

export const AnnouncementCard = ({ title, description, date, category }: AnnouncementCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300 border-l-4 border-l-accent">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
