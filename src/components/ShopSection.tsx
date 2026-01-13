import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ShopSectionProps {
  balance: number;
  items: Array<{
    id: number;
    name: string;
    icon: string;
    price: number;
    category: string;
    rarity: string;
    owned: boolean;
    discount?: number;
  }>;
}

const ShopSection = ({ balance, items }: ShopSectionProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-game-orange to-game-orange/80';
      case 'epic': return 'from-game-purple to-game-purple/80';
      case 'rare': return 'from-game-blue to-game-blue/80';
      default: return 'from-muted to-muted/80';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 p-6 bg-gradient-to-br from-primary to-accent text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium opacity-90 mb-2">Ваш баланс</div>
              <div className="text-5xl font-heading font-bold mb-3">
                {balance.toLocaleString()} 💎
              </div>
              <p className="text-sm opacity-75">Игровая валюта</p>
            </div>
            <div className="space-y-2">
              <Button className="bg-white text-primary hover:bg-white/90 w-full">
                <Icon name="Plus" size={16} className="mr-2" />
                Пополнить
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full">
                <Icon name="Gift" size={16} className="mr-2" />
                Промокод
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
              <Icon name="Gift" size={32} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Ежедневная награда</h3>
            <p className="text-sm text-muted-foreground mb-3">Получите бонус!</p>
            <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80">
              Забрать
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <Input 
          placeholder="Поиск предметов..." 
          className="lg:max-w-md"
        />
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">Все</Button>
          <Button variant="outline" size="sm">Скины</Button>
          <Button variant="outline" size="sm">Эмоции</Button>
          <Button variant="outline" size="sm">Аватары</Button>
          <Button variant="outline" size="sm">Эффекты</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <Card
            key={item.id}
            className="p-0 overflow-hidden hover:border-primary transition-all duration-200 group cursor-pointer"
          >
            <div className={`h-48 bg-gradient-to-br ${getRarityColor(item.rarity)} flex items-center justify-center text-6xl relative`}>
              {item.icon}
              {item.discount && (
                <Badge className="absolute top-3 left-3 bg-secondary text-white animate-pulse">
                  -{item.discount}%
                </Badge>
              )}
              {item.owned && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Badge className="bg-success text-white text-lg">
                    <Icon name="Check" size={16} className="mr-2" />
                    Куплено
                  </Badge>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="mb-3">
                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {item.discount ? (
                    <div>
                      <div className="text-xs text-muted-foreground line-through">
                        {item.price.toLocaleString()} 💎
                      </div>
                      <div className="text-lg font-bold text-secondary">
                        {Math.round(item.price * (1 - item.discount / 100)).toLocaleString()} 💎
                      </div>
                    </div>
                  ) : (
                    <div className="text-lg font-bold">
                      {item.price.toLocaleString()} 💎
                    </div>
                  )}
                </div>
                <Button 
                  size="sm" 
                  disabled={item.owned}
                  className={item.owned ? '' : 'bg-gradient-to-r from-primary to-accent'}
                >
                  {item.owned ? 'Куплено' : 'Купить'}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
