import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async () => {
  //fetch data api dari .env await async to json
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime","limit=8")

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
