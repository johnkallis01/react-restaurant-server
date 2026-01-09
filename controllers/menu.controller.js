import Menu from '../models/Menu.model.js';

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message, message: 'Menus not found' });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMenu = await Menu.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ message: 'Menu updated', menu: updatedMenu });
  } catch (err) {
    res.status(500).json({ message: 'Menu not updated', error: err.message });
  }
};
