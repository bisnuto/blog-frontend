
import * as React from "react";
import styles from "./Navbar.module.scss";


function Navbar() {
    return (
      
        <div className={styles.Navbar}>
            <ul>
                <li><a href="/">Top</a></li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="/shop/">Shop</a></li>
            </ul>
        </div>
  
      
    )
  }
export { Navbar };
