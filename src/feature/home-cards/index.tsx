export const HomeCards = () => {
  return (
    <section className="bg-w relative z-40 py-10 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="dark:text-primary text-3xl font-light text-black sm:text-4xl lg:text-5xl">
          it&apos;s{' '}
          <span className="block w-full bg-linear-to-r from-green-500 to-green-500 bg-clip-text font-light text-transparent lg:inline">
            Services
          </span>{' '}
          in one single line.
        </h2>
        <p className="mb-20 text-lg text-gray-900 dark:text-gray-300">
          Comes directly from the desk of engineers, creators and managers at
          Skcript.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <a href="#1" className="relative shadow">
            <div className="group relative h-full overflow-hidden shadow-green-900">
              <div className="absolute -bottom-14 left-0 size-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bg-green-900">
                <div className="relative size-full p-5">
                  <div className="absolute bottom-0 text-left text-white transition-all duration-500 ease-in-out group-hover:bottom-24">
                    <h2 className="mb-0 pb-1 text-2xl font-bold text-white">
                      Standard Color
                    </h2>
                    <p className="text-lg font-light text-white">
                      Lorem ipsum dolor sit amet, #brands.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="card background"
                src="https://source.unsplash.com/random/400x400"
                className="example z-0 size-full object-fill"
              />
            </div>
          </a>
          <a href="#2" className="relative shadow-2xl">
            <div className="group relative h-full overflow-hidden shadow shadow-green-900">
              <div className="absolute -bottom-14 left-0 size-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bg-green-900">
                <div className="relative size-full p-5">
                  <div className="absolute bottom-0 text-left text-white transition-all duration-500 ease-in-out group-hover:bottom-24">
                    <h2 className="mb-0 pb-1 text-2xl font-bold text-white">
                      Standard Color
                    </h2>
                    <p className="text-lg font-light text-white">
                      Lorem ipsum dolor sit amet, #brands.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="card background"
                src="https://source.unsplash.com/random/400x400"
                className="example z-0 size-full object-fill"
              />
            </div>
          </a>
          <a href="#3" className="relative shadow-2xl">
            <div className="group relative h-full overflow-hidden shadow-2xl shadow-green-900">
              <div className="absolute -bottom-14 left-0 size-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bg-green-900">
                <div className="relative size-full p-5">
                  <div className="absolute bottom-0 text-left text-white transition-all duration-500 ease-in-out group-hover:bottom-24">
                    <h2 className="mb-0 pb-1 text-2xl font-bold text-white">
                      Standard Color
                    </h2>
                    <p className="text-lg font-light text-white">
                      Lorem ipsum dolor sit amet, #brands.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="card background"
                src="https://source.unsplash.com/random/400x400"
                className="example z-0 size-full object-fill"
              />
            </div>
          </a>
          <a href="#4" className="relative shadow-2xl">
            <div className="group relative h-full overflow-hidden shadow-2xl shadow-green-900">
              <div className="absolute -bottom-14 left-0 size-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bg-green-900">
                <div className="relative size-full p-5">
                  <div className="absolute bottom-0 text-left text-white transition-all duration-500 ease-in-out group-hover:bottom-24">
                    <h2 className="mb-0 pb-1 text-2xl font-bold text-white">
                      Standard Color
                    </h2>
                    <p className="text-lg font-light text-white">
                      Lorem ipsum dolor sit amet, #brands.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="card background"
                src="https://source.unsplash.com/random/400x400"
                className="example z-0 size-full object-fill"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
