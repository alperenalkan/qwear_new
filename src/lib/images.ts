// Image paths configuration
// Bu dosya tüm resim yollarını merkezi olarak yönetir

export const images = {
  // Logo - Local SVG file
  logo: '/images/logo/logo.svg',
  
  // Hero Section Images
  hero: {
    slide1: '/images/hero/hero2.webp',
    slide2: '/images/hero/hero1.webp',
    slide3: '/images/hero/hero3.webp',
  },

  // Products Section Images
  products: {
    chocolate: '/images/products/products1.webp',
    bmw: '/images/products/products2.webp',
    coffee: '/images/products/products3.webp',
  },

  // About Section Images
  about: {
    trade: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdHJhZGV8ZW58MXx8fHwxNzYxMDYyMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Carousel Images - Unsplash URLs
  carousel: {
    bmw: {
      main: '/images/carousel/auto/bmw5.webp',
      gallery1: '/images/carousel/auto/bmw5_front.webp',
      gallery2: '/images/carousel/auto/bmw5_arka.webp',
      gallery3: '/images/carousel/auto/bmw7_front.webp',
      gallery4: '/images/carousel/auto/bmw7_arka.webp',
      gallery5: '/images/carousel/auto/bmwX5_front.webp',
      gallery6: '/images/carousel/auto/bmwX5_arka.webp',
      gallery7: '/images/carousel/auto/bmwX7_front.webp',
      gallery8: '/images/carousel/auto/bmwX7_arka.webp',
      // Legacy support
      x5: 'https://images.unsplash.com/photo-1570475268293-aa35ac502b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYNSUyMHdoaXRlfGVufDF8fHx8MTc2MTY3NTMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      interior: 'https://images.unsplash.com/photo-1566338774647-14068acb0b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NjE2NzUzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      factory: 'https://images.unsplash.com/photo-1687171304369-1fa77ee75459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMEJNVyUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NjE2NzUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    nespresso: {
      main: '/images/carousel/coffeemachines/VERTUO_Next_Premium_Rich_Brown.webp',
      gallery1: '/images/carousel/coffeemachines/VERTUO_Next_Premium_Rich_Brown.webp',
      gallery2: '/images/carousel/coffeemachines/CitiZ_Cherry_Red.webp',
      gallery3: '/images/carousel/coffeemachines/Creatista_Plus_Stainless_Steel.webp',
      gallery4: '/images/carousel/coffeemachines/Gran_Lattissima_Fresh_Vitality.webp',
      gallery5: '/images/carousel/coffeemachines/Cafe_Aromis_Series_8000_Philips_Kaffeevollautomat.webp',
      gallery6: '/images/carousel/coffeemachines/Philips_Barista_Brew_Halbautomatische_Espressomaschine.webp',
      gallery7: '/images/carousel/coffeemachines/Series_3300_Kaffeevollautomat.webp',
      gallery8: '/images/carousel/coffeemachines/Series_5500%20Kaffeevollautomat.webp',
      // Legacy support
      vertuo: '/images/carousel/coffeemachines/VERTUO_Next_Premium_Rich_Brown.webp',
      maker: '/images/carousel/coffeemachines/Creatista_Plus_Stainless_Steel.webp',
      maker2: '/images/carousel/coffeemachines/Gran_Lattissima_Fresh_Vitality.webp',
    },
    capsules: {
      main: 'https://images.unsplash.com/photo-1736632211111-19e406e8a8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlc3xlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery1: 'https://images.unsplash.com/photo-1710360258725-8361478b9eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTY3NDg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery2: 'https://images.unsplash.com/photo-1447753072467-2f56032d1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYXBzdWxlcyUyMHZhcmlldHl8ZW58MXx8fHwxNzYxNjc0ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery3: 'https://images.unsplash.com/photo-1736632211111-19e406e8a8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlc3xlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery4: 'https://images.unsplash.com/photo-1710360258725-8361478b9eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTY3NDg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery5: 'https://images.unsplash.com/photo-1447753072467-2f56032d1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYXBzdWxlcyUyMHZhcmlldHl8ZW58MXx8fHwxNzYxNjc0ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery6: 'https://images.unsplash.com/photo-1736632211111-19e406e8a8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlc3xlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery7: 'https://images.unsplash.com/photo-1710360258725-8361478b9eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTY3NDg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery8: 'https://images.unsplash.com/photo-1447753072467-2f56032d1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYXBzdWxlcyUyMHZhcmlldHl8ZW58MXx8fHwxNzYxNjc0ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      // Legacy support
      colorful: 'https://images.unsplash.com/photo-1710360258725-8361478b9eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTY3NDg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      variety: 'https://images.unsplash.com/photo-1447753072467-2f56032d1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYXBzdWxlcyUyMHZhcmlldHl8ZW58MXx8fHwxNzYxNjc0ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      original: 'https://images.unsplash.com/photo-1736632211111-19e406e8a8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXNwcmVzc28lMjBjYXBzdWxlc3xlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    beans: {
      main: 'https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzYxMDI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery1: 'https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzYxMDI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery2: 'https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxNjc0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery3: 'https://images.unsplash.com/photo-1599766676305-6af85465b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGJlYW5zJTIwYmFnfGVufDF8fHx8MTc2MTY3NDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery4: 'https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzYxMDI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery5: 'https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxNjc0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery6: 'https://images.unsplash.com/photo-1599766676305-6af85465b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGJlYW5zJTIwYmFnfGVufDF8fHx8MTc2MTY3NDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery7: 'https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzYxMDI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery8: 'https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxNjc0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      // Legacy support
      dark: 'https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzYxMDI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      roasted: 'https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYxNjc0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bag: 'https://images.unsplash.com/photo-1599766676305-6af85465b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGJlYW5zJTIwYmFnfGVufDF8fHx8MTc2MTY3NDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    lindt: {
      main: 'https://images.unsplash.com/photo-1662554015255-a6d2d654b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery1: 'https://images.unsplash.com/photo-1603751915495-a5a3ec39c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGxpbmRvciUyMHRydWZmbGVzfGVufDF8fHx8MTc2MTY3NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery2: 'https://images.unsplash.com/photo-1662554015255-a6d2d654b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery3: 'https://images.unsplash.com/photo-1670456493715-f7169546f324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZSUyMGFzc29ydG1lbnR8ZW58MXx8fHwxNzYxNjc0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery4: 'https://images.unsplash.com/photo-1603751915495-a5a3ec39c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGxpbmRvciUyMHRydWZmbGVzfGVufDF8fHx8MTc2MTY3NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery5: 'https://images.unsplash.com/photo-1662554015255-a6d2d654b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery6: 'https://images.unsplash.com/photo-1670456493715-f7169546f324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZSUyMGFzc29ydG1lbnR8ZW58MXx8fHwxNzYxNjc0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery7: 'https://images.unsplash.com/photo-1603751915495-a5a3ec39c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGxpbmRvciUyMHRydWZmbGVzfGVufDF8fHx8MTc2MTY3NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery8: 'https://images.unsplash.com/photo-1662554015255-a6d2d654b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      // Legacy support
      truffles: 'https://images.unsplash.com/photo-1603751915495-a5a3ec39c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGxpbmRvciUyMHRydWZmbGVzfGVufDF8fHx8MTc2MTY3NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      chocolate: 'https://images.unsplash.com/photo-1662554015255-a6d2d654b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjEwNjQxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      assortment: 'https://images.unsplash.com/photo-1670456493715-f7169546f324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5kdCUyMGNob2NvbGF0ZSUyMGFzc29ydG1lbnR8ZW58MXx8fHwxNzYxNjc0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    kinder: {
      main: 'https://images.unsplash.com/photo-1675774978903-fc190b38394d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzYxMDY0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery1: 'https://images.unsplash.com/photo-1625860927329-df5602da7729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBidWVubyUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjE2NzQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery2: 'https://images.unsplash.com/photo-1566200417568-75fba9ffb3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBqb3klMjBlZ2dzfGVufDF8fHx8MTc2MTY3NDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery3: 'https://images.unsplash.com/photo-1675774978903-fc190b38394d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzYxMDY0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery4: 'https://images.unsplash.com/photo-1625860927329-df5602da7729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBidWVubyUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjE2NzQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery5: 'https://images.unsplash.com/photo-1566200417568-75fba9ffb3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBqb3klMjBlZ2dzfGVufDF8fHx8MTc2MTY3NDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery6: 'https://images.unsplash.com/photo-1675774978903-fc190b38394d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzYxMDY0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery7: 'https://images.unsplash.com/photo-1625860927329-df5602da7729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBidWVubyUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjE2NzQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery8: 'https://images.unsplash.com/photo-1566200417568-75fba9ffb3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBqb3klMjBlZ2dzfGVufDF8fHx8MTc2MTY3NDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      // Legacy support
      bueno: 'https://images.unsplash.com/photo-1625860927329-df5602da7729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBidWVubyUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NjE2NzQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      joy: 'https://images.unsplash.com/photo-1566200417568-75fba9ffb3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBqb3klMjBlZ2dzfGVufDF8fHx8MTc2MTY3NDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      chocolate: 'https://images.unsplash.com/photo-1675774978903-fc190b38394d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXIlMjBjaG9jb2xhdGV8ZW58MXx8fHwxNzYxMDY0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  },
};

// Resim değiştirme için yardımcı fonksiyon
export const getImagePath = (category: string, subcategory?: string, image?: string): string => {
  const categoryObj = images[category as keyof typeof images];
  if (!categoryObj) return '';
  
  if (subcategory && image) {
    const subcategoryObj = categoryObj[subcategory as keyof typeof categoryObj];
    if (typeof subcategoryObj === 'object' && subcategoryObj !== null) {
      return subcategoryObj[image as keyof typeof subcategoryObj] as string || '';
    }
  }
  
  if (subcategory) {
    return categoryObj[subcategory as keyof typeof categoryObj] as string || '';
  }
  
  return '';
};
