import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Search from "@/components/Search"
import Header from "@/components/AnimeList/header"

const Page = async() => {

  //fetch data api dari .env await async to json
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()


  return(
    <>
    {/* Anime Terpopuler */}
      <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
      <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default Page