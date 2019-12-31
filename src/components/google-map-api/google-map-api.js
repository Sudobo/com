import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import info from './content-box/info'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAiMzxeGct80UAE1eJaA7vUaa4AdrxM9_g',
        libraries: 'places'
    }
})
export default {
    name: 'google-map-api',
    components: {info},
    props: [],
    data () {
        return {
            size : {
                width: 500,
                height: 400,
            },
            zoom: 15,
            center : {
                lat: 20.9831404,
                lng : 105.8063993
            },
            icon : {
                url: '',
            },
            content:'',
            position: {
                lat: 0,
                lng: 0
            },
            text_box: false,
            current_map: null,
            markers : [
                        {
                            name : 'SudoboGroup',
                            position : {
                                lat: 20.98314,
                                lng: 105.808593
                            },
                            description:'Động thiên thai',
                            imgUrl:'http://keonhacaipro.com/wp-content/uploads/2019/06/hinh-anh-gai-xinh-10x-khoe-nguc-dep-trong-phong-tro-hinh-anh4.jpg',
                            phone : '0989198198'
                        },
                        {
                            name : 'Trung Tâm Y Tế quận Thanh Xuân',
                            position : {
                                lat: 20.9879265,
                                lng: 105.8102223
                            },
                            description:'23 Ngõ 282 Đường Khương Đình, Hạ Đình, Thanh Xuân, Hà Nội, Việt Nam',
                            imgUrl:'https://samsoi.net/wp-content/uploads/2018/08/ngam-anh-hot-girl-facebook-xinh-dep-kim-khanh-01.jpg',
                            phone : ''
                        },
                        {
                            name : 'Go to Home',
                            position : {
                                lat: 25.2018341,
                                lng: 55.2631388
                            },
                            description:'Động thiên thai',
                            imgUrl:'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/mdf_kxrxdf/2019_09_16/jumeirahburjalarabroyalsuite_1.jpg',
                            phone : '0988888888'
                        },
                    ]
        }
    },
    computed: {

    },
    mounted () {

    },
    methods: {
        changeAdress: function (markerObj) {
            this.center = markerObj.position
        },
        searchLink: function (e) {
            this.icon.url = e.target.value;
        },
        openTextBox: function (marker, index) {
            this.position = marker.position;
            this.content = marker;
            if (this.current_map == index) {
                this.text_box = !this.text_box;
            }
            else {
                this.text_box = true;
                this.current_map = index;

            }
        }
    }
}


