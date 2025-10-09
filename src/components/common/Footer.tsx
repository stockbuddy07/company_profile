import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-border relative">
      <div className="max-w-8xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Section 1: Logo - hidden on large screens */}
          <div className="hidden sm:flex flex-col gap-2">
            <Image
              src="/images/logos/logo.avif"
              alt="NoBuddy Logo"
              width={160}
              height={160}
              className="h-21 w-fit"
            />
          </div>

          {/* Section 2: NoBuddy + Links */}
          <div className="flex flex-col gap-4 relative">
            {/* Mobile logo fixed on right side */}
            <div className="sm:hidden absolute top-0 right-0 h-full flex flex-col justify-start items-center">
              <Image
                src="/images/logos/logo.avif"
                alt="NoBuddy Logo"
                width={80}
                height={80}
                className="h-[240px] w-auto object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide z-10 relative">
              NoBuddy
            </h3>

            <Link
              href="/"
              className="hover:text-cta transition-colors duration-200 font-medium text-primary z-10 relative"
            >
              Home
            </Link>
            <a
              href="#reputation"
              className="hover:text-cta transition-colors duration-200 font-medium text-primary z-10 relative"
            >
              Solution
            </a>
            <a
              href="#solution"
              className="hover:text-cta transition-colors duration-200 font-medium text-primary z-10 relative"
            >
              Team
            </a>
            <a
              href="#products"
              className="hover:text-cta transition-colors duration-200 font-medium text-primary z-10 relative"
            >
              Projects
            </a>
          </div>

          {/* Section 3: Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
              Community
            </h3>
            <div className="flex flex-col gap-2 font-medium text-base text-primary">
              <a
                href="https://www.instagram.com/_nobuddy07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.instagram.com/_nobuddy07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Get-in-Touch
              </a>
            </div>
          </div>

          {/* Section 4: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
              Resources
            </h3>
            <div className="flex flex-col gap-2 font-medium text-base text-primary">
              <a
                href="https://github.com/stockbuddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Terms of service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground font-semibold">©2025 NoBuddy</p>
        </div>
      </div>
    </footer>
  );
}
