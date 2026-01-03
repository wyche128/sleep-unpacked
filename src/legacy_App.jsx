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
import HowToChooseMattress from './pages/sleep-guides/HowToChooseMattress';
import MattressFirmnessGuide from './pages/sleep-guides/MattressFirmnessGuide';
import SevenBedSizeSecrets from './pages/sleep-guides/SevenBedSizeSecrets';
import HowToCleanMattress from './pages/sleep-guides/HowToCleanMattress';
import PurpleMattressReview from './pages/mattress-reviews/PurpleMattressReview';
import WinkBedMattressReview from './pages/mattress-reviews/WinkBedMattressReview';
import FiveTruthsWinkBed from './pages/mattress-reviews/FiveTruthsWinkBed';
import FiveTruthsWinkBedEcoCloud from './pages/mattress-reviews/FiveTruthsWinkBedEcoCloud';
import WinkBedEcoCloudLongevityReview from './pages/mattress-reviews/WinkBedEcoCloudLongevityReview';
import DreamCloudLuxeHybridLongevityReview from './pages/mattress-reviews/DreamCloudLuxeHybridLongevityReview';
import BrooklynBeddingAuroraLuxeReview from './pages/mattress-reviews/BrooklynBeddingAuroraLuxeReview';
import LeesaOriginalMattressResearch from './pages/mattress-reviews/LeesaOriginalMattressResearch';
import LeesaLegendMattressReview from './pages/mattress-reviews/LeesaLegendMattressReview';
import NectarClassicLongevityReview from './pages/mattress-reviews/NectarClassicLongevityReview';
import NectarPremiereLongevityReview from './pages/mattress-reviews/NectarPremiereLongevityReview';
import WinkBedGravityLuxLongevityReview from './pages/mattress-reviews/WinkBedGravityLuxLongevityReview';
import HelixPlusLongevityReview from './pages/mattress-reviews/HelixPlusLongevityReview';
import OnePointFiveInchThreshold from './pages/frequently-asked-questions/OnePointFiveInchThreshold';
import DoINeedABoxSpring from './pages/frequently-asked-questions/DoINeedABoxSpring';
import CanIFlipMyMattress from './pages/frequently-asked-questions/CanIFlipMyMattress';
import HowLongMattressInBox from './pages/frequently-asked-questions/HowLongMattressInBox';
import HowLongSleepTrial from './pages/frequently-asked-questions/HowLongSleepTrial';
import FiberglassFree from './pages/frequently-asked-questions/FiberglassFree';
import MemoryFoamDifferent from './pages/frequently-asked-questions/MemoryFoamDifferent';
import MemoryFoamToxic from './pages/frequently-asked-questions/MemoryFoamToxic';
import FAQHub from './pages/frequently-asked-questions/index';

import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

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
        <Route path="/sleep-guides/how-to-choose-a-mattress" element={<HowToChooseMattress />} />
        <Route path="/sleep-guides/mattress-firmness-guide" element={<MattressFirmnessGuide />} />
        <Route path="/sleep-guides/seven-bed-size-secrets" element={<SevenBedSizeSecrets />} />
        <Route path="/sleep-guides/how-to-clean-mattress" element={<HowToCleanMattress />} />
        <Route path="/mattress-reviews/purple-original" element={<PurpleMattressReview />} />
        <Route path="/mattress-reviews/winkbed-original" element={<WinkBedMattressReview />} />
        <Route path="/mattress-reviews/five-truths-winkbed" element={<FiveTruthsWinkBed />} />
        <Route path="/mattress-reviews/five-truths-winkbed-ecocloud" element={<FiveTruthsWinkBedEcoCloud />} />
        <Route path="/mattress-reviews/winkbed-ecocloud-longevity" element={<WinkBedEcoCloudLongevityReview />} />
        <Route path="/mattress-reviews/dreamcloud-luxe-hybrid-longevity" element={<DreamCloudLuxeHybridLongevityReview />} />
        <Route path="/mattress-reviews/brooklyn-bedding-aurora-luxe" element={<BrooklynBeddingAuroraLuxeReview />} />
        <Route path="/mattress-reviews/leesa-original" element={<LeesaOriginalMattressResearch />} />
        <Route path="/mattress-reviews/leesa-legend" element={<LeesaLegendMattressReview />} />
        <Route path="/mattress-reviews/nectar-classic" element={<NectarClassicLongevityReview />} />
        <Route path="/mattress-reviews/nectar-premiere" element={<NectarPremiereLongevityReview />} />
        <Route path="/mattress-reviews/winkbed-gravitylux" element={<WinkBedGravityLuxLongevityReview />} />
        <Route path="/mattress-reviews/helix-plus" element={<HelixPlusLongevityReview />} />
        <Route path="/frequently-asked-questions/1.5-inch-threshold" element={<OnePointFiveInchThreshold />} />
        <Route path="/frequently-asked-questions/do-i-need-a-box-spring" element={<DoINeedABoxSpring />} />
        <Route path="/frequently-asked-questions/can-i-flip-my-mattress" element={<CanIFlipMyMattress />} />
        <Route path="/frequently-asked-questions/how-long-mattress-in-box" element={<HowLongMattressInBox />} />
        <Route path="/frequently-asked-questions/how-long-free-trial" element={<HowLongSleepTrial />} />
        <Route path="/frequently-asked-questions/fiberglass-free" element={<FiberglassFree />} />
        <Route path="/frequently-asked-questions/memory-foam-toxic" element={<MemoryFoamToxic />} />
        <Route path="/frequently-asked-questions/memory-foam-different" element={<MemoryFoamDifferent />} />
        <Route path="/frequently-asked-questions" element={<FAQHub />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
