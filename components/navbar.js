import { useRouter } from "next/router";
import styles from '../styles/navbar.module.css';

export default function Navbar(){
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={()=> router.push('/')}>Home</div>
            <div onClick={()=> router.push('/feed/1')}>Feed</div>
            <div onClick={()=> router.push('/eom')}>EOM</div>
            <div onClick={()=> window.location.href = 'https://gousemohiddin44.github.io/gouseMohi/'}>Personal Website</div>
        </div>
    )
}