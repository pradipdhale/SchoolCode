import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SchoolShedule from './Partials/SchoolSchedule';

import './styles.css';

const TabsComponent = () => {
  return (
    <div className="tabber">
      <Tabs>
        <TabList>
          <Tab>
            <p>Prepare Session</p>
          </Tab>
          <Tab>
            <p>Create Session</p>
          </Tab>
          <Tab>
            <p>Perform Roll Call</p>
          </Tab>
          <Tab>
            <p>Introduce Class</p>
          </Tab>
          <Tab>
            <p>Perform Hover</p>
          </Tab>
          <Tab>
            <p>Prepare For Finish</p>
          </Tab>
          <Tab>
            <p>Send De-Brief</p>
          </Tab>
          <Tab>
            <p>Pack-up Class</p>
          </Tab>
          <Tab>
            <p>Log Out</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
          <SchoolShedule />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <SchoolShedule />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <SchoolShedule />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <SchoolShedule />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default TabsComponent
