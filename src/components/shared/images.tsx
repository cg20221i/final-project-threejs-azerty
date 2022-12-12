const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
export const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: 'img/kapal.webp', pages: '/Theseus' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: 'img/Frame2.png', pages: '/About-us' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: 'img/orang.webp', pages: '/Home' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: 'img/kapalTurun.webp', pages: '/Gallery' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: 'img/tim.webp', pages: '/Team' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: 'img/IRC2018.webp', pages: '/Competition' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: 'img/irc2017.webp', pages: '/Inamarine 2022' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: 'img/sponsor.webp', pages: '/Sponsors' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: 'img/cover.webp', pages: '/Contact' },
]

// createRoot(document.getElementById('root')).render(<App images={images} />)
