const ProfileSkeleton = () => (
    <div className="mx-auto w-full max-w-3xl space-y-6">
        {/* heading */}
        <div className="space-y-2">
            <div className="skeleton h-8 w-48" />
            <div className="skeleton h-4 w-64" />
        </div>

        {/* user card */}
        <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="skeleton h-20 w-20 shrink-0 rounded-2xl" />
            <div className="space-y-2">
                <div className="skeleton h-6 w-40" />
                <div className="skeleton h-4 w-52" />
            </div>
        </div>

        {/* info card */}
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="skeleton h-5 w-16" />
            <div className="skeleton h-4 w-10" />
            <div className="skeleton h-10 w-full" />
            <div className="skeleton h-10 w-full" />
        </div>
    </div>
);

export default ProfileSkeleton;