import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface TabsProps 
{
  tabTitles: string[];
  tabContents: string[];
  tabBgColor: string;
  tabTextColor: string;
  tabBgActiveColor: string;
  tabTextActiveColor: string;
  tabContentBgColor: string;
  tabContentTextColor: string;
  borderColor: string;
}

export const Tabss: React.FC<TabsProps> = (
  {
    tabTitles = ["Title 1", "Title 2"],
    tabContents = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    ],
    tabBgColor = "#bbf7d0",
    tabTextColor = "#15803d",
    tabBgActiveColor = "#a5f3fc",
    tabTextActiveColor = "#0e7490",
    tabContentBgColor = "#fef3c7",
    tabContentTextColor = "#b45309",
    borderColor = "#15803d",
  }
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => 
  {
    setSelectedIndex(index);
  };

  const getTabStyles = (index: number) => (
  {
    backgroundColor: index === selectedIndex ? tabBgActiveColor : tabBgColor,
    color: index === selectedIndex ? tabTextActiveColor : tabTextColor,
    borderColor: borderColor,
  });

  const contentStyles = 
  {
    backgroundColor: tabContentBgColor,
    color: tabContentTextColor,
  };

  return (
    <Tabs onSelect={handleSelect} selectedIndex={selectedIndex}>
      <TabList>
        {
        tabTitles.map((title, index) => (
          <Tab key={index} style={getTabStyles(index)}>
            {title}
          </Tab>
        ))}
      </TabList>
      {
        tabContents.map((content, index) => (
          <TabPanel key={index} style={contentStyles}>
            <h2>{content}</h2>
          </TabPanel>
      ))}
    </Tabs>
  );
};
