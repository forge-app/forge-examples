import { Action, Layout, Page, ctx, io } from "@forgeapp/sdk";
import { users, User, orders } from "../data";

export default new Page({
  name: "Users",
  handler: async (c) => {
    return new Layout({
      title: "User Dashboard",
      children: [
        io.display.table("Active Users", {
          data: users,
          columns: [
            {
              label: "name",
              renderCell: (row) => ({
                label: row.name,
                route: "user/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "id",
            "email",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Details",
              route: "user/detail",
              params: { id: row.id },
            },
            {
              label: "Edit User",
              route: "user/edit",
              params: { id: row.id },
            },
            {
              label: "Delete User",
              route: "user/delete",
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
      name: "User Detail",
      unlisted: true,
      async handler() {
        const user = users.find((user) => user.id == ctx.params.id) as User;
        return new Layout({
          title: "User Detail",
          menuItems: [
            {
              label: "Delete User",
              route: "user/delete",
              params: {
                productID: user.id,
              },
            },
          ],
          children: [
            io.display.image("Profile Pic", {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg/440px-Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
              width: "small",
            }),
            io.display.metadata("", {
              layout: "grid",
              data: [
                {
                  label: "Name",
                  value: user.name,
                },
                {
                  label: "Email",
                  value: user.email,
                },
                {
                  label: "Address",
                  value: user.address,
                },
              ],
            }),
            io.display.table("Customer Orders", {
              data: orders,
            }),
          ],
        });
      },
    }),
    edit: new Action({
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
    }),
  },
});
