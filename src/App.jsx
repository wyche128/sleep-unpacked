import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopPicksHub from './pages/top-picks/index';
import MattressReviewsHub from './pages/mattress-reviews/index';
import ComparisonsHub from './pages/comparisons/index';
import CasperVsPurple from './pages/comparisons/CasperVsPurple';
import SleepGuides from './pages/sleep-guides/index';
import SleepingNakedPost from './pages/sleep-guides/SleepingNakedPost';
import WhatCausesSnoring from './pages/sleep-guides/WhatCausesSnoring';
import WhySleepMatters from './pages/sleep-guides/WhySleepMatters';
import PurpleMattressReview from './pages/mattress-reviews/PurpleMattressReview';
import WinkBedMattressReview from './pages/mattress-reviews/WinkBedMattressReview';
import FiveTruthsWinkBed from './pages/mattress-reviews/FiveTruthsWinkBed';
import FiveTruthsWinkBedEcoCloud from './pages/mattress-reviews/FiveTruthsWinkBedEcoCloud';
import WinkBedEcoCloudLongevityReview from './pages/mattress-reviews/WinkBedEcoCloudLongevityReview';
import DreamCloudLuxeHybridLongevityReview from './pages/mattress-reviews/DreamCloudLuxeHybridLongevityReview';
import BrooklynBeddingAuroraLuxeReview from './pages/mattress-reviews/BrooklynBeddingAuroraLuxeReview';
import LeesaOriginalMattressResearch from './pages/mattress-reviews/LeesaOriginalMattressResearch';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-picks" element={<TopPicksHub />} />
        <Route path="/mattress-reviews" element={<MattressReviewsHub />} />
        <Route path="/comparisons" element={<ComparisonsHub />} />
        <Route path="/comparisons/casper-vs-purple" element={<CasperVsPurple />} />
        <Route path="/sleep-guides" element={<SleepGuides />} />
        <Route path="/sleep-guides/sleeping-naked" element={<SleepingNakedPost />} />
        <Route path="/sleep-guides/what-causes-snoring" element={<WhatCausesSnoring />} />
        <Route path="/sleep-guides/why-sleep-matters" element={<WhySleepMatters />} />
        <Route path="/mattress-reviews/purple-original" element={<PurpleMattressReview />} />
        <Route path="/mattress-reviews/winkbed-original" element={<WinkBedMattressReview />} />
        <Route path="/mattress-reviews/five-truths-winkbed" element={<FiveTruthsWinkBed />} />
        <Route path="/mattress-reviews/five-truths-winkbed-ecocloud" element={<FiveTruthsWinkBedEcoCloud />} />
        <Route path="/mattress-reviews/winkbed-ecocloud-longevity" element={<WinkBedEcoCloudLongevityReview />} />
        <Route path="/mattress-reviews/dreamcloud-luxe-hybrid-longevity" element={<DreamCloudLuxeHybridLongevityReview />} />
        <Route path="/mattress-reviews/brooklyn-bedding-aurora-luxe" element={<BrooklynBeddingAuroraLuxeReview />} />
        <Route path="/mattress-reviews/leesa-original" element={<LeesaOriginalMattressResearch />} />
      </Routes>
    </Router>
  );
};

export default App;
