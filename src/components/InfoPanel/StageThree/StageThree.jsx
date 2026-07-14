const CARDS = [
  {
    title: 'Bare chassis frame',
    text: 'Strip away the wiring and suspension springs, and what\'s left is the rigid rail structure everything else bolts onto.',
  },
  {
    title: 'Wheels & tyres',
    text: 'The rolling assembly stays mounted through every stage — alloy rims wrapped in low-rolling-resistance rubber.',
  },
  {
    title: 'Brake discs & calipers',
    text: 'Each wheel hub carries its own disc and caliper, clamping down to slow the car independent of the motor\'s regenerative braking.',
  },
  {
    title: 'Corner-mounted hardware',
    text: 'With the body and internals removed, you can see how compactly the brake, hub, and rim hardware packages into each wheel well.',
  },
]

export default function StageThree() {
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