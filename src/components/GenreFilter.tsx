"use client";

import { Genre } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  genres: Genre[];
};

export default function GenreFilter({ genres }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("genre");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value;
    const query = searchParams.get("query");
    const params = new URLSearchParams();

    if (query) params.set("query", query);
    if (selectedGenre) params.set("genre", selectedGenre);

    router.push(`/?${params.toString()}`);
  };

  return (
    <select
      className="p-2 rounded-lg border border-gray-300 mb-6"
      value={current || ""}
      onChange={handleChange}
    >
      <option value="">همه ژانرها</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
