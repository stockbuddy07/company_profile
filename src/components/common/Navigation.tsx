import Link from 'next/link';

const navigationItems = [
  { name: 'Reputation', href: '#reputation' },
  { name: 'Solution', href: '#solution' },
  { name: 'Products', href: '#products' },
  { name: 'Docs', href: 'https://docs.myzscore.ai/' },
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
