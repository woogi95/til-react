import { useEffect, useState } from "react";

const Diary = () => {
  // 데이터 형식
  const initData = {
    title: "",
    date: "",
    content: "",
    mood: "",
    weather: "",
  };
  // 갱신 state
  const [diaryList, setDiaryList] = useState([]);
  const [formData, setFormData] = useState(initData);
  // 수정 state
  const [isEdit, setIsEdit] = useState(false);
  const initPutData = {
    id: "",
    title: "",
    date: "",
    content: "",
    mood: "",
    weather: "",
  };
  const [putData, setPutData] = useState(initPutData);
  // 전체
  const getDiaries = async () => {
    try {
      const res = await fetch(`http://localhost:5000/diaries`);
      const data = await res.json();
      setDiaryList(data);
    } catch (error) {
      console.log(`오류,${error}`);
    }
  };
  // 상세내용
  // 등록
  const postDiary = async () => {
    try {
      const res = await fetch(`http://localhost:5000/diaries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("등록되었습니다.");
      getDiaries();
      setFormData(initData);
    } catch (error) {
      `오류,${error}`;
    }
  };

  const deleteDairy = async _id => {
    try {
      const res = await fetch(`http://localhost:5000/diaries/${_id}`, {
        method: "DELETE",
      });
      alert("삭제되었습니다.");
      getDiaries();
    } catch (error) {
      console.log(`오류,${error}`);
    }
  };
  // 수정
  const putDiary = async () => {
    const { id, title, date, content, mood, weather } = putData;
    try {
      const res = await fetch(`http://localhost:5000/diaries/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, date, content, mood, weather }),
      });
      getDiaries(); // 다이어리 목록 새로고침
    } catch (error) {
      console.log(`오류,${error}`);
    }
  };

  //  이벤트 핸들링
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    // 웹브라우저 새로갱신 안되요.
    e.preventDefault();
    if (formData.title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (formData.content === "") {
      alert("내용을 입력하세요.");
      return;
    }
    if (formData.date === "") {
      alert("날짜를 입력하세요");
      return;
    }
    if (formData.mood === "") {
      alert("기분을 입력하세요.");
      return;
    }
    if (formData.weather === "") {
      alert("날씨를 입력하세요.");
      return;
    }
    postDiary();
  };
  // 상세보기 수정
  const handleChangeDiary = () => {
    setIsEdit(true);
  };
  const handleChangeDiarySave = _item => {
    setPutData({ ..._item });
    setIsEdit(false);
  };

  // 상세보기
  const handleClickDetail = _item => {
    console.log(_item);
    setPutData({ ..._item });
  };
  //  수정 핸들링
  const handleChangePut = e => {
    const { name, value } = e.target;
    setPutData({ ...putData, [name]: value });
  };
  const handleSubmitPut = e => {
    // 웹브라우저 새로갱신 안되요.
    e.preventDefault();
    if (putData.title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (putData.content === "") {
      alert("내용을 입력하세요.");
      return;
    }
    if (putData.date === "") {
      alert("날짜를 입력하세요");
      return;
    }
    if (putData.mood === "") {
      alert("기분을 입력하세요.");
      return;
    }
    if (putData.weather === "") {
      alert("날씨를 입력하세요.");
      return;
    }
    putDiary();
  };
  // API 연동
  const API_URL = `http://localhost:5173/`;

  // 한번 실행
  useEffect(() => {
    getDiaries();
    return () => {};
  }, []);

  return (
    <div>
      <h1>다이어리 작성</h1>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <label>제목</label>
            <input
              name="title"
              value={formData.title}
              onChange={e => handleChange(e)}
            />
          </div>
          <div>
            <label>날짜</label>
            <textarea
              name="date"
              value={formData.date}
              onChange={e => handleChange(e)}
            ></textarea>
          </div>
          <div>
            <label>내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={e => handleChange(e)}
            ></textarea>
          </div>
          <div>
            <label>기분</label>
            <select
              name="mood"
              value={formData.mood}
              //defaultValue={formData.area}
              onChange={e => handleChange(e)}
            >
              <option value="">기분</option>
              <option value="play">😊</option>
              <option value="happy">😁</option>
              <option value="normal">😀</option>
              <option value="angry">😡</option>
              <option value="cry">😢</option>
            </select>
          </div>
          <div>
            <label>날씨</label>
            <select
              name="weather"
              value={formData.weather}
              //defaultValue={formData.area}
              onChange={e => handleChange(e)}
            >
              <option value="">날씨</option>
              <option value="sun">맑음</option>
              <option value="cloud">흐림</option>
              <option value="rain">비</option>
              <option value="snow">눈</option>
            </select>
          </div>
          <div>
            <button type="submit">등록</button>
          </div>
        </form>
        {/* 목록 */}
        <div>
          <h2>목록</h2>
          <div>
            {diaryList.map(item => {
              return (
                <div key={item.id}>
                  {item.id} : {item.title} : {item.date}
                  <button
                    type="button"
                    onClick={() => {
                      deleteDairy(item.id);
                    }}
                  >
                    삭제
                  </button>
                  <button onClick={() => handleClickDetail(item)}>
                    상세보기
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {putData?.id && (
          <div>
            <h2>상세보기</h2>
            <div>
              <form onSubmit={() => handleSubmitPut(putData)}>
                <div>
                  <label>제목</label>
                  {isEdit ? (
                    <input
                      type="text"
                      name="title"
                      value={putData.title}
                      onChange={e => handleChangePut(e)}
                    />
                  ) : (
                    <div>{putData.title}</div>
                  )}
                </div>
                <div>
                  <label>날짜</label>
                  {isEdit ? (
                    <textarea
                      name="date"
                      value={putData.date}
                      onChange={e => handleChangePut(e)}
                    ></textarea>
                  ) : (
                    <div>{putData.date}</div>
                  )}
                </div>
                <div>
                  <label>내용</label>
                  {isEdit ? (
                    <textarea
                      name="content"
                      value={putData.content}
                      onChange={e => handleChangePut(e)}
                    ></textarea>
                  ) : (
                    <div>{putData.content}</div>
                  )}
                </div>
                <div>
                  <label>기분</label>
                  {isEdit ? (
                    <select
                      name="mood"
                      value={putData.mood}
                      //defaultValue={formData.area}
                      onChange={e => handleChangePut(e)}
                    >
                      <option value="">기분</option>
                      <option value="play">😊</option>
                      <option value="happy">😁</option>
                      <option value="normal">😀</option>
                      <option value="angry">😡</option>
                      <option value="cry">😢</option>
                    </select>
                  ) : (
                    <div>{putData.mood}</div>
                  )}
                </div>
                <div>
                  <label>날씨</label>
                  {isEdit ? (
                    <select
                      name="weather"
                      value={putData.weather}
                      //defaultValue={formData.area}
                      onChange={e => handleChangePut(e)}
                    >
                      <option value="">날씨</option>
                      <option value="sun">맑음</option>
                      <option value="cloud">흐림</option>
                      <option value="rain">비</option>
                      <option value="snow">눈</option>
                    </select>
                  ) : (
                    <div>{putData.weather}</div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleChangeDiary(putData)}
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeDiarySave(putDiary)}
                >
                  저장
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diary;
