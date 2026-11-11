import { beforeEach, describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import HomeView from '@/views/HomeView.vue'
import DisclosureList from '@/components/ui/DisclosureList.vue'
import { setLocale } from '@/i18n'

describe('HomeView', () => {
  // The starting language depends on the machine's time zone, so pin it.
  beforeEach(() => setLocale('en'))

  it('renders the hero and every section the nav links to', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('h1').text()).toBe('Security platforms, deployed and supported.')
    for (const id of ['why', 'services', 'how', 'about', 'book']) {
      expect(wrapper.find(`#${id}`).exists()).toBe(true)
    }
  })

  it('lists the three services', () => {
    const wrapper = mount(HomeView)
    const titles = wrapper.findAll('#services h3').map((h) => h.text())
    expect(titles).toEqual(['Solution deployment', 'Configuration and tuning', 'N1 support'])
  })

  it('re-renders in the chosen language', async () => {
    const wrapper = mount(HomeView)
    setLocale('pt-BR')
    await nextTick()
    expect(wrapper.find('h1').text()).toBe('Plataformas de segurança, implantadas e com suporte.')
    setLocale('ja')
    await nextTick()
    expect(wrapper.find('h1').text()).toBe('セキュリティ基盤を、導入から運用支援まで。')
  })
})

describe('DisclosureList', () => {
  it('renders one collapsible item per entry', () => {
    const wrapper = mount(DisclosureList, {
      props: {
        items: [
          { title: 'One', body: 'First' },
          { title: 'Two', body: 'Second' },
        ],
      },
    })
    const details = wrapper.findAll('details')
    expect(details).toHaveLength(2)
    expect(details[0]?.find('summary').text()).toBe('One')
    expect(details[1]?.text()).toContain('Second')
  })
})
