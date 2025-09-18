import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Headphones,
  FileText,
  Users
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляція відправки
    setTimeout(() => {
      toast({
        title: "Повідомлення надіслано!",
        description: "Дякуємо за звернення. Ми відповімо вам найближчим часом.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@docstream.ua",
      description: "Напишіть нам будь-коли"
    },
    {
      icon: Phone,
      title: "Телефон",
      info: "+38 (044) 123-45-67",
      description: "Пн-Пт: 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Адреса",
      info: "вул. Хрещатик, 10, Київ",
      description: "Офіс відкритий для візитів"
    },
    {
      icon: Clock,
      title: "Робочі години",
      info: "Пн-Пт: 9:00-18:00",
      description: "Сб-Нд: вихідні"
    }
  ];

  const supportTypes = [
    {
      icon: MessageSquare,
      title: "Загальні питання",
      description: "Інформація про платформу, курси, спікерів",
      badge: "Популярне"
    },
    {
      icon: Headphones,
      title: "Технічна підтримка",
      description: "Проблеми з доступом, відтворенням відео",
      badge: "24/7"
    },
    {
      icon: FileText,
      title: "Документи та сертифікати",
      description: "Питання щодо балів БПР, сертифікатів",
      badge: null
    },
    {
      icon: Users,
      title: "Корпоративні клієнти",
      description: "Пропозиції для медичних закладів",
      badge: "Спеціальні умови"
    }
  ];

  const faqs = [
    {
      category: "Загальні",
      questions: [
        {
          question: "Як зареєструватися на платформі?",
          answer: "Натисніть 'Увійти' у верхньому меню та оберіть 'Зареєструватися'. Заповніть форму та підтвердіть email."
        },
        {
          question: "Як отримати доступ до курсу?",
          answer: "Після покупки курсу ви отримаєте доступ у своєму особистому кабінеті. Посилання також надійде на email."
        }
      ]
    },
    {
      category: "Оплата",
      questions: [
        {
          question: "Які способи оплати доступні?",
          answer: "Ми приймаємо оплату картками Visa/Mastercard, Apple Pay, Google Pay через LiqPay та Fondy."
        },
        {
          question: "Чи можна повернути кошти?",
          answer: "Так, протягом 14 днів після покупки за умови, що курс не був переглянутий більше ніж на 20%."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Зв'яжіться з нами
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Маєте питання про наші курси, технічні проблеми або пропозиції? 
            Ми завжди готові допомогти.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Напишіть нам
                </CardTitle>
                <p className="text-muted-foreground">
                  Заповніть форму і ми зв'яжемося з вами найближчим часом
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Ім'я *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше повне ім'я"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+38 (099) 123-45-67"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Тема звернення *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Коротко про вашу проблему"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Повідомлення *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Детально опишіть ваше питання або проблему..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full primary-gradient shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Надсилання..." : "Надіслати повідомлення"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Контактна інформація</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-primary font-medium">{item.info}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Швидка допомога</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-background/50 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Telegram підтримка
                  </p>
                  <p className="text-xs text-muted-foreground">
                    @docstream_support
                  </p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Гаряча лінія
                  </p>
                  <p className="text-xs text-muted-foreground">
                    0 800 123 456 (безкоштовно)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Types */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Типи підтримки
            </h2>
            <p className="text-muted-foreground">
              Оберіть категорію, яка найкраще відповідає вашому питанню
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTypes.map((type, index) => (
              <Card key={index} className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  {type.badge && (
                    <Badge variant="outline" className="mb-2 text-xs">
                      {type.badge}
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Часті питання
            </h2>
            <p className="text-muted-foreground">
              Можливо, ви знайдете відповідь на своє питання тут
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.category}
                </h3>
                {category.questions.map((item, index) => (
                  <Card key={index} className="card-gradient border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-foreground">
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder and CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Інтерактивна карта</p>
              <p className="text-sm text-muted-foreground">вул. Хрещатик, 10, Київ</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Потрібна персональна консультація?
            </h3>
            <p className="text-muted-foreground mb-6">
              Наші експерти готові допомогти вам обрати найкращі курси 
              та відповісти на всі питання особисто.
            </p>
            <Button className="primary-gradient shadow-glow w-fit">
              Замовити дзвінок
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;