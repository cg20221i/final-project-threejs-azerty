import AboutUs from '@/components/canvas/AboutUs'

// const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <AboutUs />
    </>
  )
}

// Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Theseus' } }
}
