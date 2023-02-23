<template>
    <div class="JobPage">
        <h1> </h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <JobCard :job="job" />
                    <p class="text-center fs-4">{{ job.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const route = useRoute()
        const jobId = route.params.jobId
        async function getJobById() {
            try {
                await jobsService.getJobById(jobId)
            } catch (error) {
                Pop.error(error, '[Getting Jobs By Id]')
            }
        }
        onMounted(() => {
            getJobById()
        })
        return {
            jobId,
            job: computed(() => AppState.job)

        }
    }
}
</script>


<style lang="scss" scoped></style>