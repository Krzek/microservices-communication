import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";

export async function createInitialData() {

    try {
        await User.sync({ force: true });

        let password = await bcrypt.hash('123456', 10);

        let firstUser = await User.create({
            name: 'Test User',
            email: 'testuser@gmail.com',
            password: password
        });
    } catch (err) {
        console.log(err)
    }
}