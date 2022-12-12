import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import AboutUs from '@/components/canvas/AboutUs'
import g from '@/styles/geter.module.css'
import Button from '@/components/shared/Button'
import Link from 'next/link'
// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  const router = useRouter()
  const [onSpace, setOnSpace] = useState(false)
  const ref = useRef(null)
  const timer = () => {
    setTimeout(() => {
      router.push('/navigation')
    }, 5000)
  }
  useEffect(() => {
    if (setOnSpace) {
      timer()
    }
  }, [setOnSpace])

  return (
    <section className={`${onSpace ? g.geter : ''}`}>
      <div
        ref={ref}
        className='absolute z-10 cursor-pointer left-1/2 -translate-x-1/2 top-2/3'
        tabIndex={2}
        onMouseDown={() => setOnSpace(true)}
        onMouseUp={() => setOnSpace(false)}>
        <Button btn='Hold click to enter' onSpace={onSpace} />
      </div>
      <div>
        
      </div>
      <div className='h-screen'>
        <Suspense fallback={`loading...`}>
          <AboutUs />
        </Suspense>
      </div>
    </section>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Gallery images={images} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
