<template>
    <div class="HouseCard card">
        <router-link :to="{ name: 'House', params: { houseId: house.id } }">
            <img class="main-img img-fluid w-100" :src="house.imgUrl" alt="">
        </router-link>
        <div class="card-body">
            <p><b>{{ house.year }} | {{ house.bedrooms }} Bedroom - {{ house.bathrooms }} Bathroom</b></p>
            <p><b>${{ house.price }}</b></p>
        </div>
        <div class="card-footer text-end" v-if="showSeller">
            <span class="me-2">{{ house.seller.name }}</span>
            <img :src="house.seller.picture" height="40" width="40" class="rounded-circle" alt="">
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


<style lang="scss" scoped>
.main-img {
    height: 30vh;
    object-fit: cover;
}
</style>