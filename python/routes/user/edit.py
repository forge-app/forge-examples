from forgeapp_sdk.classes.action import Action
from forgeapp_sdk import IO, action_ctx_var


async def edit_user(io: IO):
    ctx = action_ctx_var.get()
    await ctx.log("Hello World!")
