import { Tabs, rem } from "@mantine/core";
import { useState } from "react";
import {
  ServiceDetails,
  ServiceCarousel,
} from "../../../components/components";
import { psiraServices, psiraTraining } from "../../../constants";
import "./ServiceTabs.css";
import "../ServiceInfo/ServiceInfo.css";
import "@mantine/carousel/styles.css";
import "../../../components/ServiceDetails/ServiceDetails.css";

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("psiraTraining");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="container section-tabs">
      {/* <h3 className="services-title">Explore Our Services</h3> */}
      <Tabs
        color="gray"
        radius="xs"
        defaultValue="psiraTraining"
        className="container">
        <Tabs.List className="tabList">
          <Tabs.Tab
            value="psiraTraining"
            className="tabLabel"
            style={{
              fontSize: activeTab === "psiraTraining" ? rem(25) : rem(22),
            }}
            onClick={() => handleTabChange("psiraTraining")}>
            Security Training
          </Tabs.Tab>
          <Tabs.Tab
            value="psiraServices"
            className="tabLabel"
            style={{
              fontSize: activeTab === "psiraServices" ? rem(25) : rem(22),
            }}
            onClick={() => handleTabChange("psiraServices")}>
            PSIRA SERVICES
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          value="psiraTraining"
          style={{
            // height: "500px",
            marginTop: "70px",
          }}>
          <ServiceDetails services={psiraTraining} />
          <ServiceCarousel services={psiraTraining} />
        </Tabs.Panel>

        <Tabs.Panel
          value="psiraServices"
          style={{
            // height: "500px",
            marginTop: "70px",
          }}>
          <ServiceDetails services={psiraServices} />
          <ServiceCarousel services={psiraServices} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
