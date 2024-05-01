
interface TrackCardProps {
    location: string;
    time: string;
    source: string;
    destination: string;
    stop: string;
}

import { PinPoint, Dropoff, Time, Location } from "./Svgs";

export default function TrackCard({ location, time, source, destination, stop }: TrackCardProps) {
    return (
        <div className="flex flex-col gap-5">

            <h3 className="font-bold mb-2">{stop}</h3>
            <div className="flex items-center gap-5">
                <PinPoint />

                <div className="flex flex-col gap-">
                    <p className="text-gray_primary text-xs">Start</p>
                    <p className="font-bold">{source}</p>
                </div>

            </div>

            <div className="flex items-center gap-5">
                <Dropoff />
                <div className="flex flex-col gap-">
                    <p className="text-gray_primary text-xs">End</p>
                    <p className="font-bold">{destination}</p>
                </div>
            </div>

            <div className="rounded bg-primary px-5 py-2.5 flex h-14 gap-5 w-fit">

                <div className="flex items-center gap-2.5">
                    <Location />
                    <p className="text-white font-semibold">{location}</p>
                </div>
                <div className="w-[1px] bg-white h-full"></div>
                <div className="flex items-center gap-2.5">
                    <Time />
                    <p className="text-white font-semibold">{time}</p>
                </div>

            </div>
        </div>
    )
}