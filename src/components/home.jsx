import Logo from "../components/logo";

function Home() {
  return (
    <div className="container bg-light mt-5">
      <h1>
        Welcome to the <Logo />!
      </h1>
      <h2 className="mt-4">
        Browse your favorite countries from all around the globe!
      </h2>
      <img
        src="https://t4.ftcdn.net/jpg/01/54/76/89/360_F_154768987_0mwhjvnf7XEO2CQyNy1Wz39rbzYH6v1w.jpg"
        alt="earth"
        className="w-100"
        style={{ opacity: "0.5" }}
      />
    </div>
  );
}

export default Home;
