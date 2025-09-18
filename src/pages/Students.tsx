import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Search,
  Filter,
  Mail,
  Phone,
  BookOpen,
  TrendingUp,
  Clock,
  MoreHorizontal,
  UserPlus,
  GraduationCap
} from "lucide-react";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: 1,
      name: "Анна Смірнова",
      email: "anna.smirnova@example.com",
      phone: "+38 (099) 123-45-67",
      courses: ["Основи кардіології", "Анатомія людини"],
      progress: 85,
      status: "active",
      enrolledAt: "15 березень 2024",
      lastActivity: "2 години тому",
      completedLessons: 24,
      totalLessons: 28,
      grade: "A"
    },
    {
      id: 2,
      name: "Михайло Петров",
      email: "mikhail.petrov@example.com",
      phone: "+38 (099) 234-56-78",
      courses: ["Неврологія для початківців", "Фармакологія"],
      progress: 72,
      status: "active",
      enrolledAt: "22 лютий 2024",
      lastActivity: "1 день тому",
      completedLessons: 18,
      totalLessons: 25,
      grade: "B+"
    },
    {
      id: 3,
      name: "Олена Козлова",
      email: "elena.kozlova@example.com",
      phone: "+38 (099) 345-67-89",
      courses: ["Анатомія людини", "Хірургія загальна"],
      progress: 95,
      status: "active",
      enrolledAt: "8 березень 2024",
      lastActivity: "30 хвилин тому",
      completedLessons: 32,
      totalLessons: 34,
      grade: "A+"
    },
    {
      id: 4,
      name: "Дмитро Волков",
      email: "dmitry.volkov@example.com",
      phone: "+38 (099) 456-78-90",
      courses: ["Педіатрія"],
      progress: 45,
      status: "inactive",
      enrolledAt: "1 березень 2024",
      lastActivity: "1 тиждень тому",
      completedLessons: 8,
      totalLessons: 18,
      grade: "C"
    },
    {
      id: 5,
      name: "Ольга Ніколаєва",
      email: "olga.nikolaeva@example.com",
      phone: "+38 (099) 567-89-01",
      courses: ["Основи кардіології", "Фармакологія", "Неврологія"],
      progress: 88,
      status: "active",
      enrolledAt: "12 січень 2024",
      lastActivity: "4 години тому",
      completedLessons: 45,
      totalLessons: 51,
      grade: "A"
    },
    {
      id: 6,
      name: "Олександр Сидоров",
      email: "alexander.sidorov@example.com",
      phone: "+38 (099) 678-90-12",
      courses: ["Хірургія загальна"],
      progress: 100,
      status: "completed",
      enrolledAt: "5 грудень 2023",
      lastActivity: "3 дні тому",
      completedLessons: 18,
      totalLessons: 18,
      grade: "A+"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary/10 text-primary">Активний</Badge>;
      case "inactive":
        return <Badge variant="secondary">Неактивний</Badge>;
      case "completed":
        return <Badge className="bg-emerald-500/10 text-emerald-500">Завершив</Badge>;
      default:
        return <Badge variant="outline">Невідомо</Badge>;
    }
  };

  const getGradeBadge = (grade: string) => {
    const gradeColors: { [key: string]: string } = {
      "A+": "bg-emerald-500/10 text-emerald-500",
      "A": "bg-green-500/10 text-green-500",
      "B+": "bg-blue-500/10 text-blue-500",
      "B": "bg-blue-400/10 text-blue-400",
      "C": "bg-orange-500/10 text-orange-500",
      "D": "bg-red-500/10 text-red-500"
    };
    
    return (
      <Badge className={gradeColors[grade] || "bg-gray-500/10 text-gray-500"}>
        {grade}
      </Badge>
    );
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeStudents = filteredStudents.filter(student => student.status === "active");
  const inactiveStudents = filteredStudents.filter(student => student.status === "inactive");
  const completedStudents = filteredStudents.filter(student => student.status === "completed");

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const StudentCard = ({ student }: { student: typeof students[0] }) => (
    <Card className="card-gradient border-border shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {getInitials(student.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{student.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-3 h-3" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span>{student.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge(student.status)}
            {getGradeBadge(student.grade)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Courses */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Курси</h4>
            <div className="flex flex-wrap gap-1">
              {student.courses.map((course, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Загальний прогрес</span>
              <span className="text-foreground font-medium">{student.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${student.progress}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              {student.completedLessons} з {student.totalLessons} уроків завершено
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{student.completedLessons}</div>
              <div className="text-xs text-muted-foreground">Уроків</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{student.courses.length}</div>
              <div className="text-xs text-muted-foreground">Курсів</div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{student.lastActivity}</span>
            </div>
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
              Управління студентами
            </h1>
            <p className="text-muted-foreground">
              Відстежуйте прогрес та взаємодійте з вашими студентами
            </p>
          </div>
          <Button className="primary-gradient shadow-glow mt-4 md:mt-0">
            <UserPlus className="w-4 h-4 mr-2" />
            Додати студента
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Усього студентів</p>
                  <p className="text-2xl font-bold text-foreground">{students.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Активних</p>
                  <p className="text-2xl font-bold text-foreground">{activeStudents.length}</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Завершили</p>
                  <p className="text-2xl font-bold text-foreground">{completedStudents.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Сер. прогрес</p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Пошук студентів..."
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

        {/* Students Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">Усі студенти ({filteredStudents.length})</TabsTrigger>
            <TabsTrigger value="active">Активні ({activeStudents.length})</TabsTrigger>
            <TabsTrigger value="inactive">Неактивні ({inactiveStudents.length})</TabsTrigger>
            <TabsTrigger value="completed">Завершили ({completedStudents.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inactive">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inactiveStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Студенти не знайдені</h3>
            <p className="text-muted-foreground mb-4">
              Спробуйте змінити параметри пошуку або додайте нового студента
            </p>
            <Button className="primary-gradient shadow-glow">
              <UserPlus className="w-4 h-4 mr-2" />
              Додати студента
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;