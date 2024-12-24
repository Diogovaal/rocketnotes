import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import  GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'

import theme from './styles/theme'


import { Routes } from './routes/index'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <AuthProvider>
    <Routes/>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
