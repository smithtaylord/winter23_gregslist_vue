<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="make" class="form-label">make</label>
      <input required type="text" v-model="editable.make" class="form-control" id="make" placeholder="make..."
        name="make">
    </div>
    <div class="mb-3">
      <label for="model" class="form-label">model</label>
      <input required type="text" v-model="editable.model" class="form-control" id="model" placeholder="model..."
        name="model">
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">year</label>
      <input required type="number" v-model="editable.year" class="form-control" id="year" placeholder="year..."
        name="year">
    </div>
    <div class="mb-3">
      <label for="img" class="form-label">img</label>
      <input required type="text" v-model="editable.imgUrl" class="form-control" id="img" placeholder="img..." name="imgUrl">
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">price</label>
      <input required type="number" v-model="editable.price" class="form-control" id="price" placeholder="price..."
        name="price">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">description</label>
      <textarea name="description" v-model="editable.description" class="form-control" id="description"
        rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="engineType" class="form-label">Engine Type picker</label>
      <select name="engineType" id="engineType">
        <option v-for="e in engineTypes" :value="e" class="text-capitalize">{{ e }}</option>
      </select>
    </div>

    <div>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        {{ editable.id ? 'Save Changes' : 'Create Car' }}
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    const editable = ref({})

    // TODO make form work with edits

    return {
      editable,
      engineTypes: ['unknown', '2 stroke', '4 cylinder', 'v6', 'v8', 'v10', 'v12', 'small', 'medium', 'large', 'chuncko'],
      async handleSubmit() {
        try {
          editable.value.id
            ? await carsService.editCar(editable.value)
            : await carsService.createCar(editable.value)

          // clears the form
          editable.value = {}

          // if (editable.value.id) {
          //   await carsService.editCar(editable.value)
          // }else{
          //   await carsService.createCar(editable.value)
          // }
        } catch (error) {
          Pop.error(error, '[Submitting Car]')
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped></style>
