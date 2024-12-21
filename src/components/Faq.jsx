const FaqData = [
  {
    question: "What is Wutong",
    answer:
      "Wutong is a platform where you can sell your unused or unwanted gift cards for cash.",
  },
  {
    question: "What type of gift cards can I sell on Wutong?",
    answer:
      "We accept a wide range of gift cards from popular retailers and online stores.",
  },
  {
    question: "Can I sell a used gift card?",
    answer:
      "No, you cannot sell a gift card that has been used, or a loadable by another user.",
  },
  {
    question: "How long does it take to sell on Wutong?",
    answer:
      "It only takes 10 minutes max to sell your gift cards and get paid ASAP on Wutong.",
  },
  {
    question: "Is it safe to sell my gift cards on Wutong?",
    answer:
      "Yes, it is safe to sell your gift cards on Wutong. We prioritize the security of our personal information. ",
  },
  {
    question: "Do I have to pay to sell gift cards on Wutong?",
    answer: "It is totally free to trade on Wutong.",
  },
  {
    question: "Can I cancel a gift card sale on Wutong?",
    answer:
      "Yes, you can cancel a gift card sale on Wutong if you change your mind or if the gift card has been used.",
  },
  {
    question: "How do I get paid for selling on Wutong?",
    answer:
      "Once your transaction has been completed, you'll receive payment through your preferred method.",
  },
  {
    question: "Can I buy gift card on Wutong?",
    answer:
      "No not yet, but we are working on it and this feature will soon be available.",
  },
];

const Faq = () => {
  return (
    <section
      className="px-5 lg:px-12 xl:px-36 my-[100px] flex flex-col justify-center gap-[100px]"
      id="faq"
    >
      <div className="flexCenter flex-col slideIn text-center gap-4">
        <h2 className="max-w-[899px] text-center head28 text-black">
          Frequently asked questions 🤔
        </h2>
        <p className="para max-w-[356px] text-grey">
          We took our time to gather some questions that we&apos;ve been asked
          before and here are the answers
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FaqData.map((data) => (
            <EachFaq
              key={data.question}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
        <div className="py-8 border-t border-line">
          <h2 className="para text-center text-grey">
            Got more questions you can&apos;t find here?
            <a href="#" className="text-emerald-500 underline ml-2">
              Contact us
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Faq;

// eslint-disable-next-line react/prop-types
const EachFaq = ({ question, answer }) => {
  return (
    <div className="max-w-[370px] fadeUp flex flex-col gap-4 justify-center items-start">
      <h2 className=" text-grey1 para18">{question}</h2>
      <p className="para text-grey max-w-[320px] leading-[-2%]">{answer}</p>
    </div>
  );
};
