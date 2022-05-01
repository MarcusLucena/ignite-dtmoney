import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`

export const SummaryItemContainer = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  
  &.entries {
    background: var(--green);
    color: #fff;
  }
`

export const SummaryHeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryValueItem = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`