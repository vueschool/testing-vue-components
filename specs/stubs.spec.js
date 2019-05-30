import { shallowMount } from '@vue/test-utils'
import ListComponent from '@/list'

const ListItemStub = {
  template: `<li>{{ movie }}</li>`,
  props: ['movie']
}

test('shallowMount', () => {
  const wrapper = shallowMount(ListComponent, {
    stubs: {
      ListItem: ListItemStub
    }
  })
  expect(wrapper).toMatchSnapshot()
})
