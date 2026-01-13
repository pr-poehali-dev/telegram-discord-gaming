import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/HomeSection';
import ChatsSection from '@/components/ChatsSection';
import ServersSection from '@/components/ServersSection';
import GamesSection from '@/components/GamesSection';
import ProfileSection from '@/components/ProfileSection';
import AchievementsSection from '@/components/AchievementsSection';
import ShopSection from '@/components/ShopSection';
import RatingSection from '@/components/RatingSection';
import FriendsSection from '@/components/FriendsSection';

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

  const games = [
    { id: 1, name: 'Battle Royale', icon: '🎮', category: 'Экшен', players: 12543, rating: 4.8, color: 'bg-game-purple' },
    { id: 2, name: 'Speed Racing', icon: '🏎️', category: 'Гонки', players: 8932, rating: 4.6, color: 'bg-game-orange' },
    { id: 3, name: 'Strategy War', icon: '⚔️', category: 'Стратегия', players: 6721, rating: 4.9, color: 'bg-game-blue' },
    { id: 4, name: 'Party Games', icon: '🎉', category: 'Казуальные', players: 15234, rating: 4.7, color: 'bg-success' },
    { id: 5, name: 'Space Shooter', icon: '🚀', category: 'Экшен', players: 9876, rating: 4.5, color: 'bg-game-purple' },
    { id: 6, name: 'Puzzle Master', icon: '🧩', category: 'Головоломки', players: 7654, rating: 4.4, color: 'bg-accent' },
  ];

  const profile = {
    username: 'ProGamer',
    avatar: 'PG',
    level: stats.level,
    xp: stats.xp,
    maxXp: stats.maxXp,
    rank: stats.rank,
    points: stats.points,
    wins: stats.wins,
    matches: stats.matches,
    winRate: Math.round((stats.wins / stats.matches) * 100)
  };

  const inventory = [
    { id: 1, name: 'Огненный меч', icon: '🔥', rarity: 'legendary', equipped: true },
    { id: 2, name: 'Щит героя', icon: '🛡️', rarity: 'epic', equipped: true },
    { id: 3, name: 'Шлем витязя', icon: '⛑️', rarity: 'rare', equipped: false },
    { id: 4, name: 'Крылья феникса', icon: '🦅', rarity: 'legendary', equipped: false },
    { id: 5, name: 'Боевые перчатки', icon: '🥊', rarity: 'epic', equipped: true },
    { id: 6, name: 'Амулет силы', icon: '💎', rarity: 'rare', equipped: false },
    { id: 7, name: 'Магический посох', icon: '🪄', rarity: 'epic', equipped: false },
    { id: 8, name: 'Кольцо удачи', icon: '💍', rarity: 'common', equipped: true },
  ];

  const profileStats = [
    { label: 'Общие победы', value: stats.wins, icon: 'Trophy' },
    { label: 'Винрейт', value: `${Math.round((stats.wins / stats.matches) * 100)}%`, icon: 'Percent' },
    { label: 'Очки рейтинга', value: stats.points, icon: 'Star' },
    { label: 'Уровень', value: stats.level, icon: 'TrendingUp' },
  ];

  const fullAchievements = [
    { id: 1, name: 'Первая победа', description: 'Выиграйте свой первый матч', icon: '🎯', unlocked: true, rarity: 'common', progress: 1, maxProgress: 1, points: 10 },
    { id: 2, name: 'Турнирный боец', description: 'Примите участие в 10 турнирах', icon: '⚔️', unlocked: true, rarity: 'rare', progress: 10, maxProgress: 10, points: 50 },
    { id: 3, name: 'Легенда арены', description: 'Достигните топ-1 в рейтинге', icon: '👑', unlocked: false, rarity: 'legendary', progress: 4, maxProgress: 1, points: 200 },
    { id: 4, name: 'Мастер скорости', description: 'Выиграйте 50 быстрых матчей', icon: '⚡', unlocked: true, rarity: 'epic', progress: 50, maxProgress: 50, points: 100 },
    { id: 5, name: 'Коллекционер', description: 'Соберите 100 предметов', icon: '🎒', unlocked: false, rarity: 'rare', progress: 67, maxProgress: 100, points: 75 },
    { id: 6, name: 'Социальный игрок', description: 'Добавьте 50 друзей', icon: '👥', unlocked: false, rarity: 'common', progress: 32, maxProgress: 50, points: 25 },
    { id: 7, name: 'Богач', description: 'Накопите 100,000 монет', icon: '💰', unlocked: false, rarity: 'epic', progress: 45780, maxProgress: 100000, points: 150 },
    { id: 8, name: 'Непобедимый', description: 'Выиграйте 10 матчей подряд', icon: '🏆', unlocked: false, rarity: 'legendary', progress: 6, maxProgress: 10, points: 250 },
    { id: 9, name: 'Командный игрок', description: 'Сыграйте 100 командных матчей', icon: '🤝', unlocked: true, rarity: 'rare', progress: 100, maxProgress: 100, points: 60 },
  ];

  const shopItems = [
    { id: 1, name: 'Скин "Дракон"', icon: '🐉', price: 2500, category: 'Скины', rarity: 'legendary', owned: false, discount: 20 },
    { id: 2, name: 'Эмоция "Победа"', icon: '✌️', price: 500, category: 'Эмоции', rarity: 'common', owned: true },
    { id: 3, name: 'Аватар "Феникс"', icon: '🦅', price: 1500, category: 'Аватары', rarity: 'epic', owned: false },
    { id: 4, name: 'Эффект "Молния"', icon: '⚡', price: 1200, category: 'Эффекты', rarity: 'rare', owned: false, discount: 15 },
    { id: 5, name: 'Скин "Киберниндзя"', icon: '🥷', price: 3000, category: 'Скины', rarity: 'legendary', owned: false },
    { id: 6, name: 'Эмоция "Танец"', icon: '💃', price: 800, category: 'Эмоции', rarity: 'rare', owned: false },
    { id: 7, name: 'Аватар "Космонавт"', icon: '👨\u200d🚀', price: 1800, category: 'Аватары', rarity: 'epic', owned: false, discount: 25 },
    { id: 8, name: 'Эффект "Огонь"', icon: '🔥', price: 1000, category: 'Эффекты', rarity: 'rare', owned: true },
  ];

  const leaderboard = [
    { rank: 1, name: 'ProGamer2024', level: 89, points: 9847, avatar: '🏆', change: 12, wins: 234, matches: 289 },
    { rank: 2, name: 'CyberNinja', level: 82, points: 8923, avatar: '⚡', change: -3, wins: 198, matches: 256 },
    { rank: 3, name: 'GameMaster', level: 78, points: 8401, avatar: '🎮', change: 5, wins: 187, matches: 243 },
    { rank: 4, name: 'SpeedRunner', level: 75, points: 7856, avatar: '🚀', change: 8, wins: 176, matches: 231 },
    { rank: 5, name: 'LegendPlayer', level: 73, points: 7234, avatar: '💎', change: -2, wins: 165, matches: 219 },
    { rank: 6, name: 'SkillMaster', level: 71, points: 6892, avatar: '🎯', change: 15, wins: 154, matches: 207 },
    { rank: 7, name: 'ProGamer', level: 47, points: 2847, avatar: 'PG', change: 24, wins: stats.wins, matches: stats.matches },
    { rank: 8, name: 'TopPlayer', level: 65, points: 5321, avatar: '⭐', change: -5, wins: 142, matches: 195 },
  ];

  const friends = [
    { id: 1, name: 'CyberNinja', avatar: '⚡', level: 82, status: 'online' as const },
    { id: 2, name: 'GameMaster', avatar: '🎮', level: 78, status: 'ingame' as const, game: 'Battle Royale' },
    { id: 3, name: 'SpeedRunner', avatar: '🚀', level: 75, status: 'online' as const },
    { id: 4, name: 'LegendPlayer', avatar: '💎', level: 73, status: 'offline' as const },
    { id: 5, name: 'SkillMaster', avatar: '🎯', level: 71, status: 'ingame' as const, game: 'Speed Racing' },
    { id: 6, name: 'ProGamer2024', avatar: '🏆', level: 89, status: 'online' as const },
  ];

  const friendRequests = [
    { id: 1, name: 'NewPlayer123', avatar: '🎮', level: 42, mutualFriends: 3 },
    { id: 2, name: 'TopGamer', avatar: '⚡', level: 58, mutualFriends: 5 },
    { id: 3, name: 'ProSkill', avatar: '🎯', level: 51, mutualFriends: 2 },
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

            {activeSection === 'games' && (
              <GamesSection games={games} />
            )}

            {activeSection === 'profile' && (
              <ProfileSection
                profile={profile}
                inventory={inventory}
                stats={profileStats}
              />
            )}

            {activeSection === 'achievements' && (
              <AchievementsSection achievements={fullAchievements} />
            )}

            {activeSection === 'shop' && (
              <ShopSection
                balance={12500}
                items={shopItems}
              />
            )}

            {activeSection === 'rating' && (
              <RatingSection
                currentUser={{
                  rank: 7,
                  name: 'ProGamer',
                  level: stats.level,
                  points: stats.points,
                  avatar: 'PG',
                  change: 24
                }}
                leaderboard={leaderboard}
              />
            )}

            {activeSection === 'friends' && (
              <FriendsSection
                friends={friends}
                requests={friendRequests}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;