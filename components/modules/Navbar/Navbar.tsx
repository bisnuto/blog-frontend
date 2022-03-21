import * as React from "react";
import Link from 'next/link'
import styles from "./Navbar.module.scss";


function Navbar() {
    return (
      
        <div className={styles.Navbar}>
            <ul>
                <li><Link href="/"><a>Top</a></Link></li>
                <li><Link href="/blog/"><a>Blog</a></Link></li>
                <li><Link href="/shop/"><a>Shop</a></Link></li>
            </ul>
        </div>
  
      
    )
  }
export { Navbar };
