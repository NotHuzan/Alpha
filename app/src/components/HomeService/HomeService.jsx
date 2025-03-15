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
          {/* <div>
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-lg bg-purple-100">
              <svg
                className="mx-auto h-16 w-16 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              Just the right balance for growth
            </h3>
            <p className="mb-4 text-gray-500">
              Enterprise tools cost more, are difficult to use, and take longer
              to implement. According to G2, Flowbite is the easiest-to-use
              tool, with the fastest time to ROI.
            </p>
          </div> */}
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
