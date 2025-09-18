import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, Play, BookOpen, Award } from "lucide-react";
import PurchaseCourseModal from "@/components/modals/PurchaseCourseModal";
import FreeLessonModal from "@/components/modals/FreeLessonModal";

const Course = () => {
  const { courseId } = useParams();
  
  // Mock data based on course ID
  const courseData = {
    cardiology: {
      title: "Кардіологія",
      description: "Повний курс з діагностики та лікування захворювань серцево-судинної системи",
      instructor: "Проф. Іван Петренко",
      duration: "40 годин",
      students: "1,234",
      rating: "4.8",
      price: "1,500 грн",
      level: "Середній",
      bprPoints: "15 балів БПР",
      modules: [
        "Анатомія серцево-судинної системи",
        "Методи діагностики кардіологічних захворювань", 
        "Гіпертонічна хвороба",
        "Ішемічна хвороба серця",
        "Аритмії та порушення провідності",
        "Серцева недостатність",
        "Кардіоміопатії",
        "Вроджені вади серця"
      ],
      features: [
        "Інтерактивні лекції",
        "Клінічні випадки",
        "Тестування знань",
        "Сертифікат про проходження"
      ]
    },
    neurology: {
      title: "Неврологія",
      description: "Комплексне вивчення захворювань нервової системи та методів лікування",
      instructor: "Доц. Марія Коваленко",
      duration: "35 годин",
      students: "892",
      rating: "4.9",
      price: "1,800 грн",
      level: "Просунутий",
      bprPoints: "18 балів БПР",
      modules: [
        "Анатомія нервової системи",
        "Неврологічне обстеження",
        "Інсульт та цереброваскулярні захворювання",
        "Епілепсія",
        "Демієнції", 
        "Розсіяний склероз",
        "Паркінсонізм",
        "Периферичні нейропатії"
      ],
      features: [
        "Відеолекції в HD якості",
        "3D моделі нервової системи",
        "Віртуальні пацієнти",
        "Міжнародний сертифікат"
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData] || courseData.cardiology;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад до головної
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Course Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{course.level}</Badge>
                <Badge variant="outline" className="text-accent">{course.bprPoints}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {course.students} студентів
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  {course.rating} рейтинг
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Програма курсу
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="flex-1">{module}</span>
                      <Play className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle>Що включено в курс</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-4 h-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Purchase Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                  <p className="text-sm text-muted-foreground">Одноразовий платіж</p>
                </div>

                <div className="space-y-4 mb-6">
                  <PurchaseCourseModal 
                    courseTitle={course.title} 
                    price={course.price}
                    bprPoints={course.bprPoints}
                  >
                    <Button className="w-full primary-gradient shadow-glow" size="lg">
                      Придбати курс
                    </Button>
                  </PurchaseCourseModal>
                  
                  <FreeLessonModal courseTitle={course.title}>
                    <Button variant="outline" className="w-full">
                      Безкоштовний урок
                    </Button>
                  </FreeLessonModal>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3">Викладач</h4>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary">
                        {course.instructor.split(' ')[1]?.[0] || 'I'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground">Експерт кардіології</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;