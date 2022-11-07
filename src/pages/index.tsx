import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Gallery from '@/components/canvas/Gallery'
import { images } from '@/components/shared/images'
// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <div className='h-screen'>
      <Suspense fallback={`Loading...`}>
        <Gallery images={images} />
      </Suspense>
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Gallery images={images} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
