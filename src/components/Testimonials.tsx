import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Елена К.",
      text: "Благодаря Александру Михайловичу избавилась от долгов на 2,3 млн рублей. Весь процесс прошел спокойно, без стрессов. Рекомендую!",
      rating: 5,
    },
    {
      name: "Михаил В.",
      text: "Профессиональный подход, четкое объяснение всех этапов. Процедура заняла 7 месяцев, результат — полное списание долгов.",
      rating: 5,
    },
    {
      name: "Анна С.",
      text: "Очень благодарна за помощь! Внесудебное банкротство прошло быстро и без проблем. Теперь могу спокойно планировать будущее.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-slate-600">
            Реальные истории людей, которые решили свои финансовые проблемы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-slate-900">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
