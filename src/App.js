import './App.css';
import React, { useState, createContext, useContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import StudentList from './components/student/StudentList';
import PostList from './components/post/PostList';
import StudetnDetail from './components/student/StudentDetail';

import Layout from './components/layout';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('CodeGym');

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<StudentList />} />
            <Route path="/student/list" element={<StudentList />} />
            <Route
              path="/student/detail/:studentId"
              element={<StudetnDetail />}
            />
            <Route path="/post/list" element={<PostList />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
