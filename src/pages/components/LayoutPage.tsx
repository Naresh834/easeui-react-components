type Props = {};

function LayoutPage({}: Props) {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Layout
          </h1>

          <p className="mt-2 text-gray-500">
            A clean and responsive page layout.
          </p>
        </div>

        {/* Layout Preview */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
            <h2 className="text-lg font-semibold">
              My Application
            </h2>

            <nav className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Home
              </a>

              <a href="#" className="hover:text-gray-900">
                About
              </a>

              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
            </nav>
          </header>

          {/* Body */}
          <div className="flex min-h-[400px]">
            
            {/* Sidebar */}
            <aside className="w-56 border-r border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Navigation
              </h3>

              <div className="space-y-2">
                <button className="w-full rounded-lg bg-white px-4 py-2 text-left text-sm font-medium shadow-sm">
                  Dashboard
                </button>

                <button className="w-full rounded-lg px-4 py-2 text-left text-sm text-gray-600 hover:bg-white">
                  Profile
                </button>

                <button className="w-full rounded-lg px-4 py-2 text-left text-sm text-gray-600 hover:bg-white">
                  Settings
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
              <h2 className="text-2xl font-bold">
                Dashboard
              </h2>

              <p className="mt-2 text-gray-500">
                This is the main content area of the layout.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">
                    Users
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    1,240
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">
                    Revenue
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    ₹45,200
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">
                    Orders
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    320
                  </p>
                </div>
              </div>
            </main>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500">
            © 2026 My Application. All rights reserved.
          </footer>

        </div>
      </div>
    </div>
  );
}

export default LayoutPage;