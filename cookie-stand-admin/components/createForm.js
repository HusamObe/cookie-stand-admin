import React, { useState } from 'react';

function CreateForm({ onCreate }) {
  const [location, setLocation] = useState('');
  const [minCustomers, setMinCustomers] = useState('');
  const [maxCustomers, setMaxCustomers] = useState('');
  const [avgCookies, setAvgCookies] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const cookieStand = {
      location,
      minCustomers,
      maxCustomers,
      avgCookies,
    };

    onCreate(cookieStand);
  }

  return (
    <form
      className="bg-green-200 p-8 rounded-lg w-full max-w-md"
      onSubmit={submitHandler}
    >
      <h2 className="text-xl font-semibold text-center text-black mb-4">
        Create Cookie Stand
      </h2>
      <div className="mb-4">
        <label className="block font-semibold text-black" htmlFor="location">
          Location
        </label>
        <input
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="flex-grow">
          <label
            className="block font-semibold text-black"
            htmlFor="minCustomers"
          >
            Minimum Customers per Hour
          </label>
          <input
            className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
            type="number"
            id="minCustomers"
            name="minCustomers"
            placeholder="Enter minimum customers"
            value={minCustomers}
            onChange={(e) => setMinCustomers(e.target.value)}
          />
        </div>
        <div className="flex-grow">
          <label
            className="block font-semibold text-black"
            htmlFor="maxCustomers"
          >
            Maximum Customers per Hour
          </label>
          <input
            className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
            type="number"
            id="maxCustomers"
            name="maxCustomers"
            placeholder="Enter maximum customers"
            value={maxCustomers}
            onChange={(e) => setMaxCustomers(e.target.value)}
          />
        </div>
        <div className="flex-grow">
          <label
            className="block font-semibold text-black"
            htmlFor="avgCookies"
          >
            Average Cookies per Sale
          </label>
          <input
            className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
            type="number"
            id="avgCookies"
            name="avgCookies"
            placeholder="Enter average cookies"
            value={avgCookies}
            onChange={(e) => setAvgCookies(e.target.value)}
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
  );
}

export default CreateForm;
