import Link from "next/link"
import { HomeFillIcon } from '@primer/octicons-react'
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { path: '/about', text: 'About', },
  { path: '/pricing', text: 'Pricing', },
  { path: '/contact', text: 'Contact', }
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded items-center">

      <Link href='/' className='flex items-center'>
        <HomeFillIcon size={24} className='mr-2'/>
        <span>Home</span>
      </Link>

      <div className="flex flex-1" />

      {
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))
      }

    </nav>
  )
}