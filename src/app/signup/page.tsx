'use client';

import { useState } from 'react';
import { useAuth, initiateEmailSignUp } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const auth = useAuth();
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }
    initiateEmailSignUp(auth, email, password);
    // On successful signup, Firebase's onAuthStateChanged will trigger a
    // state change in the provider, and you can handle redirects there
    // For now, we'll just push to the home page.
    router.push('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div 
        className="absolute inset-0 -z-10"
        style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)/0.2), hsl(var(--chart-2)/0.2), hsl(var(--chart-3)/0.2))',
            filter: 'blur(40px)',
            opacity: 0.4
        }}
       />
      <div className="w-full max-w-sm p-8 space-y-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-2xl shadow-primary/10">
        <div className="text-center">
          <h1 className="text-3xl font-headline text-primary" style={{ textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))' }}>Sign Up</h1>
          <p className="text-muted-foreground mt-2">Create your account to join the community</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-muted-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 bg-secondary/50 border-primary/20 focus:border-primary focus:shadow-lg focus:shadow-primary/50"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 bg-secondary/50 border-primary/20 focus:border-primary focus:shadow-lg focus:shadow-primary/50"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/30">
            Sign Up
          </Button>
        </form>
        {message && <p className="text-center text-destructive">{message}</p>}
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="underline text-primary hover:text-primary/80">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
