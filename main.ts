import { writeFile } from "fs/promises";
import { render } from "./render.ts";
import { loadUsers } from "./users.ts";

const users = await loadUsers(100);
const html = render(users);
await writeFile('users.html', html);

