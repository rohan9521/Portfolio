export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">I am a developer passionate about creating amazing web applications.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p>Check out my latest projects.</p>
          <a href="/projects" className="text-blue-500">View Projects</a>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p>Explore my technical skills.</p>
          <a href="/skills" className="text-blue-500">View Skills</a>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Get in touch with me.</p>
          <a href="/contact" className="text-blue-500">Contact Me</a>
        </div>
      </div>
    </div>
  )
}