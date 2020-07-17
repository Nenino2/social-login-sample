import { RequestHandler } from 'express';
import { OAuth2Client } from 'google-auth-library'

const CLIENT_ID = "918675243980-01br28kgjbn0i3ncluhti7u6mh3eaje8.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

async function getGoogleUserId(token: string) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const user = ticket.getPayload();
    if (!user) throw new Error('No user found')
    const userId = user.sub;
    const userEmail = user.email;
    const userName = user.name;
    return { userId, userEmail, userName };
}

export const googleLogin: RequestHandler = async (req, res) => {
    const token = req.query.token as string;
    const data = await getGoogleUserId(token)

    res.json({ alive: true, data })
}