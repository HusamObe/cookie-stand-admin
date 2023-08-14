import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="bg-green-500 p-4">
        <h1 className="text-3xl font-semibold text-white">Cookie Stand Admin</h1>
      </header>
      <main className="p-4">
  <form className="bg-white p-8 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Create Cookie Stand</h2>
    <div className="mb-4">
      <label className="block font-semibold" htmlFor="location">
        Location
      </label>
      <input
        className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
        type="text"
        id="location"
        name="location"
        placeholder="Enter location"
      />
    </div>
    <div className="flex space-x-4 mb-4">
      <div className="flex-grow">
        <label className="block font-semibold" htmlFor="minCustomers">
          Minimum Customers per Hour
        </label>
        <input
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
          type="number"
          id="minCustomers"
          name="minCustomers"
          placeholder="Enter minimum customers"
        />
      </div>
      <div className="flex-grow">
        <label className="block font-semibold" htmlFor="maxCustomers">
          Maximum Customers per Hour
        </label>
        <input
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
          type="number"
          id="maxCustomers"
          name="maxCustomers"
          placeholder="Enter maximum customers"
        />
      </div>
      <div className="flex-grow">
        <label className="block font-semibold" htmlFor="avgCookies">
          Average Cookies per Sale
        </label>
        <input
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
          type="number"
          id="avgCookies"
          name="avgCookies"
          placeholder="Enter average cookies"
        />
      </div>
    </div>
    <button
      className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
      type="submit"
    >
      Create
    </button>
  </form>
  <div className="mt-4 p-2 bg-white border border-gray-300 rounded">
    {/* Placeholder for JSON string */}
  </div>
</main>


      <footer className="bg-green-500 p-4 mt-auto">
        <p className="text-white">&copy; 2023 Husam Hasan</p>
      </footer>
    </div>
  );
}
