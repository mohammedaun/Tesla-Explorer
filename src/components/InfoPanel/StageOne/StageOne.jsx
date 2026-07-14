const CARDS = [
  {
    title: 'Aluminum & steel body',
    text: 'A mixed-material shell — aluminum panels up front for weight savings, high-strength steel through the cabin for crash structure.',
  },
  {
    title: 'Glass roof',
    text: 'A single curved glass panel replaces the traditional steel roof, adding headroom and letting light fill the cabin.',
  },
  {
    title: 'Aerodynamics',
    text: 'Smooth, low-drag surfaces and flush door handles reduce wind resistance, stretching range at highway speed.',
  },
  {
    title: 'Paint process',
    text: 'Panels pass through multiple robotic coats — primer, base color, and clear coat — cured between each pass.',
  },
  {
    title: 'Wheels & tyres',
    text: 'Lightweight alloy wheels wrapped in low-rolling-resistance tyres, balancing efficiency with grip and ride comfort.',
  },
]

export default function StageOne() {
  return (
    <div className="info-grid">
      {CARDS.map((c) => (
        <div className="info-card" key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  )
}
