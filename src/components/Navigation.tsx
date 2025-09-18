import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  Home, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart3, 
  Menu, 
  X,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const publicNavigation = [
    { name: "Головна", href: "/", icon: Home },
    { name: "Майбутні події", href: "/courses", icon: BookOpen },
    { name: "Події в записі", href: "/recorded-events", icon: Users },
    { name: "Спікери", href: "/speakers", icon: Users },
    { name: "Тарифи", href: "/pricing", icon: BarChart3 },
    { name: "Контакти", href: "/contact", icon: BarChart3 },
  ];

  const privateNavigation = [
    { name: "Кабінет", href: "/dashboard", icon: LayoutDashboard },
    { name: "Управління курсами", href: "/courses-management", icon: BookOpen },
    { name: "Студенти", href: "/students", icon: Users },
    { name: "Аналітика", href: "/analytics", icon: BarChart3 },
  ];

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const navigation = isAuthenticated ? privateNavigation : publicNavigation;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">Docstream</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Login/Logout */}
          <div className="hidden md:flex items-center ml-4">
            {isAuthenticated ? (
              <Button variant="outline" onClick={() => {
                localStorage.removeItem('isAuthenticated');
                window.location.href = '/';
              }}>
                Вихід
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('userEmail', 'demo@docstream.ua');
                    window.location.href = '/dashboard';
                  }}
                  className="text-xs"
                >
                  Демо-вхід
                </Button>
                <Button asChild variant="outline">
                  <Link to="/login">Увійти</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
              
              {/* Mobile Login/Logout */}
              <div className="px-3 py-2 border-t border-border mt-2 pt-4">
                {isAuthenticated ? (
                  <Button variant="outline" className="w-full" onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    window.location.href = '/';
                  }}>
                    Вихід
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => {
                        localStorage.setItem('isAuthenticated', 'true');
                        localStorage.setItem('userEmail', 'demo@docstream.ua');
                        window.location.href = '/dashboard';
                        setIsMenuOpen(false);
                      }}
                    >
                      Демо-вхід в кабінет
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>Увійти</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;