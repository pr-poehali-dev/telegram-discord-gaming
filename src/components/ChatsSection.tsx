import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChatsSectionProps {
  chatList: Array<{
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    online: boolean;
  }>;
  messages: Array<{
    id: number;
    sender: string;
    avatar: string;
    text: string;
    time: string;
    isMine: boolean;
  }>;
  selectedChat: number;
  setSelectedChat: (id: number) => void;
  messageInput: string;
  setMessageInput: (value: string) => void;
  handleSendMessage: () => void;
}

const ChatsSection = ({
  chatList,
  messages,
  selectedChat,
  setSelectedChat,
  messageInput,
  setMessageInput,
  handleSendMessage
}: ChatsSectionProps) => {
  return (
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
  );
};

export default ChatsSection;
