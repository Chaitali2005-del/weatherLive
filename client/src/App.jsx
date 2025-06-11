import React from 'react'; // Import React explicitly if necessary
import Who from './Who';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Article from './Article';
import Climate from './Climate.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import News_full from './news_full.jsx';
import Gallery from './Gallery'; // ✅ No need to include .jsx

import Map from './Map.jsx';
import News from './News.jsx';
import Map_detail from './Map_detail.jsx'
function App() {
  return (
      <Router>
          <Header/>
        {/* ✅ Correct placement outside <Routes> */}
        <Routes>
        
          <Route path='/' element={<><Who /><Footer /></>} />
          <Route path='/Who' element={<><Who /><Footer /></>} />

          <Route path='/Article' element={<><Article /><Footer /></>} />
          <Route path='/climate' element={<><Climate /><Footer /></>} />
          <Route path='/contact' element={<><Contact /><Footer /></>} />
          <Route path='/news_full' element={<><News_full /></>} />
          <Route path='/Gallery' element={<><Gallery /><Footer /></>} />
          <Route path='/Map' element={<><Map /><Footer /></>} />
          <Route path='/Map_detail' element={<><Map_detail/><Footer /></>} />
          <Route path='/Footer' element={<Footer />} />
           <Route path='/News' element={<><News /><Footer /></>} />
        </Routes>
      </Router>
  );
}

export default App;