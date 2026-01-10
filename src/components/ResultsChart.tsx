'use client';

import { useState, useEffect } from 'react';

interface Result {
  model: string;
  accuracy: number;
  category: 'trained' | 'ots-large' | 'ots-small';
}

const results: Result[] = [
  { model: 'Trained Reward Models', accuracy: 78, category: 'trained' },
  { model: 'Claude 3.5 Sonnet', accuracy: 73, category: 'ots-large' },
  { model: 'GPT-4.1', accuracy: 71, category: 'ots-large' },
  { model: 'DeepSeek-R1', accuracy: 70, category: 'ots-large' },
  { model: 'Llama-3.1-8B', accuracy: 60, category: 'ots-small' },
  { model: 'Qwen-2.5-7B', accuracy: 58, category: 'ots-small' },
  { model: 'Gemma-7B', accuracy: 56, category: 'ots-small' },
  { model: 'Random Baseline', accuracy: 50, category: 'ots-small' },
];

const categoryColors = {
  'trained': 'bg-gradient-to-r from-emerald-500 to-emerald-600',
  'ots-large': 'bg-gradient-to-r from-blue-500 to-blue-600',
  'ots-small': 'bg-gradient-to-r from-gray-400 to-gray-500',
};

const categoryLabels = {
  'trained': 'Trained Reward Model',
  'ots-large': 'Large OTS Judge',
  'ots-small': 'Small OTS / Baseline',
};

export default function ResultsChart({ animated = true }: { animated?: boolean }) {
  const [mounted, setMounted] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setMounted(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  return (
    <div className="space-y-3">
      {results.map((result) => (
        <div key={result.model} className="flex items-center gap-3">
          <div className="w-40 text-sm font-medium text-gray-700 text-right">
            {result.model}
          </div>
          <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`result-bar h-full ${categoryColors[result.category]} rounded-full flex items-center justify-end pr-3`}
              style={{ width: mounted ? `${result.accuracy}%` : '0%' }}
            >
              <span className="text-white text-sm font-bold">{result.accuracy}%</span>
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${categoryColors[key as keyof typeof categoryColors]}`} />
            <span className="text-xs text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
