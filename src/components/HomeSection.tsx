import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface HomeSectionProps {
  stats: {
    level: number;
    xp: number;
    maxXp: number;
    rank: string;
    points: number;
    wins: number;
    matches: number;
  };
  tournaments: Array<{
    id: number;
    name: string;
    players: number;
    prize: string;
    status: string;
    type: string;
  }>;
  achievements: Array<{
    id: number;
    name: string;
    icon: string;
    unlocked: boolean;
    rarity: string;
  }>;
  topPlayers: Array<{
    rank: number;
    name: string;
    level: number;
    points: number;
    avatar: string;
  }>;
  getRarityColor: (rarity: string) => string;
}

const HomeSection = ({ stats, tournaments, achievements, topPlayers, getRarityColor }: HomeSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 border-0 text-white animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Уровень</div>
            <Icon name="TrendingUp" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold mb-2">{stats.level}</div>
          <Progress value={(stats.xp / stats.maxXp) * 100} className="h-2 bg-white/20" />
          <div className="text-xs opacity-75 mt-2">{stats.xp} / {stats.maxXp} XP</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-secondary to-secondary/80 border-0 text-white animate-fade-in" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Рейтинг</div>
            <Icon name="Award" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold mb-2">{stats.rank}</div>
          <div className="text-sm opacity-75">{stats.points} очков</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent to-accent/80 border-0 text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Побед</div>
            <Icon name="Target" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold mb-2">{stats.wins}</div>
          <div className="text-sm opacity-75">из {stats.matches} матчей</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-success to-success/80 border-0 text-white animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Винрейт</div>
            <Icon name="Percent" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold mb-2">
            {Math.round((stats.wins / stats.matches) * 100)}%
          </div>
          <div className="text-sm opacity-75">Процент побед</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold">Активные турниры</h3>
              <Button variant="ghost" size="sm">
                Все турниры
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {tournaments.map(tournament => (
                <div
                  key={tournament.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 cursor-pointer group border border-border hover:border-primary"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    tournament.type === 'championship' ? 'bg-game-orange' :
                    tournament.type === 'ranked' ? 'bg-game-purple' : 'bg-game-blue'
                  }`}>
                    <Icon name="Trophy" size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tournament.name}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {tournament.players} игроков
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Coins" size={14} />
                        {tournament.prize}
                      </span>
                    </div>
                  </div>
                  <Badge className={`${
                    tournament.status === 'active' ? 'bg-success' :
                    tournament.status === 'starting' ? 'bg-warning animate-pulse-glow' : 'bg-muted'
                  } text-white`}>
                    {tournament.status === 'active' ? 'В игре' :
                     tournament.status === 'starting' ? 'Начинается' : 'Скоро'}
                  </Badge>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Войти
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold">Достижения</h3>
              <Button variant="ghost" size="sm">
                Все достижения
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    achievement.unlocked
                      ? `${getRarityColor(achievement.rarity)} border-transparent hover:scale-105 cursor-pointer`
                      : 'bg-muted/30 border-dashed border-border opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2 text-center">{achievement.icon}</div>
                  <div className={`text-xs font-semibold text-center ${
                    achievement.unlocked ? 'text-white' : 'text-muted-foreground'
                  }`}>
                    {achievement.name}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 animate-scale-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-bold">Топ игроков</h3>
            <Icon name="TrendingUp" size={20} className="text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {topPlayers.map(player => (
              <div
                key={player.rank}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-muted cursor-pointer group ${
                  player.rank <= 3 ? 'bg-muted/50' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                  player.rank === 1 ? 'bg-game-orange text-white' :
                  player.rank === 2 ? 'bg-muted-foreground text-white' :
                  player.rank === 3 ? 'bg-warning text-white' : 'bg-muted text-foreground'
                }`}>
                  {player.rank}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                    {player.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Lvl {player.level} • {player.points.toLocaleString()} pts
                  </div>
                </div>
                {player.rank <= 3 && (
                  <Icon name="Crown" size={16} className="text-game-orange" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default HomeSection;
