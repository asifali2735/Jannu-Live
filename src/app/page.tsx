import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import CreatePost from '@/components/features/post/create-post';
import PostCard from '@/components/features/post/post-card';
import AdBanner from '@/components/features/ads/ad-banner';
import { posts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const adBannerImage = PlaceHolderImages.find(img => img.id === 'ad-banner-1');

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto w-full space-y-6">
        <h1 className="text-3xl font-bold font-headline">Home Feed</h1>
        <CreatePost />
        <div className="space-y-4">
          {posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <PostCard post={post} />
              {index === 1 && adBannerImage && <AdBanner adImage={adBannerImage} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
