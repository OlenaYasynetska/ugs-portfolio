import { useState } from 'react';

export function usePostState() {
  const [showFull, setShowFull] = useState(false);
  const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
  const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
  const [showFullAustriaNationalDay, setShowFullAustriaNationalDay] = useState(false);
  const [showFullGregoryCalendar, setShowFullGregoryCalendar] = useState(false);
  const [showFullUkrainianLanguage, setShowFullUkrainianLanguage] = useState(false);
  
  return {
    showFull,
    setShowFull,
    showFullKolschitzkyText,
    setShowFullKolschitzkyText,
    showFullDiplomaText,
    setShowFullDiplomaText,
    showFullAustriaNationalDay,
    setShowFullAustriaNationalDay,
    showFullGregoryCalendar,
    setShowFullGregoryCalendar,
    showFullUkrainianLanguage,
    setShowFullUkrainianLanguage
  };
}
