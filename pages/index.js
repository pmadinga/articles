import { PrismaClient } from "@prisma/client"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Home.module.css'

const prisma = new PrismaClient()

const Home = ({ data }) =>{
  return(
    <>
      <Head>
        <title>Phiwa | Articles</title>
      </Head>
      <div className={`container`}>
        
        {data.map(item => (
            <div className={styles.blog} key={item.id}>
              <h2 className={styles.title}>{item.title}</h2>
              <span className={styles.blog_info}>{item.author}</span>
              <p className={styles.desc}>{`${item.content.substring(0,250)}...`}</p>
              <Link href={`/blog/${item.slug}`}  >
                <a className={styles.read_more}>Read more</a>
              </Link>
            </div>
        ))}
      </div>
    </>
  )
}
export default Home

export async function getServerSideProps(){
  const blogs = await prisma.blog.findMany();

  return {
    props: { data: blogs}
  }
}