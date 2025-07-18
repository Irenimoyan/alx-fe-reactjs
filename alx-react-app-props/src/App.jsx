import React from 'eact';
import ProfilePage from './ProfilePage';
import userContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example" };
  return (
    
    <userContext.Provider value={userData}>
      <profilePage  />
    </userContext.Provider>

  )  
}

export default App
