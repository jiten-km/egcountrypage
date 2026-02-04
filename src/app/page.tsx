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

        {/* Top Commodities */}
        <SectionContainer
          id="commodities"
          title="Top Import Commodities of Vietnam"
          subtitle="Explore the product mix with breakdown by value and volume"
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Top Commodities by Value" value="8 Major Categories">
            <TopCommoditiesChart />
          </ChartSectionWrapper>
        </SectionContainer>

        {/* Import Partners */}
        <SectionContainer
          id="partners"
          title="Top Import Partners"
          subtitle="Track top import trading partner countries of Vietnam based on global trade database. It is the most up-to-date information available on Vietnam import data."
          variant="transparent"
          fullWidth={true}
        >
          <ImportPartners />
        </SectionContainer>

        {/* Trend Chart */}
        <SectionContainer
          id="trends"
          title="Import Value Trends"
          subtitle="Monthly import values and growth rates over time"
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Total Import Value (Annualized)" value="$486.95 Bn">
            <TrendChart />
          </ChartSectionWrapper>
        </SectionContainer>

        {/* Ports */}
        <SectionContainer
          id="ports"
          title="Major Import Ports"
          subtitle="Highest number of shipments arrive at these ports"
          variant="transparent"
          fullWidth={true}
        >
          <ChartSectionWrapper title="Major Ports Tracking" value="42 Active Ports">
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
