import React, { useState } from "react";

export default function Form({ setApplicant, setShowForm }) {
  const [newApplicant, setNewApplicant] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setApplicant(newApplicant);
    setShowForm(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => [setNewApplicant(event.target.value)]} />
      <div>Add new applicant</div>
      <div className="btn">
        <button>Add new Applicant </button>
      </div>
    </form>
  );
}
