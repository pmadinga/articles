import Link from "next/link";
import * as styles from "../styles/Site.module.css"

const Siteheader = () =>{
    return(
        <div className={styles.siteheader}>
            <h1>Articles</h1>
            <Link href={"./create"}>
                <a>Create a Post</a>
            </Link>
        </div>
    )
}
export default Siteheader;