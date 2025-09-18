import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  Download,
  Calendar,
  Award,
  Eye,
  ShoppingCart
} from "lucide-react";

const RecordedEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recordedEvents = [
    {
      id: 1,
      title: "COVID-19: Довгострокові наслідки та реабілітація",
      description: "Детальний розгляд post-COVID синдрому та методів відновлення",
      speaker: "Проф. Валентина Васильківська",
      specialization: "Пульмонологія",
      duration: "2 години 15 хвилин",
      recordedDate: "15 серпень 2024",
      originalDate: "15 серпень 2024",
      views: 1250,
      rating: 4.9,
      originalPrice: 599,
      currentPrice: 419,
      participants: 340,
      level: "Середній",
      category: "pulmonology",
      thumbnail: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      topics: [
        "Патогенез post-COVID синдрому",
        "Клінічні прояви та діагностика",
        "Протоколи реабілітації",
        "Фармакологічна підтримка"
      ],
      materials: [
        "Презентація спікера (PDF)",
        "Клінічні рекомендації",
        "Список літератури",
        "Чек-лист діагностики"
      ]
    },
    {
      id: 2,
      title: "Артеріальна гіпертензія: нові європейські рекомендації 2024",
      description: "Аналіз оновлених протоколів ESC/ESH з лікування гіпертензії",
      speaker: "Др. Сергій Коваль",
      specialization: "Кардіологія",
      duration: "1 година 45 хвилин",
      recordedDate: "3 липень 2024",
      originalDate: "3 липень 2024",
      views: 890,
      rating: 4.8,
      originalPrice: 599,
      currentPrice: 419,
      participants: 280,
      level: "Високий",
      category: "cardiology",
      thumbnail: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      topics: [
        "Зміни в діагностичних критеріях",
        "Нові цільові значення АТ",
        "Алгоритми вибору препаратів",
        "Особливі групи пацієнтів"
      ],
      materials: [
        "Текст рекомендацій ESC/ESH",
        "Алгоритми лікування",
        "Калькулятор ризику",
        "Клінічні випадки"
      ]
    },
    {
      id: 3,
      title: "Дитяча онкологія: ранні ознаки та скринінг",
      description: "Систематичний підхід до виявлення онкопатології у дітей",
      speaker: "Др. Марія Іваненко",
      specialization: "Педіатрія",
      duration: "2 години",
      recordedDate: "20 червень 2024",
      originalDate: "20 червень 2024",
      views: 650,
      rating: 4.9,
      originalPrice: 599,
      currentPrice: 419,
      participants: 195,
      level: "Середній",
      category: "pediatrics",
      thumbnail: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      topics: [
        "Епідеміологія дитячих пухлин",
        "Червоні прапорці в педіатрії",
        "Програми скринінгу",
        "Маршрутизація пацієнтів"
      ],
      materials: [
        "Атлас клінічних ознак",
        "Протоколи скринінгу",
        "Форми направлень",
        "Рекомендації для батьків"
      ]
    },
    {
      id: 4,
      title: "Ментальне здоров'я медиків: профілактика вигорання",
      description: "Практичні стратегії збереження психологічного благополуччя",
      speaker: "Др. Олександр Петров",
      specialization: "Психіатрія",
      duration: "1 година 30 хвилин",
      recordedDate: "5 травень 2024",
      originalDate: "5 травень 2024",
      views: 1100,
      rating: 4.7,
      originalPrice: 599,
      currentPrice: 419,
      participants: 420,
      level: "Базовий",
      category: "mental-health",
      thumbnail: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
      topics: [
        "Синдром професійного вигорання",
        "Техніки стрес-менеджменту",
        "Work-life balance",
        "Колегіальна підтримка"
      ],
      materials: [
        "Опитувальник Маслач",
        "Медитативні практики",
        "План самодопомоги",
        "Ресурси підтримки"
      ]
    },
    {
      id: 5,
      title: "Мікробіом кишечнику: від теорії до практики",
      description: "Сучасні уявлення про роль мікробіоти в здоров'ї та хворобах",
      speaker: "Проф. Наталія Губенко",
      specialization: "Гастроентерологія",
      duration: "2 години 30 хвилин",
      recordedDate: "10 квітень 2024",
      originalDate: "10 квітень 2024",
      views: 780,
      rating: 4.8,
      originalPrice: 599,
      currentPrice: 419,
      participants: 210,
      level: "Високий",
      category: "gastroenterology",
      thumbnail: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      topics: [
        "Склад здорового мікробіому",
        "Методи дослідження",
        "Пробіотики та пребіотики",
        "Фекальна трансплантація"
      ],
      materials: [
        "Атлас мікроорганізмів",
        "Протоколи аналізів",
        "Рекомендації з харчування",
        "Огляд препаратів"
      ]
    },
    {
      id: 6,
      title: "Хірургія катаракти: сучасні технології",
      description: "Фемтосекундна хірургія та преміум інтраокулярні лінзи",
      speaker: "Др. Ігор Мельник",
      specialization: "Офтальмологія",
      duration: "1 година 50 хвилин",
      recordedDate: "25 березень 2024",
      originalDate: "25 березень 2024",
      views: 520,
      rating: 4.9,
      originalPrice: 599,
      currentPrice: 419,
      participants: 150,
      level: "Високий",
      category: "ophthalmology",
      thumbnail: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      topics: [
        "Фемтосекундна технологія",
        "Вибір ІОЛ для пацієнта",
        "Ускладнення та їх профілактика",
        "Післяопераційне ведення"
      ],
      materials: [
        "Відео операцій",
        "Каталог лінз",
        "Розрахунок потужності ІОЛ",
        "Протоколи ведення"
      ]
    }
  ];

  const categories = [
    { id: "all", name: "Всі категорії", count: recordedEvents.length },
    { id: "cardiology", name: "Кардіологія", count: recordedEvents.filter(e => e.category === "cardiology").length },
    { id: "pulmonology", name: "Пульмонологія", count: recordedEvents.filter(e => e.category === "pulmonology").length },
    { id: "pediatrics", name: "Педіатрія", count: recordedEvents.filter(e => e.category === "pediatrics").length },
    { id: "mental-health", name: "Психіатрія", count: recordedEvents.filter(e => e.category === "mental-health").length },
    { id: "gastroenterology", name: "Гастроентерологія", count: recordedEvents.filter(e => e.category === "gastroenterology").length },
    { id: "ophthalmology", name: "Офтальмологія", count: recordedEvents.filter(e => e.category === "ophthalmology").length }
  ];

  const getLevelBadge = (level: string) => {
    const colors = {
      "Базовий": "bg-green-500/10 text-green-500",
      "Середній": "bg-blue-500/10 text-blue-500", 
      "Високий": "bg-purple-500/10 text-purple-500"
    };
    return colors[level as keyof typeof colors] || "bg-gray-500/10 text-gray-500";
  };

  const filteredEvents = recordedEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const EventCard = ({ event }: { event: typeof recordedEvents[0] }) => (
    <Card className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-4">
        <div className={`w-full h-40 rounded-lg mb-4 ${event.thumbnail} flex items-center justify-center relative`}>
          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
          </div>
          <Badge className="absolute top-3 right-3 bg-black/70 text-white">
            {event.duration}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {event.specialization}
            </Badge>
            <Badge className={getLevelBadge(event.level)}>
              {event.level}
            </Badge>
          </div>
          
          <CardTitle className="text-lg text-foreground leading-tight">
            {event.title}
          </CardTitle>
          
          <p className="text-sm text-muted-foreground">
            {event.description}
          </p>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-primary font-medium">{event.speaker}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{event.recordedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{event.participants}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{event.views} переглядів</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{event.rating}</span>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-foreground mb-2">
            Основні теми:
          </h5>
          <ul className="text-xs text-muted-foreground space-y-1">
            {event.topics.slice(0, 3).map((topic, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                {topic}
              </li>
            ))}
            {event.topics.length > 3 && (
              <li className="text-primary text-xs font-medium">
                +{event.topics.length - 3} тем
              </li>
            )}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-foreground mb-2">
            Матеріали:
          </h5>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Download className="w-3 h-3" />
            <span>{event.materials.length} файлів</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-foreground">
                ₴{event.currentPrice}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ₴{event.originalPrice}
              </span>
            </div>
            <div className="text-xs text-emerald-500 font-medium">
              Знижка 30%
            </div>
          </div>
          
          <div className="space-y-2">
            <Button size="sm" className="primary-gradient w-full">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Купити
            </Button>
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Eye className="w-3 h-3 mr-1" />
              Переглянути
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge className="bg-orange-500/10 text-orange-500 px-4 py-1">
              Без балів БПР
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Події в записі
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Переглядайте записи минулих медичних подій у зручний для вас час. 
            Отримайте доступ до цінних знань зі знижкою 30%.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{recordedEvents.length}+</div>
              <div className="text-sm text-muted-foreground">Записів</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {Math.round(recordedEvents.reduce((acc, e) => acc + e.rating, 0) / recordedEvents.length * 10) / 10}
              </div>
              <div className="text-sm text-muted-foreground">Рейтинг</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">30%</div>
              <div className="text-sm text-muted-foreground">Знижка</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {recordedEvents.reduce((acc, e) => acc + e.views, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Переглядів</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Пошук за назвою, спікером або спеціалізацією..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Фільтри</span>
          </Button>
        </div>

        {/* Categories */}
        <Tabs defaultValue="all" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-auto mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="whitespace-nowrap"
                >
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents
                  .filter(event => event.category === category.id)
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Play className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Записи не знайдено
            </h3>
            <p className="text-muted-foreground mb-4">
              Спробуйте змінити параметри пошуку
            </p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Чому обирають записи наших подій?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Гнучкий графік</h3>
                <p className="text-sm text-muted-foreground">
                  Навчайтеся у зручний час
                </p>
              </div>
              <div>
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Високі рейтинги</h3>
                <p className="text-sm text-muted-foreground">
                  Перевірена якість контенту
                </p>
              </div>
              <div>
                <Download className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Матеріали</h3>
                <p className="text-sm text-muted-foreground">
                  Додаткові ресурси та файли
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordedEvents;