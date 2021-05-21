import SidebarItems from './SidebarItems';
import SocialMedia from './SocialMedia';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1>Clock App</h1>
      </header>
      <nav className="list-container">
        <ul className="sidebar-list">
          <SidebarItems />
        </ul>
      </nav>
      <SocialMedia />
    </aside>
  );
};

export default Sidebar;
