import { news } from '../data/db';

export function usePostTexts(lang) {
  const getKolschitzkyText = (showFull) => {
    const fullText = news.find(item => item.id === 42)?.text[lang] || 
      'У Відні є вулиця Kolschitzky-Gasse, названа на честь українця Юрія-Франца Кульчицького. Його сміливий вчинок не лише змінив хід воєнних подій, а й започаткував у столиці Австрії традицію кавової культури.\n\nПід час облоги Відня турками у 1683 році Кульчицький проявив неабияку відвагу. Коли місто потерпало від нестачі їжі та хвороб, він добровільно погодився пробратися через турецькі позиції, аби встановити контакт із герцогом Карлом V Лотаринзьким.\n\nЦе рішення стало переломним: міська рада Відня відмовилася від капітуляції, а вже 12 вересня війська під проводом Яна III Собеського зняли облогу.\n\n☕️На знак вдячності віденці дозволили Кульчицькому відкрити першу кав\'ярню в місті. Саме з цього моменту бере початок традиція кавової культури у Відні.';
    
    if (showFull) {
      return fullText;
    }
    
    const firstPart = fullText.split('\n\n')[0];
    return firstPart + '...';
  };
  
  const getDiplomaText = (showFull) => {
    const fullText = news.find(item => item.id === 45)?.text[lang] || 
      'Щоб отримати дублікат диплому в Україні...';
    
    if (showFull) {
      return fullText;
    }
    
    return fullText.substring(0, 500) + '...';
  };
  
  return {
    getKolschitzkyText,
    getDiplomaText
  };
}
