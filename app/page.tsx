'use client';

// import CharactersList from './components/CharactersList';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <Container>{/* <CharactersList /> */}</Container>
      </main>

      <footer></footer>
    </div>
  );
}
