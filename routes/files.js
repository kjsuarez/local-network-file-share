var express = require('express');
var router = express.Router();

router.get('/poop', (req, res) => {
    res.download('files/suspicious.txt', 'suspicious.txt', function (err) {
        if (err) { console.log(`failed:${err}`)  }
    })
  })

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

module.exports = router;