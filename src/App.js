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
        <div className="text-3xl font-bold underline bg-green-200 position-center">About Me</div>
        <img className="float-left"></img>
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
