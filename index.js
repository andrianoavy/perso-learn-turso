import dotenv from "dotenv";
import { createClient } from "@libsql/client";

dotenv.config();

console.log("Client local!!!");

const client_local = createClient({
	url:process.env.LOCAL_DB_URL,
	// authToken:"my-token",
});

try {
    const rs = await client_local.execute("select * from example_users");
    // rs.columns == [ 'uid', 'email' ]
    // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
    // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
	console.log(rs);
} catch (e) {
    console.error(e);
}

console.log("\nClient distant!!!");
const client_turso = createClient({
	url:process.env.TURSO_DB_URL,
	authToken:process.env.TURSO_DB_TOKEN,
});

try {
    const rs = await client_turso.execute("select * from example_users");
    // rs.columns == [ 'uid', 'email' ]
    // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
    // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
	console.log(rs);
} catch (e) {
    console.error(e);
}

