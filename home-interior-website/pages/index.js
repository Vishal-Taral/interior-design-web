import Layout from '@/Components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
   <div>
      <Layout></Layout>
      <div className={styles.home}>
        <h1><u>Welcome To our Website</u></h1>
      </div>
   </div>
  )
}
