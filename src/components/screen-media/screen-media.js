
export default {
  name: 'screen-media',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    mediaScreen(arg) {
      var screenMedia = document.getElementById('screen-media');
      let screens = screenMedia.getElementsByClassName('su-fa');

      for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active')
      }

      document.body.classList.remove('laptop', 'tablet', 'mobile');

      if(arg == 'laptop') {
        document.body.classList.add('laptop');
        screenMedia.getElementsByClassName('fa-laptop')[0].classList.add('active')
      }
      if(arg == 'tablet') {
        document.body.classList.add('tablet');
        screenMedia.getElementsByClassName('fa-tablet-alt')[0].classList.add('active')
      }
      if(arg == 'mobile') {
        document.body.classList.add('mobile');
        screenMedia.getElementsByClassName('fa-mobile-alt')[0].classList.add('active');
      }

    }
  }
}


