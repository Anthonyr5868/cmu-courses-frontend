
import FriendCard from "@/components/FriendCard";
import { fakeFriends } from "@/util/fakeinfo";
import { Link03, Plus } from "@scottylabs/corgi";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/profile/friends')({
  component: RouteComponent,
})

const friends = fakeFriends(10);

export default function RouteComponent() {
    return (
        <div className="bg-bg-brandNeutral-secondary-enabled w-full h-full flex flex-col">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-fg-brandNeutral-primary">Friends</h1>
                    <div className="flex items-center space-x-2 p-5">
                        <button className="cursor-pointer border rounded-full border-stroke-brandNeutral-1 flex px-4 py-2 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-secondary-hover transition">
                            <Link03 /> Share Link
                        </button>
                        <button className="cursor-pointer border rounded-full border-stroke-brandNeutral-1 flex px-4 py-2 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-secondary-hover transition">
                            <Plus /> Add Friends
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 pb-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {friends.map(friend => (
                        <FriendCard key={friend.name} friend={friend} />
                    ))}
                </div>
            </div>
        </div>
    );
}