/**
 * Утилиты для работы с SEO мета-тегами
 */

/**
 * Обновляет или создает мета-тег
 * @param {string} attribute - 'name' или 'property'
 * @param {string} value - значение атрибута (например, 'description' или 'og:title')
 * @param {string} content - содержимое мета-тега
 */
export const updateMetaTag = (attribute, value, content) => {
  const selector = attribute === 'name' 
    ? `meta[name="${value}"]` 
    : `meta[property="${value}"]`;
  let meta = document.querySelector(selector);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

/**
 * Обновляет или создает canonical URL
 * @param {string} url - канонический URL
 */
export const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

