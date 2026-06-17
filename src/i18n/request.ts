import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'hi'];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  console.log("i18n request config locale:", locale);
  
  // Validate that the incoming `locale` parameter is valid
  let finalLocale: string = locale || 'en';
  if (!locales.includes(finalLocale)) {
    console.log("Locale not found or undefined, falling back to 'en'");
    finalLocale = 'en';
  }

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});
