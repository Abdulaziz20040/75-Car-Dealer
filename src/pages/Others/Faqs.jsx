import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const faqs = [
  {
    category: "General",
    items: [
      {
        question:
          "Does BoxCar own the cars I see online or are they owned by other?",
        answer:
          "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
      },
      { question: "How do you choose the cars that you sell?", answer: "" },
      {
        question: "Can I save my favorite cars to a list I can view later?",
        answer: "",
      },
      {
        question:
          "Can I be notified when cars I like are added to your inventory?",
        answer: "",
      },
      {
        question:
          "What tools do you have to help me find the right car for me and my budget?",
        answer: "",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        question:
          "Does BoxCar own the cars I see online or are they owned by other?",
        answer:
          "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
      },
      { question: "How do you choose the cars that you sell?", answer: "" },
      {
        question: "Can I save my favorite cars to a list I can view later?",
        answer: "",
      },
      {
        question:
          "Can I be notified when cars I like are added to your inventory?",
        answer: "",
      },
      {
        question:
          "What tools do you have to help me find the right car for me and my budget?",
        answer: "",
      },
    ],
  },
];

const Faqs = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  const onChange = (key) => {
    setActiveKeys(key);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {faqs.map((section) => (
        <div key={section.category} className="mb-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            {section.category}
          </h2>
          <Collapse
            bordered={false}
            ghost
            onChange={onChange}
            activeKey={activeKeys}
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined style={{ fontSize: "18px" }} />
              ) : (
                <PlusOutlined style={{ fontSize: "18px" }} />
              )
            }
            expandIconPosition="end"
          >
            {section.items.map((item, idx) => {
              const isActive = activeKeys.includes(
                `${section.category}-${idx}`
              );

              return (
                <Panel
                  header={
                    <div
                      className={`text-lg font-medium p-2 ${
                        isActive ? "bg-[#f5f5f5] rounded-md" : "bg-transparent"
                      }`}
                    >
                      {item.question}
                    </div>
                  }
                  key={`${section.category}-${idx}`}
                >
                  <div
                    className={`p-4 text-gray-600 ${
                      isActive ? "bg-[#f5f5f5] rounded-md" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
