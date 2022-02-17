import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

export const StyledContainer = styled(Container)`
  height: 100%;
  font-family: sans-serif;
  color: #fca71c;

  .card-title {
    font-weight: 600;
  }

  .btn {
    margin: 0.75rem;
    width: calc(100% - 1.5rem);
  }
`;
