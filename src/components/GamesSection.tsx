import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface GamesSectionProps {
  games: Array<{
    id: number;
    name: string;
    icon: string;
    category: string;
    players: number;
    rating: number;
    color: string;
  }>;
}

const GamesSection = ({ games }: GamesSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <Input 
          placeholder="Поиск игр..." 
          className="lg:max-w-md"
        />
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">Все</Button>
          <Button variant="outline" size="sm">Экшен</Button>
          <Button variant="outline" size="sm">Стратегия</Button>
          <Button variant="outline" size="sm">Гонки</Button>
          <Button variant="outline" size="sm">Казуальные</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <Card 
            key={game.id} 
            className="p-0 overflow-hidden hover:border-primary transition-all duration-200 group cursor-pointer"
          >
            <div className={`h-48 ${game.color} flex items-center justify-center text-6xl relative`}>
              {game.icon}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200" />
              <Button 
                size="lg"
                className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white text-black hover:bg-white/90"
              >
                <Icon name="Play" size={24} className="mr-2" />
                Играть
              </Button>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{game.category}</p>
                </div>
                <Badge className="bg-primary text-white">
                  ⭐ {game.rating}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {game.players.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Zap" size={14} />
                  Онлайн
                </span>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-gradient-to-r from-primary to-accent">
                  <Icon name="Play" size={16} className="mr-2" />
                  Играть
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Heart" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GamesSection;
