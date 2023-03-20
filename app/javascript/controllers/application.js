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
