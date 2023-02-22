<template>
    <div class="component">
        YO THIS IS THE JOBS PAGE


        <div class="row sticky-bottom">
            <div class="col-12">
                <button class="fs-5 btn btn-dark" data-bs-toggle="modal"
                    data-bs-target="#test-modal">👷👨‍💼👮‍♂️👨‍🏭</button>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted } from 'vue';
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        async function getJobs() {
            try {
                await jobsService.getJobs()
            } catch (error) {
                Pop.error(error, '[get jobs]')
            }
        }
        onMounted(() => {
            getJobs()
        })
        return {}
    }
}
</script>


<style lang="scss" scoped></style>