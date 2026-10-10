
export function getRedirectTarget(): string {
  if (typeof window === "undefined") return "/";

  const target = new URLSearchParams(window.location.search).get("redirect");
  return target && target.startsWith("/") && !target.startsWith("//")
    ? target
    : "/";
}

const ERROR_BN: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড সঠিক নয়।",
  USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
  PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  INVALID_EMAIL: "সঠিক ইমেইল দিন।",
};

export function authErrorMessage(
  error: { code?: string; message?: string } | null | undefined
) {
  return (
    (error?.code && ERROR_BN[error.code]) ||
    error?.message ||
    "কিছু ভুল হয়েছে, আবার চেষ্টা করুন।"
  );
}