import { Suspense } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import FormField from "@/components/auth/FormField";
import SignOutButton from "@/components/auth/SignOutButton";
import ProfileSkeleton from "@/components/profile/ProfileSkeleton";
import { auth } from "@/lib/auth";

async function ProfileContent() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/signin");

  const { name, email } = session.user;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">আমার প্রোফাইল</h1>
        <p className="mt-1 text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* user card */}
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#047F39] text-3xl font-bold text-white">
            {(name || email).trim().charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-xl font-semibold">{name}</p>
            <p className="truncate text-gray-500">{email}</p>
          </div>
        </div>

        <SignOutButton />
      </div>

      {/* info card */}
      <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-lg font-semibold">তথ্য</h2>

        <FormField label="নাম" id="name" defaultValue={name} readOnly />

        <Link
          href="/profile/update"
          className="btn w-full border-none bg-[#047F39] font-medium text-white shadow-md"
        >
          আপডেট
        </Link>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main className="container mx-auto w-full flex-1 px-4 py-6">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </main>
  );
}