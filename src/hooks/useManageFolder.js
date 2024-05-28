import { useState } from "react";
import { apiManager } from "../services/structureServices";

export const useManageFolder = () => {
  const [loading, setLoading] = useState(false);
  const apis = new apiManager();

  const handleCreate = async ({ id, value, type }) => {
    try {
      setLoading(true);
      if (id) {
        await apis.createFolder({
          data: {
            value,
            type,
            parent: id,
          },
        });
      } else {
        await apis.createRootFolder({ data: { value } });
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      apis.getData();
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await apis.deleteFolder({ id });
    } catch (err) {
      console.log("error", err);
    } finally {
      apis.getData();
      setLoading(false);
    }
  };

  return {
    loading,
    handleDelete,
    handleCreate,
  };
};
