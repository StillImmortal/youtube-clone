'use client'

import { Box } from "@mui/material";

// Styles
import "@styles/globals.scss"

// Components
import Navbar from "@components/Navbar";

export const metadata = {
  title: "YouTube Clone",
  description: "Watch, Enjoy & Be Happy",
};

const RootLatout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <Box sx={{ backgroundColor: '#000'}}>
          <Navbar />
          <main>
            {children}
          </main>
        </Box>
      </body>
    </html>

  )
}

export default RootLatout