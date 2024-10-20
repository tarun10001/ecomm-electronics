import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth-slice";
import { useToast } from "../../hooks/use-toast";
import { AppDispatch } from "../../store/store";

// interface FormData {
//   email: string;
//   password: string;
// }

interface FormData {
  [key: string]: string;
}

// const initialState: FormData = {
//   email: "",
//   password: "",
// };

const initialState = {
  email: "",
  password: "",
};

const AuthLogin: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data: any) => {
      // console.log(data);
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        // navigate("/dashboard");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">Don't have an account</p>
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Register
        </Link>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign in"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
