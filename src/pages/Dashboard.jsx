// import LiveChart from "@/components/LiveChart";
import TradingViewWidget from "@/components/TradingViewWidget";

const Dashboard = () => {
  return (
    <>
    <main className="flex flex-col items-center justify-start gap-5">
      <h1 className="text-3xl text-center text-black font-neuemon font-bold p-2">
        Stock Candlestick Chart
      </h1>

    </main>
    <section className="w-full h-screen ">
        <TradingViewWidget />
      </section>
    </>

  );
};

export default Dashboard;
