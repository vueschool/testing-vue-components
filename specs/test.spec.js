import TestComponent from '@/test'
import List from '@/list'

import { mount, shallowMount } from '@vue/test-utils'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('ListComponent Shallow', () => {
  console.log(mount(List).html())
  console.log(shallowMount(List).html())
})
