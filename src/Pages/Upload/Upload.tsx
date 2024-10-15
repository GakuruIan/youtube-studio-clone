import React from 'react'

// components
import Wrapper from '../../components/Wrapper/Wrapper'


const Upload = () => {
  return (
    <Wrapper>
      <div className="">
         <h1 className="text-base mb-4">Create video</h1> 
         <div className="">
            <form action="">
             {/* video name */}
             <div className="mb-6">
              <label className="text-base mb-1">Video Title </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter video title"
                  id=""
                  className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
                />
              </div>
            </div>
            {/* video title */}

             {/* description */}
             <div className="mb-6">
              <h6 className="text-base mb-1">video Description</h6>
              <p className="text-sm max-w-3xl text-gray-400">
                Tell your viewers about your video
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

            
            {/* thumbnail picture */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Video thumbnail</h6>
              <p className="text-sm text-gray-400">
               Thumbnail image that will before your plays
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
            {/* thumbnail picture */}

            {/* Video  */}
            <div className="mb-6">
              <h6 className="text-base mb-1">Video </h6>
              <p className="text-sm text-gray-400">
               Upload your video
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
                        Your videos will be private until you publish them.
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {/* dropzone */}
            </div>
            {/* Video  */}

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
  )
}

export default Upload