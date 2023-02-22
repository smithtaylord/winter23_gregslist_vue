<template>
    <div class="HouseCard card">
        <!-- ROUTER LINK GOES HERE LATER -->
        <img :src="house.imgUrl" alt="">
        <div class="card-body">
            <p><b>{{ house.year }} | {{ house.bedroom }} Bedroom - {{ house.bathroom }} Bathroom</b></p>
            <p><b>${{ house.price }}</b></p>
        </div>

    </div>
</template>


<script>
import { House } from '../models/House.js';

export default {
    props: {
        house: { type: House, required: true },
        showSeller: { type: Boolean, default: true }
    },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped></style>