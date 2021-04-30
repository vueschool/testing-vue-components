import {mount, shallowMount} from "@vue/test-utils";
import TestComponent from '@/test.vue'
import ListComponent from '@/list.vue'

/*When testing vue.js components, need a way to mount and render the component; use the mount function.  Mount
creates a Wrapper containing the mounted and rendered Vue component. */
it('should mount a vue TestComponent', () => {
    const wrapper = mount(TestComponent);
    console.log(wrapper);
    expect(wrapper.text()).toContain("Hello Test");

    //Wrapper HTML function returns the entire component DOM node as a string. toMatchSnapshot() creates a snapshot
    // of the component in the __snapshots__ dir.  To learn more about snapshots, check out Snapshot Testing with Jest
    // at Vue School, but this class is not free.
    //debugger;
    expect(wrapper.html()).toMatchSnapshot();
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("<h1>Hello Test</h1>");
});

it('should override the default value to say Hello to in the TestComponent', () => {
    const wrapper = mount(TestComponent,
        {
            propsData: {value: 'VueSchool'}
        });
    expect(wrapper.text()).toContain("Hello VueSchool");

    expect(wrapper.html()).toMatchSnapshot();
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("<h1>Hello VueSchool</h1>");
});

it('should shallowMount the ListComponent', () => {
    // shallowMount() and mount() are almost the same except child components of the one comp u shallowMounted get
    // stubbed automatically.  Use mount() as much as pos as the default approach as it helps to find issues in child
    // comps early.
    console.log("Log of mount(ListComponent): " + mount(ListComponent).html());
    const wrapper = shallowMount(ListComponent);
    console.log("Log of shallowMount(ListComponent): " + wrapper.html());
    //shallowMount() should stub out the list items in the list
    expect(wrapper.html()).toContain('<listitem-stub movie="Iron Man"></listitem-stub>');
});

//Wrapper properties --> most important one is VM.  It gives access to the Vue instance, the same instance you could
// interact w/ from the browser console.
it('should add a list item to the ListComponent', () => {
    const wrapper = mount(ListComponent);
    //Need to get the current set of data in list.vue, which we can get from the wrapper's VM property:
    //let movies = wrapper.vm.marvelMovies;

    //Now, use setData() to update the actual data set.
    wrapper.setData({marvelMovies: [...wrapper.vm.marvelMovies, 'Endgame']});
    //this above does update the data set/list, but not in the snapshot file (test.spec.js.snap)
    //can see the update in the following log
    console.log("marvelMovies: " + wrapper.vm.marvelMovies);

    expect(wrapper.vm.marvelMovies).toContain('Endgame');
    expect(wrapper.html()).toMatchSnapshot();
});

