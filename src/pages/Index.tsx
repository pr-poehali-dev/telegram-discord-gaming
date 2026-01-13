import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const stats = {
    level: 47,
    xp: 18500,
    maxXp: 25000,
    rank: 'Diamond',
    points: 2847,
    wins: 156,
    matches: 234
  };

  const tournaments = [
    { id: 1, name: 'Cyber Championship', players: 128, prize: '50,000₽', status: 'active', type: 'ranked' },
    { id: 2, name: 'Speed Masters', players: 64, prize: '25,000₽', status: 'starting', type: 'blitz' },
    { id: 3, name: 'Grand Finals', players: 256, prize: '100,000₽', status: 'upcoming', type: 'championship' },
  ];

  const topPlayers = [
    { rank: 1, name: 'ProGamer2024', level: 89, points: 9847, avatar: '🏆' },
    { rank: 2, name: 'CyberNinja', level: 82, points: 8923, avatar: '⚡' },
    { rank: 3, name: 'GameMaster', level: 78, points: 8401, avatar: '🎮' },
    { rank: 4, name: 'SpeedRunner', level: 75, points: 7856, avatar: '🚀' },
    { rank: 5, name: 'LegendPlayer', level: 73, points: 7234, avatar: '💎' },
  ];

  const achievements = [
    { id: 1, name: 'Первая победа', icon: '🎯', unlocked: true, rarity: 'common' },
    { id: 2, name: 'Турнирный боец', icon: '⚔️', unlocked: true, rarity: 'rare' },
    { id: 3, name: 'Легенда арены', icon: '👑', unlocked: false, rarity: 'legendary' },
    { id: 4, name: 'Мастер скорости', icon: '⚡', unlocked: true, rarity: 'epic' },
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'chats', label: 'Чаты', icon: 'MessageSquare', badge: 5 },
    { id: 'servers', label: 'Серверы', icon: 'Users' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'achievements', label: 'Достижения', icon: 'Award', badge: 2 },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingBag' },
    { id: 'rating', label: 'Рейтинг', icon: 'Trophy' },
    { id: 'friends', label: 'Друзья', icon: 'UserPlus', badge: 3 },
  ];

  const chatList = [
    { id: 1, name: 'Team Alpha', avatar: '🎮', lastMessage: 'Собираемся на турнир?', time: '2 мин', unread: 3, online: true },
    { id: 2, name: 'CyberNinja', avatar: '⚡', lastMessage: 'GG, отличная игра!', time: '15 мин', unread: 0, online: true },
    { id: 3, name: 'Pro Squad', avatar: '🏆', lastMessage: 'Когда следующий матч?', time: '1 ч', unread: 2, online: false },
    { id: 4, name: 'GameMaster', avatar: '🎯', lastMessage: 'Добавил новые скины', time: '3 ч', unread: 0, online: false },
    { id: 5, name: 'Tournament Chat', avatar: '👑', lastMessage: 'Регистрация открыта!', time: 'вчера', unread: 1, online: true },
  ];

  const messages = [
    { id: 1, sender: 'CyberNinja', avatar: '⚡', text: 'Привет! Готов к новому турниру?', time: '14:32', isMine: false },
    { id: 2, sender: 'Я', avatar: 'PG', text: 'Да, уже разминаюсь! Когда начало?', time: '14:33', isMine: true },
    { id: 3, sender: 'CyberNinja', avatar: '⚡', text: 'Через 30 минут. Собираем команду из 5 человек', time: '14:35', isMine: false },
    { id: 4, sender: 'Я', avatar: 'PG', text: 'Отлично! Я позову еще пару игроков', time: '14:36', isMine: true },
    { id: 5, sender: 'CyberNinja', avatar: '⚡', text: 'Кстати, призовой фонд 100к! 💰', time: '14:37', isMine: false },
    { id: 6, sender: 'Я', avatar: 'PG', text: 'Вау! Тогда точно не пропустим 🔥', time: '14:38', isMine: true },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  const servers = [
    { 
      id: 1, 
      name: 'Cyber Arena EU', 
      game: 'Battle Royale', 
      players: 248, 
      maxPlayers: 500, 
      region: 'EU', 
      ping: 12,
      difficulty: 'Pro',
      icon: '🎮',
      color: 'bg-game-purple'
    },
    { 
      id: 2, 
      name: 'Speed Rush US', 
      game: 'Racing', 
      players: 156, 
      maxPlayers: 200, 
      region: 'US', 
      ping: 45,
      difficulty: 'Medium',
      icon: '🏎️',
      color: 'bg-game-orange'
    },
    { 
      id: 3, 
      name: 'Asia Masters', 
      game: 'Strategy', 
      players: 89, 
      maxPlayers: 150, 
      region: 'AS', 
      ping: 78,
      difficulty: 'Hard',
      icon: '⚔️',
      color: 'bg-game-blue'
    },
    { 
      id: 4, 
      name: 'Casual RU', 
      game: 'Party Games', 
      players: 342, 
      maxPlayers: 400, 
      region: 'RU', 
      ping: 8,
      difficulty: 'Easy',
      icon: '🎉',
      color: 'bg-success'
    },
  ];

  const activeLobby = [
    { id: 1, username: 'ProGamer', level: 47, role: 'leader', avatar: 'PG', ready: true },
    { id: 2, username: 'CyberNinja', level: 82, role: 'player', avatar: '⚡', ready: true },
    { id: 3, username: 'GameMaster', level: 78, role: 'player', avatar: '🎮', ready: false },
    { id: 4, username: 'SpeedRunner', level: 75, role: 'player', avatar: '🚀', ready: true },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-game-orange';
      case 'epic': return 'bg-game-purple';
      case 'rare': return 'bg-game-blue';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <div className="flex">
        <aside className="w-20 lg:w-72 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0">
          <div className="p-4 lg:p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="hidden lg:block text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GameChat
              </h1>
            </div>
          </div>

          <nav className="flex-1 p-2 lg:p-4 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 lg:px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={24} />
                <span className="hidden lg:block font-medium">{item.label}</span>
                {item.badge && (
                  <Badge className="hidden lg:flex ml-auto bg-secondary text-secondary-foreground animate-pulse-glow">
                    {item.badge}
                  </Badge>
                )}
                {item.badge && (
                  <div className="lg:hidden absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold animate-pulse-glow">
                    {item.badge}
                  </div>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-border hidden lg:block">
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                  PG
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">ProGamer</div>
                <div className="text-xs text-muted-foreground">Level {stats.level}</div>
              </div>
              <Icon name="Settings" size={18} className="text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>
        </aside>

        <main className="flex-1 ml-20 lg:ml-72">
          <header className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-lg bg-opacity-90">
            <div className="px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold">
                  {navItems.find(item => item.id === activeSection)?.label}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Добро пожаловать в турнирную арену
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="Bell" size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-xs flex items-center justify-center text-white animate-pulse">
                    3
                  </span>
                </Button>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hidden lg:flex">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать турнир
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {activeSection === 'chats' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
                <Card className="lg:col-span-4 p-0 flex flex-col overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <Input 
                      placeholder="Поиск чатов..." 
                      className="bg-muted border-0"
                    />
                  </div>
                  <ScrollArea className="flex-1">
                    <div className="p-2">
                      {chatList.map(chat => (
                        <button
                          key={chat.id}
                          onClick={() => setSelectedChat(chat.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 mb-1 ${
                            selectedChat === chat.id 
                              ? 'bg-primary/20 border border-primary' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          <div className="relative">
                            <div className="text-3xl">{chat.avatar}</div>
                            {chat.online && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-card" />
                            )}
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm truncate">{chat.name}</span>
                              <span className="text-xs text-muted-foreground ml-2">{chat.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                          </div>
                          {chat.unread > 0 && (
                            <Badge className="bg-secondary text-white animate-pulse-glow">
                              {chat.unread}
                            </Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>

                <Card className="lg:col-span-8 p-0 flex flex-col overflow-hidden">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">
                        {chatList.find(c => c.id === selectedChat)?.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {chatList.find(c => c.id === selectedChat)?.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {chatList.find(c => c.id === selectedChat)?.online ? 'В сети' : 'Не в сети'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Phone" size={20} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Video" size={20} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreVertical" size={20} />
                      </Button>
                    </div>
                  </div>

                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map(msg => (
                        <div
                          key={msg.id}
                          className={`flex gap-3 ${msg.isMine ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className={msg.isMine ? 'bg-primary text-white' : 'bg-muted'}>
                              {msg.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`flex flex-col ${msg.isMine ? 'items-end' : 'items-start'} max-w-[70%]`}>
                            <div className={`px-4 py-2 rounded-2xl ${
                              msg.isMine 
                                ? 'bg-gradient-to-br from-primary to-accent text-white' 
                                : 'bg-muted'
                            }`}>
                              <p className="text-sm">{msg.text}</p>
                            </div>
                            <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Paperclip" size={20} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Image" size={20} />
                      </Button>
                      <Input
                        placeholder="Написать сообщение..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-primary to-accent"
                      >
                        <Icon name="Send" size={20} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeSection === 'servers' && (
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
            )}

            {activeSection === 'home' && (
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
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;