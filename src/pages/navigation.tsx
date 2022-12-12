import Gallery from '@/components/canvas/Gallery'
import { images } from '@/components/shared/images'

// const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <Gallery images={images} />
    </>
  )
}

// Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Theseus' } }
}
