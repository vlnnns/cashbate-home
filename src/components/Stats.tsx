const stats = [
    { id: 1, name: 'Faster sales with updated kitchens/baths', value: '30%' },
    { id: 2, name: 'More offers for move-in ready homes', value: '17%' },
    { id: 3, name: 'ROI Interior Painting', value: '60–70%' },
    { id: 4, name: 'ROI Flooring Updates', value: '80%' },
]

export default function Example() {
    return (
        <div className="relative isolate overflow-hidden text-white py-24 sm:py-32">
            <img
                alt=""
                src="/stats-bg.png"
                className="absolute inset-0 -z-10 size-full object-cover opacity-100"
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                        The Power <br/>
                        of Cosmetic Updates
                    </h2>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/60 pl-6">
                            <dt className="text-sm/6 text-white">{stat.name}</dt>
                            <dd className="order-first text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
                <p className="mt-20 text-xs text-white/70">Sources: National Association of Realtors, Zillow Research, Appraisal Institute.</p>
            </div>
        </div>
    )
}
