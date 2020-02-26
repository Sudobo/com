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
                lat: 21.0287797,
                lng : 105.850176
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
            markers : [
                        {
                            name : 'Hoan Kiem Lake Park',
                            position : {
                                lat: 21.0287797,
                                lng: 105.850176
                            },
                            description:'Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam',
                            imgUrl:'http://keonhacaipro.com/wp-content/uploads/2019/06/hinh-anh-gai-xinh-10x-khoe-nguc-dep-trong-phong-tro-hinh-anh4.jpg',
                            phone : '0989198198'
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
            }else {
                this.text_box = true;
                this.current_map = index;
            }
        },
        setPlace(place) {
            if (!place) return;
            this.markers.push({
                name : place.name,
                position: {
                    lat:place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                },
                description:place.formatted_address ? place.formatted_address : '',
                imgUrl:'',
                phone : place.international_phone_number ? place.international_phone_number : ''
            });

            this.center = {
                lat:place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            },
            window.console.log(place);
        },
    }
}
