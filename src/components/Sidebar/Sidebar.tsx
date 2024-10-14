import React, { useState, useEffect } from "react";

// logo
import logo from "../../assets/logo.png";

// icons
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";

// framer motion
import { motion, useAnimationControls } from "framer-motion";

// components
import SideLink from "../SideLink/SideLink";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerControls = useAnimationControls();
  const titleControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      titleControls.start("open");
    } else {
      containerControls.start("close");
      titleControls.start("close");
    }
  }, [isOpen]);

  const containerVariants = {
    close: {
      width: "3.5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "14rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    open: {
      display: "flex",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    close: {
      display: "none",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="close"
      animate={containerControls}
      variants={containerVariants}
      className=" overflow-clip fixed dark:bg-dark-200 h-screen z-50"
    >
      <div className="py-4 px-2 flex flex-col h-full">
        {/* header */}
        <div className="flex items-center justify-between my-2">
          {/* logo */}
          <motion.div
            variants={titleVariants}
            animate={titleControls}
            className="flex items-center gap-x-1"
          >
            <img
              src={logo}
              alt="logo image"
              className="h-6 w-6 object-contain"
            />
            <h5 className="text-base ml-1">Studio</h5>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#292929] p-2 rounded-md"
          >
            <FaArrowRight className="text-xl h-4 w-4 " />
          </button>

          {/* logo */}
        </div>
        {/* header */}

        {/* navigation links */}
        <div className="flex-1 h-full">
          <div className="flex flex-col  gap-y-4 mt-8">
            <SideLink
              to="/"
              icon={<MdOutlineSpaceDashboard />}
              text="Dashboard"
            />
            <SideLink to="/content" icon={<MdOutlineVideoLibrary />} text="Content" />
            <SideLink to="/" icon={<SiGoogleanalytics />} text="Analytics" />
            <SideLink to="/" icon={<MdOutlineCloudUpload />} text="Upload" />
            <SideLink to="/" icon={<TbMoneybag />} text="Earn" />
            <SideLink
              to="/"
              icon={<FaWandMagicSparkles />}
              text="Customization"
            />
            <SideLink to="/" icon={<TbMoneybag />} text="Earn" />
          </div>
        </div>
        {/* navigation links */}

        <div className="flex flex-col gap-y-4">
          <SideLink to="/" icon={<IoSettingsOutline/>} text="Settings" />
          <SideLink to="/" icon={<CiCircleInfo/>} text="Info" />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
