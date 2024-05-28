import { useState } from "react";
import { useManageFolder } from "../../hooks/useManageFolder";
import CorrectIcon from "../../assets/images/correct.svg";
import WrongIcon from "../../assets/images/wrong.svg";
import clsx from "clsx";

export const CreateForm = ({ id, setIsOpen }) => {
  const [form, setForm] = useState({ name: "" });
  const [type, setType] = useState("");
  const [error, setError] = useState();
  const { loading, handleCreate } = useManageFolder();

  const handleType = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setType(type);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.name) {
      setError({ name: "File or Folder name is required...!" });
    } else {
      await handleCreate({ id, type, value: form.name });
      setIsOpen(false);
    }
  };

  return (
    <div className="step-wrapper">
      <div className="step-container">
        <form onSubmit={handleSubmit}>
          <div className="flex-row">
            <div className="horizontal-bar"></div>
            {!!type || !id ? (
              <div className="create-folder-container">
                <div className="flex-row">
                  <input name="name" onChange={handleOnChange} />

                  <button
                    disabled={loading}
                    type="submit"
                    className={clsx("square-button", [
                      {
                        disable: loading,
                      },
                    ])}
                  >
                    <img
                      src={CorrectIcon}
                      alt="correct-icon"
                      className="icon"
                    />
                  </button>
                  <button
                    type="button"
                    className="square-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    <img src={WrongIcon} alt="wrong-icon" className="icon" />
                  </button>
                </div>
                {error && <span className="error-message">{error.name}</span>}
              </div>
            ) : (
              <div>
                <button type="button" onClick={(e) => handleType(e, "file")}>
                  File
                </button>
                <button type="button" onClick={(e) => handleType(e, "folder")}>
                  Folder
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
