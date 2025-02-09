import styled from "styled-components";
import Minus from "/assets/svgs/decrement-from-cart.svg";
import Plus from "/assets/svgs/add-to-cart.svg";
import HoverPlus from "/assets/svgs/hover-add-to-cart.svg";

import { MouseEventHandler, useState } from "react";
import HoverMinus from "/assets/svgs/hover-decrement-from-cart.svg";

const CustomCounter = ({
  className,
  addOnClick,
  minusOnClick,
}: {
  className?: string;
  addOnClick: MouseEventHandler<HTMLButtonElement>;
  minusOnClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [count, setCount] = useState<number>(1);
  const [hover, setHover] = useState<boolean>(false);

  const handleMinusOnClick = (event) => {
    if (typeof minusOnClick !== "function") return;

    minusOnClick(event);
  };

  return (
    <div className={className}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={minusOnClick}
        aria-label="subtract one item."
      >
        <img src={hover ? HoverMinus : Minus} />
      </button>
      <span>{count}</span>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={addOnClick}
        aria-label="add one item."
      >
        <img src={hover ? Plus : HoverPlus} />
      </button>
    </div>
  );
};

export const CounterButton = styled(CustomCounter)`
  background-color: ${(props) => props.theme.colors.red};

  border-radius: calc(infinity * 1px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 44px;

  span {
    color: white;
  }

  button {
    background-color: ${(props) => props.theme.colors.red};

    border-radius: calc(infinity * 1px);

    cursor: pointer;
    border: 0;
  }

  button:nth-of-type(1) {
    padding-left: 12px;
  }

  button:nth-of-type(2) {
    padding-right: 12px;
  }
`;
