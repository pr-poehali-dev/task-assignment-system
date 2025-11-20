import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-[#3A3A3A] text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span>+7 (495) 456 78 90</span>
            <span>info@furer.ru</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Search" size={16} />
            <Icon name="User" size={16} />
            <Icon name="ShoppingCart" size={16} />
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">FURER</div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Button variant="ghost" className="text-white bg-primary rounded-full px-6">КАТАЛОГ</Button>
            <a href="#about">О НАС</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">ДЛЯ БИЗНЕСА</span>
            <Button variant="outline" size="sm">ВОЙТИ</Button>
          </div>
        </div>
      </nav>

      <section className="bg-[#E8E8E8] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                ЖИЗНЬ — ДАР,<br />
                <span className="text-primary">ЗДОРОВЬЕ — ТРУД!</span>
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Мы живем на 5 минут от Китайской марки,
                предоставляем полную гарантию на продукцию и сервисное обслуживание,
                качество по самым невысоким ценам, доступные в стране и предприняли
                меры по производству и эксплуатации.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/4b602ad1-6172-4c84-9b0b-6891ce214160.png"
                alt="Офтальмологическое оборудование"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center border">
              <Icon name="Star" className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="font-bold text-sm mb-2 uppercase">Мировые стандарты<br />качества</h3>
            </Card>
            <Card className="p-8 text-center border">
              <Icon name="Users" className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="font-bold text-sm mb-2 uppercase">Передовые<br />технологии</h3>
            </Card>
            <Card className="p-8 text-center border">
              <Icon name="Factory" className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="font-bold text-sm mb-2 uppercase">Экологичное<br />производство</h3>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt="Оборудование"
                className="w-full rounded"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">О КОМПАНИИ</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-primary text-3xl font-bold">1</span>
                  <p className="text-sm text-gray-600 pt-2">
                    Мировое медицинское оборудование с импортным производством
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-primary text-3xl font-bold">2</span>
                  <p className="text-sm text-gray-600 pt-2">
                    Сильная база международного экспертов и специалистов
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-primary text-3xl font-bold">3</span>
                  <p className="text-sm text-gray-600 pt-2">
                    Используем каналы на сегодняшний день постоянного и эффективного
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">КАТАЛОГ</h2>
          <p className="text-center text-primary mb-12">
            СЛЕДИТЕ ЗА НАШИМ РАЗВИТИЕМ.<br />
            СКОРО ПОЯВЯТСЯ НОВЫЕ ПРЕДЛОЖЕНИЯ!
          </p>
          
          <div className="max-w-sm mx-auto">
            <Card className="overflow-hidden bg-white">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop"
                  alt="ARF-8500"
                  className="w-full h-64 object-cover"
                />
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">ARF-8500</h3>
                <div className="flex gap-2">
                  <Icon name="Share2" className="text-gray-400" size={20} />
                  <Icon name="ShoppingCart" className="text-gray-400" size={20} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&auto=format&fit=crop"
                alt="Сервис"
                className="w-full rounded"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold">СЕРВИС</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p>✓ Консультирование с нашего клуба каждого этапа</p>
                <p>✓ Обменные запасы работающего оборудования при выходе из строя РФ</p>
                <p>✓ Обеспечение своевременного последующего обслуживания в своих помещениях</p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm">УЗНАТЬ ЦЕНЫ</Button>
                <Button variant="outline" size="sm">ЗАКАЗАТЬ ЗВОНОК</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E8E8E8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-sm font-bold mb-2">+7 (495) 456 78 90</p>
              <p className="text-xs text-gray-600">Телефон</p>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">info@furer.ru</p>
              <p className="text-xs text-gray-600">Email</p>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Москва</p>
              <p className="text-xs text-gray-600">Адрес</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-2">РЕГИСТРАЦИЯ</h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            ВОЙТИ И К СПРАВОЧНОЙ КАТАЛОГА
          </p>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Имя" />
              <Input placeholder="Телефон" />
            </div>
            <Input placeholder="Email" type="email" className="mb-4" />
            <Button className="w-full bg-primary">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">НОВОСТИ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                alt="Новость"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">15.11.2024</p>
                <h3 className="font-bold mb-2">НОВОСТЬ</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Компания рада сообщить по поводу в продажу поступили...
                </p>
                <Button variant="link" className="text-primary p-0">→</Button>
              </div>
            </Card>
            <Card className="overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop"
                alt="Новость"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">10.11.2024</p>
                <h3 className="font-bold mb-2">НОВОСТЬ</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Расширили список сервисных услуг...
                </p>
                <Button variant="link" className="text-primary p-0">→</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#3A3A3A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold mb-4">FURER</div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs">КАТАЛОГ</h4>
              <p className="text-xs text-gray-400">О компании</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs">КОНТАКТЫ</h4>
              <p className="text-xs text-gray-400">+7 (495) 456 78 90</p>
              <p className="text-xs text-gray-400">info@furer.ru</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs">КТО МЫ?</h4>
              <p className="text-xs text-gray-400">info@furer.ru</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
            © 2024 FURER
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
