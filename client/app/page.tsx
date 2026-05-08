"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [dark, setDark] = useState(false);

  function validateEmail(value: string) {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(
      valid || value === "" ? "" : "Please enter a valid email address.",
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={`min-h-screen flex items-center justify-center bg-background px-4 relative${dark ? " dark" : ""}`}>
      <button
        type="button"
        onClick={() => setDark((v) => !v)}
        className="absolute top-4 right-4 p-2 rounded-full border border-border text-foreground hover:bg-accent transition-colors"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </button>
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              aria-invalid={!!emailError}
              required
            />
            {emailError && (
              <p className="text-xs text-primary">{emailError}</p>
            )}
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
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                className="pr-9"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon size={15} />
                ) : (
                  <EyeIcon size={15} />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
