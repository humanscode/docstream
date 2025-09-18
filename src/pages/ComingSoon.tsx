import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileText, Shield, Award } from "lucide-react";

type Doc = {
  id: number;
  title: string;
  icon: React.ReactNode;
  filePath: string;
};

const ComingSoon = () => {
  const documents: Doc[] = [
    {
      id: 1,
      title:
        "ПОЛОЖЕННЯ про методологію оцінювання набутих знань, компетентностей та практичних навичок працівників сфери охорони здоров'я",
      icon: <FileText className="h-6 w-6" />,
      filePath: "/files/методологія.pdf",
    },
    {
      id: 2,
      title:
        "ПОЛОЖЕННЯ про запобігання конфлікту інтересів під час проведення заходів безперервного професійного розвитку та недопущення залучення і використання коштів фізичних (юридичних) осіб для реклами лікарських засобів, медичних виробів, допоміжних засобів реабілітації або медичних послуг",
      icon: <Shield className="h-6 w-6" />,
      filePath: "/files/конфлікт.pdf",
    },
    {
      id: 3,
      title:
        "ПОЛОЖЕННЯ про оцінку заходів безперервного професійного розвитку на ознаки академічної доброчесності та дотримання принципів практичної медичної/фармацевтичної/реабілітаційної діяльності, заснованої на доказах (Принципи доказової медицини)",
      icon: <Award className="h-6 w-6" />,
      filePath: "/files/оцінка.pdf",
    },
  ];

  const buildHref = (path: string) => {
    return encodeURI(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">
                    D
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Docstream
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Docstream
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Платформа безперервного професійного розвитку медичних працівників
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
            <span className="text-sm font-medium">🚧 Сайт в розробці</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Нормативна документація
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Завантажте необхідні документи для ознайомлення з положеннями
            платформи
          </p>

          <div className="space-y-6">
            {documents.map((doc) => {
              const href = buildHref(doc.filePath);
              const downloadName =
                doc.filePath.split("/").pop() ?? "document.pdf";

              return (
                <Card key={doc.id} className="card-gradient shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-4">
                      <div className="text-primary mt-1">{doc.icon}</div>
                      <span className="text-lg leading-tight">{doc.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={href}
                      download={downloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto"
                    >
                      <Button className="w-full sm:w-auto" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Завантажити PDF
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Card className="card-gradient shadow-soft max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Слідкуйте за оновленнями</CardTitle>
              <CardDescription>
                Ми працюємо над створенням сучасної платформи для безперервного
                професійного розвитку. Незабаром буде доступний повний
                функціонал для медичних працівників.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">Підписатись на новини</Button>
                <Button>Зв'язатись з нами</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Docstream. Усі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
