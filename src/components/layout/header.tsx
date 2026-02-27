import Link from "next/link";
import { Shield } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-bold text-lg">ERM診断</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ホーム
          </Link>
          <Link
            href="/diagnosis"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            診断を受ける
          </Link>
        </nav>
      </div>
    </header>
  );
}
