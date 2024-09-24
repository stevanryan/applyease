import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import defaultProfile from "../../images/defaultProfile.png"

const Navbar = () => {
  const location = useLocation()

  const authenticatedUser = localStorage.getItem('userToken')

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('userToken')
    navigate('/')
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="backdrop-blur-md bg-white bg-opacity-75 fixed w-full z-[999] top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-4 py-3 h-18 relative">
        <div>
          <a href="/" className="bg-gradient-to-r from-purple-500 via-purple-700 to-red-500 text-transparent bg-clip-text flex items-center space-x-3 rtl:space-x-reverse text-black opacity-90 font-bold">
            <p className="text-2xl mr-[-12px]">Apply</p>
            <p className="text-2xl">Ease</p>
          </a>
        </div>
        <div>
          {!authenticatedUser ? <ul className="flex justify-center items-center">
            {location.pathname != '/register-role' && location.pathname != '/register/applicant' && location.pathname != '/register/company' && <li className="text-black rounded-md hover:font-bold transition-[1s]">
              <a href="/register-role"><button className="w-20 h-10">Sign-up</button></a>
            </li>}
            {location.pathname != '/login' && <li className="ms-2 custom-hover-button text-white rounded-md bg-purple-700">
              <a href="/login"><button className="w-20 h-10">Login</button></a>
            </li>
            }
          </ul> 
          :  
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-purple-500" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={defaultProfile} alt="user photo" onClick={toggleDropdown} />
              </button>
              <div className={`z-50 ${ isDropdownOpen ? "" : "hidden" } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-100 dark:divide-gray-600 absolute right-4 mt-2`} id="user-dropdown"
                style={{ boxShadow: '0px 2px 8px 1px rgba(126, 34, 206, .2)' }}>
                <div className="px-4 py-3 text-sm text-black">
                  <h1 className="text-md font-medium">Static John Doe</h1>
                  <h2 className="text-sm font-light">staticjohndoe@gmail.com</h2>
                </div>
                <div className="cursor-pointer">
                  <button
                    className="w-full block px-4 py-2 text-sm text-black hover:bg-purple-200 rounded-b-lg cursor-pointer"
                    onClick={handleLogout}>Logout
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar