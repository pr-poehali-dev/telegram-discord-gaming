import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ServersSectionProps {
  servers: Array<{
    id: number;
    name: string;
    game: string;
    players: number;
    maxPlayers: number;
    region: string;
    ping: number;
    difficulty: string;
    icon: string;
    color: string;
  }>;
  activeLobby: Array<{
    id: number;
    username: string;
    level: number;
    role: string;
    avatar: string;
    ready: boolean;
  }>;
}

const ServersSection = ({ servers, activeLobby }: ServersSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-bold">Доступные серверы</h3>
            <Button className="bg-gradient-to-r from-primary to-accent">
              <Icon name="Plus" size={20} className="mr-2" />
              Создать сервер
            </Button>
          </div>
          <div className="space-y-4">
            {servers.map(server => (
              <div
                key={server.id}
                className="p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 cursor-pointer group border border-border hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${server.color}`}>
                    {server.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {server.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{server.game}</p>
                      </div>
                      <Badge className="bg-primary text-white">
                        {server.region}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        <span className="font-semibold">{server.players}</span>/{server.maxPlayers}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Wifi" size={16} className={server.ping < 30 ? 'text-success' : 'text-warning'} />
                        {server.ping}ms
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {server.difficulty}
                      </Badge>
                    </div>

                    <Progress value={(server.players / server.maxPlayers) * 100} className="h-2 mb-3" />
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-primary to-accent flex-1">
                        <Icon name="LogIn" size={16} className="mr-2" />
                        Войти
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Info" size={16} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-bold">Активное лобби</h3>
          <Badge className="bg-success text-white animate-pulse">
            Ожидание
          </Badge>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Игроки</span>
            <span className="font-bold">{activeLobby.length}/5</span>
          </div>
          <Progress value={(activeLobby.length / 5) * 100} className="h-3" />
        </div>

        <div className="space-y-3 mb-6">
          {activeLobby.map(player => (
            <div
              key={player.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 transition-all hover:bg-muted"
            >
              <Avatar className="border-2 border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {player.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm truncate">{player.username}</span>
                  {player.role === 'leader' && (
                    <Icon name="Crown" size={14} className="text-game-orange" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground">Level {player.level}</div>
              </div>
              <div className="flex items-center gap-2">
                {player.ready ? (
                  <Badge className="bg-success text-white">
                    <Icon name="Check" size={12} className="mr-1" />
                    Готов
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-muted-foreground">
                    Ожидание
                  </Badge>
                )}
              </div>
            </div>
          ))}

          {[...Array(5 - activeLobby.length)].map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-border"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Icon name="UserPlus" size={20} className="text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Ожидание игрока...</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-primary to-accent" size="lg">
            <Icon name="Check" size={20} className="mr-2" />
            Я готов!
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            <Icon name="UserPlus" size={20} className="mr-2" />
            Пригласить друга
          </Button>
          <Button variant="outline" className="w-full text-destructive hover:text-destructive">
            <Icon name="LogOut" size={20} className="mr-2" />
            Покинуть лобби
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ServersSection;
