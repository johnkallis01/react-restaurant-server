import { updateMenu } from '../../../controllers/menu.controller.js';
import { verifyAdmin } from '../../../middleware/auth.js';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    await verifyAdmin(req, res, async () => {
      await updateMenu(req, res);
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}