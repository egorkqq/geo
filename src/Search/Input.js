import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 3px solid ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.main};
  border-top: none;
  font-size: 24px;
  text-align: center;
  background: url(/assets/search.svg) 20px 20px;
  background-size: 28px;
  background-repeat: no-repeat;
  transition: ${(p) => p.theme.transition};

  &:focus {
    outline: none;
    border: 3px solid ${(p) => p.theme.colors.orange};
    border-top: none;
  }
  &:disabled {
    border: 3px solid ${(p) => p.theme.colors.backgroundSecondary};
    border-top: none;
    cursor: not-allowed;
  }
`;

const Input = ({ disabled, searchTerm, setSearchTerm }) => {
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const clear = () => setSearchTerm('');
  const input = React.useRef(null);

  React.useEffect(() => {
    if (!disabled) {
      input.current.focus();
    }
  }, [disabled]);

  return (
    <InputWrapper>
      <InputField
        ref={input}
        disabled={disabled}
        value={searchTerm}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
