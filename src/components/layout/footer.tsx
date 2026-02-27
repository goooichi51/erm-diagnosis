import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>ERM成熟度診断</span>
          </div>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
