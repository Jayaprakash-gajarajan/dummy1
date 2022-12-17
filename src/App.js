import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import { useState } from 'react';
import { getQueriesForElement } from '@testing-library/react';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Experience from './components/ExperienceBox/Experience';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div className='App'>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );

}


export default App;
