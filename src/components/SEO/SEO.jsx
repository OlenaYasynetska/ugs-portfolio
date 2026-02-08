import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ROUTE_SEO = {
  '/': { titleKey: 'home', descKey: 'seo_home_description' },
  '/about': { titleKey: 'about', descKey: 'seo_about_description' },
  '/contact': { titleKey: 'contacts', descKey: 'seo_contact_description' },
  '/language-courses': { titleKey: 'language_courses', descKey: 'seo_language_courses_description' },
  '/infocenter': { titleKey: 'info_center_title', descKey: 'seo_infocenter_description' },
};

export default function SEO() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const siteName = t('seo_site_name');

  useEffect(() => {
    const path = Object.keys(ROUTE_SEO).find(
      (key) => pathname === key || pathname.startsWith(key + '/')
    ) || '/';
    const config = ROUTE_SEO[path];

    if (config) {
      const title = `${t(config.titleKey)} | ${siteName}`;
      const description = t(config.descKey);

      document.title = title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }
  }, [pathname, i18n.language]);

  return null;
}
