import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    setLoading(true);
    fetch(
      `https://api.allorigins.win/raw?url=https://anonyig.com/api/ig/userInfoByUsername/sumitpandey7870`,
      {
        headers: {
          cookie:
            "_ga=GA1.1.1434781251.1716797856; uid=4c42192dd104a825; __gads=ID=8b6a59e0921116ae:T=1716797856:RT=1716817092:S=ALNI_MY3TwPELiLKx0In8FzkgTJOcARLTQ; __gpi=UID=00000e3027bdf282:T=1716797856:RT=1716817092:S=ALNI_MbWNod_TwQiWTNJ9YOOTRyH9lSrCg; __eoi=ID=56666e7a7948015:T=1716797856:RT=1716817092:S=AA-AfjYUrJfDRYK8USNcA_L1GJ5r; FCNEC=%5B%5B%22AKsRol-nlfFcUTBGGuz_h3APpUzAe5dJV9jt_BMiReeF1gGjhzIFd1jhBEHXo95MnKZSwiIkYXis_4SYZsSESzuZQdkb0rvLaAGYGJ2ioZ1p6Xt4qKnz75He4sCw8IvkY7nHosTYhrPa4Pz7_OXOEgjVrHcu4UFXOA%3D%3D%22%5D%5D; _ga_M1Z17CPHMW=GS1.1.1716817092.5.1.1716818388.0.0.0",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data.result.user);
        setUser(data.result.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  useEffect(() => {}, [user]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <section className="bg-white w-screen h-screen flex justify-center items-center">
        <div className="mx-auto lg:max-w-7xl w-full px-5 flex flex-row gap-10">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              View instagram{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                Anonymously <br />
              </span>
              is the Best Ever.
            </h1>
            <p className="mt-8 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              repellat perspiciatis aspernatur quis voluptatum porro incidunt,
              libero sequi quos eos velit
            </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <form
                  action="#"
                  className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                            border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600"
                >
                  <span className="min-w-max pr-2 border-r border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke="round"
                        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                      />
                    </svg>
                  </span>
                  <input
                    type="userid"
                    name=""
                    id=""
                    placeholder="Enter User ID"
                    className="w-full py-3 outline-none bg-transparent"
                    onChange={handleInputChange}
                  ></input>
                  <button
                    onClick={handleSearch}
                    type="submit"
                    className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                  >
                    <span className="hidden sm:flex relative z-[5]">
                      Get Started
                    </span>
                    <span className="flex sm:hidden relative z-[5]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Hero image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            ></img>
          </div>
        </div>
      </section>
      {user && !loading && <Profile user={user} />}
    </>
  );
};

export default Hero;
