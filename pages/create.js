import Head from "next/head";
import { useState } from "react";
import styles from '../styles/Create.module.css';
const Create = () =>{
    const [blogData, setBlogData] = useState({});
    async function saveBlog(evt){
        evt.preventDefault()
        console.log(blogData);
        const response = await fetch("/api/blogs", {
            method: "Post",
            body: JSON.stringify(blogData)
        });
        return await response.json();
    }

    return (    
        <>
            <Head>
                <title>Articles | Create</title>
            </Head>
            <div className="container">
                <h3 className={styles.title}>Publish an article</h3>
                <hr className={styles.ruler}/>

                <form className={styles.form} onSubmit={saveBlog}>
                    <input type="text" name="title" placeholder="Title" onChange={e => setBlogData({
                        ...blogData, title: e.target.value
                        })}
                    />

                    <textarea name="description" placeholder="Description" className={styles.desc} onChange={e => setBlogData({...blogData, description: e.target.value})}></textarea>
                    <textarea name="body" placeholder="Your blog..." className={styles.body} onChange={e => setBlogData({...blogData, content: e.target.value})}></textarea>
                    <button className={styles.submit}>Publish Blog</button>
                </form>
            </div>
        </>
    )
}
export default Create;