import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: 'Кружка',
      price: '990₽',
      image: 'img/8bfab1c0-4d9c-4d1e-8a64-3c89d312b548.jpg',
      category: 'Посуда'
    },
    {
      id: 2,
      name: 'Футболка',
      price: '1490₽',
      image: 'img/b589d4ed-5d12-4960-84ff-34ffd03de58a.jpg',
      category: 'Одежда'
    },
    {
      id: 3,
      name: 'Бутылка',
      price: '1290₽',
      image: 'img/58308ebe-7220-4c20-9178-369c0252382d.jpg',
      category: 'Аксессуары'
    }
  ];

  const designs = [
    'Минимализм',
    'Абстракция',
    'Природа',
    'Космос',
    'Животные',
    'Цитаты'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral via-mint to-ocean font-open-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-rubik font-bold text-2xl bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
            PrintShop
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#catalog" className="hover:text-coral transition-colors">Каталог</a>
            <a href="#gallery" className="hover:text-coral transition-colors">Галерея</a>
            <a href="#delivery" className="hover:text-coral transition-colors">Доставка</a>
          </nav>
          <Button className="bg-gradient-to-r from-coral to-mint text-white hover:scale-105 transition-transform">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-rubik font-bold text-5xl md:text-7xl mb-6 drop-shadow-lg">
            Твой дизайн.<br />
            <span className="bg-gradient-to-r from-sunny to-lavender bg-clip-text text-transparent">
              Твой стиль.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Создавай кастомные товары с печатью через Printful. 
            Футболки, кружки, бутылки и многое другое!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-coral hover:scale-105 transition-transform font-semibold px-8 py-4">
              <Icon name="Palette" className="mr-2" size={20} />
              Создать дизайн
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coral transition-all px-8 py-4">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Каталог товаров
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-rubik font-bold text-4xl text-center mb-12">
            Популярные товары
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-mint font-semibold mb-2">{product.category}</div>
                  <h3 className="font-rubik font-semibold text-xl mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-coral">{product.price}</span>
                    <Button className="bg-gradient-to-r from-coral to-mint text-white hover:scale-105 transition-transform">
                      Настроить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gradient-to-r from-lavender/20 to-sunny/20">
        <div className="container mx-auto px-4">
          <h2 className="font-rubik font-bold text-4xl text-center mb-12">
            Галерея готовых дизайнов
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {designs.map((design, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-coral to-mint rounded-lg p-4 flex items-center justify-center text-white font-semibold text-center hover:scale-105 transition-transform">
                  {design}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-mint to-ocean text-white hover:scale-105 transition-transform">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть все дизайны
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-rubik font-bold text-4xl text-center mb-12">
            Доставка и оплата
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-coral to-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">От 3 до 7 дней по всей России</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-mint to-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Удобная оплата</h3>
              <p className="text-gray-600">Карта, PayPal, банковский перевод</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-ocean to-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">100% гарантия на все товары</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-lavender to-sunny rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Всегда готовы помочь</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-rubik font-bold text-2xl bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent mb-4">
                PrintShop
              </div>
              <p className="text-gray-400">
                Создавай уникальные товары с кастомным дизайном через интеграцию с Printful
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Товары</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Футболки</li>
                <li>Кружки</li>
                <li>Бутылки</li>
                <li>Стаканы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@printshop.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 PrintShop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;