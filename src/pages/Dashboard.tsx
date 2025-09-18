import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Clock, 
  Plus,
  Play,
  MoreHorizontal
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Активні курси",
      value: "12",
      icon: BookOpen,
      change: "+2 за місяць",
      positive: true
    },
    {
      title: "Студенти",
      value: "247",
      icon: Users,
      change: "+18 за тиждень",
      positive: true
    },
    {
      title: "Завершених уроків",
      value: "1,429",
      icon: TrendingUp,
      change: "+156 сьогодні",
      positive: true
    },
    {
      title: "Сер. час уроку",
      value: "24 хв",
      icon: Clock,
      change: "-3 хв за місяць",
      positive: true
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Основи кардіології",
      students: 45,
      completion: 78,
      status: "active",
      lastUpdated: "2 дні тому"
    },
    {
      id: 2,
      title: "Неврологія для початківців",
      students: 32,
      completion: 92,
      status: "active",
      lastUpdated: "1 день тому"
    },
    {
      id: 3,
      title: "Анатомія людини",
      students: 67,
      completion: 65,
      status: "draft",
      lastUpdated: "5 днів тому"
    },
    {
      id: 4,
      title: "Фармакологія",
      students: 28,
      completion: 85,
      status: "active",
      lastUpdated: "3 дні тому"
    }
  ];

  const recentActivity = [
    {
      type: "completion",
      student: "Анна Смірнова",
      action: "завершила урок",
      course: "Основи кардіології",
      time: "15 хвилин тому"
    },
    {
      type: "enrollment",
      student: "Михайло Петров",
      action: "записався на курс",
      course: "Неврологія",
      time: "1 година тому"
    },
    {
      type: "completion",
      student: "Олена Козлова",
      action: "завершила курс",
      course: "Анатомія людини",
      time: "2 години тому"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary/10 text-primary">Активний</Badge>;
      case "draft":
        return <Badge variant="secondary">Чернетка</Badge>;
      default:
        return <Badge variant="outline">Невідомо</Badge>;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Кабінет лектора
            </h1>
            <p className="text-muted-foreground">
              Ласкаво просимо до вашого особистого кабінету. Керуйте курсами та відстежуйте прогрес.
            </p>
          </div>
          <Button className="primary-gradient shadow-glow mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Створити курс
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Courses */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-foreground">Мої курси</CardTitle>
                <Button variant="ghost" size="sm">
                  Всі курси
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{course.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{course.students} студентів</span>
                            <span>{course.completion}% завершено</span>
                            <span>{course.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(course.status)}
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="card-gradient border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Остання активність</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.student}</span>
                          {' '}{activity.action}{' '}
                          <span className="font-medium">{activity.course}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;