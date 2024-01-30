import React, { KeyboardEvent, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

export default {
  title: "Select Helps",
};

type CityType = {
  country: string;
  city: string;
  citizens: number;
};

type SelectProps = {
  selectTitle: string;
  onChange: (id: string) => void;
  items: CityType[];
};

// const cities: CityType[] = [
//   { country: "Belarus", city: "Minsk", citizens: 2300000 },
//   { country: "Belarus", city: "Soligorsk", citizens: 150000 },
//   { country: "Russia", city: "Moscow", citizens: 5000000 },
//   { country: "Russia", city: "Orel", citizens: 90000 },
//   { country: "Ukraine", city: "Kiev", citizens: 1500000 },
//   { country: "Ukraine", city: "Jitomir", citizens: 230000 },
// ];

export const SelectHelpsStories = () => {
  const [cities, setCities] = useState<CityType[]>([
    { country: "Belarus", city: "Minsk", citizens: 2300000 },
    { country: "Belarus", city: "Soligorsk", citizens: 150000 },
    { country: "Russia", city: "Moscow", citizens: 5000000 },
    { country: "Russia", city: "Orel", citizens: 90000 },
    { country: "Ukraine", city: "Kiev", citizens: 1500000 },
    { country: "Ukraine", city: "Jitomir", citizens: 230000 },
  ]);
  const [counter, setCounter] = useState(0);
  const [firstSelectTitle, setFirstSelectTitle] = useState<string>(
    "Choose city you want to live",
  );
  const [secondSelectTitle, setSecondSelectTitle] = useState<string>(
    "Choose city you want to live",
  );
  const [thirdSelectTitle, setThirdSelectTitle] = useState<string>(
    "Choose city you want to live",
  );

  const onFirstLiClickCallback = (id: string) => {
    const neededTitle = cities.find((c) => c.country === id);
    if (neededTitle) setFirstSelectTitle(neededTitle.city);
  };
  const onSecondLiClickCallback = (id: string) => {
    const neededTitle = cities.find((c) => c.country === id);
    if (neededTitle) setSecondSelectTitle(neededTitle.city);
  };
  const onThirdLiClickCallback = (id: string) => {
    const neededTitle = cities.find((c) => c.country === id);
    if (neededTitle) setThirdSelectTitle(neededTitle.city);
  };

  const citiesFromBelarus = useMemo(() => {
    console.log("Im here");
    return cities.filter((c) => c.country === "Belarus");
  }, [cities]);
  const citiesHasLetterM = useMemo(
    () => cities.filter((c) => c.city.toLowerCase().indexOf("m") > -1),
    [cities],
  );
  const citiesCitizensMoreThan1M = useMemo(
    () => cities.filter((c) => c.citizens > 1000000),
    [cities],
  );

  const onButtonClickHandler = () => setCounter((prev) => prev + 1);
  const AddCityHandler = () => {
    const newCity = { country: "Belarus", city: "Slutsk", citizens: 200000 };
    setCities([newCity, ...cities]);
  };

  return (
    <>
      <Wrapper>
        <Select
          selectTitle={firstSelectTitle}
          onChange={onFirstLiClickCallback}
          items={citiesFromBelarus}
        />
        <Select
          selectTitle={secondSelectTitle}
          onChange={onSecondLiClickCallback}
          items={citiesHasLetterM}
        />
        <Select
          selectTitle={thirdSelectTitle}
          onChange={onThirdLiClickCallback}
          items={citiesCitizensMoreThan1M}
        />
        <button onClick={AddCityHandler}>Add City</button>
      </Wrapper>
      <span>{counter}</span>
      <button onClick={onButtonClickHandler}>Increment</button>
    </>
  );
};

const SelectMemo: React.FC<SelectProps> = ({
  selectTitle,
  onChange,
  items,
}) => {
  console.log("Select Rendered");

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
        if (hoverOption === items[i].city) {
          const pretendentElement =
            e.key === "ArrowDown" ? items[i + 1] : items[i - 1];

          if (pretendentElement) {
            onChange(pretendentElement.country);
            return;
          }
        }
      }
      if (!selectTitle) onChange(items[0].city);
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setCollapse(false);
    }
  };

  const mappedItems = //useMemo(
    //   () =>
    items.map((i) => {
      const onLiCLickHandler = (id: string) => {
        onChange(id);
        setCollapse(true);
      };
      const onMouseEnterHandler = () => setHoverOption(i.city);

      return (
        <ListItem
          neededOption={i.city === hoverOption}
          onClick={() => onLiCLickHandler(i.country)}
          key={i.country}
          onMouseEnter={onMouseEnterHandler}
        >
          {i.city}
        </ListItem>
      );
    });
  // [cities],
  // );

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

const Select = React.memo(SelectMemo);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

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
