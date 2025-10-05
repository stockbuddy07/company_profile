import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-border">
      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Section 1: Logo */}
          <div className="flex flex-col gap-2">
            <Image
              src="/images/logos/logo.avif"
              alt="NoBuddy Logo"
              width={160}
              height={160}
              className="h-21 w-fit"
            />
          </div>

          {/* Section 2: NoBuddy */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">NoBuddy</h3>
            <div className="flex flex-col gap-2 font-medium text-base text-primary">
              <Link href="/" className="hover:text-cta transition-colors duration-200">
                Home
              </Link>
              <a href="#reputation" className="hover:text-cta transition-colors duration-200">
                Solution
              </a>
              <a href="#solution" className="hover:text-cta transition-colors duration-200">
                Team
              </a>
              <a href="#products" className="hover:text-cta transition-colors duration-200">
                Projects
              </a>
            </div>
          </div>

          {/* Section 3: Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
              Community
            </h3>
            <div className="flex flex-col gap-2 font-medium text-base text-primary">
              
              <a
                href="https://instagram.com/ayushgajjar.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta transition-colors duration-200"
              >
                Instagram
              </a>
               <a
                href="https://instagram.com/ayushgajjar.exe"
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
