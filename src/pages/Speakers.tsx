import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Award,
  BookOpen,
  Star,
  ExternalLink
} from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Др. Олена Петренко",
      title: "Провідний кардіолог",
      specialization: "Інтервенційна кардіологія",
      hospital: "Національний інститут серцево-судинної хірургії",
      city: "Київ",
      experience: "15+ років",
      courses: 12,
      students: 450,
      rating: 4.9,
      image: "/placeholder-avatar.jpg",
      bio: "Кандидат медичних наук, спеціалізується на складних кардіохірургічних втручаннях. Автор понад 50 наукових публікацій.",
      achievements: [
        "Лауреат премії НАН України",
        "Сертифікований ESC спеціаліст", 
        "Голова асоціації кардіологів України"
      ],
      upcoming: [
        {
          title: "Сучасні методи лікування ІХС",
          date: "25 вересня 2024",
          time: "14:00"
        }
      ]
    },
    {
      id: 2,
      name: "Проф. Михайло Коваленко",
      title: "Завідувач кафедри неврології",
      specialization: "Неврологія та нейрохірургія",
      hospital: "НМУ імені О.О. Богомольця",
      city: "Київ",
      experience: "20+ років",
      courses: 8,
      students: 320,
      rating: 4.8,
      image: "/placeholder-avatar.jpg",
      bio: "Доктор медичних наук, професор. Провідний спеціаліст з діагностики та лікування захворювань нервової системи.",
      achievements: [
        "Заслужений лікар України",
        "Член Європейської академії неврології",
        "Автор 8 монографій"
      ],
      upcoming: [
        {
          title: "Діагностика інсульту: нові підходи",
          date: "28 вересня 2024",
          time: "10:00"
        }
      ]
    },
    {
      id: 3,
      name: "Др. Анна Сидоренко",
      title: "Завідувач відділення педіатрії",
      specialization: "Педіатрія та неонатологія",
      hospital: "ОХМАТДИТ",
      city: "Київ",
      experience: "12+ років",
      courses: 6,
      students: 280,
      rating: 4.9,
      image: "/placeholder-avatar.jpg",
      bio: "Кандидат медичних наук, експерт з питань дитячого здоров'я та розвитку. Спеціаліст вищої категорії.",
      achievements: [
        "Відмінник охорони здоров'я",
        "Член UNICEF консультативної ради",
        "Експерт МОЗ України"
      ],
      upcoming: [
        {
          title: "Вакцинація дітей: актуальні питання",
          date: "2 жовтня 2024",
          time: "16:00"
        }
      ]
    },
    {
      id: 4,
      name: "Проф. Віктор Шевченко",
      title: "Головний хірург",
      specialization: "Абдомінальна хірургія",
      hospital: "Клініка Шаріте Київ",
      city: "Київ",
      experience: "18+ років",
      courses: 10,
      students: 380,
      rating: 4.8,
      image: "/placeholder-avatar.jpg",
      bio: "Доктор медичних наук, провідний хірург з мінімально інвазивних втручань. Піонер лапароскопічної хірургії в Україні.",
      achievements: [
        "Золота медаль МОЗ України",
        "Сертифікований EAES хірург",
        "Засновник школи лапароскопії"
      ],
      upcoming: [
        {
          title: "Лапароскопічні втручання: майстер-клас",
          date: "5 жовтня 2024",
          time: "9:00"
        }
      ]
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const SpeakerCard = ({ speaker }: { speaker: typeof speakers[0] }) => (
    <Card className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={speaker.image} alt={speaker.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
              {getInitials(speaker.name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {speaker.name}
            </h3>
            <p className="text-primary font-medium mb-1">
              {speaker.title}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              {speaker.specialization}
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
              <MapPin className="w-3 h-3" />
              <span>{speaker.hospital}, {speaker.city}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-foreground font-medium">{speaker.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-3 h-3 text-primary" />
                <span className="text-foreground">{speaker.courses} курсів</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3 text-primary" />
                <span className="text-foreground">{speaker.students} студентів</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-foreground mb-2">Про спікера</h4>
          <p className="text-sm text-muted-foreground">
            {speaker.bio}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-2">Досягнення</h4>
          <div className="flex flex-wrap gap-1">
            {speaker.achievements.map((achievement, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Award className="w-3 h-3 mr-1" />
                {achievement}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-2">Найближчі події</h4>
          {speaker.upcoming.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
              <div>
                <p className="font-medium text-foreground text-sm">
                  {event.title}
                </p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date} о {event.time}</span>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-3 h-3 mr-1" />
                Деталі
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              Досвід: {speaker.experience}
            </div>
            <Button variant="ghost" size="sm">
              Всі курси спікера
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наші спікери
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Провідні медичні експерти України та світу. Досвідчені лікарі, 
            науковці та практики, які діляться своїми знаннями та досвідом.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Експертів</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">Студентів</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Рейтинг</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Курсів</div>
            </CardContent>
          </Card>
        </div>

        {/* Speakers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Хочете стати спікером?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Приєднуйтесь до нашої команди експертів та діліться своїми знаннями 
            з медичною спільнотою України.
          </p>
          <Button className="primary-gradient shadow-glow">
            Подати заявку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Speakers;