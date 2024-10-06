import { useEffect, useState } from "react";
import Button from "../../components/Button";
import SelectBox from "../../components/SelectBox";
import { Status, STATUS_ENUM } from "../../Constants/Todo/index";
import ModalCreateTask from "./ModalCreateTask";
import Table from "./Table";
import Spinner from "../../components/Spinner";
import service from "../../services";

export default function Todo() {
  const [isOpenModalCreateTask, setOpenModalCreatetask] = useState(false);
  const [statusSelected, setStatusSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const getTodos = (page = 1) => {
    let query = ``;
    let statuses: any = statusSelected?.filter((status: any) => status?.value);
    if (
      statuses?.length !== 2 &&
      statuses?.[0]?.value === STATUS_ENUM.completed
    )
      query = `completed=true`;
    if (
      statuses?.length !== 2 &&
      statuses?.[0]?.value === STATUS_ENUM.incomplete
    )
      query = `completed=false`;
    setLoading(true);
    service
      .get(`/todos?${query}`)
      .then((res) => {
        setTodos(res?.data);
        setLoading(false);
      })
      .then(console.log);
  };

  useEffect(() => {
    getTodos(1);
  }, [statusSelected]);

  return (
    <div className="container max-w-4xl m-auto mt-10">
      <div className="flex justify-between">
        <SelectBox
          data={Status}
          onSelect={setStatusSelected}
          label={"Status"}
          total={Status?.length}
          selectedItems={statusSelected}
        />
        <Button
          onClick={() => setOpenModalCreatetask(true)}
          type="primary"
          title={"Create"}
        />
      </div>

      <div className="mt-5 relative">
        {loading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Spinner />
          </div>
        )}
        {!loading && <Table dataTable={todos} />}
      </div>

      {isOpenModalCreateTask && (
        <ModalCreateTask
          isOpen={isOpenModalCreateTask}
          onClose={() => setOpenModalCreatetask(false)}
          refreshData={() => getTodos(1)}
        />
      )}
    </div>
  );
}
