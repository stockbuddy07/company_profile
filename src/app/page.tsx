import HeroMain from '@/components/hero/HeroMain';
import TrustProofSection from '@/components/sections/TrustProofSection';
import OnChainTrustSection from '@/components/sections/OnChainTrustSection';
import DecentralisedReputationSection from '@/components/sections/DecentralisedReputationSection';
import ProductsPoweredSection from '@/components/sections/ProductsPoweredSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import PartnershipsSection from '@/components/sections/PartnershipsSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <HeroMain />
      <div className="h-28 bg-white"></div>
      <TrustProofSection />
      <OnChainTrustSection />
      <DecentralisedReputationSection />
      <ProductsPoweredSection />
      <GetInTouchSection />
      <PartnershipsSection />
      <Footer />
      {/* <div className="h-[300vh] bg-white"></div> */}
    </>
  );
}
