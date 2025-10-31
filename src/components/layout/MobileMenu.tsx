'use client'

// 1. Импортируем все клиентские зависимости
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import MainButton from '@/components/ui/MainButton'
import Link from 'next/link'

// 2. Определяем тип для пропсов
type NavItem = {
    name: string
    href: string
}

// 3. Компоненты для мобильного меню
function MobileNavLink({
                           href,
                           children,
                       }: {
    href: string
    children: React.ReactNode
}) {
    return (
        <PopoverButton
            as={Link}
            href={href}
            className="block p-2 text-lg font-semibold text-gray-900 hover:text-blue-500"
        >
            {children}
        </PopoverButton>
    )
}

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className={clsx(
                'h-3.5 w-3.5 overflow-visible',
                open ? 'stroke-gray-900' : 'stroke-gray-700', // Обычный черный крестик
            )}
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12" // Исправленный path для крестика
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

// 4. ИСПРАВЛЕНИЕ: Добавляем 'export', чтобы Navbar.tsx мог импортировать этот компонент
export function MobileNavigation({ navigation }: { navigation: NavItem[] }) {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>

            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-black/30 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
            >
                {navigation.map((item) => (
                    <MobileNavLink key={item.name} href={item.href}>
                        {item.name}
                    </MobileNavLink>
                ))}
                <hr className="m-2 border-slate-300/40" />
                <MainButton text="Get Started Risk Free >>" />
            </PopoverPanel>
        </Popover>
    )
}

