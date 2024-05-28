import { useEffect, useState } from "react";
import { CreateForm, Steps } from "../../components";
import { apiManager } from "../../services/structureServices";
import { useSelector } from "react-redux";

export const Home = () => {
  const data = useSelector((state) => state.main.data);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const apis = new apiManager();

  useEffect(() => {
    apis.getData();
  }, []);

  return (
    <div className="main-container">
      <div>
        <button
          className="primary-button add-root-button"
          onClick={() => setIsFormOpen((prev) => !prev)}
        >
          Add root
        </button>
      </div>
      {isFormOpen && <CreateForm setIsOpen={setIsFormOpen} />}
      <Steps data={data} />
    </div>
  );
};
