import { Send } from 'lucide-react';

// Custom Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        className="text-cta hover:text-white bg-cta/10 hover:bg-cta transition-colors duration-200 rounded-full p-1.5 flex items-center justify-center"
        href="https://t.me/zerufinancediscussions"
        target="_blank"
        aria-label="Telegram"
      >
        <Send className="w-5 h-5" />
      </a>
      <a
        className="text-cta hover:text-white bg-cta/10 hover:bg-cta transition-colors duration-200 rounded-full p-1.5 flex items-center justify-center"
        href="https://x.com/zerufinance"
        target="_blank"
        aria-label="X (formerly Twitter)"
      >
        <XIcon className="w-5 h-5" />
      </a>
      {/* <a
        className="text-cta hover:text-cta/90 transition-colors duration-200 rounded-full p-1.5 bg-purple-50 flex items-center justify-center"
        href="https://discord.com/invite/XkYjDGVwJQ"
        target="_blank"
        aria-label="Discord"
      >
        <MessageCircle className="w-5 h-5" />
      </a> */}
    </div>
  );
}
