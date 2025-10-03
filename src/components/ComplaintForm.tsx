import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ComplaintForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    complaint: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Complaint Submitted",
      description: "Your complaint has been registered. We will contact you soon.",
    });
    setFormData({ name: "", phone: "", complaint: "" });
  };

  return (
    <Card className="shadow-lg border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Submit a Complaint</CardTitle>
        <CardDescription>We're here to help. Share your concern and we'll address it.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="complaint">Complaint Details</Label>
            <Textarea
              id="complaint"
              placeholder="Describe your concern in detail..."
              className="min-h-32 resize-none"
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg" variant="success">
            <Send className="w-4 h-4 mr-2" />
            Submit Complaint
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
