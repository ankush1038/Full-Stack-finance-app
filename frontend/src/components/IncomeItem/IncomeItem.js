import React from "react";
import styled from "styled-components";
import { dollar, trash, calender, comment } from "../../utils/icons";
import Button from "../Button/Button";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  return (
    <div>
      <IncomeItemStyled indicator={indicatorColor}>
        <div className="icon"></div>
        <div className="content">
          <h5>{title}</h5>
          <div className="inner-content">
            <div className="text">
              <p>{dollar} 45</p>
              <p>
                {calender} {date}
              </p>
              <p>
                {comment}
                {description}
              </p>
            </div>
            <div className="btn-con">
              <Button
                icon={trash}
                bPad={"1rem"}
                bRad={"50%"}
                bg={"var(--primary-color)"}
                color={"#fff"}
                iColor={"#fff"}
                hColor={"var(--color-green)"}
              />
            </div>
          </div>
        </div>
      </IncomeItemStyled>
    </div>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  box-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #22260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-item:center;
      .text {
        display: flex;
        align-items: center;
        gap:1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color:var(--primary-color);
          opacity:0.8;
        }
      }
    }
  }
`;

export default IncomeItem;