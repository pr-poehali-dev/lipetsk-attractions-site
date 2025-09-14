import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const attractions = [
    {
      id: 1,
      title: "Христорождественский собор",
      description: "Главный православный храм Липецка, построенный в XIX веке. Удивительная архитектура и богатая история.",
      image: "/img/7c4931ac-5f7c-4a7b-8601-e4cdc776975d.jpg",
      category: "Достопримечательности"
    },
    {
      id: 2,
      title: "Липецкий областной краеведческий музей",
      description: "Богатая коллекция экспонатов, рассказывающих об истории и культуре Липецкой области.",
      image: "/img/e1c67c3e-6f41-4336-be4f-2f0a0aa0fb39.jpg",
      category: "Музеи"
    },
    {
      id: 3,
      title: "Парк Победы",
      description: "Прекрасное место для отдыха с аллеями, фонтанами и мемориалами военной славы.",
      image: "/img/5b6d2ecf-13aa-4dcc-947f-c950bbd54353.jpg",
      category: "Парки"
    },
    {
      id: 4,
      title: "Нижний парк",
      description: "Исторический парк с минеральными источниками, где зародился курорт Липецк.",
      image: "/img/5b6d2ecf-13aa-4dcc-947f-c950bbd54353.jpg",
      category: "Парки"
    },
    {
      id: 5,
      title: "Дом-музей Г.В. Плеханова",
      description: "Музей, посвященный выдающему русскому философу и революционеру.",
      image: "/img/e1c67c3e-6f41-4336-be4f-2f0a0aa0fb39.jpg",
      category: "Музеи"
    },
    {
      id: 6,
      title: "Соборная площадь",
      description: "Центральная площадь города с красивыми историческими зданиями и фонтанами.",
      image: "/img/7c4931ac-5f7c-4a7b-8601-e4cdc776975d.jpg",
      category: "Достопримечательности"
    }
  ];

  const categories = [
    {
      name: "Достопримечательности",
      icon: "MapPin",
      color: "bg-orange-500",
      count: attractions.filter(a => a.category === "Достопримечательности").length
    },
    {
      name: "Музеи", 
      icon: "Building",
      color: "bg-blue-500",
      count: attractions.filter(a => a.category === "Музеи").length
    },
    {
      name: "Парки",
      icon: "Trees",
      color: "bg-green-500", 
      count: attractions.filter(a => a.category === "Парки").length
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Добро пожаловать в Липецк
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Откройте для себя богатую историю, культуру и природные красоты нашего прекрасного города
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3 text-lg animate-scale-in"
            >
              Начать исследование
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Разделы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучите различные аспекты Липецка через наши тематические разделы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={category.name} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={category.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl text-gray-800">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {category.count} {category.count === 1 ? 'место' : category.count < 5 ? 'места' : 'мест'}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
            Популярные места
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                      {attraction.category}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl text-gray-800 line-clamp-2">
                    {attraction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {attraction.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-300">
                    Подробнее
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Лет истории</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-500 mb-2">508K</div>
              <div className="text-gray-600 font-medium">Жителей</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Достопримечательностей</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-12 text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Планируете визит в Липецк?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите персональные рекомендации и актуальную информацию о городе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
              Скачать гид
              <Icon name="Download" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold">
              Связаться с нами
              <Icon name="MessageCircle" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;