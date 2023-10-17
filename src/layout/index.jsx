import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return <Box sx={{ width: '100vw', height: '100vh' }}>
    <CssBaseline />
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </Box>
}
export default Layout