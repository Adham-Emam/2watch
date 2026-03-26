import { UserPlus, Tv, Sparkles, ChevronDown } from 'lucide-react'

const cards = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Invite Your Partner',
    description:
      "Send a quick invite link. They'll join your shared watchlist in seconds.",
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: 'Add Your Platforms',
    description:
      'Connect Netflix, Hulu, Disney+, and all your favorite streaming services.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Get Recommendations',
    description: '2Watch recommends shared hits based on what you both love.',
  },
]
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative container py-30">
      <h2 className="section-title text-center">
        How It <span>Works</span>
      </h2>
      <p className="text-center text-lg mx-auto w-fit">
        Everything you need to make movie nights magical
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="glass-card relative px-4 py-16 rounded-xl"
          >
            <div className="text-2xl font-bold absolute top-0 left-1/2 -translate-1/2 btn-gradient-rose text-white w-12 aspect-square rounded-full flex items-center justify-center">
              {index + 1}
            </div>
            <div className="bg-accent/20 text-primary border w-fit mx-auto p-4 rounded-xl">
              {card.icon}
            </div>
            <h3 className="text-xl text-center font-semibold mt-3 mb-5">
              {card.title}
            </h3>
            <p className="opacity-70 text-center">{card.description}</p>
            {index !== cards.length - 1 && (
              <ChevronDown className="absolute right-1/2 md:right-0 bottom-0 md:bottom-1/2 translate-y-1/2 md:translate-y-1/2 translate-x-1/2 md:translate-x-2/3 md:-rotate-90 w-12 h-12 text-primary" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
