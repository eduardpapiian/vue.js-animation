/* APP2 */
/* var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
}) */

/* APP3 */
/* let app3 = new Vue ({
  el: '#app-3',
  data: {
  seen: true
  }
})


app3.seen = false; */


/* APP4 */
/* new Vue({
  el: '#app-4',
  data: {
    show: true
  }
}) */

/* EXAMPLE1 */
/* new Vue({
  el: '#example-1',
  data: {
    show: true
  }
}) */

/* EXAMPLE2 */
/* new Vue({
  el: '#example-2',
  data: {
    show: true
  }
}) */

/* EXAMPLE-3 */
/* new Vue ({
  el: '#example-3',
  data: {
    show: true
  }
}) */


/* EXAMPLE4 */
/* new Vue({
  el: '#example-4',
  data: {
    show: false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}) */