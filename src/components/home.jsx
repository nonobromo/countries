import Logo from "../components/logo";

function Home() {
  return (
    <div className="container mt-5">
      <h1>
        Welcome to the <Logo />!
      </h1>
      <h2 className="mt-4">
        Browse your favorite countries from all around the globe!
      </h2>
    </div>
  );
}

export default Home;
