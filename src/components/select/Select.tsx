import React, { useState, KeyboardEvent, useEffect } from "react";
import { ItemType } from "../accordion/Accordion.stories";
import styled, { css } from "styled-components";

type SelectProps = {
  selectTitle: string;
  onChange: (id: string) => void;
  items: ItemType[];
};

export const Select: React.FC<SelectProps> = ({
  selectTitle,
  onChange,
  items,
}) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [hoverOption, setHoverOption] = useState(selectTitle);

  useEffect(() => {
    setHoverOption(selectTitle);
  }, [selectTitle]);

  const onClickTitleHandler = () => setCollapse(!collapse);
  const onBlurTitleHandler = () => setCollapse(true);

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < items.length; i++) {
        if (hoverOption === items[i].title) {
          const pretendentElement =
            e.key === "ArrowDown" ? items[i + 1] : items[i - 1];

          if (pretendentElement) {
            onChange(pretendentElement.id);
            return;
          }
        }
      }
      if (!selectTitle) onChange(items[0].title);
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setCollapse(false);
    }
  };

  const mappedItems = items.map((i) => {
    const onLiCLickHandler = (id: string) => {
      onChange(id);
      setCollapse(true);
    };
    const onMouseEnterHandler = () => setHoverOption(i.title);

    return (
      <ListItem
        neededOption={i.title === hoverOption}
        onClick={() => onLiCLickHandler(i.id)}
        key={i.id}
        onMouseEnter={onMouseEnterHandler}
      >
        {i.title}
      </ListItem>
    );
  });

  return (
    <StyledSelect tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Title onClick={onClickTitleHandler}>{selectTitle}</Title>
      {!collapse && (
        <List autoFocus onBlur={onBlurTitleHandler}>
          {mappedItems}
        </List>
      )}
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h3`
  border: 1px solid black;
  border-radius: 10px;

  display: inline-block;

  margin: 0;
  padding: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.2s ease-in-out;
  }
`;

const List = styled.ul`
  border: 1px solid black;
  list-style-type: none;
  margin: 0;
  padding: 5px;
`;

const ListItem = styled.li<{ neededOption: boolean }>`
  text-align: center;

  position: relative;

  padding: 2px;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.2s ease-in-out;
    border-radius: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: black;
    color: black;
    width: 100%;
    height: 1px;
    bottom: -6px;
    transform: translateX(50%);
    right: 50%;
  }

  ${(props) =>
    props.neededOption &&
    css<{ neededOption: boolean }>`
      background-color: rgba(0, 0, 0, 0.15);
    `}
`;
