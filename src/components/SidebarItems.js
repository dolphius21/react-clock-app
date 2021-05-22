import AlarmClockIcon from '../icons/AlarmClockIcon';
import ClockIcon from '../icons/ClockIcon';
import IntervalIcon from '../icons/IntervalIcon';
import PomodoroIcon from '../icons/PomodoroIcon';
import StopWatchIcon from '../icons/StopWatchIcon';

const SidebarItems = () => {
  return (
    <>
      <li className={`sidebar-item ${'active'}`}>
        <ClockIcon />
        <p>Clock</p>
      </li>
      <li className="sidebar-item">
        <StopWatchIcon />
        <p>Stopwatch</p>
      </li>
      <li className="sidebar-item">
        <PomodoroIcon />
        <p>Pomodoro</p>
      </li>
      <li className="sidebar-item">
        <IntervalIcon />
        <p>Interval Timer</p>
      </li>
      <li className="sidebar-item">
        <AlarmClockIcon />
        <p>Alarm Clock</p>
      </li>
    </>
  );
};

export default SidebarItems;
