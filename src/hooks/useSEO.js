import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTag, updateCanonical } from '../utils/seoUtils';

/**
 * Хук для управления SEO мета-тегами страницы
 * @param {Object} config - Конфигурация SEO
 * @param {Object} config.titles - Объект с заголовками для разных языков { uk, de, en }
 * @param {Object} config.descriptions - Объект с описаниями для разных языков
 * @param {Object} config.keywords - Объект с ключевыми словами для разных языков
 * @param {string} config.baseUrl - Базовый URL сайта
 * @param {string} config.currentLang - Текущий язык (uk, de, en)
 */
export const useSEO = ({ titles, descriptions, keywords, baseUrl, currentLang }) => {
  const location = useLocation();

  useEffect(() => {
    const pageUrl = `${baseUrl}${location.pathname}`;
    const lang = currentLang || 'uk';

    // Обновление title
    const title = titles[lang] || titles.uk;
    document.title = title;
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'twitter:title', title);

    // Обновление description
    const description = descriptions[lang] || descriptions.uk;
    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'twitter:description', description);

    // Обновление keywords
    const keywordsText = keywords[lang] || keywords.uk;
    updateMetaTag('name', 'keywords', keywordsText);

    // Обновление URL
    updateMetaTag('property', 'og:url', pageUrl);
    updateMetaTag('property', 'twitter:url', pageUrl);

    // Canonical URL
    updateCanonical(pageUrl);
  }, [currentLang, location.pathname, titles, descriptions, keywords, baseUrl]);
};

