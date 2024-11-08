// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (

  <nav class="navbar rounded-box flex w-full gap-2 shadow max-md:flex-col md:items-center">
  <div class="flex w-full items-center justify-between">
    <div class="navbar-start items-center justify-between max-md:w-full">
      <Link class="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="/">
        Barah Valley 
      </Link>
      <div class="md:hidden">
        <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#default-navbar-collapse" aria-controls="default-navbar-collapse" aria-label="Toggle navigation">
          <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
          <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
        </button>
      </div>
    </div>
  </div>
  <div id="default-navbar-collapse" class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full">
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base">
      <li><Link href="/home"> Home </Link></li>
      <li><Link href="/about"> About </Link></li>
      <li><Link href="/tourism"> Tourism </Link></li>
      <li><Link href="/directory"> Directory </Link></li>
      <li><Link href="/events"> Ev </Link></li>
      <li><Link href="/contact"> Contact </Link></li>
      
    </ul>
  </div>
</nav>
);

export default Header;