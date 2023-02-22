import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses() {
        const res = await api.get('auth/api/houses')
        logger.log('[get houses]', res.data)
        AppState.houses = res.data.map(h => new House(h))

    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        logger.log(res.data, '[house data]')
        AppState.houses.push(res.data)
    }

    async getHousesById(houseId) {
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        AppState.house = res.data
    }

    async removeHouse(houseId) {
        const res = await api.delete('auth/api/houses/' + houseId)
        let i = AppState.houses.findIndex(h => h.id == houseId)
        if (i != -1) {
            AppState.houses.splice(i, 1)
        }
    }


}

export const housesService = new HousesService()