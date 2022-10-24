import { useState, useEffect } from "react";
import {
  HomeContainer,
  HomeCardWrapper,
  HomeContent,
} from "./home-page.styles";
import HomeCards from "../../components/home/home-cards/home-cards.comp";
import HomeHeader from "../../components/home/home-header/home-header.comp";
import HomePagination from "../../components/home/home-pagination/home-pagination";

function Home() {
  const [error, setError] = useState(null);
  const [renderType, setRenderType] = useState(true);

  //anime
  const [animeDataState, setAnimeDataState] = useState([]);
  const [animeItensPagination] = useState(4);
  const [animeCurrentPagination, setAnimeCurrentPagination] = useState(0);
  //manga
  const [mangaDataState, setMangaDataState] = useState([]);
  const [mangaItensPagination] = useState(4);
  const [mangaCurrentPagination, setManagaCurrentPagination] = useState(0);

  //Anime
  const numberOfPages = Math.ceil(animeDataState.length / animeItensPagination);
  const startAnimeIndex = animeCurrentPagination * animeItensPagination;
  const endAnimeIndex = startAnimeIndex + animeItensPagination;
  const currentAnimeItens = animeDataState.slice(
    startAnimeIndex,
    endAnimeIndex
  );

  useEffect(() => {
    const dataFetch = async () => {
      const resultData = await fetch("https://kitsu.io/api/edge/anime/")
        .then((res) => res.json())
        .then(
          (result) => {
            setAnimeDataState(result.data);
          },
          (error) => {
            setError(error);
          }
        );
    };
    dataFetch();
  }, []);

  const animeMapped = currentAnimeItens.map((item, index) => {
    return (
      <HomeCards
        key={index}
        image={item?.attributes.posterImage.original}
        name={item?.attributes.slug}
        description={item?.attributes.description}
      />
    );
  });

  //Mangá
  const mangaNumberOfPages = Math.ceil(
    mangaDataState.length / mangaItensPagination
  );
  const startMangaIndex = mangaCurrentPagination * mangaItensPagination;
  const endMangaIndex = startMangaIndex + mangaItensPagination;
  const currentMangaItens = mangaDataState.slice(
    startMangaIndex,
    endMangaIndex
  );
  useEffect(() => {
    const dataFetch = async () => {
      const resultData = await fetch("https://kitsu.io/api/edge/manga/")
        .then((res) => res.json())
        .then(
          (result) => {
            setMangaDataState(result.data);
          },
          (error) => {
            setError(error);
          }
        );
    };
    dataFetch();
  }, []);

  const mangaMapped = currentMangaItens.map((item, index) => {
    return (
      <HomeCards
        key={index}
        image={item?.attributes.posterImage.original}
        name={item?.attributes.slug}
        description={item?.attributes.description}
        title={item?.attributes.abbreviatedTitles[0]}
      />
    );
  });

  return (
    <HomeContainer>
      <HomeHeader renderProps={setRenderType} />
      {error && <div>Error: {error.message}</div>}

      {renderType && (
        <HomeContent>
          <HomeCardWrapper>{animeMapped}</HomeCardWrapper>
          <HomePagination
            setCurrentPage={setAnimeCurrentPagination}
            numberOfPage={numberOfPages}
          />
        </HomeContent>
      )}

      {!renderType && (
        <HomeContent>
          <HomeCardWrapper>{mangaMapped}</HomeCardWrapper>
          <HomePagination
            setCurrentPage={setManagaCurrentPagination}
            numberOfPage={mangaNumberOfPages}
          />
        </HomeContent>
      )}
    </HomeContainer>
  );
}

export default Home;
