const DemoAccess = () => {

    const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;

    return (

      
        <section className="py-10 bg-gradient-to-b from-white via-blue-50/40 to-white">

            <div className="px-5 mx-auto max-w-7xl">

                  <div className="w-24 h-1 mx-auto mb-10 rounded-full bg-primary"></div>

            {/* Heading */}

            <div className="text-center">

                <h2 className="text-3xl font-bold text-gray-900">
                    Explore the MediGo Dashboard
                </h2>

                <p className="max-w-3xl mx-auto mt-4 text-gray-500">
                    Explore the complete healthcare management system through
                    the Admin and Doctor dashboards using the demo accounts
                    below.
                </p>

            </div>


            <div className="flex flex-wrap justify-center gap-4 mt-10">

                  <div className="px-5 py-2 font-medium text-blue-700 border border-blue-100 rounded-full bg-blue-50">
                        👨‍💼 Admin Dashboard
                  </div>

                  <div className="px-5 py-2 font-medium text-green-700 border border-green-100 rounded-full bg-green-50">
                        👨‍⚕️ Doctor Dashboard
                  </div>

                  <div className="px-5 py-2 font-medium text-purple-700 border border-purple-100 rounded-full bg-purple-50">
                        📅 Appointment Management
                  </div>


                  <div className="px-5 py-2 font-medium text-pink-700 border border-pink-100 rounded-full bg-pink-50">
                        🩺 Doctor Availability
                  </div>

                  <div className="px-5 py-2 font-medium border rounded-full bg-cyan-50 text-cyan-700 border-cyan-100">
                        👤 Profile Management
                  </div>

            </div>

            <div className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-lg mt-14 rounded-3xl">

            {/* Card Header */}
            <div className="py-5 text-center text-white bg-primary">

                  <h3 className="text-2xl font-semibold">
                        Dashboard Demo Access
                  </h3>

                  <p className="mt-1 text-sm opacity-90">
                        Use these demo accounts to explore every feature of MediGo.
                  </p>

            </div>

            {/* Card Body */}
            <div className="grid md:grid-cols-2">

            {/* Admin */}
            <div className="p-8 border-b border-gray-200 md:border-b-0 md:border-r">

                  <div className="flex items-center gap-3 mb-6">

                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-blue-100 rounded-full">
                        👨‍💼
                  </div>

                  <div>

                        <h4 className="text-xl font-semibold">
                              Admin Account
                        </h4>

                        <p className="text-sm text-gray-500">
                              Manage doctors & appointments
                        </p>

                  </div>

                  </div>

                  <div className="space-y-3">

                  <p>
                        <span className="font-semibold">Email</span>
                        <br />
                        demo.admin@medigo.com
                  </p>

                  <p>
                        <span className="font-semibold">Password</span>
                        <br />
                        demo123
                  </p>

                  </div>

                  </div>

                  {/* Doctor */}
                  <div className="p-8">

                        <div className="flex items-center gap-3 mb-6">

                        <div className="flex items-center justify-center w-12 h-12 text-2xl bg-green-100 rounded-full">
                              👨‍⚕️
                        </div>

                        <div>

                              <h4 className="text-xl font-semibold">
                                    Doctor Account
                              </h4>

                              <p className="text-sm text-gray-500">
                                    Manage appointments & profile
                              </p>

                        </div>

                        </div>

                        <div className="space-y-3">

                        <p>
                              <span className="font-semibold">Email</span>
                              <br />
                              demo.doctor@medigo.com
                        </p>

                        <p>
                              <span className="font-semibold">Password</span>
                              <br />
                              demo123
                        </p>

                        </div>

                  </div>

            </div>

      </div>

      <div className="mt-10 text-center">

            <button
                  onClick={() => window.open("https://fahad-medigo-dashboard.netlify.app",
      "_blank"
    )}
                  className="px-10 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-primary hover:shadow-xl hover:scale-105"
            >
                  Explore Dashboard →
            </button>

            <p className="max-w-xl mx-auto mt-4 text-sm text-gray-500">
                  The Admin and Doctor dashboards share the same login page.
                  Simply choose your role and sign in using the demo credentials above.
            </p>
                  
      </div>

      <div className="max-w-2xl p-4 mx-auto mt-8 border border-yellow-200 bg-yellow-50 rounded-xl">

            <p className="text-sm text-center text-yellow-800">

                  <span className="font-semibold">Demo Notice:</span>
                  This project uses dedicated demo accounts for evaluation.
                  Payments are processed using Razorpay Test Mode, so no real
                  transactions are performed.

            </p>

            </div>
      </div>
      
        </section>

    )

}

export default DemoAccess