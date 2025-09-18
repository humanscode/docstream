import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FreeLessonModalProps {
  children: React.ReactNode;
  courseTitle: string;
}

const FreeLessonModal = ({ children, courseTitle }: FreeLessonModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sending lesson
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Безкоштовний урок надіслано!",
      description: `Перевірте вашу електронну пошту. Посилання на урок з курсу "${courseTitle}" буде активне 24 години.`,
    });
    
    setIsLoading(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Play className="w-5 h-5 mr-2 text-primary" />
            Безкоштовний урок
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{courseTitle}</h3>
            <p className="text-sm text-muted-foreground">
              Отримайте доступ до першого уроку курсу повністю безкоштовно
            </p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-primary">
            <Mail className="w-4 h-4" />
            <span>Урок буде надіслано на вашу електронну пошту</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Електронна пошта</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Ім'я</Label>
              <Input
                id="name"
                placeholder="Ваше ім'я"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              variant="outline"
              disabled={isLoading}
            >
              {isLoading ? "Надсилання..." : "Отримати безкоштовний урок"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Надсилаючи форму, ви погоджуєтесь з обробкою персональних даних
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FreeLessonModal;