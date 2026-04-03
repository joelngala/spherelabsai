import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-accent-light" />
          </div>
          <span className="font-bold tracking-tight">
            Sphere<span className="text-accent-light">Labs</span>
          </span>
        </div>

        <p className="text-sm text-muted">
          Built in Tampa Bay, for Tampa Bay businesses.
        </p>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} SphereLabs AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
