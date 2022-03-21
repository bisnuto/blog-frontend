import * as React from "react";
import Link from 'next/link'
import styles from "./Footer.module.scss";


function Footer() {
    return (
      
        <div className={styles.Footer}>
            <ul>
                <li><Link href="/"><a>Top</a></Link></li>
                <li><Link href="/blog/"><a>Blog</a></Link></li>
                <li><Link href="/shop/"><a>Shop</a></Link></li>
            </ul>
            <div className="copyright">Fernando Blog 2022</div>
        </div>
  
      
    )
  }
export { Footer };
