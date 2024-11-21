import pic from '../assets/dp.png'

export default function AboutPage() {
    return (
      <div className="bg-[#1f1f21] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-white text-center mb-12">About Me</h1>
  
          {/* About Section */}
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Left Section: Image */}
            <div className="flex justify-center">
              <img
                src={pic} 
                alt="About Me"
                className="w-72 h-72 object-cover rounded-full border-4 border-[#ffae00] shadow-lg"
              />
            </div>
  
            {/* Right Section: Bio */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Hello, I'm Dennis Njoroge</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              As a highly motivated and skilled Applied Computer Science graduate, 
              I have developed a strong foundation in various areas of technology, 
              especially in web development, mobile app development, and AI. 
              I possess expertise in creating responsive, user-friendly applications and websites,
               with a focus on clean, maintainable code and modern design principles. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                When I'm not working, you can find me cycling,watching documentaries and sleeping. I'm always looking to learn new things, 
                take on challenging projects, and collaborate with like-minded individuals to create something impactful.
              </p>
            </div>
          </div>
  
          {/* Skills/Highlights Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Skills & Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skill Item */}
              <div className="bg-[#2a2a2c] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                <p className="text-gray-300">
                Skilled in front-end development using HTML, CSS, and JavaScript. 
                Additionally, I have hands-on experience with responsive web design
                 frameworks like Bootstrap and tools such as React for creating dynamic, interactive user interfaces.
                    </p>
              </div>
              <div className="bg-[#2a2a2c] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-white mb-2">Mobile App Development (Android)</h3>
                <p className="text-gray-300">
                Proficient in building native Android applications using Java and Kotlin, 
                with a deep understanding of Android SDK, APIs, and design principles for 
                crafting seamless user experiences.
                    </p>
              </div>
              <div className="bg-[#2a2a2c] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-white mb-2">AI and Machine Learning</h3>
                <p className="text-gray-300">
                Knowledgeable in AI fundamentals with experience applying machine learning algorithms for real-world 
                applications. I have a strong understanding of data preprocessing, model training, and evaluation 
                techniques, as well as using Python and popular libraries like TensorFlow and Scikit-Learn.
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  