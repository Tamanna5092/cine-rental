import MovieList from "./cinema/MovieList";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
    </>
  );
}

export default App;
