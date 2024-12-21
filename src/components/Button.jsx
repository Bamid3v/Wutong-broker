// eslint-disable-next-line react/prop-types
const Button = ({ text, grad, pad, className }) => {
  return (
    <div
      className={`text-base tracking-tight cursor-pointer font-monasan font-medium border rounded-[10px] border-border text-black ${
        pad ? "px-6 py-3" : "px-4 py-2"
      } ${
        grad &&
        "bg-gradient-to-r from-[#099235] to-[#7FC026]  text-white border-0"
      } ${className} `}
    >
      {text}
    </div>
  );
};

export default Button;
