import React, {useState, useEffect} from "react";
import { GoPersonFill } from "react-icons/go";
import { Space, Card } from 'antd';
import { Area, Column } from '@ant-design/plots';
import './report.css'

function Reports() {

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

  const columndata = [
    {
      type: '2016',
      sales: 38,
    },
    {
      type: '2017',
      sales: 52,
    },
    {
      type: '2018',
      sales: 61,
    },
    {
      type: '2019',
      sales: 145,
    }
  ];

  const columnconfig = {
    columndata,
    xField: 'type',
    yField: 'sales',
    // columnWidthRatio: 0.8,
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
            <p>Total working hours</p>
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
        </Space>
      </div>
      <div className="container-fluid px-5" id="report-graph">
        <Space size={3} wrap style={{ width: "100%" }}>
          <Card>
            <Area {...config} />;
          </Card>
          <Card>
            {/* <Column {...columnconfig} /> */}
          </Card>
          <Card>
            <p>Total working hours</p>
          </Card>
        </Space>
      </div>
    </>
  );
}

export default Reports;