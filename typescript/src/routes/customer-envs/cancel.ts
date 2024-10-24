import { Action, ctx, io } from "@forgeapp/sdk";
import { environments, Environments } from "../../data";

export default new Action({
  name: "Restart Environment",
  unlisted: true,
  async handler() {
    const order = environments.find(
      (order) => order.id == ctx.params.id,
    ) as Environments;

    const { comments, file } = await io.group({
      comments: io.input.text("Comments"),
      file: io.input.file("Attachments"),
    });

    await ctx.loading.start();

    await ctx.redirect({
      route: "customer-envs",
    });
  },
});
