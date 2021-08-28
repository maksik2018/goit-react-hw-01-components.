import './App.css';
import Profile from './components/profile/Profile.jsx';
import user from './user.json';

function App() {
  return (
    <div>
    <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</div>
  );
}

export default App;