import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const credentials = [
    { icon: "Award", text: "Член СРО «Северо-Запад» с 2018 года" },
    { icon: "GraduationCap", text: "Высшее юридическое образование" },
    { icon: "BookOpen", text: "Специализация по ФЗ-127 с момента принятия" },
    { icon: "Users", text: "Более 500 успешно завершенных дел" },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              О финансовом управляющем
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Александр Михайлович Петров — сертифицированный финансовый
              управляющий с 6-летним опытом работы в сфере банкротства
              физических лиц. Специализируется на сложных делах с множественными
              кредиторами.
            </p>
            <p className="text-slate-600 mb-8">
              Индивидуальный подход к каждому клиенту, полная конфиденциальность
              и прозрачность всех процедур. Работаю исключительно в рамках
              закона, обеспечивая максимальную защиту интересов должника.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={cred.icon as any}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-sm text-slate-700">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Почему выбирают меня
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <span className="text-slate-600">
                      Фиксированная стоимость услуг
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <span className="text-slate-600">
                      Сопровождение на всех этапах
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <span className="text-slate-600">
                      Опыт работы с судами СПб и ЛО
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <span className="text-slate-600">
                      Бесплатные консультации после процедуры
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
