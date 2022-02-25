import styled from "@emotion/styled";
import { Card } from "react-bootstrap";

export const StyledCard = styled(Card)`
  max-width: 400px;
  width: 180px;
  height: 100%;

  .card-text {
    text-align: justify;
    text-justify: inter-word;
  }
`;
