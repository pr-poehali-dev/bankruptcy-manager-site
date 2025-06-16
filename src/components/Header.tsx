import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Scale" size={24} className="text-primary" />
            <span className="text-xl font-semibold text-primary">
              Банкротство.Эксперт
            </span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Консультация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
