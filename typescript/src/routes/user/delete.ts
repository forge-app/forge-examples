import { Action, ctx, io } from "@forgeapp/sdk";
import { users, User, orders } from "../../data";

export default new Action({
  name: "Delete User",
  unlisted: true,
  async handler() {
    const user = users.find((user) => user.id == ctx.params.id) as User;
    const { comments, shouldDelete } = await io.group({
      display: io.display.object("User Profile", { data: user }),
      comments: io.input.text("Comments"),
      shouldDelete: io.input.boolean("Permanently Delete?"),
    });

    await ctx.log(`Deleted user ${user.id}`);

    await ctx.notify({
      message: `User ${user.name} (${user.id}) has been deleted by ${ctx.user.email}. Comments - ${comments}`,
      title: `User deleted${shouldDelete ? " permanently" : ""}`,
      delivery: [{ to: "support@forgeapp.io" }],
    });

    await ctx.redirect({
      route: "user",
    });
  },
});
