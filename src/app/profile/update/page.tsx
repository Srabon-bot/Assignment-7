import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { auth } from "@/lib/auth";

async function UpdateContent() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/signin");

  return <UpdateProfileForm defaultName={session.user.name} />;
}

export default function UpdateProfilePage() {
  return (
    <main className="container mx-auto w-full flex-1 px-4 py-6">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">তথ্য আপডেট করুন</h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার নাম পরিবর্তন করে সংরক্ষণ করুন।
          </p>
        </div>

        <Suspense
          fallback={
            <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <div className="skeleton h-5 w-16" />
              <div className="skeleton h-4 w-10" />
              <div className="skeleton h-10 w-full" />
              <div className="skeleton h-10 w-full" />
            </div>
          }
        >
          <UpdateContent />
        </Suspense>
      </div>
    </main>
  );
}