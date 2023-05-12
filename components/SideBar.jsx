'use client'

import { useState } from "react"
import { Stack } from "@mui/material"

// Constants
import { categories } from "@utils/constants"

const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const chooseCategory = (name) => {
    setSelectedCategory(name)
  }

  return (
    <Stack
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { sx: 'row', md: 'column' }
      }}  
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => chooseCategory(category.name)}
          className="category-btn flex items-center justify-start text-white"
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'transparent'
          }}
        >
          <span
            className="mr-4"
            style={{
              color: category.name === selectedCategory ? 'white' : 'red'
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8'
              
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar