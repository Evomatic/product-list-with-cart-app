import styled from "styled-components";

const CustomButton = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => <button className={className}>{children}</button>;

export const Button = styled(CustomButton)`
  background-color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.typography.preset3.fontfamily};
  font-size: ${(props) => props.theme.typography.preset3.fontSize};
  font-family: ${(props) => props.theme.typography.preset3.fontWeight};
  line-height: ${(props) => props.theme.typography.preset3.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.preset3.letterSpacing};

  color: white;
  border: 0;
  min-width: 138px;
  min-height: 53px;
  border-radius: calc(infinity * 1px);
  cursor: pointer;

  &:hover {
    background-color: #952c0b;
  }
`;
