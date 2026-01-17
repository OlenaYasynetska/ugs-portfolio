import { useState } from 'react';

export function usePostState() {
  const [showFull, setShowFull] = useState(false);
  const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
  const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
  const [showFullAustriaNationalDay, setShowFullAustriaNationalDay] = useState(false);
  const [showFullGregoryCalendar, setShowFullGregoryCalendar] = useState(false);
  const [showFullUkrainianLanguage, setShowFullUkrainianLanguage] = useState(false);
  const [showFullAustriaFacts1, setShowFullAustriaFacts1] = useState(false);
  const [showFullAustriaFacts2, setShowFullAustriaFacts2] = useState(false);
  const [showFullEurovision, setShowFullEurovision] = useState(false);
  
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
    setShowFullUkrainianLanguage,
    showFullAustriaFacts1,
    setShowFullAustriaFacts1,
    showFullAustriaFacts2,
    setShowFullAustriaFacts2,
    showFullEurovision,
    setShowFullEurovision
  };
}
