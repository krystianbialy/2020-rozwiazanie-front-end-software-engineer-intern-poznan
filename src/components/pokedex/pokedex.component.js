import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAllPokemon, getPokemon } from './pokedex.services';
import {
  Loader,
  ButtonWrapper,
  ButtonPrevious,
  ButtonNext,
  Container,
  Pokemons,
  Pokemon,
  Id,
  Name,
  Image,
  Type,
  TypeText,
  Height,
  Weight,
} from './pokedex.styled';

export const Pokedex = () => {
  const [loader, setLoader] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [pokemonsData, setPokemonsData] = useState([]);

  const apiInitialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPokemon(apiInitialUrl);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      await loadingPokemons(response.results);
      setLoader(false);
    };
    fetchData();
  }, []);

  const loadingPokemons = async (data) => {
    const allPokemons = await Promise.all(
      data.map(async (poke) => {
        const pokemon = await getPokemon(poke.url);
        return pokemon;
      })
    );
    setPokemonsData(allPokemons);
  };

  const next = async () => {
    if (!nextUrl) return;
    setLoader(true);
    const response = await getAllPokemon(nextUrl);
    setNextUrl(response.next);
    setPreviousUrl(response.previous);
    await loadingPokemons(response.results);
    setLoader(false);
  };

  const previous = async () => {
    if (!previousUrl) return;
    setLoader(true);
    const response = await getAllPokemon(previousUrl);
    setNextUrl(response.next);
    setPreviousUrl(response.previous);
    await loadingPokemons(response.results);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader>
          <CircularProgress size={60} />
        </Loader>
      ) : (
        <Container>
          <ButtonWrapper>
            <ButtonPrevious onClick={previous}>PREVIUS</ButtonPrevious>
            <ButtonNext onClick={next}>NEXT</ButtonNext>
          </ButtonWrapper>
          <Pokemons>
            {pokemonsData.map((pokemon) => {
              return (
                <Pokemon>
                  <Image src={pokemon.sprites.front_default} />
                  <Image src={pokemon.sprites.back_default} />
                  <Id>Id: {pokemon.id}</Id>
                  <Name>Name: {pokemon.name}</Name>
                  <Type>
                    Type:
                    {pokemon.types.map((type) => {
                      return <TypeText>[{type.type.name}]</TypeText>;
                    })}
                  </Type>
                  <Height>Height: {pokemon.height}</Height>
                  <Weight>Weight: {pokemon.weight}</Weight>
                </Pokemon>
              );
            })}
          </Pokemons>
        </Container>
      )}
    </>
  );
};
