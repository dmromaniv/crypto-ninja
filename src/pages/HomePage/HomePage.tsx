import Example from "@components/Example";

import reactLogo from "@/assets/react.svg";

const HomePage = () => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Example />
    </>
  );
};

export default HomePage;
