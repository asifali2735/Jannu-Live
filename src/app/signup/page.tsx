'use client';

import { useState } from 'react';
import { useAuth, initiateEmailSignUp } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.45H18.02C17.74 15.93 16.96 17.24 15.81 18.09V21.09H19.93C21.66 19.33 22.56 16.99 22.56 14.25V12.25Z" fill="#4285F4"/>
    <path d="M12 23C15.24 23 17.95 21.92 19.93 20.09L15.81 18.09C14.79 18.77 13.53 19.15 12 19.15C9.09 19.15 6.64 17.23 5.61 14.79H1.48V17.79C3.46 21.04 7.39 23 12 23Z" fill="#34A853"/>
    <path d="M5.61 14.79C5.38 14.11 5.25 13.38 5.25 12.6C5.25 11.82 5.38 11.09 5.61 10.41V7.41H1.48C0.54 9.29 0 11.23 0 13.4C0 15.57 0.54 17.51 1.48 19.39L5.61 14.79V14.79Z" fill="#FBBC05"/>
    <path d="M12 5.05C13.68 5.05 15.04 5.65 16.03 6.56L20.04 2.54C17.95 0.96 15.24 0 12 0C7.39 0 3.46 2.96 1.48 6.21L5.61 9.21C6.64 6.77 9.09 5.05 12 5.05Z" fill="#EA4335"/>
  </svg>
);

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
    router.push('/');
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error: any) {
      setMessage(error.message);
    }
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
      <div className="w-full max-w-sm p-8 space-y-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-2xl shadow-primary/10">
        <div className="text-center">
          <h1 className="text-3xl font-headline text-primary" style={{ textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))' }}>Sign Up</h1>
          <p className="text-muted-foreground mt-2">Create your account to join the community</p>
        </div>
        
        <div className="space-y-4">
          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
              <GoogleIcon />
              <span className="ml-2">Sign up with Google</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
            </div>
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
              Sign Up with Email
            </Button>
          </form>
        </div>

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

    