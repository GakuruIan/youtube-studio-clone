import React from "react";

// components
import Wrapper from "../../components/Wrapper/Wrapper";

const Customization = () => {
  return (
    <Wrapper>
      <div className="pb-8">
        <header className="mb-4">
          <h1 className="text-base">Customization</h1>
          <div className="flex items-center justify-between">
            {/* tabs */}
            <div className="">
              <div className="sticky top-0 ">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                      <a
                        href="#"
                        className="inline-block text-blue-600 dark:text-blue-500 dark:border-blue-500 border-blue-600 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        Profile
                      </a>
                    </li>

                    <li className="me-2">
                      <a
                        href="#"
                        className="inline-block p-4  rounded-t-lg active "
                        aria-current="page"
                      >
                        Home tab
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* tabs */}

            {/* channel */}
            <button className="px-4 py-1.5 border border-gray-300 dark:border-dark-50 hover:bg-gray-300 hover:dark:bg-dark-50 transition-all duration-75 rounded-md">
              View Channel
            </button>
            {/* channel */}
          </div>
        </header>

        <div className="">
          <form action="" method="post">
            {/* channel banner input */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Banner Image</h6>
              <p className="text-sm text-gray-400">
                This image will appear across the top of your channel
              </p>
              {/* dropzone */}
              <div className="flex items-center justify-center w-full max-w-3xl mt-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col md:px-0 px-2 items-center justify-center w-full  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-light-50  dark:bg-dark-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-dark-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      For the best results on all devices, use an image that’s
                      at least 2048 x 1152 pixels and 6MB or less.
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {/* dropzone */}
            </div>
            {/* channel banner input */}

            {/* profile picture */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Profile Image</h6>
              <p className="text-sm text-gray-400">
                Your profile picture will appear where your channel is presented
                on YouTube, like next to your videos and comments
              </p>
              {/* dropzone */}
              <div className="flex items-center justify-center w-full max-w-3xl mt-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col md:px-0 px-2 items-center justify-center w-full  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-light-50  dark:bg-dark-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-dark-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      It’s recommended to use a picture that’s at least 98 x 98
                      pixels and 4MB or less.
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {/* dropzone */}
            </div>
            {/* profile picture */}

            {/* channel name */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Channel Name</h6>
              <p className="text-sm max-w-3xl text-gray-400">
                Choose a channel name that represents you and your content.
                Changes made to your name and picture are visible only on
                YouTube and not other Google services.
              </p>

              <div className="mt-2">
                <input
                  type="text"
                  name="channel_name"
                  placeholder="Enter channel name"
                  id=""
                  className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
                />
              </div>
            </div>
            {/* channel name */}

            {/* handle name */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Handle </h6>
              <p className="text-sm max-w-3xl text-gray-400">
                Choose your unique handle by adding letters and numbers. You can
                change your handle back within 14 days. Handles can be changed
                twice every 14 days.
              </p>

              <div className="mt-2">
                <input
                  type="text"
                  name="handle_name"
                  placeholder="Enter handle name"
                  id=""
                  className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
                />
              </div>
            </div>
            {/* handle name */}

            {/* description */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Description</h6>
              <p className="text-sm max-w-3xl text-gray-400">
                Tell your viewers about your channel
              </p>

              <div className="mt-2">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Enter description"
                  id=""
                  className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
                />
              </div>
            </div>
            {/* description */}

            {/* Contact name */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Contact information</h6>
              <p className="text-sm max-w-3xl text-gray-400">
                Let people know how to contact you with business inquiries.
              </p>

              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  id=""
                  className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
                />
              </div>
            </div>
            {/* Contact name */}

            <div className="flex items-center gap-x-2 justify-end max-w-3xl">
              <button
                type="button"
                className="px-4 py-1.5 border border-gray-500 dark:border-dark-50 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-1.5 bg-dark-50 text-white dark:bg-white font-medium dark:text-dark-50 rounded-md"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Customization;
