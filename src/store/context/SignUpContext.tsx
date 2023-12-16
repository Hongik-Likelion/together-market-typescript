import {
  SIGN_UP_REDUCER_ACTION_TYPE,
  SignUpStateType,
  SignUpType,
  initSignUpState,
  signUpReducer,
} from "@store/reducer/SignUpReducer";
import { ReactElement, ReactNode, createContext, useReducer } from "react";

const useSignUpContext = (initState: SignUpStateType) => {
  const [state, dispatch] = useReducer(signUpReducer, initState);

  const handleSignUpType = (signUpType: SignUpType) =>
    dispatch({
      type: SIGN_UP_REDUCER_ACTION_TYPE.CHANGE_SIGN_UP_TYPE,
      value: signUpType,
    });

  return { state, handleSignUpType };
};

type UseSignUpContextType = ReturnType<typeof useSignUpContext>;

const initContextState: UseSignUpContextType = {
  state: initSignUpState,
  handleSignUpType: (signUpType: SignUpType) => {},
};

export const SignUpContext =
  createContext<UseSignUpContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const SignUpProvider = ({
  children,
  ...initSignUpState
}: ChildrenType & SignUpStateType): ReactNode => {
  return (
    <SignUpContext.Provider value={useSignUpContext(initSignUpState)}>
      {children}
    </SignUpContext.Provider>
  );
};
