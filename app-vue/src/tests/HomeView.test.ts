import { mount, } from '@vue/test-utils'
import { computed } from 'vue';
import { test, vi, describe, expect } from 'vitest';
import HomeView from '../views/HomeView.vue';

import * as todosSetup from '../todosSetup'

const setupMock = {
    todosIncompleted: computed(() => []),
    todosCompleted: computed(() => []),
    toggle: vi.fn(),
    deleteTodo: vi.fn(),
    add: vi.fn(),
    update: vi.fn(),
  }; 

describe('mis primers tests', () => {
    test('Testeando componente' , () =>{
        const wrapper = mount(HomeView);

        expect(wrapper.text()).toContain('Todo Lista');

    })

    test('List is empty', () => {
        const spy = vi.spyOn(todosSetup, 'todosFactory').mockReturnValue({
          ...setupMock
        });
        const wrapper = mount(HomeView);
    
        expect(wrapper.text()).toContain('Todo Lista');
        expect(wrapper.text()).toContain('Nada que hacer : )');
      });
})
