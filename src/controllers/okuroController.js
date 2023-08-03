// [GET] api/customer
const read = async (req, res, next) => {
    try {
        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: "Internal server error" });
    }
};

module.exports = { read };
