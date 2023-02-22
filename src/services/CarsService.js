import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class CarsService {

  async getCars() {
    const res = await api.get('api/cars')
    console.log('[get cars]', res.data)
    AppState.cars = res.data
    console.log(AppState.cars);
  }

  async createCar(carData) {
    const res = await api.post('api/cars', carData)
    AppState.cars.push(res.data)
    // TODO something fancy with the router
  }

  async editCar(carData) {
    const res = await api.put('api/cars/' + carData.id, carData)
    let i = AppState.cars.findIndex(c => c.id == carData.id)
    if (i == -1) {
      throw new Error('umm wat!?!')
    }
    AppState.cars.splice(i, 1, res.data)
  }


}

export const carsService = new CarsService()
