"use client";

import { Movie } from "@/types/movie";
import Link from "next/link";
import Image from "next/image";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
    console.log("Poster path:", movie.poster_path);

  return (
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full h-auto object-cover"
        />
        <div className="p-2">
          <h2 className="text-sm font-medium">{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
}
