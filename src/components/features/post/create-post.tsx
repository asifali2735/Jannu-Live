'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Video, Send } from 'lucide-react';
import { currentUser } from '@/lib/placeholder-data';

export default function CreatePost() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar className="hidden sm:block">
            <AvatarImage src={currentUser.avatar.imageUrl} alt={currentUser.name} data-ai-hint={currentUser.avatar.imageHint} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="w-full space-y-2">
            <Textarea
              placeholder="What's on your mind?"
              className="bg-background border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
              rows={3}
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <span className="sr-only">Add image</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5 text-destructive" />
                  <span className="sr-only">Add video</span>
                </Button>
              </div>
              <Button className="bg-accent hover:bg-accent/90">
                <Send className="mr-2 h-4 w-4" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
