import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  cars: [],
  car: null,
  /** @type {import('./models/House.js').House[]} */
  houses: [],
  house: null
})
