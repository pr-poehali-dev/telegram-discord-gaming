import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ProfileSectionProps {
  profile: {
    username: string;
    avatar: string;
    level: number;
    xp: number;
    maxXp: number;
    rank: string;
    points: number;
    wins: number;
    matches: number;
    winRate: number;
  };
  inventory: Array<{
    id: number;
    name: string;
    icon: string;
    rarity: string;
    equipped: boolean;
  }>;
  stats: Array<{
    label: string;
    value: string | number;
    icon: string;
  }>;
}

const ProfileSection = ({ profile, inventory, stats }: ProfileSectionProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-game-orange to-game-orange/80';
      case 'epic': return 'from-game-purple to-game-purple/80';
      case 'rare': return 'from-game-blue to-game-blue/80';
      default: return 'from-muted to-muted/80';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 border-4 border-primary mb-4">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-4xl font-bold">
                {profile.avatar}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-heading font-bold mb-1">{profile.username}</h2>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-4">
              {profile.rank}
            </Badge>
            
            <div className="w-full mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Уровень {profile.level}</span>
                <span className="text-sm text-muted-foreground">{profile.xp}/{profile.maxXp}</span>
              </div>
              <Progress value={(profile.xp / profile.maxXp) * 100} className="h-3" />
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              <Button className="bg-gradient-to-r from-primary to-accent">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать
              </Button>
              <Button variant="outline">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-heading font-bold mb-4">Быстрая статистика</h3>
          <div className="space-y-3">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name={stat.icon as any} size={20} className="text-primary" />
                  </div>
                  <span className="text-sm">{stat.label}</span>
                </div>
                <span className="font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-heading font-bold mb-6">Общая статистика</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white">
              <Icon name="Trophy" size={24} className="mb-3 opacity-90" />
              <div className="text-3xl font-heading font-bold mb-1">{profile.wins}</div>
              <div className="text-sm opacity-75">Побед</div>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white">
              <Icon name="Target" size={24} className="mb-3 opacity-90" />
              <div className="text-3xl font-heading font-bold mb-1">{profile.matches}</div>
              <div className="text-sm opacity-75">Матчей</div>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white">
              <Icon name="Percent" size={24} className="mb-3 opacity-90" />
              <div className="text-3xl font-heading font-bold mb-1">{profile.winRate}%</div>
              <div className="text-sm opacity-75">Винрейт</div>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-success to-success/80 text-white">
              <Icon name="Star" size={24} className="mb-3 opacity-90" />
              <div className="text-3xl font-heading font-bold mb-1">{profile.points}</div>
              <div className="text-sm opacity-75">Очков</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-bold">Инвентарь</h3>
            <Button variant="outline" size="sm">
              Все предметы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {inventory.map(item => (
              <div
                key={item.id}
                className={`relative p-4 rounded-xl bg-gradient-to-br ${getRarityColor(item.rarity)} border-2 ${
                  item.equipped ? 'border-white' : 'border-transparent'
                } hover:scale-105 transition-all duration-200 cursor-pointer group`}
              >
                {item.equipped && (
                  <Badge className="absolute -top-2 -right-2 bg-success text-white text-xs">
                    <Icon name="Check" size={10} className="mr-1" />
                    Экип.
                  </Badge>
                )}
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <div className="text-xs font-semibold text-white text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-heading font-bold mb-6">Последние матчи</h3>
          <div className="space-y-3">
            {[
              { id: 1, result: 'win', mode: 'Рейтинговый', points: '+45', time: '10 мин назад' },
              { id: 2, result: 'win', mode: 'Турнир', points: '+120', time: '1 час назад' },
              { id: 3, result: 'loss', mode: 'Рейтинговый', points: '-25', time: '2 часа назад' },
              { id: 4, result: 'win', mode: 'Быстрая игра', points: '+30', time: '3 часа назад' },
            ].map(match => (
              <div
                key={match.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  match.result === 'win' ? 'bg-success' : 'bg-destructive'
                }`}>
                  <Icon 
                    name={match.result === 'win' ? 'TrendingUp' : 'TrendingDown'} 
                    size={24} 
                    className="text-white" 
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">
                    {match.result === 'win' ? 'Победа' : 'Поражение'}
                  </div>
                  <div className="text-sm text-muted-foreground">{match.mode}</div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${
                    match.result === 'win' ? 'text-success' : 'text-destructive'
                  }`}>
                    {match.points}
                  </div>
                  <div className="text-xs text-muted-foreground">{match.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;
