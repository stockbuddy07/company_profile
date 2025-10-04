import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-border">
      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Logo and Name */}
          <div className="flex flex-col gap-1">
            <Image
              src="/images/logos/logo.avif"
              alt="Zeru Logo"
              width={60}
              height={60}
              className="h-12 w-fit"
            />
            <p className="text-sm text-secondary font-medium">©2025 ZERU</p>
          </div>

          {/* Section 2: Zeru */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-secondary uppercase tracking-wide">Zeru</h3>
            <div className="flex flex-col gap-1 font-medium text-base text-primary">
              <a href="#reputation" className="hover:text-cta transition-colors duration-200">
                Reputation
              </a>
              <a href="#solution" className="hover:text-cta transition-colors duration-200">
                Solution
              </a>
              <a href="#products" className="hover:text-cta transition-colors duration-200">
                Products
              </a>
            </div>
          </div>

          {/* Section 3: Community */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-secondary uppercase tracking-wide">
              Community
            </h3>
            <div className="flex flex-col gap-1 font-medium text-base text-primary">
              <a
                href="https://discord.com/invite/XkYjDGVwJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Discord
              </a>
              <a
                href="https://x.com/zerufinance"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="https://t.me/zerufinancediscussions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Telegram
              </a>
              <a
                href="https://blog.zeru.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Section 4: Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium text-secondary uppercase tracking-wide">
              Resources
            </h3>
            <div className="flex flex-col gap-1 font-medium text-base text-primary">
              <a
                href="https://docs.myzscore.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Docs
              </a>
              <a
                href="https://github.com/zerufinance/brand-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Brand kit
              </a>
              <a
                href="https://terms.zeru.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
