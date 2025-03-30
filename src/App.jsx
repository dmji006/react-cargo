import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingNavbar from './components/LandingNavbar';
import DashboardNavbar from './components/DashboardNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function NavbarWrapper() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname.startsWith('/my-cars') || 
                          location.pathname.startsWith('/browse-cars') ||
                          location.pathname.startsWith('/profile') ||
                          location.pathname.startsWith('/settings');

  return isDashboardRoute ? <DashboardNavbar /> : <LandingNavbar />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                          <span className="block">Peer-to-Peer</span>
                          <span className="block text-blue-600">Car Rental System</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          Welcome to Cargo - Your trusted platform for car rentals in Barangay East Tapinac, Olongapo City. 
                          Connect with local car owners and rent vehicles with ease.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                              Get Started
                            </button>
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Why Choose Cargo?
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      {/* Feature 1 */}
                      <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="ml-16">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Fast & Easy Booking</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Book your rental car in minutes with our streamlined process.
                          </p>
                        </div>
                      </div>

                      {/* Feature 2 */}
                      <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-16">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">24/7 Support</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Our support team is always ready to help you with any questions.
                          </p>
                        </div>
                      </div>

                      {/* Feature 3 - Local Community (previously Feature 4) */}
                      <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="ml-16">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Local Community</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Connect with trusted car owners in your local community.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 