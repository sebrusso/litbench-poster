const ablationData = [
  { condition: 'Full LitBench (debiased)', accuracy: '78%', highlight: true },
  { condition: 'Without length debiasing', accuracy: '70%', highlight: false },
  { condition: 'Upvotes only (no debiasing)', accuracy: '65%', highlight: false },
];

export default function AblationTable() {
  return (
    <table className="data-table text-sm">
      <thead>
        <tr>
          <th>Training Condition</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>
        {ablationData.map((row, i) => (
          <tr key={i} className={row.highlight ? 'highlight' : ''}>
            <td>{row.condition}</td>
            <td className="font-semibold">{row.accuracy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
