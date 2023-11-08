import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Search from "@/components/Search"
import Header from "@/components/AnimeList/header"

const Page = async({params}) => {

  const { keyword } = params
  //fetch data api dari .env await async to json
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()


  return(
    <>
      <section>
      <Header title={`Pencarian Untuk ${keyword}...`} />
      <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page