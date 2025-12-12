import { MainLayout } from '@/components/layout/main-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { conversations, currentUser, users } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { Search, Send, Smile } from 'lucide-react';

export default function ChatPage() {
  const activeConversation = conversations[0];

  return (
    <MainLayout>
      <div className="h-[calc(100vh-8rem)] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Conversation List */}
        <div className="flex flex-col h-full bg-card rounded-lg border">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold font-headline">Chats</h2>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search chats" className="pl-8" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            {conversations.map((convo) => (
              <div
                key={convo.id}
                className={cn(
                  "flex items-center gap-3 p-3 cursor-pointer border-l-4 border-transparent hover:bg-secondary/50",
                  convo.id === activeConversation.id && "bg-secondary/70 border-primary"
                )}
              >
                <Avatar>
                  <AvatarImage src={convo.participant.avatar.imageUrl} data-ai-hint={convo.participant.avatar.imageHint} />
                  <AvatarFallback>{convo.participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold truncate">{convo.participant.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{convo.messages.at(-1)?.text}</p>
                </div>
                <span className="text-xs text-muted-foreground">{convo.messages.at(-1)?.timestamp.split(' ')[0]}</span>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col h-full bg-card rounded-lg border">
          <div className="flex items-center gap-4 p-4 border-b">
            <Avatar>
              <AvatarImage src={activeConversation.participant.avatar.imageUrl} data-ai-hint={activeConversation.participant.avatar.imageHint} />
              <AvatarFallback>{activeConversation.participant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{activeConversation.participant.name}</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-2",
                    message.sender.id === currentUser.id ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender.id !== currentUser.id && (
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={message.sender.avatar.imageUrl} data-ai-hint={message.sender.avatar.imageHint} />
                      <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn(
                      "max-w-xs lg:max-w-md p-3 rounded-lg",
                      message.sender.id === currentUser.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    )}>
                    <p className="text-sm">{message.text}</p>
                    <p className={cn(
                        "text-xs mt-1 text-right",
                         message.sender.id === currentUser.id ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="relative">
              <Input placeholder="Type a message..." className="pr-20" />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-8 h-8 mr-2">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
