import styled from 'styled-components';

interface ToastProps {
  type?: 'success' | 'info' | 'error';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;
