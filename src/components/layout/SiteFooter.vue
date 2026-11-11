<script setup lang="ts">
import { computed } from 'vue'
import logoMark from '@/assets/logo-mark.png'
import { site } from '@/content/site'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const columns = computed(() => [
  {
    id: 'services',
    title: t.value.footer.services,
    links: [
      { label: t.value.services.deployment.title, href: '#services' },
      { label: t.value.services.configuration.title, href: '#services' },
      { label: t.value.services.support.title, href: '#services' },
    ],
  },
  {
    id: 'company',
    title: t.value.footer.company,
    links: [
      { label: t.value.nav.why, href: '#why' },
      { label: t.value.nav.how, href: '#how' },
      { label: t.value.nav.about, href: '#about' },
    ],
  },
  {
    id: 'contact',
    title: t.value.footer.contact,
    links: [
      { label: t.value.actions.bookCall, href: site.bookingHref },
      { label: site.email, href: site.emailHref },
    ],
  },
])

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#top" class="brand">
            <img :src="logoMark" alt="" class="brand__mark" />
            <span class="brand__name">{{ site.name }}</span>
          </a>
          <span class="caption">{{ t.site.location }}</span>
        </div>
        <nav
          v-for="column in columns"
          :key="column.id"
          :aria-label="column.title"
          class="footer__col"
        >
          <span class="footer__col-title">{{ column.title }}</span>
          <a v-for="(link, i) in column.links" :key="i" :href="link.href" class="text-link">
            {{ link.label }}
          </a>
        </nav>
      </div>
      <p class="caption">© {{ year }} {{ site.legalName }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  padding-block: 56px 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
  gap: 32px;
}

.footer__brand,
.footer__col {
  display: flex;
  flex-direction: column;
}

.footer__brand {
  gap: 12px;
}

.footer__col {
  gap: 10px;
}

.footer__col-title {
  font-weight: 500;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand__mark {
  width: 24px;
  height: 27px;
  object-fit: contain;
}

.brand__name {
  font-weight: 600;
}
</style>
