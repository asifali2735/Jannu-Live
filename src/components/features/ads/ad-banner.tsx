import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type AdBannerProps = {
  adImage: ImagePlaceholder;
};

export default function AdBanner({ adImage }: AdBannerProps) {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="p-6 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Advertisement</p>
            <h3 className="text-xl font-headline font-bold mt-2">Your Next Favorite Gadget</h3>
            <p className="text-muted-foreground mt-2 text-sm">Discover the latest in tech. Shop now for exclusive deals!</p>
            <Button size="sm" className="mt-4 bg-accent hover:bg-accent/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative w-full sm:w-1/3 h-40 sm:h-auto sm:self-stretch">
            <Image
              src={adImage.imageUrl}
              alt={adImage.description}
              fill
              className="object-cover"
              data-ai-hint={adImage.imageHint}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
