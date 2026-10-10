import AuthShell from "@/components/auth/AuthShell";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="container mx-auto w-full flex-1 px-4 py-10">
      <AuthShell
        title="অ্যাকাউন্ট তৈরি করুন"
        subtitle="বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
        switchText="অ্যাকাউন্ট আছে?"
        switchLinkText="সাইন ইন করুন"
        switchHref="/signin"
      >
        <SignUpForm />
      </AuthShell>
    </main>
  );
}