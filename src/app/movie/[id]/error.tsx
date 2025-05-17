"use client";

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);
  return (
    <main className="p-6 text-center text-red-600">
      متأسفانه مشکلی در دریافت اطلاعات فیلم به وجود آمده 😔
    </main>
  );
}
