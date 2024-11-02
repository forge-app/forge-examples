from forgeapp_sdk import Forge
from routes.user import user_page

# Initialize Forge
forge = Forge(
    api_key="API_KEY",
    endpoint="wss://APP_URL/websocket",
)

forge.routes.add("User", user_page)

forge.listen()
