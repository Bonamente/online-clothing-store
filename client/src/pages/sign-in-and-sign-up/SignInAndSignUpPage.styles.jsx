import styled from 'styled-components';

const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    width: unset;
    /* padding: 0 10px; */

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
export default SignInAndSignUpContainer;
