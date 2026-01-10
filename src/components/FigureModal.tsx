'use client';

import { useEffect, useCallback } from 'react';

interface FigureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  caption?: string;
}

export default function FigureModal({ isOpen, onClose, title, children, caption }: FigureModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white max-w-5xl w-full max-h-[90vh] overflow-auto shadow-xl border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
          <h3 className="font-semibold font-sans">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          {children}
          {caption && (
            <p className="mt-4 text-sm text-gray-600 border-t pt-3">
              <span className="font-semibold">Caption:</span> {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
