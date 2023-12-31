import React, { useState } from "react";
import { Table, Input, Select } from 'antd';
import './DynamicTable.css'
import { Space, Tooltip, Modal, Button } from 'antd';
import { MdEditSquare, MdDelete } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function DynamicTable({ config, columns, data, filterby, events }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const actoionOrder = [
    config.isActionleft === false ? 1 : 3, 2, config.isActionleft === false ? 3 : 1
  ]

  let pagingConfig = {}
  if (config.isPagination) {
    pagingConfig = {
      defaultPageSize: 5,
      showSizeChanger: config.isPaging,
      pageSizeOptions: ['5', '10', '15', '20', '30']
    }
  } else {
    pagingConfig = false;
  }

  if (config.isSorting) {
    columns.forEach(item => {
      if (item.dataIndex !== "action") {
        item["sorter"] = (a, b) => a.dataIndex - b.dataIndex;
      }
    });
  }

  const onhandleSelectChange = (e) => {
    console.log(e);
  }

  const onNavigateHandler = (e, obj) => {
    if(obj.isEdit){
      navigate(obj.nagigate);
    }
  }

  let actionIndex = columns.findIndex(x => x.dataIndex === "action");
  if (actionIndex !== -1) {
    if(config.isTableAction === true){
      columns[actionIndex]["render"] = (_, obj) => (
        <Space className="tableActionIcons">
          <Tooltip placement="top" title="Edit" >
            <MdEditSquare onClick={() => events.onTableHandler("edit", obj)} className="editicon" />
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <MdDelete onClick={showModal} className="deleteicon"
            />
          </Tooltip>
          <span className={config.isAdvance === true ? "" : "d-none"}>
            <Tooltip placement="top" title="Advance">
              <BiSolidDollarCircle onClick={() => events.onTableHandler("advance", obj)} className="dolloricon" />
            </Tooltip>
          </span>
        </Space>
      )
    }
  }

  let userIndex = columns.findIndex(x => x.dataIndex === "name");
  if (userIndex !== -1) {
      columns[userIndex]["render"] = (_, obj) => (
        <Space>
          <div className="trUserIcon">
            {obj.nameImg !== "" ? 
            <img src={`https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/${obj.nameImg}`} alt={obj.name} />
            : ''
          }
          </div>
          <p onClick={(e) => {onNavigateHandler(e, columns[userIndex])}}>{obj.name}<small>{obj.nameOutlet}</small></p>
        </Space>
      )
  }

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-5 mt-4">
      <div className="d-flex justify-content-between mb-4">
        { config.isAddNew && 
          <div style={{order : actoionOrder[0]}}></div>
        }
        { config.isSearchbox && 
          <div style={{order : actoionOrder[1]}} className="custom-input-fields">
            <Input.Search placeholder={filterby} onSearch={(e) => events.onSearchHandler(e)} style={{ width: 350 }} />
          </div> }
          <div style={{order : actoionOrder[2]}} className="custom-input-fields">
        { config.isAction && 
          <Select
            defaultValue={"All"}
            style={{ width: 350 }}
            onChange={onhandleSelectChange}
            options={[
              { value: 'Outlet1', label: 'Outlet1' },
              { value: 'Outlet2', label: 'Outlet2' },
              { value: 'Outlet3', label: 'Outlet3' },
              { value: 'Outlet4', label: 'Outlet4', disabled: true },
            ]}
          />
        }
        </div>
        
      </div>

      <div className="tableWrapper">
        {config.isCheckbox ?
          <Table rowSelection={rowSelection}
            pagination={pagingConfig}
            columns={columns}
            dataSource={data}
          /> :
          <Table
            pagination={pagingConfig}
            columns={columns}
            dataSource={data}
          />
        }
        {showModal ?
          <Modal className="deletemodalcss" title="Confirm" open={isModalOpen} 
          footer={[
            <Button key="Cancle" onClick={handleCancel}>
              Cancle
            </Button>,
            <Button key="Delete"   onClick={handleOk}>
              Delete
            </Button>
          ]}
          >
          <p> Are you sure you want to delete it?</p>
          </Modal>
          : ""}
      </div>
    </div>
  );
}