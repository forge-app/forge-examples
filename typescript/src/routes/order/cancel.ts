import { Action, ctx, io } from "@forgeapp/sdk";
import { orders, Order } from "../../data";

export default new Action({
  name: "Cancel order",
  unlisted: true,
  async handler() {
    const order = orders.find((order) => order.id == ctx.params.id) as Order;

    const { comments, refund } = await io.group({
      comments: io.input.text("Comments", {
        defaultValue: order.id,
      }),
      refund: io.input.boolean("Refund?", {
        defaultValue: false,
      }),
    });

    await ctx.loading.start();

    await ctx.notify({
      message: `Order ${order.id} has been deleted by ${ctx.user.email}. Comments - ${comments}`,
      title: `Order ${refund ? "refunded" : "cancelled"}`,
      delivery: [{ to: "support@forgeapp.io" }],
    });

    await ctx.redirect({
      route: "order",
    });
  },
});
