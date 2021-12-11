const Admin = require('../../models/admin');

const deleteAdmin = async (req, res) => {
    const { id } = req.query;
    const accountCheck = await Admin.findOne({ id });
    if(!accountCheck ) return res.status(404).json({ 
        success: false, 
        msg: `Admin dengan id ${id} tidak ada`
    });

    try {
        const admin = await Admin.findOneAndDelete({ id });
        return res.status(200).json({
            success: true,
            msg: `Admin ${admin.name} dengan id ${admin.id} berhasil dihapus`
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
};

module.exports = deleteAdmin;