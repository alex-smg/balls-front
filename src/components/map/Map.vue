<template>
    <diV id="ContainerMap">
        <GmapMap id="googleMap"
                :center="{lat: markers[0].position.lat, lng:markers[0].position.lng}"
                :zoom="11"
                map-type-id="terrain"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />
        </GmapMap>
   </div>
</template>
<script>
    import {gmapApi} from 'vue2-google-maps'
    export default {
        name: "map",
        props: {
            markers:{
                type:Array,
                default:[]
            }
            ,
        },
        data() {
            return {
            }
        },
        mounted() {
            console.log(this.markers);
        }
    }
</script>
<style lang="scss" scoped>
    #ContainerMap {
        width: 100%;
        #googleMap {
            width: 100%;
            height: 40vh;
        }
    }
</style>
