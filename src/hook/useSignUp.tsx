import { SignUpContext } from "@store/context/SignUpContext";
import { SignUpType } from "@store/reducer/SignUpReducer";
import { useContext } from "react";

type UseSignUpHookType = {
  signUpType: SignUpType;
  handleSignUpType: (signUpType: SignUpType) => void;
};

export const useSignUp = (): UseSignUpHookType => {
  const {
    state: { signUpType },
    handleSignUpType,
  } = useContext(SignUpContext);

  return { signUpType, handleSignUpType };
};
