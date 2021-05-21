import SidebarItem from './SidebarItem';
import SocialMedia from './SocialMedia';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h1>Clock App</h1>
      </header>
      <nav className="list-container">
        <ul className="sidebar-list">
          <SidebarItem name="Clock" iconSrc="./icons/clock-icon.svg" />
          <SidebarItem name="Stopwatch" iconSrc="./icons/stopwatch-icon.svg" />
          <SidebarItem name="Pomodoro" iconSrc="./icons/pomodoro-icon.svg" />
          <SidebarItem
            name="Interval"
            iconSrc="./icons/interval-timer-icon.svg"
          />
          <SidebarItem
            name="Alarm Clock"
            iconSrc="./icons/alarm-clock-icon.svg"
          />
        </ul>
      </nav>
      <SocialMedia />
    </aside>
  );
};

export default Sidebar;
