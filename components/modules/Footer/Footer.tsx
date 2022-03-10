import * as React from "react";
import styles from "./Footer.module.scss";


function Footer() {
    return (
      
        <div className={styles.Footer}>
            <ul>
                <li><a href="/">Top</a></li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="/shop/">Shop</a></li>
            </ul>
            <div className="copyright">Fernando Blog 2022</div>
        </div>
  
      
    )
  }
export { Footer };
