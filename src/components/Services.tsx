import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "FileText",
      title: "Анализ ситуации",
      description:
        "Бесплатная оценка возможности банкротства и составление плана действий",
      price: "Бесплатно",
    },
    {
      icon: "Users",
      title: "Внесудебное банкротство",
      description:
        "Упрощенная процедура для долгов до 500 000 рублей без судебных заседаний",
      price: "от 25 000 ₽",
    },
    {
      icon: "Gavel",
      title: "Судебное банкротство",
      description:
        "Полное сопровождение процедуры реструктуризации долгов или реализации имущества",
      price: "от 35 000 ₽",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Услуги финансового управляющего
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Профессиональное сопровождение всех этапов процедуры банкротства в
            соответствии с требованиями закона
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
