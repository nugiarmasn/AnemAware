import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Frontend Pages Only
import HomeScreen from './frontend/pages/HomeScreen';
import AnemiaProfile from './frontend/pages/AnemiaProfile';
import Education from './frontend/pages/Education';
import Articles from './frontend/pages/Articles';
import ArticleDetail from './frontend/pages/ArticleDetail';
import VideoEducation from './frontend/pages/VideoEducation';
import About from './frontend/pages/About';
import Contact from './frontend/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/anemia-profile" element={<AnemiaProfile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/videos" element={<VideoEducation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;