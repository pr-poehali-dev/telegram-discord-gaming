import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FriendsSectionProps {
  friends: Array<{
    id: number;
    name: string;
    avatar: string;
    level: number;
    status: 'online' | 'ingame' | 'offline';
    game?: string;
  }>;
  requests: Array<{
    id: number;
    name: string;
    avatar: string;
    level: number;
    mutualFriends: number;
  }>;
}

const FriendsSection = ({ friends, requests }: FriendsSectionProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-success';
      case 'ingame': return 'bg-game-purple';
      case 'offline': return 'bg-muted-foreground';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'В сети';
      case 'ingame': return 'В игре';
      case 'offline': return 'Не в сети';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-bold">
              Друзья ({friends.length})
            </h3>
            <div className="flex gap-2">
              <Input 
                placeholder="Поиск друзей..." 
                className="w-64"
              />
              <Button className="bg-gradient-to-r from-primary to-accent">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Добавить
              </Button>
            </div>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            <Button variant="outline" size="sm">
              Все ({friends.length})
            </Button>
            <Button variant="outline" size="sm">
              В сети ({friends.filter(f => f.status === 'online').length})
            </Button>
            <Button variant="outline" size="sm">
              В игре ({friends.filter(f => f.status === 'ingame').length})
            </Button>
          </div>

          <div className="space-y-3">
            {friends.map(friend => (
              <div
                key={friend.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 group"
              >
                <div className="relative">
                  <Avatar className="w-14 h-14 border-2 border-primary">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                      {friend.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-card`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold group-hover:text-primary transition-colors truncate">
                      {friend.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      Lvl {friend.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 ${getStatusColor(friend.status)} rounded-full`} />
                    <span className="text-muted-foreground">
                      {friend.status === 'ingame' && friend.game 
                        ? `Играет в ${friend.game}` 
                        : getStatusText(friend.status)
                      }
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={friend.status === 'offline'}
                  >
                    <Icon name="MessageSquare" size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={friend.status === 'offline'}
                  >
                    <Icon name="Gamepad2" size={18} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreVertical" size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-bold">
              Запросы ({requests.length})
            </h3>
            <Badge className="bg-secondary text-white animate-pulse">
              {requests.length}
            </Badge>
          </div>

          <div className="space-y-3">
            {requests.map(request => (
              <div
                key={request.id}
                className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                      {request.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold truncate">{request.name}</h4>
                    <div className="text-xs text-muted-foreground">
                      Уровень {request.level}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Icon name="Users" size={12} />
                      {request.mutualFriends} общих друзей
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-accent"
                  >
                    <Icon name="Check" size={14} className="mr-1" />
                    Принять
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                  >
                    <Icon name="X" size={14} className="mr-1" />
                    Отклонить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-heading font-bold mb-4">Рекомендации</h3>
          <div className="space-y-3">
            {[
              { id: 1, name: 'GameKing', avatar: '👑', level: 65, reason: 'Похожие игры' },
              { id: 2, name: 'ProPlayer99', avatar: '⚡', level: 58, reason: 'Общие друзья' },
              { id: 3, name: 'SkillMaster', avatar: '🎯', level: 71, reason: 'Ваш ранг' },
            ].map(suggestion => (
              <div
                key={suggestion.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-all"
              >
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                    {suggestion.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {suggestion.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {suggestion.reason}
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Icon name="UserPlus" size={14} />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Gift" size={32} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Пригласи друга</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Получите бонусы за каждого приглашенного друга!
            </p>
            <Button className="w-full bg-gradient-to-r from-primary to-accent">
              <Icon name="Share2" size={16} className="mr-2" />
              Пригласить
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FriendsSection;
