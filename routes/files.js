var express = require('express');
var router = express.Router();

router.get('/poop', (req, res) => {
    res.download('files/suspicious.txt', 'suspicious.txt', function (err) {
        if (err) { console.log(`failed:${err}`)  }
    })
  })
// Movies/shows
  router.get('/angel', (req, res) => {
    res.download('files/Angels Egg(1985).7z', 'Angels Egg(1985).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/being_there', (req, res) => {
    res.download('files/Being.There.1979.mp4.7z', 'Being.There.1979.mp4.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/doctor_z', (req, res) => {
    res.download('files/Doctor Zhivago (1965).7z', 'Doctor Zhivago (1965).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/future_boy', (req, res) => {
    res.download('files/Future Boy Conan (1978).7z', 'Future Boy Conan (1978).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/hamlet', (req, res) => {
    res.download('files/Hamlet (1996)1080p.7z', 'Hamlet (1996)1080p.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/kajilion', (req, res) => {
    res.download('files/Kajillionaire (2020).7z', 'Kajillionaire (2020).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  

  router.get('/kite', (req, res) => {
    res.download('files/Kite 1998 Dual Audio (ENG+JAP).7z', 'Kite 1998 Dual Audio (ENG+JAP).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/metropolis', (req, res) => {
    res.download('files/Metropolis(2001).7z', 'Metropolis(2001).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/patlabor', (req, res) => {
    res.download('files/Patlabor The Movie (1989) 1080p.7z', 'Patlabor The Movie (1989) 1080p.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/patlabor_2', (req, res) => {
    res.download('files/Patlabor The Movie 2 (1993)1080p.7z', 'Patlabor The Movie 2 (1993)1080p.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/lain', (req, res) => {
    res.download('files/Serial Experiments Lain(1999).7z', 'Serial Experiments Lain(1999).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/tng_1', (req, res) => {
    res.download('files/Star.Trek.The.Next.Generation.S01.7z', 'Star.Trek.The.Next.Generation.S01.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/tng_2', (req, res) => {
    res.download('files/Star.Trek.The.Next.Generation.S02.7z', 'Star.Trek.The.Next.Generation.S02.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/tng_3', (req, res) => {
    res.download('files/Star.Trek.The.Next.Generation.S03.7z', 'Star.Trek.The.Next.Generation.S03.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/tng_4', (req, res) => {
    res.download('files/Star.Trek.The.Next.Generation.S04.7z', 'Star.Trek.The.Next.Generation.S04.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/summer_wars', (req, res) => {
    res.download('files/Summer Wars (2009) [1080p].7z', 'Summer Wars (2009) [1080p].7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/french', (req, res) => {
    res.download('files/TheFrenchConnection(1971).7z', 'TheFrenchConnection(1971).7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/end_of_the_world', (req, res) => {
    res.download('files/Until the End of the World (1991)1080p.7z', 'Until the End of the World (1991)1080p.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  router.get('/wicked_city', (req, res) => {
    res.download('files/Wicked.City.1987.7z', 'Wicked.City.1987.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  //books
  router.get('/how_dns_works', (req, res) => {
    res.download('files/How DNS Works.7z', 'How DNS Works.7z', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly1', (req, res) => {
    res.download('files/deadlyclass_vol1.pdf', 'deadlyclass_vol1.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly2', (req, res) => {
    res.download('files/deadlyclass_vol2.pdf', 'deadlyclass_vol2.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly3', (req, res) => {
    res.download('files/deadlyclass_vol3.pdf', 'deadlyclass_vol3.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly4', (req, res) => {
    res.download('files/deadlyclass_vol4.pdf', 'deadlyclass_vol4.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly5', (req, res) => {
    res.download('files/deadlyclass_vol5.pdf', 'deadlyclass_vol5.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly6', (req, res) => {
    res.download('files/deadlyclass_vol6.pdf', 'deadlyclass_vol6.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/deadly7', (req, res) => {
    res.download('files/deadlyclass_vol7.pdf', 'deadlyclass_vol7.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/saga_1', (req, res) => {
    res.download('files/Saga_vol1.pdf', 'Saga_vol1.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/saga_2', (req, res) => {
    res.download('files/Saga_vol2.pdf', 'Saga_vol2.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/east', (req, res) => {
    res.download('files/eastofwest_vol1.pdf', 'eastofwest_vol1.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/invincible', (req, res) => {
    res.download('files/Invincible_vol1.pdf', 'Invincible_vol1.pdf', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  //software
  router.get('/aseprite', (req, res) => {
    res.download('files/Aseprite-v1.2.34.1.exe', 'Aseprite-v1.2.34.1.exe', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/vallhalla', (req, res) => {
    res.download('files/VA-11_Hall_A_1.2.1.3_Windows.zip', 'VA-11_Hall_A_1.2.1.3_Windows.zip', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })
  
  router.get('/isaac', (req, res) => {
    res.download('files/the_binding_of_isaac_wrath_of_the_lamb-windows-1.48-1355437751.zip', 'the_binding_of_isaac_wrath_of_the_lamb-windows-1.48-1355437751.zip', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/ftl', (req, res) => {
    res.download('files/FTL_v1.6.12_Install.exe', 'FTL_v1.6.12_Install.exe', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/breach', (req, res) => {
    res.download('files/Breach_v1.2.76_Install.exe', 'Breach_v1.2.76_Install.exe', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/hotline', (req, res) => {
    res.download('files/HotlineMiami_windows.zip', 'HotlineMiami_windows.zip', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

  router.get('/undertale', (req, res) => {
    res.download('files/UNDERTALE_.exe', 'UNDERTALE_.exe', function (err) {
      if (err) { console.log(`failed:${err}`)  }
    })
  })

module.exports = router;