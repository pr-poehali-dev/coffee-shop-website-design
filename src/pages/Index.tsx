import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      name: "Латте \"Энергия утра\"",
      description: "Освежающий латте с карамельным сиропом и ванильным ароматом",
      price: "250 ₽",
      emoji: "☕"
    },
    {
      name: "Капучино \"Классика\"",
      description: "Нежный капучино с воздушной молочной пенкой",
      price: "220 ₽",
      emoji: "🥤"
    },
    {
      name: "Раф \"Лавандовый сон\"",
      description: "Уникальный раф с лавандовым сиропом и сливками",
      price: "280 ₽",
      emoji: "🌸"
    },
    {
      name: "Смузи \"Тропический взрыв\"",
      description: "Манго, банан, апельсин и капелька мяты",
      price: "180 ₽",
      emoji: "🍹"
    },
    {
      name: "Чизкейк \"Нью-Йорк\"",
      description: "Классический сливочный чизкейк с ягодным соусом",
      price: "320 ₽",
      emoji: "🍰"
    },
    {
      name: "Круассан \"Миндальный\"",
      description: "Хрустящий круассан с миндальной начинкой",
      price: "190 ₽",
      emoji: "🥐"
    }
  ];

  const testimonials = [
    {
      text: "Это лучшее место для встреч с друзьями и отдыха после учебы! Атмосфера невероятная, а кофе просто волшебный!",
      author: "Анна",
      role: "студентка МГУ"
    },
    {
      text: "Каждое утро начинаю здесь с латте. Бариста знают мой заказ наизусть. Это мой второй дом!",
      author: "Дмитрий",
      role: "фрилансер"
    },
    {
      text: "Идеальное место для работы за ноутбуком. Быстрый Wi-Fi, удобные места и вкусные десерты!",
      author: "София",
      role: "дизайнер"
    }
  ];

  const atmosphereImages = [
    { title: "Уютный интерьер", description: "Наслаждайтесь ароматным кофе в комфортной обстановке" },
    { title: "Книжный уголок", description: "Читайте любимые книги и отдыхайте" },
    { title: "Барная стойка", description: "Наблюдайте за работой наших мастеров-бариста" }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">☕</span>
            <h1 className="text-2xl font-bold text-primary">Свой Стиль</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium">Меню</a>
            <a href="#atmosphere" className="text-foreground hover:text-primary transition-colors font-medium">Атмосфера</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:block">Забронировать столик</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/eb489579-2a58-47ac-a5a7-46f860aa3eca/files/fa7caea5-08d5-430b-8788-6d32029e1bb1.jpg)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Приветствуем в уютной<br />атмосфере <span className="text-primary drop-shadow-lg">«Свой Стиль»!</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Здесь каждый найдет напиток по душе и компанию друзей!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Посмотреть меню <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <section id="promo" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Icon name="Sparkles" size={32} />
              <h3 className="text-3xl md:text-4xl font-bold">Только до конца месяца!</h3>
              <Icon name="Sparkles" size={32} />
            </div>
            <p className="text-xl md:text-2xl mb-4">
              Попробуй наш новый смузи всего за <span className="font-bold text-3xl">180₽</span>
            </p>
            <p className="text-lg opacity-90">Специальное предложение для наших гостей</p>
          </div>
        </section>

        <section id="menu" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наше меню</h2>
              <p className="text-xl text-muted-foreground">Каждый напиток создан с любовью и заботой</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <Card key={index} className="hover-scale overflow-hidden border-2 hover:border-primary transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                    <h3 className="text-2xl font-bold mb-3 text-center">{item.name}</h3>
                    <p className="text-muted-foreground mb-4 text-center">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-primary">{item.price}</span>
                      <Button>Заказать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="atmosphere" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Атмосфера</h2>
              <p className="text-xl text-muted-foreground">Почувствуй себя как дома</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {atmosphereImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="h-64 bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-6xl">
                    {index === 0 ? "🏠" : index === 1 ? "📚" : "☕"}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Отзывы наших гостей</h2>
              <p className="text-xl text-muted-foreground">Они уже нашли свой стиль у нас</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2 mb-4">
                      <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                      <p className="text-lg italic text-muted-foreground">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-br from-accent to-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Будем рады ответить на все ваши вопросы</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="h-12" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="h-12" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={5} />
                    </div>
                    <Button className="w-full h-12 text-lg">Отправить сообщение</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Пушкина, д. 10</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Часы работы</h4>
                      <p className="text-muted-foreground">Пн-Вс: 08:00 - 23:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <p className="text-muted-foreground">info@svoystyle.ru</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">☕</span>
                <h3 className="text-2xl font-bold">Свой Стиль</h3>
              </div>
              <p className="text-background/70">Твоя уютная кофейня в центре города</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-background/70 hover:text-background transition-colors">Главная</a></li>
                <li><a href="#menu" className="text-background/70 hover:text-background transition-colors">Меню</a></li>
                <li><a href="#atmosphere" className="text-background/70 hover:text-background transition-colors">Атмосфера</a></li>
                <li><a href="#contacts" className="text-background/70 hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2026 Кофейня "Свой Стиль". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;