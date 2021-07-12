import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/menubutton.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
    <div className={styles.title}>
      <h1>Choose mode</h1>
    </div>
    <div className={styles.menu}>
      <Link href="/ssg" passHref>
        <button type="button" className="btn btn-primary">SSG</button>
      </Link>
      <Link href="/ssg/withrw" passHref>
        <button type="button" className="btn btn-primary">SSG_RW</button>
      </Link>
      <Link href="/csr" passHref>
        <button type="button" className="btn btn-primary">CSR</button>
      </Link>
      <Link href="/csr/withrw" passHref>
        <button type="button" className="btn btn-primary">CSR_RW</button>
      </Link>
      <Link href="/ssg-csr" passHref>
        <button type="button" className="btn btn-primary">SSG+CSR</button>
      </Link>
      <Link href="/ssg-csr/withrw" passHref>
        <button type="button" className="btn btn-primary">SSG+CSR_RW</button>
      </Link>
      <Link href="/ssr-csr" passHref>
        <button type="button" className="btn btn-primary">SSR+CSR</button>
      </Link>
      <Link href="/ssr-csr/withrw" passHref>
        <button type="button" className="btn btn-primary">SSR+CSR_RW</button>
      </Link>
    </div>
    </>
  )
}