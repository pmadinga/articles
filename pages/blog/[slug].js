import { PrismaClient} from '@prisma/client';
import Head from 'next/head';
import styles from '../../styles/Blog.module.css';

const prisma = new PrismaClient
const Blog = ({ blog }) =>{
    return (
        <>
            <Head>
                <title>{blog.title.substring(0, 15)}...</title>
            </Head>
            <div className="container">
                <h1 className={styles.title}>{blog.title}</h1>
                <span className={styles.author}>{blog.author}</span>
                <hr className={styles.ruler}/>
                <h3 className={styles.desc}>{blog.description}</h3>
                <p className={styles.content}>{blog.content}</p>
            </div>
        </>
    )
}
export default Blog;

export async function getServerSideProps(context){
    const {slug} = context.query;

    const blog = await prisma.blog.findFirst({
        where: 
        { 
            slug: slug
        }
    })

    return {
        props: {
            blog
        }
    }
}