const SidebarItem = ({ name, iconSrc }) => {
  return (
    <>
      <li className="sidebar-item">
        <img className="sidebar-icons" src={iconSrc} alt={name} />
        {name}
      </li>
    </>
  );
};

export default SidebarItem;
