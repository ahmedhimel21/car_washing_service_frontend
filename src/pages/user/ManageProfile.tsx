import { FieldValues } from "react-hook-form";
import CForm from "../../components/form/CForm";
import CInput from "../../components/form/CInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useUpdateUserProfileMutation } from "../../redux/features/user/userEndpoints";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const ManageProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const user = useAppSelector((state) => state.auth.user);

  const onSubmit = async (value: FieldValues) => {
    const toastId = toast.loading("Profile updating...");
    const id = user?._id;
    const updateData = {
      name: value?.name,
      email: value?.email,
      phone: value?.phone,
    };
    try {
      const res = await updateUserProfile({ id, updateData });
      if (res?.data?.success) {
        toast.success("Updated Successfully, Please login.", { id: toastId });
        dispatch(logout());
        navigate("/login");
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
    }
    console.log(value);
  };
  return (
    <div className="flex flex-col max-w-[50%] mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="w-full text-center">
        <div className="flex-grow mt-3 space-y-3">
          <h3 className="text-lg uppercase font-bold mb-1 text-black">
            {user?.name}
          </h3>
          <h3 className="text-[16px] text-secondary mb-1">📩 {user?.email}</h3>
          <div className="flex flex-col">
            <h3 className="text-accent font-semibold uppercase mb-3">
              📞 {user?.phone}
            </h3>
            <h3 className="mb-10 text-accent font-semibold uppercase">
              🏠 {user?.address}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
        <CForm onSubmit={onSubmit}>
          <CInput
            label="Name"
            name="name"
            type="text"
            initialValue={user?.name}
          ></CInput>
          <CInput
            label="Email"
            name="email"
            type="email"
            initialValue={user?.email}
          ></CInput>
          <CInput
            label="Phone"
            name="phone"
            type="text"
            initialValue={user?.phone}
          ></CInput>
          <button type="submit" className="btn btn-accent btn-lg">
            Update
          </button>
        </CForm>
      </div>
    </div>
  );
};

export default ManageProfile;
