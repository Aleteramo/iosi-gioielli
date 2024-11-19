'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MaterialInfoProps {
  metal: string;
  purity: string;
}

const materialDescriptions: Record<string, string> = {
  'Oro Bianco': 'L\'oro bianco è una lega preziosa composta da oro puro e metalli bianchi come il palladio o il rodio, che conferiscono il caratteristico colore argenteo mantenendo il valore dell\'oro.',
  'Oro Rosa': 'L\'oro rosa deve il suo colore caratteristico all\'aggiunta di rame alla lega d\'oro. Questa combinazione crea una tonalità calda e romantica, molto apprezzata nei gioielli contemporanei.',
  'Oro Giallo': 'L\'oro giallo è la forma più pura e tradizionale dell\'oro nei gioielli. La sua colorazione naturale è ottenuta dalla lega di oro puro con piccole quantità di argento e rame.',
  'Platino': 'Il platino è uno dei metalli più preziosi e puri utilizzati in gioielleria. È naturalmente bianco, ipoallergenico e mantiene la sua lucentezza nel tempo.',
};

const formatPurity = (purity: string): string => {
  // Converte "18kt" in "18 carati"
  return purity.replace('kt', ' carati');
};

export default function MaterialInfo({ metal, purity }: MaterialInfoProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const description = materialDescriptions[metal] || 'Un metallo prezioso di alta qualità utilizzato nella creazione di gioielli raffinati.';

  return (
    <div className="relative inline-block">
      <span
        className="cursor-help border-b border-dotted border-gray-400"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {metal} {formatPurity(purity)}
      </span>
      
      {showTooltip && (
        <div className="absolute z-10 w-72 p-4 mt-2 -left-2 transform -translate-x-1/4
                      bg-black/95 border border-golden/20 rounded-lg shadow-xl">
          <p className="text-sm text-gray-300 mb-3">
            {description}
          </p>
          <Link 
            href="/materiali"
            className="text-xs text-golden hover:text-golden/80 transition-colors duration-200"
          >
            Scopri di più sui nostri materiali →
          </Link>
        </div>
      )}
    </div>
  );
}
