import AuthShell from "@/components/auth/AuthShell";
import ProtectedRedirectToast from "@/components/auth/ProtectedRedirectToast";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <main className="container mx-auto w-full flex-1 px-4 py-10">
      <ProtectedRedirectToast />

      <AuthShell
        title="সাইন ইন"
        subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
        switchText="অ্যাকাউন্ট নেই?"
        switchLinkText="সাইন আপ করুন"
        switchHref="/signup"
      >
        <SignInForm />
      </AuthShell>
    </main>
  );
}