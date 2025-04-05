import Button from "./Button";

const Hero = () => {
  return (
    <section className="py-14 md:pt-[120px] md:pb-[200px] bg-hero-pattern">
      {/* <Meteors number={30} /> */}
      <div className="flexCenter flex-col gap-8 ">
        <div className="flexCenter flex-col gap-4">
          <h2 className="text-[36px] md:text-[64px] max-w-full md:max-w-[50rem] px-3 md:px-0 font-neuemon font-medium hero-head text-center leading-tight tracking-normal">
            Sell your <span>gift cards</span> at the <span>best rate</span> with
            <span> ease</span>
          </h2>
          <p className="para text-center text-grey px-3 md:px-0 max-w-[34rem]">
            Have unused gift cards? Easily turn them into cash on our platform.
            it&apos;s quick and convenient, ensuring no value goes to waste.
          </p>
        </div>
        <div className="flexCenter gap-4">
          <Button text="Create account" grad pad />
          <Button text="Sign In" pad />
        </div>
      </div>
    </section>
  );
};

export default Hero;
