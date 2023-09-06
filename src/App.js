import portrait from "./assets/portrait.jpeg"

export default function App() {
  return (
    <main>
    <div className="flex"></div>
      <section className = "hero d-flex align-items-center justify-content-center">
        <div className="video-wrap">
          <video src= "https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" autoplay="{true}" loop muted className="rotate-180" id="video-bg">
          </video>
        </div>
        <div className="position-absolute w-100 gradient-overlay"></div>
        <div className="content position-relative text-center mb-5">
          <h1 className="hero-title blend">Janete Hays
            <br />
            Software Engineer
          </h1>
        </div>
      </section>
      <section className="flex align-items-center justify-content-center">
        <div className="position-absolute w-100"></div>
        <div className="content position-relative text-center mb-5"></div>
          <div className="mx-auto rounded-xl shadow-md">
            <div className="md:flex flex-row-reverse">
              <div className="md:shrink-0">
                <img src={portrait} alt="portrait" className="p-8 w-80 h-full rounded-full mx-auto md:h-96 md:w-full md:my-52 md:p-0"/>
              </div>
            <div className="inline-flex flex-wrap justify-around content-center p-8 z-10">
              <div className="uppercase tracking-wide text-center text-base text-indigo-500 font-semibold md:text-3xl">About Me</div>
              <p className="mt-2 text-slate-500 text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              </div>
            </div>
          </section>
      <section className="mx-auto rounded-xl shadow-md bg-light-purple text-6xl text-center py-20">Portfolio Projects
      <div className="wrapper">
        <h1 className="project">Project One!!
        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front">
                <div className="inner">
                  <p>Project One</p>
                  <span>This is project one!</span>
                </div>
              </div>
              <div className="back text-center rounded-lg text-2xl position-absolute top-0 left-0 w-full">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="front">
                <div className="inner">
                  <p>Project Two</p>
                  <span>This is project two!</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="front">
                <div className="inner">
                  <p>Project three</p>
                  <span>This is project three!</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </h1>
      </div>
      </section>
        <article className="cards"></article>
        <article className="cards"></article>
        <article className="cards"></article>
      <section className="four"></section>
        <div className="skills">Skills</div>
      <section className="five"></section>
        <div className="contact-me">Contact me</div>
    </main>
  )
}


// inline-block self-center text-center text-auto font-bold

// flex text-center text-xs sm:text-s md:text-2xl lg:text-3xl