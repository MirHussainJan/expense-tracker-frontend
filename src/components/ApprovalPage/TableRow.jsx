import React from "react";
import ActionButtons from "./ActionButtons";

const TableRow = ({ row, index, onApprove, onReject }) => {
  return (
    <div
      className={`grid  grid-cols-5 items-center py-4 px-6 rounded-lg mb-3 ${
        row.status === "approved"
          ? "bg-glass border-white border-2"
          : index % 2 === 0
          ? "border-2 border-black"
          : "bg-white shadow-md"
      }`}
    >
      {/* Owner */}
      <div className="flex items-center space-x-3">
        <img
          src={row.owner.avatar}
          alt={`${row.owner.name}'s avatar`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-bold">{row.owner.name}</p>
          <p className="text-sm">{row.owner.role}</p>
        </div>
      </div>

      {/* Category */}
      <div className="flex justify-center">
        <span
          className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium"
        >
          {row.category.name}
        </span>
      </div>

      {/* Amount */}
      <div className="text-center">{row.amount}</div>

      {/* Frequency */}
      <div className="text-center">{row.frequency}</div>

      {/* Actions */}
      <ActionButtons
        status={row.status}
        onApprove={() => onApprove(row.id)}
        onReject={() => onReject(row.id)}
      />
    </div>
  );
};

export default TableRow;