import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Modal, message } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import "./App.css";

const { TextArea } = Input;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // dsdsd
  const [todoData, setTodoData] = useState({
    questionNumber: "",
    answer: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDoneTerm, setSearchDoneTerm] = useState("");

  useEffect(() => {
    fetchTodos();
    fetchDoneTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://c37ebab283094df7.mokky.dev/api"
      );
      setTodos(response.data);
    } catch (error) {
      message.error("Ma'lumotlarni olishda xatolik yuz berdi");
    }
  };

  const fetchDoneTodos = async () => {
    try {
      const response = await axios.get(
        "https://c37ebab283094df7.mokky.dev/done"
      );
      setDoneTodos(response.data);
    } catch (error) {
      message.error("Bajarilganlarni olishda xatolik yuz berdi");
    }
  };

  const handleAddTodo = async () => {
    try {
      if (!todoData.answer || !todoData.questionNumber) {
        message.warning("Iltimos, savol, javob va savol raqamini kiriting");
        return;
      }

      const newTodo = { ...todoData, question: todoData.answer }; // Include `question` field
      const response = await axios.post(
        "https://c37ebab283094df7.mokky.dev/api",
        newTodo
      );

      message.success("Yangi To-do muvaffaqiyatli qo'shildi");
      setTodos((prevTodos) => [...prevTodos, response.data]); // Optimistic UI update
      setIsModalOpen(false);
      setTodoData({
        answer: "",
        questionNumber: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
      });
    } catch (error) {
      message.error("Saqlashda xatolik yuz berdi");
    }
  };

  const handleDelete = async (id, isDone) => {
    const confirmDelete = window.confirm("O'chirmoqchimisiz?");
    if (!confirmDelete) return;

    const url = isDone
      ? `https://c37ebab283094df7.mokky.dev/done/${id}`
      : `https://c37ebab283094df7.mokky.dev/api/${id}`;
    try {
      await axios.delete(url);
      message.success("Savollar muvaffaqiyatli o'chirildi");
      fetchTodos();
      fetchDoneTodos();
    } catch (error) {
      message.error("O'chirishda xatolik yuz berdi");
    }
  };

  const handleToggleCompleted = async (todo) => {
    try {
      await axios.post("https://c37ebab283094df7.mokky.dev/done", {
        answer: todo.answer,
        questionNumber: todo.questionNumber,
        question1: todo.question1,
        question2: todo.question2,
        question3: todo.question3,
        question4: todo.question4,
        question5: todo.question5,
        question6: todo.question6,
        archived: true,
      });
      await axios.delete(`https://c37ebab283094df7.mokky.dev/api/${todo.id}`);
      message.success("Savol yodlanganlarga qo'shildi");
      fetchTodos();
      fetchDoneTodos();
    } catch (error) {
      message.error("Savolni qo'shishda xatolik yuz berdi");
    }
  };

  const filteredTodos = todos.filter((todo) =>
    (todo.question || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDoneTodos = doneTodos.filter((todo) =>
    (todo.question || "").toLowerCase().includes(searchDoneTerm.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "1300px",
      }}
      className="p-6 mx-auto text-white rounded-lg shadow-lg min-h-screen"
    >
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="mb-8 py-6 w-full bg-violet-600 hover:bg-violet-700 border-none rounded-lg text-lg"
      >
        Add a new plan
      </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="font-semibold text-2xl mb-6 text-violet-400">Today</h2>

          <div className="space-y-4 cursor-pointer">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex flex-col justify-between p-5 rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-start">
                  <div className="text-lg text-gray-300 flex-1">
                    <h1>
                      <span className="text-yellow-400/100 font-semibold">
                        #
                      </span>
                      {todo.questionNumber}
                    </h1>
                    <hr
                      style={{
                        marginTop: "4px",
                        marginBottom: "4px",
                        borderColor: "aqua",
                      }}
                    />

                    <button className=" flex items-center gap-2">
                      <span>
                        <span className="text-yellow-400/100 font-semibold">
                          1 :
                        </span>
                      </span>
                      <p>{todo.answer}</p>
                    </button>

                    {todo.question1 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            2 :
                          </span>
                        </span>
                        <p>{todo.question1}</p>
                      </button>
                    )}

                    {todo.question2 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            3 :
                          </span>
                        </span>
                        <p>{todo.question2}</p>
                      </button>
                    )}

                    {todo.question3 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            4 :
                          </span>
                        </span>
                        <p>{todo.question3}</p>
                      </button>
                    )}

                    {todo.question4 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            5 :
                          </span>
                        </span>
                        <p>{todo.question4}</p>
                      </button>
                    )}

                    {todo.question5 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            6 :
                          </span>
                        </span>
                        <p>{todo.question5}</p>
                      </button>
                    )}

                    {todo.question6 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            7 :
                          </span>
                        </span>
                        <p>{todo.question6}</p>
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <button
                      aria-label="Mark as completed"
                      onClick={() => handleToggleCompleted(todo)}
                      className="text-violet-500 text-xl"
                    >
                      <CheckCircleOutlined />
                    </button>
                    <button
                      aria-label="Delete question"
                      onClick={() => handleDelete(todo.id, false)}
                      className="text-red-500 text-xl"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-2xl mb-6 text-violet-400">
            Previous
          </h2>

          <div className="space-y-4 cursor-pointer">
            {filteredDoneTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex flex-col justify-between p-5 rounded-lg shadow-md bg-gray-700 hover:bg-gray-600 transition duration-300"
              >
                <div className="flex items-start">
                  <div className="text-lg text-gray-300 flex-1">
                    <h1>
                      <span className="text-yellow-400/100 font-semibold">
                        #
                      </span>
                      {todo.questionNumber}
                    </h1>
                    <hr
                      style={{
                        marginTop: "4px",
                        marginBottom: "4px",
                        borderColor: "aqua",
                      }}
                    />

                    <button className=" flex items-center gap-2">
                      <span>
                        <span className="text-yellow-400/100 font-semibold">
                          1 :
                        </span>
                      </span>
                      <p>{todo.answer}</p>
                    </button>

                    {todo.question1 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            2 :
                          </span>
                        </span>
                        <p>{todo.question1}</p>
                      </button>
                    )}

                    {todo.question2 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            3 :
                          </span>
                        </span>
                        <p>{todo.question2}</p>
                      </button>
                    )}

                    {todo.question3 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            4 :
                          </span>
                        </span>
                        <p>{todo.question3}</p>
                      </button>
                    )}

                    {todo.question4 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            5 :
                          </span>
                        </span>
                        <p>{todo.question4}</p>
                      </button>
                    )}

                    {todo.question5 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            6 :
                          </span>
                        </span>
                        <p>{todo.question5}</p>
                      </button>
                    )}

                    {todo.question6 && (
                      <button className=" flex items-center gap-2">
                        <span>
                          <span className="text-yellow-400/100 font-semibold">
                            7 :
                          </span>
                        </span>
                        <p>{todo.question6}</p>
                      </button>
                    )}
                  </div>
                  <button
                    aria-label="Delete learned question"
                    onClick={() => handleDelete(todo.id, true)}
                    className="text-red-500 text-xl mt-4"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        title="Add a new plan"
        open={isModalOpen}
        onOk={handleAddTodo}
        onCancel={() => setIsModalOpen(false)}
        okText="Qo'shish"
        cancelText="Bekor qilish"
      >
        <div className="space-y-4">
          <Input
            value={todoData.questionNumber}
            onChange={(e) =>
              setTodoData({ ...todoData, questionNumber: e.target.value })
            }
            placeholder="Date"
            type="text"
          />
          <Input
            value={todoData.answer}
            onChange={(e) =>
              setTodoData({ ...todoData, answer: e.target.value })
            }
            placeholder="Add plan 1"
            type="text"
          />
          <Input
            value={todoData.question1}
            onChange={(e) =>
              setTodoData({ ...todoData, question1: e.target.value })
            }
            placeholder="Add plan 2"
            type="text"
          />
          <Input
            value={todoData.question2}
            onChange={(e) =>
              setTodoData({ ...todoData, question2: e.target.value })
            }
            placeholder="Add plan 3"
            type="text"
          />
          <Input
            value={todoData.question3}
            onChange={(e) =>
              setTodoData({ ...todoData, question3: e.target.value })
            }
            placeholder="Add plan 4"
            type="text"
          />
          <Input
            value={todoData.question4}
            onChange={(e) =>
              setTodoData({ ...todoData, question4: e.target.value })
            }
            placeholder="Add plan 5"
            type="text"
          />
          <Input
            value={todoData.question5}
            onChange={(e) =>
              setTodoData({ ...todoData, question5: e.target.value })
            }
            placeholder="Add plan 6"
            type="text"
          />

          <Input
            value={todoData.question6}
            onChange={(e) =>
              setTodoData({ ...todoData, question6: e.target.value })
            }
            placeholder="Add plan 7"
            type="text"
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
