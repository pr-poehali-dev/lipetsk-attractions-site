import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const quizQuestions = [
    {
      id: 1,
      question: "В каком году был заложен Христорождественский собор?",
      options: ["1791", "1805", "1918", "1965"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Кто основал курорт в Нижнем парке?",
      options: ["Петр I", "Екатерина II", "Александр I", "Николай II"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Сколько экспонатов хранится в Липецком краеведческом музее?",
      options: ["Около 50 тысяч", "Около 100 тысяч", "Более 300 тысяч", "Более 500 тысяч"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "В каком году был открыт Парк Победы?",
      options: ["1945", "1955", "1965", "1975"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Где родился философ Г.В. Плеханов?",
      options: ["В Москве", "В Санкт-Петербурге", "В Липецке", "В Воронеже"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "Какое основное производство прославило Липецк при Петре I?",
      options: ["Текстильное", "Металлургическое", "Кожевенное", "Керамическое"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Как называется главная пешеходная улица Липецка?",
      options: ["Арбат", "Невский проспект", "Площадь Петра Великого", "Советская улица"],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "Что изображено на гербе Липецка?",
      options: ["Медведь", "Липа", "Орел", "Конь"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "В каком веке Липецк получил статус города?",
      options: ["XVII век", "XVIII век", "XIX век", "XX век"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Какой известный металлургический комбинат находится в Липецке?",
      options: ["НЛМК", "Северсталь", "ММК", "Мечел"],
      correctAnswer: 0
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const attractions = [
    {
      id: 1,
      title: "Христорождественский собор",
      description: "Главный православный храм Липецка, построенный в XIX веке. Удивительная архитектура и богатая история.",
      image: "https://cdn.poehali.dev/files/ce415769-8bbe-4ed6-9488-0f1ebbbfbf6c.jpeg",
      category: "Храмы и соборы",
      detailInfo: {
        history: "Христорождественский собор был заложен в 1791 году и является одним из главных православных храмов Липецка.",
        architecture: "Храм построен в стиле русского классицизма с элементами барокко. Главный купол покрыт сусальным золотом.",
        address: "пл. Соборная, 6, Липецк"
      }
    },
    {
      id: 2,
      title: "Липецкий областной краеведческий музей",
      description: "Богатая коллекция экспонатов, рассказывающих об истории и культуре Липецкой области.",
      image: "https://cdn.poehali.dev/files/978b2a04-c4e9-4b8c-9a7d-ac9ad622b8e4.jpeg",
      category: "Музеи",
      detailInfo: {
        history: "Музей основан в 1918 году и является одним из старейших музеев Черноземья.",
        collection: "Более 300 тысяч экспонатов, включая археологические находки, предметы быта, произведения искусства.",
        address: "ул. Ленина, 25, Липецк"
      }
    },
    {
      id: 3,
      title: "Парк Победы",
      description: "Прекрасное место для отдыха с аллеями, фонтанами и мемориалами военной славы.",
      image: "https://cdn.poehali.dev/files/6b293539-6b93-45ae-923b-32c4848ceeee.jpeg",
      category: "Парки и скверы",
      detailInfo: {
        history: "Парк создан в честь победы в Великой Отечественной войне и открыт в 1965 году.",
        memorials: "Вечный огонь, памятник неизвестному солдату, аллея героев.",
        address: "ул. Гагарина, Липецк"
      }
    },
    {
      id: 4,
      title: "Нижний парк",
      description: "Исторический парк с минеральными источниками, где зародился курорт Липецк.",
      image: "https://cdn.poehali.dev/files/1237992a-d259-4c78-ad8e-10d8efd57460.jpeg",
      category: "Парки и скверы",
      detailInfo: {
        history: "Заложен в 1805 году по указу Александра I как курортный парк при минеральных источниках.",
        features: "Минеральные источники, исторические павильоны, липовые аллеи.",
        address: "Нижний парк, Липецк"
      }
    },
    {
      id: 5,
      title: "Дом-музей Г.В. Плеханова",
      description: "Музей, посвященный выдающему русскому философу и революционеру.",
      image: "https://cdn.poehali.dev/files/180386f2-c9d0-4d56-b0f4-5ba572dce30d.jpeg",
      category: "Музеи",
      detailInfo: {
        history: "Музей в доме, где родился и провел детские годы философ Георгий Валентинович Плеханов.",
        exposition: "Личные вещи, документы, фотографии, воссозданная обстановка XIX века.",
        address: "ул. Плеханова, 36, Липецк"
      }
    },
    {
      id: 6,
      title: "Соборная площадь",
      description: "Центральная площадь города с красивыми историческими зданиями и фонтанами.",
      image: "https://cdn.poehali.dev/files/b7033135-620f-4017-9833-43a9a95029ea.jpeg",
      category: "Площади и улицы",
      detailInfo: {
        history: "Главная площадь города, сформировалась в XVIII-XIX веках как административный и духовный центр.",
        features: "Христорождественский собор, исторические здания администрации, фонтаны.",
        address: "пл. Соборная, Липецк"
      }
    },
    {
      id: 7,
      title: "Площадь Петра Великого",
      description: "Главная пешеходная зона города с памятником Петру I и современными фонтанами.",
      image: "https://cdn.poehali.dev/files/ce415769-8bbe-4ed6-9488-0f1ebbbfbf6c.jpeg",
      category: "Площади и улицы",
      detailInfo: {
        history: "Площадь названа в честь Петра I, основавшего металлургические заводы в Липецке.",
        features: "Памятник Петру I, танцующие фонтаны, пешеходная зона с кафе и магазинами.",
        address: "пл. Петра Великого, Липецк"
      }
    },
    {
      id: 8,
      title: "Липецкий зоопарк",
      description: "Современный зоопарк с разнообразной коллекцией животных и комфортными условиями.",
      image: "https://cdn.poehali.dev/files/6b293539-6b93-45ae-923b-32c4848ceeee.jpeg",
      category: "Развлечения",
      detailInfo: {
        history: "Открыт в 1973 году, сегодня один из лучших зоопарков Черноземья.",
        collection: "Более 300 видов животных, экзотариум, контактный зоопарк.",
        address: "ул. Зоопарковая, 10, Липецк"
      }
    },
    {
      id: 9,
      title: "Древне-Успенская церковь",
      description: "Старинный православный храм XVIII века с уникальной архитектурой.",
      image: "https://cdn.poehali.dev/files/b7033135-620f-4017-9833-43a9a95029ea.jpeg",
      category: "Храмы и соборы",
      detailInfo: {
        history: "Построена в 1730-х годах, одна из старейших сохранившихся церквей Липецка.",
        architecture: "Классический русский храм с колокольней, отреставрирован в 2000-х годах.",
        address: "ул. Первомайская, 18, Липецк"
      }
    },
    {
      id: 10,
      title: "Липецкий театр драмы",
      description: "Областной драматический театр с богатым репертуаром и историей.",
      image: "https://cdn.poehali.dev/files/978b2a04-c4e9-4b8c-9a7d-ac9ad622b8e4.jpeg",
      category: "Культура и искусство",
      detailInfo: {
        history: "Основан в 1921 году, один из старейших театров Черноземья.",
        repertoire: "Классические и современные постановки, спектакли для детей и взрослых.",
        address: "пл. Театральная, 2, Липецк"
      }
    },
    {
      id: 11,
      title: "Липецкий музей народного и декоративно-прикладного искусства",
      description: "Уникальная коллекция народных промыслов и ремесел региона.",
      image: "https://cdn.poehali.dev/files/180386f2-c9d0-4d56-b0f4-5ba572dce30d.jpeg",
      category: "Музеи",
      detailInfo: {
        history: "Открыт в 1996 году для сохранения традиций народных промыслов Липецкого края.",
        collection: "Романовская игрушка, кружево, вышивка, керамика, деревянные изделия.",
        address: "ул. Ленина, 37, Липецк"
      }
    },
    {
      id: 12,
      title: "Верхний парк культуры и отдыха",
      description: "Любимое место отдыха липчан с аттракционами и зелеными аллеями.",
      image: "https://cdn.poehali.dev/files/1237992a-d259-4c78-ad8e-10d8efd57460.jpeg",
      category: "Парки и скверы",
      detailInfo: {
        history: "Основан в начале XX века как городской сад.",
        features: "Детские аттракционы, кафе, концертная площадка, велодорожки.",
        address: "ул. Октябрьская, Липецк"
      }
    }
  ];

  const categories = [
    { name: "Все", icon: "LayoutGrid", color: "bg-purple-500" },
    { name: "Храмы и соборы", icon: "Church", color: "bg-orange-500" },
    { name: "Музеи", icon: "Building", color: "bg-blue-500" },
    { name: "Парки и скверы", icon: "Trees", color: "bg-green-500" },
    { name: "Площади и улицы", icon: "MapPin", color: "bg-red-500" },
    { name: "Культура и искусство", icon: "Music", color: "bg-pink-500" },
    { name: "Развлечения", icon: "PartyPopper", color: "bg-yellow-500" }
  ];

  const filteredAttractions = selectedCategory === "Все" 
    ? attractions 
    : attractions.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
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
        <div className="mb-12">
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
            Достопримечательности Липецка
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? `${cat.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
                }`}
              >
                <Icon name={cat.icon} size={18} className="mr-2" />
                {cat.name}
                {cat.name !== "Все" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({attractions.filter(a => a.category === cat.name).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction) => (
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
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">{attraction.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          <div className="mt-4">
                            <img 
                              src={attraction.image} 
                              alt={attraction.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="mb-4 text-gray-700">{attraction.description}</p>
                            <div className="space-y-3 text-gray-700">
                              {Object.entries(attraction.detailInfo).map(([key, value]) => (
                                <p key={key}>
                                  <strong className="text-gray-900">
                                    {key === 'history' && 'История:'}
                                    {key === 'architecture' && 'Архитектура:'}
                                    {key === 'address' && 'Адрес:'}
                                    {key === 'collection' && 'Коллекция:'}
                                    {key === 'memorials' && 'Мемориалы:'}
                                    {key === 'features' && 'Особенности:'}
                                    {key === 'exposition' && 'Экспозиция:'}
                                    {key === 'repertoire' && 'Репертуар:'}
                                  </strong> {value}
                                </p>
                              ))}
                            </div>
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

        <div className="mt-20 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Icon name="Brain" size={48} className="mx-auto mb-4 text-orange-500" />
              <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
                Тест о Липецке
              </h3>
              <p className="text-gray-600 text-lg">
                Проверьте свои знания о достопримечательностях и истории города
              </p>
            </div>

            {!showResults ? (
              <div className="space-y-8">
                {quizQuestions.map((question, qIndex) => (
                  <div key={question.id} className="border-b pb-6 last:border-b-0">
                    <p className="font-semibold text-lg text-gray-800 mb-4">
                      {qIndex + 1}. {question.question}
                    </p>
                    <div className="space-y-3">
                      {question.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleAnswerSelect(question.id, oIndex)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedAnswers[question.id] === oIndex
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                              selectedAnswers[question.id] === oIndex
                                ? 'border-orange-500 bg-orange-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedAnswers[question.id] === oIndex && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
                  <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
                    className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
                  >
                    Проверить результаты
                    <Icon name="CheckCircle" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl p-8">
                  <Icon 
                    name={calculateScore() >= 8 ? "Trophy" : calculateScore() >= 6 ? "Award" : "Target"} 
                    size={64} 
                    className="mx-auto mb-4 text-orange-500" 
                  />
                  <h4 className="font-heading text-3xl font-bold text-gray-800 mb-2">
                    Ваш результат: {calculateScore()} из {quizQuestions.length}
                  </h4>
                  <p className="text-xl text-gray-600">
                    {calculateScore() >= 9 && "Отлично! Вы настоящий эксперт по Липецку!"}
                    {calculateScore() >= 7 && calculateScore() < 9 && "Очень хорошо! Вы хорошо знаете город."}
                    {calculateScore() >= 5 && calculateScore() < 7 && "Неплохо! Есть что узнать еще."}
                    {calculateScore() < 5 && "Стоит узнать больше о Липецке!"}
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  {quizQuestions.map((question, qIndex) => (
                    <div key={question.id} className={`p-4 rounded-lg border-2 ${
                      selectedAnswers[question.id] === question.correctAnswer
                        ? 'border-green-300 bg-green-50'
                        : 'border-red-300 bg-red-50'
                    }`}>
                      <p className="font-semibold text-gray-800 mb-2">
                        {qIndex + 1}. {question.question}
                      </p>
                      <div className="flex items-center">
                        <Icon 
                          name={selectedAnswers[question.id] === question.correctAnswer ? "CheckCircle" : "XCircle"} 
                          size={20} 
                          className={selectedAnswers[question.id] === question.correctAnswer ? "text-green-600 mr-2" : "text-red-600 mr-2"}
                        />
                        <span className="text-gray-700">
                          {selectedAnswers[question.id] === question.correctAnswer
                            ? `Верно: ${question.options[question.correctAnswer]}`
                            : `Неверно. Правильный ответ: ${question.options[question.correctAnswer]}`
                          }
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                >
                  Пройти тест заново
                  <Icon name="RotateCcw" size={20} className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
