import { poppins, roboto } from "@/lib/fonts";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="py-[70px] flex justify-center bg-[#EDEFF6]">
      <div className="px-[10px]">
        <h1 className={`
          font-[600] text-[40px] leading-[48px] text-center pb-[28px] text-[#1E2640]
        `}>
          Contact Us
        </h1>

        <p className={`
          text-[20px] leading-[28px] text-center
        `}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Proin sodales ultrices nulla blandit volutpat.
        </p>

        <div className={`
          py-[28px] px-[30px] bg-white mt-[40px] rounded-[17px]
        `}>
          <h1 className={`
            ${poppins} font-[700] text-[24px] leading-[36px] text-[#434343]
          `}>
            Enquiry Form
          </h1>
          <p className={`
            text-[18px] leading-[30px] font-[400] text-center
          `}>
            Are you looking for details about a certain property? Ask us a question using the form below.
          </p>

          <form className={`
            mt-[17px]
          `}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[10px]">
              <input type="text" className={`
                border-[1px] border-gray-400
                focus:outline-none focus:shadow-md focus:shadow-gray-400
                ${roboto} font-[400] text-[16px] leading-[24px] 
                py-[16px] px-[12px]
              `} name="firstName" id="firstName" placeholder="First Name" aria-label="First Name" />

              <input type="text" className={`
                border-[1px] border-gray-400
                focus:outline-none focus:shadow-md focus:shadow-gray-400
                ${roboto} font-[400] text-[16px] leading-[24px] 
                py-[16px] px-[12px]
              `} name="lastName" id="lastName" placeholder="Last Name" aria-label="Last Name" />
            </div>

            <div className="py-[10px]">
              <input type="email" className={`
                border-[1px] border-gray-400
                focus:outline-none focus:shadow-md focus:shadow-gray-400
                ${roboto} font-[400] text-[16px] leading-[24px] 
                py-[16px] px-[12px] w-full
              `} name="emailId" id="emailId" placeholder="Email Id" aria-label="Email Id" />
            </div>

            <div className="pb-[10px]">
              <textarea className={`
                border-[1px] border-gray-400
                focus:outline-none focus:shadow-md focus:shadow-gray-400
                ${roboto} font-[400] text-[16px] leading-[24px] 
                py-[16px] px-[12px] w-full
              `} name="commentsOrQuestions" id="commentsOrQuestions" placeholder="Comments or questions" 
              aria-label="Comments or questions" />
            </div>

            <div className="flex justify-center">
              <Button className="w-[222px]">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}