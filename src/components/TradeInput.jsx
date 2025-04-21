import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TradeInput = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className ='w-full flex justify-between h-12'>
        <TabsTrigger className='text-base px-7' value="account">Market</TabsTrigger>
        <TabsTrigger className='text-base px-7' value="password">Pending</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default TradeInput;
