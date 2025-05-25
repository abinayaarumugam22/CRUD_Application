import axios from 'axios';

const StudentList = ({ students, refresh }) => {
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl mb-4">📋 Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s._id} className="flex justify-between items-center border-b py-2">
            <span>{s.name} ({s.age}) - {s.course}</span>
            <button onClick={() => deleteStudent(s._id)} className="text-red-500">🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
