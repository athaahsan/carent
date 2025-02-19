import Carousel from "./Carousel"

const Hero = () => {
  return (
    <div className="hero mt-24 sm:mt-28 md:mt-32">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-20">
            Your Journey, Our Wheels. <br /> Find the Perfect Ride for Any Adventure.
          </h1>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Hero
