import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Управління курсами",
      description: "Створюйте та редагуйте медичні курси з інтерактивним контентом"
    },
    {
      icon: Users,
      title: "Робота зі студентами",
      description: "Відстежуйте прогрес навчання та взаємодійте з учнями"
    },
    {
      icon: TrendingUp,
      title: "Детальна аналітика",
      description: "Аналізуйте ефективність навчання та успішність студентів"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Посилюйте
              <span className="text-primary block">Медичну освіту,</span>
              Трансформуйте навчання
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Революційна платформа для медичної освіти. 
              Створюйте інтерактивні курси та відстежуйте прогрес студентів.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="primary-gradient shadow-glow">
                <Link to="/dashboard">
                  Увійти до кабінету <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/courses">Огляд курсів</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Courses Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Доступні курси та напрямки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Обирайте серед найпопулярніших медичних направлень навчання
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Кардіологія",
                description: "Діагностика та лікування захворювань серцево-судинної системи",
                coursesCount: "12 курсів",
                price: "від 1500 грн",
                slug: "cardiology",
                bprPoints: "15 балів БПР"
              },
              {
                title: "Неврологія", 
                description: "Захворювання нервової системи та методи лікування",
                coursesCount: "8 курсів",
                price: "від 1800 грн",
                slug: "neurology",
                bprPoints: "18 балів БПР"
              },
              {
                title: "Педіатрія",
                description: "Особливості лікування дітей різного віку",
                coursesCount: "15 курсів", 
                price: "від 1200 грн",
                slug: "pediatrics",
                bprPoints: "12 балів БПР"
              },
              {
                title: "Хірургія",
                description: "Сучасні хірургічні техніки та інновації",
                coursesCount: "10 курсів",
                price: "від 2000 грн",
                slug: "surgery",
                bprPoints: "20 балів БПР"
              },
              {
                title: "Терапія",
                description: "Загальна внутрішня медицина та діагностика",
                coursesCount: "20 курсів",
                price: "від 1000 грн",
                slug: "therapy",
                bprPoints: "10 балів БПР"
              },
              {
                title: "Онкологія",
                description: "Діагностика та лікування онкологічних захворювань",
                coursesCount: "6 курсів",
                price: "від 2500 грн",
                slug: "oncology",
                bprPoints: "25 балів БПР"
              }
            ].map((course, index) => (
              <Card key={index} className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {course.coursesCount}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-accent">
                      {course.bprPoints}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">
                      {course.price}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/course/${course.slug}`}>
                        Детальніше
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">
              Можливості платформи
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Відгуки наших студентів
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Понад 10,000 медичних працівників вже підвищили свою кваліфікацію з нами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Др. Олена Коваленко",
                position: "Кардіохірург, Інститут серця МОЗ України",
                review: "Курси з кардіології допомогли мне освоїти найновіші методики діагностики. Матеріал подається професійно та зрозуміло.",
                rating: 5,
                course: "Кардіологія"
              },
              {
                name: "Др. Андрій Мельник",
                position: "Невролог, Київська міська лікарня №4",
                review: "Відмінна платформа для підвищення кваліфікації. Особливо сподобались інтерактивні клінічні випадки.",
                rating: 5,
                course: "Неврологія"
              },
              {
                name: "Др. Марія Петрова",
                position: "Педіатр, Дитяча лікарня 'Охматдит'",
                review: "Курс з педіатрії дуже актуальний. Отримала 12 балів БПР і нові знання, які одразу застосовую в роботі.",
                rating: 5,
                course: "Педіатрія"
              },
              {
                name: "Др. Сергій Іваненко",
                position: "Хірург, Національний медичний університет",
                review: "Сучасні хірургічні техніки представлені на високому рівні. Рекомендую всім колегам-хірургам.",
                rating: 5,
                course: "Хірургія"
              },
              {
                name: "Др. Наталія Сидоренко",
                position: "Терапевт, Поліклініка №12",
                review: "Курс терапії охоплює всі важливі аспекти сучасної внутрішньої медицини. Дуже корисно для практикуючих лікарів.",
                rating: 4,
                course: "Терапія"
              },
              {
                name: "Др. Віктор Гончаренко",
                position: "Онколог, Національний інститут раку",
                review: "Найсучасніші підходи до лікування онкологічних захворювань. Курс варто пройти кожному онкологу.",
                rating: 5,
                course: "Онкологія"
              }
            ].map((review, index) => (
              <Card key={index} className="card-gradient border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      >
                        ★
                      </div>
                    ))}
                    <Badge variant="outline" className="ml-auto text-xs">
                      {review.course}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{review.review}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готові почати?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Приєднуйтесь до провідних медичних навчальних закладів, 
            які вже використовують Docstream для навчання майбутніх лікарів.
          </p>
          <Button asChild size="lg" className="primary-gradient shadow-glow">
            <Link to="/dashboard">
              Почати роботу <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;