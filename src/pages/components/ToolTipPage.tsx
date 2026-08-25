import ToolTip from "../../components/toolTip/ToolTip";

type Props = {};

function ToolTipPage({}: Props) {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Tooltip
          </h1>

          <p > A Tooltip is a small popup message that appears when the user hovers over, focuses on, or sometimes clicks an element.  </p>

          <p className="text-gray-500">It gives the user additional information without taking extra space on the page.</p>
        
        </div>

        {/* Tooltip Demo */}
        <div className="rounded-2xl border border-gray-200 bg-white p-12 shadow-sm">

          <div className="mb-10">
            <h2 className="text-xl font-semibold">
              Tooltip Examples
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Simple and reusable tooltip components.
            </p>
          </div>

          <div className="flex min-h-48 items-center justify-center gap-10">

            {/* Save */}
            <ToolTip text="Save changes">
              <button
                className="
                  rounded-lg
                  bg-blue-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                  active:scale-95
                "
              >
                Save
              </button>
            </ToolTip>

            {/* Delete */}
            <ToolTip text="Delete item">
              <button
                className="
                  rounded-lg
                  bg-red-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-red-700
                  active:scale-95
                "
              >
                Delete
              </button>
            </ToolTip>

            {/* Settings */}
            <ToolTip text="Open settings">
              <button
                className="
                  rounded-lg
                  bg-gray-900
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-gray-800
                  active:scale-95
                "
              >
                ⚙ Settings
              </button>
            </ToolTip>

            {/* Info */}
            <ToolTip text="More information">
              <button
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  shadow-sm
                  transition
                  hover:bg-gray-100
                  active:scale-95
                "
              >
                ?
              </button>
            </ToolTip>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTipPage;