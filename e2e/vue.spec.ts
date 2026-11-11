import { test, expect } from '@playwright/test'

test.describe('in English', () => {
  test.use({ locale: 'en-US', timezoneId: 'America/New_York' })

  test('shows the landing page hero', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText('Security platforms, deployed and supported.')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('floats the compact nav in after scrolling', async ({ page }) => {
    await page.goto('/')
    const compactNav = page.getByRole('navigation', { name: 'Main, compact' })
    await expect(compactNav).toBeHidden()
    await page.mouse.wheel(0, 600)
    await expect(compactNav).toBeVisible()
  })

  test('switches language from the header menu and remembers it', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Language: English' }).click()
    await page.getByRole('menuitemradio', { name: '日本語' }).click()
    await expect(page.locator('h1')).toHaveText('セキュリティ基盤を、導入から運用支援まで。')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja')

    await page.reload()
    await expect(page.locator('h1')).toHaveText('セキュリティ基盤を、導入から運用支援まで。')
  })
})

test.describe('visiting from Brazil', () => {
  test.use({ locale: 'en-US', timezoneId: 'America/Sao_Paulo' })

  test('starts in Brazilian Portuguese', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText(
      'Plataformas de segurança, implantadas e com suporte.',
    )
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  })
})

test.describe('with a Japanese browser', () => {
  test.use({ locale: 'ja-JP', timezoneId: 'Europe/London' })

  test('starts in Japanese', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText('セキュリティ基盤を、導入から運用支援まで。')
  })
})
