type SignUpType = "customer" | "owner" | "";

type CommonSignUpRequestType = {
  email: string;
  nickname: string; // owner's nickname should be his store name
  isOwner: boolean;
};

type FavoriteMarketType = {
  favoriteMarketIds: number[];
};

type ShopRegisteringType = {
  marketId: number;
  shopName: string;
  shopAddress: string;
  sellingProducts: string;
  openingTime: string;
  openingFrequency: string;
  productCategories: number[];
};

type SignUpRequestType = {
  common: CommonSignUpRequestType;
  customer: CustomerSignUpType;
  owner: OwnerSignUpType;
};

type CustomerSignUpType = FavoriteMarketType;

type OwnerSignUpType = ShopRegisteringType;

type SignUpStateType = {
  signUpType: SignUpType;
  request: SignUpRequestType;
};

const initSignUpState: SignUpStateType = {
  signUpType: "",
  request: {
    common: {
      email: "",
      nickname: "",
      isOwner: false,
    },
    owner: {
      marketId: -1,
      shopName: "",
      shopAddress: "",
      sellingProducts: "",
      openingTime: "",
      openingFrequency: "",
      productCategories: [],
    },
    customer: {
      favoriteMarketIds: [],
    },
  },
};

const enum SIGN_UP_REDUCER_ACTION_TYPE {
  CHANGE_SIGN_UP_TYPE,
}

type ReducerAction = {
  type: SIGN_UP_REDUCER_ACTION_TYPE;
  value: string & SignUpType;
};

const signUpReducer = (
  state: typeof initSignUpState,
  action: ReducerAction
): typeof initSignUpState => {
  switch (action.type) {
    case SIGN_UP_REDUCER_ACTION_TYPE.CHANGE_SIGN_UP_TYPE:
      return {
        ...state,
        signUpType: action.value,
      };

    default:
      throw new Error();
  }
};

export { SignUpType, SignUpStateType, SIGN_UP_REDUCER_ACTION_TYPE };

export { signUpReducer, initSignUpState };
