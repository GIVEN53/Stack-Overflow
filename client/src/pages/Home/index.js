// -----------  Home -----------
// Home || StackOverFlow 로고를 눌렀을때 기본적으로 보이게되는 페이지
// Top Questions(Title) , Ask Question(버튼), QuestionList(질문목록들)

import {
  HomeHead,
  TopQuestionsTitle,
  AskQuestionButtonLink,
  Total,
} from './style';
import QuestionsList from '../../components/Main/QuestionsList';
// import { DummyData } from '../../components/Main/Data/DummyData';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get('/api', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('res : ', res.data.questions);
        setHomeData(res.data.questions);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log('error : ', error));
  }, []);

  return (
    <div>
      <div>
        <HomeHead>
          <TopQuestionsTitle>Top Questions</TopQuestionsTitle>
          <AskQuestionButtonLink to={'/questions/ask'}>
            Ask Question
          </AskQuestionButtonLink>
        </HomeHead>
      </div>
      <Total>
        <span>{totalCount} questions</span>
        {/* <span>5 questions</span> */}
      </Total>
      <QuestionsList homeData={homeData}></QuestionsList>
    </div>
  );
};

export default Home;
