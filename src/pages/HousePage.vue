<template>
    <div class="HousePage" v-if="house">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <HouseCard :house="house" :showSeller="false" />
                    <div class="card my-2">
                        <div class="card-body">
                            <p>{{ house.description }}</p>
                            <p>Levels: {{ house.levels }}</p>
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <button @click="removeListing" v-if="account.id == house.creatorId"
                                    class="btn btn-danger">Remove Listing</button>
                            </div>
                            <div>
                                <span class="me-2"> {{ house.seller.name }}</span>
                                <img height="64" width="64" :src="house.seller.picture" alt="">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div v-else>
        <h1>Loading......... <i class="mdi mdi-pinwheel mdi-spin"></i></h1>
    </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const route = useRoute()
        const houseId = route.params.houseId

        async function getHousesById() {
            try {
                await housesService.getHousesById(houseId)
            } catch (error) {
                Pop.error(error, '[Getting Houses By Id]')
            }
        }

        onMounted(() => {
            getHousesById()
        })
        return {
            houseId,
            account: computed(() => AppState.account),
            house: computed(() => AppState.house),
            async removeListing() {
                try {
                    if (await Pop.confirm('Are you sure you want to delete your house?')) {
                        await housesService.removeHouse(houseId)
                    }
                    router.push({ name: 'Houses' })
                } catch (error) {
                    Pop.error(error, '[removing house]')
                }
            }


        }
    }
}
</script>


<style lang="scss" scoped></style>