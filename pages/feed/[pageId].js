import {useRouter} from 'next/router';
import styles from '../../styles/Feed.module.css';
import Navbar from '../../components/navbar';

export default function Feed({pageNumber , articles}){
    const router = useRouter();

    return( 
        <div className='page-container'>
            <Navbar />
            <div className={styles.main}>
                {articles.map((article,index)=>(
                    <div key={index} className={styles.post}>
                        <h1 onClick={()=> window.location.href = article.url}>{article.title}</h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && <img src={article.urlToImage} alt="img" />}
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                    <div className={pageNumber===1? styles.disabled : styles.active} 
                            onClick={()=>{
                                if(pageNumber > 1){
                                    router.push(`/feed/${pageNumber-1}`)
                                }
                            }}>Previous Page</div>
                    <div>
                        Page {pageNumber}
                    </div>
                    <div className={pageNumber===5? styles.disabled : styles.active} 
                            onClick={()=>{
                                if(pageNumber < 5){
                                    router.push(`/feed/${pageNumber+1}`)
                                }
                            }}>Next Page</div>
            </div>
        </div>
    )
};

export async function getServerSideProps(context){
    
    const pageNumber = context.query.pageId;

    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
                        {
                            headers: {
                                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
                            }
                        }
                    );
    const data = await res.json();
    const {articles} = data; 

    return{
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}