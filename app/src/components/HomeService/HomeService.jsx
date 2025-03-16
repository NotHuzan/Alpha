import SectionContainer from "../SectionContainer/SectionContainer";

const HomeService = () => {
  return (
    <SectionContainer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6 bg-[#F5F5F5]">
        <h2 className="mb-4 text-3xl sm:text-[40px] font-normal tracking-tight text-gray-900">
          Helping home service
        </h2>
        <p className="text-gray-500 sm:text-lg lg:px-48">
          Create your account and get started on our <br />
          platform to relieve your stress
        </p>
        <div className="my-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-16 overflow-hidden">
          <div>
            <h3 className="text-[#26875C] font-semibold">WITHOUT US</h3>
            <img src="/images/homeService1.png" className="object-cover scale-155" />
          </div>
         
          <div>
            <h3 className="text-[#26875C] font-semibold">WITH US</h3>
            <img src="/images/homeService2.png" className="object-cover scale-155"/>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeService;
