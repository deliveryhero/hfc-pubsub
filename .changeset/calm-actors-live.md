---
'@honestfoodcompany/pubsub': minor
---

1. Allows to make \_timestamp optional
2. Removes double validation of topic names.
3. Use publishJSON instead of buffering the payload.
4. Adds `.toJSON` method to get parsed message/
5. Remove useless getters (like getProjects, getName, getClient) and just use this.projects, this.name, etc directly.
