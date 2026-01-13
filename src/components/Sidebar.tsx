import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  stats: {
    level: number;
  };
}

const Sidebar = ({ navItems, activeSection, setActiveSection, stats }: SidebarProps) => {
  return (
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
  );
};

export default Sidebar;
