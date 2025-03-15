import { Button, Label, TextInput } from "flowbite-react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer className='!mr-0 xl:!pl-3'>
    {/* <div className=" p-6 py-6 md:p-8 md:pr-0 lg:p-10 lg:pr-0 mr-0"> */}
      {/* <div className="mx-auto grid max-w-screen-xl px-4 py-8 gap-20 lg:grid-cols-2 lg:gap-12 lg:py-16 "> */}
      {/* <div className="grid py-8 gap-20 lg:grid-cols-2 lg:gap-12 lg:py-16 relative"> */}
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-12 relative">
        <div className="md:mr-auto place-self-center md:w-auto w-full">
          <h1 className="text-center lg:text-left mb-4 max-w-2xl text-4xl leading-none tracking-tight text-black md:text-6xl font-normal">
            Helping home <br className="hidden sm:block"/> service experts <br className="hidden sm:block"/> stay ahead
          </h1>
          <p className="text-center lg:text-left mb-6 max-w-2xl text-[#00000080] md:text-lg lg:mb-8">
            Create your account and get started on our <br /> platform to relieve your
            stress
          </p>
          <form action="#" className="">
            <div className="mb-3 flex items-center justify-center md:justify-start">
              <div className="relative w-[70%]">
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="w-full py-4 [&_input]:w-full [&_input]:py-3 [&_input]:md:w-80 !bg-white !rounded-none"
                />
              </div>
              <div>
                <Button onClick={() => navigate("/freetrial")} className="cursor-pointer [&>span]:py-3 py-2 translate-x-[-1%] bg-[#26875C] !rounded-none">
                  Try for free
                </Button>
              </div>
            </div>
            
          </form>
        </div>
        <div className="hidden md:mt-0 md:flex">
          <img
            src="/images/hero.png"
            alt="phone illustration"
            className="w-full lg:scale-120"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
