import { Layout, Page, ctx, io } from "@forgeapp/sdk";
import { environments, Environments } from "../../data";

export default new Page({
  name: "Environment Detail",
  unlisted: true,
  async handler() {
    const order = environments.find(
      (order) => order.id == ctx.params.id,
    ) as Environments;

    return new Layout({
      title: "Environment Details",
      menuItems: [
        {
          label: "Cancel Environment",
          route: "customer-envs/cancel",
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
              label: "Name",
              value: order.name,
            },
          ],
        }),
        io.display.table("Environment Deployments", {
          data: environments.map((env) => ({
            id: env.id,
            run: env.id,
            status: env.FEATURE_FORGE_V1 ? "✅" : "❌",
          })),
        }),
      ],
    });
  },
});
