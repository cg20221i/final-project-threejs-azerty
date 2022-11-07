import { createRoot } from 'react-dom/client'
// import './styles.css'
// import { App } from '@/components/shared/images'

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
export const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), pages: '/theseus' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430), pages: '/about-us' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452), pages: '/blob2' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482), pages: '/blob2' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185), pages: '/blob2' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574), pages: '/blob2' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675), pages: '/blob2' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738), pages: '/blob2' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), pages: '/blob2' },
]

// createRoot(document.getElementById('root')).render(<App images={images} />)
