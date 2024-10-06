import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import DialogComponent from "../../components/Dialog/DialogComponent";
import TextareaForm from "../../components/TextArea";
import { useState } from "react";
import { Toastify } from "../../components/Toastify";
import service from '../../services'
interface IModalCreateTask {
  isOpen: boolean;
  onClose: any;
  refreshData: Function;
}

export default function ModalCreateTask({
  onClose,
  isOpen,
  refreshData,
}: IModalCreateTask) {
  const { register, handleSubmit, formState: {errors}} = useForm({ mode: "onChange" });

  const [isLoading, setLoading] = useState(false);

  const onSubmit = (values: any) => {
    setLoading(true);
    service.post("/todos", 
      JSON.stringify({
        todo: values?.todo,
        completed: false,
      })
    )
      .then(() => {
        refreshData();
        onClose();
        Toastify.success("Your work has been success!");
      })
      .catch(() => Toastify.error("Your work has been failed"))
      .finally(() => setLoading(false));
  };

  return (
    <DialogComponent
      title="Create New Task"
      isOpen={isOpen}
      onCloseModal={onClose}
      child={
        <form
          className="mt-4 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextareaForm
            register={register("todo", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            name="todo"
            placeholder="Enter Title"
            label="Title"
            errors={errors}
            isRequired
          />
          <div className="mt-2 flex gap-4 justify-center">
            <Button
              onClick={onClose}
              type="secondary"
              isSubmitButton={true}
              title={"Create"}
            />
            <Button
              type="primary"
              isSubmitButton={true}
              title={"Create"}
              disabled={isLoading}
            />
          </div>
        </form>
      }
      actionName={"Create"}
    />
  );
}
