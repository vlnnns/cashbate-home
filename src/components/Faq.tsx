import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import MainButton from './MainButton';

const faqs = [
    {
        question: "Do I have to pay anything upfront?",
        answer:
            "No. CASHBATE covers cosmetic upgrades up to the base solution value, with payment at closing. If costs go beyond that, the seller covers the difference at the time of work.",
    },
    {
        question: 'What happens if my home doesn’t sell?',
        answer:
            'If your qualified home doesn’t sell within 6 months at market price, you owe $0 for our contribution.',
    },
    {
        question: 'Can I use CASHBATE if I already have an agent?',
        answer:
            'Yes. If you already have an agent, we’ll work with them. If not, we’ll connect you with a trusted CASHBATE partner agent.',
    },
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
                        Got Questions?
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            {/* Иконки для раскрытия/сворачивания */}
                                            <PlusSmallIcon
                                                aria-hidden="true"
                                                className="w-6 h-6 group-open:hidden" />
                                            <MinusSmallIcon
                                                aria-hidden="true"
                                                className="w-6 h-6 group-open:block hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel
                                    as="dd"
                                    className="mt-2 pr-12 transition-all duration-300 ease-in-out">
                                    <p className="text-base text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>



            </div>
        </div>
    )
}
