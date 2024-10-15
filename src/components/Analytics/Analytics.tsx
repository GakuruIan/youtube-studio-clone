import React, { useState, useRef } from "react";

// icons
import { IoEyeOutline } from "react-icons/io5";

// components
import LineChart from "../LineChart/LineChart";
import Wrapper from "../Wrapper/Wrapper";

const Analytics = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2">
        <div className="flex flex-col items-center justify-center gap-y-4 bg-light-200 dark:bg-dark-200 h-32 w-full rounded-md">
          <div className="w-full flex items-center justify-between px-4">
            <h1 className="text-base ">Earnings</h1>
          </div>

          <h5 className="text-xl md:text-3xl text-center">$0</h5>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 bg-light-200 dark:bg-dark-200 h-32 w-full rounded-md">
          <div className="w-full flex items-center justify-between px-4">
            <h1 className="text-base ">Views</h1>
          </div>
          <h5 className="text-xl md:text-3xl text-center">0</h5>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 bg-light-200 dark:bg-dark-200 h-32 w-full rounded-md">
          <div className="w-full flex items-center justify-between px-4">
            <h1 className="text-base ">Subscribers</h1>
          </div>
          <h5 className="text-xl md:text-3xl text-center">0</h5>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 bg-light-200 dark:bg-dark-200 h-32 w-full rounded-md">
          <div className="w-full flex items-center justify-between px-4">
            <h1 className="text-base ">Earnings</h1>
          </div>
          <h5 className="text-xl md:text-3xl text-center">$0</h5>
        </div>
      </div>

      {/* subscribers */}
      <div className="mt-4">
        <LineChart />
      </div>
      {/* subscribers */}

      <div className="grid grid-cols-1 gap-2 md:grid-cols-1 mt-4">
        <Wrapper>
          <div className="flex items-center justify-between w-full mb-4">
            <h4 className="text xl">Top videos</h4>
          </div>

          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-100 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Video name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Views
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Shares
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Likes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dislikes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Comments
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* single row */}
                <tr className="bg-white border-b dark:bg-dark-200 dark:border-dark-50 hover:bg-light-50 hover:dark:bg-dark-50 hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Test Video
                  </th>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">230</td>
                  <td className="px-6 py-4">700</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">2999</td>
                  <td className="px-6 py-4 text-right">
                    <span>
                      <IoEyeOutline className="text-base" />
                    </span>
                  </td>
                </tr>
                {/* single row */}
                {/* single row */}
                <tr className="bg-white border-b dark:bg-dark-200 dark:border-dark-50 hover:dark:bg-dark-50 hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Test Video
                  </th>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">230</td>
                  <td className="px-6 py-4">700</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">2999</td>
                  <td className="px-6 py-4 text-right">
                    <span>
                      <IoEyeOutline className="text-base" />
                    </span>
                  </td>
                </tr>
                {/* single row */}
                {/* single row */}
                <tr className="bg-white border-b dark:bg-dark-200 dark:border-dark-50 hover:dark:bg-dark-50 hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Test Video
                  </th>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">230</td>
                  <td className="px-6 py-4">700</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">2999</td>
                  <td className="px-6 py-4 text-right">
                    <span>
                      <IoEyeOutline className="text-base" />
                    </span>
                  </td>
                </tr>
                {/* single row */}
              </tbody>
            </table>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Analytics;
