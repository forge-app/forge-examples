import { Action, Layout, Page, ctx, io } from "@forgeapp/sdk";
import { Order, orders } from "../data";

export default new Page({
  name: "Orders",
  handler: async (c) => {
    return new Layout({
      title: "Order Dashboard",
      children: [
        io.display.table("Weekly Orders", {
          data: orders,
          columns: [
            {
              label: "name",
              renderCell: (row) => ({
                label: row.id,
                route: "order/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "plan",
            "price",
            "purchaseDate",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Details",
              route: "order/detail",
              params: { id: row.id },
            },
            {
              label: "Cancel Order",
              route: "order/cancel",
              params: { id: row.id },
              theme: "danger",
            },
          ],
          isSortable: true,
          isFilterable: false,
        }),
      ],
    });
  },
  routes: {
    detail: new Page({
      name: "Order Detail",
      unlisted: true,
      async handler() {
        const order = orders.find(
          (order) => order.id == ctx.params.id,
        ) as Order;
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
    }),
    cancel: new Action({
      name: "Cancel order",
      unlisted: true,
      async handler() {
        const order = orders.find(
          (order) => order.id == ctx.params.id,
        ) as Order;
        const { comments, refund } = await io.group({
          comments: io.input.text("Comments", {
            defaultValue: order.id,
          }),
          refund: io.input.boolean("Refund?", {
            defaultValue: false,
          }),
        });

        await ctx.loading.start();

        await ctx.redirect({
          route: "order",
        });
      },
    }),
  },
});
