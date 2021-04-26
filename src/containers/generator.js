import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Button } from "react-bootstrap";
export function generateRows() {
  const data = [
    {
      requestId: "ABC123",
      activity: "Export",
      domain: "Identity",
      customerId: "XYZ123",
      requestIdStatus: "Failed",
      domainStatus: "50%",
      timestamp: moment("2021-04-10").format("lll"),
      action: <Button>Resume</Button>,
    },
    {
      requestId: "ABC123",
      activity: "Export",
      domain: "Data Migration",
      customerId: "XYZ456",
      requestIdStatus: "In progress",
      domainStatus: "30%",
      timestamp: moment("2021-05-10").format("lll"),
      action: "None",
    },
    {
      requestId: "ABC123",
      activity: "Import",
      domain: "Payments",
      customerId: "XYZ678",
      requestIdStatus: "Success",
      domainStatus: "26%",
      timestamp: moment("2021-01-10").format("lll"),
      action: <Button>Dowonload logs</Button>,
    },
    {
      requestId: "ABC123",
      activity: "Import",
      domain: "Information",
      customerId: "XYZ890",
      requestIdStatus: "In progress",
      domainStatus: "12%",
      timestamp: moment("2021-03-10").format("lll"),
      action: "None",
    },
    {
      requestId: "ABC123",
      activity: "Export",
      domain: "Identity",
      customerId: "LMN123",
      requestIdStatus: "In progress",
      domainStatus: "87%",
      timestamp: moment("2021-02-10").format("lll"),
      action: "None",
    },
    {
      requestId: "DEF345",
      activity: "Export",
      domain: "Data Migration",
      customerId: "LMN456",
      requestIdStatus: "Success",
      domainStatus: "66%",
      timestamp: moment("2021-04-10").format("lll"),
      action: <Button>Dowonload logs</Button>,
    },
    {
      requestId: "IJK442",
      activity: "Import",
      domain: "Data Migration",
      customerId: "XYZ123",
      requestIdStatus: "In progress",
      domainStatus: "43%",
      timestamp: moment("2021-04-20").format("lll"),
      action: "None",
    },
    {
      requestId: "IJK332",
      activity: "Export",
      domain: "Data Migration",
      customerId: "RET242",
      requestIdStatus: "Success",
      domainStatus: "55%",
      timestamp: moment("2016-01-01").format("lll"),
      action: <Button>Dowonload</Button>,
    },
  ];

  return data;
}
