<template>
    <div class="JobCard ">
        <router-link :to="{ name: 'Job', params: { jobId: job.id } }">
            <div class="d-flex justify-content-between p-4 border border-dark rounded my-3">
                <h4>Company: {{ job.company }}</h4>
                <h4>Title: {{ job.jobTitle }}</h4>
                <h4>Hours: {{ job.hours }}</h4>
                <h4>Rate: {{ job.rate }}</h4>
            </div>
        </router-link>


    </div>
</template>


<script>
import { Job } from '../models/Job.js';

export default {
    props: {
        job: { type: Job, required: true },
        showSeller: { type: Boolean, default: true }
    },
    setup() {

        return {

        }
    }
}
</script>


<style lang="scss" scoped></style>