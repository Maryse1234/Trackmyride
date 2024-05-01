"use client";

import Map from "@/components/Map";
import TrackCard from "@/components/ui/TrackCard";
import Image from "next/image";

export default function Track() {
    return (
        <div className="flex flex-col items-center py-10 px-5">
            <div className="max-w-[70rem] w-full">
                

                <div className="flex flex-col gap-2.5">
                    <h3 className="text-3xl font-bold">Track your itenary</h3>
                    <p className="text-gray-400">Real-time rides, zero wait time</p>
                    <Image
                    src="/car.svg"
                    alt="Vercel Logo"
                    // className="dark:invert"
                    width={100}
                    height={24}
                    priority
                    />
                </div>
                <div className="h-[20rem]">

                    <Map 
                    start={{lat: -1.939826787816454, lng: 30.0445426438232}} 
                    stops={[
                        {lat:-1.9355377074007851, lng:30.060163829002217},
                        {lat:-1.9358808342336546, lng:30.08024820994666},
                        {lat:-1.9489196023037583, lng:30.092607828989397},
                        {lat:-1.9592132952818164, lng:30.106684061788073},
                        {lat:-1.9487480402200394, lng:30.126596781356923},
                    ]} 
                    end={{lat: -1.9365670876910166, lng: 30.13020167024439}} />
                </div>

                <div className="flex gap-5 overflow-x-scroll">
                    <TrackCard location="10.6km" time="12:00" source="Kacyiru" destination="Kimironko" stop={"Stop A"} />
                    <TrackCard location="10.6km" time="12:00" source="Kacyiru" destination="Kimironko" stop={"Stop A"} />
                    <TrackCard location="10.6km" time="12:00" source="Kacyiru" destination="Kimironko" stop={"Stop A"} />
                    <TrackCard location="10.6km" time="12:00" source="Kacyiru" destination="Kimironko" stop={"Stop A"} />

                </div>
            </div>
        </div>
    )
} 