import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      blog.johncs.com:
      <ul>
        <li><Link href="/blog">Posts</Link></li>
        <li><Link href="/mini-projects">Mini Projects</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
