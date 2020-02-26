export default {
    name: 'google-map-iframe',
    components: {},
    props: [],
    data () {
        return {
            warning: 'the field is required',
            url: 'https://www.google.com/maps/embed/v1/',
            address: 'sudobo',
            size : {
                width: 500,
                height: 400,
            },
            zoom: 15,
            mode: 'place',
            key: 'AIzaSyAiMzxeGct80UAE1eJaA7vUaa4AdrxM9_g',
            from: 'sudobo',
            to: 'sudobo',
            center: '21.0294096,105.8514535',
            heading: '210',
            pitch: '10',
            fov: '35',
        }
    },
    computed: {

    },
    mounted () {
        window.console.log('vao day nhe')
    },
    methods: {
        src: function (mode) {
            // 'Place' mode displays a map pin at a particular place or address
            // 'Search' mode displays results for a search across the visible map region
            if (mode == 'place' || mode == 'search') {
                return this.url + this.mode + "?key=" + this.key + "&zoom=" + this.zoom + "&q=" + this.address; 
            }

            // 'Directions' mode displays the path between two or more specified points on the map, as well as the distance and travel time.
            if (mode == 'directions') {
                return this.url + this.mode + "?key=" + this.key + "&origin=" + this.from + "&destination=" + this.to + "&zoom=" + this.zoom; 
            }

            // 'View' mode returns a map with no markers or directions.
            if (mode == 'view') {
                return this.url + this.mode + "?key=" + this.key + "&center=" + this.center + "&zoom=" + this.zoom + "&maptype=satellite"; 
            }
            // 'streetview' mode provides a viewer that renders the resulting panorama as a sphere with a camera at its center
            if (mode == 'streetview') {
                return this.url + this.mode + "?key=" + this.key + "&location=" + this.center +
                "&heading=" + this.heading + "&pitch=" + this.pitch + "&fov=" + this.fov; 
            }
            
        }
    }
}
