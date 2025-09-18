import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen,
  Clock,
  Target,
  Award,
  Activity
} from "lucide-react";

const Analytics = () => {
  const overallStats = [
    {
      title: "Загальне завершення курсів",
      value: "78%",
      change: "+5% за місяць",
      icon: Target,
      positive: true
    },
    {
      title: "Активних студентів",
      value: "247",
      change: "+18 за тиждень",
      icon: Users,
      positive: true
    },
    {
      title: "Сер. час уроку",
      value: "24 хв",
      change: "-3 хв за місяць",
      icon: Clock,
      positive: true
    },
    {
      title: "Рейтинг курсів",
      value: "4.8",
      change: "+0.2 за місяць",
      icon: Award,
      positive: true
    }
  ];

  const coursePerformance = [
    {
      course: "Основи кардіології",
      students: 45,
      completion: 78,
      avgGrade: "B+",
      engagement: 92,
      category: "Кардіологія"
    },
    {
      course: "Неврологія для початківців",
      students: 32,
      completion: 92,
      avgGrade: "A-",
      engagement: 95,
      category: "Неврологія"
    },
    {
      course: "Анатомія людини",
      students: 67,
      completion: 65,
      avgGrade: "B",
      engagement: 87,
      category: "Анатомія"
    },
    {
      course: "Фармакологія",
      students: 28,
      completion: 85,
      avgGrade: "A",
      engagement: 89,
      category: "Фармакологія"
    },
    {
      course: "Хірургія загальна",
      students: 21,
      completion: 100,
      avgGrade: "A+",
      engagement: 98,
      category: "Хірургія"
    },
    {
      course: "Педіатрія",
      students: 38,
      completion: 45,
      avgGrade: "C+",
      engagement: 73,
      category: "Педіатрія"
    }
  ];

  const studentEngagement = [
    {
      period: "Січень 2024",
      activeStudents: 180,
      completedLessons: 850,
      avgSessionTime: 28,
      retention: 89
    },
    {
      period: "Лютий 2024",
      activeStudents: 210,
      completedLessons: 980,
      avgSessionTime: 26,
      retention: 91
    },
    {
      period: "Березень 2024",
      activeStudents: 247,
      completedLessons: 1150,
      avgSessionTime: 24,
      retention: 94
    }
  ];

  const topPerformers = [
    {
      name: "Олена Козлова",
      courses: 3,
      avgGrade: "A+",
      completion: 95,
      streak: 28
    },
    {
      name: "Ольга Ніколаєва",
      courses: 3,
      avgGrade: "A",
      completion: 88,
      streak: 21
    },
    {
      name: "Анна Смірнова",
      courses: 2,
      avgGrade: "A",
      completion: 85,
      streak: 15
    },
    {
      name: "Олександр Сидоров",
      courses: 1,
      avgGrade: "A+",
      completion: 100,
      streak: 35
    }
  ];

  const getGradeBadge = (grade: string) => {
    const gradeColors: { [key: string]: string } = {
      "A+": "bg-emerald-500/10 text-emerald-500",
      "A": "bg-green-500/10 text-green-500",
      "A-": "bg-green-400/10 text-green-400",
      "B+": "bg-blue-500/10 text-blue-500",
      "B": "bg-blue-400/10 text-blue-400",
      "C+": "bg-orange-500/10 text-orange-500",
      "C": "bg-orange-400/10 text-orange-400"
    };
    
    return (
      <Badge className={gradeColors[grade] || "bg-gray-500/10 text-gray-500"}>
        {grade}
      </Badge>
    );
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return "text-emerald-500";
    if (engagement >= 80) return "text-green-500";
    if (engagement >= 70) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Аналітика та звіти
          </h1>
          <p className="text-muted-foreground">
            Детальна аналітика з курсів, студентів та їх успішності
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overallStats.map((stat, index) => (
            <Card key={index} className="card-gradient border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-xs ${stat.positive ? 'text-primary' : 'text-destructive'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="courses">Курси</TabsTrigger>
            <TabsTrigger value="engagement">Залученість</TabsTrigger>
            <TabsTrigger value="performance">Кращі студенти</TabsTrigger>
          </TabsList>

          {/* Course Performance */}
          <TabsContent value="courses">
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Продуктивність курсів</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursePerformance.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{course.course}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{course.students} студентів</span>
                            <Badge variant="outline" className="text-xs">{course.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium text-foreground">{course.completion}%</div>
                          <div className="text-xs text-muted-foreground">Завершення</div>
                        </div>
                        <div className="text-center">
                          {getGradeBadge(course.avgGrade)}
                          <div className="text-xs text-muted-foreground mt-1">Сер. оцінка</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-sm font-medium ${getEngagementColor(course.engagement)}`}>
                            {course.engagement}%
                          </div>
                          <div className="text-xs text-muted-foreground">Залученість</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Student Engagement */}
          <TabsContent value="engagement">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-gradient border-border shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Динаміка залученості</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {studentEngagement.map((period, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium text-foreground mb-2">{period.period}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Активних студентів:</span>
                            <span className="ml-2 font-medium text-foreground">{period.activeStudents}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Завершено уроків:</span>
                            <span className="ml-2 font-medium text-foreground">{period.completedLessons}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Сер. час сесії:</span>
                            <span className="ml-2 font-medium text-foreground">{period.avgSessionTime} хв</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Утримання:</span>
                            <span className="ml-2 font-medium text-primary">{period.retention}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Статистика за категоріями</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Кардіологія", "Неврологія", "Анатомія", "Фармакологія", "Хірургія", "Педіатрія"].map((category, index) => {
                      const categoryData = coursePerformance.find(c => c.category === category);
                      const completion = categoryData?.completion || 0;
                      
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground font-medium">{category}</span>
                            <span className="text-muted-foreground">{completion}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${completion}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Top Performers */}
          <TabsContent value="performance">
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Кращі студенти</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{student.name}</h4>
                          <div className="text-sm text-muted-foreground">
                            {student.courses} курса, серія {student.streak} днів
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium text-foreground">{student.completion}%</div>
                          <div className="text-xs text-muted-foreground">Завершення</div>
                        </div>
                        <div className="text-center">
                          {getGradeBadge(student.avgGrade)}
                          <div className="text-xs text-muted-foreground mt-1">Сер. оцінка</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-primary">{student.streak}</div>
                          <div className="text-xs text-muted-foreground">Серія днів</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;