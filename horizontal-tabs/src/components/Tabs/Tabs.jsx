import { useState } from "react";
import Tab from "../Tab/Tab";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs">
        {children.map(({ props: { label } }) => (
          <Tab
            activeTab={activeTab}
            key={label}
            label={label}
            onClick={onClickTabItem}
          />
        ))}
      </div>
      <div className="contentContainer">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </>
  );
}

export default Tabs;
