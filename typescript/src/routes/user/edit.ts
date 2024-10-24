import { Action, ctx, io } from "@forgeapp/sdk";
import { users, User, orders } from "../../data";

export default new Action({
  name: "Edit User",
  unlisted: true,
  async handler() {
    const user = users.find((user) => user.id == ctx.params.id) as User;
    const [name, description, order, subscription] = await io.group([
      io.input.text("Name", {
        defaultValue: user.name,
      }),
      io.input.email("Email", {
        defaultValue: user.email,
      }),
      io.input.text("Address", {
        defaultValue: user.address,
        multiline: true,
        lines: 3,
      }),
      io.select.single("subscription", {
        options: ["free", "paid", "enterprise"],
        defaultValue: orders[0].plan,
      }),
    ]);

    await ctx.log(`Updated user ${user.id}`);

    await ctx.notify({
      message: `User ${user.name} (${user.id}) has been updated by ${ctx.user.email}`,
      title: "User updated",
      delivery: [{ to: "support@forgeapp.io" }],
    });

    await ctx.redirect({
      route: "user",
    });
  },
});
