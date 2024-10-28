import React, { useState } from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CollapseImg from "../assets/images/collapce/Decoration.png"
import { BiArrowToBottom } from "react-icons/bi";
import { GrBottomCorner } from "react-icons/gr";
const { Panel } = Collapse;

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Pellentesque ac bibendum tortor?",
      content: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    { title: "In mi nulla, fringilla vestibulum?" ,
      content: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."

    },
    { title: "Quisque lacinia purus ut libero?",
      content: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."

     },
    { title: "Quisque ut metus sit amet augue?",
      content: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."

     },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-11/12 flex flex-row flex-wrap lg:flex-nowrap gap-14  ">

        <div className=" lg:w-6/12 w-full flex flex-col items-center">
          <p className="text-gray-700 font-medium w-8/12">Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. </p>
          <img src={CollapseImg} width="50%" alt="" />
        </div>
        <div className="flex flex-col justify-center lg:w-4/12 w-full items-center">
          <div className="w-full flex flex-col  gap-6">
            {items.map((item, index) => (
              <div key={index} className="">
                <button
                  onClick={() => handleToggle(index)}
                  className={`flex justify-between items-center w-full px-4 py-3 text-left font-semibold ${openIndex === index ? "bg-[#E91E63] py-4 rounded-t-lg text-white" : "text-black"
                    }`}
                >
                  {item.title}
                  <span
                    className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                      }`}
                  >
                   <GrBottomCorner size={20} className="rotate-45" />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 bg-white mt-2">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
