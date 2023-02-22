<template>
  <div class="carsPage">
    <h1>This is the cars page</h1>
    {{ cars }}

    <button data-bs-toggle="modal" data-bs-target="#test-modal">open the modal</button>



    <Modal id="test-modal" modal-title="Add a Car 🚗">
      <CarForm />
    </Modal>

  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getCars() {
      try {
        await carsService.getCars()
      } catch (error) {
        Pop.error(error, '[Getting Cars]')
      }
    }

    onMounted(() => {
      getCars()
    })

    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>


<style lang="scss" scoped></style>
