import React,{useContext} from 'react';
import { StyledButton } from './QuizButton.styles';
import { quizContext } from 'providers/QuizProvider';
const QuizButton = () => {

    const {check,handleButtonClick}= useContext(quizContext)
    
    return (
       <StyledButton onClick={handleButtonClick}>
       {check ? 'Try again' : 'Check answers'}
       </StyledButton>
    );
};


export default QuizButton;