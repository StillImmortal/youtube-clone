import { Stack } from "@mui/material"
import Link from "next/link"

// Logo
import { logo } from "@utils/constants"

// Components
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <Stack 
      direction={'row'} 
      alignItems={'center'} 
      p={2} 
      sx={{ 
        position: 'sticky', 
        backgroundColor: '#000', 
        top: 0, 
        justifyContent: 'space-between'
      }}
    >
      <Link href={'/'} className='flex items-center'>
        <img src={logo} alt="logo" className="h-[45px]"/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar