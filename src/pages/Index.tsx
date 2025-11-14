import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">TransTech</div>
          <div className="hidden md:flex gap-8">
            {[
              { id: "home", label: "Главная" },
              { id: "cases", label: "Кейсы" },
              { id: "about", label: "О нас" },
              { id: "contacts", label: "Контакты" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Цифровые решения для <span className="text-primary">транспортной отрасли</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем инновационное ПО для логистики, управления автопарком и оптимизации маршрутов
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("contacts")}>
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("cases")}>
                  Наши кейсы
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/c04c432e-b302-48c6-b526-c971759b8126/files/0b38fbb8-79ff-4278-8214-cb15dd29f562.jpg"
                alt="TransTech Office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: "Truck", title: "Логистика", desc: "Автоматизация всех процессов доставки" },
              { icon: "Route", title: "Маршрутизация", desc: "Оптимизация путей и экономия топлива" },
              { icon: "BarChart3", title: "Аналитика", desc: "Big Data и прогнозирование спроса" }
            ].map((item, idx) => (
              <Card key={idx} className="animate-fade-in hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Наши кейсы</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Решения, которые изменили бизнес наших клиентов
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Система управления автопарком",
                company: "LogiTrans Group",
                result: "+40% эффективность",
                description: "Внедрили полный цикл управления: от GPS-мониторинга до предиктивного обслуживания",
                tech: ["React", "Node.js", "PostgreSQL", "AWS IoT"]
              },
              {
                title: "Платформа для грузоперевозок",
                company: "CargoNet",
                result: "2x рост заказов",
                description: "Маркетплейс, соединяющий грузовладельцев и перевозчиков с AI-подбором",
                tech: ["Next.js", "Python", "ML", "Blockchain"]
              },
              {
                title: "Маршрутизация последней мили",
                company: "Express Delivery",
                result: "-25% затраты",
                description: "Алгоритм оптимизации доставки с учетом трафика и погодных условий",
                tech: ["Python", "TensorFlow", "Google Maps API"]
              },
              {
                title: "Складская система WMS",
                company: "Warehouse Pro",
                result: "+60% скорость",
                description: "Автоматизация приемки, хранения и отгрузки с использованием QR-кодов",
                tech: ["Vue.js", "Go", "Redis", "Mobile Apps"]
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <span className="text-sm text-secondary font-semibold">{item.result}</span>
                  </div>
                  <CardDescription className="text-sm font-semibold">{item.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                TransTech — команда из 50+ разработчиков, специализирующаяся на создании высоконагруженных систем для транспортной отрасли.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2015 года мы помогаем компаниям цифровизировать логистику, внедряя AI, IoT и облачные технологии.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "8+", label: "лет на рынке" },
                  { num: "120+", label: "проектов" },
                  { num: "50+", label: "специалистов" },
                  { num: "15", label: "стран" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-card">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.num}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Наш стек технологий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { category: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript"] },
                      { category: "Backend", items: ["Node.js", "Python", "Go", "Java"] },
                      { category: "Data & AI", items: ["TensorFlow", "PyTorch", "Apache Kafka", "Spark"] },
                      { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes"] }
                    ].map((tech, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold mb-2 text-primary">{tech.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.items.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-muted rounded text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Свяжитесь с нами</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Обсудим ваш проект и предложим оптимальное решение
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@transtech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Офис</h4>
                  <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-3">
                  {["Github", "Linkedin", "Twitter"].map((social, idx) => (
                    <Button key={idx} variant="outline" size="icon" className="rounded-full">
                      <Icon name={social} size={20} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 TransTech. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
