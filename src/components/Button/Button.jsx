import { StyledBTN } from './Button.styled';

export default function LoadMoreBTN({ onClick }) {
  return (
    <StyledBTN type="button" onClick={onClick}>
      Load more...
    </StyledBTN>
  );
}
