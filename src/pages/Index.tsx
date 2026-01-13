import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/HomeSection';
import ChatsSection from '@/components/ChatsSection';
import ServersSection from '@/components/ServersSection';

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
        <Sidebar 
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          stats={stats}
        />

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
              <ChatsSection
                chatList={chatList}
                messages={messages}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                handleSendMessage={handleSendMessage}
              />
            )}

            {activeSection === 'servers' && (
              <ServersSection
                servers={servers}
                activeLobby={activeLobby}
              />
            )}

            {activeSection === 'home' && (
              <HomeSection
                stats={stats}
                tournaments={tournaments}
                achievements={achievements}
                topPlayers={topPlayers}
                getRarityColor={getRarityColor}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
