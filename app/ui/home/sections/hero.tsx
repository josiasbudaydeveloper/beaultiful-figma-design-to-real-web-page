import Button, { ButtonWhite } from "@/app/ui/home/components/Button";

export default function Hero() {
  return (
    <section>
      <div className={`
        bg-hero-background-image bg-cover bg-center bg-fixed
        py-[120px] px-[30px]
      `}>
        <div className="text-center mb-[62px]">
          <h1 className={`
            font-sans font-[600] text-[52px] leading-[72px] text-white
            mb-[24px]
          `}>
            Find Your Dream Home
          </h1>
          <p className={`
            font-[400] text-[20px] leading-[28px] text-[#EDEFF6]
          `}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>

        <div className="flex justify-center mb-[17px]">
          <Button className="mr-[10px]">
            Rent
          </Button>
          
          <ButtonWhite>
            Sale
          </ButtonWhite>
        </div>

        <div className="flex justify-center">
          <div className={`
          bg-white rounded-[8px]
            flex justify-between lg:items-center items-start lg:flex-row flex-col
            py-[16px] sm:py-[32px] px-[31px] sm:px-[62px]
            w-full max-w-[1400px]
          `}>
            <div className="w-full">
              <label>
                <h1 className={`
                  text-[16px] text-[#1E2640]
                  leading-[24px] font-[600]
                  mb-[16px]
                `}>
                  Locations
                </h1>

                <select>
                  <option value="" disabled selected>Select your city</option>
                </select>
              </label>

              <div className={`
                block lg:hidden my-4 lg:py-0
                w-[full]
                border-gray-400 border-[1px]
              `}/>
            </div>

            <div className="w-full">
              <label>
                <h1 className={`
                  text-[16px] text-[#1E2640]
                  leading-[24px] font-[600]
                  mb-[16px]
                `}>
                  Property Type
                </h1>
                
                <select>
                  <option value="" disabled selected>Select property type</option>
                </select>
              </label>

              <div className={`
                block lg:hidden my-4 lg:py-0
                w-[full]
                border-gray-400 border-[1px]
              `}/>
            </div>

            <div className="w-full">
              <label>
                <h1 className={`
                  text-[16px] text-[#1E2640]
                  leading-[24px] font-[600]
                  mb-[16px]
                `}>
                  Rent Range
                </h1>
                
                <select>
                  <option value="" disabled selected>Select rent range</option>
                </select>
              </label>

              <div className={`
                block lg:hidden my-4 lg:py-0
                w-[full]
                border-gray-400 border-[1px]
              `}/>
            </div>

            <Button>
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}