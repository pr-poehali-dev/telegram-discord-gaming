import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface RatingSectionProps {
  currentUser: {
    rank: number;
    name: string;
    level: number;
    points: number;
    avatar: string;
    change: number;
  };
  leaderboard: Array<{
    rank: number;
    name: string;
    level: number;
    points: number;
    avatar: string;
    change: number;
    wins: number;
    matches: number;
  }>;
}

const RatingSection = ({ currentUser, leaderboard }: RatingSectionProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarFallback className="bg-white text-primary text-3xl font-bold">
              {currentUser.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-heading font-bold">{currentUser.name}</h2>
              <Badge className="bg-white text-primary">
                Уровень {currentUser.level}
              </Badge>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-sm opacity-90">Рейтинг</div>
                <div className="text-2xl font-bold">#{currentUser.rank}</div>
              </div>
              <div>
                <div className="text-sm opacity-90">Очки</div>
                <div className="text-2xl font-bold">{currentUser.points.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm opacity-90">Изменение</div>
                <div className={`text-2xl font-bold flex items-center gap-1 ${
                  currentUser.change > 0 ? 'text-success' : 'text-destructive'
                }`}>
                  <Icon 
                    name={currentUser.change > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    size={20} 
                  />
                  {currentUser.change > 0 ? '+' : ''}{currentUser.change}
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg">
            <Icon name="TrendingUp" size={20} className="mr-2" />
            Играть
          </Button>
        </div>
      </Card>

      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm">Все время</Button>
        <Button variant="outline" size="sm">Сегодня</Button>
        <Button variant="outline" size="sm">Неделя</Button>
        <Button variant="outline" size="sm">Месяц</Button>
        <Button variant="outline" size="sm">Сезон</Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-heading font-bold">Таблица лидеров</h3>
          <Button variant="outline" size="sm">
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Обновить
          </Button>
        </div>

        <div className="space-y-2">
          {leaderboard.map((player, index) => (
            <div
              key={player.rank}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-muted cursor-pointer group ${
                player.rank <= 3 ? 'bg-muted/50 border border-border' : ''
              } ${player.name === currentUser.name ? 'bg-primary/20 border-2 border-primary' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                player.rank === 1 ? 'bg-gradient-to-br from-game-orange to-game-orange/80 text-white' :
                player.rank === 2 ? 'bg-gradient-to-br from-muted-foreground to-muted-foreground/80 text-white' :
                player.rank === 3 ? 'bg-gradient-to-br from-warning to-warning/80 text-white' : 
                'bg-muted text-foreground'
              }`}>
                {player.rank}
              </div>

              <Avatar className="w-12 h-12 border-2 border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {player.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold group-hover:text-primary transition-colors truncate">
                    {player.name}
                  </h4>
                  {player.rank <= 3 && (
                    <Icon name="Crown" size={16} className="text-game-orange" />
                  )}
                  {player.name === currentUser.name && (
                    <Badge className="bg-primary text-white">Вы</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Уровень {player.level}</span>
                  <span>•</span>
                  <span>{player.wins}/{player.matches} побед</span>
                  <span>•</span>
                  <span>{Math.round((player.wins / player.matches) * 100)}% WR</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">
                  {player.points.toLocaleString()}
                </div>
                <div className={`text-sm flex items-center gap-1 justify-end ${
                  player.change > 0 ? 'text-success' : player.change < 0 ? 'text-destructive' : 'text-muted-foreground'
                }`}>
                  {player.change !== 0 && (
                    <Icon 
                      name={player.change > 0 ? 'ArrowUp' : 'ArrowDown'} 
                      size={14} 
                    />
                  )}
                  {player.change > 0 ? '+' : ''}{player.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-heading font-bold mb-6">Прогресс до следующего ранга</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white text-lg">
              Diamond
            </Badge>
            <span className="text-muted-foreground">→</span>
            <Badge className="bg-gradient-to-r from-game-orange to-secondary text-white text-lg">
              Master
            </Badge>
          </div>
          <Progress value={75} className="h-4" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">2847 / 3500 очков</span>
            <span className="font-bold text-primary">Еще 653 очка</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RatingSection;
