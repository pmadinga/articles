import Link from "next/link";
import styles from "../styles/Site.module.css"

const Siteheader = () =>{
    return(
        <div className={styles.siteheader}>
            <Link href={'/'}>
            <a >
                <h1>Articles</h1>
            </a>

            </Link>
            <Link href={"/create"} passHref >
                <a className={styles.create}>Create a post</a>
            </Link>
        </div>
    )
}
export default Siteheader;