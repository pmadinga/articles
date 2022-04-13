import Link from "next/link";
import * as styles from "../styles/Site.module.css"

const Siteheader = () =>{
    return(
        <div className={styles.siteheader}>
            <h1>Articles</h1>
            <Link href={"/create"} passHref>
                <a>Create a post</a>
            </Link>
        </div>
    )
}
export default Siteheader;