/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllBookingQuery } from "../../redux/features/booking/bookingEndpoints";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const BookingManagement = () => {
  const { data: bookings, isFetching } = useGetAllBookingQuery(undefined);

  const tableData = bookings?.data?.map(
    ({
      _id,
      customer,
      service,
      slot,
    }: {
      _id: string;
      customer: any;
      service: any;
      slot: any;
    }) => ({
      key: _id,
      name: customer?.name,
      email: customer?.email,
      phone: customer?.phone,
      service: service?.name,
      price: service?.price,
      duration: service?.duration,
      date: slot?.date,
      startTime: slot?.startTime,
      endTime: slot?.endTime,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Cus_Name",
      key: "cus_name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Cus_Email",
      key: "Cus_Email",
      dataIndex: "email",
    },
    {
      title: "Cus_Phone",
      key: "Cus_Phone",
      dataIndex: "phone",
    },
    {
      title: "Service",
      key: "Service",
      dataIndex: "service",
    },
    {
      title: "Price",
      key: "Price",
      dataIndex: "price",
    },
    {
      title: "Duration",
      key: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Date",
      key: "Date",
      dataIndex: "date",
    },
    {
      title: "Start",
      dataIndex: "startTime",
    },
    {
      title: "End",
      key: "End",
      dataIndex: "endTime",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        pagination={false}
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default BookingManagement;
