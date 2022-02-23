function Column({
  content,
  buttonAvailable,
  setShowForm,
  applicants,
  showApplicants,
  setNewStage,
  value,
  setPreviousStage,
}) {
  return (
    <div className="column">
      {content}
      {showApplicants &&
        applicants.map((applicant) => {
          return (
            <div key={applicant.name}>
              {applicant.name}
              {value !== 2 && (
                <button onClick={() => [setNewStage(applicant, value)]}>
                  Move to the next stage
                </button>
              )}
              {!buttonAvailable && (
                <button onClick={() => setPreviousStage(applicant, value)}>
                  Move to the previous stage
                </button>
              )}
            </div>
          );
        })}

      {buttonAvailable && (
        <button onClick={() => setShowForm(true)} className="addInfo">
          +
        </button>
      )}
    </div>
  );
}

export default Column;
