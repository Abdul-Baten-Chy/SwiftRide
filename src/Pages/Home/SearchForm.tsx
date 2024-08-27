export function SearchForm() {
  return (
    <form className=" ">
      <h2 className="text-2xl font font-montserrat font-semibold text-white mb-6 text-center">
        Search
      </h2>

      <fieldset className="mb-4">
        <label
          htmlFor="location"
          className="block text-white font-lato font-medium"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full bg-gray-200 text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
          placeholder="Enter location"
        />
      </fieldset>

      <fieldset className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-white font-lato font-medium mb-1"
        >
          Pick Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="w-full bg-gray-200 text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
        />
      </fieldset>

      <fieldset className="mb-6">
        <label
          htmlFor="endDate"
          className="block text-white font-lato font-medium mb-1"
        >
          Pick End Date
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          className="w-full bg-gray-200 text-gray-800 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
        />
      </fieldset>

      <button
        type="submit"
        className="w-full bg-customBlue text-black p-2 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        Search
      </button>
    </form>
  );
}
