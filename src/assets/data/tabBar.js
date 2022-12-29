import {
  TAB_FAVOR_ACTIVE_IMG,
  TAB_FAVOR_IMG,
  TAB_HOME_ACTIVE_IMG,
  TAB_HOME_IMG,
  TAB_MESSAGE_IMG,
  TAB_ORDER_ACTIVE_IMG,
  TAB_ORDER_IMG
} from "@/assets/data/imageConstant";

export const TAB_BAR_DATA = [
  {
    text: "首页",
    image: TAB_HOME_IMG,
    imageActive: TAB_HOME_ACTIVE_IMG,
    path: "/home"
  },
  {
    text: "收藏",
    image: TAB_FAVOR_IMG,
    imageActive: TAB_FAVOR_ACTIVE_IMG,
    path: "/favor"
  },
  {
    text: "订单",
    image: TAB_ORDER_IMG,
    imageActive: TAB_ORDER_ACTIVE_IMG,
    path: "/order"
  },
  {
    text: "消息",
    image: TAB_MESSAGE_IMG,
    imageActive: TAB_MESSAGE_IMG,
    path: "/message"
  }
]
