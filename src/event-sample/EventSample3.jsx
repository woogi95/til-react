import { useState } from "react";

const EventSample3 = () => {
  const testSentence = "안녕하세요. 반갑습니다. 잘부탁드립니다.";
  const [typingData, setTypingData] = useState("");
  const [feedback, setFeedback] = useState("입력 대기중입니다.");
  const [gameTime, setGameTime] = useState(0);
  const [start, setStart] = useState(false);
  const [timeId, setTimeId] = useState(null);

  const gameReset = () => {
    clearInterval(timeId);
    setGameTime(0);
    setTypingData("");
  };
  const gamming = event => {
    gameStart();
    const value = event.target.value;
    setTypingData(value);
    for (let i = 0; i < value.length; i++) {
      if (value[i] === testSentence[i]) {
        setFeedback("잘~~ 작성하고 계시네요(●'◡'●). ");
      } else {
        setFeedback("오타에요(┬┬﹏┬┬).");
      }
    }
  };
  const gmaeRestart = () => {
    gameReset();
    gameStart();
  };
  const gameEnd = () => {
    gameReset();
    if (typingData === testSentence) {
      alert(`축하합니다 알맞게 입력하셨습니다.`);
    } else {
      alert("아쉽게도 조금 틀리셨습니다.");
    }
  };

  const gameStart = () => {
    if (start === false) {
      setStart(true);
      const 식별자 = setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
      setTimeId(식별자);
    }
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>키보드 타이핑 연습</legend>
          <div>테스트 문장</div>
          <span>{testSentence}</span>
          <div>
            <span>게임 시간 : </span>
            <span>{gameTime}</span>
            <span>초</span>
          </div>

          <div>
            <label htmlFor="typing">텍스트 입력</label>
            <input
              type="text"
              name="typing"
              id="typing"
              value={typingData}
              rows={5}
              cols={50}
              style={{ resize: "vertical" }}
              onChange={event => gamming(event)}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  gameEnd();
                }
              }}
            />
          </div>
          <div>피드백 문장</div>
          <span>{feedback}</span>
        </fieldset>
      </form>
    </div>
  );
};

export default EventSample3;
