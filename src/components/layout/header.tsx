import Link from "next/link";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-primary">
          <Image
            src="/sislogo.jpg"
            alt="株式会社SIS"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base">ERM成熟度診断</span>
            <span className="text-[10px] text-muted-foreground">
              Powered by 株式会社SIS
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            ホーム
          </Link>
          <Link
            href="/diagnosis"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            診断を受ける
          </Link>
          <a
            href="https://s-i-s.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline-flex items-center gap-1"
          >
            SIS HP
            <ExternalLink className="h-3 w-3" />
          </a>
          <Button asChild size="sm" variant="outline" className="gap-1">
            <a href="mailto:info@s-i-s.co.jp">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">メール相談</span>
              <span className="sm:hidden">メール</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
