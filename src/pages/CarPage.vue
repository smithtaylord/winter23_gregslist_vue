<template>
  <div class="CarPage" v-if="car">
    <div class="container">
      <div class="row my-3">
        <div class="col-md-8 m-auto">
          <CarCard :car="car" :showSeller="false"/>
          <div class="card my-2">
            <div class="card-body">
              <p>
                {{ car.description }}
              </p>

              <div>
                <ul>
                  <li>Year: {{ car.year }}</li>
                  <li>Engine Type: {{ car.engineType }}</li>
                </ul>
              </div>

            </div>

            <div class="card-footer text-end">
              <span class="me-2">{{ car.seller.name }}</span>
              <img height="64" width="64" :src="car.seller.picture" :alt="car.seller.name">
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    <h1>loading.... <i class="mdi mdi-pinwheel mdi-spin"></i></h1>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const route = useRoute()
    const carId = route.params.carId

    async function getCarById() {
      try {
        await carsService.getCarById(carId)
      } catch (error) {
        Pop.error(error, '[Getting Car By Id]')
      }

    }

    onMounted(() => {
      getCarById()
    })



    return {
      carId,
      car: computed(() => AppState.car)
    }
  }
}
</script>


<style lang="scss" scoped></style>
