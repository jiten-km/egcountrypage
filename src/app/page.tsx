import NavigationHeader from "@/components/layout/NavigationHeader";
import HeroSection from "@/components/sections/HeroSection";
import MainLayout from "@/components/layout/MainLayout";
import SectionContainer from "@/components/ui/SectionContainer";
import TopCommoditiesChart from "@/components/charts/TopCommoditiesChart";
import ImporterCards from "@/components/sections/ImporterCards";
import TabNavigation from "@/components/ui/TabNavigation";
import OverviewSection from "@/components/sections/OverviewSection";


import Footer from "@/components/layout/Footer";
import TrendChart from "@/components/charts/TrendChart";
import PortChart from "@/components/charts/PortChart";
import ImportPartners from "@/components/sections/ImportPartners";
import CTASection from "@/components/sections/CTASection";
import ChartSectionWrapper from "@/components/ui/ChartSectionWrapper";
import FactSheetSection from "@/components/sections/FactSheetSection";
import PopularCountries from "@/components/sections/PopularCountries";
import BillOfLadingSection from "@/components/sections/BillOfLadingSection";
import CustomerInsiteSection from "@/components/sections/CustomerInsiteSection";
import TopImportersSection from "@/components/sections/TopImportersSection";
import DirectorySection from "@/components/sections/DirectorySection";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--grey-50)', paddingBottom: '0' }}>
      <NavigationHeader />
      <HeroSection />

      <MainLayout>
        {/* Tab Navigation */}
        <TabNavigation />

        {/* CTA Banner */}
        <CTASection />

        {/* Overview Section with Map */}
        <OverviewSection />

        {/* Fact Sheet Section */}
        <FactSheetSection />

        {/* Trend Chart */}
        <SectionContainer
          id="trends"
          title="Import Value Trends"
          subtitle="Analyze the historical growth and seasonal fluctuations of Vietnam's import values on a monthly basis. This trend analysis helps businesses identify peak procurement seasons and understand the impact of global economic shifts on national trade volumes."
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Total Import Value (Annualized)" value="$486.95 Bn">
            <TrendChart />
          </ChartSectionWrapper>
        </SectionContainer>

        {/* Top Commodities */}
        <SectionContainer
          id="commodities"
          title="Top Import Commodities of Vietnam"
          subtitle="Explore the comprehensive product distribution of Vietnam's imports, categorized by HS Codes. This section provides a detailed breakdown of 100+ product categories, highlighting shifting demands in electronics, machinery, and raw materials for the manufacturing sector."
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Top Commodities by Value" value="100+ Categories">
            <TopCommoditiesChart />
          </ChartSectionWrapper>
        </SectionContainer>

        {/* Import Partners */}
        <SectionContainer
          id="partners"
          title="Top Import Partners"
          subtitle="Track the top trading partner countries that fuel Vietnam's growing economy. Our database reveals significant dependency on Asian markets like China and South Korea, while also highlighting emerging trade corridors with Western nations and ASEAN members."
          variant="transparent"
          fullWidth={true}
        >
          <ImportPartners />
        </SectionContainer>

        {/* Ports */}
        <SectionContainer
          id="ports"
          title="Major Import Ports"
          subtitle="Identify the critical entry points for global goods into Vietnam's territory. From the bustling hubs in Ho Chi Minh City to the deep-water ports of Hai Phong, understand which maritime gateways handle the highest volume of shipment traffic and logistics operations."
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Major Ports Tracking" value="50+ Active Ports">
            <PortChart />
          </ChartSectionWrapper>
        </SectionContainer>

        {/* Detailed Bill of Lading Section (NEW) */}
        <BillOfLadingSection />

        {/* Top Importers in Vietnam (Tabular & Graphical) */}
        <TopImportersSection />



        {/* Other Popular Countries Section (Reference Analysis) */}
        <PopularCountries />

        {/* Customer Reviews & FAQ (NEW) */}
        <CustomerInsiteSection />


      </MainLayout>

      {/* Directory Section (NEW) */}
      <DirectorySection />

      {/* Footer (NEW) */}
      <Footer />
    </main>
  );
}
