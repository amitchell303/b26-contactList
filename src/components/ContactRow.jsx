import React from "react";

function ContactRow() {
  return (
    <div>
      <tbody>
        <tr>
          <td>{ContactRow.name}</td>
          <td>{ContactRow.email}</td>
          <td>{ContactRow.phone}</td>
        </tr>
      </tbody>
    </div>
  );
}

export default ContactRow;
