// All stock images used across the site
const allImages = [
  '/veraxion.png',
  // Career section
  '/stock/career-section/car1.jpg',
  '/stock/career-section/car2.jpg',
  '/stock/career-section/car3.png',
  // Food & Agri
  '/stock/food-agri/ags1.jpg',
  '/stock/food-agri/ags2.jpg',
  '/stock/food-agri/ags3.jpg',
  // Metals & Mining
  '/stock/metals-mine/mm1.jpg',
  '/stock/metals-mine/mm2.jpg',
  '/stock/metals-mine/mm3.jpg',
  // Power & Utilities
  '/stock/power-utils/power1.jpg',
  '/stock/power-utils/power2.jpg',
  '/stock/power-utils/power3.jpg',
  // Energy
  '/stock/energy/energy1.jpg',
  '/stock/energy/energy2.jpg',
  '/stock/energy/energy3.jpg',
]

export const preloadAllImages = () =>
  Promise.all(
    allImages.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve
          img.src = src
        })
    )
  )

// Start preloading immediately on import
export const imagesReady = preloadAllImages()
