'use client';

import { useState, useEffect } from 'react';

interface Result {
  model: string;
  accuracy: number;
  category: 'trained' | 'ots-large' | 'ots-small';
  note?: string;
}

const results: Result[] = [
  { model: 'BT (Llama-8B)', accuracy: 78, category: 'trained', note: 'Trained' },
  { model: 'GenRM (Qwen)', accuracy: 78, category: 'trained', note: 'Trained' },
  { model: 'Claude-3.5-Sonnet', accuracy: 73, category: 'ots-large' },
  { model: 'GenRM-CoT', accuracy: 72, category: 'trained' },
  { model: 'GPT-4.1', accuracy: 71, category: 'ots-large' },
  { model: 'DeepSeek-R1', accuracy: 70, category: 'ots-large' },
  { model: 'Llama-3.1-8B', accuracy: 60, category: 'ots-small' },
  { model: 'Qwen-2.5-7B', accuracy: 58, category: 'ots-small' },
  { model: 'Gemma-7B', accuracy: 56, category: 'ots-small' },
  { model: 'Random', accuracy: 50, category: 'ots-small' },
];

const barColors = {
  'trained': 'bar-trained',
  'ots-large': 'bar-ots-large',
  'ots-small': 'bar-ots-small',
};

export default function ResultsChart({ animated = true }: { animated?: boolean }) {
  const [mounted, setMounted] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setMounted(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const maxAccuracy = 85;

  return (
    <div className="space-y-1.5">
      {results.map((result) => (
        <div key={result.model} className="flex items-center gap-2">
          <div className="w-32 text-xs text-right font-sans truncate" title={result.model}>
            {result.model}
          </div>
          <div className="flex-1 h-5 bg-gray-100 relative">
            <div
              className={`result-bar ${barColors[result.category]} absolute left-0 top-0 h-full`}
              style={{ width: mounted ? `${(result.accuracy / maxAccuracy) * 100}%` : '0%' }}
            />
            <span className="absolute right-1 top-0 h-full flex items-center text-xs font-sans font-semibold text-gray-700">
              {result.accuracy}%
            </span>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="flex gap-4 mt-3 pt-2 border-t border-gray-200 text-xs font-sans">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bar-trained" />
          <span>Trained RM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bar-ots-large" />
          <span>Large OTS</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bar-ots-small" />
          <span>Small OTS</span>
        </div>
      </div>
    </div>
  );
}
