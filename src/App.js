export default function App() {
  return (
    <main>
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
      <section className="two"></section>
        <div className="position: relative bottom-80 left-40 text-5xl font-bold ">About Me</div>
          <p className="position: relative padding:20px bottom-80 left-10 text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img className="float-left" src="public/portrait.jpeg" alt="portrait"></img>
          <p className=""></p>
      <section className="three"></section>
        <div className="portfolio">Portfolio Projects</div>
      <section className="four"></section>
        <div className="skills">Skills</div>
      <section className="five"></section>
        <div className="contact-me">Contact me</div>
    </main>
  )
}
