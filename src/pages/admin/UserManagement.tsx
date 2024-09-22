/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../redux/features/user/userEndpoints";
import { toast } from "sonner";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const UserManagement = () => {
  const { data: users, isFetching } = useGetAllUsersQuery(undefined);

  const [updateUserRole] = useUpdateUserRoleMutation();

  const tableData = users?.data?.map(
    ({
      _id,
      name,
      email,
      phone,
      role,
      address,
    }: {
      _id: string;
      name: string;
      email: string;
      phone: string;
      role: string;
      address: string;
    }) => ({
      key: _id,
      name,
      email,
      phone,
      role,
      address,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <button
              onClick={() => handleUserRoleUpdate(item?.key)}
              disabled={item?.role === "admin"}
              className={`btn btn-accent h-12 max-w-[138px] ${
                item?.role === "admin" ? "opacity-40" : "opacity-100"
              }`}
            >
              Make Admin
            </button>
          </div>
        );
      },
    },
  ];

  const handleUserRoleUpdate = async (id: string) => {
    const toastId = toast.loading("Updating user role...");
    try {
      const res = await updateUserRole(id);
      if (res?.data?.success) {
        console.log(true);
        toast.success("User role update successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
      console.log(err);
    }
  };

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

export default UserManagement;
