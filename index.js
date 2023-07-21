import { createClient } from "@libsql/client";

console.log("Hello via pnpm!");

const client = createClient({
	url:"file:/home/abraham/learn/perso-learn-turso/test.db",
	// authToken:"my-token",
});

try {
    const rs = await client.execute("select * from example_users");
    // rs.columns == [ 'uid', 'email' ]
    // rs.rows[0] == [ 'uid1', 'foo@bar.com' ]
    // rs.rows[1] == [ 'uid2', 'baz@bar.com' ]
	console.log(rs);
} catch (e) {
    console.error(e);
}
