import  { useState } from 'react';
import "./FAQs.css"
const FAQs = () => {
  const faqItems = [
    {
      id: 1,
      question: "What is the primary purpose of this project management website?",
      answer: "The primary purpose of our project management website is to help teams plan, organize, and execute their projects efficiently. It provides a centralized platform for managing tasks, resources, and project timelines.",
    },
    {
      id: 2,
      question: "What are the key features of this project management website?",
      answer: "Our website offers a range of features, including task management, collaboration tools, Gantt charts, time tracking, reporting and analytics, document management, and more. These features are designed to streamline project workflows and enhance productivity.",
    },
    {
      id: 3,
      question: "How can I get started with the project management website?",
      answer: "To get started, you can sign up for an account, either as a user or a worker, depending on your role. Once registered, you can access your dashboard, where you can start creating and managing projects, tasks, and team members.",
    },
    {
      id: 4,
      question: "Can I customize my project's unique needs?",
      answer: "Yes, our platform offers customization options. You can tailor various settings to fit the specific requirements of your projects and team.",
    },
    {
      id: 5,
      question: "Is my data and information secure on this website?",
      answer: " Data security is a top priority. We implement robust security measures to protect your information. Your data is encrypted, and we follow industry best practices for safeguarding user data.",
    }
    
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="container p-4 lg:p-16 w-96 lg:w-[450px]">
      <div className="accordion">
        {faqItems.map((item) => (
          <div className="accordion-item" key={item.id}>
            <button
              id={`accordion-button-${item.id}`} 
              className='btn bg-transparent hover:bg-transparent lg:mb-2 mb-1'
              aria-expanded={expandedItem === item.id}
              onClick={() => toggleItem(item.id)}
            >
              <span className="accordion-title text-xs lg:text-lg text-white font-semibold  ">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className={`accordion-content ${expandedItem === item.id ? 'open' : ''}`}>
              <p className=' py-6 px-10 shadow-2xl lg:mt-3 mt-6  rounded-2xl bg-gradient-to-r from-red-600 to-purple-900'>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
