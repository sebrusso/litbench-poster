export default function PipelineFigure({ expanded = false }: { expanded?: boolean }) {
  const boxClass = expanded
    ? "border border-gray-300 bg-gray-50 p-4 text-center min-w-36"
    : "border border-gray-300 bg-gray-50 p-2 text-center text-xs min-w-20";

  const arrowClass = "text-gray-400 font-sans";

  return (
    <div className={`flex items-center justify-center gap-${expanded ? '3' : '2'} flex-wrap`}>
      <div className={boxClass}>
        <div className={`font-semibold font-sans ${expanded ? 'text-sm' : 'text-xs'}`}>Reddit</div>
        <div className={`text-gray-500 ${expanded ? 'text-xs' : 'text-[10px]'}`}>r/WritingPrompts</div>
        {expanded && <div className="text-xs text-gray-400 mt-1">Raw story pairs</div>}
      </div>

      <span className={arrowClass}>→</span>

      <div className={boxClass}>
        <div className={`font-semibold font-sans ${expanded ? 'text-sm' : 'text-xs'}`}>Filter</div>
        <div className={`text-gray-500 ${expanded ? 'text-xs' : 'text-[10px]'}`}>Post-2023</div>
        {expanded && <div className="text-xs text-gray-400 mt-1">No pretraining overlap</div>}
      </div>

      <span className={arrowClass}>→</span>

      <div className={boxClass}>
        <div className={`font-semibold font-sans ${expanded ? 'text-sm' : 'text-xs'}`}>Debias</div>
        <div className={`text-gray-500 ${expanded ? 'text-xs' : 'text-[10px]'}`}>Vote/Time/Length</div>
        {expanded && <div className="text-xs text-gray-400 mt-1">25%+ upvote margin</div>}
      </div>

      <span className={arrowClass}>→</span>

      <div className={`${boxClass} ${expanded ? 'bg-blue-50 border-blue-300' : 'bg-blue-50 border-blue-200'}`}>
        <div className={`font-semibold font-sans text-blue-800 ${expanded ? 'text-sm' : 'text-xs'}`}>LitBench</div>
        <div className={`text-blue-600 ${expanded ? 'text-xs' : 'text-[10px]'}`}>2,480 pairs</div>
        {expanded && <div className="text-xs text-blue-500 mt-1">Test set</div>}
      </div>

      <span className={arrowClass}>→</span>

      <div className={boxClass}>
        <div className={`font-semibold font-sans ${expanded ? 'text-sm' : 'text-xs'}`}>Evaluate</div>
        <div className={`text-gray-500 ${expanded ? 'text-xs' : 'text-[10px]'}`}>Judges/RMs</div>
        {expanded && <div className="text-xs text-gray-400 mt-1">Preference accuracy</div>}
      </div>
    </div>
  );
}
