import EachFeatures from "./EachFeatures";

const keyFeatures = [
  {
    title: "Gift Cards",
    description:
      "Got unused gift cards? Exchange them for cash with Wutong. Turn your cards into cash instantly in ",
    despan: true,
    steps: [
      { id: "1", name: "Select gift card" },
      { id: "2", name: "Upload the cards" },
      { id: "3", name: "Wait for the feedback" },
      { id: "4", name: "Pay to your wallet" },
    ],
    images: {
      featureImage: "images/feature_1.png",
      icons: ["icons/time.svg", "icons/time-run.svg"],
    },
    extraInfo: ["10 mins max load time", "Compensates for time exceeded."],
    cta: "Explore Selling",
  },
  {
    title: "Loans",
    description:
      "Need money urgently? Exchange them for cash with Wutong. Acquire loan assistance in ",
    despan: true,
    row: true,
    cta: "Get a Loan",
    steps: [
      { id: "1", name: "Complete the authentication" },
      { id: "2", name: "Apply for loan" },
      { id: "3", name: "Send to your wallet" },
      { id: "4", name: "Replay it by selling cards" },
    ],
    images: {
      featureImage: "images/feature_2.png",
      icons: ["icons/offer.svg", "icons/hourglass.svg"],
    },
    extraInfo: ["Low interest rate", "You will get loan instantly"],
  },
  {
    title: "Savings",
    description:
      "Got unused gift cards? Exchange them for cash with Wutong. Turn your cards into cash instantly in ",
    despan: true,
    steps: [
      { id: "1", name: "Select a product" },
      { id: "2", name: "Buy any amount" },
      { id: "3", name: "Sell at an appropriate price" },
      { id: "4", name: "Calculate your earnings" },
    ],
    images: {
      featureImage: "images/feature_3.png",
      icons: ["icons/shield-cross.svg", "icons/wallet.svg"],
    },
    extraInfo: ["Very secure wallet", "Sweet interest on savings"],
    cta: "Start Saving",
  },
  {
    title: "Refer and Earn",
    description:
      "Need a way to make more money? Invite your friends, family, and colleagues to experience the benefits of Wutong.",
    row: true,
    steps: [
      { id: "1", name: "Create account" },
      { id: "2", name: "Share referral code or link" },
      { id: "3", name: "Earn points" },
      { id: "4", name: "Claim your reward" },
    ],
    images: {
      featureImage: "images/feature_4.png",
      icons: ["icons/gift.svg", "icons/block.svg"],
    },
    extraInfo: ["Amazing rewards", "No referral limit"],
    cta: "Start Earning",
  },
];

const Features = () => {
  return (
    <section className="py-14 md:pt-[140px] md:pb-20" id="company">
      <div className=" flexCenter flex-col slideIn gap-4">
        <h2 className="text-center text-black head28 max-w-[700px] ">
          Our features are aim to enhance your experience and deliver maximum
          convenience.
        </h2>
        <p className="para text-center text-grey max-w-[555px] ">
          Wutong goes beyond gift card selling, offering more services like
          loans and savings. Unlock a wealth of possibilities with us.
        </p>
      </div>
      {keyFeatures.map((feature) => (
        <EachFeatures
          key={feature.title}
          title={feature.title}
          description={feature.description}
          despan={feature.despan}
          cta={feature.cta}
          row={feature.row}
          steps={feature.steps}
          images={feature.images.featureImage}
          icons={feature.images.icons}
          extraInfo={feature.extraInfo}
        />
      ))}
      ;
    </section>
  );
};

export default Features;
