import { Modal, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useCreateSlotsMutation,
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
} from "../../redux/features/slots/slotsEndpoints";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import CForm from "../../components/form/CForm";
import CSelect from "../../components/form/CSelect";
import { toast } from "sonner";
import { useGetServicesQuery } from "../../redux/features/services/servicesEndpoints";
import CDatePicker from "../../components/form/CDatePicker";
import CTimePicker from "../../components/form/CTimePicker";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  slotCreateValidationSchema,
  slotUpdateStatusValidationSchema,
} from "../../schemas/slotValidationSchema";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const SlotManagement = () => {
  //get slots data
  const { data: slots, isFetching } = useGetAllSlotsQuery(undefined);
  //table data
  const tableData = slots?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      isBooked,
      service,
    }: {
      _id: string;
      date: string;
      startTime: string;
      endTime: string;
      isBooked: string;
      service: { name: string };
    }) => {
      return {
        _id,
        date,
        startTime,
        endTime,
        isBooked,
        name: service?.name,
      };
    }
  );
  //table columns
  const columns: TableColumnsType<DataType> = [
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      key: "startTime",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      key: "endTime",
      dataIndex: "endTime",
    },
    {
      title: "Status",
      key: "isBooked",
      dataIndex: "isBooked",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <UpdateStatusModal data={item}></UpdateStatusModal>
          </div>
        );
      },
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
      {/* table */}
      <Table
        loading={isFetching}
        pagination={false}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <CreateSlotsModal></CreateSlotsModal>
    </div>
  );
};

// update status modal
const UpdateStatusModal = ({
  data,
}: {
  data: {
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
  };
}) => {
  const [updateSlot] = useUpdateSlotMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isBookedOptions = [
    {
      value: "available",
      label: "Available",
    },
    {
      value: "canceled",
      label: "Canceled",
    },
  ];

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Status updating...");
    try {
      const res = await updateSlot({ _id: data?._id, updateData: value });
      if (res?.data?.success) {
        setIsModalOpen(false);
        toast.success("Updated Successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <>
      <button
        disabled={data?.isBooked === "booked"}
        onClick={showModal}
        className={`btn btn-accent h-11 max-w-[150px] ${
          data?.isBooked === "booked" ? "opacity-80" : ""
        }`}
      >
        Update Status
      </button>
      <Modal
        title="Status Update"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(slotUpdateStatusValidationSchema)}
        >
          <CSelect
            label="Status"
            name="isBooked"
            options={isBookedOptions}
          ></CSelect>
          <button
            type="submit"
            className="btn btn-accent btn-lg max-w-[168px] mt-4"
          >
            Update
          </button>
        </CForm>
      </Modal>
    </>
  );
};
// create slot modal
const CreateSlotsModal = () => {
  const { data: services } = useGetServicesQuery("");
  const [createSlots] = useCreateSlotsMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const serviceNameOptions = services?.data?.map(
    ({ _id, name }: { _id: string; name: string }) => {
      return {
        value: _id,
        label: name,
      };
    }
  );

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Slots creating...");
    const createSlotsData = {
      service: value?.service,
      date: value?.date,
      startTime: value?.startTime,
      endTime: value?.endTime,
    };
    try {
      const res = await createSlots(createSlotsData);
      if (res?.data?.success) {
        setIsModalOpen(false);
        toast.success("Slots created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <>
      <button
        onClick={showModal}
        className="btn btn-accent btn-lg max-w-[150px] mx-auto mt-8"
      >
        Create
      </button>
      <Modal
        title="Create Slots"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(slotCreateValidationSchema)}
        >
          <CSelect
            label="Name"
            name="service"
            options={serviceNameOptions}
          ></CSelect>
          <CDatePicker name="date" label="Date"></CDatePicker>
          <CTimePicker label="Start Time" name="startTime"></CTimePicker>
          <CTimePicker label="End Time" name="endTime"></CTimePicker>
          <button
            type="submit"
            className="btn btn-accent btn-lg max-w-[168px] mt-4"
          >
            Update
          </button>
        </CForm>
      </Modal>
    </>
  );
};

export default SlotManagement;
