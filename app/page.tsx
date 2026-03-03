import GlobalProvider from './providers/GlobalProvider';

export default function Home() {
  return (
    <GlobalProvider>
      <h1>Hello World!</h1>
    </GlobalProvider>
  );
}
