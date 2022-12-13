const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
export const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: 'img/kapal.webp', pages: '/theseus' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: 'img/Frame2.png', pages: '/about-us' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: 'img/orang.webp', pages: '/home' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: 'img/kapalTurun.webp', pages: '/gallery' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: 'img/tim.webp', pages: '/team' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: 'img/IRC2018.webp', pages: '/competition' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: 'img/irc2017.webp', pages: '/inamarine-2022' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: 'img/sponsor.webp', pages: '/sponsors' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: 'img/cover.webp', pages: '/contact' },
]

// createRoot(document.getElementById('root')).render(<App images={images} />)
