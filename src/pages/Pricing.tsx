import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Star, 
  Clock, 
  Users, 
  Award,
  BookOpen,
  Download,
  Video,
  MessageCircle
} from "lucide-react";

const Pricing = () => {
  const eventTypes = [
    {
      id: 1,
      type: "online",
      title: "Онлайн події",
      subtitle: "Живі трансляції з можливістю отримання балів БПР",
      basePrice: 599,
      discountPrice: null,
      popular: true,
      features: [
        "Живі інтерактивні лекції",
        "Q&A сесії зі спікерами", 
        "Бали безперервного професійного розвитку",
        "Сертифікат з балами БПР",
        "Доступ до запису протягом 30 днів",
        "Додаткові матеріали та презентації",
        "Можливість ставити питання в чаті",
        "Нетворкінг з колегами"
      ],
      badge: "З балами БПР",
      badgeColor: "bg-emerald-500/10 text-emerald-500"
    },
    {
      id: 2,
      type: "recorded",
      title: "Події в записі",
      subtitle: "Доступ до записаних лекцій без балів БПР",
      basePrice: 599,
      discountPrice: 419, // 70% від основної ціни
      popular: false,
      features: [
        "Доступ до повного запису",
        "Високоякісне відео та звук",
        "Презентації та матеріали",
        "Сертифікат про участь (без балів)",
        "Довічний доступ до контенту",
        "Можливість перегляду у зручний час",
        "Субтитри українською мовою",
        "Мобільний доступ"
      ],
      badge: "Без балів БПР",
      badgeColor: "bg-orange-500/10 text-orange-500"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Сучасні методи лікування ІХС",
      speaker: "Др. Олена Петренко",
      date: "25 вересня 2024",
      time: "14:00-16:00",
      specialization: "Кардіологія",
      points: 2,
      price: 599,
      type: "online"
    },
    {
      id: 2,
      title: "Діагностика інсульту: нові підходи",
      speaker: "Проф. Михайло Коваленко", 
      date: "28 вересня 2024",
      time: "10:00-12:00",
      specialization: "Неврологія",
      points: 2,
      price: 599,
      type: "online"
    },
    {
      id: 3,
      title: "Вакцинація дітей: актуальні питання",
      speaker: "Др. Анна Сидоренко",
      date: "2 жовтня 2024", 
      time: "16:00-18:00",
      specialization: "Педіатрія",
      points: 2,
      price: 599,
      type: "online"
    }
  ];

  const faqs = [
    {
      question: "Що таке бали БПР?",
      answer: "Бали безперервного професійного розвитку (БПР) - це кредитні бали, які лікарі отримують за участь в освітніх заходах для підтвердження своєї професійної кваліфікації."
    },
    {
      question: "Скільки балів можна отримати за одну подію?",
      answer: "Зазвичай за 2-годинну лекцію нараховується 2 бали БПР. Кількість балів може відрізнятися залежно від тривалості та складності заходу."
    },
    {
      question: "Чи можу я отримати бали за записані лекції?",
      answer: "Ні, бали БПР нараховуються тільки за участь в онлайн заходах у реальному часі. Записані лекції можна переглядати для самоосвіти без отримання балів."
    },
    {
      question: "Як отримати сертифікат?",
      answer: "Після завершення заходу ви пройдете короткий тест. При успішному складанні тест автоматично згенерується сертифікат з вказанням балів БПР."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Тарифи та ціни
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Виберіть формат участі, який підходить саме вам. Онлайн події з балами БПР 
            або записані лекції для самостійного навчання.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {eventTypes.map((eventType) => (
            <Card 
              key={eventType.id} 
              className={`card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300 ${
                eventType.popular ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                {eventType.popular && (
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Популярний вибір
                    </Badge>
                  </div>
                )}
                <Badge className={eventType.badgeColor}>
                  {eventType.badge}
                </Badge>
                <CardTitle className="text-2xl font-bold text-foreground mt-4">
                  {eventType.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {eventType.subtitle}
                </p>
                <div className="flex items-center justify-center mt-6">
                  {eventType.discountPrice ? (
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          ₴{eventType.discountPrice}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          ₴{eventType.basePrice}
                        </span>
                      </div>
                      <div className="text-xs text-emerald-500 font-medium">
                        Знижка 30%
                      </div>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-foreground">
                      ₴{eventType.basePrice}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {eventType.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${eventType.popular ? 'primary-gradient shadow-glow' : ''}`}
                  variant={eventType.popular ? 'default' : 'outline'}
                >
                  {eventType.type === 'online' ? 'Обрати онлайн подію' : 'Переглянути записи'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Найближчі онлайн події
            </h2>
            <p className="text-muted-foreground">
              Зареєструйтесь на майбутні заходи та отримайте бали БПР
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <Badge variant="outline" className="w-fit mb-2">
                    {event.specialization}
                  </Badge>
                  <CardTitle className="text-lg text-foreground">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">
                    {event.speaker}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.date}, {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{event.points} бали БПР</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xl font-bold text-foreground">
                      ₴{event.price}
                    </span>
                    <Button size="sm" className="primary-gradient">
                      Купити квиток
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Що ви отримуєте
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">HD якість</h3>
              <p className="text-sm text-muted-foreground">
                Відео високої якості для комфортного перегляду
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Інтерактив</h3>
              <p className="text-sm text-muted-foreground">
                Можливість ставити питання та спілкуватися
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Матеріали</h3>
              <p className="text-sm text-muted-foreground">
                Презентації та додаткові ресурси
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Сертифікат</h3>
              <p className="text-sm text-muted-foreground">
                Офіційний сертифікат з балами БПР
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Часті питання
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Готові почати навчання?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Приєднуйтесь до тисяч медичних працівників, які вже підвищують 
            свою кваліфікацію разом з Docstream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="primary-gradient shadow-glow">
              <BookOpen className="w-4 h-4 mr-2" />
              Переглянути події
            </Button>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Зв'язатися з нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;