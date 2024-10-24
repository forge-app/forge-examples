import { Action, Layout, Page, ctx, io } from "@forgeapp/sdk";
import { Environments, environments } from "../data";

export default new Page({
  name: "Customer Environments",
  handler: async (c) => {
    return new Layout({
      title: "Customer Environments Dashboard",
      children: [
        io.display.table("Customer Feature Flags", {
          data: environments,
          columns: [
            {
              label: "id",
              renderCell: (row) => ({
                label: row.id,
                route: "customer-envs/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "name",
            "FEATURE_DARK_MODE",
            "FEATURE_GRAPHS",
            "FEATURE_FORGE_V1",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Environment Details",
              route: "customer-envs/detail",
              params: { id: row.id },
            },
            {
              label: "Restart Environment",
              route: "customer-envs/restart",
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
    }),
    cancel: new Action({
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
    }),
  },
});
