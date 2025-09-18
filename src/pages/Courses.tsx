import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Plus,
  Search,
  Filter,
  Play,
  Edit,
  Eye,
  MoreHorizontal,
  Calendar
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      title: "Основи кардіології",
      description: "Комплексний курс з захворювань серцево-судинної системи",
      students: 45,
      lessons: 12,
      duration: "8 тижнів",
      status: "active",
      progress: 78,
      category: "Кардіологія",
      createdAt: "15 березень 2024",
      thumbnail: "bg-gradient-to-br from-red-500/20 to-pink-500/20"
    },
    {
      id: 2,
      title: "Неврологія для початківців",
      description: "Вступ до неврології та діагностики захворювань нервової системи",
      students: 32,
      lessons: 10,
      duration: "6 тижнів",
      status: "active",
      progress: 92,
      category: "Неврологія",
      createdAt: "22 лютий 2024",
      thumbnail: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 3,
      title: "Анатомія людини",
      description: "Детальне вивчення анатомії та фізіології людського організму",
      students: 67,
      lessons: 16,
      duration: "12 тижнів",
      status: "draft",
      progress: 65,
      category: "Анатомія",
      createdAt: "8 березень 2024",
      thumbnail: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 4,
      title: "Фармакологія",
      description: "Вивчення лікарських препаратів та їх впливу на організм",
      students: 28,
      lessons: 14,
      duration: "10 тижнів",
      status: "active",
      progress: 85,
      category: "Фармакологія",
      createdAt: "1 березень 2024",
      thumbnail: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
    },
    {
      id: 5,
      title: "Хірургія загальна",
      description: "Основи хірургічних втручань та передопераційної підготовки",
      students: 21,
      lessons: 18,
      duration: "14 тижнів",
      status: "completed",
      progress: 100,
      category: "Хірургія",
      createdAt: "12 січень 2024",
      thumbnail: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
    },
    {
      id: 6,
      title: "Педіатрія",
      description: "Особливості діагностики та лікування дитячих захворювань",
      students: 38,
      lessons: 11,
      duration: "7 тижнів",
      status: "active",
      progress: 45,
      category: "Педіатрія",
      createdAt: "5 березень 2024",
      thumbnail: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary/10 text-primary">Активний</Badge>;
      case "draft":
        return <Badge variant="secondary">Чернетка</Badge>;
      case "completed":
        return <Badge className="bg-emerald-500/10 text-emerald-500">Завершено</Badge>;
      default:
        return <Badge variant="outline">Невідомо</Badge>;
    }
  };

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCourses = filteredCourses.filter(course => course.status === "active");
  const draftCourses = filteredCourses.filter(course => course.status === "draft");
  const completedCourses = filteredCourses.filter(course => course.status === "completed");

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-4">
        <div className={`w-full h-32 rounded-lg mb-4 ${course.thumbnail} flex items-center justify-center`}>
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-foreground mb-2">{course.title}</CardTitle>
            <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
            <div className="flex items-center space-x-1 mb-2">
              <Badge variant="outline" className="text-xs">{course.category}</Badge>
            </div>
          </div>
          <div className="flex items-center space-x-1 ml-4">
            {getStatusBadge(course.status)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessons} уроків</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Прогрес</span>
            <span className="text-foreground font-medium">{course.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{course.createdAt}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Управління курсами
            </h1>
            <p className="text-muted-foreground">
              Створюйте, редагуйте та відстежуйте ваші медичні курси
            </p>
          </div>
          <Button className="primary-gradient shadow-glow mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Створити курс
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Пошук курсів..."
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

        {/* Courses Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">Усі курси ({filteredCourses.length})</TabsTrigger>
            <TabsTrigger value="active">Активні ({activeCourses.length})</TabsTrigger>
            <TabsTrigger value="draft">Чернетки ({draftCourses.length})</TabsTrigger>
            <TabsTrigger value="completed">Завершені ({completedCourses.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="draft">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {draftCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Курси не знайдено</h3>
            <p className="text-muted-foreground mb-4">
              Спробуйте змінити параметри пошуку або створіть новий курс
            </p>
            <Button className="primary-gradient shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Створити перший курс
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;