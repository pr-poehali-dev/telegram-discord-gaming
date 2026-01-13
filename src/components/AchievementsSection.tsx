import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface AchievementsSectionProps {
  achievements: Array<{
    id: number;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
    rarity: string;
    progress: number;
    maxProgress: number;
    points: number;
  }>;
}

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-game-orange to-game-orange/80';
      case 'epic': return 'from-game-purple to-game-purple/80';
      case 'rare': return 'from-game-blue to-game-blue/80';
      default: return 'from-muted to-muted/80';
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'Легендарное';
      case 'epic': return 'Эпическое';
      case 'rare': return 'Редкое';
      default: return 'Обычное';
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Получено</div>
            <Icon name="Award" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold mb-2">
            {unlockedCount}/{achievements.length}
          </div>
          <Progress 
            value={(unlockedCount / achievements.length) * 100} 
            className="h-2 bg-white/20" 
          />
        </Card>

        <Card className="p-6 bg-gradient-to-br from-secondary to-secondary/80 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Очки</div>
            <Icon name="Star" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold">{totalPoints}</div>
          <div className="text-sm opacity-75">Заработано</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Прогресс</div>
            <Icon name="TrendingUp" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold">
            {Math.round((unlockedCount / achievements.length) * 100)}%
          </div>
          <div className="text-sm opacity-75">Выполнено</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-success to-success/80 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Редкие</div>
            <Icon name="Gem" size={20} className="opacity-90" />
          </div>
          <div className="text-4xl font-heading font-bold">
            {achievements.filter(a => a.unlocked && (a.rarity === 'epic' || a.rarity === 'legendary')).length}
          </div>
          <div className="text-sm opacity-75">Получено</div>
        </Card>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm">Все</Button>
        <Button variant="outline" size="sm">Получены</Button>
        <Button variant="outline" size="sm">В процессе</Button>
        <Button variant="outline" size="sm">Легендарные</Button>
        <Button variant="outline" size="sm">Эпические</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map(achievement => (
          <Card
            key={achievement.id}
            className={`p-0 overflow-hidden transition-all duration-200 ${
              achievement.unlocked 
                ? 'hover:border-primary hover:scale-105 cursor-pointer' 
                : 'opacity-60'
            }`}
          >
            <div className={`h-32 bg-gradient-to-br ${getRarityColor(achievement.rarity)} flex items-center justify-center text-6xl relative`}>
              {achievement.icon}
              {!achievement.unlocked && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Icon name="Lock" size={32} className="text-white" />
                </div>
              )}
              {achievement.unlocked && (
                <Badge className="absolute top-3 right-3 bg-white text-black">
                  +{achievement.points}
                </Badge>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {getRarityLabel(achievement.rarity)}
                </Badge>
                {achievement.unlocked ? (
                  <Badge className="bg-success text-white">
                    <Icon name="Check" size={12} className="mr-1" />
                    Получено
                  </Badge>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    {achievement.progress}/{achievement.maxProgress}
                  </span>
                )}
              </div>

              {!achievement.unlocked && (
                <Progress 
                  value={(achievement.progress / achievement.maxProgress) * 100} 
                  className="h-2" 
                />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
