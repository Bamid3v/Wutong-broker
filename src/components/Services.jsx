import Button from "./Button";

const eachServe = [
  {
    name: "Variety of cards",
    src: "/icons/creditcard.svg",
    description:
      "We accept giftcards from different locations all over the world.",
  },
  {
    name: "Best Gift Card Rates",
    src: "/icons/chart.svg",
    description: "We offer unbeatable market rates for your gift cards.",
  },
  {
    name: "Safe and Reliable",
    src: "/icons/lock-on.svg",
    description: "Your assets are safe and we put you first.",
  },
  {
    name: "Instant Payment",
    src: "/icons/bolt.svg",
    description:
      "Our transactions are lightning-fast when it comes to payments.",
  },
];

const Services = () => {
  return (
    <section className="px-5 lg:px-12 xl:px-36 py-14 md:pt-[140px] md:pb-20 flex flex-col gap-20">
      <div className="flexCenter flex-col slideIn gap-8">
        <div className="flexCenter flex-col text-center gap-4 ">
          <h2 className=" text-black head28 max-w-[700px]">
            Our exchange process is
            <span className="text-green"> seamless and hassle-free.</span>
          </h2>
          <p className="para max-w-[500px] text-grey">
            Say goodbye to the hassle of dealing with unwanted cards—we provide
            a convenient solution that maximizes the value of your assets.
          </p>
        </div>
        <Button text="Get Started" pad />
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between items-center">
        {eachServe.map(({ name, src, description }) => (
          <EachService
            key={name}
            name={name}
            src={src}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

// eslint-disable-next-line react/prop-types
const EachService = ({ name, src, description }) => {
  return (
    <div className="flex fadeUp flex-col justify-center text-center items-center gap-[7px]">
      <img src={src} alt="bolt" />
      <h3 className=" text-black para18 mb-[1px]">{name}</h3>
      <p className="para text-grey max-w-64">{description}</p>
    </div>
  );
};
