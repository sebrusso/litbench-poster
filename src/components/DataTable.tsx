interface TableRow {
  model: string;
  type: string;
  accuracy: string;
  highlight?: boolean;
}

const data: TableRow[] = [
  { model: 'BT (Llama-8B)', type: 'Trained', accuracy: '78%', highlight: true },
  { model: 'GenRM (Qwen)', type: 'Trained', accuracy: '78%', highlight: true },
  { model: 'Claude-3.5-Sonnet', type: 'Zero-shot', accuracy: '73%' },
  { model: 'GenRM-CoT', type: 'Trained', accuracy: '72%' },
  { model: 'GPT-4.1', type: 'Zero-shot', accuracy: '71%' },
  { model: 'DeepSeek-R1', type: 'Zero-shot', accuracy: '70%' },
  { model: 'Llama-3.1-8B', type: 'Zero-shot', accuracy: '60%' },
  { model: 'Qwen-2.5-7B', type: 'Zero-shot', accuracy: '58%' },
  { model: 'Gemma-7B', type: 'Zero-shot', accuracy: '56%' },
  { model: 'Random Baseline', type: '—', accuracy: '50%' },
];

export default function DataTable() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Type</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={row.highlight ? 'highlight' : ''}>
            <td className="font-medium">{row.model}</td>
            <td>{row.type}</td>
            <td className="font-semibold">{row.accuracy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
