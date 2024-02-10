import { PropertyByAreaCardLong, PropertyByAreaCardShort } from "../components/properties-by-area-cards";
import { 
  Card1, Card2, Card3, Card4, Card5
} from "@/public";

export default function PropertiesByAreaImages() {
  return (
    <section className="py-[53px] px-[50px]">
        <h1 className={`
          font-[600] text-[40px] leading-[48px] text-[#1E2640]
          flex justify-center mb-[24px]
        `}>
          Properties by Area
        </h1>
        <p className={`
          font-[400] text-[20px] leading-[28px]
          flex justify-center mb-[45px]
        `}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Proin sodales ultrices nulla blandit volutpat.
        </p>

        <div className="flex flex-col items-center">
          <div className="max-w-[1140px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[26px] mb-[26px]">
              <PropertyByAreaCardShort
                image={Card1}
                title="Centerville"
                description="25 listings"
              />
              <PropertyByAreaCardShort
                image={Card2}
                title="Centerville"
                description="25 listings"
              />
              <PropertyByAreaCardShort
                image={Card3}
                title="Centerville"
                description="25 listings"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
              <PropertyByAreaCardLong 
                image={Card4} 
                title="Arlington"
                description="25 listings"
              />
              <PropertyByAreaCardLong
                image={Card5}
                title="Centerville"
                description="25 listings"
              />
            </div>
          </div>
        </div>
    </section>
  )
}