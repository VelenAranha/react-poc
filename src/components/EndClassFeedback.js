import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const classAbortedReason = [
  {
    label: "Student didn't show up to the class",
  },
  {
    label: "Student didn't show any intrest",
  },
  {
    label: "Student got disconnected",
  },
  {
    label: "I got disconnected",
  },
  {
    label: "Others",
  },
];

const classEndReason = [
  {
    label: "Class completed",
  },
  {
    label: "Class inturrupted/aborted",
  },
];
export default function EndClassFeedback() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    resetForm();
  }

  function openModal() {
    setIsOpen(true);
    resetForm();
  }

  const [formData, setFormData] = useState({
    classEndReason: "",
    classAbortedReason: "",
  });

  const resetForm = () =>
    setFormData({
      classEndReason: "",
      classAbortedReason: "",
    });

  const updateForm = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          type="button"
          className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-4 py-2 block text-white transition duration-500 ease-in-out"
        >
          End class
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment} key="EndClassModal">
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                  itemID="selectClassEndReason"
                >
                  Select a reason to end class
                </Dialog.Title>
                <div className="mt-4">
                  <div role="radiogroup" aria-labelledby="selectClassEndReason">
                    {classEndReason.map((option, idx) => (
                      <div className="flex items-center mb-4" key={idx}>
                        <input
                          id={"classCompletedLabel" + idx}
                          name="classEndReason"
                          type="radio"
                          value={option.label}
                          className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          onChange={(e) =>
                            updateForm("classEndReason", e.target.value)
                          }
                        />
                        <label
                          id={"classCompletedLabel" + idx}
                          htmlFor={"classCompletedLabel" + idx}
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                    <Transition
                      show={
                        formData.classEndReason === "Class inturrupted/aborted"
                      }
                      as="div"
                      className="overflow-hidden"
                      enter="transition-all duration-300"
                      enterFrom="h-0 opacity-0"
                      enterTo="h-36 opacity-100"
                      leave="transition-all duration-300"
                      leaveFrom="h-36"
                      leaveTo="h-0"
                    >
                      <div
                        className="ml-8"
                        role="radiogroup"
                        aria-labelledby="classInterrupted"
                      >
                        {classAbortedReason.map((option, idx) => (
                          <div className="flex items-center mb-3" key={idx}>
                            <input
                              id={"classInterruptedReason" + idx}
                              name="classAbortedReason"
                              type="radio"
                              value={option.label}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                              onChange={(e) =>
                                updateForm("classAbortedReason", e.target.value)
                              }
                            />
                            <label
                              htmlFor={"classInterruptedReason" + idx}
                              className="ml-2 block text-sm text-gray-900"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                        <Transition
                          show={formData.classAbortedReason === "Others"}
                          as="div"
                          className="overflow-hidden ml-8"
                          enter="transition-all duration-300"
                          enterFrom="h-0 opacity-0"
                          enterTo="h-24 opacity-100"
                          leave="transition-all duration-300"
                          leaveFrom="h-24"
                          leaveTo="h-0"
                        >
                          <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="3"
                          ></textarea>
                        </Transition>
                      </div>
                    </Transition>
                  </div>
                </div>

                <div className="mt-4 flex flex-row">
                  <button
                    type="button"
                    className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-4 py-2 block text-white transition duration-500 ease-in-out flex-1"
                    onClick={closeModal}
                  >
                    End class
                  </button>
                  <button
                    type="button"
                    className="bg-white-500 hover:bg-white-600 focus:outline-none rounded-md px-4 py-2 block text-indigo-500 transition duration-500 ease-in-out flex-1"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
