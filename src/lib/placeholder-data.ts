import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback to a default image if not found
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'placeholder',
    };
  }
  return image;
};

export type User = {
  id: string;
  name: string;
  username: string;
  avatar: ImagePlaceholder;
};

export const users: User[] = [
  { id: 'user-1', name: 'Alice', username: 'alice_dev', avatar: getImage('user-avatar-1') },
  { id: 'user-2', name: 'Bob', username: 'bob_codes', avatar: getImage('user-avatar-2') },
  { id: 'user-3', name: 'Charlie', username: 'charlie_ux', avatar: getImage('user-avatar-3') },
  { id: 'user-4', name: 'Diana', username: 'diana_pm', avatar: getImage('user-avatar-4') },
];

export const currentUser: User = {
  id: 'current-user',
  name: 'You',
  username: 'you_rock',
  avatar: getImage('current-user-avatar'),
};

export type Post = {
  id: string;
  author: User;
  content: string;
  image?: ImagePlaceholder;
  video?: ImagePlaceholder;
  likes: number;
  secretLikes: number;
  comments: number;
  timestamp: string;
};

export const posts: Post[] = [
  {
    id: 'post-1',
    author: users[0],
    content: 'Just reached the summit! The view is absolutely breathtaking. #hiking #mountains',
    image: getImage('post-image-1'),
    likes: 128,
    secretLikes: 12,
    comments: 23,
    timestamp: '2h ago',
  },
  {
    id: 'post-2',
    author: users[1],
    content: 'Exploring the city lights. There is a special magic to urban nights. #citylife #nightphotography',
    image: getImage('post-image-2'),
    likes: 256,
    secretLikes: 3,
    comments: 45,
    timestamp: '5h ago',
  },
  {
    id: 'post-3',
    author: users[2],
    content: 'Short video from my latest trip!',
    video: getImage('post-video-1'),
    likes: 512,
    secretLikes: 45,
    comments: 102,
    timestamp: '1d ago',
  },
  {
    id: 'post-4',
    author: users[3],
    content: 'Tried out a new recipe today, and it was delicious! Who wants the recipe? #foodie #homecooking',
    image: getImage('post-image-3'),
    likes: 98,
    secretLikes: 1,
    comments: 18,
    timestamp: '2d ago',
  },
];

export type Message = {
  id: string;
  sender: User;
  text: string;
  timestamp: string;
};

export type Conversation = {
  id: string;
  participant: User;
  messages: Message[];
};

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    participant: users[0],
    messages: [
      { id: 'msg-1-1', sender: users[0], text: 'Hey, how is it going?', timestamp: '10:00 AM' },
      { id: 'msg-1-2', sender: currentUser, text: 'Hi Alice! Going great, thanks. How about you?', timestamp: '10:01 AM' },
      { id: 'msg-1-3', sender: users[0], text: 'Doing well! Working on the new social app feature.', timestamp: '10:02 AM' },
    ],
  },
  {
    id: 'conv-2',
    participant: users[1],
    messages: [
      { id: 'msg-2-1', sender: users[1], text: 'Did you see the latest design mockups?', timestamp: 'Yesterday' },
      { id: 'msg-2-2', sender: currentUser, text: 'Yes, they look amazing!', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'conv-3',
    participant: users[2],
    messages: [
      { id: 'msg-3-1', sender: users[2], text: 'Let\'s catch up for that video call tomorrow.', timestamp: '2 days ago' },
    ],
  },
];
