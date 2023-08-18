export default function App() {
  return (
    <main>
      <section className = "hero d-flex align-items-center justify-content-center">
        <div className="video-wrap">
          <video src= "https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" autoplay="{true}" loop muted className="rotate-180">
          </video>
        </div>
        <div className="position-absolute w-100 gradient-overlay content-relative text-center"></div>
        <div className="content-relative text-center mb-5">
          <h1 className="mix-blend-difference text-2xl content-relative text-center position-absolute w-100 gradient-overlay mb-5">Janete Hays
            <br />
            Software Engineer
          </h1>
        </div>
      </section>
    </main>
  )
}
