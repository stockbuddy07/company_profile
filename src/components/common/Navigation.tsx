import Link from 'next/link';

export const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Solution', href: '#reputation' },
  { name: 'Team', href: '#solution' },
  { name: 'Projects', href: '#products' },
  { name: 'Contact', href: '#get-in-touch' },
];

  
export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-7">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target={item.name !== 'Docs' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-primary hover:text-cta font-medium transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
