

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
    <p className="mb-4">
      FitLife Gym is a premier fitness center committed to helping individuals achieve their health and wellness goals. We empower members through expert training, modern equipment, and a supportive community.
    </p>
  </div>

  <div>
    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
    <ul>
      <li>
        <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
      </li>
      <li>
        <a href="#" className="hover:text-white transition-colors duration-300">About</a>
      </li>
      <li>
        <a href="#" className="hover:text-white transition-colors duration-300">Programs</a>
      </li>
      <li>
        <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/ajeet-gupta-99aa6b281/" className="hover:text-white transition-colors duration-300">Linked</a>
      <a href="https://medium.com/@2301661530002" className="hover:text-white transition-colors duration-300">Medium</a>
      <a href="https://github.com/AJKakarot" className="hover:text-white transition-colors duration-300">Github</a>
    </div>
  </div>

  <div>
    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
    <p>Kanpur, India</p>
    <p>208024</p>
    <p>Email: gajeet031@gmail.com</p>
    <p>Phone: 8840713812</p>
  </div>
  </div>
    </footer>
  )
}

export default Footer