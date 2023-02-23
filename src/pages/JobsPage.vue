<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <div class="col-10 m-auto mb-3" v-for="j in jobs">
                    <JobCard :job="j" />
                </div>
            </div>
        </div>


        <div class="row sticky-bottom">
            <div class="col-12">
                <button class="fs-5 btn btn-dark" data-bs-toggle="modal"
                    data-bs-target="#test-modal">👷👨‍💼👮‍♂️👨‍🏭</button>
            </div>
        </div>
    </div>
    <Modal id="test-modal" modal-title="Add a Job 👷👨‍💼👮‍♂️👨‍🏭">
        <JobForm />
    </Modal>
</template>


<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
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
        return {
            jobs: computed(() => AppState.jobs),
            account: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped></style>