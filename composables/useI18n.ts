import { en } from '~/locales/en';
import { de } from '~/locales/de';

export type Locale = 'en' | 'de';

const translations = { en, de } as const;

export function useI18n() {
  const locale = useState<Locale>('locale', () => 'en');
  const cfg = useRuntimeConfig();

  if (process.client) {
    const stored = localStorage.getItem('portfolio-locale');
    if (stored === 'en' || stored === 'de') {
      locale.value = stored;
    }
  }

  function t(key: string): string {
    const dict = translations[locale.value];
    const parts = key.split('.');
    let node: any = dict;
    for (const p of parts) {
      node = node?.[p];
      if (node === undefined) return key;
    }
    return typeof node === 'string' ? node : key;
  }

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'de' : 'en';
    if (process.client) {
      localStorage.setItem('portfolio-locale', locale.value);
    }
  }

  const devConfig = computed(() => {
    const deCfg = (cfg.public as any).devDe;
    return locale.value === 'de' && deCfg ? deCfg : cfg.public.dev;
  });

  return { locale, t, toggleLocale, devConfig };
}
