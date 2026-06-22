import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'hi'];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  
  // Validate that the incoming `locale` parameter is valid
  let finalLocale: string = locale || 'en';
  if (!locales.includes(finalLocale)) {
    finalLocale = 'en';
  }

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});
