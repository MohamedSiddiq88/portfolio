import React, { useEffect, useRef, useState } from 'react';

function Chat({ chat, index }) {
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const questionRef = useRef(null);
  const answerRef = useRef(null);

  useEffect(() => {
    const questionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsQuestionVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const answerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAnswerVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (questionRef.current) {
      questionObserver.observe(questionRef.current);
    }

    if (answerRef.current) {
      answerObserver.observe(answerRef.current);
    }

    return () => {
      if (questionRef.current) {
        questionObserver.unobserve(questionRef.current);
      }
      if (answerRef.current) {
        answerObserver.unobserve(answerRef.current);
      }
    };
  }, []);

  return (
    <div className='chat' key={index}>
      <div className={`question_container ${isQuestionVisible ? 'question_animation' : 'hide'}`} ref={questionRef}>
        <div className="question">{chat.question}</div>
        <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className={`answer_container ${isAnswerVisible ? 'answer_animation' : 'hide'}`} ref={answerRef}>
        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
        <div className="answer">{chat.answer}</div>
      </div>
    </div>
  );
}

export default Chat;
