import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Запишитесь на консультацию
          </h2>
          <p className="text-lg text-slate-600">
            Бесплатная консультация поможет определить возможность банкротства в
            вашем случае
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" type="tel" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Опишите вашу ситуацию" rows={4} />
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-slate-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (812) 555-12-34</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@bankrupt-expert.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Санкт-Петербург, ул. Невский пр., 100</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Документы для консультации
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="FileText"
                      size={16}
                      className="text-primary mt-0.5"
                    />
                    <span>Справки о доходах за последние 3 года</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="FileText"
                      size={16}
                      className="text-primary mt-0.5"
                    />
                    <span>Документы по кредитным обязательствам</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="FileText"
                      size={16}
                      className="text-primary mt-0.5"
                    />
                    <span>Информация об имуществе</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
