import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const attractions = [
    {
      id: 1,
      title: "Христорождественский собор",
      description: "Главный православный храм Липецка, построенный в XIX веке. Удивительная архитектура и богатая история.",
      image: "https://cdn.poehali.dev/files/ce415769-8bbe-4ed6-9488-0f1ebbbfbf6c.jpeg",
      category: "Достопримечательности"
    },
    {
      id: 2,
      title: "Липецкий областной краеведческий музей",
      description: "Богатая коллекция экспонатов, рассказывающих об истории и культуре Липецкой области.",
      image: "https://cdn.poehali.dev/files/978b2a04-c4e9-4b8c-9a7d-ac9ad622b8e4.jpeg",
      category: "Музеи"
    },
    {
      id: 3,
      title: "Парк Победы",
      description: "Прекрасное место для отдыха с аллеями, фонтанами и мемориалами военной славы.",
      image: "https://cdn.poehali.dev/files/6b293539-6b93-45ae-923b-32c4848ceeee.jpeg",
      category: "Парки"
    },
    {
      id: 4,
      title: "Нижний парк",
      description: "Исторический парк с минеральными источниками, где зародился курорт Липецк.",
      image: "https://cdn.poehali.dev/files/1237992a-d259-4c78-ad8e-10d8efd57460.jpeg",
      category: "Парки"
    },
    {
      id: 5,
      title: "Дом-музей Г.В. Плеханова",
      description: "Музей, посвященный выдающему русскому философу и революционеру.",
      image: "https://cdn.poehali.dev/files/180386f2-c9d0-4d56-b0f4-5ba572dce30d.jpeg",
      category: "Музеи"
    },
    {
      id: 6,
      title: "Соборная площадь",
      description: "Центральная площадь города с красивыми историческими зданиями и фонтанами.",
      image: "https://cdn.poehali.dev/files/b7033135-620f-4017-9833-43a9a95029ea.jpeg",
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

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Attractions Grid */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
            Достопримечательности Липецка
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-300">
                        Подробнее
                        <Icon name="ExternalLink" size={16} className="ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">{attraction.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          <div className="mt-4">
                            <img 
                              src={attraction.image} 
                              alt={attraction.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="mb-4">{attraction.description}</p>
                            {attraction.id === 1 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Христорождественский собор был заложен в 1791 году и является одним из главных православных храмов Липецка.</p>
                                <p><strong>Архитектура:</strong> Храм построен в стиле русского классицизма с элементами барокко. Главный купол покрыт сусальным золотом.</p>
                                <p><strong>Адрес:</strong> пл. Соборная, 6, Липецк</p>
                              </div>
                            )}
                            {attraction.id === 2 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Музей основан в 1918 году и является одним из старейших музеев Черноземья.</p>
                                <p><strong>Коллекция:</strong> Более 300 тысяч экспонатов, включая археологические находки, предметы быта, произведения искусства.</p>
                                <p><strong>Адрес:</strong> ул. Ленина, 25, Липецк</p>
                              </div>
                            )}
                            {attraction.id === 3 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Парк создан в честь победы в Великой Отечественной войне и открыт в 1965 году.</p>
                                <p><strong>Мемориалы:</strong> Вечный огонь, памятник неизвестному солдату, аллея героев.</p>
                                <p><strong>Адрес:</strong> ул. Гагарина, Липецк</p>
                              </div>
                            )}
                            {attraction.id === 4 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Заложен в 1805 году по указу Александра I как курортный парк при минеральных источниках.</p>
                                <p><strong>Особенности:</strong> Минеральные источники, исторические павильоны, липовые аллеи.</p>
                                <p><strong>Адрес:</strong> Нижний парк, Липецк</p>
                              </div>
                            )}
                            {attraction.id === 5 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Музей в доме, где родился и провел детские годы философ Георгий Валентинович Плеханов.</p>
                                <p><strong>Экспозиция:</strong> Личные вещи, документы, фотографии, воссозданная обстановка XIX века.</p>
                                <p><strong>Адрес:</strong> ул. Плеханова, 36, Липецк</p>
                              </div>
                            )}
                            {attraction.id === 6 && (
                              <div className="space-y-3">
                                <p><strong>История:</strong> Главная площадь города, сформировавшаяся в XVIII-XIX веках вокруг Христорождественского собора.</p>
                                <p><strong>Архитектура:</strong> Историческая застройка, административные здания, памятники.</p>
                                <p><strong>Адрес:</strong> пл. Соборная, Липецк</p>
                              </div>
                            )}
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
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


      </div>
    </div>
  );
};

export default Index;