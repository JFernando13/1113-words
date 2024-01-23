import { ui, defaultLanguage } from './ui';
import { languages } from './ui';

export const getTranslation = (locale: string) => {

  if (locale === languages.es) return ui.es
  if (locale === languages.en) return ui.en

  return ui[defaultLanguage]
}