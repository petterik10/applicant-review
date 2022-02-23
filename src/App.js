import Column from "./components/Column";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [terminState, setTerminState] = useState([]);
  const [profileState, setProfileState] = useState([]);

  const [applicants, setApplicants] = useState([
    { name: "Jessica", id: 12 },
    { name: "Karl", id: 13 },
    { name: "Jessy", id: 14 },
    { name: "Mike", id: 15 },
  ]);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const receiveApplicant = (applicantInfo) => {
    const newApplicant = {
      name: applicantInfo,
      id: getRandomArbitrary(0, 20000),
    };
    setApplicants((prevApplicants) => {
      return [...prevApplicants, newApplicant];
    });
  };

  const receiveNextStage = (applicant, value) => {
    if (value === 0) {
      setApplicants((prevNotes) => {
        return prevNotes.filter((noteItem) => {
          return noteItem.id !== applicant.id;
        });
      });
      setTerminState((prevState) => {
        return [...prevState, applicant];
      });
    } else if (value === 1) {
      setTerminState((prevNotes) => {
        return prevNotes.filter((noteItem) => {
          return noteItem.id !== applicant.id;
        });
      });
      setProfileState((prevState) => {
        return [...prevState, applicant];
      });
    }
  };

  const receivePreviousStage = (applicant, value) => {
    if (value === 0) return;
    if (value === 1) {
      setTerminState((prevNotes) => {
        return prevNotes.filter((noteItem) => {
          return noteItem.id !== applicant.id;
        });
      });
      setApplicants((prevState) => {
        return [...prevState, applicant];
      });
    } else if (value === 2) {
      setProfileState((prevNotes) => {
        return prevNotes.filter((noteItem) => {
          return noteItem.id !== applicant.id;
        });
      });
      setTerminState((prevState) => {
        return [...prevState, applicant];
      });
    }
  };
  return (
    <div className="App">
      <div className="layout">
        <Column
          content="Applicant info"
          buttonAvailable={true}
          setShowForm={setShowForm}
          applicants={applicants}
          showApplicants={true}
          setNewStage={receiveNextStage}
          setPreviousStage={receivePreviousStage}
          value={0}
        />
        <Column
          content="Termin Info"
          buttonAvailable={false}
          applicants={terminState}
          showApplicants={true}
          setNewStage={receiveNextStage}
          setPreviousStage={receivePreviousStage}
          value={1}
        />
        <Column
          content="Profile Info"
          buttonAvailable={false}
          applicants={profileState}
          showApplicants={true}
          setPreviousStage={receivePreviousStage}
          setNewStage={receiveNextStage}
          value={2}
        />
      </div>
      {showForm && (
        <Form setApplicant={receiveApplicant} setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default App;
