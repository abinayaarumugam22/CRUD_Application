import { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ refresh }) => {
  const [student, setStudent] = useState({ name: '', age: '', course: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.name || !student.age || !student.course) return alert("All fields required");
    await axios.post('http://localhost:5000/api/students', student);
    setStudent({ name: '', age: '', course: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <div className="flex gap-4">
        <input name="name" placeholder="Name" value={student.name} onChange={handleChange} className="border p-2 rounded w-full" />
        <input name="age" placeholder="Age" value={student.age} onChange={handleChange} className="border p-2 rounded w-full" />
        <input name="course" placeholder="Course" value={student.course} onChange={handleChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
    </form>
  );
};

export default StudentForm;
