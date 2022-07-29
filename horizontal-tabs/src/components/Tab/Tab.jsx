function Tab({ onClick, activeTab, label }) {
  const onClickTab = () => {
    onClick(label);
  };

  let className = "tab";

  if (activeTab === label) {
    className += " active";
  }

  return (
    <button type="button" className={className} onClick={onClickTab}>
      {label}
    </button>
  );
}

export default Tab;
