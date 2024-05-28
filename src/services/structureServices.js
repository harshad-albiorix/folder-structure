import { setData } from "../redux/mainSlice";
import { store } from "../redux/store";
import { createOnRoot, createStep, deleteStep } from "../utils/mutation";
import { getStructure } from "../utils/query";

export class apiManager {
  async getData() {
    const res = await getStructure();
    if (res) {
      store.dispatch(setData(res.data));
    }
  }

  async createFolder({ data }) {
    await createStep({ data });
  }

  async createRootFolder({ data }) {
    await createOnRoot({ data });
  }

  async deleteFolder({ id }) {
    await deleteStep({ id });
  }
}
