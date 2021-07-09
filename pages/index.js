import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
    <Link href="/ssg" passHref>
      <button type="button" className="btn btn-primary">SSG</button>
    </Link>
    <Link href="/csr" passHref>
      <button type="button" className="btn btn-primary">CSR</button>
    </Link>
    <Link href="/ssg-csr" passHref>
      <button type="button" className="btn btn-primary">SSG+CSR</button>
    </Link>
    <Link href="/ssr-csr" passHref>
      <button type="button" className="btn btn-primary">SSR+CSR</button>
    </Link>
    </>
  )
}