import FolderIcon from "../../assets/images/folder.svg";
import FileIcon from "../../assets/images/file.svg";
import { CreateForm } from "../CreateForm";
import { useManageFolder } from "../../hooks/useManageFolder";
import { useState } from "react";
import clsx from "clsx";

const Folder = ({ item }) => {
  const { loading, handleDelete } = useManageFolder();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="step-item-wrapper">
      <div className="step-item">
        <img src={FolderIcon} alt="folder-icon" className="icon" />
        <span>{item.value}</span>
        <div className="add-or-remove-button">
          <button
            disabled={loading}
            className={clsx("primary-button rounded-button", {
              disable: loading,
            })}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            +
          </button>
          <button
            disabled={loading}
            className={clsx("primary-button rounded-button", {
              disable: loading,
            })}
            onClick={() => handleDelete(item._id)}
          >
            -
          </button>
        </div>
      </div>
      {!!item.children.length && <Steps data={item.children} />}
      {isOpen && <CreateForm id={item._id} setIsOpen={setIsOpen} />}
    </div>
  );
};

const File = ({ item }) => {
  const { handleDelete } = useManageFolder();
  return (
    <div className="step-item">
      <img src={FileIcon} alt="file-icon" className="icon" />
      <span>{item.value}</span>
      <button
        className="primary-button rounded-button"
        onClick={() => handleDelete(item._id)}
      >
        -
      </button>
    </div>
  );
};

export const Steps = ({ data }) => {
  return (
    <div className="step-wrapper">
      <div className="step-container">
        {data?.map((item, index) =>
          item.type === "folder" ? (
            <div className="flex-row" key={index}>
              <div className="horizontal-bar"></div>
              <Folder item={item} />
            </div>
          ) : (
            item.type === "file" && (
              <div className="flex-row" key={index}>
                <div className="horizontal-bar"></div>
                <File item={item} />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
