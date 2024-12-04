/* eslint-disable react/prop-types */


const SingleCard = ({ title, subtitle, number, members }) => {
  return (
    <div className="flex gap-5">
      <div className="relative">
        <span className="text-9xl font-bold m-0">{number}</span>
      </div>
      <div className="w-72 h-auto p-6 border-2 border-black bg-white rounded-lg flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-lg text-gray-500">{subtitle}</p>
        <div>
          <h4 className="text-lg font-semibold mt-4">Members:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {members.length > 0 ? (
              members.map((member, index) => (
                <li key={index} className="text-sm">
                  {member}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No members available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
