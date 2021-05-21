import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebar-header">Clock App</header>
      <nav className="list-container">
        <ul className="sidebar-list">
          <SidebarItem name="Clock" iconSrc="./icons/clock-icon.svg" />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
