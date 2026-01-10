'use client';

import { useState } from 'react';
import FigureModal from './FigureModal';

interface FigureCardProps {
  figureNumber: number;
  title: string;
  caption: string;
  children: React.ReactNode;
  expandedContent?: React.ReactNode;
}

export default function FigureCard({ figureNumber, title, caption, children, expandedContent }: FigureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="figure-container figure-clickable"
        onClick={() => setIsExpanded(true)}
      >
        <div className="p-3">
          {children}
        </div>
        <div className="figure-caption">
          <span className="figure-label">Figure {figureNumber}:</span> {caption}
          <span className="text-xs text-blue-600 ml-2">[click to enlarge]</span>
        </div>
      </div>

      <FigureModal
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
        title={`Figure ${figureNumber}: ${title}`}
        caption={caption}
      >
        {expandedContent || children}
      </FigureModal>
    </>
  );
}
