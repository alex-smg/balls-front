<template>
    <diV id="ContainerMap">
        <GmapMap id="googleMap"
                :center="{lat: lattitude, lng: longitude}"
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
    export default {
        name: "map",
        props: ['markers'],
        data() {
            return {
                lattitude: this.markers[0].position.lat,
                longitude: this.markers[0].position.lng
            }
        },
        mounted() {
            console.log(this.markers)
            console.log(this.lattitude)
            console.log(this.longitude)
        }
    }
</script>
<style lang="scss" scoped>
    #ContainerMap {
        width: 100%;
        height: 100%;
        #googleMap {
            width: 100%;
            height: 100%;
        }
    }
</style>
