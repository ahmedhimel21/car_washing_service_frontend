import {
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useGetServicesQuery,
  useUpdateServiceMutation,
} from "../../redux/features/services/servicesEndpoints";
import { useState } from "react";
import CForm from "../../components/form/CForm";
import CInput from "../../components/form/CInput";
import { Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import handleImageUpload from "../../utils/handleImageUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  serviceCreateValidationSchema,
  serviceUpdateValidationSchema,
} from "../../schemas/serviceCreateValidationSchema";
//table types
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const ServiceManagement = () => {
  // get services data
  const { data: services, isFetching } = useGetServicesQuery("");
  // delete service mutation
  const [deleteService] = useDeleteServiceMutation();
  // delete confirmation functionalities
  const confirmDelete = async (_id: string) => {
    const res = await deleteService(_id);
    if (res?.data?.success) {
      message.success("Service deleted successfully");
    }
  };

  const cancelDelete = () => {
    message.info("Service deletion canceled");
  };
  // forming table data
  const tableData = services?.data?.map(
    ({
      _id,
      name,
      description,
      price,
      duration,
    }: {
      _id: string;
      name: string;
      description: string;
      price: number;
      duration: number;
    }) => ({
      _id,
      name,
      description,
      price,
      duration,
    })
  );
  //table columns
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div className="flex items-center gap-4">
            <UpdateServiceModal data={item}></UpdateServiceModal>
            <Popconfirm
              title="Are you sure to delete this service?"
              onConfirm={() => confirmDelete(item?._id)}
              onCancel={cancelDelete}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn btn-accent max-w-[80px] h-10">
                Delete
              </button>
            </Popconfirm>
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
      <Table
        columns={columns}
        dataSource={tableData}
        loading={isFetching}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <CreateServiceModal></CreateServiceModal>
    </div>
  );
};

// update modal
const UpdateServiceModal = ({
  data,
}: {
  data: {
    description: string;
    duration: number;
    name: string;
    price: number;
    _id: string;
  };
}) => {
  const { _id, description, duration, name, price } = data;
  const [updateService] = useUpdateServiceMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Updating...");
    const updateData = {
      name: value?.name,
      description: value?.description,
      price: Number(value?.price),
      duration: Number(value?.duration),
    };
    try {
      const res = await updateService({ updateData, _id });
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
      <button onClick={showModal} className="btn btn-primary max-w-[80px] h-10">
        Update
      </button>
      <Modal
        title="Service Update"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(serviceUpdateValidationSchema)}
        >
          <CInput
            label="Name"
            name="name"
            type="text"
            initialValue={name}
          ></CInput>
          <CInput
            label="Description"
            name="description"
            type="text"
            initialValue={description}
          ></CInput>
          <CInput
            label="Price"
            name="price"
            type="text"
            initialValue={price}
          ></CInput>
          <CInput
            label="Duration"
            name="duration"
            type="text"
            initialValue={duration}
          ></CInput>
          <button type="submit" className="btn btn-accent btn-lg">
            Update
          </button>
        </CForm>
      </Modal>
    </>
  );
};

// create modal
const CreateServiceModal = () => {
  const [createService] = useCreateServiceMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Service creating...");
    const imageData = await handleImageUpload(value?.image);
    const image = imageData?.display_url;
    const createData = {
      name: value?.name,
      description: value?.description,
      price: Number(value?.price),
      duration: Number(value?.duration),
      isDeleted: false,
      image: image,
    };
    try {
      const res = await createService(createData);
      if (res?.data?.success) {
        setIsModalOpen(false);
      }
      toast.success("Service created successfully", { id: toastId });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <>
      <button
        onClick={showModal}
        className="btn btn-accent btn-lg max-w-[268px] mx-auto mt-8"
      >
        Create Service
      </button>
      <Modal
        title="Create Service"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(serviceCreateValidationSchema)}
        >
          <CInput label="Name" name="name" type="text"></CInput>
          <CInput label="Description" name="description" type="text"></CInput>
          <CInput label="Price" name="price" type="number"></CInput>
          <CInput label="Duration" name="duration" type="number"></CInput>
          <Controller
            name="image"
            render={({
              field: { onChange, value, ...field },
              fieldState: { error },
            }) => (
              <Form.Item label="Picture">
                <Input
                  type="file"
                  value={value?.fileName}
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                ></Input>
                <div>
                  {error && (
                    <small style={{ color: "red" }}>{error.message}</small>
                  )}
                </div>
              </Form.Item>
            )}
          ></Controller>
          <button type="submit" className="btn btn-accent btn-lg">
            Create
          </button>
        </CForm>
      </Modal>
    </>
  );
};

export default ServiceManagement;
