// ResultPage.js
import React from 'react';
import MainScreen from '../components/MainScreen';
import ScoreDisplay from '../components/ScoreDisplay';
import TestResult from '../components/TestResult';
import ShareResultButton from '../components/ShareResultButton';
import Logo from '../components/Logo';
import ShareTestLink from '../components/ShareTestLink';
import PrettyButton from '../components/PrettyButton';
import { useNavigate } from 'react-router-dom';

const ResultPage = ({ score, testResult }) => {
 const navigate = useNavigate();

 const handleShare = () => {
    alert('공유 기능이 구현되지 않았습니다.');
 };

 const goToMainPage = () => {
    navigate('/');
 };

 return (
    <MainScreen>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '20px' }}>
        <Logo />
        <ShareTestLink onClick={handleShare} />
      </div>
      <ScoreDisplay score={score} />
      <TestResult testResult={testResult} /> {/* testResult prop 전달 */}
      <PrettyButton buttonText="결과 공유하기" onClick={handleShare} />
      <PrettyButton buttonText="테스트 다시하기" onClick={goToMainPage} />
    </MainScreen>
 );
};

export default ResultPage;
