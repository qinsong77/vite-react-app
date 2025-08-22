import reactLogo from '@/assets/react.svg'

import PageIllustration from './page-illustration'
import viteLogo from '/vite.svg'

const ImageLogo = () => {
  return (
    <div className="mb-6 flex justify-center" data-aos="fade-up">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img
          src={viteLogo}
          className="h-32 p-3 drop-shadow-lg transition hover:drop-shadow-2xl"
          alt="Vite logo"
        />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img
          src={reactLogo}
          className="h-32 animate-spin p-3 drop-shadow-lg transition hover:drop-shadow-2xl"
          alt="React logo"
        />
      </a>
    </div>
  )
}
export default function Hero() {
  return (
    <section>
      <div className="relative mx-auto px-4 sm:px-6">
        {/* Illustration behind hero content */}
        <PageIllustration />
        {/* Hero content */}
        <div className="relative pt-16 pb-10 md:pt-20 md:pb-16">
          {/* Section header */}
          <ImageLogo />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-8 text-2xl" data-aos="fade-up">
              Landing template for startups
            </h1>
            <p
              className="text-muted-foreground mb-8 text-lg italic"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="mb-4 w-full rounded-lg bg-purple-600 px-4 py-2.5 text-white hover:bg-purple-700 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
