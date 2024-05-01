import Input from "@/components/ui/Input";
import { Dropoff, PinPoint } from "@/components/ui/Svgs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex justify-center py-10 px-5"> 
   <div className="w-full md:w-2/5 flex flex-col gap-10">
    <div className="flex flex-col gap-2.5">
      <h3 className="text-3xl font-bold">Choose your itenary</h3>
      <p className="text-gray-400">Real-time rides, zero wait time</p>
    </div>
<form className="flex flex-col gap-5 w-full">
    <div className="flex items-center gap-5">
      <PinPoint/>
    <Input placeholder="Pickup point"/>

    </div>

    <div className="flex items-center gap-5">
      <Dropoff/>
    <Input placeholder="Drop-off point"/>

    </div>

    <button className="bg-primary rounded-md grid place-content-center h-10 text-white w-full">Submit</button>
    </form>
   </div>
   </div>
  );
}
