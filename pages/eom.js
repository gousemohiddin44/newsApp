import {employee} from "../constants/employee";
import styles from '../styles/EOM.module.css';
import Navbar from "../components/navbar";

export default function Eom(){

    return (
        <div className='page-container'>

            <Navbar />

            <div className={styles.main}>
                <h1>Employee Of Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h2>{employee.name}</h2>
                    <h5>{employee.position}</h5>
                    <img src='/gouse.png' alt="employee" />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
};

// export async function getServerSideProps(context){
//     const res = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
//     const data = await res.json();

//     return{
//         props: {
//             employee: data,
//         }
//     }
// } 