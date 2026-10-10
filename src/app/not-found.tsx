import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <main className="container mx-auto w-full flex-1 px-4 py-6">
      <EmptyState
        title="৪০৪"
        message="দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।"
      />
    </main>
  );
}