import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class JobsService {
    async getJobs() {
        const res = await api.get('auth/api/jobs')
        logger.log(res.data, '[getting jobs]')
    }
}

export const jobsService = new JobsService()