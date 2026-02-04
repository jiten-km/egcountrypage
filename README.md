# ExportGenius - Vietnam Import Data Redesign

This is a Next.js project implementing the redesign of the Vietnam Import Data page.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `src/app/page.tsx`: Main entry point for the Vietnam Import Data page.
-   `src/components/layout`: Core layout components (Header, Footer, MainLayout, FilterSidebar, QuickNav).
-   `src/components/sections`: Page sections (Hero, etc.).
-   `src/components/ui`: Reusable UI components (SectionContainer, etc.).
-   `src/components/charts`: Data visualization components (TopCommoditiesChart, etc.).

## Features Implemented

-   **Modern Design System**: Using CSS variables for a consistent, premium color palette.
-   **Responsive Layout**: 3-column layout (Nav - Content - Filters) adapted for large screens.
-   **Interactive Hero**: Data-driven stats cards and sticky advanced search bar.
-   **Advanced Filtering**: Collapsible sidebar with Date, Category Tree, and Tag filters.
-   **Data Visualization**: Key "Top Commodities" Treemap implemented with Recharts.
-   **Placeholders**: Structured placeholders for Map, Trends, and Port analysis ready for further development.
