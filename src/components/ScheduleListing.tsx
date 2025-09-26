import type { Schedule } from "@/types";
import ScheduleCard from "./ScheduleCard";

interface ScheduleListingProps {
    schedules: Schedule[];
}

export default function ScheduleListing({ schedules }: ScheduleListingProps) {
    return (

            <div className="flex-1 overflow-y-auto bg-bg-brandNeutral-secondary-enabled p-4">
                <div className="grid grid-cols-2 gap-8">
                    {schedules.map((schedule) => (
                        <ScheduleCard schedule={schedule} />
                    ))}
                </div>
            </div>
    )
}