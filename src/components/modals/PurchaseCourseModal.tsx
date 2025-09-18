import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PurchaseCourseModalProps {
  children: React.ReactNode;
  courseTitle: string;
  price: string;
  bprPoints?: string;
}

const PurchaseCourseModal = ({ children, courseTitle, price, bprPoints }: PurchaseCourseModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Курс успішно придбано!",
      description: `Ви отримали доступ до курсу "${courseTitle}". Перевірте вашу електронну пошту.`,
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
          <DialogTitle>Придбати курс</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{courseTitle}</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{price}</span>
              {bprPoints && (
                <Badge variant="outline" className="text-accent">
                  {bprPoints}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Безпечна оплата</span>
            <Clock className="w-4 h-4 ml-4" />
            <span>Миттєвий доступ</span>
          </div>

          <Separator />

          <form onSubmit={handlePurchase} className="space-y-4">
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
              <Label htmlFor="name">Повне ім'я</Label>
              <Input
                id="name"
                placeholder="Іван Іванов"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">Номер картки</Label>
              <div className="relative">
                <Input
                  id="card"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <CreditCard className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">MM/YY</Label>
                <Input
                  id="expiry"
                  placeholder="12/25"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full primary-gradient shadow-glow" 
              disabled={isLoading}
            >
              {isLoading ? "Обробка..." : `Оплатити ${price}`}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseCourseModal;