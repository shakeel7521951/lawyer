import React from "react";

const comments = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Corporate Client",
    text: "Al Khaldi Law Firm handled our corporate merger seamlessly. Their professionalism, attention to detail, and commitment to client satisfaction are unmatched.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Mohammed Ali",
    role: "Individual Client",
    text: "I was impressed by the quick and clear legal advice I received. They truly care about their clients and explain every step in detail.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Government Project Representative",
    text: "Our government department worked with Al Khaldi Law Firm on policy compliance. Their dedication to accuracy and timely delivery exceeded expectations.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Comment = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={comment.img}
              alt={comment.name}
              className="w-20 h-20 rounded-full border-4 border-indigo-500 mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">"{comment.text}"</p>
            <h3 className="text-lg font-semibold text-gray-800">{comment.name}</h3>
            <span className="text-sm text-indigo-600">{comment.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
