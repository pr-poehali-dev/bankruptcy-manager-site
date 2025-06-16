import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scale" size={24} className="text-blue-400" />
              <span className="text-xl font-semibold">Банкротство.Эксперт</span>
            </div>
            <p className="text-slate-400 mb-4">
              Профессиональные услуги финансового управляющего по банкротству
              физических лиц в Санкт-Петербурге
            </p>
            <div className="text-sm text-slate-500">
              ИП Петров А.М. | ОГРНИП 123456789012345
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Внесудебное банкротство</li>
              <li>Судебное банкротство</li>
              <li>Реструктуризация долгов</li>
              <li>Юридическое сопровождение</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (812) 555-12-34</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@bankrupt-expert.ru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2024 Банкротство.Эксперт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
