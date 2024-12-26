'use client';

import cn from 'classnames';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: Props) {
  const pathname = usePathname();
  const endpoint = '/' + pathname.split('/').pop();

  const isActive = endpoint === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex items-center justify-center hover:text-yellow-200 ${className}`,
        { 'text-yellow-300': isActive },
      )}
    >
      {children}
    </Link>
  );
}
