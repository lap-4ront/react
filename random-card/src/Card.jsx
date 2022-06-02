import styled from "styled-components";

const CardBox = styled.div`
  color: navy;
  font-size: 10rem;
`;

const MAP = new Map([
  ["Two", "🂢"],
  ["Three", "🂣"],
  ["Four", "🂤"],
  ["Five", "🂥"],
  ["Six", "🂦"],
  ["Seven", "🂧"],
  ["Eight", "🂨"],
  ["Nine", "🂩"],
  ["Ten", "🂪"],
  ["Jack", "🂫"],
  ["Queen", "🂭"],
  ["King", "🂮"],
  ["Ace", "🂡"]
]);

function Card({ value }) {
  return <CardBox>{MAP.get(value)}</CardBox>;
}

export { Card };
