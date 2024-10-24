import { Layout, Page, ctx, io } from "@forgeapp/sdk";
import { users, User, orders } from "../../data";

export default new Page({
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
            id: user.id,
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
});
