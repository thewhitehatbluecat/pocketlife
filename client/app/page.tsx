"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-wide text-foreground">
            Pocket<span className="text-primary font-[300]">Life</span>
          </h1>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
