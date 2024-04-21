import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form"
import IncomeItem from "../IncomeItem/IncomeItem";
function Incomes() {
  const {addIncome,incomes,getIncomes}=useGlobalContext();

  useEffect(()=>{
    getIncomes()
  },[])
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {incomes.map((income)=>{
              const { id, title, amount, data, category, description} = income;
              return <IncomeItem></IncomeItem>
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
}

const IncomesStyled = styled.div`
  
`;



export default Incomes;
