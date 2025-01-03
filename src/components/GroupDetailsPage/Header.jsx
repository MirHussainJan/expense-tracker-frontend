/* eslint-disable react/prop-types */


export default function Header({setShowSettleUpModal, setShowBalancesModal, groupMembers, showAllMembers, setShowAllMembers, transactions}) {
    console.log("Hello", transactions);
  const handleSettleUp = () => {
        setShowSettleUpModal(true); // Show the settle-up modal
      };
    
      const handleBalances = () => {
        // Open the balances modal
        setShowBalancesModal(true);
      };
  return (
    <div className="border-2 rounded-xl border-black text-center relative bg-white p-6 mx-6">
    <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
      <img
        src="/right.jfif"
        alt="Group"
        className="w-20 h-20 rounded-full border-2 bg-cover bg-center object-cover object-center"
      />
    </div>
    <h1 className="font-bold text-xl mt-12">{transactions.groupName}</h1>
    <p className="mt-2">
      You are owed <span className="font-semibold">{Math.round(transactions.totalOwed)}</span> overall
    </p>
    <p className="text-sm text-gray-600 mt-2">
      {transactions.map((member, index) => (
        <span key={index}>
          {member.label.includes('you') ? `${member.label} ${member.amount}` : ''} 
          <span className="font-semibold text-black">{member.owes}</span>
          { " | " }
        </span>
      ))}
      {groupMembers.length > 3 && !showAllMembers && (
        <button
          className="text-gray-500 underline ml-2"
          onClick={() => setShowAllMembers(true)}
        >
          View More
        </button>
      )}
    </p>
    <div className="mt-4 flex justify-center space-x-4">
      <button
        className="bg-black text-white text-sm font-semibold py-2 px-6 rounded-full"
        onClick={handleSettleUp}
      >
        Settle up
      </button>
      <button
        className="bg-black  text-white text-sm font-semibold py-2 px-6 rounded-full"
        onClick={handleBalances}
      >
        Balances
      </button>
    </div>
  </div>
  )
}
