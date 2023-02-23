import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class JobsService {
    async getJobs() {
        const res = await api.get('auth/api/jobs')
        logger.log(res.data, '[getting jobs]')
        AppState.jobs = res.data.map(j => new Job(j))
    }
    async getJobById(jobId) {
        const res = await api.get('auth/api/jobs/' + jobId)
        logger.log(res.data, '[getting jobs by id]')
        AppState.job = res.data
    }
    async createJob(jobData) {
        const res = await api.post('auth/api/jobs', jobData)
        AppState.jobs.push(res.data)
    }
}

export const jobsService = new JobsService()