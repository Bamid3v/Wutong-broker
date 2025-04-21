import TradeInput from "./TradeInput"

const RightSideBar = () => {
  return (
    <aside className=" font-mono border-l-4 border-line w-[350px] flex h-full flex-col items-center justify-start px-2 py-4">
      <div className="flex flex-col gap-5 w-full h-full">
        <div className="flex gap-2 items-start">
            <span className="bg-orange-500 text-base text-white px-2 rounded-full">B</span>
            <h2 className="text-xl font-medium">BTC/USD</h2>
        </div>
        <TradeInput />
        
      </div>
    </aside>
  )
}

export default RightSideBar
