import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

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

      {/* Quiz Section */}
      <div className="mt-20 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Icon name="Brain" size={48} className="mx-auto mb-4 text-orange-500" />
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
              Тест про Липецк
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
                  name={calculateScore() >= 4 ? "Trophy" : calculateScore() >= 3 ? "Award" : "Target"} 
                  size={64} 
                  className="mx-auto mb-4 text-orange-500" 
                />
                <h4 className="font-heading text-3xl font-bold text-gray-800 mb-2">
                  Ваш результат: {calculateScore()} из {quizQuestions.length}
                </h4>
                <p className="text-xl text-gray-600">
                  {calculateScore() === 5 && "Отлично! Вы настоящий эксперт по Липецку!"}
                  {calculateScore() === 4 && "Очень хорошо! Вы хорошо знаете город."}
                  {calculateScore() === 3 && "Неплохо! Есть что узнать еще."}
                  {calculateScore() < 3 && "Стоит узнать больше о Липецке!"}
                </p>
              </div>

              <div className="space-y-4 text-left">
                {quizQuestions.map((question, qIndex) => (
                  <div key={question.id} className="p-4 rounded-lg border-2 ${
                    selectedAnswers[question.id] === question.correctAnswer
                      ? 'border-green-300 bg-green-50'
                      : 'border-red-300 bg-red-50'
                  }">
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
  );
};

export default Index;