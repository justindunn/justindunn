import { Application } from "@hotwired/stimulus"
import anime from "@sherifmagdy/animejs";

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
// add in
var current = null;
  // document.addEventListener('DOMContentLoaded', () => {
    // document.querySelector('#action_menu_btn').addEventListener('click', function(e) {
    //   const button = document.querySelector('#action_menu_btn');
    //   const elementToToggle = document.getElementById('.action_menu');    

    //   button.addEventListener('mousedown', () => {
    //     elementToToggle.classList.toggle('hide');
    //   });
    // });
if (document.getElementById('hs')) {
  var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(10000, 3000),
    delay: anime.random(0, 0),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

var letterEls = document.querySelectorAll('.letter');
for (var i = 0; i < letterEls.length; i++) {
  var letterEl = letterEls[i];
  var offset = anime.setDashoffset(letterEl);
  letterEl.setAttribute('stroke-dashoffset', offset);
   anime({
    targets: letterEl,
    duration: anime.random(0, 100),
    delay: anime.random(0, 300),
    opacity: [
      { value: 0, easing: 'easeInOutSine',duration: anime.random(0, 300) },
    ],
    loop: true
  });
}

 var timeline = anime.timeline({
  duration: 5000,
  easing: 'linear',
  autoplay: true
});

timeline.add({
  targets: ['#logo_2', 'feTurbulence' , 'feDisplacementMap'],
  baseFrequency: [0,.06],
  numOctaves: 4
  });
  function randomValues() {
    var timeline = anime.timeline({
      duration: function() {
          return anime.random(0, 270);
        },
      delay: [45, 250],
      direction: 'alternate',
      easing: 'easeInOutQuint',
      autoplay: true,
      loop:true,
    });
    timeline.add({
      targets: ['feDisplacementMap'],
      scale:[5 , 30]
      });
    timeline.add({
      targets: ['#svg_8'],
      fill: ['#150485', '#590995', '#c62a88', '#03c4a1'],
      scale: [.5, 1.05],
      complete: randomValues
      });
  };

  randomValues();

  var stroke_anim1 = anime({
    targets: ['#svg_12'],
    strokeDashoffset: [anime.setDashoffset, 0],
    points: [
      { value: [
        '88.5,80.45313l272.5,79.54688l-231,189l-41.5,-268.54688z',
        '207.5,185.45313l156.5,-26.45313l,190l-44.5,-268.54687z']
      },
    ],
    fill: ['#150485', '#590995', '#c62a88', '#03c4a1'],
    stroke: ['#f1e7b6', '#fe346e', '#400082', '#00bdaa'],
    easing: 'easeOutQuad',
    duration: 2000,
    autoplay:true,
    loop: true,
  });

  var stroke_anim2 = anime({
    targets: ['.p_0'],
    strokeDashoffset: [anime.setDashoffset, 0],
    points: [
      { value: [
        '88.5,80.45313l272.5,79.54688l-231,189l-41.5,-268.54688z',
        '207.5,185.45313l156.5,-26.45313l,190l-44.5,-268.54687z']
      },
    ],
    stroke: ['#f1e7b6', '#fe346e', '#400082', '#00bdaa'],
    easing: 'easeOutQuad',
    delay:1000,
    duration: 2000,
    autoplay:true,
    loop: true,
  });


  var rotate_stroke_anime = anime({
    targets: ['#svg_13 path' ],
    easing: ['easeOutInCirc'],
    strokeDashoffset:  [10, 0],
    duration: 1000,
    opacity:.5,
    skewY:100,
    skewX:100,
    autoplay:true,
    direction:'normal',
    loop: true,
    stroke:[.3, 1],
  });
}
if (document.getElementById('user_email')) {

    document.querySelector('#user_email').addEventListener('focus', function(e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });

    document.querySelector('#user_password').addEventListener('focus', function(e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });

    // document.querySelector('#user_password_confirmation').addEventListener('focus', function(e) {
    //   if (current) current.pause();
    //   current = anime({
    //     targets: 'path',
    //     strokeDashoffset: {
    //       value: -336,
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     },
    //     strokeDasharray: {
    //       value: '240 1386',
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     }
    //   });
    // });

    document.querySelector('#submit').addEventListener('focus', function(e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }
  // });
