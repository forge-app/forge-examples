from forgeapp_sdk import Forge
from routes.user import user_page
from routes.user.detail import user_detail_page
import os
from data import users, User


# Initialize Forge
forge = Forge(
    api_key="admin_dev_kcLjzxNFxmGLf0aKtLVhuckt6sziQJtxFOdtM19tBrMUp5mj",
    endpoint="ws://localhost:3000/websocket",
)

forge.routes.add("User", user_page)

# adding this breaks dashboard for some reason
forge.routes.add("user/detail/{user.id}", user_detail_page)

forge.listen()
