/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export default function GroupCard({groups}) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {groups.map((group) => (
      <div
        key={group.id}
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <div className="flex items-center mb-4">
          <img
            src={group.image}
            alt={group.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p className="text-sm text-gray-500">{group.type}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Members:</p>
          <div className="flex flex-wrap gap-2">
            {group.members.map((member, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600">
            Total Amount:{" "}
            <span className="text-gray-800 font-semibold">
              {group.totalAmount}
            </span>
          </p>
        </div>
        <Link
          to={`/group/${group.id}`}
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
  )
}
