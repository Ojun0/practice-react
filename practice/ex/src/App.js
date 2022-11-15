import "./App.css";
import NoticeList from "./components/NoticeList";
import NoticeInputForm from "./components/NoticeInputForm";
import { useState } from "react";
import useSubject from "./data/Subject-data.json";
import useNotice from "./data/Notice-data.json";
import { v4 } from "uuid";
import SubjectInputForm from "./components/SubjectInputForm";
import SubjectList from "./components/SubjectList";
import Title1 from "./components/Title1";
import Title2 from "./components/Title2";

function App() {
  const [notices, setNotice] = useState(useNotice.notice);
  const [subjects, setSubject] = useState(useSubject.subject);

  const removeNotice = (id) => {
    const newNotice = notices.filter((notice) => notice.id !== id);
    setNotice(newNotice);
  };

  const addNotice = (title, content) => {
    const newNotice = { id: v4(), title, content };
    setNotice([...notices, newNotice]);
  };

  const updateNotice = (id, title, content) => {
    const newNotice = notices.map((notice) =>
      notice.id === id ? { id, title, content } : notice
    );
    setNotice(newNotice);
  };

  const removeSubject = (id) => {
    const newSubject = subjects.filter((subject) => subject.id !== id);
    setSubject(newSubject);
  };

  const addSubject = (title, content) => {
    const newSubject = { id: v4(), title, content };
    setSubject([...subjects, newSubject]);
  };

  const updateSubject = (id, title, content) => {
    const newSubject = subjects.map((subject) =>
      subjects.id === id ? { id, title, content } : subject
    );
  };

  return (
    <div className="App">
      <Title1 title="Notice"></Title1>
      <NoticeList
        notices={notices}
        onRemoveNotice={removeNotice}
        onUpdateNotice={updateNotice}
      ></NoticeList>
      <NoticeInputForm onAddNotice={addNotice}></NoticeInputForm>
      <Title2 title="Subject"></Title2>
      <SubjectList
        subjects={subjects}
        onRemoveSubject={removeSubject}
        onUpdateSubject={updateSubject}
      ></SubjectList>
      <SubjectInputForm onAddSubject={addSubject}></SubjectInputForm>
    </div>
  );
}

export default App;
