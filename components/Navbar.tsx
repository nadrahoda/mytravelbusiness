import Link from 'next/link'
import Image from 'next/image'
import {
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaChevronDown,
  FaArrowRight
} from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Destination', href: '#', hasDropdown: true },
  { label: 'Our Services', href: '#', hasDropdown: true },
  { label: 'Activities', href: '#', hasDropdown: true },
  { label: 'Pages', href: '#', hasDropdown: true },
  { label: 'Blog', href: '#', hasDropdown: true },
  { label: 'Contact Us', href: '#' }
]

export default function Navbar () {
  return (
    <header className='w-full shadow-sm'>
      {/* Top info bar */}
      <div className='w-full bg-white text-gray-700 text-xs sm:text-xs font-semibold border-b border-gray-200'>
        <div className='max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 py-1 px-4'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-black/90' />
              <span className='whitespace-nowrap'>Patna, Bihar</span>
            </div>

            <span className='h-5 w-px bg-black/30' aria-hidden='true' />

            <div className='flex items-center gap-2'>
              <FaClock className='text-black/90' />
              <span className='whitespace-nowrap'>
                Sun to Friday: 8.00 am - 7.00 pm
              </span>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <button className='hover:text-gray-500/80 transition-colors cursor-pointer'>
              FAQ
            </button>
            <span className='h-5 w-px bg-black/30' aria-hidden='true' />
            <button className='hover:text-gray-500/80 transition-colors cursor-pointer'>
              Support
            </button>
            <span className='h-5 w-px bg-black/30' aria-hidden='true' />
            <button className='flex items-center gap-1 hover:text-gray-500/80 transition-colors cursor-pointer'>
              <span>Sign in / Register</span>
              <FaUser />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className='w-full bg-white text-black'>
        <div className='mx-auto flex items-center justify-start px-4 py-0 gap-3'>
          {/* Logo + brand background */}
          <Link
            href='#'
            className='relative isolate flex items-center gap-2 shrink-0 pl-4 pr-14 py-2 md:pl-6 md:pr-20 md:py-1'
          >
            {/* Decorative wave behind brand (matches screenshot) */}
            <span
              aria-hidden='true'
              className='pointer-events-none absolute inset-y-0 -left-10 w-[280px] md:w-[340px] -scale-y-100'
            >
              <svg
                viewBox='0 0 400 160'
                preserveAspectRatio='none'
                className='h-full w-full'
              >
                <path
                  d='M0,0 H360 C330,18 320,38 338,58 C370,94 330,138 250,154 C170,170 80,162 0,160 Z'
                  fill='rgb(54 142 224 / 0.9)'
                />
              </svg>
            </span>

            <div className='relative h-12 w-12 md:h-18 md:w-18 rounded-full overflow-hidden '>
              <Image
                src='/images/logo.png'
                alt='Tourm logo'
                fill
                sizes='48px'
                className='object-contain p-0'
              />
            </div>
            <div className='flex flex-col leading-tight'>
              <span className='font-semibold text-lg md:text-lg text-white z-10'>
                भ्रMan Sukh
              </span>
              <span className='text-xs md:text-xs text-white z-10'>
                Explore World
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <div className='hidden lg:flex items-center gap-4 text-sm font-medium'>
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className='relative flex items-center gap-1 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-700 after:transition-transform after:duration-200 hover:after:scale-x-100'
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <FaChevronDown className='text-[10px] mt-0.5' />
                )}
              </Link>
            ))}
          </div>

          {/* Book Now button */}
          <div className='flex items-center gap-3 ml-auto'>
            <button className='hidden md:inline-flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 transition-colors'>
              Book Now <FaArrowRight className='text-white ml-2' />
            </button>

            {/* Simple mobile menu icon placeholder (no interactivity yet) */}
            <div className='flex lg:hidden flex-col gap-1.5 cursor-pointer'>
              <span className='w-5 h-0.5 bg-white rounded-full' />
              <span className='w-5 h-0.5 bg-white rounded-full' />
              <span className='w-5 h-0.5 bg-white rounded-full' />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
