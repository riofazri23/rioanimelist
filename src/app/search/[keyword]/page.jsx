import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  //fetch data api dari .env await async to json

  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
