import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Eye" className="text-primary" size={32} />
            <span className="text-2xl font-bold">FURER</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">О КОМПАНИИ</a>
            <a href="#catalog" className="text-sm hover:text-primary transition-colors">КАТАЛОГ</a>
            <a href="#service" className="text-sm hover:text-primary transition-colors">СЕРВИС</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">КОНТАКТЫ</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">ВОЙТИ</Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-gray-100 to-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                ЖИЗНЬ — ДАР,<br />
                <span className="text-primary">ЗДОРОВЬЕ — ТРУД!</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Мы живем на 5 минут от Китайской марки, 
                предоставляем полную гарантию на продукцию и сервисное обслуживание.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  УЗНАТЬ БОЛЬШЕ
                </Button>
                <Button size="lg" variant="outline">
                  СВЯЗАТЬСЯ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/4b602ad1-6172-4c84-9b0b-6891ce214160.png"
                alt="Офтальмологическое оборудование"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">МИРОВЫЕ СТАНДАРТЫ КАЧЕСТВА</h3>
                <p className="text-muted-foreground">
                  Вся продукция соответствует международным стандартам качества
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">ПЕРЕДОВЫЕ ТЕХНОЛОГИИ</h3>
                <p className="text-muted-foreground">
                  Используем самые современные технологии в офтальмологии
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Leaf" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold">ЭКОЛОГИЧНОЕ ПРОИЗВОДСТВО</h3>
                <p className="text-muted-foreground">
                  Безопасные материалы и экологичные процессы производства
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О КОМПАНИИ</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Экспертиза в медицинском оборудовании</h3>
                  <p className="text-muted-foreground">
                    Современное новое оборудование импортного производства
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Сильная база компетентных экспертов</h3>
                  <p className="text-muted-foreground">
                    Опытная команда специалистов в области офтальмологии
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Используем каналы на сегодняшний день</h3>
                  <p className="text-muted-foreground">
                    Прямые поставки и актуальные технологии
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt="Медицинское оборудование"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">КАТАЛОГ</h2>
          <p className="text-center text-primary text-lg mb-12">
            СЛЕДИТЕ ЗА НАШИМ РАЗВИТИЕМ.<br />
            СКОРО ПОЯВЯТСЯ НОВЫЕ ПРЕДЛОЖЕНИЯ!
          </p>
          
          <div className="max-w-md mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop"
                    alt="ARF-8500 Авторефрактометр"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">ARF-8500</h3>
                  <p className="text-muted-foreground">
                    Автоматический рефрактометр с высокой точностью измерений
                  </p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      ПОДРОБНЕЕ
                    </Button>
                    <Button variant="outline" className="flex-1">
                      ЗАПРОСИТЬ ЦЕНУ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&auto=format&fit=crop"
                alt="Сервисное обслуживание"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">СЕРВИС</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">
                    Консультирование с нашего клуба каждого этапа
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">
                    Обменные запасы работающего оборудования при выходе из строя РФ
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">
                    Обеспечение своевременного последующего обслуживания в своих помещениях
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90">
                  УЗНАТЬ ЦЕНЫ
                </Button>
                <Button variant="outline">
                  ЗАКАЗАТЬ ЗВОНОК
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Phone" className="mx-auto text-primary" size={32} />
                <p className="font-bold">Телефон</p>
                <a href="tel:+74956781090" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 678 10 90
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Mail" className="mx-auto text-primary" size={32} />
                <p className="font-bold">Email</p>
                <a href="mailto:info@furer.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@furer.ru
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="MapPin" className="mx-auto text-primary" size={32} />
                <p className="font-bold">Адрес</p>
                <p className="text-muted-foreground">
                  г. Москва, ул. Примерная, д. 1
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">РЕГИСТРАЦИЯ</h2>
            <p className="text-center text-muted-foreground mb-8">
              ВОЙТИ И К СПРАВОЧНОЙ КАТАЛОГА
            </p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Компания</label>
                      <Input 
                        placeholder="Название компании"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">НОВОСТИ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                  alt="Новость"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>15 ноября 2024</span>
                </div>
                <h3 className="text-xl font-bold">Новинка в каталоге</h3>
                <p className="text-muted-foreground">
                  Компания рада сообщить по поводу в продажу поступили для Автоматической системы данного отделения и ее заказчиков возможностей узлового оборудования...
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Читать далее →
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop"
                  alt="Новость"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>10 ноября 2024</span>
                </div>
                <h3 className="text-xl font-bold">Обновление сервиса</h3>
                <p className="text-muted-foreground">
                  Расширили список сервисных услуг. Теперь доступно круглосуточное консультирование по всем вопросам эксплуатации оборудования...
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Eye" className="text-primary" size={32} />
                <span className="text-2xl font-bold">FURER</span>
              </div>
              <p className="text-gray-400 text-sm">
                Медицинское оборудование для офтальмологии
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">КОМПАНИЯ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#service" className="hover:text-primary transition-colors">Сервис</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 678 10 90</li>
                <li>info@furer.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">МЫ В СОЦСЕТЯХ</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 FURER. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
