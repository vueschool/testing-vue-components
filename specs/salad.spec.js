import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex)

test('store is loaded ', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent, {
    localVue: VueWithVuex,
    store
  })
  store.state.salad.push('cucumber')

  expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('store works', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent, {
    localVue: VueWithVuex,
    store
  })
  wrapper.vm.addIngredient('tomato')
  expect(wrapper.vm.salad).toEqual(['tomato'])
})
