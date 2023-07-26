import React, { useState, useEffect } from "react";
import { GoPersonFill } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { Space, Card } from 'antd';
import { Area, Column, Liquid } from '@ant-design/plots';

import './report.css'

function Reports() {

  return (
    <>
      <div >
        <Space size="small" className="employetext">
          <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          <p>Reports</p>
        </Space>
      </div>
      <div className="container-fluid px-5" id="report">
        <Space size={4} wrap style={{ width: "100%" }}>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>320.00</h2>
            <p>Total working hours</p>
          </Card>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>56.00</h2>
            <p>Total Regular hours</p>
          </Card>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>80.32</h2>
            <p>Total Overtime hours</p>
          </Card>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>80.32</h2>
            <p>Total pay</p>
          </Card>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>80.32</h2>
            <p>Overtime pay</p>
          </Card>
          <Card>
            <div className="d-flex justify-content-between mb-4">
              <FaClock style={{ fontSize: 30 }} />
              <h6>+3Hrs Longer</h6>
              <p>vs last month</p>
            </div>
            <h2>80.32</h2>
            <p>Total Advance Outstanding</p>
          </Card>
        </Space>
      </div>
      <div className="container-fluid px-5" id="report-graph">
        <Space size={3} style={{ width: "100%" }}>
          <Card>
              <h5>Total Working Hours</h5>
              <TotalWorkingHours />
          </Card>
          <Card>
              <h5>Total Salary</h5>
              <TotalSalary />
          </Card>
          <Card>
              <h5>Total Overtime</h5>
              <TotalOvertime />
          </Card>
        </Space>
      </div>
    </>
  );
}

export default Reports;


const TotalWorkingHours = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  return (
    <Area {...config} />
  )
}

const TotalSalary = (props) => {
  const data = [
    { type: '2016', sales: 38 },
    { type: '2017', sales: 52 },
    { type: '2018', sales: 61 },
    { type: '2019', sales: 60 },
    { type: '2020', sales: 48 },
    { type: '2021', sales: 36 },
    { type: '2022', sales: 37 },
    { type: '2023', sales: 25 },
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
      meta: {
        type: {
          alias: 'asdad',
        },
        sales: {
          alias: 'cvbcb',
        },
      },
    },
  };

  
  return (
    <Column {...config} />
  )
}

const TotalOvertime = (props) => {
  
  const config = {
    percent: 0.56,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };
  
  return (
    <Liquid {...config} />
  )
}