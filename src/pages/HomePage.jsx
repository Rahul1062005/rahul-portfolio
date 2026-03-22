import HeroSection from '../sections/HeroSection'
import { getPortfolioData } from '../utils/portfolioData'

function HomePage() {
  const { cvData, sections } = getPortfolioData()

  return (
    <>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:px-8">
        <HeroSection personal={cvData?.personal} socialLinks={cvData?.socialLinks} />

        <div className="space-y-8 sm:space-y-10">
          {sections.map((section, index) => {
            const SectionComponent = section.component
            return (
              <SectionComponent
                key={section.id}
                data={section.data}
                index={index + 1}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default HomePage
