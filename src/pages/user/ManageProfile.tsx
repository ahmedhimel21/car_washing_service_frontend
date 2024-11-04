import { Controller, FieldValues } from "react-hook-form";
import CForm from "../../components/form/CForm";
import CInput from "../../components/form/CInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useUpdateUserProfileMutation } from "../../redux/features/user/userEndpoints";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { Form, Input } from "antd";
import handleImageUpload from "../../utils/handleImageUpload";

const ManageProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Profile updating...");
    const imageData = await handleImageUpload(value?.image);
    const image = imageData?.display_url;
    const id = user?._id;
    const updateData: {
      name: string;
      email: string;
      phone: string;
      image?: string;
    } = {
      name: value?.name,
      email: value?.email,
      phone: value?.phone,
    };
    if (image) {
      updateData.image = image;
    }
    try {
      const res = await updateUserProfile({ id, updateData });
      console.log(res);
      if (res?.data?.success) {
        toast.success("Updated Successfully, Please login.", { id: toastId });
        dispatch(logout());
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col max-w-[60%] mx-auto p-8 rounded-lg bg-white shadow-md">
      <div className="w-full text-center mb-8">
        <div className="flex flex-col items-center">
          {/* Add Profile Picture if available */}
          <img
            src={user?.image}
            alt="User Profile"
            className="w-24 h-24 rounded-full mb-4 border border-gray-200 shadow-sm"
          />
          <h3 className="text-xl uppercase font-bold mb-1 text-black">
            {user?.name}
          </h3>
          <h4 className="text-sm text-gray-500 mb-1">📩 {user?.email}</h4>
          <h4 className="text-sm text-gray-500">📞 {user?.phone}</h4>
          <h4 className="text-sm text-gray-500">🏠 {user?.address}</h4>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Update Your Profile
        </h1>
        <CForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CInput
              label="Name"
              name="name"
              type="text"
              initialValue={user?.name}
            />
            <CInput
              label="Email"
              name="email"
              type="email"
              initialValue={user?.email}
            />
            <CInput
              label="Phone"
              name="phone"
              type="text"
              initialValue={user?.phone}
            />
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
          </div>
          <button
            type="submit"
            className="mt-6 w-full btn btn-accent btn-lg rounded-lg"
          >
            Update
          </button>
        </CForm>
      </div>
    </div>
  );
};

export default ManageProfile;
