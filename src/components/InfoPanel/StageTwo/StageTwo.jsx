const CARDS = [
  {
    title: 'Structural battery pan',
    text: 'The flat aluminum tray running the length of the car doubles as structure and battery housing, keeping weight low and central.',
  },
  {
    title: 'High-voltage wiring',
    text: 'Orange-jacketed cables route power from the battery pan out to the rest of the car — a visible reminder this is an EV, not a combustion car.',
  },
  {
    title: 'Suspension springs',
    text: 'Coil springs sit at each wheel hub, absorbing bumps and keeping the tyres in contact with the road.',
  },
  {
    title: 'Chassis frame rails',
    text: 'Rails run the perimeter of the platform, tying the suspension, battery pan, and body mounting points into one rigid structure.',
  },
  {
    title: 'Wheel & brake assembly',
    text: 'Each corner carries a disc, caliper, and alloy rim — visible now that the exterior panels are out of the way.',
  },
]

export default function StageTwo() {
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