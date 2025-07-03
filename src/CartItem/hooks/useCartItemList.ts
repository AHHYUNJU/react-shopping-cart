import { useReducer } from "react";
import { useCartItemActions } from "../context/CartItemActionContext";
import { useErrorContext } from "@/shared/context/ErrorContext";
import { useCartItemState } from "../context/CartItemStateContext";

const INIT_STATE = {
  isLoading: false,
  isFetching: false,
  isSuccess: false,
  isFail: false,
};

const ACTION_TYPE = {
  FETCH_LOADING: "FETCH_LOADING",
  FETCH_FETCHING: "FETCH_FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAIL: "FETCH_FAIL",
};

const reducer = (state: typeof INIT_STATE, action: { type: string }) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_LOADING:
      return {
        isLoading: true,
        isFetching: false,
        isSuccess: false,
        isFail: false,
      };
    case ACTION_TYPE.FETCH_FETCHING:
      return {
        isLoading: false,
        isFetching: true,
        isSuccess: false,
        isFail: false,
      };
    case ACTION_TYPE.FETCH_SUCCESS:
      return {
        isLoading: false,
        isFetching: false,
        isSuccess: true,
        isFail: false,
      };
    case ACTION_TYPE.FETCH_FAIL:
      return {
        isLoading: false,
        isFetching: false,
        isSuccess: false,
        isFail: true,
      };
    default:
      return state;
  }
};

const useCartItemList = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const { cartItemList, updateCartItemQuantity, removeCartItem } =
  //   useCartItemContext();
  const { cartItemList } = useCartItemState();
  const { updateCartItemQuantity, removeCartItem } = useCartItemActions();
  const { handleErrorMessage } = useErrorContext();

  const patchCartItem = async (id: number, quantity: number) => {
    if (cartItemList.length >= 50) {
      handleErrorMessage("장바구니에는 최대 50개까지만 담을 수 있습니다.");
      return;
    }

    try {
      dispatch({ type: ACTION_TYPE.FETCH_FETCHING });
      await updateCartItemQuantity(id, quantity);
      dispatch({ type: ACTION_TYPE.FETCH_SUCCESS });
    } catch {
      dispatch({ type: ACTION_TYPE.FETCH_FAIL });
      handleErrorMessage("장바구니의 수량을 변경하는데 실패했습니다.");
    }
  };

  const deleteCartItem = async (id: number) => {
    try {
      dispatch({ type: ACTION_TYPE.FETCH_FETCHING });
      await removeCartItem(id);
      dispatch({ type: ACTION_TYPE.FETCH_SUCCESS });
    } catch {
      dispatch({ type: ACTION_TYPE.FETCH_FAIL });
      handleErrorMessage("장바구니 상품을 삭제하지 못했습니다.");
    }
  };

  return {
    state,
    cartItemList,
    patchCartItem,
    deleteCartItem,
  };
};

export default useCartItemList;
