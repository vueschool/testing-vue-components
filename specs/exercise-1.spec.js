import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';
import { nextTick } from 'vue';

function getRadomUsers(amount = 1) {
  let i = 1;
  const users = [];
  while (i <= amount) {
    users.push(name.findName());
    i++;
  }
  return users;
}

test('component renders the users', async () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: getRadomUsers(3)
    }
  });

  const lis = wrapper.findAll('li');
  expect(lis.length).toBe(3);

  const pickedName = lis.at(1).text();

  wrapper.find('input').setValue(pickedName);
  await nextTick();

  const finalLi = wrapper.find('li');
  expect(finalLi.text()).toBe(pickedName);
});
