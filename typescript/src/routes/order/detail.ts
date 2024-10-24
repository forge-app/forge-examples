import { Layout, Page, ctx, io } from "@forgeapp/sdk";
import { orders, Order } from "../../data";

export default new Page({
  name: "Order Detail",
  unlisted: true,
  async handler() {
    const order = orders.find((order) => order.id == ctx.params.id) as Order;
    return new Layout({
      title: "Order Details",
      menuItems: [
        {
          label: "Cancel Order",
          route: "order/cancel",
          params: {
            productID: order.id,
          },
        },
      ],
      children: [
        io.display.metadata("", {
          layout: "grid",
          data: [
            {
              label: "Id",
              value: order.id,
            },
            {
              label: "Plan",
              value: order.plan,
            },
            {
              label: "Purchase Date",
              value: order.purchaseDate,
            },
          ],
        }),
        io.display.table("Related Customer Orders", {
          data: orders,
        }),
      ],
    });
  },
});
