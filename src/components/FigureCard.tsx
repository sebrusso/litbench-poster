'use client';

import { useState } from 'react';
import FigureModal from './FigureModal';

interface FigureCardProps {
  title: string;
  caption: string;
  children: React.ReactNode;
  expandedContent?: React.ReactNode;
}

export default function FigureCard({ title, caption, children, expandedContent }: FigureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="figure-card poster-section p-4 cursor-pointer group"
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Click to expand
          </span>
        </div>
        <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
          {children}
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{caption}</p>
      </div>

      <FigureModal
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
        title={title}
        caption={caption}
      >
        {expandedContent || children}
      </FigureModal>
    </>
  );
}
