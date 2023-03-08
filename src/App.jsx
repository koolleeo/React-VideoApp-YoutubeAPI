import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components'

function App() {

  return (
    <BrowserRouter>
    {/* Box (MUI) acts as a div container */}
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      {/* set up routes */}
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )

}

export default App
