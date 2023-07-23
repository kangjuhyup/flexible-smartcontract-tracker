import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`

  
`;


export function App() {
  return (
    <StyledApp>
      <NxWelcome title="tracker-client" />
    </StyledApp>
  );
}

export default App;
