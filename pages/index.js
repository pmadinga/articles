import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home = () =>{
  return(
    <>
      <Head>
        <title>Phiwa | Articles</title>
      </Head>
      <div className={`container`}>
        <div className={styles.blog}>
          <h2 className={styles.title}>Title</h2>
          <span className={styles.blog_info}>10 May 2022 - Author</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto laborum alias quaerat</p>
          <Link href={"#"}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home