import { MenuOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'


const Header = () => {
    const [active, setActive] = useState(false)
    const showMenu = ()=>{
        setActive(!active)
    }
  return (
    <div className=' w-full absolute lg:flex items-center p-4 flex justify-between'>
        <span className=' text-4xl font-extrabold uppercase text-white select-none'>
            green
        </span>

        <nav>
            <ul className=' hidden lg:flex gap-8 uppercase p-6 text-white font-medium '>
                <li><Link to='/'>pricing</Link></li>
                <li><Link to='/'>client</Link></li>
                <li><Link to='/'>works</Link></li>
                <li><Link to='/'>testimonials</Link></li>
                <li><Link to='/'>about</Link></li>
                <li><Link to='/login'>login</Link></li>
            </ul>
            <NavMobile showMenu={showMenu} active={active} />
        </nav>

        <div className='lg:hidden scale-150'>
            <MenuOutlined onClick={showMenu} className=' cursor-pointer text-white'/>
        </div>
    </div>
  )
}

export default Header