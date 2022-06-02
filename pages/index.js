import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>NEXT Sample Project</h1>
      <p>Go to <Link to href='/users'><button className='btn btn-danger'>Users</button></Link></p>
    </div>  
  )
}
