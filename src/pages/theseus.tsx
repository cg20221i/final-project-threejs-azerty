import dynamic from 'next/dynamic'
import Theseus from '@/components/canvas/Theseus'
const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return <Theseus />
}

// Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Theseus' } }
}
