import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { LocaleSwitcherSelect } from './locale-switcher-select';
import { SelectItem } from "@/components/ui/select"

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const flags = {
    en: "🇺🇸",
    es: "🇦🇷",
    pt: "🇧🇷"
  };

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          <span className="flex items-center gap-2">
            <span>{flags[cur as keyof typeof flags]}</span>
            <span>{t('locale', { locale: cur })}</span>
          </span>
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
