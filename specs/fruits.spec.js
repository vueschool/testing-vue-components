import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'


test('can add fruits to basket with DOM', () => {
  const wrapper = mount(FruitBasket)

  const input = wrapper.find('input')
  const button = wrapper.find('button')
  expect(wrapper.findAll('li').length).toBe(0)

  input.element.value = 'banana'
  input.trigger('input')
  expect(wrapper.vm.fruit).toBe('banana')

  button.trigger('click')
  expect(wrapper.vm.fruit).toBe('')
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))
  expect(wrapper.findAll('li').length).toBe(1)


})
